(() => {
  const PROFILE_IMAGE = 'assets/profile-temp.jpeg';
  const MAIL = 'aleksandar09n@gmail.com';

  const translations = {
    de: {
      heroSummary: 'Ich entwickle praktische Python-Tools, Weboberflächen und kleinere Fullstack-Projekte mit Fokus auf klare Struktur, Tests und verständliche Dokumentation.',
      projects: 'Projekte',
      workingKicker: 'Aktuell',
      workingTitle: 'Currently working on',
      workingSubline: 'Laufende Praxisprojekte mit echten Anforderungen, Feedback und Weiterentwicklung.',
      clientType: 'Kundenprojekt',
      teamType: 'Teamprojekt',
      inProgress: 'in Arbeit',
      followUp: 'Weiterentwicklung',
      aargoText: 'Firmenwebsite für ein lokales Reinigungsunternehmen. Fokus: Kundengespräch, Anforderungen, Prototyping, statische Umsetzung sowie Hosting- und Domain-Abklärung.',
      aargoPoints: ['Kundengespräch und Anforderungsaufnahme', 'Prototyp für Struktur, Inhalte und Kontaktführung', 'Deployment-/Domain-Abklärung ohne bestehendes Mail-Setup zu beschädigen'],
      heimText: 'Teamprojekt mit Besuch durch ein Aargauer Heimatschutz-Projekt. Unsere Lösung erreichte den 2. Platz; aktuell wird geprüft, wie die Lösung für Organisationen in anderen Kantonen weitergedacht werden kann.',
      heimPoints: ['Präsentation vor externen Projektbeteiligten', 'Feedback aus einem realen Anwendungskontext', 'Weiterentwicklung für mögliche neue Stakeholder'],
      contactText: 'Für eine Praktikumsstelle 2027/2028 in der Schweiz, Rückfragen oder Zusammenarbeit bin ich per E-Mail erreichbar.',
      legalRead: ['Impressum lesen', 'Datenschutz lesen', 'Cookies lesen'],
      legalText: [
        ['Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolic und dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten.', 'Kontakt erfolgt ausschliesslich per E-Mail. Es gibt kein Kontaktformular und keine direkte Dateneingabe auf der Seite.'],
        ['Die Website setzt keine Analytics, keine Werbetracker und keine externen Tracking-Skripte ein. Beim Aufruf können durch den Hoster technisch notwendige Zugriffsdaten verarbeitet werden.', 'Projektbilder, Zertifikate und die GitHub-Grafik werden lokal ausgeliefert. Externe Dienste werden erst geöffnet, wenn ein externer Link aktiv angeklickt wird.'],
        ['Es werden keine Tracking-Cookies gesetzt. Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung beim nächsten Besuch erhalten bleibt.', 'Diese lokale Speicherung dient nur der Bedienbarkeit der Website und nicht der Verfolgung oder Analyse von Besuchern.']
      ]
    },
    en: {
      heroSummary: 'I build practical Python tools, web interfaces and small full-stack projects with a focus on clear structure, tests and understandable documentation.',
      projects: 'Projects',
      workingKicker: 'Current work',
      workingTitle: 'Currently working on',
      workingSubline: 'Ongoing practical projects with real requirements, feedback and iteration.',
      clientType: 'Client project',
      teamType: 'Team project',
      inProgress: 'in progress',
      followUp: 'follow-up',
      aargoText: 'Company website for a local cleaning business. Focus: client discussion, requirements, prototyping, static implementation and hosting/domain coordination.',
      aargoPoints: ['Client discussion and requirements clarification', 'Prototype for structure, content and contact flow', 'Deployment/domain preparation without breaking the existing mail setup'],
      heimText: 'Team project visited by an Aargau heritage-protection project. Our solution reached 2nd place; the next step is exploring how the solution could be adapted for organizations in other cantons.',
      heimPoints: ['Presentation to external project stakeholders', 'Feedback from a real application context', 'Further development for possible new stakeholders'],
      contactText: 'For a 2027/2028 internship in Switzerland, questions or collaboration, I am reachable by email.',
      legalRead: ['Read imprint', 'Read privacy note', 'Read cookie note'],
      legalText: [
        ['This website is a private portfolio website by Aleksandar Nikolic and presents education, projects, certificates and contact options.', 'Contact is available by email only. There is no contact form and no direct data input on the page.'],
        ['The website does not use analytics, advertising trackers or external tracking scripts. The host may process technically necessary access data when the site is opened.', 'Project images, certificates and the GitHub graphic are loaded locally. External services only open when an external link is clicked.'],
        ['No tracking cookies are set. Only the selected language may be stored locally in the browser so the setting is kept.', 'This local storage is only used for usability and not for visitor tracking or analysis.']
      ]
    },
    fr: {
      heroSummary: 'Je développe des outils Python pratiques, des interfaces web et de petits projets full-stack avec une structure claire, des tests et une documentation compréhensible.',
      projects: 'Projets',
      workingKicker: 'En cours',
      workingTitle: 'Projets actuels',
      workingSubline: 'Projets pratiques en cours avec exigences réelles, retours et itérations.',
      clientType: 'Projet client',
      teamType: 'Projet d’équipe',
      inProgress: 'en cours',
      followUp: 'suite',
      aargoText: 'Site web d’entreprise pour une société locale de nettoyage. Focus: échange client, exigences, prototype, réalisation statique et coordination hébergement/domaine.',
      aargoPoints: ['Échange client et clarification des exigences', 'Prototype pour structure, contenu et contact', 'Préparation déploiement/domaine sans perturber la messagerie existante'],
      heimText: 'Projet d’équipe visité par un projet argovien de protection du patrimoine. Notre solution a obtenu la 2e place; l’étape suivante est d’étudier une adaptation pour d’autres cantons.',
      heimPoints: ['Présentation à des parties prenantes externes', 'Retour d’un contexte d’utilisation réel', 'Développement possible pour de nouveaux acteurs'],
      contactText: 'Pour un stage 2027/2028 en Suisse, des questions ou une collaboration, je suis joignable par e-mail.',
      legalRead: ['Lire les mentions légales', 'Lire la note de confidentialité', 'Lire la note sur les cookies'],
      legalText: [
        ['Ce site est un portfolio privé d’Aleksandar Nikolic pour présenter formation, projets, certificats et contact.', 'Le contact se fait uniquement par e-mail. Aucun formulaire de contact ni saisie directe de données n’est utilisé.'],
        ['Le site n’utilise pas d’analytics, de trackers publicitaires ou de scripts de suivi externes. L’hébergeur peut traiter des données d’accès techniquement nécessaires.', 'Les images de projet, certificats et la graphique GitHub sont chargés localement. Les services externes ne s’ouvrent qu’après clic sur un lien externe.'],
        ['Aucun cookie de tracking n’est utilisé. Seule la langue choisie peut être stockée localement dans le navigateur.', 'Ce stockage local sert uniquement à l’utilisation du site et non au suivi des visiteurs.']
      ]
    },
    sr: {
      heroSummary: 'Razvijam praktične Python alate, web interfejse i manje full-stack projekte sa fokusom na jasnu strukturu, testove i razumljivu dokumentaciju.',
      projects: 'Projekti',
      workingKicker: 'Trenutno',
      workingTitle: 'Trenutno radim na',
      workingSubline: 'Praktični projekti u toku sa realnim zahtevima, povratnim informacijama i daljim razvojem.',
      clientType: 'Klijentski projekat',
      teamType: 'Timski projekat',
      inProgress: 'u toku',
      followUp: 'dalji razvoj',
      aargoText: 'Web stranica za lokalnu firmu za čišćenje. Fokus: razgovor sa klijentom, zahtevi, prototip, statička implementacija i koordinacija hostinga/domena.',
      aargoPoints: ['Razgovor sa klijentom i prikupljanje zahteva', 'Prototip za strukturu, sadržaj i kontakt', 'Priprema deploymenta i domena bez oštećenja postojećeg mail setupa'],
      heimText: 'Timski projekat koji je posetio jedan aargauski Heimatschutz projekat. Naše rešenje je osvojilo 2. mesto; sada se razmatra dalji razvoj za organizacije u drugim kantonima.',
      heimPoints: ['Prezentacija pred spoljnim učesnicima projekta', 'Feedback iz realnog konteksta', 'Dalji razvoj za moguće nove stakeholder-e'],
      contactText: 'Za praksu 2027/2028 u Švajcarskoj, pitanja ili saradnju dostupan sam preko e-maila.',
      legalRead: ['Pročitaj impressum', 'Pročitaj privatnost', 'Pročitaj cookies'],
      legalText: [
        ['Ovo je privatna portfolio stranica Aleksandra Nikolića za prikaz obrazovanja, projekata, sertifikata i kontakta.', 'Kontakt je moguć samo putem e-maila. Na stranici nema kontakt formulara.'],
        ['Stranica ne koristi analytics, reklamne trackere ili eksterne tracking skripte. Hosting može obraditi tehnički neophodne pristupne podatke.', 'Slike projekata, sertifikati i GitHub grafika se učitavaju lokalno. Eksterni servisi se otvaraju tek klikom na link.'],
        ['Ne koriste se tracking cookies. Izabrani jezik može biti lokalno sačuvan u browseru.', 'To lokalno čuvanje služi samo za korišćenje stranice, ne za praćenje posetilaca.']
      ]
    },
    'sr-cyrl': {
      heroSummary: 'Развијам практичне Python алате, веб интерфејсе и мање full-stack пројекте са фокусом на јасну структуру, тестове и разумљиву документацију.',
      projects: 'Пројекти',
      workingKicker: 'Тренутно',
      workingTitle: 'Тренутно радим на',
      workingSubline: 'Практични пројекти у току са реалним захтевима, повратним информацијама и даљим развојем.',
      clientType: 'Клијентски пројекат',
      teamType: 'Тимски пројекат',
      inProgress: 'у току',
      followUp: 'даљи развој',
      aargoText: 'Веб страница за локалну фирму за чишћење. Фокус: разговор са клијентом, захтеви, прототип, статичка имплементација и координација хостинга/домена.',
      aargoPoints: ['Разговор са клијентом и прикупљање захтева', 'Прототип за структуру, садржај и контакт', 'Припрема deployment-а и домена без оштећења постојећег mail setup-а'],
      heimText: 'Тимски пројекат који је посетио један ааргауски Heimatschutz пројекат. Наше решење је освојило 2. место; сада се разматра даљи развој за организације у другим кантонима.',
      heimPoints: ['Презентација пред спољним учесницима пројекта', 'Feedback из реалног контекста', 'Даљи развој за могуће нове stakeholder-е'],
      contactText: 'За праксу 2027/2028 у Швајцарској, питања или сарадњу доступан сам преко e-mail-а.',
      legalRead: ['Прочитај impressum', 'Прочитај приватност', 'Прочитај cookies'],
      legalText: [
        ['Ово је приватна портфолио страница Александра Николића за приказ образовања, пројеката, сертификата и контакта.', 'Контакт је могућ само путем e-mail-а. На страници нема контакт формулара.'],
        ['Страница не користи analytics, рекламне tracker-е или спољне tracking скрипте. Hosting може обрадити технички неопходне приступне податке.', 'Слике пројеката, сертификати и GitHub графика се учитавају локално. Спољни сервиси се отварају тек кликом на линк.'],
        ['Не користе се tracking cookies. Изабрани језик може бити локално сачуван у browser-у.', 'То локално чување служи само за коришћење странице, не за праћење посетилаца.']
      ]
    }
  };

  const getLang = () => {
    const label = document.getElementById('language-current-label')?.textContent?.trim().toLowerCase() || '';
    if (label.includes('kyr') || label.includes('cy')) return 'sr-cyrl';
    if (label.includes('sr')) return 'sr';
    if (label.includes('fr')) return 'fr';
    if (label.includes('en')) return 'en';
    return 'de';
  };

  const current = () => translations[getLang()] || translations.de;

  const injectStyles = () => {
    if (document.getElementById('portfolio-live-fix-styles')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-live-fix-styles';
    style.textContent = `
      .hero .hero-grid {
        display: grid !important;
        grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.75fr) !important;
        align-items: center !important;
        gap: clamp(28px, 5vw, 72px) !important;
      }
      .hero .hero-copy {
        text-align: left !important;
        align-items: flex-start !important;
        max-width: 760px !important;
        margin: 0 !important;
      }
      .hero .hero-copy h1,
      .hero .hero-copy p { text-align: left !important; }
      .hero .hero-copy [data-i18n="hero.about"],
      .hero .hero-copy .hero-bridge,
      .hero .hero-copy .btn-secondary { display: none !important; }
      .hero .hero-copy [data-i18n="hero.description"] {
        display: block !important;
        max-width: 680px !important;
        margin-top: 14px !important;
        font-size: clamp(1rem, 1.5vw, 1.22rem) !important;
        line-height: 1.6 !important;
        color: var(--muted) !important;
      }
      .hero .availability-note { max-width: 560px !important; }
      .hero-actions { justify-content: flex-start !important; }
      .hero-actions .btn-primary { font-size: 1.02rem !important; padding: 15px 24px !important; }
      .hero-ticker { overflow: visible !important; width: 100% !important; }
      .ticker-track {
        width: 100% !important;
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 10px !important;
        padding: 10px !important;
        animation: none !important;
        transform: none !important;
      }
      .ticker-set { display: flex !important; flex-wrap: wrap !important; gap: 10px !important; padding-right: 0 !important; }
      .ticker-set[aria-hidden="true"] { display: none !important; }
      .hero-portrait {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 320px;
      }
      .hero-portrait img {
        width: min(330px, 72vw);
        max-height: 430px;
        object-fit: contain;
        border-radius: 28px;
        filter: drop-shadow(0 30px 60px rgba(0,0,0,0.45));
        border: 0;
        background: transparent;
      }
      .item-card[data-clickable-card="true"] { cursor: pointer; }
      .item-card[data-clickable-card="true"]:hover,
      .item-card[data-clickable-card="true"]:focus-visible { border-color: rgba(180, 167, 229, 0.46); }
      .item-card[data-clickable-card="true"]:focus:not(:focus-visible),
      .item-card[data-clickable-card="true"].is-modal-return-focus {
        outline: none !important; border-color: var(--line) !important; box-shadow: var(--shadow) !important;
      }
      .item-card[data-clickable-card="true"] .project-details-trigger,
      .item-card[data-clickable-card="true"] [data-detail-trigger="true"] {
        position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important;
        margin: -1px !important; overflow: hidden !important; clip: rect(0 0 0 0) !important;
        white-space: nowrap !important; border: 0 !important;
      }
      .item-card[data-project-id="besp2074"] img,
      .item-card[data-project-id="besp2074"] .project-preview img,
      .item-card[data-project-id="besp2074"] .item-preview img { object-fit: contain !important; background: #10263a; }
      .item-card[data-project-id="besp2074"] img,
      .item-card img[data-openable-preview="true"], .modal-preview, .modal-preview img { cursor: zoom-in; }
      .modal-preview img { object-fit: contain !important; }
      .currently-working { min-height: auto; padding-top: clamp(20px, 3vw, 36px); padding-bottom: clamp(26px, 4vw, 52px); }
      .working-banner {
        border: 1px solid rgba(180, 167, 229, 0.30); background: linear-gradient(135deg, rgba(32,26,50,.96), rgba(17,15,28,.92));
        border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: clamp(18px, 3vw, 26px); display: grid; gap: 18px; position: relative; overflow: hidden;
      }
      .working-banner::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at top right, rgba(141,108,255,.22), transparent 34%); }
      .working-banner > * { position: relative; z-index: 1; }
      .working-head { display: grid; gap: 8px; text-align: center; max-width: 760px; margin: 0 auto; }
      .working-head .kicker, .hero .kicker, .legal-wrap .kicker { color: var(--accent-2) !important; text-shadow: 0 0 18px rgba(180,167,229,.18); }
      .working-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; }
      .working-card { border: 1px solid rgba(185,174,220,.18); background: rgba(12,10,20,.52); border-radius: var(--radius-md); padding: 16px; display: grid; gap: 11px; }
      .working-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
      .working-card h3 { font-size: 1.12rem; }
      .working-card p, .working-card li { color: var(--muted); line-height: 1.58; }
      .working-badge { border: 1px solid rgba(185,174,220,.18); background: rgba(141,108,255,.14); border-radius: 999px; color: var(--text); font-size: .76rem; font-weight: 800; padding: 6px 9px; white-space: nowrap; }
      .working-list { display: grid; gap: 7px; list-style: disc; padding-left: 18px; }
      .practice-projects, .temporary-project-link { display: none !important; }
      .contact .kicker { display: none !important; }
      .contact .contact-card, .contact .contact-panel, #contact .contact-card, #contact .contact-panel { align-items: center !important; }
      #contact a[href^="mailto"] { max-width: max-content !important; min-height: 0 !important; padding: 14px 18px !important; }
      #contact a[href^="mailto"]:not([href="mailto:${MAIL}"]) { display: none !important; }
      .legal-card { cursor: pointer; }
      .legal-card details { margin-top: 12px; }
      .legal-card summary { cursor: pointer; font-weight: 800; color: var(--text); }
      .legal-card .legal-details-content { display: grid; gap: 8px; padding-top: 10px; color: var(--muted); line-height: 1.58; }
      .legal-details { display: none !important; }
      body > video, body > iframe[src*="youtube"], body > iframe[src*="netflix"], body > iframe[src*="prime"] { display: none !important; }
      @media (max-width: 900px) {
        .hero .hero-grid { grid-template-columns: 1fr !important; text-align: center !important; }
        .hero .hero-copy { align-items: center !important; margin: 0 auto !important; text-align: center !important; }
        .hero .hero-copy h1, .hero .hero-copy p { text-align: center !important; }
        .hero-actions { justify-content: center !important; }
        .hero-portrait { order: -1; min-height: auto; }
        .hero-portrait img { width: min(220px, 58vw); max-height: 260px; }
      }
    `;
    document.head.appendChild(style);
  };

  const getCardTitle = (card) => card.querySelector('h3')?.textContent?.trim() || '';

  const findDetailsButton = (card) => [...card.querySelectorAll('button, a')].find((element) => {
    const text = element.textContent?.trim().toLowerCase() || '';
    return text.includes('details anzeigen') || text.includes('show details') || text.includes('détails') || text.includes('detalji') || text.includes('детаљи');
  });

  const ensureHero = () => {
    const heroGrid = document.querySelector('.hero-grid');
    const heroCopy = document.querySelector('.hero-copy');
    if (!heroGrid || !heroCopy) return;

    const summary = heroCopy.querySelector('[data-i18n="hero.description"]');
    if (summary) summary.textContent = current().heroSummary;

    const primary = heroCopy.querySelector('.hero-actions .btn-primary');
    if (primary) primary.textContent = current().projects;

    if (!heroGrid.querySelector('.hero-portrait')) {
      const portrait = document.createElement('div');
      portrait.className = 'hero-portrait reveal';
      portrait.innerHTML = `<img src="${PROFILE_IMAGE}" alt="Aleksandar Nikolic" loading="eager">`;
      heroGrid.appendChild(portrait);
    }
  };

  const clearReturnFocus = () => {
    document.querySelectorAll('.is-modal-return-focus').forEach((el) => el.classList.remove('is-modal-return-focus'));
    if (document.activeElement?.matches?.('.item-card[data-clickable-card="true"]')) document.activeElement.blur();
  };

  const patchProjectCards = () => {
    const projectList = document.querySelector('#projects-grid');
    const cards = [...document.querySelectorAll('.item-card')];
    for (const card of cards) {
      const heading = getCardTitle(card);
      if (heading === 'FolioLint' && projectList && projectList.firstElementChild !== card) projectList.prepend(card);
      if (heading === 'SortLab' && !card.textContent.includes('GitHub Pages')) {
        const tagHost = [...card.querySelectorAll('span')].find((span) => span.textContent.trim() === 'Algorithmen')?.parentElement;
        if (tagHost) { const tag = document.createElement('span'); tag.textContent = 'GitHub Pages'; tagHost.appendChild(tag); }
      }
      if (heading.includes('VSW')) {
        for (const span of card.querySelectorAll('span')) if (span.textContent.trim() === 'gemeinsam') span.textContent = 'Gemeinsam';
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
            setTimeout(clearReturnFocus, 80);
          });
          card.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault(); detailsButton.click(); setTimeout(clearReturnFocus, 80);
          });
        }
      }
      for (const image of card.querySelectorAll('img')) {
        image.dataset.openablePreview = 'true';
        if (!image.dataset.openHandlerAttached) {
          image.dataset.openHandlerAttached = 'true';
          image.addEventListener('click', (event) => {
            event.preventDefault(); event.stopPropagation();
            const src = image.currentSrc || image.src;
            if (src) window.open(src, '_blank', 'noopener,noreferrer');
          });
        }
      }
    }
  };

  const patchModalPreview = () => {
    const modalPreview = document.querySelector('.modal-preview');
    if (!modalPreview || modalPreview.dataset.openHandlerAttached) return;
    modalPreview.dataset.openHandlerAttached = 'true';
    modalPreview.addEventListener('click', (event) => {
      const img = modalPreview.querySelector('img');
      const src = img?.currentSrc || img?.src || '';
      if (!src) return;
      event.preventDefault(); event.stopPropagation(); window.open(src, '_blank', 'noopener,noreferrer');
    });
  };

  const ensureWorkingSection = () => {
    let section = document.querySelector('[data-section="currently-working"]');
    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;
    if (!section) {
      section = document.createElement('section');
      section.className = 'currently-working section';
      section.dataset.section = 'currently-working';
      portfolioSection.insertAdjacentElement('beforebegin', section);
    }
    const c = current();
    const list = (items) => items.map((item) => `<li>${item}</li>`).join('');
    section.innerHTML = `
      <div class="container">
        <div class="working-banner reveal">
          <div class="working-head">
            <p class="kicker">${c.workingKicker}</p>
            <h2>${c.workingTitle}</h2>
            <p class="section-subline">${c.workingSubline}</p>
          </div>
          <div class="working-grid">
            <article class="working-card">
              <div class="working-card-head"><div><p class="kicker">${c.clientType}</p><h3>AargoClean GmbH Website</h3></div><span class="working-badge">${c.inProgress}</span></div>
              <p>${c.aargoText}</p><ul class="working-list">${list(c.aargoPoints)}</ul>
            </article>
            <article class="working-card">
              <div class="working-card-head"><div><p class="kicker">${c.teamType}</p><h3>Heimatschutz-Projekt</h3></div><span class="working-badge">${c.followUp}</span></div>
              <p>${c.heimText}</p><ul class="working-list">${list(c.heimPoints)}</ul>
            </article>
          </div>
        </div>
      </div>`;
  };

  const removeOldPracticeSection = () => document.querySelectorAll('[data-section="practice-projects"]').forEach((el) => el.remove());
  const removeTemporaryMoreProjects = () => document.querySelectorAll('[data-temp-project], .temporary-project-link').forEach((el) => el.remove());

  const patchContact = () => {
    const section = document.querySelector('#contact');
    if (!section) return;
    const c = current();
    const subline = section.querySelector('[data-i18n="contact.subline"], .section-subline, p');
    if (subline) subline.textContent = c.contactText;
    const mailLinks = [...section.querySelectorAll('a[href^="mailto"]')];
    mailLinks.forEach((link, index) => {
      if (index === 0) { link.href = `mailto:${MAIL}`; link.textContent = MAIL + ' ↗'; }
      else link.remove();
    });
  };

  const patchLegalCards = () => {
    const legalCards = [...document.querySelectorAll('.legal-card')];
    if (!legalCards.length) return;
    const c = current();
    legalCards.slice(0, 3).forEach((card, index) => {
      if (!card.dataset.legalClickable) {
        card.dataset.legalClickable = 'true';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('click', (event) => {
          if (event.target.closest('summary, details')) return;
          const details = card.querySelector('details');
          if (details) details.open = !details.open;
        });
        card.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          const details = card.querySelector('details');
          if (details) details.open = !details.open;
        });
      }
      let details = card.querySelector('details');
      if (!details) {
        details = document.createElement('details');
        card.appendChild(details);
      }
      details.innerHTML = `<summary>${c.legalRead[index]}</summary><div class="legal-details-content">${c.legalText[index].map((p) => `<p>${p}</p>`).join('')}</div>`;
    });
    document.querySelectorAll('.legal-details').forEach((el) => el.remove());
  };

  const run = () => {
    injectStyles();
    ensureHero();
    patchProjectCards();
    patchModalPreview();
    removeOldPracticeSection();
    removeTemporaryMoreProjects();
    ensureWorkingSection();
    patchContact();
    patchLegalCards();
    clearReturnFocus();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once: true });
  else run();

  window.addEventListener('load', run, { once: true });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setTimeout(clearReturnFocus, 60); });
  document.addEventListener('click', (event) => {
    if (event.target.closest('.lang-option, [data-lang], #language-menu button')) setTimeout(run, 120);
    if (event.target.closest('[aria-label="Close"], .modal-close')) setTimeout(clearReturnFocus, 80);
  });
  [60, 180, 450, 900].forEach((delay) => setTimeout(run, delay));
})();
