(() => {
  const EMAIL = 'aleksandar09n@gmail.com';

  const translations = {
    de: {
      workingKicker: 'Aktuell',
      workingTitle: 'Aktuell in Arbeit',
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
      legalRead: ['Impressum lesen', 'Datenschutz lesen', 'Cookie-Hinweis lesen']
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
      heimText: 'Team project visited by an Aargau heritage-protection project. Our solution reached 2nd place; the next step is exploring how it could be adapted for organizations in other cantons.',
      heimPoints: ['Presentation to external project stakeholders', 'Feedback from a real application context', 'Further development for possible new stakeholders'],
      contactText: 'For an internship, questions, or collaboration, I am reachable by email.',
      legalRead: ['Read imprint', 'Read privacy note', 'Read cookie note']
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
      legalRead: ['Lire les mentions légales', 'Lire la confidentialité', 'Lire les cookies']
    },
    sr: {
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
      contactText: 'Za praksu, pitanja ili saradnju dostupan sam preko e-maila.',
      legalRead: ['Pročitaj impressum', 'Pročitaj privatnost', 'Pročitaj cookies']
    },
    'sr-cyrl': {
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
      contactText: 'За праксу, питања или сарадњу доступан сам преко e-mail-а.',
      legalRead: ['Прочитај impressum', 'Прочитај приватност', 'Прочитај cookies']
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

  const t = () => translations[getLang()] || translations.de;

  const injectStyles = () => {
    if (document.getElementById('portfolio-live-fix-styles')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-live-fix-styles';
    style.textContent = `
      .item-card[data-clickable-card="true"] { cursor: pointer; }
      .item-card[data-clickable-card="true"]:focus-visible { outline: 2px solid rgba(180, 167, 229, 0.62); outline-offset: 3px; }
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
      .item-card[data-project-id="besp2074"] .item-preview img { object-fit: contain !important; background: #10263a; }
      .item-card img[data-openable-preview="true"], .modal-preview, .modal-preview img { cursor: zoom-in; }
      .modal-preview img { object-fit: contain !important; }

      .currently-working { min-height: auto; padding-top: clamp(28px, 4vw, 54px); padding-bottom: clamp(28px, 4vw, 54px); }
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
      }
      .working-banner > * { position: relative; z-index: 1; }
      .working-head { display: grid; gap: 8px; }
      .working-head .kicker, .contact .kicker, .legal-wrap .kicker { color: var(--accent-2) !important; }
      .working-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; }
      .working-card { border: 1px solid rgba(185, 174, 220, 0.18); background: rgba(12, 10, 20, 0.52); border-radius: var(--radius-md); padding: 16px; display: grid; gap: 11px; }
      .working-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
      .working-card h3 { font-size: 1.12rem; }
      .working-card p, .working-card li { color: var(--muted); line-height: 1.58; }
      .working-badge { border: 1px solid rgba(185, 174, 220, 0.18); background: rgba(141, 108, 255, 0.14); border-radius: 999px; color: var(--text); font-size: 0.76rem; font-weight: 800; padding: 6px 9px; white-space: nowrap; }
      .working-list { display: grid; gap: 7px; list-style: disc; padding-left: 18px; }
      .practice-projects, .temporary-project-link { display: none !important; }

      .contact .kicker { display: none !important; }
      .contact .section-card, .contact-card, #contact .contact-card { align-items: center; }
      #contact a[href^="mailto:"] { max-width: max-content; }
      #contact a[href^="mailto:"]:not([href*="aleksandar09n@gmail.com"]) { display: none !important; }

      .legal-card { cursor: pointer; }
      .legal-card:focus-visible { outline: 2px solid rgba(180, 167, 229, 0.62); outline-offset: 3px; }
      .legal-inline-details { display: none; margin-top: 12px; color: var(--muted); line-height: 1.58; }
      .legal-card.is-open .legal-inline-details { display: block; }
      .legal-details { display: none !important; }
    `;
    document.head.appendChild(style);
  };

  const cardTitle = (card) => card.querySelector('h3')?.textContent?.trim() || '';

  const findDetailsButton = (card) => [...card.querySelectorAll('button, a')].find((el) => {
    const text = el.textContent?.trim().toLowerCase() || '';
    return text.includes('details anzeigen') || text.includes('show details') || text.includes('détails');
  });

  const patchProjectCards = () => {
    const projectList = document.querySelector('#projects-grid');
    const cards = [...document.querySelectorAll('.item-card')];
    for (const card of cards) {
      const heading = cardTitle(card);
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
            setTimeout(() => card.blur(), 0);
          });
          card.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            detailsButton.click();
            setTimeout(() => card.blur(), 0);
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

  const patchModalPreview = () => {
    const modalPreview = document.querySelector('.modal-preview');
    if (!modalPreview || modalPreview.dataset.openHandlerAttached) return;
    modalPreview.dataset.openHandlerAttached = 'true';
    modalPreview.addEventListener('click', (event) => {
      const img = modalPreview.querySelector('img');
      const imageUrl = img?.currentSrc || img?.src || '';
      if (!imageUrl) return;
      event.preventDefault();
      event.stopPropagation();
      window.open(imageUrl, '_blank', 'noopener,noreferrer');
    });
  };

  const workingCard = (type, badge, title, text, points) => `
    <article class="working-card">
      <div class="working-card-head">
        <div>
          <p class="kicker">${type}</p>
          <h3>${title}</h3>
        </div>
        <span class="working-badge">${badge}</span>
      </div>
      <p>${text}</p>
      <ul class="working-list">${points.map((point) => `<li>${point}</li>`).join('')}</ul>
    </article>`;

  const renderWorkingSection = () => {
    const existing = document.querySelector('[data-section="currently-working"]');
    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;

    const copy = t();
    const section = existing || document.createElement('section');
    section.className = 'currently-working section';
    section.dataset.section = 'currently-working';
    section.setAttribute('aria-labelledby', 'currently-working-title');
    section.innerHTML = `
      <div class="container">
        <div class="working-banner reveal">
          <div class="working-head">
            <p class="kicker">${copy.workingKicker}</p>
            <h2 id="currently-working-title">${copy.workingTitle}</h2>
            <p class="section-subline">${copy.workingSubline}</p>
          </div>
          <div class="working-grid">
            ${workingCard(copy.clientType, copy.inProgress, copy.aargoTitle, copy.aargoText, copy.aargoPoints)}
            ${workingCard(copy.teamType, copy.followUp, copy.heimTitle, copy.heimText, copy.heimPoints)}
          </div>
        </div>
      </div>`;

    if (!existing) portfolioSection.insertAdjacentElement('beforebegin', section);
  };

  const patchContact = () => {
    const contact = document.querySelector('#contact');
    if (!contact) return;

    const paragraphs = [...contact.querySelectorAll('p')].filter((p) => !p.classList.contains('kicker'));
    if (paragraphs[0]) paragraphs[0].textContent = t().contactText;

    const mailLinks = [...contact.querySelectorAll('a[href^="mailto:"]')];
    for (const link of mailLinks) {
      if (link.href.includes(EMAIL)) {
        link.href = `mailto:${EMAIL}`;
        link.textContent = EMAIL;
      } else {
        link.style.display = 'none';
      }
    }
  };

  const legalTexts = () => {
    const lang = getLang();
    if (lang === 'en') {
      return [
        'This is a private portfolio website by Aleksandar Nikolic. Contact is available by email in the contact section.',
        'No forms, analytics, or advertising trackers are used. The host only processes technically necessary access data when the site is opened.',
        'No tracking cookies are used. Only the selected language can be stored locally so the setting is kept.'
      ];
    }
    if (lang === 'fr') {
      return [
        'Ce site est un portfolio privé d’Aleksandar Nikolic. Le contact se fait par e-mail dans la section contact.',
        'Aucun formulaire, analytics ou traceur publicitaire n’est utilisé. L’hébergeur traite seulement les données d’accès techniquement nécessaires.',
        'Aucun cookie de suivi n’est utilisé. Seule la langue sélectionnée peut être enregistrée localement.'
      ];
    }
    if (lang === 'sr' || lang === 'sr-cyrl') {
      return lang === 'sr'
        ? ['Ovo je privatna portfolio stranica Aleksandra Nikolića. Kontakt je moguć preko e-maila.', 'Nema formulara, analytics-a ili reklamnih trackera. Hoster obrađuje samo tehnički neophodne pristupne podatke.', 'Nema tracking cookies. Samo izabrani jezik može biti lokalno sačuvan.']
        : ['Ово је приватна портфолио страница Aleksandar-а Nikolic-а. Контакт је могућ преко e-mail-а.', 'Нема формулара, analytics-а или рекламних tracker-а. Хостер обрађује само технички неопходне приступне податке.', 'Нема tracking cookies. Само изабрани језик може бити локално сачуван.'];
    }
    return [
      'Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolic. Kontakt erfolgt per E-Mail im Kontaktbereich.',
      'Die Website setzt keine Formulare, Analytics oder Werbetracker ein. Beim Aufruf verarbeitet der Hoster nur technisch notwendige Zugriffsdaten.',
      'Es werden keine Tracking-Cookies gesetzt. Nur die gewählte Sprache kann lokal gespeichert werden, damit die Einstellung erhalten bleibt.'
    ];
  };

  const patchLegalCards = () => {
    const cards = [...document.querySelectorAll('.legal-card')];
    if (!cards.length) return;
    const copy = t();
    const body = legalTexts();

    cards.slice(0, 3).forEach((card, index) => {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      let details = card.querySelector('.legal-inline-details');
      if (!details) {
        details = document.createElement('div');
        details.className = 'legal-inline-details';
        card.appendChild(details);
      }
      details.innerHTML = `<strong>${copy.legalRead[index]}</strong><p>${body[index]}</p>`;
      if (!card.dataset.legalHandlerAttached) {
        card.dataset.legalHandlerAttached = 'true';
        const toggle = () => card.classList.toggle('is-open');
        card.addEventListener('click', toggle);
        card.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          toggle();
        });
      }
    });
  };

  const removeInjectedHeroChanges = () => {
    const hero = document.querySelector('#home');
    if (!hero) return;
    hero.querySelector('[data-live-hero-image]')?.remove();
    for (const element of hero.querySelectorAll('[data-live-hidden="true"]')) {
      element.style.removeProperty('display');
      element.removeAttribute('data-live-hidden');
    }
  };

  const run = () => {
    injectStyles();
    removeInjectedHeroChanges();
    patchProjectCards();
    patchModalPreview();
    renderWorkingSection();
    patchContact();
    patchLegalCards();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once: true });
  else run();

  window.addEventListener('load', () => {
    run();
    setTimeout(run, 250);
    setTimeout(run, 900);
  }, { once: true });

  for (const option of document.querySelectorAll('.lang-option')) {
    option.addEventListener('click', () => {
      setTimeout(run, 80);
      setTimeout(run, 240);
    });
  }
})();
