(() => {
  const translations = {
    de: {
      heroSummary: 'Ich entwickle praktische Python-Tools, Weboberflächen und kleinere Fullstack-Projekte mit Fokus auf klare Struktur, Tests und verständliche Dokumentation.',
      internship: 'Aktuell suche ich eine Praktikumsstelle in der Schweiz für 2027/2028.',
      projects: 'Projekte',
      workingKicker: 'Aktuell',
      workingTitle: 'Currently working on',
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
      contactTitle: 'Kontakt',
      contactText: 'Für Praktikum, Rückfragen oder Zusammenarbeit bin ich per E-Mail erreichbar.',
      legalTitle: 'Impressum, Datenschutz und Cookies',
      legalSubline: 'Kurz, transparent und ohne Tracking-Geschwurbel.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      readImprint: 'Impressum lesen',
      readPrivacy: 'Datenschutz lesen',
      readCookies: 'Cookies lesen',
      imprintBody: ['Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolic und dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten.', 'Kontakt erfolgt per E-Mail. Es gibt kein Kontaktformular und keine direkte Dateneingabe auf der Seite.'],
      privacyBody: ['Die Website setzt keine Analytics, keine Werbetracker und keine externen Tracking-Skripte ein.', 'Projektbilder, Zertifikate und die GitHub-Grafik werden lokal ausgeliefert. Externe Dienste werden erst geöffnet, wenn ein externer Link aktiv angeklickt wird.'],
      cookiesBody: ['Es werden keine Tracking-Cookies gesetzt.', 'Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung erhalten bleibt.']
    },
    en: {
      heroSummary: 'I build practical Python tools, web interfaces and small full-stack projects with a focus on clear structure, tests and understandable documentation.',
      internship: 'Looking for an internship position in Switzerland for 2027/2028.',
      projects: 'Projects',
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
      contactTitle: 'Contact',
      contactText: 'For an internship, questions, or collaboration, I am reachable by email.',
      legalTitle: 'Imprint, privacy and cookies',
      legalSubline: 'Short, transparent, and without tracking noise.',
      imprint: 'Imprint',
      privacy: 'Privacy',
      cookies: 'Cookies',
      readImprint: 'Read imprint',
      readPrivacy: 'Read privacy note',
      readCookies: 'Read cookie note',
      imprintBody: ['This is a private portfolio website by Aleksandar Nikolic for presenting education, projects, certificates and contact information.', 'Contact is available by email. There is no contact form and no direct data input on the site.'],
      privacyBody: ['The website uses no analytics, advertising trackers or external tracking scripts.', 'Project images, certificates and the GitHub graphic are served locally. External services are opened only when an external link is clicked.'],
      cookiesBody: ['No tracking cookies are used.', 'The selected language may be stored locally in the browser so the setting is kept.']
    },
    fr: {
      heroSummary: 'Je développe des outils Python pratiques, des interfaces web et de petits projets full-stack avec un focus sur la structure, les tests et une documentation compréhensible.',
      internship: 'Je recherche un stage en Suisse pour 2027/2028.',
      projects: 'Projets',
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
      contactTitle: 'Contact',
      contactText: 'Pour un stage, des questions ou une collaboration, je suis joignable par e-mail.',
      legalTitle: 'Impressum, confidentialité et cookies',
      legalSubline: 'Court, transparent et sans tracking.',
      imprint: 'Impressum',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      readImprint: 'Lire l’impressum',
      readPrivacy: 'Lire la confidentialité',
      readCookies: 'Lire les cookies',
      imprintBody: ['Ce site est un portfolio privé d’Aleksandar Nikolic pour présenter formation, projets, certificats et contact.', 'Le contact se fait par e-mail. Il n’y a pas de formulaire de contact ni de saisie directe de données.'],
      privacyBody: ['Le site n’utilise pas d’analytics, de trackers publicitaires ou de scripts de suivi externes.', 'Les images de projets, certificats et graphiques GitHub sont chargés localement. Les services externes ne s’ouvrent qu’après un clic actif.'],
      cookiesBody: ['Aucun cookie de suivi n’est utilisé.', 'La langue choisie peut être enregistrée localement dans le navigateur afin de conserver le réglage.']
    },
    sr: {
      heroSummary: 'Razvijam praktične Python alate, web interfejse i manje full-stack projekte sa fokusom na jasnu strukturu, testove i razumljivu dokumentaciju.',
      internship: 'Tražim praksu u Švajcarskoj za 2027/2028.',
      projects: 'Projekti',
      workingKicker: 'Trenutno',
      workingTitle: 'Trenutno radim na',
      workingSubline: 'Praktični projekti u toku sa realnim zahtevima, feedbackom i daljim razvojem.',
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
      contactTitle: 'Kontakt',
      contactText: 'Za praksu, pitanja ili saradnju dostupan sam preko e-maila.',
      legalTitle: 'Impressum, privatnost i cookies',
      legalSubline: 'Kratko, transparentno i bez tracking-a.',
      imprint: 'Impressum',
      privacy: 'Privatnost',
      cookies: 'Cookies',
      readImprint: 'Pročitaj impressum',
      readPrivacy: 'Pročitaj privatnost',
      readCookies: 'Pročitaj cookies',
      imprintBody: ['Ovo je privatna portfolio stranica Aleksandra Nikolića za prikaz obrazovanja, projekata, sertifikata i kontakta.', 'Kontakt je moguć preko e-maila. Na stranici nema kontakt forme i direktnog unosa podataka.'],
      privacyBody: ['Stranica ne koristi analytics, reklamne trackere ili eksterne tracking skripte.', 'Slike projekata, sertifikati i GitHub grafika učitavaju se lokalno. Eksterni servisi se otvaraju samo aktivnim klikom.'],
      cookiesBody: ['Ne koriste se tracking cookies.', 'Izabrani jezik može lokalno da se sačuva u browseru da bi podešavanje ostalo zapamćeno.']
    },
    'sr-cyrl': {
      heroSummary: 'Развијам практичне Python алате, web интерфејсе и мање full-stack пројекте са фокусом на јасну структуру, тестове и разумљиву документацију.',
      internship: 'Тражим праксу у Швајцарској за 2027/2028.',
      projects: 'Пројекти',
      workingKicker: 'Тренутно',
      workingTitle: 'Тренутно радим на',
      workingSubline: 'Практични пројекти у току са реалним захтевима, feedback-ом и даљим развојем.',
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
      contactTitle: 'Контакт',
      contactText: 'За праксу, питања или сарадњу доступан сам преко e-mail-а.',
      legalTitle: 'Impressum, приватност и cookies',
      legalSubline: 'Кратко, транспарентно и без tracking-а.',
      imprint: 'Impressum',
      privacy: 'Приватност',
      cookies: 'Cookies',
      readImprint: 'Прочитај impressum',
      readPrivacy: 'Прочитај приватност',
      readCookies: 'Прочитај cookies',
      imprintBody: ['Ово је приватна portfolio страница Александра Николића за приказ образовања, пројеката, сертификата и контакта.', 'Контакт је могућ преко e-mail-а. На страници нема контакт форме и директног уноса података.'],
      privacyBody: ['Страница не користи analytics, рекламне trackere или екстерне tracking скрипте.', 'Слике пројеката, сертификати и GitHub графика учитавају се локално. Екстерни сервиси се отварају само активним кликом.'],
      cookiesBody: ['Не користе се tracking cookies.', 'Изабрани језик може локално да се сачува у browser-у да би подешавање остало запамћено.']
    }
  };

  const EMAIL = 'aleksandar09n@gmail.com';
  const getLang = () => {
    const current = document.getElementById('language-current-label')?.textContent?.trim().toLowerCase() || '';
    if (current.includes('cy')) return 'sr-cyrl';
    if (current.includes('sr')) return 'sr';
    if (current.includes('fr')) return 'fr';
    if (current.includes('en')) return 'en';
    return 'de';
  };
  const tr = () => translations[getLang()] || translations.de;

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  const injectStyles = () => {
    if (document.getElementById('portfolio-live-fix-styles')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-live-fix-styles';
    style.textContent = `
      .hero.section { min-height: auto !important; padding-top: clamp(70px, 9vw, 110px) !important; padding-bottom: clamp(70px, 10vw, 120px) !important; }
      .hero-grid { display: block !important; }
      .hero-copy { max-width: 980px !important; margin: 0 auto !important; text-align: center !important; }
      .hero-copy .kicker, .section-head .kicker, .contact .kicker, .legal-wrap .kicker, .working-head .kicker { color: var(--accent-2) !important; text-shadow: 0 0 18px rgba(180, 167, 229, 0.20); }
      .hero-copy h1 { max-width: 920px !important; margin-inline: auto !important; }
      .hero-summary-compact { max-width: 720px; margin: 14px auto 0; color: var(--muted); line-height: 1.65; font-size: clamp(1rem, 1.3vw, 1.15rem); }
      .hero-copy [data-i18n="hero.description"], .hero-copy [data-i18n="hero.about"], .hero-copy [data-i18n="hero.bridge"] { display: none !important; }
      .availability-note { width: fit-content; margin: 18px auto 0 !important; }
      .hero-actions { justify-content: center !important; margin-top: 16px !important; }
      .hero-actions a:not([href="#portfolio"]) { display: none !important; }
      .hero-actions a[href="#portfolio"] { font-size: 1.08rem; padding: 16px 24px; }
      .hero-ticker { overflow: visible !important; margin-top: 24px !important; }
      .ticker-track { width: 100%; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 10px; animation: none !important; transform: none !important; }
      .ticker-set { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding-right: 0; }
      .ticker-set[aria-hidden="true"] { display: none !important; }

      .item-card[data-clickable-card="true"] { cursor: pointer; }
      .item-card[data-clickable-card="true"]:hover, .item-card[data-clickable-card="true"]:focus-visible { border-color: rgba(180, 167, 229, 0.46); }
      .item-card[data-clickable-card="true"]:focus:not(:focus-visible), .item-card[data-clickable-card="true"].is-modal-return-focus { outline: none !important; border-color: var(--line) !important; box-shadow: var(--shadow) !important; }
      .project-details-trigger, [data-detail-trigger="true"] { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0 0 0 0) !important; white-space: nowrap !important; border: 0 !important; opacity: 0 !important; pointer-events: none !important; }
      .item-card[data-project-id="besp2074"] img, .item-card[data-project-id="besp2074"] .project-preview img, .item-card[data-project-id="besp2074"] .item-preview img { object-fit: contain !important; background: #10263a; }
      .item-card img[data-openable-preview="true"], .modal-preview, .modal-preview img { cursor: zoom-in; }
      .modal-preview img { object-fit: contain !important; }

      .currently-working { min-height: auto; padding-top: clamp(22px, 4vw, 42px); padding-bottom: clamp(26px, 4vw, 52px); }
      .working-banner { max-width: 1120px; margin: 0 auto; border: 1px solid rgba(180, 167, 229, 0.30); background: linear-gradient(135deg, rgba(32, 26, 50, 0.96), rgba(17, 15, 28, 0.92)); border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: clamp(18px, 3vw, 26px); display: grid; gap: 18px; position: relative; overflow: hidden; }
      .working-banner::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at top right, rgba(141, 108, 255, 0.22), transparent 34%); opacity: 0.9; }
      .working-banner > * { position: relative; z-index: 1; }
      .working-head { text-align: center; display: grid; gap: 8px; max-width: 760px; margin: 0 auto; }
      .working-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; }
      .working-card { border: 1px solid rgba(185, 174, 220, 0.18); background: rgba(12, 10, 20, 0.52); border-radius: var(--radius-md); padding: 16px; display: grid; gap: 11px; }
      .working-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
      .working-card h3 { font-size: 1.12rem; }
      .working-card p, .working-card li { color: var(--muted); line-height: 1.58; }
      .working-badge { border: 1px solid rgba(185, 174, 220, 0.18); background: rgba(141, 108, 255, 0.14); border-radius: 999px; color: var(--text); font-size: 0.76rem; font-weight: 800; padding: 6px 9px; white-space: nowrap; }
      .working-list { display: grid; gap: 7px; list-style: disc; padding-left: 18px; }
      .practice-projects, .temporary-project-link { display: none !important; }

      .contact-wrap { align-items: center; }
      .contact-links { display: flex !important; justify-content: flex-end; align-items: center; }
      .contact-links a:not([href^="mailto:${EMAIL}"]) { display: none !important; }
      .contact-links a[href^="mailto:${EMAIL}"] { min-width: 0 !important; width: fit-content !important; padding: 16px 20px !important; }

      .legal-card { cursor: pointer; }
      .legal-card:hover { border-color: rgba(180, 167, 229, 0.42); }
      .legal-card .legal-card-extra { display: none; margin-top: 10px; color: var(--muted); line-height: 1.58; }
      .legal-card.is-open .legal-card-extra { display: grid; gap: 8px; }
      .legal-note, .legal-details { display: none !important; }
    `;
    document.head.appendChild(style);
  };

  const ensureHeroSummary = () => {
    const heroCopy = document.querySelector('.hero-copy');
    if (!heroCopy) return;
    let summary = heroCopy.querySelector('.hero-summary-compact');
    if (!summary) {
      summary = document.createElement('p');
      summary.className = 'hero-summary-compact';
      const title = heroCopy.querySelector('h1');
      title?.insertAdjacentElement('afterend', summary);
    }
    summary.textContent = tr().heroSummary;
    setText('[data-i18n="hero.availability"]', tr().internship);
    setText('[data-i18n="hero.ctaPortfolio"]', tr().projects);
  };

  const findDetailsButton = (card) => [...card.querySelectorAll('button, a')].find((element) => {
    const text = element.textContent?.trim().toLowerCase() || '';
    return text.includes('details anzeigen') || text.includes('show details') || text.includes('détails') || text.includes('detalj');
  });

  const patchProjectCards = () => {
    const projectList = document.querySelector('#projects-grid');
    const cards = [...document.querySelectorAll('.item-card')];
    for (const card of cards) {
      const heading = card.querySelector('h3')?.textContent?.trim() || '';
      if (heading === 'FolioLint' && projectList && projectList.firstElementChild !== card) projectList.prepend(card);
      if (heading === 'SortLab' && !card.textContent.includes('GitHub Pages')) {
        const tagHost = [...card.querySelectorAll('span')].find((span) => span.textContent.trim() === 'Algorithmen')?.parentElement;
        if (tagHost) {
          const tag = document.createElement('span');
          tag.textContent = 'GitHub Pages';
          tagHost.appendChild(tag);
        }
      }
      if (heading.includes('VSW')) {
        for (const span of card.querySelectorAll('span')) if (span.textContent.trim() === 'gemeinsam') span.textContent = 'Gemeinsam';
      }
      if (heading === 'BESP2074') card.dataset.projectId = 'besp2074';

      const detailsButton = findDetailsButton(card);
      if (detailsButton) {
        detailsButton.classList.add('project-details-trigger');
        detailsButton.dataset.detailTrigger = 'true';
        detailsButton.setAttribute('tabindex', '-1');
        card.dataset.clickableCard = 'true';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${heading || 'Project'} öffnen`);
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

  const patchModal = () => {
    const modal = document.querySelector('#detail-modal');
    const preview = document.querySelector('.modal-preview');
    if (preview && !preview.dataset.openHandlerAttached) {
      preview.dataset.openHandlerAttached = 'true';
      preview.addEventListener('click', (event) => {
        const img = preview.querySelector('img');
        const fromImg = img?.currentSrc || img?.src;
        const bg = window.getComputedStyle(preview).backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1];
        const url = fromImg || bg;
        if (!url || url === 'none') return;
        event.preventDefault();
        event.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    }
    const clearFocus = () => {
      document.querySelectorAll('.item-card.is-modal-return-focus').forEach((card) => card.classList.remove('is-modal-return-focus'));
      if (document.activeElement?.classList?.contains('item-card')) {
        document.activeElement.classList.add('is-modal-return-focus');
        setTimeout(() => document.activeElement?.blur?.(), 0);
      }
    };
    modal?.addEventListener('close', clearFocus);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setTimeout(clearFocus, 20); });
  };

  const renderWorkingBanner = () => {
    if (document.querySelector('[data-section="currently-working"]')) {
      const data = tr();
      const section = document.querySelector('[data-section="currently-working"]');
      section.querySelector('[data-working="kicker"]').textContent = data.workingKicker;
      section.querySelector('[data-working="title"]').textContent = data.workingTitle;
      section.querySelector('[data-working="subline"]').textContent = data.workingSubline;
      section.querySelector('[data-working="clientType"]').textContent = data.clientType;
      section.querySelector('[data-working="teamType"]').textContent = data.teamType;
      section.querySelector('[data-working="inProgress"]').textContent = data.inProgress;
      section.querySelector('[data-working="followUp"]').textContent = data.followUp;
      section.querySelector('[data-working="aargoTitle"]').textContent = data.aargoTitle;
      section.querySelector('[data-working="aargoText"]').textContent = data.aargoText;
      section.querySelector('[data-working="heimTitle"]').textContent = data.heimTitle;
      section.querySelector('[data-working="heimText"]').textContent = data.heimText;
      section.querySelector('[data-working="aargoPoints"]').innerHTML = data.aargoPoints.map((p) => `<li>${p}</li>`).join('');
      section.querySelector('[data-working="heimPoints"]').innerHTML = data.heimPoints.map((p) => `<li>${p}</li>`).join('');
      return;
    }

    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;
    const data = tr();
    const section = document.createElement('section');
    section.className = 'currently-working section';
    section.dataset.section = 'currently-working';
    section.innerHTML = `
      <div class="container">
        <div class="working-banner">
          <div class="working-head">
            <p class="kicker" data-working="kicker">${data.workingKicker}</p>
            <h2 data-working="title">${data.workingTitle}</h2>
            <p class="section-subline" data-working="subline">${data.workingSubline}</p>
          </div>
          <div class="working-grid">
            <article class="working-card">
              <div class="working-card-head"><div><p class="kicker" data-working="clientType">${data.clientType}</p><h3 data-working="aargoTitle">${data.aargoTitle}</h3></div><span class="working-badge" data-working="inProgress">${data.inProgress}</span></div>
              <p data-working="aargoText">${data.aargoText}</p>
              <ul class="working-list" data-working="aargoPoints">${data.aargoPoints.map((p) => `<li>${p}</li>`).join('')}</ul>
            </article>
            <article class="working-card">
              <div class="working-card-head"><div><p class="kicker" data-working="teamType">${data.teamType}</p><h3 data-working="heimTitle">${data.heimTitle}</h3></div><span class="working-badge" data-working="followUp">${data.followUp}</span></div>
              <p data-working="heimText">${data.heimText}</p>
              <ul class="working-list" data-working="heimPoints">${data.heimPoints.map((p) => `<li>${p}</li>`).join('')}</ul>
            </article>
          </div>
        </div>
      </div>
    `;
    portfolioSection.insertAdjacentElement('beforebegin', section);
  };

  const patchContact = () => {
    const data = tr();
    setText('[data-i18n="contact.title"]', data.contactTitle);
    setText('[data-i18n="contact.description"]', data.contactText);
    const links = document.querySelector('.contact-links');
    if (links) links.innerHTML = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
  };

  const patchLegal = () => {
    const data = tr();
    setText('[data-i18n="legal.title"]', data.legalTitle);
    setText('[data-i18n="legal.subline"]', data.legalSubline);
    const cards = [...document.querySelectorAll('.legal-card')];
    const configs = [
      { title: data.imprint, button: data.readImprint, body: data.imprintBody },
      { title: data.privacy, button: data.readPrivacy, body: data.privacyBody },
      { title: data.cookies, button: data.readCookies, body: data.cookiesBody }
    ];
    cards.forEach((card, index) => {
      const config = configs[index];
      if (!config) return;
      const heading = card.querySelector('h3');
      if (heading) heading.textContent = config.title;
      let extra = card.querySelector('.legal-card-extra');
      if (!extra) {
        extra = document.createElement('div');
        extra.className = 'legal-card-extra';
        card.querySelector('div:last-child')?.appendChild(extra);
      }
      extra.innerHTML = `<strong>${config.button}</strong>${config.body.map((p) => `<p>${p}</p>`).join('')}`;
      if (!card.dataset.legalHandlerAttached) {
        card.dataset.legalHandlerAttached = 'true';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('click', () => card.classList.toggle('is-open'));
        card.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          card.classList.toggle('is-open');
        });
      }
    });
    document.querySelectorAll('.legal-details, .legal-note').forEach((element) => element.remove());
  };

  const apply = () => {
    injectStyles();
    ensureHeroSummary();
    renderWorkingBanner();
    patchProjectCards();
    patchModal();
    patchContact();
    patchLegal();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();
  window.addEventListener('load', apply, { once: true });
  [80, 250, 700, 1200].forEach((delay) => setTimeout(apply, delay));
  document.querySelectorAll('.lang-option').forEach((button) => button.addEventListener('click', () => setTimeout(apply, 80)));
})();
