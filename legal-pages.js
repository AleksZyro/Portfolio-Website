const languageButton = document.getElementById('legal-language-button');
const languageMenu = document.getElementById('legal-language-menu');
const languageFlag = document.getElementById('legal-language-flag');
const languageLabel = document.getElementById('legal-language-label');
const sectionIds = ['impressum', 'hosting', 'auslieferung', 'datenschutz', 'datenschutzrechte'];
const sectionLinks = document.getElementById('legal-blocks');
let legalLanguageRequest = 0;

function resetHorizontalScroll() {
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;
  if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
}

async function applyLegalLanguage(requested) {
  const request = ++legalLanguageRequest;
  const { code, dictionary } = await portfolioLanguages.load(requested);
  if (request !== legalLanguageRequest || !dictionary.legalPage) return;
  const page = dictionary.legalPage;
  document.title = `${page.title} | ${page.brand}`;
  document.getElementById('legal-kicker').textContent = page.kicker;
  document.getElementById('legal-title').textContent = page.title;
  document.getElementById('legal-intro').textContent = page.intro;
  document.getElementById('legal-back').textContent = `← ${page.back}`;
  sectionLinks.replaceChildren(...page.sections.map(({ title, text }, index) => {
    const block = document.createElement('section');
    block.className = 'legal-block';
    block.id = sectionIds[index];
    const heading = document.createElement('h2');
    heading.textContent = title;
    const paragraph = document.createElement('p');
    paragraph.className = 'legal-block-text';
    paragraph.textContent = text;
    if (block.id === 'datenschutz') paragraph.id = 'cookies';
    block.append(heading, paragraph);
    return block;
  }));

  portfolioLanguages.apply(code);
  const selected = updateLegalMenu(code);
  languageLabel.textContent = selected.textContent.trim();
  languageFlag.className = selected.querySelector('.flag').className;
}

const updateLegalMenu = portfolioLanguages.bindMenu(languageButton, languageMenu, applyLegalLanguage);
window.addEventListener('pageshow', resetHorizontalScroll);
window.addEventListener('resize', resetHorizontalScroll);
applyLegalLanguage(portfolioLanguages.initial()).then(() => {
  const target = document.getElementById(location.hash.slice(1));
  target?.scrollIntoView();
});
