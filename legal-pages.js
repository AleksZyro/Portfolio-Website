const legalPageKind = document.body.dataset.legalPage;
const languageSelect = document.getElementById('legal-language');
const legalCopy = {
  de: {
    brand: 'Aleksandar Nikolić', back: 'Zurück zum Portfolio',
    impressum: ['Impressum', 'Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolić und dient der Präsentation von Ausbildung, Projekten, Zertifikaten und Kontaktmöglichkeiten. Kontakt ist per E-Mail im Kontaktbereich der Portfolio-Seite möglich.'],
    datenschutz: ['Datenschutz', 'Diese Website verwendet keine Formulare, keine Analytics, keine Werbetracker und keine externen Tracking-Skripte. Externe Dienste werden erst geöffnet, wenn ein Link aktiv angeklickt wird. Beim Aufruf der Website kann der Hosting-Anbieter technisch notwendige Zugriffsdaten verarbeiten.'],
    cookies: ['Cookies', 'Diese Website setzt keine Tracking-Cookies. Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung beim nächsten Besuch erhalten bleibt.']
  },
  en: {
    brand: 'Aleksandar Nikolić', back: 'Back to portfolio',
    impressum: ['Imprint', 'This website is a private portfolio website by Aleksandar Nikolić. It presents education, projects, certificates and contact options. Contact is available by email in the portfolio contact section.'],
    datenschutz: ['Privacy', 'This website uses no forms, analytics, advertising trackers or external tracking scripts. External services only open after an active link click. When visiting the website, the hosting provider may process technically required access data.'],
    cookies: ['Cookies', 'This website uses no tracking cookies. The selected language may be stored locally in the browser so the setting remains available for the next visit.']
  },
  fr: {
    brand: 'Aleksandar Nikolić', back: 'Retour au portfolio',
    impressum: ['Mentions légales', 'Ce site est un portfolio privé d’Aleksandar Nikolić. Il présente sa formation, ses projets, ses certificats et ses possibilités de contact. Le contact est possible par e-mail dans la section contact du portfolio.'],
    datenschutz: ['Protection des données', 'Ce site n’utilise ni formulaires, ni analytics, ni traceurs publicitaires, ni scripts de suivi externes. Les services externes ne s’ouvrent qu’après un clic actif sur un lien. Lors de la visite, l’hébergeur peut traiter des données d’accès techniquement nécessaires.'],
    cookies: ['Cookies', 'Ce site n’utilise pas de cookies de suivi. La langue choisie peut être enregistrée localement dans le navigateur afin de conserver le réglage lors de la prochaine visite.']
  },
  sr: {
    brand: 'Aleksandar Nikolić', back: 'Nazad na portfolio',
    impressum: ['Impresum', 'Ovaj veb-sajt je privatni portfolio Aleksandra Nikolića i služi za predstavljanje obrazovanja, projekata, sertifikata i načina kontakta. Kontakt je moguć putem e-maila u kontakt delu portfolio sajta.'],
    datenschutz: ['Privatnost', 'Ovaj veb-sajt ne koristi formulare, analitiku, reklamne trekere ni eksterne skripte za praćenje. Eksterni servisi otvaraju se tek nakon aktivnog klika na link. Pri poseti sajt hosting provajder može obraditi tehnički neophodne pristupne podatke.'],
    cookies: ['Kukiji', 'Ovaj veb-sajt ne postavlja kukije za praćenje. Izabrani jezik može biti lokalno sačuvan u pregledaču kako bi podešavanje ostalo dostupno pri sledećoj poseti.']
  },
  'sr-cyrl': {
    brand: 'Александар Николић', back: 'Назад на портфолио',
    impressum: ['Импресум', 'Овај веб-сајт је приватни портфолио Александра Николића и служи за представљање образовања, пројеката, сертификата и начина контакта. Контакт је могућ путем имејла у контакт делу портфолио сајта.'],
    datenschutz: ['Приватност', 'Овај веб-сајт не користи формуларе, аналитику, рекламне трекере ни екстерне скрипте за праћење. Екстерни сервиси отварају се тек након активног клика на линк. При посети сајту хостинг провајдер може обрадити технички неопходне приступне податке.'],
    cookies: ['Кукији', 'Овај веб-сајт не поставља кукије за праћење. Изабрани језик може бити локално сачуван у прегледачу како би подешавање остало доступно при следећој посети.']
  }
};

const applyLegalLanguage = (code) => {
  const copy = legalCopy[code] || legalCopy.de;
  const [title, text] = copy[legalPageKind] || copy.impressum;
  const htmlLanguageCodes = { sr: 'sr-Latn', 'sr-cyrl': 'sr-Cyrl' };
  document.documentElement.lang = htmlLanguageCodes[code] || code;
  document.title = `${title} | ${copy.brand}`;
  document.querySelectorAll('[data-legal-brand]').forEach((element) => { element.textContent = copy.brand; });
  document.getElementById('legal-kicker').textContent = title;
  document.getElementById('legal-title').textContent = title;
  document.getElementById('legal-text').textContent = text;
  document.getElementById('legal-back').textContent = `← ${copy.back}`;
  languageSelect.value = code;
  localStorage.setItem('portfolio-language', code);
};

languageSelect.addEventListener('change', () => applyLegalLanguage(languageSelect.value));
applyLegalLanguage(localStorage.getItem('portfolio-language') || 'de');
