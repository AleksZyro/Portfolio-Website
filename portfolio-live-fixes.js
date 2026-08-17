(() => {
  const translations = {
    de: {
      kicker: 'Aktuell', title: 'Currently working on', subline: 'Laufende Praxisprojekte mit echten Anforderungen, Feedback und Weiterentwicklung.',
      clientType: 'Kundenprojekt', teamType: 'Teamprojekt', inProgress: 'in Arbeit', followUp: 'Weiterentwicklung',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Firmenwebsite für ein lokales Reinigungsunternehmen. Fokus: Kundengespräch, Anforderungen, Prototyping, statische Umsetzung sowie Hosting- und Domain-Abklärung.',
      aargoPoints: ['Kundengespräch und Anforderungsaufnahme', 'Prototyp für Struktur, Inhalte und Kontaktführung', 'Deployment-/Domain-Abklärung ohne bestehendes Mail-Setup zu beschädigen'],
      heimTitle: 'Heimatschutz-Projekt',
      heimText: 'Teamprojekt mit Besuch durch ein Aargauer Heimatschutz-Projekt. Unsere Lösung erreichte den 2. Platz; aktuell wird geprüft, wie die Lösung für Organisationen in anderen Kantonen weitergedacht werden kann.',
      heimPoints: ['Präsentation vor externen Projektbeteiligten', 'Feedback aus einem realen Anwendungskontext', 'Weiterentwicklung für mögliche neue Stakeholder'],
      contactText: 'Für eine Praktikumsstelle 2027/2028 in der Schweiz, Rückfragen oder Zusammenarbeit bin ich per E-Mail erreichbar.',
      contactLabel: 'E-Mail', legalSubline: 'Kurz, transparent und ohne Tracking-Geschwurbel.'
    },
    en: {
      kicker: 'Current work', title: 'Currently working on', subline: 'Ongoing practical projects with real requirements, feedback and iteration.',
      clientType: 'Client project', teamType: 'Team project', inProgress: 'in progress', followUp: 'follow-up',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Company website for a local cleaning business. Focus: client discussion, requirements, prototyping, static implementation and hosting/domain coordination.',
      aargoPoints: ['Client discussion and requirements clarification', 'Prototype for structure, content and contact flow', 'Deployment/domain preparation without breaking the existing mail setup'],
      heimTitle: 'Heritage protection project',
      heimText: 'Team project visited by an Aargau heritage-protection project. Our solution reached 2nd place; the next step is exploring how the solution could be adapted for organizations in other cantons.',
      heimPoints: ['Presentation to external project stakeholders', 'Feedback from a real application context', 'Further development for possible new stakeholders'],
      contactText: 'For a 2027/2028 internship in Switzerland, questions or collaboration, I am reachable by email.',
      contactLabel: 'Email', legalSubline: 'Short, transparent and without tracking noise.'
    },
    fr: {
      kicker: 'En cours', title: 'Projets actuels', subline: 'Projets pratiques en cours avec exigences réelles, retours et itérations.',
      clientType: 'Projet client', teamType: 'Projet d’équipe', inProgress: 'en cours', followUp: 'suite',
      aargoTitle: 'Site web AargoClean GmbH',
      aargoText: 'Site web d’entreprise pour une société locale de nettoyage. Focus: échange client, exigences, prototype, réalisation statique et coordination hébergement/domaine.',
      aargoPoints: ['Échange client et clarification des exigences', 'Prototype pour structure, contenu et contact', 'Préparation déploiement/domaine sans perturber la messagerie existante'],
      heimTitle: 'Projet de protection du patrimoine',
      heimText: 'Projet d’équipe visité par un projet argovien de protection du patrimoine. Notre solution a obtenu la 2e place; l’étape suivante est d’étudier une adaptation pour d’autres cantons.',
      heimPoints: ['Présentation à des parties prenantes externes', 'Retour d’un contexte d’utilisation réel', 'Développement possible pour de nouveaux acteurs'],
      contactText: 'Pour un stage 2027/2028 en Suisse, des questions ou une collaboration, je suis joignable par e-mail.',
      contactLabel: 'E-mail', legalSubline: 'Court, transparent et sans suivi inutile.'
    },
    sr: {
      kicker: 'Trenutno', title: 'Trenutno radim na', subline: 'Praktični projekti u toku sa realnim zahtevima, povratnim informacijama i daljim razvojem.',
      clientType: 'Klijentski projekat', teamType: 'Timski projekat', inProgress: 'u toku', followUp: 'dalji razvoj',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Web stranica za lokalnu firmu za čišćenje. Fokus: razgovor sa klijentom, zahtevi, prototip, statička implementacija i koordinacija hostinga/domena.',
      aargoPoints: ['Razgovor sa klijentom i prikupljanje zahteva', 'Prototip za strukturu, sadržaj i kontakt', 'Priprema deploymenta i domena bez oštećenja postojećeg mail setupa'],
      heimTitle: 'Heimatschutz projekat',
      heimText: 'Timski projekat koji je posetio jedan aargauski Heimatschutz projekat. Naše rešenje je osvojilo 2. mesto; sada se razmatra dalji razvoj za organizacije u drugim kantonima.',
      heimPoints: ['Prezentacija pred spoljnim učesnicima projekta', 'Feedback iz realnog konteksta', 'Dalji razvoj za moguće nove stakeholder-e'],
      contactText: 'Za praksu 2027/2028 u Švajcarskoj, pitanja ili saradnju dostupan sam preko e-maila.',
      contactLabel: 'E-mail', legalSubline: 'Kratko, transparentno i bez tracking-a.'
    },
    'sr-cyrl': {
      kicker: 'Тренутно', title: 'Тренутно радим на', subline: 'Практични пројекти у току са реалним захтевима, повратним информацијама и даљим развојем.',
      clientType: 'Клијентски пројекат', teamType: 'Тимски пројекат', inProgress: 'у току', followUp: 'даљи развој',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Веб страница за локалну фирму за чишћење. Фокус: разговор са клијентом, захтеви, прототип, статичка имплементација и координација хостинга/домена.',
      aargoPoints: ['Разговор са клијентом и прикупљање захтева', 'Прототип за структуру, садржај и контакт', 'Припрема deployment-а и домена без оштећења постојећег mail setup-а'],
      heimTitle: 'Heimatschutz пројекат',
      heimText: 'Тимски пројекат који је посетио један ааргауски Heimatschutz пројекат. Наше решење је освојило 2. место; сада се разматра даљи развој за организације у другим кантонима.',
      heimPoints: ['Презентација пред спољним учесницима пројекта', 'Feedback из реалног контекста', 'Даљи развој за могуће нове stakeholder-е'],
      contactText: 'За праксу 2027/2028 у Швајцарској, питања или сарадњу доступан сам преко e-mail-а.',
      contactLabel: 'E-mail', legalSubline: 'Кратко, транспарентно и без tracking-а.'
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
  const tr = () => translations[getLang()] || translations.de;

  const injectStyles = () => {
    if (document.getElementById('portfolio-live-fix-styles')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-live-fix-styles';
    style.textContent = `
      .hero-ticker { overflow: visible; }
      .ticker-track { width: 100%; display: flex; flex-wrap: wrap; gap: 10px; padding: 10px; animation: none !important; transform: none !important; }
      .ticker-set { display: flex; flex-wrap: wrap; gap: 10px; padding-right: 0; }
      .ticker-set[aria-hidden="true"] { display: none; }
      .item-card[data-clickable-card="true"] { cursor: pointer; }
      .item-card[data-clickable-card="true"]:hover, .item-card[data-clickable-card="true"]:focus-visible { border-color: rgba(180, 167, 229, 0.46); }
      .item-card[data-clickable-card="true"]:focus:not(:focus-visible), .item-card[data-clickable-card="true"].is-modal-return-focus { outline: none !important; border-color: var(--line) !important; box-shadow: var(--shadow) !important; }
      .item-card[data-clickable-card="true"] .project-details-trigger, .item-card[data-clickable-card="true"] [data-detail-trigger="true"] { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0 0 0 0) !important; white-space: nowrap !important; border: 0 !important; }
      .item-card[data-project-id="besp2074"] img, .item-card[data-project-id="besp2074"] .project-preview img, .item-card[data-project-id="besp2074"] .item-preview img { object-fit: contain !important; background: #10263a; }
      .item-card img[data-openable-preview="true"], .modal-preview, .modal-preview img { cursor: zoom-in; }
      .modal-preview img { object-fit: contain !important; }
      .currently-working { min-height: auto; padding-top: clamp(22px, 4vw, 42px); padding-bottom: clamp(26px, 4vw, 52px); }
      .working-banner { border: 1px solid rgba(180, 167, 229, 0.30); background: linear-gradient(135deg, rgba(32, 26, 50, 0.96), rgba(17, 15, 28, 0.92)); border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: clamp(18px, 3vw, 26px); display: grid; gap: 18px; position: relative; overflow: hidden; }
      .working-banner::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at top right, rgba(141, 108, 255, 0.22), transparent 34%); opacity: 0.9; }
      .working-banner > * { position: relative; z-index: 1; }
      .working-head { display: grid; gap: 8px; }
      .working-head .kicker, .contact .kicker, .legal-wrap .kicker { color: var(--accent-2) !important; text-shadow: 0 0 18px rgba(180, 167, 229, 0.18); }
      .working-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; }
      .working-card { border: 1px solid rgba(185, 174, 220, 0.18); background: rgba(12, 10, 20, 0.52); border-radius: var(--radius-md); padding: 16px; display: grid; gap: 11px; }
      .working-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
      .working-card h3 { font-size: 1.12rem; }
      .working-card p, .working-card li { color: var(--muted); line-height: 1.58; }
      .working-badge { border: 1px solid rgba(185, 174, 220, 0.18); background: rgba(141, 108, 255, 0.14); border-radius: 999px; color: var(--text); font-size: 0.76rem; font-weight: 800; padding: 6px 9px; white-space: nowrap; }
      .working-list { display: grid; gap: 7px; list-style: disc; padding-left: 18px; }
      .practice-projects, .temporary-project-link { display: none !important; }
      .legal-details { margin-top: 14px; display: grid; gap: 10px; }
      .legal-details details { border: 1px solid var(--line); background: var(--surface); border-radius: var(--radius-md); padding: 12px 14px; }
      .legal-details summary { cursor: pointer; color: var(--text); font-weight: 800; }
      .legal-details p { color: var(--muted); line-height: 1.58; }
      .legal-details-content { display: grid; gap: 8px; padding-top: 10px; }
    `;
    document.head.appendChild(style);
  };

  const titleOf = (card) => card.querySelector('h3')?.textContent?.trim() || '';
  const detailsButton = (card) => [...card.querySelectorAll('button, a')].find((el) => /details anzeigen|show details/i.test(el.textContent || ''));

  const patchCards = () => {
    const grid = document.querySelector('#projects-grid');
    for (const card of document.querySelectorAll('.item-card')) {
      const title = titleOf(card);
      if (title === 'FolioLint' && grid && grid.firstElementChild !== card) grid.prepend(card);
      if (title === 'SortLab' && !card.textContent.includes('GitHub Pages')) {
        const host = [...card.querySelectorAll('span')].find((span) => span.textContent.trim() === 'Algorithmen')?.parentElement;
        if (host) host.append(Object.assign(document.createElement('span'), { textContent: 'GitHub Pages' }));
      }
      if (title.includes('VSW')) {
        for (const span of card.querySelectorAll('span')) if (span.textContent.trim() === 'gemeinsam') span.textContent = 'Gemeinsam';
      }
      if (title === 'BESP2074') card.dataset.projectId = 'besp2074';
      const btn = detailsButton(card);
      if (btn && !card.dataset.clickHandlerAttached) {
        btn.classList.add('project-details-trigger');
        btn.dataset.detailTrigger = 'true';
        card.dataset.clickableCard = 'true';
        card.dataset.clickHandlerAttached = 'true';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${title || 'Projekt'} öffnen`);
        card.addEventListener('click', (event) => {
          if (event.target.closest('a:not([data-detail-trigger="true"]), button:not([data-detail-trigger="true"]), img[data-openable-preview="true"]')) return;
          btn.click();
        });
        card.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          btn.click();
        });
      }
      for (const img of card.querySelectorAll('img')) {
        img.dataset.openablePreview = 'true';
        if (!img.dataset.openHandlerAttached) {
          img.dataset.openHandlerAttached = 'true';
          img.addEventListener('click', (event) => {
            event.preventDefault(); event.stopPropagation();
            const src = img.currentSrc || img.src;
            if (src) window.open(src, '_blank', 'noopener,noreferrer');
          });
        }
      }
    }
  };

  const patchModal = () => {
    const modalPreview = document.querySelector('.modal-preview');
    if (modalPreview && !modalPreview.dataset.openHandlerAttached) {
      modalPreview.dataset.openHandlerAttached = 'true';
      modalPreview.addEventListener('click', (event) => {
        const img = modalPreview.querySelector('img');
        let url = img?.currentSrc || img?.src || '';
        if (!url) {
          const match = getComputedStyle(modalPreview).backgroundImage.match(/url\(["']?(.*?)["']?\)/);
          url = match?.[1] || '';
        }
        if (url && url !== 'none') { event.preventDefault(); event.stopPropagation(); window.open(url, '_blank', 'noopener,noreferrer'); }
      });
    }
    const modal = document.querySelector('#detail-modal');
    if (modal && !modal.dataset.focusCleanupAttached) {
      modal.dataset.focusCleanupAttached = 'true';
      const clean = () => {
        document.activeElement?.blur?.();
        document.querySelectorAll('.item-card.is-modal-return-focus').forEach((c) => c.classList.remove('is-modal-return-focus'));
        document.querySelectorAll('.item-card[data-clickable-card="true"]:focus').forEach((c) => c.blur());
      };
      modal.addEventListener('close', clean);
      document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setTimeout(clean, 0); });
      document.querySelector('#modal-close')?.addEventListener('click', () => setTimeout(clean, 0));
    }
  };

  const cardHtml = (kind, title, badge, text, points) => `
    <article class="working-card">
      <div class="working-card-head"><div><p class="kicker">${kind}</p><h3>${title}</h3></div><span class="working-badge">${badge}</span></div>
      <p>${text}</p>
      <ul class="working-list">${points.map((p) => `<li>${p}</li>`).join('')}</ul>
    </article>`;

  const renderWorking = () => {
    let section = document.querySelector('[data-section="currently-working"]');
    if (!section) {
      const portfolio = document.querySelector('#portfolio');
      if (!portfolio) return;
      section = document.createElement('section');
      section.className = 'currently-working section';
      section.dataset.section = 'currently-working';
      portfolio.insertAdjacentElement('beforebegin', section);
    }
    const x = tr();
    section.innerHTML = `<div class="container"><div class="working-banner"><div class="working-head"><p class="kicker">${x.kicker}</p><h2>${x.title}</h2><p class="section-subline">${x.subline}</p></div><div class="working-grid">${cardHtml(x.clientType, x.aargoTitle, x.inProgress, x.aargoText, x.aargoPoints)}${cardHtml(x.teamType, x.heimTitle, x.followUp, x.heimText, x.heimPoints)}</div></div></div>`;
  };

  const patchContact = () => {
    const contact = document.querySelector('#contact');
    if (!contact) return;
    const x = tr();
    const desc = contact.querySelector('[data-i18n="contact.description"]');
    if (desc) desc.textContent = x.contactText;
    const links = contact.querySelector('.contact-links');
    if (links) links.innerHTML = '<a href="mailto:aleksandar09n@gmail.com">aleksandar09n@gmail.com</a>';
  };

  const addLegalDetails = () => {
    if (document.querySelector('[data-legal-details="expanded"]')) return;
    const grid = document.querySelector('.legal-grid');
    if (!grid) return;
    const details = document.createElement('div');
    details.className = 'legal-details';
    details.dataset.legalDetails = 'expanded';
    details.innerHTML = `
      <details><summary>Impressum lesen</summary><div class="legal-details-content"><p>Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolic und dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten.</p><p>Kontakt erfolgt über die im Kontaktbereich angegebene E-Mail-Adresse. Es gibt kein Kontaktformular und keine direkte Dateneingabe auf der Seite.</p></div></details>
      <details><summary>Datenschutz lesen</summary><div class="legal-details-content"><p>Die Website setzt keine Analytics, keine Werbetracker und keine externen Tracking-Skripte ein. Beim Aufruf können durch den Hoster technisch notwendige Zugriffsdaten verarbeitet werden.</p><p>Projektbilder, Zertifikate und die GitHub-Grafik werden lokal ausgeliefert. Externe Dienste werden erst geöffnet, wenn ein externer Link aktiv angeklickt wird.</p></div></details>
      <details><summary>Cookies lesen</summary><div class="legal-details-content"><p>Es werden keine Tracking-Cookies gesetzt. Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung beim nächsten Besuch erhalten bleibt.</p><p>Diese lokale Speicherung dient nur der Bedienbarkeit der Website und nicht der Verfolgung oder Analyse von Besuchern.</p></div></details>`;
    grid.insertAdjacentElement('afterend', details);
  };

  const removeOldTemporaryItems = () => {
    document.querySelectorAll('.temporary-project-link, [data-section="practice-projects"]').forEach((el) => el.remove());
  };

  const run = () => {
    injectStyles();
    removeOldTemporaryItems();
    patchCards();
    patchModal();
    renderWorking();
    patchContact();
    addLegalDetails();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once: true });
  else run();
  window.addEventListener('load', run, { once: true });
  document.querySelectorAll('.lang-option, .lang-menu-button').forEach((el) => el.addEventListener('click', () => setTimeout(run, 0)));
  for (const delay of [100, 400, 1000]) setTimeout(run, delay);
})();
