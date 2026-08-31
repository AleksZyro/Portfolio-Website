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
  de: {
    title: 'Impressum und Rechtliches',
    intro: 'Eine gemeinsame, transparente Erklärung zu Portfolio, Hosting, Datenschutz und Cookies.',
    sections: [
      section('Impressum und Kontakt', 'Diese Website ist eine private Portfolio-Seite von Aleksandar Nikolić. Sie präsentiert Ausbildung, Projekte, Zertifikate und berufliche Interessen. Für Fragen zu Projekten oder einer Praktikumsstelle bin ich per E-Mail unter aleksandar09@gmail.com erreichbar.'),
      section('Hosting und eigene Domain', 'Die Website wird als statische Seite über Cloudflare Pages veröffentlicht. Meine eigene Domain aleksandar-nikolic.ch ist mit diesem Hosting verbunden; die Auslieferung erfolgt verschlüsselt über HTTPS und ein CDN. Beim Aufruf können technisch notwendige Zugriffsdaten durch Cloudflare verarbeitet werden, damit die Seite sicher und zuverlässig ausgeliefert werden kann.'),
      section('Technische Auslieferung', 'Statische Dateien werden zwischengespeichert, damit die Website schnell lädt. HTML, JavaScript, CSS und die täglich aktualisierte GitHub-Contribution-Grafik werden regelmässig neu validiert, während unveränderte Assets länger aus dem Cache geladen werden dürfen. Sicherheits-Header schützen unter anderem vor unerwünschtem Einbetten und vor falsch interpretierten Dateitypen.'),
      section('Datenschutz und lokale Einstellungen', 'Diese Website verwendet keine Formulare, Analytics, Werbetracker oder externen Tracking-Skripte. Externe Links zu GitHub und anderen Diensten öffnen sich erst nach einem aktiven Klick. Es werden keine Tracking-Cookies eingesetzt; lediglich die gewählte Sprache kann lokal im Browser gespeichert werden. Die robots.txt beschreibt öffentliche Bereiche für Suchmaschinen, und die optionale llms.txt fasst öffentliche Inhalte für KI-Systeme zusammen. Beide Dateien sind keine Zugriffssperre.')
    ]
  },
  en: {
    title: 'Imprint and legal information',
    intro: 'One transparent explanation covering the portfolio, hosting, privacy and cookies.',
    sections: [
      section('Imprint and contact', 'This is Aleksandar Nikolić\'s private portfolio website. It presents education, projects, certificates and professional interests. For questions about projects or an internship, I can be reached by email at aleksandar09@gmail.com.'),
      section('Hosting and custom domain', 'The website is published as a static site through Cloudflare Pages. My custom domain, aleksandar-nikolic.ch, is connected to this hosting and delivered over HTTPS through a CDN. When the site is opened, Cloudflare may process technically necessary access data so it can be delivered securely and reliably.'),
      section('Technical delivery', 'Static files are cached to keep the website fast. HTML, JavaScript, CSS and the daily GitHub contribution graphic are regularly revalidated, while unchanged assets may remain cached for longer. Security headers help prevent unwanted embedding and incorrectly interpreted file types.'),
      section('Privacy and local settings', 'This website uses no forms, analytics, advertising trackers or external tracking scripts. Links to GitHub and other external services open only after an active click. No tracking cookies are set; only the selected language may be stored locally in the browser. robots.txt describes public areas for search engines, and the optional llms.txt summarises public content for AI systems. Neither file is an access-control mechanism.')
    ]
  },
  fr: {
    title: 'Mentions légales et informations',
    intro: 'Une explication transparente du portfolio, de l’hébergement, de la confidentialité et des cookies.',
    sections: [
      section('Mentions légales et contact', 'Ce site est le portfolio privé d’Aleksandar Nikolić. Il présente sa formation, ses projets, ses certificats et ses intérêts professionnels. Pour toute question sur les projets ou un stage, je suis joignable par e-mail à aleksandar09@gmail.com.'),
      section('Hébergement et domaine personnel', 'Le site est publié comme site statique via Cloudflare Pages. Mon domaine personnel, aleksandar-nikolic.ch, est relié à cet hébergement et diffusé en HTTPS via un CDN. Lors de la visite, Cloudflare peut traiter des données d’accès techniquement nécessaires afin de diffuser le site de manière sûre et fiable.'),
      section('Diffusion technique', 'Les fichiers statiques sont mis en cache pour accélérer le chargement. Les fichiers HTML, JavaScript, CSS et le graphique GitHub quotidien sont régulièrement revalidés, tandis que les ressources inchangées peuvent rester en cache plus longtemps. Des en-têtes de sécurité contribuent à empêcher l’intégration non souhaitée et les types de fichiers mal interprétés.'),
      section('Confidentialité et réglages locaux', 'Ce site n’utilise ni formulaires, ni analytics, ni traceurs publicitaires, ni scripts externes de suivi. Les liens vers GitHub et d’autres services externes ne s’ouvrent qu’après un clic actif. Aucun cookie de suivi n’est utilisé ; seule la langue choisie peut être enregistrée localement dans le navigateur. robots.txt décrit les zones publiques pour les moteurs de recherche et le fichier optionnel llms.txt résume le contenu public destiné aux systèmes d’IA. Aucun de ces fichiers ne constitue un contrôle d’accès.')
    ]
  },
  sr: {
    title: 'Impresum i pravne informacije',
    intro: 'Jedno jasno objašnjenje o portfoliju, hostingu, privatnosti i kukijima.',
    sections: [
      section('Impresum i kontakt', 'Ovo je privatni portfolio sajt Aleksandra Nikolića. Predstavlja obrazovanje, projekte, sertifikate i profesionalna interesovanja. Za pitanja o projektima ili praksi dostupan sam putem e-maila: aleksandar09@gmail.com.'),
      section('Hosting i sopstveni domen', 'Sajt se objavljuje kao statički sajt preko Cloudflare Pages. Moj sopstveni domen, aleksandar-nikolic.ch, povezan je sa ovim hostingom i isporučuje se preko HTTPS-a i CDN-a. Pri otvaranju sajta Cloudflare može obraditi tehnički neophodne podatke pristupa kako bi sajt bio bezbedno i pouzdano isporučen.'),
      section('Tehnička isporuka', 'Statički fajlovi se keširaju radi bržeg učitavanja. HTML, JavaScript, CSS i dnevna GitHub grafika se redovno ponovo proveravaju, dok neizmenjeni resursi mogu duže ostati u kešu. Sigurnosna zaglavlja pomažu da se spreči neželjeno ugrađivanje stranice i pogrešno tumačenje tipova fajlova.'),
      section('Privatnost i lokalna podešavanja', 'Sajt ne koristi formulare, analitiku, reklamne trekere ni eksterne skripte za praćenje. Linkovi ka GitHubu i drugim eksternim servisima otvaraju se tek nakon aktivnog klika. Ne koriste se kukiji za praćenje; lokalno se može sačuvati samo izabrani jezik. robots.txt opisuje javne oblasti za pretraživače, a opcioni llms.txt sažima javni sadržaj za AI sisteme. Nijedan od ova dva fajla nije kontrola pristupa.')
    ]
  },
  'sr-cyrl': {
    title: 'Импресум и правне информације',
    intro: 'Једно јасно објашњење о портфолију, хостингу, приватности и кукијима.',
    sections: [
      section('Импресум и контакт', 'Ово је приватни портфолио сајт Александра Николића. Представља образовање, пројекте, сертификате и професионална интересовања. За питања о пројектима или пракси доступан сам путем имејла: aleksandar09@gmail.com.'),
      section('Хостинг и сопствени домен', 'Сајт се објављује као статички сајт преко Cloudflare Pages. Мој сопствени домен, aleksandar-nikolic.ch, повезан је са овим хостингом и испоручује се преко HTTPS-а и CDN-а. При отварању сајта Cloudflare може обрадити технички неопходне податке приступа како би сајт био безбедно и поуздано испоручен.'),
      section('Техничка испорука', 'Статичке датотеке се кеширају ради бржег учитавања. HTML, JavaScript, CSS и дневна GitHub графика се редовно поново проверавају, док непромењени ресурси могу дуже остати у кешу. Безбедносна заглавља помажу да се спрече нежељено уграђивање странице и погрешно тумачење типова датотека.'),
      section('Приватност и локална подешавања', 'Сајт не користи формуларе, аналитику, рекламне трекере ни екстерне скрипте за праћење. Линкови ка GitHub-у и другим екстерним сервисима отварају се тек након активног клика. Не користе се колачићи за праћење; локално се може сачувати само изабрани језик. robots.txt описује јавне области за претраживаче, а опциони llms.txt сажима јавни садржај за AI системе. Ниједан од ова два фајла није контрола приступа.')
    ]
  }
};

Object.entries(unifiedLegalCopy).forEach(([code, page]) => {
  legalCopy[code].legal = { title: page.title, sections: page.sections };
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
