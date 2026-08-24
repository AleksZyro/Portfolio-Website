const legalPageKind = document.body.dataset.legalPage;
const languageSelect = document.getElementById('legal-language');
const languageFromUrl = new URLSearchParams(window.location.search).get('lang');

const resetHorizontalScroll = () => {
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;
  if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
};

window.addEventListener('pageshow', resetHorizontalScroll);
window.addEventListener('resize', resetHorizontalScroll);

const section = (title, text) => ({ title, text });
const legalCopy = {
  de: {
    brand: 'Aleksandar Nikolić', back: 'Zurück zum Portfolio', kicker: 'Rechtliches',
    intro: { impressum: 'Portfolio und Kontaktinformationen auf einen Blick.', datenschutz: 'Transparent erklärt, welche Daten diese Seite verarbeitet.', cookies: 'Kurz erklärt, was lokal gespeichert wird.' },
    impressum: { title: 'Impressum', sections: [
      section('Private Portfolio-Seite', 'Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolić. Sie zeigt Ausbildung, Projekte, Zertifikate und berufliche Interessen.'),
      section('Kontakt', 'Für Fragen zu Projekten oder einer Praktikumsstelle bin ich per E-Mail erreichbar: aleksandar09@gmail.com.'),
      section('Hosting', 'Die Seite wird als statische Website über Cloudflare Pages bereitgestellt. Cloudflare übernimmt dabei die Auslieferung und den Schutz der Website.'),
    ]},
    datenschutz: { title: 'Datenschutz', sections: [
      section('Keine Formulare und kein Tracking', 'Diese Seite verwendet keine Formulare, keine Analytics, keine Werbetracker und keine externen Tracking-Skripte.'),
      section('Technisch notwendige Daten', 'Beim Aufruf können technisch notwendige Zugriffsdaten durch Cloudflare als Hosting- und CDN-Anbieter verarbeitet werden. Diese Verarbeitung dient der sicheren Auslieferung der Seite.'),
      section('Externe Links', 'Links zu GitHub und anderen externen Diensten werden erst geöffnet, wenn du sie aktiv anklickst.'),
    ]},
    cookies: { title: 'Cookies', sections: [
      section('Keine Tracking-Cookies', 'Diese Website setzt keine Cookies für Werbung, Analytics oder Nutzerverfolgung.'),
      section('Lokale Spracheinstellung', 'Die gewählte Sprache kann lokal im Browser gespeichert werden, damit deine Einstellung beim nächsten Besuch erhalten bleibt.'),
      section('Hosting', 'Cloudflare Pages kann technisch notwendige Funktionen für die sichere und zuverlässige Auslieferung der Seite verwenden.'),
    ]},
  },
  en: {
    brand: 'Aleksandar Nikolić', back: 'Back to portfolio', kicker: 'Legal',
    intro: { impressum: 'Portfolio and contact information at a glance.', datenschutz: 'A transparent overview of how this site handles data.', cookies: 'A short explanation of what is stored locally.' },
    impressum: { title: 'Imprint', sections: [
      section('Private portfolio website', 'This is Aleksandar Nikolić\'s private portfolio website. It presents education, projects, certificates and professional interests.'),
      section('Contact', 'For questions about projects or an internship, I can be reached by email at aleksandar09@gmail.com.'),
      section('Hosting', 'The site is delivered as a static website through Cloudflare Pages. Cloudflare provides delivery and protection for the website.'),
    ]},
    datenschutz: { title: 'Privacy', sections: [
      section('No forms and no tracking', 'This site uses no forms, analytics, advertising trackers or external tracking scripts.'),
      section('Technically necessary data', 'When the site is opened, Cloudflare may process technically necessary access data as the hosting and CDN provider. This supports secure delivery.'),
      section('External links', 'Links to GitHub and other external services only open after you actively click them.'),
    ]},
    cookies: { title: 'Cookies', sections: [
      section('No tracking cookies', 'This website does not set cookies for advertising, analytics or user tracking.'),
      section('Local language setting', 'The selected language may be stored locally in your browser so your preference is kept for the next visit.'),
      section('Hosting', 'Cloudflare Pages may use technically necessary functions to deliver the site securely and reliably.'),
    ]},
  },
  fr: {
    brand: 'Aleksandar Nikolić', back: 'Retour au portfolio', kicker: 'Mentions légales',
    intro: { impressum: 'Portfolio et coordonnées en un coup d’œil.', datenschutz: 'Une présentation transparente du traitement des données.', cookies: 'Une brève explication de ce qui est enregistré localement.' },
    impressum: { title: 'Mentions légales', sections: [
      section('Portfolio privé', 'Ce site est le portfolio privé d’Aleksandar Nikolić. Il présente sa formation, ses projets, ses certificats et ses intérêts professionnels.'),
      section('Contact', 'Pour toute question sur les projets ou un stage, je suis joignable par e-mail à aleksandar09@gmail.com.'),
      section('Hébergement', 'Le site est diffusé comme site statique via Cloudflare Pages. Cloudflare assure la diffusion et la protection du site.'),
    ]},
    datenschutz: { title: 'Protection des données', sections: [
      section('Aucun formulaire ni suivi', 'Ce site n’utilise ni formulaires, ni analytics, ni traceurs publicitaires, ni scripts externes de suivi.'),
      section('Données techniquement nécessaires', 'Lors de la visite, Cloudflare peut traiter des données d’accès techniquement nécessaires en tant qu’hébergeur et CDN. Cela permet une diffusion sécurisée.'),
      section('Liens externes', 'Les liens vers GitHub et d’autres services externes ne s’ouvrent qu’après un clic actif.'),
    ]},
    cookies: { title: 'Cookies', sections: [
      section('Aucun cookie de suivi', 'Ce site n’utilise pas de cookies pour la publicité, les analytics ou le suivi des utilisateurs.'),
      section('Langue locale', 'La langue choisie peut être enregistrée localement dans le navigateur afin de conserver votre préférence lors de la prochaine visite.'),
      section('Hébergement', 'Cloudflare Pages peut utiliser des fonctions techniquement nécessaires pour diffuser le site de manière sûre et fiable.'),
    ]},
  },
  sr: {
    brand: 'Aleksandar Nikolić', back: 'Nazad na portfolio', kicker: 'Pravno',
    intro: { impressum: 'Portfolio i kontakt-informacije na jednom mestu.', datenschutz: 'Jasno objašnjenje obrade podataka na ovom sajtu.', cookies: 'Kratko objašnjenje onoga što se čuva lokalno.' },
    impressum: { title: 'Impresum', sections: [
      section('Privatni portfolio sajt', 'Ovo je privatni portfolio sajt Aleksandra Nikolića. Predstavlja obrazovanje, projekte, sertifikate i profesionalna interesovanja.'),
      section('Kontakt', 'Za pitanja o projektima ili praksi dostupan sam putem e-maila: aleksandar09@gmail.com.'),
      section('Hosting', 'Sajt se isporučuje kao statički sajt preko Cloudflare Pages. Cloudflare obezbeđuje isporuku i zaštitu sajta.'),
    ]},
    datenschutz: { title: 'Privatnost', sections: [
      section('Bez formulara i praćenja', 'Ovaj sajt ne koristi formulare, analitiku, reklamne trekere ni eksterne skripte za praćenje.'),
      section('Tehnički neophodni podaci', 'Prilikom otvaranja sajta Cloudflare kao hosting i CDN provajder može obraditi tehnički neophodne podatke pristupa. To omogućava bezbednu isporuku.'),
      section('Eksterni linkovi', 'Linkovi ka GitHubu i drugim eksternim servisima otvaraju se tek nakon aktivnog klika.'),
    ]},
    cookies: { title: 'Kukiji', sections: [
      section('Bez kolačića za praćenje', 'Ovaj sajt ne postavlja kukije za reklame, analitiku ili praćenje korisnika.'),
      section('Lokalno čuvanje jezika', 'Izabrani jezik može biti lokalno sačuvan u pregledaču kako bi podešavanje ostalo dostupno pri sledećoj poseti.'),
      section('Hosting', 'Cloudflare Pages može koristiti tehnički neophodne funkcije za bezbednu i pouzdanu isporuku sajta.'),
    ]},
  },
  'sr-cyrl': {
    brand: 'Александар Николић', back: 'Назад на портфолио', kicker: 'Правно',
    intro: { impressum: 'Портфолио и контакт-информације на једном месту.', datenschutz: 'Јасно објашњење обраде података на овом сајту.', cookies: 'Кратко објашњење онога што се чува локално.' },
    impressum: { title: 'Импресум', sections: [
      section('Приватни портфолио сајт', 'Ово је приватни портфолио сајт Александра Николића. Представља образовање, пројекте, сертификате и професионална интересовања.'),
      section('Контакт', 'За питања о пројектима или пракси доступан сам путем имејла: aleksandar09@gmail.com.'),
      section('Хостинг', 'Сајт се испоручује као статички сајт преко Cloudflare Pages. Cloudflare обезбеђује испоруку и заштиту сајта.'),
    ]},
    datenschutz: { title: 'Приватност', sections: [
      section('Без формулара и праћења', 'Овај сајт не користи формуларе, аналитику, рекламне трекере ни екстерне скрипте за праћење.'),
      section('Технички неопходни подаци', 'Приликом отварања сајта Cloudflare као хостинг и CDN провајдер може обрадити технички неопходне податке приступа. То омогућава безбедну испоруку.'),
      section('Екстерни линкови', 'Линкови ка GitHub-у и другим екстерним сервисима отварају се тек након активног клика.'),
    ]},
    cookies: { title: 'Кукији', sections: [
      section('Без колачића за праћење', 'Овај сајт не поставља кукије за рекламе, аналитику или праћење корисника.'),
      section('Локално чување језика', 'Изабрани језик може бити локално сачуван у прегледачу како би подешавање остало доступно при следећој посети.'),
      section('Хостинг', 'Cloudflare Pages може користити технички неопходне функције за безбедну и поуздану испоруку сајта.'),
    ]},
  },
};

