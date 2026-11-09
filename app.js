// Preserve deep links before the initial scroll observer can replace the hash.
const initialSectionHash = window.location.hash;
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');
const sections = [...document.querySelectorAll('main section[id], footer#contact')];
const revealItems = document.querySelectorAll('.reveal');
const careerTimeline = document.querySelector('.career-timeline');
const careerPath = careerTimeline?.querySelector('.career-path');
const careerPathLine = careerPath?.querySelector('path');
const projectsGrid = document.getElementById('projects-grid');
const certificatesGrid = document.getElementById('certificates-grid');
const openSourceList = document.getElementById('open-source-list');
const openSourceMergeCountEl = document.getElementById('github-oss-merges-value');
const techGrid = document.getElementById('tech-grid');
const languageMenuButton = document.getElementById('language-menu-button');
const languageMenu = document.getElementById('language-menu');
const languageCurrentFlag = document.getElementById('language-current-flag');
const languageCurrentLabel = document.getElementById('language-current-label');
const modal = document.getElementById('detail-modal');
const migrationModal = document.getElementById('migration-modal');
const migrationLink = document.getElementById('migration-link');
const migrationClose = document.getElementById('migration-close');
const isLegacyHost = window.location.hostname === 'aleksandar-nikolic.netlify.app';
const updateMigrationNotice = () => {
  if (!migrationModal || !isLegacyHost) return;
  if (migrationLink) {
    const destination = new URL('https://aleksandar-nikolic.ch/');
    destination.pathname = window.location.pathname;
    destination.search = window.location.search;
    destination.hash = window.location.hash;
    migrationLink.href = destination.toString();
  }
};

const showMigrationNotice = () => {
  if (!isLegacyHost || !migrationModal || migrationModal.open) return;
  updateMigrationNotice();
  if (typeof migrationModal.showModal === 'function') migrationModal.showModal();
  else migrationModal.setAttribute('open', '');
};

if (migrationClose && migrationModal) migrationClose.addEventListener('click', () => migrationModal.close());
if (migrationModal) migrationModal.addEventListener('click', (event) => {
  if (event.target === migrationModal) migrationModal.close();
});

const yearTarget = document.getElementById('year');
const footerName = document.getElementById('footer-name');

const updateCareerPath = () => {
  if (!careerTimeline || !careerPath || !careerPathLine || window.innerWidth < 721) return;

  const timelineRect = careerTimeline.getBoundingClientRect();
  const points = [...careerTimeline.querySelectorAll('.career-dot')].map((dot) => {
    const dotRect = dot.getBoundingClientRect();
    return {
      x: dotRect.left + dotRect.width / 2 - timelineRect.left,
      y: dotRect.top + dotRect.height / 2 - timelineRect.top
    };
  });

  if (points.length < 2) return;

  careerPath.setAttribute('viewBox', `0 0 ${timelineRect.width} ${timelineRect.height}`);
  const pathData = points.reduce((data, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    const previous = points[index - 1];
    const midpoint = previous.y + (point.y - previous.y) / 2;
    return `${data} C ${previous.x} ${midpoint}, ${point.x} ${midpoint}, ${point.x} ${point.y}`;
  }, '');
  careerPathLine.setAttribute('d', pathData);
};

if (careerTimeline && 'ResizeObserver' in window) {
  new ResizeObserver(updateCareerPath).observe(careerTimeline);
}

const i18nElements = document.querySelectorAll('[data-i18n]');
const i18nAriaElements = document.querySelectorAll('[data-i18n-aria]');
const defaultTexts = new Map();
i18nElements.forEach((element) => {
  defaultTexts.set(element, element.textContent);
});

let activeDictionary = {};
let lastScrollSectionId = '';
const resetHorizontalScroll = () => {
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;
  if (window.scrollX !== 0) {
    window.scrollTo(0, window.scrollY);
  }
};

