(() => {
  const embeddedCopyOverrides = {
    de: {
      heroDescription: 'Ich entwickle eigene Anwendungen in den Bereichen Web, APIs, Daten und Automatisierung und vertiefe dabei strukturierte Architektur, Tests und verstÃ¤ndliche BenutzeroberflÃ¤chen.',
      aboutDescription: 'Ich besuche die IMS mit Schwerpunkt Applikationsentwicklung und vertiefe schulische Grundlagen durch eigene und gemeinsame Softwareprojekte. Dabei lege ich Wert auf verstÃ¤ndliche BenutzeroberflÃ¤chen, nachvollziehbaren Code und kontinuierliches Lernen.',
      techSubline: 'Die Erfahrungen stammen aus eigenen Projekten, Teamprojekten und dem IMS-Unterricht und sind je nach Technologie unterschiedlich vertieft.',
      portfolioSubline: 'FÃ¼nf Projekte und drei Zertifikate sind bereits hinterlegt.'
    },
    en: {
      heroDescription: 'I build my own applications in web, APIs, data, and automation while deepening my understanding of structured architecture, testing, and clear user interfaces.',
      aboutDescription: 'I attend IMS with a focus on application development and deepen my academic foundations through personal and collaborative software projects. I value clear user interfaces, understandable code, and continuous learning.',
      techSubline: 'This overview combines experience from personal projects, team projects, and IMS coursework; the depth of experience varies by technology.',
      portfolioSubline: 'Five projects and three certificates are already listed.'
    },
    fr: {
      heroDescription: 'Je dÃ©veloppe mes propres applications dans les domaines du web, des API, des donnÃ©es et de lâ€™automatisation, tout en approfondissant lâ€™architecture structurÃ©e, les tests et les interfaces utilisateur comprÃ©hensibles.',
      aboutDescription: 'Je frÃ©quente lâ€™IMS avec une spÃ©cialisation en dÃ©veloppement applicatif et jâ€™approfondis mes bases scolaires grÃ¢ce Ã  des projets logiciels personnels et collaboratifs. Jâ€™accorde de lâ€™importance Ã  des interfaces comprÃ©hensibles, Ã  un code lisible et Ã  lâ€™apprentissage continu.',
      techSubline: 'Cette liste rÃ©unit des expÃ©riences issues de projets personnels, de projets dâ€™Ã©quipe et des cours de lâ€™IMS ; le niveau dâ€™approfondissement varie selon la technologie.',
      portfolioSubline: 'Cinq projets et trois certificats sont dÃ©jÃ  disponibles.'
    },
    sr: {
      heroDescription: 'Razvijam sopstvene aplikacije za web, API-je, podatke i automatizaciju, dok produbljujem znanje o strukturisanoj arhitekturi, testiranju i razumljivim korisniÄkim interfejsima.',
      aboutDescription: 'PohaÄ‘am IMS sa fokusom na razvoj aplikacija i produbljujem Å¡kolske osnove kroz samostalne i timske softverske projekte. VaÅ¾ni su mi razumljivi korisniÄki interfejsi, pregledan kod i stalno uÄenje.',
      techSubline: 'Ova lista objedinjuje iskustvo iz samostalnih projekata, timskih projekata i IMS nastave; nivo iskustva se razlikuje u zavisnosti od tehnologije.',
      portfolioSubline: 'Pet projekata i tri sertifikata su veÄ‡ dodati.'
    }
  };

  const applyEmbeddedCopyOverrides = () => {
    try {
      if (typeof embeddedDictionaries === 'undefined') return;

      Object.entries(embeddedCopyOverrides).forEach(([languageCode, copy]) => {
        const dictionary = embeddedDictionaries[languageCode];
        if (!dictionary) return;

        dictionary.hero.description = copy.heroDescription;
        dictionary.about.description = copy.aboutDescription;
        dictionary.tech.subline = copy.techSubline;
        dictionary.portfolio.subline = copy.portfolioSubline;
      });
    } catch (_) {
      // External language JSON files remain the primary source on the deployed site.
    }
  };

  applyEmbeddedCopyOverrides();

  const githubProjects = [
    {
      key: 'sounddeck',
      title: 'SoundDeck',
      cardDescription: 'Windows-Soundboard-MVP mit PySide6, MP3-Soundkarten, Kategorien, Hotkeys und Audio-Routing fÃ¼r virtuelle GerÃ¤te.',
      detailDescription: [
        'SoundDeck',
        '',
        'SoundDeck ist eine Windows-Desktop-App als Soundboard. Nutzer kÃ¶nnen MP3-Dateien hinzufÃ¼gen, als Soundkarten verwalten und Ã¼ber ein ausgewÃ¤hltes Audio-AusgabegerÃ¤t abspielen.',
        '',
        'Das Projekt ist als MVP umgesetzt und enthÃ¤lt eine PySide6-OberflÃ¤che, lokale JSON-Konfiguration, Kategorien, Hotkeys, globale LautstÃ¤rke, LautstÃ¤rke pro Sound und eine vereinfachte Audio-GerÃ¤teauswahl fÃ¼r normale GerÃ¤te sowie virtuelle Routing-GerÃ¤te wie VB-Cable oder VoiceMeeter.',
        '',
        'Im GitHub-Repository befindet sich zusÃ¤tzlich eine Benutzeranleitung fÃ¼r AnfÃ¤nger, damit SoundDeck auch ohne Informatik-Vorwissen getestet werden kann.'
      ].join('\n'),
      meta: ['Status: MVP funktionsfÃ¤hig', 'Tech: Python, PySide6, sounddevice, soundfile, NumPy', 'Fokus: Desktop-App und Audio-Routing'],
      url: 'https://github.com/AleksZyro/Soundboard',
      previewLabel: 'GitHub Projekt',
      previewBadge: 'Fertig'
    },
    {
      key: 'portfolio-website',
      title: 'Portfolio Website',
      cardDescription: 'PersÃ¶nliche Portfolio-Website fÃ¼r Bewerbungen mit Projekten, Zertifikaten, Tech-Stack und mehrsprachiger OberflÃ¤che.',
      detailDescription: [
        'Portfolio Website',
        '',
        'Diese Website ist mein digitales Bewerbungsportfolio. Sie zeigt mein Profil, meinen Werdegang, meine Technologien, Projekte, Zertifikate und KontaktmÃ¶glichkeiten in einer modernen responsiven OberflÃ¤che.',
        '',
        'Die Website ist statisch aufgebaut und verwendet HTML, CSS und JavaScript. Sie ist auf Netlify verÃ¶ffentlicht und Ã¼ber GitHub versioniert.',
        '',
        'Das Repository enthÃ¤lt die Struktur der Seite, die Projektdaten, Styles, Assets und die Logik fÃ¼r Detailansichten, Sprachumschaltung und Portfolio-Karten.'
      ].join('\n'),
      meta: ['Status: Online', 'Tech: HTML, CSS, JavaScript, Netlify', 'Fokus: Bewerbungsportfolio und ProjektprÃ¤sentation'],
      url: 'https://github.com/AleksZyro/Portfolio-Website',
      previewLabel: 'GitHub Projekt',
      previewBadge: 'Online'
    }
  ];

  const knownProjectLinks = new Map([
    ['SortLab', 'https://github.com/AleksZyro/sortlab'],
    ...githubProjects.map((project) => [project.title, project.url])
  ]);

  const getText = (key, fallback) => {
    try {
      if (typeof activeDictionary !== 'undefined') {
        const value = key.split('.').reduce((current, part) => current && current[part], activeDictionary);
        return value || fallback;
      }
    } catch (_) {
      return fallback;
    }
    return fallback;
  };

  const appendParagraphs = (target, text) => {
    target.textContent = '';
    String(text || '')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .forEach((line) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = line;
        target.appendChild(paragraph);
      });
  };

  const injectStyles = () => {
    if (document.getElementById('portfolio-project-link-styles')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-project-link-styles';
    style.textContent = `
      .project-status-chip.is-complete {
        border-color: rgba(52, 211, 153, 0.42);
        background: rgba(8, 44, 31, 0.92);
        color: #7dffbd;
      }
      .project-status-chip.is-complete::before {
        content: "âœ“";
        display: inline-grid;
        place-items: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #22c55e;
        color: #07170f;
        font-size: 0.82rem;
        font-weight: 900;
        line-height: 1;
        box-shadow: 0 0 0 1px rgba(125, 255, 189, 0.35), 0 0 14px rgba(34, 197, 94, 0.45);
      }
      .modal-download.is-github-link {
        background: rgba(22, 34, 58, 0.94);
        border-color: rgba(141, 108, 255, 0.46);
        color: #efe8ff;
      }
    `;
    document.head.appendChild(style);
  };

  const updateProjectCount = () => {
    const counter = document.getElementById('projects-count');
    const grid = document.getElementById('projects-grid');
    if (counter && grid) counter.textContent = String(grid.querySelectorAll('.item-card').length);
  };

  const applyGitHubLinkForCurrentModal = () => {
    const title = document.getElementById('modal-title')?.textContent?.trim();
    const modalDownload = document.getElementById('modal-download');
    if (!title || !modalDownload || !knownProjectLinks.has(title)) return;

    modalDownload.hidden = false;
    modalDownload.href = knownProjectLinks.get(title);
    modalDownload.textContent = 'GitHub Ã¶ffnen';
    modalDownload.classList.add('is-github-link');
    modalDownload.removeAttribute('download');
    modalDownload.setAttribute('target', '_blank');
    modalDownload.setAttribute('rel', 'noopener noreferrer');
  };

  const forceProjectLinks = () => {
    const modalDownload = document.getElementById('modal-download');
    if (!modalDownload) return;

    const applyIfProject = () => {
      const title = document.getElementById('modal-title')?.textContent?.trim();
      if (!title || !knownProjectLinks.has(title)) return;
      applyGitHubLinkForCurrentModal();
    };

    const originalSetAttribute = modalDownload.setAttribute.bind(modalDownload);
    modalDownload.setAttribute = function patchedSetAttribute(name, value) {
      originalSetAttribute(name, value);
      if (name === 'href' || name === 'download' || name === 'hidden') {
        setTimeout(applyIfProject, 0);
      }
    };

    const originalRemoveAttribute = modalDownload.removeAttribute.bind(modalDownload);
    modalDownload.removeAttribute = function patchedRemoveAttribute(name) {
      originalRemoveAttribute(name);
      if (name === 'href' || name === 'download' || name === 'hidden') {
        setTimeout(applyIfProject, 0);
      }
    };

    document.addEventListener('click', () => {
      setTimeout(applyIfProject, 0);
      setTimeout(applyIfProject, 80);
      setTimeout(applyIfProject, 180);
    }, true);
  };

  const openProjectModal = (project) => {
    const modal = document.getElementById('detail-modal');
    const modalCard = document.getElementById('modal-card');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalMeta = document.getElementById('modal-meta');
    const modalKicker = document.querySelector('.modal-kicker');
    const modalPreviewLabel = document.querySelector('.modal-preview-label');
    const modalPreviewTitle = document.getElementById('modal-preview-title');
    const modalPreviewSubtitle = document.getElementById('modal-preview-subtitle');
    const modalPreviewBadge = document.querySelector('.modal-preview .project-status-chip');
    const modalFileViewer = document.getElementById('modal-file-viewer');
    const modalDownload = document.getElementById('modal-download');

    if (!modal || !modalCard || !modalTitle || !modalDescription || !modalMeta || !modalDownload) return;

    modalCard.classList.remove('is-document', 'has-project-image');
    modalCard.style.removeProperty('--modal-preview-image');
    if (modalFileViewer) {
      modalFileViewer.hidden = true;
      modalFileViewer.removeAttribute('src');
    }

    if (modalKicker) modalKicker.textContent = getText('modal.projectKicker', 'Projektstatus');
    modalTitle.textContent = project.title;
    appendParagraphs(modalDescription, project.detailDescription);
    modalMeta.textContent = '';
    project.meta.forEach((entry) => {
      const item = document.createElement('li');
      item.textContent = entry;
      modalMeta.appendChild(item);
    });

    if (modalPreviewLabel) modalPreviewLabel.textContent = project.previewLabel;
    if (modalPreviewTitle) modalPreviewTitle.textContent = project.title;
    if (modalPreviewSubtitle) modalPreviewSubtitle.textContent = 'Repository mit Anleitung';
    if (modalPreviewBadge) {
      modalPreviewBadge.textContent = project.previewBadge;
      modalPreviewBadge.classList.add('is-complete');
    }

    modalDownload.hidden = false;
    modalDownload.href = project.url;
    modalDownload.textContent = 'GitHub Ã¶ffnen';
    modalDownload.classList.add('is-github-link');
    modalDownload.removeAttribute('download');
    modalDownload.setAttribute('target', '_blank');
    modalDownload.setAttribute('rel', 'noopener noreferrer');

    if (typeof modal.showModal === 'function' && !modal.open) modal.showModal();
    document.body.classList.add('modal-open');
  };

  const createProjectCard = (project) => {
    const article = document.createElement('article');
    article.className = 'item-card';
    article.dataset.extraProject = project.key;

    const preview = document.createElement('div');
    preview.className = 'project-preview';

    const previewLabel = document.createElement('span');
    previewLabel.className = 'project-preview-label';
    previewLabel.textContent = project.previewLabel;

    const previewTitle = document.createElement('span');
    previewTitle.className = 'project-preview-title';
    previewTitle.textContent = project.title;

    const previewBadge = document.createElement('span');
    previewBadge.className = 'project-status-chip is-complete';
    previewBadge.textContent = project.previewBadge;

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.cardDescription;

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = getText('portfolio.detailsButton', 'Details anzeigen');
    button.addEventListener('click', () => openProjectModal(project));

    preview.append(previewLabel, previewTitle, previewBadge);
    article.append(preview, title, description, button);
    return article;
  };

  const ensureExtraProjects = () => {
    injectStyles();
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    githubProjects.forEach((project) => {
      if (!grid.querySelector(`[data-extra-project="${project.key}"]`)) {
        grid.appendChild(createProjectCard(project));
      }
    });

    updateProjectCount();
  };

  const setupModalObserver = () => {
    const modalTitle = document.getElementById('modal-title');
    if (!modalTitle || modalTitle.dataset.githubObserver === 'true') return;
    modalTitle.dataset.githubObserver = 'true';

    new MutationObserver(() => {
      setTimeout(applyGitHubLinkForCurrentModal, 0);
      setTimeout(applyGitHubLinkForCurrentModal, 80);
    }).observe(modalTitle, { childList: true, characterData: true, subtree: true });
  };

  const setupRefreshHooks = () => {
    document.querySelectorAll('.tab, .lang-btn').forEach((button) => {
      button.addEventListener('click', () => setTimeout(ensureExtraProjects, 80));
    });

    const grid = document.getElementById('projects-grid');
    if (grid && grid.dataset.extraProjectObserver !== 'true') {
      grid.dataset.extraProjectObserver = 'true';
      new MutationObserver(() => setTimeout(ensureExtraProjects, 0)).observe(grid, { childList: true });
    }
  };

  const init = () => {
    ensureExtraProjects();
    setupModalObserver();
    setupRefreshHooks();
    forceProjectLinks();
    setTimeout(ensureExtraProjects, 150);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
