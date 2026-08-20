(() => {
  const CERTIFICATE_ASSETS = {
    abacus: {
      id: 'abacusFinanzbuchhaltung',
      title: 'ABACUS Finanzbuchhaltung',
      description: 'Anwender-Zertifikat für Benutzeroberfläche, Stammdaten, Buchungen, Auswertungen und MWST-Abrechnung.',
      date: '26.05.2026',
      tags: ['ABACUS', 'Finanzbuchhaltung'],
      file: 'assets/certificates/abacus-finanzbuchhaltung.pdf',
      preview: 'assets/certificate-previews/abacus-finanzbuchhaltung.png'
    },
    linkedinAi: {
      id: 'linkedinGenerativeKi',
      title: 'Was ist generative KI?',
      description: 'LinkedIn-Learning-Kurs zu generativen KI-Tools, künstlicher Intelligenz und generativer KI.',
      date: '20.08.2026',
      tags: ['LinkedIn Learning', 'Generative KI'],
      file: 'assets/certificates/linkedin-generative-ki.pdf',
      preview: 'assets/certificate-previews/linkedin-generative-ki.png',
      certificateUrl: 'https://www.linkedin.com/learning/certificates/6fea3567c65e53cc22130d2b038ee8ec40552661ae16267d4e56364d1537ffa1'
    }
  };

  const WORKING_COPY = {
    de: {
      kicker: 'Aktuell', title: 'Aktuelle Praxisprojekte', subline: 'Laufende Arbeiten mit echten Anforderungen, Gesprächen und Weiterentwicklung.',
      clientType: 'Kundenprojekt', teamType: 'Teamprojekt', inProgress: 'in Arbeit', followUp: 'Weiterentwicklung',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Firmenwebsite für ein lokales Reinigungsunternehmen. Fokus: Kundengespräch, Anforderungen, Prototyping, statische Umsetzung sowie Hosting- und Domain-Abklärung.',
      aargoPoints: ['Kundengespräch und Anforderungsaufnahme', 'Prototyp für Struktur, Inhalte und Kontaktführung', 'Deployment-/Domain-Abklärung ohne bestehendes Mail-Setup zu beschädigen'],
      heimTitle: 'Heimatschutz ANAMB',
      heimText: 'Teamprojekt im Rahmen eines Besuchs durch ein Aargauer Heimatschutz-Projekt an unserer Schule. Unsere Lösung wurde nicht ausgewählt, brachte aber wertvolle Erfahrung mit realen Stakeholdern und Kundenfeedback.',
      heimPoints: ['Softwarelösung für einen realen Organisationskontext', 'Präsentation und Feedback mit externen Beteiligten', 'Prüfung, ob Heimatschutz-Organisationen in anderen Kantonen Interesse haben könnten']
    },
    en: {
      kicker: 'Current work', title: 'Current practical projects', subline: 'Ongoing work with real requirements, discussions and iteration.',
      clientType: 'Client project', teamType: 'Team project', inProgress: 'in progress', followUp: 'follow-up',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Company website for a local cleaning business. Focus: client discussion, requirements, prototyping, static implementation and hosting/domain coordination.',
      aargoPoints: ['Client discussion and requirements clarification', 'Prototype for structure, content and contact flow', 'Deployment/domain preparation without breaking the existing mail setup'],
      heimTitle: 'Heimatschutz ANAMB',
      heimText: 'Team project connected to a visit by an Aargau heritage-protection project at our school. Our solution was not selected, but it gave us valuable experience with real stakeholders and customer feedback.',
      heimPoints: ['Software solution for a real organizational context', 'Presentation and feedback with external stakeholders', 'Exploring whether heritage-protection organizations in other cantons could be interested']
    },
    fr: {
      kicker: 'En cours', title: 'Projets pratiques actuels', subline: 'Travaux en cours avec exigences réelles, échanges et itérations.',
      clientType: 'Projet client', teamType: 'Projet d’équipe', inProgress: 'en cours', followUp: 'suite',
      aargoTitle: 'Site web AargoClean GmbH',
      aargoText: 'Site web d’entreprise pour une société locale de nettoyage. Focus: échange client, exigences, prototype, réalisation statique et coordination hébergement/domaine.',
      aargoPoints: ['Échange client et clarification des exigences', 'Prototype pour structure, contenu et contact', 'Préparation déploiement/domaine sans perturber la messagerie existante'],
      heimTitle: 'Heimatschutz ANAMB',
      heimText: 'Projet d’équipe lié à la visite d’un projet argovien de protection du patrimoine dans notre école. Notre solution n’a pas été retenue, mais nous avons acquis une expérience précieuse avec des parties prenantes réelles.',
      heimPoints: ['Solution logicielle pour un contexte organisationnel réel', 'Présentation et retours avec des parties prenantes externes', 'Recherche d’intérêt possible auprès d’organisations d’autres cantons']
    },
    sr: {
      kicker: 'Trenutno', title: 'Trenutni praktični projekti', subline: 'Rad u toku sa realnim zahtevima, razgovorima i daljim razvojem.',
      clientType: 'Klijentski projekat', teamType: 'Timski projekat', inProgress: 'u toku', followUp: 'dalji razvoj',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Web stranica za lokalnu firmu za čišćenje. Fokus: razgovor sa klijentom, zahtevi, prototip, statička implementacija i koordinacija hostinga/domena.',
      aargoPoints: ['Razgovor sa klijentom i prikupljanje zahteva', 'Prototip za strukturu, sadržaj i kontakt', 'Priprema deploymenta i domena bez oštećenja postojećeg mail setupa'],
      heimTitle: 'Heimatschutz ANAMB',
      heimText: 'Timski projekat povezan sa posetom jednog aargauskog Heimatschutz projekta našoj školi. Naše rešenje nije izabrano, ali smo stekli vredno iskustvo sa realnim stakeholder-ima i feedbackom.',
      heimPoints: ['Softversko rešenje za realan organizacioni kontekst', 'Prezentacija i feedback sa spoljnim učesnicima', 'Ispitivanje da li bi organizacije u drugim kantonima mogle biti zainteresovane']
    },
    'sr-cyrl': {
      kicker: 'Тренутно', title: 'Тренутни практични пројекти', subline: 'Рад у току са реалним захтевима, разговорима и даљим развојем.',
      clientType: 'Клијентски пројекат', teamType: 'Тимски пројекат', inProgress: 'у току', followUp: 'даљи развој',
      aargoTitle: 'AargoClean GmbH Website',
      aargoText: 'Веб страница за локалну фирму за чишћење. Фокус: разговор са клијентом, захтеви, прототип, статичка имплементација и координација хостинга/домена.',
      aargoPoints: ['Разговор са клијентом и прикупљање захтева', 'Прототип за структуру, садржај и контакт', 'Припрема deployment-а и домена без оштећења постојећег mail setup-а'],
      heimTitle: 'Heimatschutz ANAMB',
      heimText: 'Тимски пројекат повезан са посетом једног ааргауског Heimatschutz пројекта нашој школи. Наше решење није изабрано, али смо стекли вредно искуство са реалним stakeholder-има и feedback-ом.',
      heimPoints: ['Софтверско решење за реалан организациони контекст', 'Презентација и feedback са спољним учесницима', 'Испитивање да ли би организације у другим кантонима могле бити заинтересоване']
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

  const workText = () => WORKING_COPY[getLang()] || WORKING_COPY.de;

  const injectStyles = () => {
    if (document.getElementById('portfolio-live-fix-styles')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-live-fix-styles';
    style.textContent = `
      .item-card[data-clickable-card="true"] { cursor: pointer; }
      .item-card[data-clickable-card="true"]:hover,
      .item-card[data-clickable-card="true"]:focus-visible { border-color: rgba(180, 167, 229, 0.46); }
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
      .working-head .kicker, .contact .kicker, .legal-wrap .kicker, .certificate-section .kicker { color: var(--accent-2) !important; text-shadow: 0 0 18px rgba(180, 167, 229, 0.18); }
      .working-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; }
      .working-card { border: 1px solid rgba(185, 174, 220, 0.18); background: rgba(12, 10, 20, 0.52); border-radius: var(--radius-md); padding: 16px; display: grid; gap: 11px; }
      .working-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
      .working-card h3 { font-size: 1.12rem; }
      .working-card p, .working-card li { color: var(--muted); line-height: 1.58; }
      .working-badge { border: 1px solid rgba(185, 174, 220, 0.18); background: rgba(141, 108, 255, 0.14); border-radius: 999px; color: var(--text); font-size: 0.76rem; font-weight: 800; padding: 6px 9px; white-space: nowrap; }
      .working-list { display: grid; gap: 7px; list-style: disc; padding-left: 18px; }
      .practice-projects, .temporary-project-link { display: none !important; }
      .certificate-section { min-height: auto; padding-top: clamp(42px, 6vw, 78px); padding-bottom: clamp(42px, 6vw, 78px); }
      .certificate-section .certificate-block { margin-top: 0; }
      .certificate-section .certificate-head { display: none; }
      .certificate-extra-card .item-preview img { object-fit: contain; background: #f6f7fb; }
      .certificate-extra-card .certificate-date { color: var(--muted); font-weight: 700; }
      .contact .kicker { display: none !important; }
      .contact a[href^="mailto:"]:not([href="mailto:aleksandar09n@gmail.com"]) { display: none !important; }
      .contact a[href="mailto:aleksandar09n@gmail.com"] { width: auto; min-width: 0; justify-self: start; padding-inline: 18px; }
      .legal-details { display: none !important; }
      .legal-grid article, .legal-grid .legal-card { cursor: pointer; }
      .legal-inline-details { margin-top: 12px; color: var(--muted); line-height: 1.58; }
      .legal-inline-details[hidden] { display: none !important; }
    `;
    document.head.appendChild(style);
  };

  const getCardTitle = (card) => card.querySelector('h3')?.textContent?.trim() || '';
  const findDetailsButton = (card) => [...card.querySelectorAll('button, a')].find((el) => /details anzeigen|show details|détails|detalji/i.test(el.textContent || ''));
  const clearReturnFocus = () => { document.querySelectorAll('.is-modal-return-focus').forEach((el) => el.classList.remove('is-modal-return-focus')); const active = document.activeElement; if (active?.classList?.contains('item-card')) active.blur(); };

  const patchProjectCards = () => {
    const projectList = document.querySelector('#projects-grid');
    [...document.querySelectorAll('.item-card')].forEach((card) => {
      const heading = getCardTitle(card);
      if (heading === 'FolioLint' && projectList && projectList.firstElementChild !== card) projectList.prepend(card);
      if (heading === 'SortLab' && !card.textContent.includes('GitHub Pages')) {
        const tagHost = [...card.querySelectorAll('span')].find((span) => span.textContent.trim() === 'Algorithmen')?.parentElement;
        if (tagHost) { const tag = document.createElement('span'); tag.textContent = 'GitHub Pages'; tagHost.appendChild(tag); }
      }
      if (heading.includes('VSW')) card.querySelectorAll('span').forEach((span) => { if (span.textContent.trim() === 'gemeinsam') span.textContent = 'Gemeinsam'; });
      if (heading === 'BESP2074') card.dataset.projectId = 'besp2074';
      const detailsButton = findDetailsButton(card);
      if (detailsButton && !card.dataset.clickHandlerAttached) {
        detailsButton.classList.add('project-details-trigger'); detailsButton.dataset.detailTrigger = 'true'; card.dataset.clickableCard = 'true'; card.setAttribute('tabindex', '0'); card.setAttribute('role', 'button'); card.setAttribute('aria-label', `${heading || 'Element'} öffnen`); card.dataset.clickHandlerAttached = 'true';
        card.addEventListener('click', (event) => { if (event.target.closest('a:not([data-detail-trigger="true"]), button:not([data-detail-trigger="true"]), img[data-openable-preview="true"]')) return; detailsButton.click(); });
        card.addEventListener('keydown', (event) => { if (event.key !== 'Enter' && event.key !== ' ') return; event.preventDefault(); detailsButton.click(); });
      }
      card.querySelectorAll('img').forEach((image) => { image.dataset.openablePreview = 'true'; if (image.dataset.openHandlerAttached) return; image.dataset.openHandlerAttached = 'true'; image.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); const src = image.currentSrc || image.src; if (src) window.open(src, '_blank', 'noopener,noreferrer'); }); });
    });
  };

  const patchModalPreview = () => {
    const modalPreview = document.querySelector('.modal-preview'); if (!modalPreview || modalPreview.dataset.openHandlerAttached) return;
    modalPreview.dataset.openHandlerAttached = 'true';
    modalPreview.addEventListener('click', (event) => { const img = modalPreview.querySelector('img'); const src = img?.currentSrc || img?.src || ''; if (!src) return; event.preventDefault(); event.stopPropagation(); window.open(src, '_blank', 'noopener,noreferrer'); });
  };

  const renderWorkingCard = (type, title, badge, text, points) => `<article class="working-card"><div class="working-card-head"><div><p class="kicker">${type}</p><h3>${title}</h3></div><span class="working-badge">${badge}</span></div><p>${text}</p><ul class="working-list">${points.map((p) => `<li>${p}</li>`).join('')}</ul></article>`;
  const addWorkingBanner = () => {
    const portfolioSection = document.querySelector('#portfolio'); if (!portfolioSection) return;
    let section = document.querySelector('[data-section="currently-working"]'); const copy = workText();
    if (!section) { section = document.createElement('section'); section.className = 'currently-working section'; section.dataset.section = 'currently-working'; portfolioSection.insertAdjacentElement('beforebegin', section); }
    section.innerHTML = `<div class="container"><div class="working-banner reveal"><div class="working-head"><p class="kicker">${copy.kicker}</p><h2>${copy.title}</h2><p class="section-subline">${copy.subline}</p></div><div class="working-grid">${renderWorkingCard(copy.clientType, copy.aargoTitle, copy.inProgress, copy.aargoText, copy.aargoPoints)}${renderWorkingCard(copy.teamType, copy.heimTitle, copy.followUp, copy.heimText, copy.heimPoints)}</div></div></div>`;
  };

  const promoteCertificatesSection = () => {
    const block = document.querySelector('.certificate-block'); const portfolioSection = document.querySelector('#portfolio'); if (!block || !portfolioSection) return;
    let section = document.querySelector('[data-section="certificates"]');
    if (!section) { section = document.createElement('section'); section.className = 'certificate-section section'; section.id = 'certificates'; section.dataset.section = 'certificates'; section.innerHTML = `<div class="container"><div class="section-head reveal"><p class="kicker">Zertifikate</p><h2>Zertifikate und Nachweise</h2><p class="section-subline">Ausgewählte Kursnachweise als Vorschau und PDF-Download.</p></div></div>`; portfolioSection.insertAdjacentElement('afterend', section); }
    const container = section.querySelector('.container'); if (block.parentElement !== container) container.appendChild(block); appendExtraCertificates();
  };

  const appendExtraCertificates = () => {
    const grid = document.querySelector('#certificates-grid'); if (!grid) return;
    Object.values(CERTIFICATE_ASSETS).forEach((cert) => {
      if (grid.querySelector(`[data-certificate-id="${cert.id}"]`)) return;
      const article = document.createElement('article'); article.className = 'item-card certificate-extra-card'; article.dataset.certificateId = cert.id;
      article.innerHTML = `<div class="item-preview"><a href="${cert.file}" target="_blank" rel="noopener noreferrer" aria-label="${cert.title} PDF öffnen"><img src="${cert.preview}" alt="Vorschau ${cert.title}" loading="lazy"></a></div><div class="item-content"><p class="certificate-date">${cert.date}</p><h3>${cert.title}</h3><p>${cert.description}</p><div class="tag-list">${cert.tags.map((tag) => `<span>${tag}</span>`).join('')}</div><div class="item-actions"><a class="btn btn-secondary link-arrow" href="${cert.file}" target="_blank" rel="noopener noreferrer">PDF</a>${cert.certificateUrl ? `<a class="btn btn-secondary link-arrow" href="${cert.certificateUrl}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ''}</div></div>`;
      grid.appendChild(article);
    });
  };

  const compactContact = () => { const contactSection = document.querySelector('#contact'); if (!contactSection) return; contactSection.querySelectorAll('a[href^="mailto:"]').forEach((link) => { if (link.getAttribute('href') !== 'mailto:aleksandar09n@gmail.com') link.remove(); }); const gmail = contactSection.querySelector('a[href="mailto:aleksandar09n@gmail.com"]'); if (gmail) gmail.textContent = 'aleksandar09n@gmail.com ↗'; };
  const patchLegalCards = () => { const cards = [...document.querySelectorAll('.legal-grid article, .legal-grid .legal-card')]; const texts = ['Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolic und dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten.', 'Die Website setzt keine Analytics, keine Werbetracker und keine externen Tracking-Skripte ein. Externe Dienste werden erst geöffnet, wenn ein Link aktiv angeklickt wird.', 'Es werden keine Tracking-Cookies gesetzt. Die gewählte Sprache kann lokal gespeichert werden, damit die Einstellung erhalten bleibt.']; cards.forEach((card, index) => { if (card.dataset.legalHandlerAttached) return; card.dataset.legalHandlerAttached = 'true'; let detail = card.querySelector('.legal-inline-details'); if (!detail) { detail = document.createElement('p'); detail.className = 'legal-inline-details'; detail.hidden = true; detail.textContent = texts[index] || texts[0]; card.appendChild(detail); } card.addEventListener('click', () => { detail.hidden = !detail.hidden; }); }); };
  const addProfileReadmeMention = () => { const more = document.querySelector('.more-projects, [data-section="more-projects"]'); if (!more || more.querySelector('[data-profile-readme-link="true"]')) return; const firstLink = more.querySelector('a'); if (!firstLink) return; const link = firstLink.cloneNode(true); link.dataset.profileReadmeLink = 'true'; link.href = 'https://github.com/AleksZyro/AleksZyro'; link.textContent = 'GitHub Profile README ↗'; firstLink.parentElement.appendChild(link); };

  const runPatches = () => { injectStyles(); patchProjectCards(); patchModalPreview(); addWorkingBanner(); promoteCertificatesSection(); compactContact(); patchLegalCards(); addProfileReadmeMention(); };
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setTimeout(clearReturnFocus, 50); });
  document.addEventListener('click', (event) => { if (event.target.closest('.modal-close, [data-modal-close]')) setTimeout(clearReturnFocus, 50); if (event.target.closest('.lang-option')) setTimeout(runPatches, 80); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', runPatches, { once: true }); else runPatches();
  window.addEventListener('load', runPatches, { once: true }); setTimeout(runPatches, 250); setTimeout(runPatches, 900);
})();