window.addEventListener('pageshow', resetHorizontalScroll);
window.addEventListener('resize', resetHorizontalScroll);
window.addEventListener('hashchange', () => requestAnimationFrame(resetHorizontalScroll));

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const pathGet = (object, path) => path.split('.').reduce((acc, part) => (acc && part in acc ? acc[part] : undefined), object);

const t = (key, fallback = '') => {
  const value = pathGet(activeDictionary, key);
  return typeof value === 'string' ? value : fallback;
};

const tArray = (key, fallback = []) => {
  const value = pathGet(activeDictionary, key);
  return Array.isArray(value) ? value : fallback;
};

const localizedPortfolioItem = (item, type) => ({
  ...item,
  ...pathGet(activeDictionary, `portfolioItems.${type}.${item.id}`)
});

const localizedTechGroup = (group, index) => {
  const translationPath = `techGroups.${index}`;
  return {
    ...group,
    title: t(`${translationPath}.title`, group.title),
    items: tArray(`${translationPath}.items`, group.items || [])
  };
};

const localizedLinkLabel = (label) => {
  const key = String(label).toLowerCase();
  const translated = t(`linkLabels.${key}`, '');
  if (translated) return translated;
  return label;
};

const localizedOpenSourceContribution = (item) => ({
  ...item,
  ...activeDictionary.openSourceContributions?.[item.id]
});

const normalizeVisibleText = (value) => String(value ?? '')
  .replace(/\\r\\n|\\n|\\r/g, '\n')
  .replace(/�vent/g, 'Event')
  .replace(/�/g, '')
  .trim();

const mergeIcon = () => {
  const icon = document.createElement('span');
  icon.className = 'merge-icon';
  icon.setAttribute('aria-hidden', 'true');
  return icon;
};

const renderOpenSourceContributions = () => {
  const contributions = portfolioData.openSourceContributions || [];
  const mergedContributions = contributions.filter((contribution) => !contribution.status || contribution.status === 'merged');
  if (openSourceMergeCountEl) openSourceMergeCountEl.textContent = mergedContributions.length;
  if (!openSourceList) return;

  openSourceList.innerHTML = '';

  if (!contributions.length) {
    const empty = document.createElement('p');
    empty.className = 'open-source-empty';
    empty.textContent = t('github.openSourceEmpty', 'Noch keine öffentlich belegten Merges hinterlegt.');
    openSourceList.append(empty);
    return;
  }

  const featured = contributions.slice(0, 4);
  const additional = contributions.slice(4);

  featured.forEach((contribution) => {
    const item = localizedOpenSourceContribution(contribution);
    const card = document.createElement('a');
    card.className = 'open-source-pr';
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    const contributionKind = item.kind === 'issue' ? 'Issue' : 'Pull Request';
    card.setAttribute('aria-label', `${item.repo} ${contributionKind} ${item.number}: ${item.title}`);

    const top = document.createElement('div');
    top.className = 'open-source-top';

    const repo = document.createElement('span');
    repo.className = 'open-source-repo';
    repo.textContent = item.repo;

    const number = document.createElement('span');
    number.className = 'open-source-number';
    number.textContent = `${item.kind === 'issue' ? 'Issue' : 'PR'} #${item.number}`;

    top.append(repo, number);

    const title = document.createElement('h4');
    title.textContent = normalizeVisibleText(item.title);

    const summary = document.createElement('p');
    summary.textContent = normalizeVisibleText(item.summary);

    const bottom = document.createElement('div');
    bottom.className = 'open-source-bottom';

    const tags = document.createElement('div');
    tags.className = 'open-source-tags';
    (item.tags || []).forEach((tagText) => {
      const tag = document.createElement('span');
      tag.textContent = normalizeVisibleText(tagText);
      tags.append(tag);
    });

    const merged = document.createElement('span');
    merged.className = 'merged-badge';
    const contributionLabel = t('github.mergedLabel', 'Merged');
    merged.append(mergeIcon(), document.createTextNode(contributionLabel));

    bottom.append(tags, merged);
    card.append(top, title, summary, bottom);
    openSourceList.append(card);
  });

  const moreCard = document.createElement('article');
  moreCard.className = 'open-source-pr open-source-more-card';

  const moreTitle = document.createElement('h4');
  moreTitle.textContent = t('github.moreMergesTitle', 'Weitere Merges');
  const moreText = document.createElement('p');
  moreText.textContent = t('github.moreMergesText', 'Weitere gemergte Pull Requests mit direktem Nachweis.');

  const moreList = document.createElement('div');
  moreList.className = 'open-source-more-list';
  additional.forEach((contribution) => {
    const item = localizedOpenSourceContribution(contribution);
    const link = document.createElement('a');
    link.className = 'open-source-more-link link-arrow';
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = `${item.repo} #${item.number}`;
    if (item.title) link.title = item.title;
    moreList.append(link);
  });

  moreCard.append(moreTitle, moreText, moreList);
  openSourceList.append(moreCard);
};

