(() => {
  const githubProjects = [
    {
      key: 'sounddeck',
      title: 'SoundDeck',
      cardDescription: 'Windows-Soundboard-MVP mit PySide6, MP3-Soundkarten, Kategorien, Hotkeys und Audio-Routing für virtuelle Geräte.',
      detailDescription: [
        'SoundDeck',
        '',
        'SoundDeck ist eine Windows-Desktop-App als Soundboard. Nutzer können MP3-Dateien hinzufügen, als Soundkarten verwalten und über ein ausgewähltes Audio-Ausgabegerät abspielen.',
        '',
        'Das Projekt ist als MVP umgesetzt und enthält eine PySide6-Oberfläche, lokale JSON-Konfiguration, Kategorien, Hotkeys, globale Lautstärke, Lautstärke pro Sound und eine vereinfachte Audio-Geräteauswahl für normale Geräte sowie virtuelle Routing-Geräte wie VB-Cable oder VoiceMeeter.',
        '',
        'Im GitHub-Repository befindet sich zusätzlich eine Benutzeranleitung für Anfänger, damit SoundDeck auch ohne Informatik-Vorwissen getestet werden kann.'
      ].join('\n'),
      meta: ['Status: MVP funktionsfähig', 'Tech: Python, PySide6, sounddevice, soundfile, NumPy', 'Fokus: Desktop-App und Audio-Routing'],
      url: 'https://github.com/Aleksandros2/Soundboard',
      previewLabel: 'GitHub Projekt',
      previewBadge: 'Fertig'
    },
    {
      key: 'portfolio-website',
      title: 'Portfolio Website',
      cardDescription: 'Persönliche Portfolio-Website für Bewerbungen mit Projekten, Zertifikaten, Tech-Stack und mehrsprachiger Oberfläche.',
      detailDescription: [
        'Portfolio Website',
        '',
        'Diese Website ist mein digitales Bewerbungsportfolio. Sie zeigt mein Profil, meinen Werdegang, meine Technologien, Projekte, Zertifikate und Kontaktmöglichkeiten in einer modernen responsiven Oberfläche.',
        '',
        'Die Website ist statisch aufgebaut und verwendet HTML, CSS und JavaScript. Sie ist auf Netlify veröffentlicht und über GitHub versioniert.',
        '',
        'Das Repository enthält die Struktur der Seite, die Projektdaten, Styles, Assets und die Logik für Detailansichten, Sprachumschaltung und Portfolio-Karten.'
      ].join('\n'),
      meta: ['Status: Online', 'Tech: HTML, CSS, JavaScript, Netlify', 'Fokus: Bewerbungsportfolio und Projektpräsentation'],
      url: 'https://github.com/Aleksandros2/Portfolio-Website',
      previewLabel: 'GitHub Projekt',
      previewBadge: 'Online'
    }
  ];

  const knownProjectLinks = new Map([
    ['SortLab', 'https://github.com/Aleksandros2/sortlab'],
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

  const paragraphsFromText = (text) => text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `<p>${line}</p>`)
    .join('');

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
        content: "✓";
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
    modalDownload.textContent = 'GitHub öffnen';
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
    modalDescription.innerHTML = paragraphsFromText(project.detailDescription);
    modalMeta.innerHTML = project.meta.map((entry) => `<li>${entry}</li>`).join('');

    if (modalPreviewLabel) modalPreviewLabel.textContent = project.previewLabel;
    if (modalPreviewTitle) modalPreviewTitle.textContent = project.title;
    if (modalPreviewSubtitle) modalPreviewSubtitle.textContent = 'Repository mit Anleitung';
    if (modalPreviewBadge) {
      modalPreviewBadge.textContent = project.previewBadge;
      modalPreviewBadge.classList.add('is-complete');
    }

    modalDownload.hidden = false;
    modalDownload.href = project.url;
    modalDownload.textContent = 'GitHub öffnen';
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

    article.innerHTML = `
      <div class="project-preview">
        <span class="project-preview-label">${project.previewLabel}</span>
        <span class="project-preview-title">${project.title}</span>
        <span class="project-status-chip is-complete">${project.previewBadge}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.cardDescription}</p>
      <button type="button">${getText('portfolio.detailsButton', 'Details anzeigen')}</button>
    `;

    article.querySelector('button')?.addEventListener('click', () => openProjectModal(project));
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