const unifiedLegalCopy = {
  de: { title: 'Impressum und Rechtliches', intro: 'Eine gemeinsame, transparente Erklärung zu Portfolio, Hosting, Datenschutz und Cookies.', heading: 'Impressum, Datenschutz, Cookies und Hosting', text: 'Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolić. Sie präsentiert Ausbildung, Projekte, Zertifikate und berufliche Interessen. Für Fragen oder eine Praktikumsstelle bin ich per E-Mail unter aleksandar09@gmail.com erreichbar.\n\nDie Seite wird als statische Website über Cloudflare Pages bereitgestellt. Beim Aufruf können technisch notwendige Zugriffsdaten durch Cloudflare als Hosting- und CDN-Anbieter verarbeitet werden, damit die Website sicher und zuverlässig ausgeliefert werden kann. Es werden keine Formulare, keine Analytics, keine Werbetracker und keine externen Tracking-Skripte eingesetzt. Externe Links zu GitHub und anderen Diensten öffnen sich erst, wenn sie aktiv angeklickt werden.\n\nDiese Website setzt keine Tracking-Cookies für Werbung, Analytics oder Nutzerverfolgung. Die gewählte Sprache kann lokal im Browser gespeichert werden, damit die Einstellung beim nächsten Besuch erhalten bleibt.' },
  en: { title: 'Imprint and legal information', intro: 'One transparent explanation covering the portfolio, hosting, privacy and cookies.', heading: 'Imprint, privacy, cookies and hosting', text: 'This is Aleksandar Nikolić\'s private portfolio website. It presents education, projects, certificates and professional interests. For questions or an internship, I can be reached by email at aleksandar09@gmail.com.\n\nThe site is delivered as a static website through Cloudflare Pages. Cloudflare may process technically necessary access data as the hosting and CDN provider so the website can be delivered securely and reliably. No forms, analytics, advertising trackers or external tracking scripts are used. Links to GitHub and other external services only open after an active click.\n\nThis website does not set tracking cookies for advertising, analytics or user tracking. The selected language may be stored locally in the browser so your preference is kept for the next visit.' },
  fr: { title: 'Mentions légales et informations', intro: 'Une explication transparente du portfolio, de l’hébergement, de la confidentialité et des cookies.', heading: 'Mentions légales, confidentialité, cookies et hébergement', text: 'Ce site est le portfolio privé d’Aleksandar Nikolić. Il présente sa formation, ses projets, ses certificats et ses intérêts professionnels. Pour toute question ou un stage, je suis joignable par e-mail à aleksandar09@gmail.com.\n\nLe site est diffusé comme site statique via Cloudflare Pages. Cloudflare peut traiter des données d’accès techniquement nécessaires en tant qu’hébergeur et CDN afin de diffuser le site de manière sûre et fiable. Aucun formulaire, outil d’analyse, traceur publicitaire ni script externe de suivi n’est utilisé. Les liens vers GitHub et d’autres services externes ne s’ouvrent qu’après un clic actif.\n\nCe site n’utilise pas de cookies de suivi pour la publicité, les analyses ou le suivi des utilisateurs. La langue choisie peut être enregistrée localement dans le navigateur afin de conserver votre préférence lors de la prochaine visite.' },
  sr: { title: 'Impresum i pravne informacije', intro: 'Jedno jasno objašnjenje o portfoliju, hostingu, privatnosti i kukijima.', heading: 'Impresum, privatnost, kukiji i hosting', text: 'Ovo je privatni portfolio sajt Aleksandra Nikolića. Predstavlja obrazovanje, projekte, sertifikate i profesionalna interesovanja. Za pitanja ili praksu dostupan sam putem e-maila: aleksandar09@gmail.com.\n\nSajt se isporučuje kao statički sajt preko Cloudflare Pages. Cloudflare kao hosting i CDN provajder može obraditi tehnički neophodne podatke pristupa kako bi sajt bio bezbedno i pouzdano isporučen. Sajt ne koristi formulare, analitiku, reklamne trekere ni eksterne skripte za praćenje. Linkovi ka GitHubu i drugim eksternim servisima otvaraju se tek nakon aktivnog klika.\n\nOvaj sajt ne postavlja kukije za reklame, analitiku ili praćenje korisnika. Izabrani jezik može biti lokalno sačuvan u pregledaču kako bi podešavanje ostalo dostupno pri sledećoj poseti.' },
  'sr-cyrl': { title: 'Импресум и правне информације', intro: 'Једно јасно објашњење о портфолију, хостингу, приватности и кукијима.', heading: 'Импресум, приватност, кукији и хостинг', text: 'Ово је приватни портфолио сајт Александра Николића. Представља образовање, пројекте, сертификате и професионална интересовања. За питања или праксу доступан сам путем имејла: aleksandar09@gmail.com.\n\nСајт се испоручује као статички сајт преко Cloudflare Pages. Cloudflare као хостинг и CDN провајдер може обрадити технички неопходне податке приступа како би сајт био безбедно и поуздано испоручен. Сајт не користи формуларе, аналитику, рекламне трекере ни екстерне скрипте за праћење. Линкови ка GitHub-у и другим екстерним сервисима отварају се тек након активног клика.\n\nОвај сајт не поставља кукије за рекламе, аналитику или праћење корисника. Изабрани језик може бити локално сачуван у прегледачу како би подешавање остало доступно при следећој посети.' }
};

