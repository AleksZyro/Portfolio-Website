(() => {
  const STYLE_ID = 'portfolio-final-fix-styles';

  const injectStyles = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /* Do not leave project/certificate cards visually selected after closing the modal. */
      .item-card:focus:not(:focus-visible),
      .item-card.is-modal-return-focus,
      .item-card[data-modal-return-focus="true"] {
        outline: none !important;
        border-color: var(--line) !important;
        box-shadow: var(--shadow) !important;
      }

      .item-card[data-clickable-card="true"]:focus:not(:focus-visible),
      .item-card[data-clickable-card="true"].is-modal-return-focus,
      .item-card[data-clickable-card="true"][data-modal-return-focus="true"] {
        outline: none !important;
        border-color: var(--line) !important;
        box-shadow: var(--shadow) !important;
      }

      /* Certificates as a real standalone section, not just an appendix inside projects. */
      .certificates-section {
        min-height: auto;
        padding-top: clamp(64px, 8vw, 116px);
        padding-bottom: clamp(54px, 7vw, 96px);
      }

      .certificates-section .certificate-block {
        margin-top: 0 !important;
      }

      .certificates-section .certificate-head {
        margin-bottom: 22px;
      }

      .certificates-section .certificate-head h3 {
        font-size: clamp(2.1rem, 5vw, 4rem);
        line-height: 0.98;
        letter-spacing: -0.045em;
      }

      .certificates-section .certificate-head::before {
        content: "Nachweise";
        display: block;
        color: var(--accent-2);
        font-size: 0.78rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 9px;
        text-shadow: 0 0 18px rgba(180, 167, 229, 0.18);
      }

      html[lang="en"] .certificates-section .certificate-head::before { content: "Credentials"; }
      html[lang="fr"] .certificates-section .certificate-head::before { content: "Certificats"; }
      html[lang="sr"] .certificates-section .certificate-head::before { content: "Sertifikati"; }
      html[lang="sr-cyrl"] .certificates-section .certificate-head::before { content: "Сертификати"; }
    `;

    document.head.appendChild(style);
  };

  const blurModalReturnFocus = () => {
    const active = document.activeElement;
    if (active && active !== document.body && typeof active.blur === 'function') {
      active.blur();
    }

    document.querySelectorAll('.item-card, [data-clickable-card="true"]').forEach((card) => {
      card.blur?.();
      card.classList.remove('is-modal-return-focus', 'is-active', 'active');
      card.dataset.modalReturnFocus = 'false';
      card.removeAttribute('aria-pressed');
    });
  };

  const installModalFocusFix = () => {
    const modal = document.getElementById('detail-modal');
    const closeButton = document.getElementById('modal-close');
    if (!modal || modal.dataset.finalFocusFix === 'true') return;

    modal.dataset.finalFocusFix = 'true';
    modal.addEventListener('close', () => {
      window.setTimeout(blurModalReturnFocus, 0);
      window.setTimeout(blurModalReturnFocus, 80);
    });

    closeButton?.addEventListener('click', () => {
      window.setTimeout(blurModalReturnFocus, 0);
      window.setTimeout(blurModalReturnFocus, 80);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      window.setTimeout(blurModalReturnFocus, 0);
      window.setTimeout(blurModalReturnFocus, 80);
    });
  };

  const moveCertificatesToOwnSection = () => {
    const certificateBlock = document.querySelector('.certificate-block');
    const portfolioSection = document.getElementById('portfolio');
    if (!certificateBlock || !portfolioSection) return;

    let section = document.querySelector('.certificates-section');
    if (!section) {
      section = document.createElement('section');
      section.className = 'certificates-section section';
      section.id = 'certificates';
      section.setAttribute('aria-labelledby', 'certificates-title');
      section.innerHTML = '<div class="container" id="certificates-container"></div>';
      portfolioSection.insertAdjacentElement('afterend', section);
    }

    const container = section.querySelector('#certificates-container') || section.querySelector('.container');
    if (!container || certificateBlock.closest('.certificates-section')) return;

    container.appendChild(certificateBlock);

    const title = certificateBlock.querySelector('h3');
    if (title) {
      title.id = 'certificates-title';
      title.setAttribute('data-i18n', 'portfolio.certificatesTitle');
    }
  };

  const run = () => {
    injectStyles();
    installModalFocusFix();
    moveCertificatesToOwnSection();
    blurModalReturnFocus();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  window.addEventListener('load', run, { once: true });
  window.setTimeout(run, 150);
  window.setTimeout(run, 600);
})();