const applyStaticTranslations = () => {
  i18nElements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const fallback = defaultTexts.get(element) || '';
    element.textContent = t(key, fallback);
  });
  i18nAriaElements.forEach((element) => {
    const key = element.getAttribute('data-i18n-aria');
    const fallback = element.getAttribute('aria-label') || '';
    element.setAttribute('aria-label', t(key, fallback));
  });
};

const setMenuState = (isOpen) => {
  if (!navToggle || !navList) return;
  navList.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

const scrollToSection = (targetId, behavior = 'smooth') => {
  const cleanId = targetId.replace(/^#/, '').split(/[?&]/)[0];
  const section = document.getElementById(cleanId);
  if (!section) return;

  const header = document.querySelector('.site-header');
  const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
  const top = Math.max(window.pageYOffset + section.getBoundingClientRect().top - headerHeight - 22, 0);

  window.scrollTo({ top, behavior: prefersReducedMotion.matches ? 'instant' : behavior });
  const nextHash = `#${cleanId}`;
  if (window.location.hash !== nextHash) {
    window.history.replaceState(null, '', nextHash);
  }
};

const setActiveNav = (sectionId) => {
  navLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${sectionId}`;
    link.classList.toggle('is-active', active);
  });
};

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!expanded);
  });
}

document.querySelectorAll('.nav-list a[href^="#"], .hero-actions a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    event.preventDefault();
    setMenuState(false);
    const target = link.hash;
    scrollToSection(target);
    setActiveNav(target.slice(1));
  });
});

const updateNavForScroll = () => {
  if (modal?.open || document.body.classList.contains('modal-open')) return;
  const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (nearBottom) {
    setActiveNav('contact');
    if (lastScrollSectionId !== 'contact') {
      lastScrollSectionId = 'contact';
      window.history.replaceState(null, '', '#contact');
    }
    return;
  }

  let currentId = sections[0] ? sections[0].id : '';
  const scrollProbe = window.scrollY + 140;

  sections.forEach((section) => {
    if (scrollProbe >= section.offsetTop) {
      currentId = section.id;
    }
  });

  setActiveNav(currentId);
  if (currentId && currentId !== lastScrollSectionId) {
    lastScrollSectionId = currentId;
    const nextHash = `#${currentId}`;
    if (window.location.hash !== nextHash) window.history.replaceState(null, '', nextHash);
  }
};

window.addEventListener('scroll', updateNavForScroll);
window.addEventListener('resize', updateNavForScroll);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const createProjectDetailButton = (displayItem, label) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn-secondary';
  button.textContent = label;
  button.addEventListener('click', () => openDetailModal(displayItem, 'projects'));
  return button;
};

const createProjectLinks = (links) => {
  const container = document.createElement('div');
  container.className = 'project-links';
  (links || []).forEach((linkItem) => {
    const link = document.createElement('a');
    link.className = 'link-arrow';
    link.href = linkItem.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = localizedLinkLabel(linkItem.label);
    container.append(link);
  });
  return container;
};

