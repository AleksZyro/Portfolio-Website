(() => {
  const STYLE_ID = 'portfolio-final-fix-styles';
  const PUBLIC_REPO_COUNT = 20;
  const OSS_MERGE_COUNT = 6;

  const text = {
    de: {
      proof: [
        ['Public Repos', `${PUBLIC_REPO_COUNT}+`, 'eigene und Open-Source-Arbeiten'],
        ['OSS-Merges', `${OSS_MERGE_COUNT}`, 'gemergte Pull Requests'],
        ['GitHub Overview', 'SVG', 'gepflegtes Profil-README'],
        ['Kundenprojekt', 'live', 'AargoClean Website in Arbeit']
      ],
      certKicker: 'Nachweise',
      certTitle: 'Zertifikate',
      certSubline: 'Kurse, Abschlüsse und Nachweise mit Vorschau, Detailtext und PDF-Download.',
      details: 'Details anzeigen',
      download: 'PDF herunterladen',
      abacusTitle: 'ABACUS Finanzbuchhaltung',
      abacusDesc: 'Anwender-Zertifikat für Benutzeroberfläche, Stammdaten, Buchungen, Auswertungen und MWST-Abrechnung.',
      abacusDetail: 'ABACUS Finanzbuchhaltung\n\nAnwender-Zertifikat der ABACUS Research AG. Der Zertifikatskurs wurde absolviert und die Abschlussprüfung erfolgreich bestanden.\n\nSchwerpunkte: Benutzeroberfläche, Stammdaten, Saldovorträge, Vorjahreszahlen, Budget, Buchen von Geschäftsfällen anhand von Belegen, Buchungsarten, Auswertungen wie Journale, Kontoauszug, Bilanz/Erfolgsrechnung sowie MWST-Abrechnung.\n\nDieses Zertifikat ergänzt mein Profil um kaufmännisch-praktische Software-Erfahrung und den Umgang mit strukturierter Finanzbuchhaltung.',
      linkedinTitle: 'Was ist generative KI?',
      linkedinDesc: 'LinkedIn-Learning-Kurs zu generativen KI-Tools, künstlicher Intelligenz und generativer KI.',
      linkedinDetail: 'Was ist generative KI?\n\nAbgeschlossener LinkedIn-Learning-Kurs mit Fokus auf generative KI, generative KI-Tools und grundlegende Einordnung von künstlicher Intelligenz.\n\nDer Kurs dauerte 42 Minuten und wurde am 20.08.2026 abgeschlossen.\n\nIch liste diesen Nachweis bewusst als Grundlagennachweis: nicht als Ersatz für eigene Projektarbeit, sondern als Ergänzung zum verantwortungsvollen Umgang mit KI-Werkzeugen.',
      modalKicker: 'Zertifikat',
      brand: 'Aleksandar Nikolic'
    },
    en: {
      proof: [
        ['Public repos', `${PUBLIC_REPO_COUNT}+`, 'own and open-source work'],
        ['OSS merges', `${OSS_MERGE_COUNT}`, 'merged pull requests'],
        ['GitHub overview', 'SVG', 'polished profile README'],
        ['Client project', 'live', 'AargoClean website in progress']
      ],
      certKicker: 'Credentials',
      certTitle: 'Certificates',
      certSubline: 'Courses, completions and certificates with preview, detail text and PDF download.',
      details: 'Show details',
      download: 'Download PDF',
      abacusTitle: 'ABACUS financial accounting',
      abacusDesc: 'User certificate for interface, master data, bookings, reports and VAT accounting.',
      abacusDetail: 'ABACUS financial accounting\n\nUser certificate by ABACUS Research AG. I completed the certificate course and passed the final examination.\n\nFocus areas: user interface, master data, opening balances, previous-year figures, budget, booking business transactions based on receipts, booking types, reports such as journals, account statements, balance sheet/income statement and VAT accounting.\n\nThe certificate adds practical business-software experience and structured accounting workflows to my profile.',
      linkedinTitle: 'What is generative AI?',
      linkedinDesc: 'LinkedIn Learning course on generative AI tools, artificial intelligence and generative AI.',
      linkedinDetail: 'What is generative AI?\n\nCompleted LinkedIn Learning course focused on generative AI, generative AI tools and a basic understanding of artificial intelligence.\n\nThe course took 42 minutes and was completed on 20 August 2026.\n\nI list it as a foundation credential: not as a replacement for project work, but as context for responsible use of AI tools.',
      modalKicker: 'Certificate',
      brand: 'Aleksandar Nikolic'
    },
    fr: {
      proof: [
        ['Repos publics', `${PUBLIC_REPO_COUNT}+`, 'projets personnels et open source'],
        ['Merges OSS', `${OSS_MERGE_COUNT}`, 'pull requests fusionnées'],
        ['Aperçu GitHub', 'SVG', 'profil README soigné'],
        ['Projet client', 'live', 'site AargoClean en cours']
      ],
      certKicker: 'Certificats',
      certTitle: 'Certificats',
      certSubline: 'Cours et attestations avec aperçu, texte de détail et téléchargement PDF.',
      details: 'Afficher les détails',
      download: 'Télécharger le PDF',
      abacusTitle: 'Comptabilité financière ABACUS',
      abacusDesc: 'Certificat utilisateur pour interface, données de base, écritures, rapports et TVA.',
      abacusDetail: 'Comptabilité financière ABACUS\n\nCertificat utilisateur d’ABACUS Research AG. Le cours de certificat a été suivi et l’examen final réussi.\n\nAxes: interface utilisateur, données de base, soldes reportés, chiffres de l’année précédente, budget, comptabilisation de cas commerciaux sur la base de justificatifs, types d’écritures, évaluations comme journaux, extrait de compte, bilan/compte de résultat et décompte TVA.\n\nCe certificat complète mon profil avec une expérience pratique de logiciel de gestion et de comptabilité structurée.',
      linkedinTitle: 'Qu’est-ce que l’IA générative ?',
      linkedinDesc: 'Cours LinkedIn Learning sur les outils d’IA générative, l’intelligence artificielle et l’IA générative.',
      linkedinDetail: 'Qu’est-ce que l’IA générative ?\n\nCours LinkedIn Learning terminé, axé sur l’IA générative, les outils d’IA générative et les bases de l’intelligence artificielle.\n\nLe cours a duré 42 minutes et a été terminé le 20.08.2026.\n\nJe le présente comme une attestation de base: pas comme remplacement d’un vrai projet, mais comme contexte pour une utilisation responsable des outils IA.',
      modalKicker: 'Certificat',
      brand: 'Aleksandar Nikolic'
    },
    sr: {
      proof: [
        ['Javni repozitorijumi', `${PUBLIC_REPO_COUNT}+`, 'lični i open-source radovi'],
        ['OSS merge-ovi', `${OSS_MERGE_COUNT}`, 'prihvaćeni pull requestovi'],
        ['GitHub pregled', 'SVG', 'uređen profil README'],
        ['Klijentski projekat', 'live', 'AargoClean website u toku']
      ],
      certKicker: 'Sertifikati',
      certTitle: 'Sertifikati',
      certSubline: 'Kursevi i potvrde sa pregledom, detaljima i PDF preuzimanjem.',
      details: 'Prikaži detalje',
      download: 'Preuzmi PDF',
      abacusTitle: 'ABACUS finansijsko knjigovodstvo',
      abacusDesc: 'Korisnički sertifikat za interfejs, osnovne podatke, knjiženja, izveštaje i PDV.',
      abacusDetail: 'ABACUS finansijsko knjigovodstvo\n\nKorisnički sertifikat ABACUS Research AG. Završio sam sertifikatski kurs i uspešno položio završni ispit.\n\nOblasti: korisnički interfejs, osnovni podaci, početna stanja, podaci iz prethodne godine, budžet, knjiženje poslovnih slučajeva na osnovu dokumenata, vrste knjiženja, izveštaji kao dnevnik, izvod računa, bilans/uspeh i PDV obračun.\n\nSertifikat dopunjuje moj profil praktičnim iskustvom sa poslovnim softverom i strukturiranim knjigovodstvenim procesima.',
      linkedinTitle: 'Šta je generativna KI?',
      linkedinDesc: 'LinkedIn Learning kurs o generativnim KI alatima, veštačkoj inteligenciji i generativnoj KI.',
      linkedinDetail: 'Šta je generativna KI?\n\nZavršen LinkedIn Learning kurs sa fokusom na generativnu KI, generativne KI alate i osnovno razumevanje veštačke inteligencije.\n\nKurs je trajao 42 minuta i završen je 20.08.2026.\n\nOvo navodim kao osnovni dokaz, ne kao zamenu za sopstvene projekte, nego kao dodatak odgovornom korišćenju KI alata.',
      modalKicker: 'Sertifikat',
      brand: 'Aleksandar Nikolić'
    },
    'sr-cyrl': {
      proof: [
        ['Јавни репозиторијуми', `${PUBLIC_REPO_COUNT}+`, 'лични и open-source радови'],
        ['OSS merge-ови', `${OSS_MERGE_COUNT}`, 'прихваћени pull request-ови'],
        ['GitHub преглед', 'SVG', 'уређен профил README'],
        ['Клијентски пројекат', 'live', 'AargoClean website у току']
      ],
      certKicker: 'Сертификати',
      certTitle: 'Сертификати',
      certSubline: 'Курсеви и потврде са прегледом, детаљима и PDF преузимањем.',
      details: 'Прикажи детаље',
      download: 'Преузми PDF',
      abacusTitle: 'ABACUS финансијско књиговодство',
      abacusDesc: 'Кориснички сертификат за интерфејс, основне податке, књижења, извештаје и ПДВ.',
      abacusDetail: 'ABACUS финансијско књиговодство\n\nКориснички сертификат ABACUS Research AG. Завршио сам сертификатски курс и успешно положио завршни испит.\n\nОбласти: кориснички интерфејс, основни подаци, почетна стања, подаци из претходне године, буџет, књижење пословних случајева на основу докумената, врсте књижења, извештаји као дневник, извод рачуна, биланс/успех и ПДВ обрачун.\n\nСертификат допуњује мој профил практичним искуством са пословним софтвером и структурираним књиговодственим процесима.',
      linkedinTitle: 'Шта је генеративна KI?',
      linkedinDesc: 'LinkedIn Learning курс о генеративним KI алатима, вештачкој интелигенцији и генеративној KI.',
      linkedinDetail: 'Шта је генеративна KI?\n\nЗавршен LinkedIn Learning курс са фокусом на генеративну KI, генеративне KI алате и основно разумевање вештачке интелигенције.\n\nКурс је трајао 42 минута и завршен је 20.08.2026.\n\nОво наводим као основни доказ, не као замену за сопствене пројекте, него као додатак одговорном коришћењу KI алата.',
      modalKicker: 'Сертификат',
      brand: 'Aleksandar Nikolić'
    }
  };

  const getLang = () => {
    const label = document.getElementById('language-current-label')?.textContent?.trim().toLowerCase() || '';
    if (label.includes('kyr') || label.includes('ћ')) return 'sr-cyrl';
    if (label.includes('sr')) return 'sr';
    if (label.includes('fr')) return 'fr';
    if (label.includes('en')) return 'en';
    return 'de';
  };

  const t = () => text[getLang()] || text.de;

  const injectStyles = () => {
    let style = document.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement('style');
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }

    style.textContent = `
      .hero-ticker { display: none !important; }

      .hero-proof-strip {
        margin-top: 22px;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
      }

      .hero-proof-item {
        border: 1px solid var(--line);
        background: rgba(12, 10, 20, 0.44);
        border-radius: 18px;
        padding: 13px 14px;
        min-height: 92px;
        display: grid;
        align-content: center;
        gap: 4px;
      }

      .hero-proof-value {
        color: var(--text);
        font-size: 1.35rem;
        font-weight: 900;
        letter-spacing: -0.03em;
      }

      .hero-proof-label {
        color: var(--accent-2);
        font-size: 0.74rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .hero-proof-note {
        color: var(--muted);
        font-size: 0.88rem;
        line-height: 1.35;
      }

      .item-card:focus:not(:focus-visible),
      .item-card.is-modal-return-focus,
      .item-card[data-modal-return-focus="true"],
      .item-card[data-clickable-card="true"]:focus:not(:focus-visible),
      .item-card[data-clickable-card="true"].is-modal-return-focus,
      .item-card[data-clickable-card="true"][data-modal-return-focus="true"] {
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

      .certificates-section {
        min-height: auto !important;
        padding-top: clamp(72px, 8vw, 128px) !important;
        padding-bottom: clamp(72px, 8vw, 128px) !important;
      }

      .certificates-section .certificate-block { margin-top: 0 !important; }
      .certificates-section .certificate-head { margin-bottom: 28px; }
      .certificates-section .certificate-head h3 {
        font-size: clamp(2.4rem, 5.2vw, 4.4rem);
        line-height: 0.98;
        letter-spacing: -0.045em;
      }
      .cert-kicker-final {
        color: var(--accent-2);
        font-size: 0.78rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 9px;
        text-shadow: 0 0 18px rgba(180, 167, 229, 0.18);
      }

      .extra-certificate-card img,
      .extra-certificate-card .item-preview img,
      .extra-certificate-card .certificate-preview img {
        object-fit: contain !important;
        background: #f6f4ef;
      }

      .legal-card { cursor: pointer; }
      .legal-card .legal-details-content,
      .legal-card .legal-expanded-text {
        grid-column: 1 / -1;
        width: 100%;
        max-width: none;
        margin-top: 12px;
      }
      .legal-card .legal-expanded-text p {
        color: var(--muted);
        line-height: 1.62;
        max-width: 62ch;
      }

      .career.section,
      .portfolio.section,
      .github-section.section,
      .tech.section,
      .contact.section,
      .certificates-section,
      .currently-working {
        min-height: auto !important;
      }

      @media (min-width: 1800px) {
        .career.section,
        .portfolio.section,
        .github-section.section,
        .tech.section,
        .contact.section,
        .certificates-section,
        .currently-working {
          padding-top: clamp(70px, 5vw, 110px) !important;
          padding-bottom: clamp(70px, 5vw, 110px) !important;
        }
      }

      @media (max-width: 900px) {
        .hero-proof-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }

      @media (max-width: 560px) {
        .hero-proof-strip { grid-template-columns: 1fr; }
      }
    `;
  };

  const setBrand = () => {
    const brand = document.querySelector('.brand-latin');
    if (brand) {
      const current = t().brand;
      const [first, last] = current.split(' ');
      brand.innerHTML = `${first} <em>${last}</em>`;
    }
  };

  const renderHeroProofStrip = () => {
    const heroActions = document.querySelector('.hero-actions');
    if (!heroActions) return;

    let strip = document.querySelector('.hero-proof-strip');
    if (!strip) {
      strip = document.createElement('div');
      strip.className = 'hero-proof-strip';
      heroActions.insertAdjacentElement('afterend', strip);
    }

    strip.innerHTML = t().proof.map(([label, value, note]) => `
      <div class="hero-proof-item">
        <span class="hero-proof-label">${label}</span>
        <strong class="hero-proof-value">${value}</strong>
        <span class="hero-proof-note">${note}</span>
      </div>
    `).join('');
  };

  const blurModalReturnFocus = () => {
    const active = document.activeElement;
    if (active && active !== document.body && typeof active.blur === 'function') active.blur();

    document.querySelectorAll('.item-card, [data-clickable-card="true"], .extra-certificate-card').forEach((card) => {
      card.blur?.();
      card.classList.remove('is-modal-return-focus', 'is-active', 'active', 'is-selected');
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
      window.setTimeout(blurModalReturnFocus, 120);
    });

    closeButton?.addEventListener('click', () => {
      window.setTimeout(blurModalReturnFocus, 0);
      window.setTimeout(blurModalReturnFocus, 120);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      window.setTimeout(blurModalReturnFocus, 0);
      window.setTimeout(blurModalReturnFocus, 120);
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
    if (!container) return;
    if (!certificateBlock.closest('.certificates-section')) container.appendChild(certificateBlock);

    const head = certificateBlock.querySelector('.certificate-head');
    if (head && !head.querySelector('.cert-kicker-final')) {
      const kicker = document.createElement('p');
      kicker.className = 'cert-kicker-final';
      head.prepend(kicker);
    }
    const title = certificateBlock.querySelector('h3');
    if (title) title.id = 'certificates-title';
  };

  const updateCertificateHeader = () => {
    const lang = t();
    const kicker = document.querySelector('.cert-kicker-final');
    const title = document.querySelector('.certificates-section .certificate-head h3');
    const subline = document.querySelector('.certificates-section .certificate-head p:not(.cert-kicker-final)');
    if (kicker) kicker.textContent = lang.certKicker;
    if (title) title.textContent = lang.certTitle;
    if (subline) subline.textContent = lang.certSubline;
  };

  const openCertificateModal = (certificate) => {
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalMeta = document.getElementById('modal-meta');
    const modalDownload = document.getElementById('modal-download');
    const modalPreview = document.querySelector('.modal-preview');
    const modalKicker = document.querySelector('.modal-kicker');

    if (!modal || !modalTitle || !modalDescription || !modalMeta) return;

    modalTitle.textContent = certificate.title;
    if (modalKicker) modalKicker.textContent = t().modalKicker;
    modalDescription.innerHTML = certificate.detail.split('\n\n').map((paragraph) => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`).join('');
    modalMeta.innerHTML = certificate.meta.map((item) => `<li>${item}</li>`).join('');

    if (modalPreview) {
      modalPreview.innerHTML = `<img src="${certificate.preview}" alt="${certificate.title}" loading="lazy">`;
      modalPreview.onclick = () => window.open(certificate.preview, '_blank', 'noopener,noreferrer');
    }

    if (modalDownload) {
      modalDownload.hidden = false;
      modalDownload.href = certificate.file;
      modalDownload.textContent = t().download;
      modalDownload.setAttribute('download', '');
    }

    modal.showModal();
  };

  const certificateData = () => ([
    {
      id: 'abacus-finanzbuchhaltung',
      title: t().abacusTitle,
      date: '26.05.2026',
      desc: t().abacusDesc,
      detail: t().abacusDetail,
      meta: ['ABACUS Research AG', '26.05.2026', 'PDF: verfügbar, sobald Datei lokal ergänzt ist'],
      file: 'assets/certificates/abacus-finanzbuchhaltung.pdf',
      preview: 'assets/certificate-previews/abacus-finanzbuchhaltung.svg'
    },
    {
      id: 'linkedin-generative-ki',
      title: t().linkedinTitle,
      date: '20.08.2026',
      desc: t().linkedinDesc,
      detail: t().linkedinDetail,
      meta: ['LinkedIn Learning', '20.08.2026', 'Dauer: 42 Minuten', 'Zertifikatsnummer: 6fea3567c65e53cc22130d2b038ee8ec40552661ae16267d4e56364d1537ffa1'],
      file: 'assets/certificates/linkedin-generative-ki.pdf',
      preview: 'assets/certificate-previews/linkedin-generative-ki.svg'
    }
  ]);

  const removeOldExtraCertificateCards = (grid) => {
    [...grid.children].forEach((card) => {
      const textContent = card.textContent || '';
      if (card.dataset.extraCertificate === 'true' || /ABACUS|generative KI|generative AI|finanzbuchhaltung|LinkedIn Learning/i.test(textContent)) {
        card.remove();
      }
    });
  };

  const addExtraCertificates = () => {
    const grid = document.getElementById('certificates-grid');
    if (!grid) return;

    removeOldExtraCertificateCards(grid);

    for (const cert of certificateData()) {
      const card = document.createElement('article');
      card.className = 'item-card extra-certificate-card';
      card.dataset.extraCertificate = 'true';
      card.dataset.clickableCard = 'true';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${cert.title} ${t().details}`);
      card.innerHTML = `
        <div class="item-preview certificate-preview">
          <img src="${cert.preview}" alt="${cert.title}" loading="lazy">
        </div>
        <p class="career-badge">${cert.date}</p>
        <h3>${cert.title}</h3>
        <p>${cert.desc}</p>
        <button type="button" class="btn btn-secondary project-details-trigger" data-detail-trigger="true">${t().details}</button>
      `;

      const open = () => openCertificateModal(cert);
      card.addEventListener('click', (event) => {
        if (event.target.closest('a')) return;
        open();
      });
      card.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        open();
      });

      grid.appendChild(card);
    }
  };

  const patchExistingCards = () => {
    document.querySelectorAll('.item-card').forEach((card) => {
      const detailsButton = [...card.querySelectorAll('button, a')].find((el) => /details|détails|detalje|детаље|anzeigen|prikaži/i.test(el.textContent || ''));
      if (!detailsButton) return;
      detailsButton.classList.add('project-details-trigger');
      detailsButton.dataset.detailTrigger = 'true';
      card.dataset.clickableCard = 'true';
      if (!card.hasAttribute('tabindex')) card.tabIndex = 0;
    });
  };

  const enhanceLegalCards = () => {
    const details = {
      imprint: {
        match: /impressum|imprint|импресум/i,
        body: 'Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolic und dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten.'
      },
      privacy: {
        match: /datenschutz|privacy|privatnost|приватност/i,
        body: 'Die Website setzt keine Analytics, keine Werbetracker und keine externen Tracking-Skripte ein. Externe Dienste werden erst geöffnet, wenn ein Link aktiv angeklickt wird.'
      },
      cookies: {
        match: /cookies|kolači|кукији|kukiji/i,
        body: 'Es werden keine Tracking-Cookies gesetzt. Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung beim nächsten Besuch erhalten bleibt.'
      }
    };

    document.querySelectorAll('.legal-card').forEach((card) => {
      if (card.dataset.legalEnhanced === 'true') return;
      const textContent = card.textContent || '';
      const item = Object.values(details).find((entry) => entry.match.test(textContent));
      if (!item) return;
      card.dataset.legalEnhanced = 'true';
      card.tabIndex = 0;
      const box = document.createElement('div');
      box.className = 'legal-expanded-text';
      box.hidden = true;
      box.innerHTML = `<p>${item.body}</p>`;
      card.appendChild(box);
      const toggle = () => { box.hidden = !box.hidden; };
      card.addEventListener('click', toggle);
      card.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        toggle();
      });
    });
  };

  const syncLanguageDependentContent = () => {
    const lang = getLang();
    document.documentElement.setAttribute('lang', lang);
    setBrand();
    renderHeroProofStrip();
    updateCertificateHeader();
    addExtraCertificates();
  };

  const run = () => {
    injectStyles();
    moveCertificatesToOwnSection();
    patchExistingCards();
    installModalFocusFix();
    syncLanguageDependentContent();
    enhanceLegalCards();
    blurModalReturnFocus();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('.lang-option, .lang-menu-button')) {
      window.setTimeout(run, 80);
      window.setTimeout(run, 220);
    }
  });

  window.addEventListener('load', run, { once: true });
  window.setTimeout(run, 150);
  window.setTimeout(run, 600);
})();
