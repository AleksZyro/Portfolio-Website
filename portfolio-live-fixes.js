(() => {
  const translations = {
    de: {
      kicker: 'Aktuell',
      title: 'Currently working on',
      subline: 'Laufende Praxisprojekte mit echten Anforderungen, Feedback und Weiterentwicklung.',
      clientType: 'Kundenprojekt',
      teamType: 'Teamprojekt',
      inProgress: 'in Arbeit',
      followUp: 'Weiterentwicklung',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Firmenwebsite für ein lokales Reinigungsunternehmen. Fokus: Kundengespräch, Anforderungen, Prototyping, statische Umsetzung sowie Hosting- und Domain-Abklärung.',
      aargoPoints: ['Kundengespräch und Anforderungsaufnahme', 'Prototyp für Struktur, Inhalte und Kontaktführung', 'Deployment-/Domain-Abklärung ohne bestehendes Mail-Setup zu beschädigen'],
      heimTitle: 'Heimatschutz-Projekt',
      heimText: 'Teamprojekt mit Besuch durch ein Aargauer Heimatschutz-Projekt. Unsere Lösung erreichte den 2. Platz; aktuell wird geprüft, wie die Lösung für Organisationen in anderen Kantonen weitergedacht werden kann.',
      heimPoints: ['Präsentation vor externen Projektbeteiligten', 'Feedback aus einem realen Anwendungskontext', 'Weiterentwicklung für mögliche neue Stakeholder'],
      contactText: 'Für eine Praktikumsstelle 2027/2028 in der Schweiz, Rückfragen oder Zusammenarbeit bin ich per E-Mail erreichbar.',
      contactLabel: 'E-Mail'
    },
    en: {
      kicker: 'Current work',
      title: 'Currently working on',
      subline: 'Ongoing practical projects with real requirements, feedback and iteration.',
      clientType: 'Client project',
      teamType: 'Team project',
      inProgress: 'in progress',
      followUp: 'follow-up',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Company website for a local cleaning business. Focus: client discussion, requirements, prototyping, static implementation and hosting/domain coordination.',
      aargoPoints: ['Client discussion and requirements clarification', 'Prototype for structure, content and contact flow', 'Deployment/domain preparation without breaking the existing mail setup'],
      heimTitle: 'Heritage protection project',
      heimText: 'Team project visited by an Aargau heritage-protection project. Our solution reached 2nd place; the next step is exploring how the solution could be adapted for organizations in other cantons.',
      heimPoints: ['Presentation to external project stakeholders', 'Feedback from a real application context', 'Further development for possible new stakeholders'],
      contactText: 'For a 2027/2028 internship in Switzerland, questions or collaboration, I am reachable by email.',
      contactLabel: 'Email'
    },
    fr: {
      kicker: 'En cours',
      title: 'Projets actuels',
      subline: 'Projets pratiques en cours avec exigences réelles, retours et itérations.',
      clientType: 'Projet client',
      teamType: 'Projet d’équipe',
      inProgress: 'en cours',
      followUp: 'suite',
      aargoTitle: 'Site web AargoClean GmbH',
      aargoText: 'Site web d’entreprise pour une société locale de nettoyage. Focus: échange client, exigences, prototype, réalisation statique et coordination hébergement/domaine.',
      aargoPoints: ['Échange client et clarification des exigences', 'Prototype pour structure, contenu et contact', 'Préparation déploiement/domaine sans perturber la messagerie existante'],
      heimTitle: 'Projet de protection du patrimoine',
      heimText: 'Projet d’équipe visité par un projet argovien de protection du patrimoine. Notre solution a obtenu la 2e place; l’étape suivante est d’étudier une adaptation pour d’autres cantons.',
      heimPoints: ['Présentation à des parties prenantes externes', 'Retour d’un contexte d’utilisation réel', 'Développement possible pour de nouveaux acteurs'],
      contactText: 'Pour un stage 2027/2028 en Suisse, des questions ou une collaboration, je suis joignable par e-mail.',
      contactLabel: 'E-mail'
    },
    sr: {
      kicker: 'Trenutno',
      title: 'Trenutno radim na',
      subline: 'Praktični projekti u toku sa realnim zahtevima, povratnim informacijama i daljim razvojem.',
      clientType: 'Klijentski projekat',
      teamType: 'Timski projekat',
      inProgress: 'u toku',
      followUp: 'dalji razvoj',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Web stranica za lokalnu firmu za čišćenje. Fokus: razgovor sa klijentom, zahtevi, prototip, statička implementacija i koordinacija hostinga/domena.',
      aargoPoints: ['Razgovor sa klijentom i prikupljanje zahteva', 'Prototip za strukturu, sadržaj i kontakt', 'Priprema deploymenta i domena bez oštećenja postojećeg mail setupa'],
      heimTitle: 'Heimatschutz projekat',
      heimText: 'Timski projekat koji je posetio jedan aargauski Heimatschutz projekat. Naše rešenje je osvojilo 2. mesto; sada se razmatra dalji razvoj za organizacije u drugim kantonima.',
      heimPoints: ['Prezentacija pred spoljnim učesnicima projekta', 'Feedback iz realnog konteksta', 'Dalji razvoj za moguće nove stakeholder-e'],
      contactText: 'Za praksu 2027/2028 u Švajcarskoj, pitanja ili saradnju dostupan sam preko e-maila.',
      contactLabel: 'E-mail'
    },
    'sr-cyrl': {
      kicker: 'Тренутно',
      title: 'Тренутно радим на',
      subline: 'Практични пројекти у току са реалним захтевима, повратним информацијама и даљим развојем.',
      clientType: 'Клијентски пројекат',
      teamType: 'Тимски пројекат',
      inProgress: 'у току',
      followUp: 'даљи развој',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Веб страница за локалну фирму за чишћење. Фокус: разговор са клијентом, захтеви, прототип, статичка имплементација и координација хостинга/домена.',
      aargoPoints: ['Разговор са клијентом и прикупљање захтева', 'Прототип за структуру, садржај и контакт', 'Припрема deployment-а и домена без оштећења постојећег mail setup-а'],
      heimTitle: 'Heimatschutz пројекат',
      heimText: 'Тимски пројекат који је посетио један ааргауски Heimatschutz пројекат. Наше решење је освојило 2. место; сада се разматра даљи развој за организације у другим кантонима.',
      heimPoints: ['Презентација пред спољним учесницима пројекта', 'Feedback из реалног контекста', 'Даљи развој за могуће нове stakeholder-е'],
      contactText: 'За праксу 2027/2028 у Швајцарској, питања или сарадњу доступан сам преко e-mail-а.',
      contactLabel: 'E-mail'
    }
  };

  const getLang = () => {
    const current = document.getElementById('language-current-label')?.textContent?.trim().toLowerCase() || '';
    if (current.includes('cy')) return 'sr-cyrl';
    if (current.includes('sr')) return 'sr';
    if (current.includes('fr')) return 'fr';
    if (current.includes('en')) return 'en';
    return 'de';
  };

  const t = () => translations[getLang()] || translations.de;

  const injectLiveFixStyles = () => {
    if (document.getElementById('portfolio-live-fix-styles')) return;

    const style = document.createElement('style');
    style.id = 'portfolio-live-fix-styles';
    style.textContent = `
      .hero-ticker { overflow: visible; }

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

      .ticker-set[aria-hidden="true"] { display: none; }

      .item-card[data-clickable-card="true"] { cursor: pointer; }

      .item-card[data-clickable-card="true"]:hover,
      .item-card[data-clickable-card="true"]:focus-visible {
        border-color: rgba(180, 167, 229, 0.46);
      }

      .item-card[data-clickable-card="true"]:focus:not(:focus-visible),
      .item-card[data-clickable-card="true"].is-modal-return-focus {
        outline: none !important;
        border-color: var(--line) !important;
        box-shadow: var(--shadow) !important;
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
      .modal-preview img { cursor: zoom-in; }

      .modal-preview img { object-fit: contain !important; }

      .currently-working {
        min-height: auto;
        padding-top: clamp(22px, 4vw, 42px);
        padding-bottom: clamp(26px, 4vw, 52px);
      }

      .working-banner {
        border: 1px solid rgba(180, 167, 229, 0.30);
        background: linear-gradient(135deg, rgba(32, 26, 50, 0.96), rgba(17, 15, 28, 0.92));
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow);
        padding: clamp(18px, 3vw, 26px);
        display: grid;
        gap: 18px;
        position: relative;
        overflow: hidden;
      }

      .working-banner::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(circle at top right, rgba(141, 108, 255, 0.22), transparent 34%);
        opacity: 0.9;
      }

      .working-banner > * { position: relative; z-index: 1; }

      .working-head {
        display: grid;
        gap: 8px;
      }

      .working-head .kicker,
      .contact .kicker,
      .legal-wrap .kicker {
        color: var(--accent-2) !important;
        text-shadow: 0 0 18px rgba(180, 167, 229, 0.18);
      }

      .working-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 14px;
      }

      .working-card {
        border: 1px solid rgba(185, 174, 220, 0.18);
        background: rgba(12, 10, 20, 0.52);
        border-radius: var(--radius-md);
        padding: 16px;
        display: grid;
        gap: 11px;
      }

      .working-card-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }

      .working-card h3 { font-size: 1.12rem; }

      .working-card p,
      .working-card li {
        color: var(--muted);
        line-height: 1.58;
      }

      .working-badge {
        border: 1px solid rgba(185, 174, 220, 0.18);
        background: rgba(141, 108, 255, 0.14);
        border-radius: 999px;
        color: var(--text);
        font-size: 0.76rem;
        font-weight: 800;
        padding: 6px 9px;
        white-space: nowrap;
      }

      .working-list {
        display: grid;
        gap: 7px;
        list-style: disc;
        padding-left: 18px;
      }

      .practice-projects { display: none !important; }
      .temporary-project-link { display: none !important; }

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

  const clearReturnFocusGlow = () => {
    const active = document.activeElement;
    if (active?.matches?.('.item-card[data-clickable-card="true"]')) {
      active.classList.add('is-modal-return-focus');
      active.blur();
      window.setTimeout(() => active.classList.remove('is-modal-return-focus'), 350);
    }
  };

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
          if (span.textContent.trim() === 'gemeinsam') span.textContent = 'Gemeinsam';
        }
      }

      if (heading === 'BESP2074') card.dataset.projectId = 'besp2074';

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
            if (event.target.closest('a:not([data-detail-trigger="true"]), button:not([data-detail-trigger="true"]), img[data-openable-preview="true"]')) return;
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
    const img = element.closest?.('img') || element.querySelector?.('img');
    if (img?.currentSrc || img?.src) return img.currentSrc || img.src;

    const style = window.getComputedStyle(element);
    const match = style.backgroundImage.match(/url\(["']?(.*?)["']?\)/);
    return match?.[1] || '';
  };

  const patchModalPreview = () => {
    const modalPreview = document.querySelector('.modal-preview');
    if (!modalPreview) return;

    if (!modalPreview.dataset.openHandlerAttached) {
      modalPreview.dataset.openHandlerAttached = 'true';
      modalPreview.addEventListener('click', (event) => {
        const imageUrl = getOpenableModalImageUrl(modalPreview);
        if (!imageUrl || imageUrl === 'none') return;
        event.preventDefault();
        event.stopPropagation();
        window.open(imageUrl, '_blank', 'noopener,noreferrer');
      });
    }
  };

  const upsertWorkingBanner = () => {
    const copy = t();
    const oldPractice = document.querySelector('[data-section="practice-projects"]');
    if (oldPractice) oldPractice.remove();

    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;

    let section = document.querySelector('[data-section="currently-working"]');
    if (!section) {
      section = document.createElement('section');
      section.className = 'currently-working section';
      section.dataset.section = 'currently-working';
      section.setAttribute('aria-labelledby', 'currently-working-title');
      portfolioSection.insertAdjacentElement('beforebegin', section);
    }

    const renderList = (items) => items.map((item) => `<li>${item}</li>`).join('');
    section.innerHTML = `
      <div class="container">
        <div class="working-banner reveal">
          <div class="working-head">
            <p class="kicker">${copy.kicker}</p>
            <h2 id="currently-working-title">${copy.title}</h2>
            <p class="section-subline">${copy.subline}</p>
          </div>

          <div class="working-grid">
            <article class="working-card">
              <div class="working-card-head">
                <div>
                  <p class="kicker">${copy.clientType}</p>
                  <h3>${copy.aargoTitle}</h3>
                </div>
                <span class="working-badge">${copy.inProgress}</span>
              </div>
              <p>${copy.aargoText}</p>
              <ul class="working-list">${renderList(copy.aargoPoints)}</ul>
            </article>

            <article class="working-card">
              <div class="working-card-head">
                <div>
                  <p class="kicker">${copy.teamType}</p>
                  <h3>${copy.heimTitle}</h3>
                </div>
                <span class="working-badge">2026 · 2. Platz</span>
              </div>
              <p>${copy.heimText}</p>
              <ul class="working-list">${renderList(copy.heimPoints)}</ul>
            </article>
          </div>
        </div>
      </div>
    `;
  };

  const removeTemporaryMoreProjects = () => {
    for (const item of document.querySelectorAll('[data-temp-project], .temporary-project-link')) item.remove();
  };

  const patchContact = () => {
    const contact = document.querySelector('#contact');
    if (!contact) return;

    const copy = t();
    const description = contact.querySelector('[data-i18n="contact.description"]');
    if (description) description.textContent = copy.contactText;

    const contactLinks = contact.querySelector('.contact-links');
    if (contactLinks) {
      contactLinks.innerHTML = `<a href="mailto:aleksandar09n@gmail.com" aria-label="${copy.contactLabel}: aleksandar09n@gmail.com">aleksandar09n@gmail.com</a>`;
    }
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
          <p>Kontakt erfolgt über die im Kontaktbereich angegebene E-Mail-Adresse. Es gibt kein Kontaktformular und keine direkte Dateneingabe auf der Seite.</p>
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

  const patchModalCloseFocus = () => {
    const modal = document.getElementById('detail-modal');
    if (!modal || modal.dataset.closeFocusPatchAttached) return;
    modal.dataset.closeFocusPatchAttached = 'true';

    modal.addEventListener('close', () => window.setTimeout(clearReturnFocusGlow, 0));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') window.setTimeout(clearReturnFocusGlow, 0);
    });

    for (const closeButton of document.querySelectorAll('.modal-close, #modal-close')) {
      closeButton.addEventListener('click', () => window.setTimeout(clearReturnFocusGlow, 0));
    }
  };

  let isRunning = false;
  const runPatches = () => {
    if (isRunning) return;
    isRunning = true;
    try {
      injectLiveFixStyles();
      patchProjectCards();
      patchModalPreview();
      patchModalCloseFocus();
      upsertWorkingBanner();
      removeTemporaryMoreProjects();
      patchContact();
      addLegalDetails();
    } finally {
      isRunning = false;
    }
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