const createProjectListItem = (item, number) => {
  const detailsLabel = t('portfolio.projectInformation', 'Projektinformationen');
  const displayItem = localizedPortfolioItem(item, 'projects');
  const card = document.createElement('article');
  card.className = 'project-list-item';
  card.tabIndex = 0;
  card.setAttribute('aria-label', `${displayItem.title}: ${detailsLabel}`);

  const index = document.createElement('span');
  index.className = 'project-list-index';
  index.textContent = String(number).padStart(2, '0');

  const content = document.createElement('div');
  content.className = 'project-list-content';
  const title = document.createElement('h3');
  title.textContent = displayItem.title;
  const description = document.createElement('p');
  description.textContent = displayItem.cardDescription || displayItem.description || '';
  const tags = document.createElement('div');
  tags.className = 'project-tags';
  (displayItem.tags || []).forEach((tagText) => {
    const tag = document.createElement('span');
    tag.textContent = tagText;
    tags.append(tag);
  });
  const actions = document.createElement('div');
  actions.className = 'card-actions';
  actions.append(createProjectDetailButton(displayItem, detailsLabel));
  const links = createProjectLinks(item.links);
  if (links.children.length) actions.append(links);
  content.append(title, description, tags, actions);
  card.append(index, content);

  bindDetailsCard(card, () => openDetailModal(displayItem, 'projects'));
  return card;
};

