(() => {
  const translations = {
    de: {
      workingKicker: 'Aktuell',
      workingTitle: 'Aktuell arbeite ich an',
      workingSubline: 'Laufende Praxisprojekte mit echten Anforderungen, Feedback und Weiterentwicklung.',
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
      legalTexts: [
        ['Impressum lesen', 'Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolic und dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten. Kontakt erfolgt per E-Mail.'],
        ['Datenschutz lesen', 'Die Website setzt keine Analytics, keine Werbetracker und keine externen Tracking-Skripte ein. Beim Aufruf können durch den Hoster technisch notwendige Zugriffsdaten verarbeitet werden.'],
        ['Cookies lesen', 'Es werden keine Tracking-Cookies gesetzt. Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung erhalten bleibt.']
      ]
    },
    en: {
      workingKicker: 'Current work',
      workingTitle: 'Currently working on',
      workingSubline: 'Ongoing practical projects with real requirements, feedback and iteration.',
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
      contactText: 'For an internship, questions or collaboration, I am reachable by email.',
      legalTexts: [
        ['Read imprint', 'This is a private portfolio website by Aleksandar Nikolic for presenting education, projects, certificates and contact options. Contact is available by email.'],
        ['Read privacy note', 'The website uses no analytics, advertising trackers or external tracking scripts. The host may process technically necessary access data when the site is opened.'],
        ['Read cookie note', 'No tracking cookies are used. Only the selected language may be stored locally in the browser so the setting is kept.']
      ]
    },
    fr: {
      workingKicker: 'En cours',
      workingTitle: 'Projets actuels',
      workingSubline: 'Projets pratiques en cours avec exigences réelles, retours et itérations.',
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
      contactText: 'Pour un stage, des questions ou une collaboration, je suis joignable par e-mail.',
      legalTexts: [
        ['Lire les mentions légales', 'Cette page est un portfolio privé d’Aleksandar Nikolic pour présenter formation, projets, certificats et possibilités de contact. Le contact se fait par e-mail.'],
        ['Lire la confidentialité', 'Le site n’utilise pas d’analytics, de trackers publicitaires ou de scripts de suivi externes. L’hébergeur peut traiter les données d’accès techniquement nécessaires.'],
        ['Lire les cookies', 'Aucun cookie de suivi n’est utilisé. Seule la langue choisie peut être enregistrée localement dans le navigateur afin de conserver le réglage.']
      ]
    },
    sr: {
      workingKicker: 'Trenutno',
      workingTitle: 'Trenutno radim na',
      workingSubline: 'Praktični projekti u toku sa realnim zahtevima, povratnim informacijama i daljim razvojem.',
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
      contactText: 'Za praksu, pitanja ili saradnju dostupan sam preko e-maila.',
      legalTexts: [
        ['Pročitaj impressum', 'Ovo je privatna portfolio stranica Aleksandra Nikolića za prikaz obrazovanja, projekata, sertifikata i kontakta. Kontakt je moguć putem e-maila.'],
        ['Pročitaj privatnost', 'Stranica ne koristi analytics, reklamne trackere ili spoljne tracking skripte. Hoster može obrađivati tehnički neophodne podatke pristupa.'],
        ['Pročitaj cookies', 'Ne koriste se tracking cookies. Samo izabrani jezik može biti lokalno sačuvan u browseru da bi podešavanje ostalo zapamćeno.']
      ]
    },
    'sr-cyrl': {
      workingKicker: 'Тренутно',
      workingTitle: 'Тренутно радим на',
      workingSubline: 'Практични пројекти у току са реалним захтевима, повратним информацијама и даљим развојем.',
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
      contactText: 'За праксу, питања или сарадњу доступан сам преко e-mail-а.',
      legalTexts: [
        ['Прочитај impressum', 'Ово је приватна портфолио страница Александра Николића за приказ образовања, пројеката, сертификата и контакта. Контакт је могућ путем e-mail-а.'],
        ['Прочитај приватност', 'Страница не користи analytics, рекламне trackere или спољне tracking скрипте. Хостер може обрађивати технички неопходне податке приступа.'],
        ['Прочитај cookies', 'Не користе се tracking cookies. Само изабрани језик може бити локално сачуван у browser-у да би подешавање остало запамћено.']
      ]
    }
  };

  const getLang = () => {
    const current = document.getElementById('language-current-label')?.textContent?.trim().toLowerCase() || document.documentElement.lang || '';
    if (current.includes('kyr') || current.includes('cyrl')) return 'sr-cyrl';
    if (current.includes('sr')) return 'sr';
    if (current.includes('fr')) return 'fr';
    if (current.includes('en')) return 'en';
    return 'de';
  };

  const tr = () => translations[getLang()] || translations.de;

  const injectLiveFixStyles = () => {
    let style = document.getElementById('portfolio-live-fix-styles');
    if (!style) {
      style = document.createElement('style');
      style.id = 'portfolio-live-fix-styles';
      document.head.appendChild(style);
    }

    style.textContent = `
      .hero { padding-top: clamp(42px, 7vw, 84px); }
      .hero .hero-copy {
        width: min(1060px, 92vw);
        margin-inline: auto;
        text-align: center;
        display: grid;
        justify-items: center;
        gap: 14px;
      }
      .hero .kicker,
      .section .kicker,
      .contact .kicker,
      .legal-wrap .kicker,
      .working-head .kicker {
        color: var(--accent-2) !important;
        text-shadow: 0 0 18px rgba(180, 167, 229, 0.18);
      }
      .hero-copy > p:not(.kicker):not(.availability-note):not(.hero-bridge) { display: none !important; }
      .hero-bridge { display: none !important; }
      .hero-actions { justify-content: center; }
      .hero-actions .btn:not(:first-child) { display: none !important; }
      .hero-actions .btn:first-child { font-size: 1.05rem; padding: 13px 22px; }
      .hero-ticker { width: 100%; overflow: visible; }
      .ticker-track {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        padding: 10px;
        animation: none !important;
        transform: none !important;
      }
      .ticker-set {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        padding-right: 0;
      }
      .ticker-set[aria-hidden="true"] { display: none !important; }

      .currently-working {
        min-height: auto;
        padding-top: clamp(22px, 4vw, 42px);
        padding-bottom: clamp(26px, 4vw, 52px);
      }
      .working-banner {
        width: min(1000px, 92vw);
        margin-inline: auto;
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
      .working-head { display: grid; gap: 8px; text-align: center; justify-items: center; }
      .working-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; }
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
      .working-card li { color: var(--muted); line-height: 1.58; }
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
      .working-list { display: grid; gap: 7px; list-style: disc; padding-left: 18px; }
      .practice-projects,
      .temporary-project-link { display: none !important; }

      .item-card[data-clickable-card="true"] { cursor: pointer; }
      .item-card[data-clickable-card="true"]:hover,
      .item-card[data-clickable-card="true"]:focus-visible { border-color: rgba(180, 167, 229, 0.46); }
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

      .contact-wrap {
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 20px;
      }
      .contact-wrap p { max-width: 62ch; }
      .contact-links {
        width: auto;
        min-width: 0;
        justify-self: end;
        display: flex;
        align-items: center;
      }
      .contact-links a:not(:first-child) { display: none !important; }
      .contact-links a {
        width: auto;
        min-width: 0;
        padding-inline: 18px;
        white-space: nowrap;
      }

      .legal-details { display: none !important; }
      .legal-card {
        cursor: pointer;
        transition: border-color 0.16s ease, background 0.16s ease;
      }
      .legal-card:hover,
      .legal-card:focus-visible {
        border-color: rgba(180, 167, 229, 0.46);
        background: rgba(30, 25, 44, 0.94);
      }
      .legal-card-extra {
        grid-column: 1 / -1;
        display: none;
        margin-top: 10px;
        color: var(--muted);
        line-height: 1.58;
        border-top: 1px solid rgba(185, 174, 220, 0.16);
        padding-top: 10px;
      }
      .legal-card.is-open .legal-card-extra { display: block; }
      .legal-card .legal-read-hint {
        display: inline-flex;
        margin-top: 8px;
        color: var(--accent-2);
        font-size: 0.82rem;
        font-weight: 800;
      }

      @media (max-width: 760px) {
        .contact-wrap { grid-template-columns: 1fr; }
        .contact-links { justify-self: stretch; }
        .contact-links a { width: 100%; white-space: normal; }
      }
    `;
  };

  const stripStrayMediaOverlays = () => {
    for (const media of document.querySelectorAll('body > video, body > iframe')) {
      const rect = media.getBoundingClientRect();
      if (rect.width > 120 && rect.height > 80 && rect.left < 20 && !media.closest('main, header, footer')) {
        media.remove();
      }
    }
  };

  const clearReturnFocus = () => {
    for (const card of document.querySelectorAll('.item-card.is-modal-return-focus')) {
      card.classList.remove('is-modal-return-focus');
    }

    const active = document.activeElement;
    if (active?.classList?.contains('item-card')) {
      active.classList.add('is-modal-return-focus');
      active.blur();
      setTimeout(() => active.classList.remove('is-modal-return-focus'), 450);
    }
  };

  const getCardTitle = (card) => card.querySelector('h3')?.textContent?.trim() || '';

  const findDetailsButton = (card) => [...card.querySelectorAll('button, a')].find((element) => {
    const text = element.textContent?.trim().toLowerCase() || '';
    return text.includes('details anzeigen') || text.includes('show details') || text.includes('détails') || text.includes('detal');
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
        const tagHost = [...card.querySelectorAll('span')].find((span) => span.textContent.trim() === 'Algorithmen' || span.textContent.trim() === 'Algorithms')?.parentElement;
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
        detailsButton.setAttribute('aria-hidden', 'true');
        detailsButton.tabIndex = -1;
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
    const img = element.closest?.('img') || element.querySelector?.('img');
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

    const dialog = document.getElementById('detail-modal');
    if (dialog && !dialog.dataset.closeFocusPatchAttached) {
      dialog.dataset.closeFocusPatchAttached = 'true';
      dialog.addEventListener('close', clearReturnFocus);
      dialog.addEventListener('cancel', () => setTimeout(clearReturnFocus, 0));
    }

    const closeButton = document.getElementById('modal-close');
    if (closeButton && !closeButton.dataset.closeFocusPatchAttached) {
      closeButton.dataset.closeFocusPatchAttached = 'true';
      closeButton.addEventListener('click', () => setTimeout(clearReturnFocus, 0));
    }
  };

  const renderWorkingCard = (type, title, badge, text, points) => `
    <article class="working-card">
      <div class="working-card-head">
        <div>
          <p class="kicker">${type}</p>
          <h3>${title}</h3>
        </div>
        <span class="working-badge">${badge}</span>
      </div>
      <p>${text}</p>
      <ul class="working-list">
        ${points.map((point) => `<li>${point}</li>`).join('')}
      </ul>
    </article>
  `;

  const renderCurrentWork = () => {
    const text = tr();
    let section = document.querySelector('[data-section="currently-working"]');
    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;

    if (!section) {
      section = document.createElement('section');
      section.className = 'currently-working section';
      section.dataset.section = 'currently-working';
      section.setAttribute('aria-labelledby', 'currently-working-title');
      portfolioSection.insertAdjacentElement('beforebegin', section);
    }

    section.innerHTML = `
      <div class="container">
        <div class="working-banner reveal">
          <div class="working-head">
            <p class="kicker">${text.workingKicker}</p>
            <h2 id="currently-working-title">${text.workingTitle}</h2>
            <p class="section-subline">${text.workingSubline}</p>
          </div>
          <div class="working-grid">
            ${renderWorkingCard(text.clientType, text.aargoTitle, text.inProgress, text.aargoText, text.aargoPoints)}
            ${renderWorkingCard(text.teamType, text.heimTitle, text.followUp, text.heimText, text.heimPoints)}
          </div>
        </div>
      </div>
    `;
  };

  const removeOldPracticeSections = () => {
    for (const oldSection of document.querySelectorAll('[data-section="practice-projects"], .practice-projects')) {
      oldSection.remove();
    }

    for (const temporaryProject of document.querySelectorAll('[data-temp-project], .temporary-project-link')) {
      temporaryProject.remove();
    }
  };

  const patchContact = () => {
    const text = tr();
    const contact = document.querySelector('#contact');
    if (!contact) return;

    const description = contact.querySelector('[data-i18n="contact.description"], .contact-wrap p');
    if (description) description.textContent = text.contactText;

    const links = [...contact.querySelectorAll('.contact-links a')];
    if (!links.length) return;

    const primary = links[0];
    primary.href = 'mailto:aleksandar09n@gmail.com';
    primary.textContent = 'aleksandar09n@gmail.com';

    for (const link of links.slice(1)) {
      link.remove();
    }
  };

  const patchLegalCards = () => {
    const legalCards = [...document.querySelectorAll('.legal-card')].slice(0, 3);
    const text = tr();

    document.querySelector('.legal-details')?.remove();

    legalCards.forEach((card, index) => {
      const legalText = text.legalTexts[index];
      if (!legalText) return;

      card.dataset.legalInteractive = 'true';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-expanded', card.classList.contains('is-open') ? 'true' : 'false');

      let hint = card.querySelector('.legal-read-hint');
      if (!hint) {
        hint = document.createElement('span');
        hint.className = 'legal-read-hint';
        card.appendChild(hint);
      }
      hint.textContent = legalText[0];

      let extra = card.querySelector('.legal-card-extra');
      if (!extra) {
        extra = document.createElement('div');
        extra.className = 'legal-card-extra';
        card.appendChild(extra);
      }
      extra.textContent = legalText[1];

      if (!card.dataset.legalClickAttached) {
        card.dataset.legalClickAttached = 'true';
        card.addEventListener('click', (event) => {
          if (event.target.closest('a')) return;
          card.classList.toggle('is-open');
          card.setAttribute('aria-expanded', card.classList.contains('is-open') ? 'true' : 'false');
        });
        card.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          card.click();
        });
      }
    });
  };

  const runPatches = () => {
    injectLiveFixStyles();
    stripStrayMediaOverlays();
    removeOldPracticeSections();
    renderCurrentWork();
    patchProjectCards();
    patchModalPreview();
    patchContact();
    patchLegalCards();
  };

  const schedulePatches = () => {
    runPatches();
    requestAnimationFrame(runPatches);
    [100, 300, 700, 1300, 2200].forEach((delay) => setTimeout(runPatches, delay));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedulePatches, { once: true });
  } else {
    schedulePatches();
  }

  window.addEventListener('load', schedulePatches, { once: true });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.lang-option, #language-menu-button, .lang-menu-button')) {
      [80, 250, 600].forEach((delay) => setTimeout(runPatches, delay));
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setTimeout(clearReturnFocus, 0);
    }
  });

  const attachScopedObservers = () => {
    const targets = ['#projects-grid', '#certificates-grid', '#contact', '#legal'];
    for (const selector of targets) {
      const target = document.querySelector(selector);
      if (!target || target.dataset.liveFixObserverAttached) continue;
      target.dataset.liveFixObserverAttached = 'true';
      const observer = new MutationObserver(() => {
        requestAnimationFrame(runPatches);
      });
      observer.observe(target, { childList: true, subtree: true });
    }
  };

  [300, 900, 1800].forEach((delay) => setTimeout(() => {
    attachScopedObservers();
    runPatches();
  }, delay));
})();