Object.entries(unifiedLegalCopy).forEach(([code, page]) => {
  legalCopy[code].legal = { title: page.title, sections: [section(page.heading, page.text)] };
  legalCopy[code].intro.legal = page.intro;
});

const applyLegalLanguage = (code) => {
  const copy = legalCopy[code] || legalCopy.de;
  const page = copy[legalPageKind] || copy.impressum;
  const htmlLanguageCodes = { sr: 'sr-Latn', 'sr-cyrl': 'sr-Cyrl' };
  document.documentElement.lang = htmlLanguageCodes[code] || code;
  document.title = `${page.title} | ${copy.brand}`;
  document.querySelectorAll('.brand-latin').forEach((element) => { element.innerHTML = 'Aleksandar <em>Nikolić</em>'; });
  document.querySelectorAll('.brand-cyrillic').forEach((element) => { element.textContent = 'Александар Николић'; });
  const kicker = document.getElementById('legal-kicker');
  const heading = document.getElementById('legal-title');
  const intro = document.getElementById('legal-intro');
  const blocks = document.getElementById('legal-blocks');
  const back = document.getElementById('legal-back');
  if (kicker) kicker.textContent = copy.kicker;
  if (heading) heading.textContent = page.title;
  if (intro) intro.textContent = copy.intro?.[legalPageKind] || '';
  if (blocks) {
    blocks.replaceChildren(...page.sections.map((item) => {
      const block = document.createElement('section');
      block.className = 'legal-block';
      const title = document.createElement('h2');
      title.textContent = item.title;
      const text = document.createElement('p');
      text.textContent = item.text;
      text.className = 'legal-block-text';
      block.append(title, text);
      return block;
    }));
  }
  if (back) back.textContent = `← ${copy.back}`;
  if (languageSelect) languageSelect.value = code;
  localStorage.setItem('portfolio-language', code);
};

if (languageSelect) languageSelect.addEventListener('change', () => applyLegalLanguage(languageSelect.value));
const initialLanguage = legalCopy[languageFromUrl] ? languageFromUrl : localStorage.getItem('portfolio-language') || 'de';
applyLegalLanguage(initialLanguage);