const bindDetailsCard = (card, openDetails) => {
  card.addEventListener('click', (event) => {
    if (!event.target.closest('button, a')) openDetails();
  });
  card.addEventListener('keydown', (event) => {
    if (event.target !== card || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    openDetails();
  });
};

const createCertificateCard = (item) => {
  const copy = localizedPortfolioItem(item, 'certificates');
  const detailsLabel = t('portfolio.detailsButton', 'Details anzeigen');
  const card = document.createElement('article');
  card.className = 'item-card certificate-card';
  card.tabIndex = 0;
  card.setAttribute('aria-label', `${copy.title}: ${detailsLabel}`);

  const preview = document.createElement('div');
  preview.className = 'project-preview has-image certificate-preview';
  const image = document.createElement('img');
  image.src = item.previewImage;
  image.alt = `${copy.title} ${copy.previewLabel || 'Vorschau'}`;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.addEventListener('error', () => preview.remove(), { once: true });
  preview.append(image);

  const title = document.createElement('h3');
  title.textContent = copy.title;
  const description = document.createElement('p');
  description.textContent = copy.cardDescription || '';
  const openDetails = () => openDetailModal(copy, 'certificates');
  const actions = document.createElement('div');
  actions.className = 'card-actions';
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = detailsLabel;
  button.addEventListener('click', openDetails);
  actions.append(button);
  bindDetailsCard(card, openDetails);
  card.append(preview, title, description, actions);
  return card;
};

const techCatalog = {
  python: { label: 'Python', mark: 'Py', icon: 'python', accent: '#4f9ef8', asset: 'python' },
  javascript: { label: 'JavaScript', mark: 'JS', icon: 'javascript', accent: '#f5d849', asset: 'javascript' },
  html: { label: 'HTML', mark: '5', icon: 'html', accent: '#f0643b', asset: 'html' },
  css: { label: 'CSS', mark: '3', icon: 'css', accent: '#3f9ef3', asset: 'css' },
  react: { label: 'React', mark: 'R', icon: 'react', accent: '#61dafb', asset: 'react' },
  vite: { label: 'Vite', mark: 'V', icon: 'vite', accent: '#9b7cff', asset: 'vite' },
  nodejs: { label: 'Node.js', mark: 'Node', icon: 'nodejs', accent: '#76c76b', asset: 'nodejs' },
  fastapi: { label: 'FastAPI', mark: 'F', icon: 'fastapi', accent: '#18b892', asset: 'fastapi' },
  pytest: { label: 'pytest', mark: 'pt', icon: 'pytest', accent: '#f0a84b', asset: 'pytest' },
  java: { label: 'Java', mark: 'J', icon: 'java', accent: '#f06445', asset: 'java' },
  csharp: { label: 'C#', mark: 'C#', icon: 'csharp', accent: '#a26bff', asset: 'csharp' },
  dotnet: { label: '.NET', mark: '.NET', icon: 'dotnet', accent: '#8f5cff', asset: 'dotnet' },
  typescript: { label: 'TypeScript', mark: 'TS', icon: 'typescript', accent: '#3178c6', asset: 'typescript' },
  sqlite: { label: 'SQLite', mark: 'SQL', icon: 'sqlite', accent: '#4aa7d9', asset: 'sqlite' },
  json: { label: 'JSON', mark: '{ }', icon: 'json', accent: '#d5b35a', asset: 'json' },
  csv: { label: 'CSV', mark: 'CSV', icon: 'csv', accent: '#5fca91', asset: 'csv' },
  aws: { label: 'AWS', mark: 'AWS', icon: 'aws', accent: '#ffb44c', asset: 'aws' },
  git: { label: 'Git', mark: 'Git', icon: 'git', accent: '#f26545', asset: 'git' },

  docker: { label: 'Docker', mark: 'Dock', icon: 'docker', accent: '#38bdf8', asset: 'docker' },
  powershell: { label: 'PowerShell', mark: '>_', icon: 'powershell', accent: '#58a6ff', asset: 'powershell' },
  batchfile: { label: 'Batchfile', mark: 'BAT', icon: 'batchfile', accent: '#66b5ee', asset: 'batchfile' },
  openai: { label: 'OpenAI', mark: 'AI', icon: 'openai', accent: '#74d3ae', asset: 'openai' },
  netlify: { label: 'Netlify', icon: 'netlify', accent: '#00c7b7', asset: 'netlify' },
  vercel: { label: 'Vercel', icon: 'vercel', accent: '#f2edff', asset: 'vercel' },
  wordpress: { label: 'WordPress', icon: 'wordpress', accent: '#21759b', asset: 'wordpress' },
  hostpoint: { label: 'HostPoint', icon: 'hostpoint', accent: '#1e9ae2', asset: 'hostpoint' },
  cloudflare: { label: 'Cloudflare', icon: 'cloudflare', accent: '#f38020', asset: 'cloudflare' }
};

const renderTechStack = () => {
  techGrid.innerHTML = '';

  portfolioData.techGroups.forEach((group, index) => {
    const displayGroup = localizedTechGroup(group, index);
    const card = document.createElement('article');
    card.className = 'tech-group-card';

    const title = document.createElement('h3');
    title.textContent = displayGroup.title;

    const list = document.createElement('ul');
    (group.items || []).forEach((techId, itemIndex) => {
      const translatedLabel = (displayGroup.items || [])[itemIndex];
      const catalogEntry = techCatalog[techId];
      const tech = catalogEntry ? {
        ...catalogEntry,
        label: translatedLabel || catalogEntry.label
      } : {
        label: translatedLabel || techId,
        accent: '#38bdf8',
        icon: 'code'
      };
      const listItem = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'tech-logo-button';
      button.style.setProperty('--tech-accent', tech.accent);
      button.setAttribute('aria-label', tech.label);
      button.setAttribute('aria-pressed', 'false');
      button.title = tech.label;

      const icon = document.createElement('span');
      icon.className = `tech-brand-icon tech-brand-${tech.icon}`;
      icon.setAttribute('aria-hidden', 'true');
      if (tech.asset) {
        const image = document.createElement('img');
        image.src = `assets/tech-icons/${tech.asset}.svg`;
        image.alt = '';
        image.loading = 'lazy';
        icon.append(image);
      } else {
        icon.textContent = tech.mark || '';
      }

      const label = document.createElement('span');
      label.className = 'tech-logo-label';
      label.textContent = tech.label;

      button.addEventListener('click', () => {
        const isSelected = button.getAttribute('aria-pressed') === 'true';
        list.querySelectorAll('.tech-logo-button[aria-pressed="true"]').forEach((activeButton) => {
          activeButton.setAttribute('aria-pressed', 'false');
          activeButton.closest('.tech-group-card')?.classList.remove('has-selected-technology');
        });
        button.setAttribute('aria-pressed', String(!isSelected));
        button.closest('.tech-group-card')?.classList.toggle('has-selected-technology', !isSelected);
      });

      button.append(icon, label);
      listItem.append(button);
      list.append(listItem);
    });

    card.append(title, list);
    techGrid.append(card);
  });
};

const updateLegalLinks = (languageCode) => {
  document.querySelectorAll('[data-legal-page-link]').forEach((link) => {
    const page = link.dataset.legalPageLink;
    if (page) link.href = `${page}.html?lang=${encodeURIComponent(languageCode)}`;
  });
};

const refreshDynamicTexts = () => {
  projectsGrid.replaceChildren(...portfolioData.projects.map((project, index) => createProjectListItem(project, index + 1)));
  certificatesGrid.replaceChildren(...portfolioData.certificates.map(createCertificateCard));
  renderOpenSourceContributions();
  renderTechStack();
};

let languageRequest = 0;
const loadLanguage = async (requested) => {
  const request = ++languageRequest;
  const { code: languageCode, dictionary } = await portfolioLanguages.load(requested);
  if (request !== languageRequest) return;
  activeDictionary = dictionary;
  const isCyrillic = languageCode === 'sr-cyrl';
  const firstName = isCyrillic ? 'Александар' : 'Aleksandar';
  const lastName = isCyrillic ? 'Николић' : 'Nikolić';
  const visibleName = `${firstName} ${lastName}`;
  const brandName = document.querySelector('.brand-latin');
  if (brandName) {
    brandName.innerHTML = `${firstName} <em>${lastName}</em>`;
  }
  const alternateBrand = document.querySelector('.brand-cyrillic');
  if (alternateBrand) alternateBrand.textContent = isCyrillic ? 'Aleksandar Nikolić' : 'Александар Николић';
  const heroFirstName = document.getElementById('hero-first-name');
  const heroLastName = document.getElementById('hero-last-name');
  if (heroFirstName) heroFirstName.textContent = firstName;
  if (heroLastName) heroLastName.textContent = `${lastName}.`;
  document.title = `${visibleName} (AleksZyro) | IMS-Portfolio`;
  if (footerName) footerName.textContent = visibleName;
  applyStaticTranslations();
  refreshDynamicTexts();

  portfolioLanguages.apply(languageCode);
  const selectedOption = updateLanguageMenu(languageCode);
  languageCurrentLabel.textContent = selectedOption.textContent.trim();
  languageCurrentFlag.className = selectedOption.querySelector('.flag').className;
  updateLegalLinks(languageCode);
  updateMigrationNotice();
};

const alignInitialHash = () => {
  const target = initialSectionHash;
  const cleanId = target.replace(/^#/, '').split(/[?&]/)[0];
  if (!cleanId || !document.getElementById(cleanId)) return;

  scrollToSection(`#${cleanId}`, 'instant');
  setActiveNav(cleanId);
};

const openDetailModal = createDetailDialog(modal, t, localizedLinkLabel);
const updateLanguageMenu = portfolioLanguages.bindMenu(languageMenuButton, languageMenu, loadLanguage);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

window.addEventListener('resize', updateCareerPath);
window.addEventListener('load', updateCareerPath, { once: true });
updateNavForScroll();
window.requestAnimationFrame(updateCareerPath);

loadLanguage(portfolioLanguages.initial()).then(() => {
  if (languageRequest === 1) alignInitialHash();
});
window.setTimeout(showMigrationNotice, 350);
