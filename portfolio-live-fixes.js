(() => {
  const injectLiveFixStyles = () => {
    if (document.getElementById('portfolio-live-fix-styles')) return;

    const style = document.createElement('style');
    style.id = 'portfolio-live-fix-styles';
    style.textContent = `
      .hero-ticker {
        overflow: visible;
      }

      .ticker-track {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px;
        animation: none !important;
        transform: none !important;
      }

      .ticker-set {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding-right: 0;
      }

      .ticker-set[aria-hidden="true"] {
        display: none;
      }

      .item-card[data-clickable-card="true"] {
        cursor: pointer;
      }

      .item-card[data-clickable-card="true"]:hover,
      .item-card[data-clickable-card="true"]:focus-within {
        border-color: rgba(180, 167, 229, 0.46);
      }

      .item-card[data-clickable-card="true"] .project-details-trigger,
      .item-card[data-clickable-card="true"] [data-detail-trigger="true"] {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0 0 0 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      .item-card[data-project-id="besp2074"] img,
      .item-card[data-project-id="besp2074"] .project-preview img,
      .item-card[data-project-id="besp2074"] .item-preview img {
        object-fit: contain !important;
        background: #10263a;
      }

      .item-card[data-project-id="besp2074"] img,
      .item-card img[data-openable-preview="true"],
      .modal-preview,
      .modal-preview img {
        cursor: zoom-in;
      }

      .modal-preview img {
        object-fit: contain !important;
      }

      .practice-projects {
        min-height: auto;
        padding-top: clamp(28px, 4vw, 52px);
      }

      .practice-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 14px;
      }

      .practice-card {
        border: 1px solid var(--line);
        background: var(--surface);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow);
        padding: 18px;
        display: grid;
        gap: 12px;
      }

      .practice-card-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }

      .practice-card h3 {
        font-size: 1.12rem;
      }

      .practice-card p,
      .practice-card li {
        color: var(--muted);
        line-height: 1.58;
      }

      .practice-badge {
        border: 1px solid rgba(185, 174, 220, 0.18);
        background: rgba(141, 108, 255, 0.14);
        border-radius: 999px;
        color: var(--text);
        font-size: 0.76rem;
        font-weight: 800;
        padding: 6px 9px;
        white-space: nowrap;
      }

      .practice-list {
        display: grid;
        gap: 7px;
        list-style: disc;
        padding-left: 18px;
      }

      .temporary-project-link {
        opacity: 0.68;
        filter: grayscale(0.35);
      }

      .temporary-project-link::after {
        content: "temporär";
        margin-left: auto;
        border: 1px solid rgba(185, 174, 220, 0.18);
        border-radius: 999px;
        padding: 3px 8px;
        color: var(--muted);
        font-size: 0.72rem;
        font-weight: 700;
      }

      .legal-details {
        margin-top: 14px;
        display: grid;
        gap: 10px;
      }

      .legal-details details {
        border: 1px solid var(--line);
        background: var(--surface);
        border-radius: var(--radius-md);
        padding: 12px 14px;
      }

      .legal-details summary {
        cursor: pointer;
        color: var(--text);
        font-weight: 800;
      }

      .legal-details p,
      .legal-details li {
        color: var(--muted);
        line-height: 1.58;
      }

      .legal-details-content {
        display: grid;
        gap: 8px;
        padding-top: 10px;
      }
    `;
    document.head.appendChild(style);
  };

  const getCardTitle = (card) => card.querySelector('h3')?.textContent?.trim() || '';

  const findDetailsButton = (card) => [...card.querySelectorAll('button, a')].find((element) => {
    const text = element.textContent?.trim().toLowerCase() || '';
    return text.includes('details anzeigen') || text.includes('show details');
  });

  const patchProjectCards = () => {
    const projectList = document.querySelector('#projects-grid');
    const cards = [...document.querySelectorAll('.item-card')];

    for (const card of cards) {
      const heading = getCardTitle(card);

      if (heading === 'FolioLint' && projectList && projectList.firstElementChild !== card) {
        projectList.prepend(card);
      }

      if (heading === 'SortLab' && !card.textContent.includes('GitHub Pages')) {
        const tagHost = [...card.querySelectorAll('span')].find((span) => span.textContent.trim() === 'Algorithmen')?.parentElement;
        if (tagHost) {
          const tag = document.createElement('span');
          tag.textContent = 'GitHub Pages';
          tagHost.appendChild(tag);
        }
      }

      if (heading.includes('VSW')) {
        for (const span of card.querySelectorAll('span')) {
          if (span.textContent.trim() === 'gemeinsam') {
            span.textContent = 'Gemeinsam';
          }
        }
      }

      if (heading === 'BESP2074') {
        card.dataset.projectId = 'besp2074';
      }

      const detailsButton = findDetailsButton(card);
      if (detailsButton) {
        detailsButton.classList.add('project-details-trigger');
        detailsButton.dataset.detailTrigger = 'true';
        card.dataset.clickableCard = 'true';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${heading || 'Projekt'} öffnen`);

        if (!card.dataset.clickHandlerAttached) {
          card.dataset.clickHandlerAttached = 'true';
          card.addEventListener('click', (event) => {
            if (event.target.closest('a:not([data-detail-trigger="true"]), button:not([data-detail-trigger="true"]), img[data-openable-preview="true"]')) {
              return;
            }
            detailsButton.click();
          });
          card.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            detailsButton.click();
          });
        }
      }

      for (const image of card.querySelectorAll('img')) {
        image.dataset.openablePreview = 'true';
        if (!image.dataset.openHandlerAttached) {
          image.dataset.openHandlerAttached = 'true';
          image.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const src = image.currentSrc || image.src;
            if (src) window.open(src, '_blank', 'noopener,noreferrer');
          });
        }
      }
    }
  };

  const getOpenableModalImageUrl = (element) => {
    const img = element.closest('img') || element.querySelector?.('img');
    if (img?.currentSrc || img?.src) return img.currentSrc || img.src;

    const style = window.getComputedStyle(element);
    const match = style.backgroundImage.match(/url\(["']?(.*?)["']?\)/);
    return match?.[1] || '';
  };

  const patchModalPreview = () => {
    const modalPreview = document.querySelector('.modal-preview');
    if (!modalPreview || modalPreview.dataset.openHandlerAttached) return;

    modalPreview.dataset.openHandlerAttached = 'true';
    modalPreview.addEventListener('click', (event) => {
      const imageUrl = getOpenableModalImageUrl(modalPreview);
      if (!imageUrl || imageUrl === 'none') return;
      event.preventDefault();
      event.stopPropagation();
      window.open(imageUrl, '_blank', 'noopener,noreferrer');
    });
  };

  const addPracticeProjectsSection = () => {
    if (document.querySelector('[data-section="practice-projects"]')) return;

    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;

    const section = document.createElement('section');
    section.className = 'practice-projects section';
    section.dataset.section = 'practice-projects';
    section.setAttribute('aria-labelledby', 'practice-projects-title');
    section.innerHTML = `
      <div class="container">
        <div class="section-head reveal">
          <p class="kicker">Praxis</p>
          <h2 id="practice-projects-title">Praxis- und Kundenprojekte</h2>
          <p class="section-subline">
            Reale Gespräche, Präsentationen und Projektarbeit ausserhalb normaler Übungsaufgaben.
          </p>
        </div>

        <div class="practice-grid reveal">
          <article class="practice-card">
            <div class="practice-card-head">
              <div>
                <p class="kicker">Kundenprojekt</p>
                <h3>AargoClean GmbH Website</h3>
              </div>
              <span class="practice-badge">in Arbeit</span>
            </div>
            <p>
              Firmenwebsite für ein lokales Reinigungsunternehmen. Der aktuelle Fokus liegt auf Kundengespräch,
              Anforderungen, Prototyping, statischer Umsetzung sowie Hosting- und Domain-Abklärung.
            </p>
            <ul class="practice-list">
              <li>erstes Kundengespräch und Anforderungsaufnahme</li>
              <li>geplanter Prototyp für Struktur, Inhalte und Kontaktführung</li>
              <li>Vorbereitung von Deployment, Domain und DNS ohne Mail-Setup zu beschädigen</li>
            </ul>
          </article>

          <article class="practice-card">
            <div class="practice-card-head">
              <div>
                <p class="kicker">Teamprojekt</p>
                <h3>Heimatschutz-Projekt</h3>
              </div>
              <span class="practice-badge">2026 · 2. Platz</span>
            </div>
            <p>
              Unser Team wurde im Rahmen eines Aargauer Heimatschutz-Projekts besucht und konnte seine Lösung präsentieren.
              Wir erreichten den 2. Platz und sammelten praktische Erfahrung mit echten Stakeholdern, Feedback und Weiterentwicklung einer Lösung.
            </p>
            <ul class="practice-list">
              <li>Präsentation vor externen Projektbeteiligten</li>
              <li>Feedback aus einem realen Anwendungskontext</li>
              <li>Weiterdenken der Lösung für mögliche Organisationen in anderen Kantonen</li>
            </ul>
          </article>
        </div>
      </div>
    `;

    portfolioSection.insertAdjacentElement('afterend', section);
  };

  const addTemporaryMoreProjects = () => {
    if (document.querySelector('[data-temp-project="aargoclean"]')) return;

    const headings = [...document.querySelectorAll('h2, h3')];
    const moreHeading = headings.find((heading) => /weitere projekte/i.test(heading.textContent || ''));
    if (!moreHeading) return;

    const container = moreHeading.closest('article, aside, section, div');
    if (!container) return;

    const links = [...container.querySelectorAll('a')];
    const targetParent = links.at(-1)?.parentElement || container;

    const createTempProject = (id, title) => {
      const template = links.at(-1);
      const item = template ? document.createElement(template.tagName.toLowerCase()) : document.createElement('span');
      item.className = `${template?.className || 'project-link'} temporary-project-link`.trim();
      item.dataset.tempProject = id;
      item.setAttribute('aria-disabled', 'true');
      item.removeAttribute('href');
      item.textContent = title;
      return item;
    };

    targetParent.appendChild(createTempProject('aargoclean', 'AargoClean GmbH Website'));
    targetParent.appendChild(createTempProject('heimatschutz', 'Heimatschutz-Projekt'));
  };

  const addLegalDetails = () => {
    if (document.querySelector('[data-legal-details="expanded"]')) return;

    const legalGrid = document.querySelector('.legal-grid');
    if (!legalGrid) return;

    const details = document.createElement('div');
    details.className = 'legal-details';
    details.dataset.legalDetails = 'expanded';
    details.innerHTML = `
      <details>
        <summary>Impressum lesen</summary>
        <div class="legal-details-content">
          <p>Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolic und dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten.</p>
          <p>Kontakt erfolgt über die im Kontaktbereich angegebenen E-Mail-Adressen. Es gibt kein Kontaktformular und keine direkte Dateneingabe auf der Seite.</p>
        </div>
      </details>
      <details>
        <summary>Datenschutz lesen</summary>
        <div class="legal-details-content">
          <p>Die Website setzt keine Analytics, keine Werbetracker und keine externen Tracking-Skripte ein. Beim Aufruf können durch den Hoster technisch notwendige Zugriffsdaten verarbeitet werden.</p>
          <p>Projektbilder, Zertifikate und die GitHub-Grafik werden lokal ausgeliefert. Externe Dienste werden erst geöffnet, wenn ein externer Link aktiv angeklickt wird.</p>
        </div>
      </details>
      <details>
        <summary>Cookies lesen</summary>
        <div class="legal-details-content">
          <p>Es werden keine Tracking-Cookies gesetzt. Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung beim nächsten Besuch erhalten bleibt.</p>
          <p>Diese lokale Speicherung dient nur der Bedienbarkeit der Website und nicht der Verfolgung oder Analyse von Besuchern.</p>
        </div>
      </details>
    `;

    legalGrid.insertAdjacentElement('afterend', details);
  };

  const runPatches = () => {
    injectLiveFixStyles();
    patchProjectCards();
    patchModalPreview();
    addPracticeProjectsSection();
    addTemporaryMoreProjects();
    addLegalDetails();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPatches, { once: true });
  } else {
    runPatches();
  }

  const observer = new MutationObserver(runPatches);
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('load', runPatches, { once: true });
})();
