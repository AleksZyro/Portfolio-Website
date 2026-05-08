const portfolioData = {
  codingSinceYear: 2025,
  projects: [
    {
      title: 'SortLab',
      cardDescription: 'Interaktiver Visualizer für Sortieralgorithmen mit Live-Steuerung, Balkenansicht, Statistik und Lernbereich.',
      detailDescription: 'SortLab\n\nSortLab ist ein interaktiver Visualizer für Sortieralgorithmen. Nutzerinnen und Nutzer sehen Schritt für Schritt, wie ein Array sortiert wird, können die Geschwindigkeit live anpassen und verschiedene Verfahren direkt miteinander vergleichen.\n\nIm Projekt enthalten sind aktuell fünf Algorithmen: Bubble Sort, Selection Sort, Insertion Sort, Quick Sort und Heap Sort. Zusätzlich zeigt das Dashboard Vergleiche, Swaps, Schritte und die Laufzeit in Millisekunden an.\n\nDas Ziel des Projekts war es, Informatik, Visualisierung und verständliche Lernhilfe in einer modernen Oberfläche zusammenzubringen.',
      meta: ['Status: Fertig', 'Tech: React, Vite, JavaScript, CSS', 'Fokus: Algorithmen und Visualisierung'],
      previewImage: 'assets/project-previews/sortlab-preview.svg',
      previewLabel: 'Projektvorschau',
      previewBadge: ''
    },
    {
      title: 'Heimatschutz Aargau - interne Webanwendung',
      cardDescription: 'Interne Webanwendung zur Sammlung, Darstellung und Pruefung von Baugesuchen mit AGIS-Schutzdaten.',
      detailDescription: 'Heimatschutz Aargau - interne Webanwendung\n\nGemeinsam mit zwei Mitschülern entwickle ich aktuell eine interne Webanwendung für den Heimatschutz Aargau. Die Anwendung soll Baugesuche aus offiziellen Gemeindequellen sammeln, übersichtlich darstellen und mit amtlichen AGIS-Schutzdaten abgleichen. Ziel ist es, relevante Fälle schneller zu erkennen und die interne Team-Bearbeitung mit Karte, Notizen und Statusübersicht zu unterstützen.\n\nDas Projekt befindet sich noch in Entwicklung. Da weitere Teams und externe Stellen beteiligt sind, kann die Anwendung momentan noch nicht öffentlich gezeigt oder verlinkt werden.',
      meta: ['Status: In Entwicklung', 'Sichtbarkeit: Nicht öffentlich', 'Team: 3 Schüler']
    },
    {
      title: 'UMR - Useless Mobs Reworked',
      cardDescription: 'Minecraft-Mod zur Überarbeitung wenig relevanter Mobs mit neuen Funktionen und stärkerem Gameplay-Einfluss.',
      detailDescription: 'UMR - Useless Mobs Reworked\n\nGemeinsam mit einem Mitschüler arbeite ich aktuell an UMR, einer Minecraft-Mod, die bisher wenig relevante oder selten genutzte Mobs überarbeitet. Ziel ist es, diesen Mobs neue Funktionen zu geben, sie interessanter zu machen und ihren Einfluss auf das Gameplay zu erhöhen.\n\nNach der Fertigstellung soll die Mod auf CurseForge veröffentlicht werden.',
      meta: ['Status: In Entwicklung', 'Kategorie: Minecraft Mod', 'Geplante Plattform: CurseForge']
    }
  ],
  certificates: [
    {
      title: 'Ethical Hacker',
      cardDescription: 'Zertifikat im PDF-Format mit direkter Vorschau und Download.',
      detailDescription: 'Dieses Zertifikat kannst du direkt im Portfolio ansehen oder herunterladen.',
      meta: ['Format: PDF', 'Nachweis: Zertifikat', 'Download: Verfuegbar'],
      file: 'assets/certificates/ethical-hacker.pdf',
      previewImage: 'assets/certificate-previews/ethical-hacker.png',
      previewLabel: 'Zertifikat',
      previewBadge: 'PDF'
    },
    {
      title: 'Introduction to Cybersecurity',
      cardDescription: 'Zertifikat im PDF-Format mit direkter Vorschau und Download.',
      detailDescription: 'Dieses Zertifikat kannst du direkt im Portfolio ansehen oder herunterladen.',
      meta: ['Format: PDF', 'Nachweis: Zertifikat', 'Download: Verfuegbar'],
      file: 'assets/certificates/introduction-to-cybersecurity.pdf',
      previewImage: 'assets/certificate-previews/introduction-to-cybersecurity.png',
      previewLabel: 'Zertifikat',
      previewBadge: 'PDF'
    },
    {
      title: 'BBB Hackathon',
      cardDescription: 'Zertifikat im PDF-Format mit direkter Vorschau und Download.',
      detailDescription: 'Dieses Zertifikat kannst du direkt im Portfolio ansehen oder herunterladen.',
      meta: ['Format: PDF', 'Nachweis: Zertifikat', 'Download: Verfuegbar'],
      file: 'assets/certificates/bbb-hackathon.pdf',
      previewImage: 'assets/certificate-previews/bbb-hackathon-preview.svg',
      previewLabel: 'Zertifikat',
      previewBadge: 'PDF'
    }
  ],
  technologies: [
    { label: 'Python', iconPng: 'https://img.icons8.com/color/48/python--v1.png', fallback: 'PY', glow: 'rgba(80, 164, 255, 0.30)' },
    { label: 'C#', iconPng: 'https://img.icons8.com/color/48/c-sharp-logo.png', fallback: 'C#', glow: 'rgba(196, 96, 255, 0.30)' },
    { label: 'JavaScript', iconPng: 'https://img.icons8.com/color/48/javascript--v1.png', fallback: 'JS', glow: 'rgba(255, 218, 67, 0.30)' },
    { label: 'Java', iconPng: 'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png', fallback: 'JV', glow: 'rgba(93, 180, 255, 0.30)' },
    { label: 'Git', iconPng: 'https://img.icons8.com/color/48/git.png', fallback: 'GT', glow: 'rgba(255, 118, 84, 0.30)' },
    { label: 'Node.js', iconPng: 'https://img.icons8.com/color/48/nodejs.png', fallback: 'ND', glow: 'rgba(112, 210, 121, 0.30)' },
    { label: 'Docker', iconPng: 'https://img.icons8.com/color/48/docker.png', fallback: 'DK', glow: 'rgba(83, 167, 255, 0.30)' },
    { label: 'SQL', iconPng: 'assets/icons/sql.svg', fallback: 'SQL', glow: 'rgba(84, 139, 255, 0.30)' },
    { label: 'NoSQL', iconPng: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', fallback: 'NQ', glow: 'rgba(111, 201, 110, 0.30)' },
    { label: '.NET', iconPng: 'https://img.icons8.com/color/48/net-framework.png', fallback: '.N', glow: 'rgba(160, 104, 255, 0.30)' },
    { label: 'HTML', iconPng: 'https://img.icons8.com/color/48/html-5--v1.png', fallback: 'HT', glow: 'rgba(255, 122, 84, 0.30)' },
    { label: 'CSS', iconPng: 'https://img.icons8.com/color/48/css3.png', fallback: 'CS', glow: 'rgba(80, 164, 255, 0.30)' },
    { label: 'AWS Cloud', iconPng: 'https://img.icons8.com/color/48/amazon-web-services.png', fallback: 'AW', glow: 'rgba(255, 183, 90, 0.30)' },
    { label: 'PowerShell Script', iconPng: 'https://img.icons8.com/color/48/powershell.png', fallback: 'PS', glow: 'rgba(76, 174, 255, 0.30)' },
    { label: 'Power Automate', iconPng: 'assets/icons/power-automate.svg', fallback: 'PA', glow: 'rgba(98, 159, 255, 0.30)' }
  ]
};

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');
const sections = [...document.querySelectorAll('main section[id]')];
const revealItems = document.querySelectorAll('.reveal');
const tabs = document.querySelectorAll('.tab');
const tabPanels = { projects: document.getElementById('panel-projects'), certificates: document.getElementById('panel-certificates') };
const projectsGrid = document.getElementById('projects-grid');
const certificatesGrid = document.getElementById('certificates-grid');
const techGrid = document.getElementById('tech-grid');
const focusTabs = document.querySelectorAll('.focus-tab');
const focusTitle = document.getElementById('focus-title');
const focusText = document.getElementById('focus-text');
const focusList = document.getElementById('focus-list');
const focusStatus = document.getElementById('focus-status');
const languageButtons = document.querySelectorAll('.lang-btn');
const modal = document.getElementById('detail-modal');
const modalCard = document.getElementById('modal-card');
const modalClose = document.getElementById('modal-close');
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

const yearTarget = document.getElementById('year');
const projectsCountEl = document.getElementById('projects-count');
const certificatesCountEl = document.getElementById('certificates-count');
const yearsCountEl = document.getElementById('years-count');

const i18nElements = document.querySelectorAll('[data-i18n]');
const defaultTexts = new Map();
i18nElements.forEach((element) => {
  defaultTexts.set(element, element.textContent);
});

let activeDictionary = {};
let currentFocusKey = 'web';
const embeddedDictionaries = {
  de: {
    skip: { content: 'Zum Inhalt springen' },
    nav: { home: 'Start', about: 'Über mich', career: 'Werdegang', tech: 'Tech-Stack', portfolio: 'Portfolio', contact: 'Kontakt' },
    hero: {
      kicker: 'Portfolio Applikationsentwicklung',
      description: 'Ich entwickle saubere, wartbare Softwarelösungen für Web, APIs, Daten und Automatisierung. Fokus auf robuste Architektur, Teamarbeit und klare User-Flows.',
      ctaPortfolio: 'Portfolio ansehen',
      ctaContact: 'Kontakt',
      ctaEmail: 'E-Mail'
    },
    focus: {
      title: 'Aktiver Fokus',
      subline: 'Klicke auf einen Bereich, um den aktuellen Entwicklungsfokus zu sehen.',
      web: {
        tab: 'Web',
        title: 'Web',
        text: 'Responsive Oberflächen mit klarer UX und semantischem Markup.',
        points: ['HTML/CSS Architektur', 'Interaktive JavaScript-Flows', 'Mobile-first Umsetzung'],
        status: 'Aktiv: UI/UX'
      },
      backend: {
        tab: 'Backend',
        title: 'Backend',
        text: 'API-Design mit wartbarer Struktur und nachvollziehbarer Datenlogik.',
        points: ['C# und .NET APIs', 'SQL/NoSQL Datenmodellierung', 'Saubere Layer-Aufteilung'],
        status: 'Aktiv: API-Design'
      },
      cloud: {
        tab: 'Cloud',
        title: 'Cloud',
        text: 'Deployment und Betrieb von Services in stabilen Umgebungen.',
        points: ['AWS Grundlagen', 'Container mit Docker', 'Konfigurierbare Deployments'],
        status: 'Aktiv: Deployment'
      },
      automation: {
        tab: 'Automatisierung',
        title: 'Automatisierung',
        text: 'Wiederkehrende Aufgaben effizient automatisieren und überwachen.',
        points: ['PowerShell Skripte', 'Power Automate Flows', 'Logging und Trigger'],
        status: 'Aktiv: Workflows'
      }
    },
    about: {
      kicker: 'Über mich',
      title: 'Persönliches Profil',
      cardTitle: 'Hallo, ich bin Aleksandar',
      description: 'Ich besuche die IMS mit Schwerpunkt Applikationsentwicklung und arbeite gerne an Projekten mit strukturierter Architektur, nachvollziehbaren APIs und sauberem Frontend. Mir sind Teamfähigkeit, Verantwortung und stetige Verbesserung wichtig.'
    },
    career: {
      kicker: 'Werdegang',
      title: 'Weg und Lernumfeld',
      subline: 'Mein aktueller Weg verbindet Schule, Informatik und praktische Erfahrungen in der Applikationsentwicklung.',
      items: {
        hackathon: {
          type: 'Event',
          title: 'Baden hackt',
          period: '2026',
          description: 'Teilnahme am Hackathon "Baden hackt" mit Fokus auf Teamarbeit, Ideenfindung und schneller technischer Umsetzung.'
        },
        ims: {
          type: 'Ausbildung',
          title: 'Alte Kantonsschule Aarau & Berufsbildung Baden',
          period: '2024 - heute',
          description: 'Informatikmittelschule (IMS), Fachrichtung Applikationsentwicklung. Aktuell vertiefe ich schulische Grundlagen und verbinde sie mit praktischer Softwareentwicklung.'
        },
        school: {
          type: 'Schule',
          title: 'Bezirksschule Buchs AG',
          period: '2021 - 2024',
          description: 'Hier habe ich meine schulische Grundlage aufgebaut und mein Interesse an Informatik, Technik und strukturiertem Lernen weiterentwickelt.'
        }
      }
    },
    stats: { projects: 'Projekte', certificates: 'Zertifikate', years: 'Jahre Coding' },
    tech: {
      kicker: 'Tech-Stack',
      title: 'Technologien, die ich bereits genutzt habe',
      subline: 'Fahre über ein Logo, um den Namen zu sehen.'
    },
    portfolio: {
      kicker: 'Portfolio',
      title: 'Projekte und Zertifikate',
      subline: 'Drei Projekte und drei Zertifikate sind bereits hinterlegt.',
      tabs: { projects: 'Projekte', certificates: 'Zertifikate' },
      detailsButton: 'Details anzeigen',
      empty: {
        projects: { title: 'Projekte: Noch keine Inhalte' },
        certificates: { title: 'Zertifikate: Noch keine Inhalte' },
        description: 'Die Daten werden morgen mit echten Screenshots und Beschreibungen befuellt.',
        previewButton: 'Detailansicht-Vorschau öffnen',
        modalDescription: 'Scaffold fuer Zoom/Detailansicht ist aktiv und bereit fuer reale Daten.',
        modalMeta: ['Titel', 'Kurzbeschreibung', 'Bild/Screenshot', 'Technologien oder Nachweis', 'Externer Link (optional)']
      }
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Lass uns zusammenarbeiten',
      description: 'Für Praktikum, Zusammenarbeit oder Projektideen freue ich mich auf deine Nachricht.',
      phoneLabel: 'Telefon',
      mailLabel: 'E-Mail',
      schoolMailLabel: 'Schul-Mail'
    },
    modal: { close: 'Schliessen', title: 'Detailansicht', projectKicker: 'Projektstatus', certificateKicker: 'Zertifikat' },
    portfolioDownloadButton: 'Download PDF',
    footer: { rights: 'Alle Rechte vorbehalten.' }
  },
  en: {
    skip: { content: 'Skip to content' },
    nav: { home: 'Home', about: 'About', career: 'Journey', tech: 'Tech Stack', portfolio: 'Portfolio', contact: 'Contact' },
    hero: {
      kicker: 'Application Development Portfolio',
      description: 'I build clean, maintainable software solutions for web, APIs, data, and automation. My focus is robust architecture, teamwork, and clear user flows.',
      ctaPortfolio: 'View Portfolio',
      ctaContact: 'Contact',
      ctaEmail: 'Email'
    },
    focus: {
      title: 'Current Focus',
      subline: 'Click a domain to see my current development focus.',
      web: {
        tab: 'Web',
        title: 'Web',
        text: 'Responsive interfaces with clear UX and semantic markup.',
        points: ['HTML/CSS architecture', 'Interactive JavaScript flows', 'Mobile-first delivery'],
        status: 'Active: UI/UX'
      },
      backend: {
        tab: 'Backend',
        title: 'Backend',
        text: 'API design with maintainable structure and traceable data logic.',
        points: ['C# and .NET APIs', 'SQL/NoSQL data modeling', 'Clean layer separation'],
        status: 'Active: API design'
      },
      cloud: {
        tab: 'Cloud',
        title: 'Cloud',
        text: 'Deploying and running services in stable environments.',
        points: ['AWS fundamentals', 'Containerization with Docker', 'Configurable deployments'],
        status: 'Active: Deployment'
      },
      automation: {
        tab: 'Automation',
        title: 'Automation',
        text: 'Automating recurring tasks efficiently and reliably.',
        points: ['PowerShell scripts', 'Power Automate flows', 'Logging and triggers'],
        status: 'Active: Workflows'
      }
    },
    about: {
      kicker: 'About',
      title: 'Personal Profile',
      cardTitle: 'Hi, I am Aleksandar',
      description: 'I attend IMS with a focus on application development and enjoy working on projects with structured architecture, clear APIs, and clean front-end implementation. Teamwork, responsibility, and continuous improvement are important to me.'
    },
    career: {
      kicker: 'Journey',
      title: 'Path and Learning Environment',
      subline: 'My current path combines school, computer science, and practical experience in application development.',
      items: {
        hackathon: {
          type: 'Event',
          title: 'Baden hackt',
          period: '2026',
          description: 'Participation in the "Baden hackt" hackathon with a focus on teamwork, ideation, and fast technical implementation.'
        },
        ims: {
          type: 'Education',
          title: 'Alte Kantonsschule Aarau & Berufsbildung Baden',
          period: '2024 - present',
          description: 'Computer Science Middle School (IMS), specialization in application development. I am currently deepening my academic foundations and connecting them with practical software development.'
        },
        school: {
          type: 'School',
          title: 'Bezirksschule Buchs AG',
          period: '2021 - 2024',
          description: 'This is where I built my academic foundation and further developed my interest in computer science, technology, and structured learning.'
        }
      }
    },
    stats: { projects: 'Projects', certificates: 'Certificates', years: 'Years coding' },
    tech: {
      kicker: 'Tech Stack',
      title: 'Technologies I have already used',
      subline: 'Hover over a logo to see its name.'
    },
    portfolio: {
      kicker: 'Portfolio',
      title: 'Projects and Certificates',
      subline: 'Three projects and three certificates are already listed.',
      tabs: { projects: 'Projects', certificates: 'Certificates' },
      detailsButton: 'Show details',
      empty: {
        projects: { title: 'Projects: No content yet' },
        certificates: { title: 'Certificates: No content yet' },
        description: 'Data with real screenshots and descriptions will be added tomorrow.',
        previewButton: 'Open detail preview',
        modalDescription: 'The detail/zoom scaffold is active and ready for real data.',
        modalMeta: ['Title', 'Short description', 'Image/screenshot', 'Technologies or proof', 'External link (optional)']
      }
    },
    contact: {
      kicker: 'Contact',
      title: 'Let us work together',
      description: 'I look forward to hearing from you for internships, collaboration, or project ideas.',
      phoneLabel: 'Phone',
      mailLabel: 'Email',
      schoolMailLabel: 'School email'
    },
    modal: { close: 'Close', title: 'Detail view', projectKicker: 'Project status', certificateKicker: 'Certificate' },
    portfolioDownloadButton: 'Download PDF',
    footer: { rights: 'All rights reserved.' }
  },
  fr: {
    skip: { content: 'Aller au contenu' },
    nav: { home: 'Accueil', about: 'A propos', career: 'Parcours', tech: 'Stack tech', portfolio: 'Portfolio', contact: 'Contact' },
    hero: {
      kicker: 'Portfolio developpement applicatif',
      description: 'Je cree des solutions logicielles propres et maintenables pour le web, les API, les donnees et l\'automatisation. Mon focus: architecture robuste, travail d\'equipe et parcours utilisateur clairs.',
      ctaPortfolio: 'Voir le portfolio',
      ctaContact: 'Contact',
      ctaEmail: 'E-mail'
    },
    focus: {
      title: 'Focus actuel',
      subline: 'Clique sur un domaine pour voir mon focus de developpement actuel.',
      web: {
        tab: 'Web',
        title: 'Web',
        text: 'Interfaces responsives avec UX claire et balisage semantique.',
        points: ['Architecture HTML/CSS', 'Flux JavaScript interactifs', 'Approche mobile-first'],
        status: 'Actif: UI/UX'
      },
      backend: {
        tab: 'Backend',
        title: 'Backend',
        text: 'Conception d\'API avec structure maintenable et logique de donnees tracable.',
        points: ['API C# et .NET', 'Modelisation SQL/NoSQL', 'Separation claire des couches'],
        status: 'Actif: Conception API'
      },
      cloud: {
        tab: 'Cloud',
        title: 'Cloud',
        text: 'Deploiement et exploitation de services dans des environnements stables.',
        points: ['Bases AWS', 'Conteneurisation avec Docker', 'Deploiements configurables'],
        status: 'Actif: Deploiement'
      },
      automation: {
        tab: 'Automatisation',
        title: 'Automatisation',
        text: 'Automatiser efficacement les taches recurrentes.',
        points: ['Scripts PowerShell', 'Flux Power Automate', 'Journalisation et declencheurs'],
        status: 'Actif: Workflows'
      }
    },
    about: {
      kicker: 'A propos',
      title: 'Profil personnel',
      cardTitle: 'Salut, je suis Aleksandar',
      description: 'Je frequente l\'IMS avec une specialisation en developpement applicatif et j\'aime travailler sur des projets avec une architecture structuree, des API claires et un front-end propre. L\'esprit d\'equipe, la responsabilite et l\'amelioration continue sont essentiels pour moi.'
    },
    career: {
      kicker: 'Parcours',
      title: 'Parcours et cadre d apprentissage',
      subline: 'Mon parcours actuel relie l ecole, l informatique et l experience pratique en developpement applicatif.',
      items: {
        hackathon: {
          type: 'Evenement',
          title: 'Baden hackt',
          period: '2026',
          description: 'Participation au hackathon "Baden hackt" avec un accent sur le travail d equipe, l ideation et la mise en oeuvre technique rapide.'
        },
        ims: {
          type: 'Formation',
          title: 'Alte Kantonsschule Aarau & Berufsbildung Baden',
          period: '2024 - aujourd hui',
          description: 'Ecole moyenne d informatique (IMS), orientation developpement applicatif. J approfondis actuellement mes bases scolaires et les relie au developpement logiciel pratique.'
        },
        school: {
          type: 'Ecole',
          title: 'Bezirksschule Buchs AG',
          period: '2021 - 2024',
          description: 'C est la que j ai construit ma base scolaire et developpe davantage mon interet pour l informatique, la technique et l apprentissage structure.'
        }
      }
    },
    stats: { projects: 'Projets', certificates: 'Certificats', years: 'Annees de code' },
    tech: {
      kicker: 'Stack tech',
      title: 'Technologies deja utilisees',
      subline: 'Survole un logo pour voir son nom.'
    },
    portfolio: {
      kicker: 'Portfolio',
      title: 'Projets et certificats',
      subline: 'Trois projets et trois certificats sont deja disponibles.',
      tabs: { projects: 'Projets', certificates: 'Certificats' },
      detailsButton: 'Afficher les details',
      empty: {
        projects: { title: 'Projets: Pas encore de contenu' },
        certificates: { title: 'Certificats: Pas encore de contenu' },
        description: 'Les donnees avec vraies captures et descriptions seront ajoutees demain.',
        previewButton: 'Ouvrir l\'aperçu detail',
        modalDescription: 'Le scaffold detail/zoom est actif et pret pour des donnees reelles.',
        modalMeta: ['Titre', 'Description courte', 'Image/capture', 'Technologies ou preuve', 'Lien externe (optionnel)']
      }
    },
    contact: {
      kicker: 'Contact',
      title: 'Travaillons ensemble',
      description: 'Je me rejouis de votre message pour un stage, une collaboration ou des idees de projet.',
      phoneLabel: 'Telephone',
      mailLabel: 'E-mail',
      schoolMailLabel: 'E-mail ecole'
    },
    modal: { close: 'Fermer', title: 'Vue detail', projectKicker: 'Statut du projet', certificateKicker: 'Certificat' },
    portfolioDownloadButton: 'Telecharger le PDF',
    footer: { rights: 'Tous droits reserves.' }
  },
  sr: {
    skip: { content: 'Preskoci na sadrzaj' },
    nav: { home: 'Pocetna', about: 'O meni', career: 'Put', tech: 'Tech stack', portfolio: 'Portfolio', contact: 'Kontakt' },
    hero: {
      kicker: 'Portfolio aplikativnog razvoja',
      description: 'Pravim cista i odrziva softverska resenja za web, API-je, podatke i automatizaciju. Fokus mi je na stabilnoj arhitekturi, timskom radu i jasnom korisnickom toku.',
      ctaPortfolio: 'Pogledaj portfolio',
      ctaContact: 'Kontakt',
      ctaEmail: 'E-mail'
    },
    focus: {
      title: 'Trenutni fokus',
      subline: 'Klikni na oblast da vidis moj trenutni fokus razvoja.',
      web: {
        tab: 'Web',
        title: 'Web',
        text: 'Responzivni interfejsi sa jasnim UX-om i semantickim markup-om.',
        points: ['HTML/CSS arhitektura', 'Interaktivni JavaScript tokovi', 'Mobile-first pristup'],
        status: 'Aktivno: UI/UX'
      },
      backend: {
        tab: 'Backend',
        title: 'Backend',
        text: 'Dizajn API-ja sa odrzivom strukturom i jasnom logikom podataka.',
        points: ['C# i .NET API-ji', 'SQL/NoSQL modelovanje', 'Cisto razdvajanje slojeva'],
        status: 'Aktivno: API dizajn'
      },
      cloud: {
        tab: 'Cloud',
        title: 'Cloud',
        text: 'Deploy i rad servisa u stabilnim okruzenjima.',
        points: ['AWS osnove', 'Kontejnerizacija uz Docker', 'Podesivi deployment-i'],
        status: 'Aktivno: Deployment'
      },
      automation: {
        tab: 'Automatizacija',
        title: 'Automatizacija',
        text: 'Efikasna automatizacija ponavljajucih zadataka.',
        points: ['PowerShell skripte', 'Power Automate flow-ovi', 'Logovanje i trigger-i'],
        status: 'Aktivno: Workflow'
      }
    },
    about: {
      kicker: 'O meni',
      title: 'Licni profil',
      cardTitle: 'Zdravo, ja sam Aleksandar',
      description: 'Pohadjam IMS sa fokusom na razvoj aplikacija i volim projekte sa struktuiranom arhitekturom, jasnim API-jima i cistim frontend-om. Timski rad, odgovornost i stalno usavrsavanje su mi veoma vazni.'
    },
    career: {
      kicker: 'Put',
      title: 'Put i okruzenje za ucenje',
      subline: 'Moj trenutni put povezuje skolu, informatiku i prakticno iskustvo u razvoju aplikacija.',
      items: {
        hackathon: {
          type: 'Dogadjaj',
          title: 'Baden hackt',
          period: '2026',
          description: 'Ucesce na hakatonu "Baden hackt" sa fokusom na timski rad, razvoj ideja i brzu tehnicku realizaciju.'
        },
        ims: {
          type: 'Obrazovanje',
          title: 'Alte Kantonsschule Aarau & Berufsbildung Baden',
          period: '2024 - danas',
          description: 'Informaticka srednja skola (IMS), smjer razvoj aplikacija. Trenutno produbljujem skolske osnove i povezujem ih sa prakticnim razvojem softvera.'
        },
        school: {
          type: 'Skola',
          title: 'Bezirksschule Buchs AG',
          period: '2021 - 2024',
          description: 'Tu sam izgradio svoju skolsku osnovu i dodatno razvio interesovanje za informatiku, tehniku i strukturisano ucenje.'
        }
      }
    },
    stats: { projects: 'Projekti', certificates: 'Sertifikati', years: 'Godine kodiranja' },
    tech: {
      kicker: 'Tech stack',
      title: 'Tehnologije koje sam vec koristio',
      subline: 'Predji preko logotipa da vidis naziv.'
    },
    portfolio: {
      kicker: 'Portfolio',
      title: 'Projekti i sertifikati',
      subline: 'Tri projekta i tri sertifikata su vec dodati.',
      tabs: { projects: 'Projekti', certificates: 'Sertifikati' },
      detailsButton: 'Prikazi detalje',
      empty: {
        projects: { title: 'Projekti: Jos nema sadrzaja' },
        certificates: { title: 'Sertifikati: Jos nema sadrzaja' },
        description: 'Podaci sa pravim screenshot-ovima i opisima bice dodati sutra.',
        previewButton: 'Otvori pregled detalja',
        modalDescription: 'Scaffold za detalje/zoom je aktivan i spreman za stvarne podatke.',
        modalMeta: ['Naslov', 'Kratak opis', 'Slika/screenshot', 'Tehnologije ili dokaz', 'Eksterni link (opciono)']
      }
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Hajde da saradjujemo',
      description: 'Radujem se poruci za praksu, saradnju ili ideje za projekat.',
      phoneLabel: 'Telefon',
      mailLabel: 'E-mail',
      schoolMailLabel: 'Skolski e-mail'
    },
    modal: { close: 'Zatvori', title: 'Detaljni prikaz', projectKicker: 'Status projekta', certificateKicker: 'Sertifikat' },
    portfolioDownloadButton: 'Preuzmi PDF',
    footer: { rights: 'Sva prava zadrzana.' }
  }
};

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

const applyStaticTranslations = () => {
  i18nElements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const fallback = defaultTexts.get(element) || '';
    element.textContent = t(key, fallback);
  });
};

const setMenuState = (isOpen) => {
  if (!navToggle || !navList) return;
  navList.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

const scrollToSection = (targetId) => {
  const section = document.querySelector(targetId);
  if (!section) return;

  const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
  const sectionNudges = {
    '#tech-stack': 82,
    '#portfolio': 38
  };
  const top = Math.max(section.offsetTop - headerHeight + (sectionNudges[targetId] || 8), 0);

  window.scrollTo({ top, behavior: 'smooth' });
  if (window.location.hash !== targetId) {
    window.history.replaceState(null, '', targetId);
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

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = link.getAttribute('href');
      if (target && target.startsWith('#')) {
        event.preventDefault();
        scrollToSection(target);
        setActiveNav(target.slice(1));
      }
      setMenuState(false);
    });
  });
}

const updateNavForScroll = () => {
  const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (nearBottom) {
    setActiveNav('contact');
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
};

window.addEventListener('scroll', updateNavForScroll);
window.addEventListener('resize', updateNavForScroll);
window.addEventListener('resize', () => {
  renderTechStack();
});

const renderStats = () => {
  const currentYear = new Date().getFullYear();
  const yearsCoding = Math.max(1, currentYear - portfolioData.codingSinceYear + 1);

  projectsCountEl.textContent = String(portfolioData.projects.length);
  certificatesCountEl.textContent = String(portfolioData.certificates.length);
  yearsCountEl.textContent = String(yearsCoding);
};

const createCard = (item) => {
  const card = document.createElement('article');
  card.className = 'item-card';

  const preview = document.createElement('div');
  preview.className = 'project-preview';
  if (item.previewImage) {
    preview.classList.add('has-image');
    preview.style.setProperty('--preview-image', `url("${item.previewImage}")`);
  }

  const previewLabel = document.createElement('span');
  previewLabel.className = 'project-preview-label';
  previewLabel.textContent = item.previewLabel || 'Preview folgt';

  const previewTitle = document.createElement('span');
  previewTitle.className = 'project-preview-title';
  previewTitle.textContent = item.title;

  const statusChip = document.createElement('span');
  statusChip.className = 'project-status-chip';
  statusChip.hidden = !item.previewBadge;
  statusChip.textContent = item.previewBadge || '';

  preview.append(previewLabel, previewTitle, statusChip);

  const title = document.createElement('h3');
  title.textContent = item.title;

  const description = document.createElement('p');
  description.textContent = item.cardDescription || item.description || '';

  const detailButton = document.createElement('button');
  detailButton.type = 'button';
  detailButton.textContent = t('portfolio.detailsButton', 'Details anzeigen');
  detailButton.dataset.title = item.title;
  detailButton.dataset.description = item.detailDescription || item.description || '';
  detailButton.dataset.meta = JSON.stringify(item.meta || []);
  if (item.file) {
    detailButton.dataset.file = item.file;
  }
  if (item.previewLabel) {
    detailButton.dataset.previewLabel = item.previewLabel;
  }
  if (item.previewBadge) {
    detailButton.dataset.previewBadge = item.previewBadge;
  }
  if (item.previewImage) {
    detailButton.dataset.previewImage = item.previewImage;
  }

  card.append(preview, title, description, detailButton);
  return card;
};

const createEmptyState = (typeKey) => {
  const wrapper = document.createElement('article');
  wrapper.className = 'empty-state';

  const title = document.createElement('h3');
  title.textContent = t(`portfolio.empty.${typeKey}.title`, 'Noch keine Inhalte');

  const text = document.createElement('p');
  text.textContent = t('portfolio.empty.description', 'Die Daten werden morgen mit echten Screenshots und Beschreibungen befuellt.');

  const previewButton = document.createElement('button');
  previewButton.type = 'button';
  previewButton.className = 'empty-action';
  previewButton.textContent = t('portfolio.empty.previewButton', 'Detailansicht-Vorschau oeffnen');
  previewButton.dataset.title = t('modal.title', 'Detailansicht');
  previewButton.dataset.description = t('portfolio.empty.modalDescription', 'Scaffold fuer Zoom/Detailansicht ist aktiv und bereit fuer reale Daten.');
  previewButton.dataset.meta = JSON.stringify(tArray('portfolio.empty.modalMeta', [
    'Titel',
    'Kurzbeschreibung',
    'Bild/Screenshot',
    'Technologien oder Nachweis',
    'Externer Link (optional)'
  ]));

  wrapper.append(title, text, previewButton);
  return wrapper;
};

const renderCollection = (items, container, typeKey) => {
  container.innerHTML = '';

  if (!Array.isArray(items) || items.length === 0) {
    container.append(createEmptyState(typeKey));
    return;
  }

  items.forEach((item) => {
    container.append(createCard(item));
  });
};

const renderTechStack = () => {
  techGrid.innerHTML = '';

  portfolioData.technologies.forEach((tech) => {
    const tile = document.createElement('article');
    tile.className = 'tech-tile';
    tile.style.setProperty('--tile-glow', tech.glow || 'rgba(105, 145, 255, 0.30)');
    tile.setAttribute('aria-label', tech.label);

    const icon = document.createElement('span');
    icon.className = 'tech-icon';

    const image = document.createElement('img');
    image.className = 'tech-icon-image';
    image.src = tech.iconPng;
    image.alt = `${tech.label} Logo`;
    image.loading = 'lazy';
    image.decoding = 'async';

    const fallback = document.createElement('span');
    fallback.className = 'tech-icon-fallback';
    fallback.textContent = tech.fallback || tech.label.slice(0, 2).toUpperCase();
    fallback.hidden = true;

    image.addEventListener('error', () => {
      image.hidden = true;
      fallback.hidden = false;
    });

    icon.append(image, fallback);

    const tooltip = document.createElement('span');
    tooltip.className = 'tech-tooltip';
    tooltip.textContent = tech.label;

    tile.append(icon, tooltip);
    techGrid.append(tile);
  });

  const tiles = [...techGrid.querySelectorAll('.tech-tile')];
  const rows = new Map();
  let rowIndexCounter = 0;

  tiles.forEach((tile) => {
    const rowKey = Math.round(tile.getBoundingClientRect().top);
    if (!rows.has(rowKey)) {
      rows.set(rowKey, rowIndexCounter);
      rowIndexCounter += 1;
    }
    const rowIndex = rows.get(rowKey);
    tile.classList.toggle('label-top', rowIndex % 2 === 0);
    tile.classList.toggle('label-bottom', rowIndex % 2 !== 0);
  });
};

const focusDefinitions = () => ({
  web: {
    title: t('focus.web.title', 'Web'),
    text: t('focus.web.text', 'Responsive Oberflaechen mit klarer UX und semantischem Markup.'),
    points: tArray('focus.web.points', ['HTML/CSS Architektur', 'Interaktive JavaScript-Flows', 'Mobile-first Umsetzung']),
    status: t('focus.web.status', 'Aktiv: UI/UX')
  },
  backend: {
    title: t('focus.backend.title', 'Backend'),
    text: t('focus.backend.text', 'API-Design mit wartbarer Struktur und nachvollziehbarer Datenlogik.'),
    points: tArray('focus.backend.points', ['C# und .NET APIs', 'SQL/NoSQL Datenmodellierung', 'Saubere Layer-Aufteilung']),
    status: t('focus.backend.status', 'Aktiv: API-Design')
  },
  cloud: {
    title: t('focus.cloud.title', 'Cloud'),
    text: t('focus.cloud.text', 'Deployment und Betrieb von Services in stabilen Umgebungen.'),
    points: tArray('focus.cloud.points', ['AWS Grundlagen', 'Container mit Docker', 'Konfigurierbare Deployments']),
    status: t('focus.cloud.status', 'Aktiv: Deployment')
  },
  automation: {
    title: t('focus.automation.title', 'Automatisierung'),
    text: t('focus.automation.text', 'Wiederkehrende Aufgaben effizient automatisieren und ueberwachen.'),
    points: tArray('focus.automation.points', ['PowerShell Skripte', 'Power Automate Flows', 'Logging und Trigger']),
    status: t('focus.automation.status', 'Aktiv: Workflows')
  }
});

const activateFocus = (focusKey) => {
  const allFocus = focusDefinitions();
  const focus = allFocus[focusKey];
  if (!focus) return;

  currentFocusKey = focusKey;

  focusTabs.forEach((button) => {
    const active = button.dataset.focus === focusKey;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });

  focusTitle.textContent = focus.title;
  focusText.textContent = focus.text;
  focusStatus.textContent = focus.status;
  focusList.innerHTML = '';

  focus.points.forEach((point) => {
    const item = document.createElement('li');
    item.textContent = point;
    focusList.append(item);
  });
};

focusTabs.forEach((button) => {
  button.addEventListener('click', () => {
    activateFocus(button.dataset.focus);
  });
});

const activateTab = (tabName) => {
  tabs.forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  Object.entries(tabPanels).forEach(([key, panel]) => {
    panel.classList.toggle('is-active', key === tabName);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateTab(tab.dataset.tab);
  });
});

const setModalDescription = (description) => {
  modalDescription.innerHTML = '';

  String(description || '')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .forEach((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      modalDescription.append(p);
    });
};

const configureModalFile = ({ file, previewLabel, previewBadge, previewImage }) => {
  const hasFile = Boolean(file);

  modalCard?.classList.toggle('is-document', hasFile);
  modalCard?.classList.toggle('has-project-image', !hasFile && Boolean(previewImage));

  if (modalKicker) {
    modalKicker.textContent = hasFile
      ? t('modal.certificateKicker', 'Zertifikat')
      : t('modal.projectKicker', 'Projektstatus');
  }

  if (modalFileViewer) {
    modalFileViewer.hidden = !hasFile;
    modalFileViewer.src = hasFile ? file : 'about:blank';
  }

  if (modalPreviewLabel) {
    modalPreviewLabel.hidden = hasFile;
    modalPreviewLabel.textContent = previewLabel || 'Preview folgt';
  }

  if (modalPreviewTitle) {
    modalPreviewTitle.hidden = hasFile;
    modalPreviewTitle.textContent = optionsTitleBuffer || 'Projektvorschau';
  }

  if (modalPreviewSubtitle) {
    modalPreviewSubtitle.hidden = hasFile;
    modalPreviewSubtitle.textContent = hasFile ? '' : 'Visual folgt';
  }

  if (modalPreviewBadge) {
    modalPreviewBadge.hidden = !previewBadge;
    modalPreviewBadge.textContent = previewBadge || '';
  }

  if (!hasFile && previewImage) {
    modalCard?.style.setProperty('--modal-preview-image', `url("${previewImage}")`);
  } else {
    modalCard?.style.removeProperty('--modal-preview-image');
  }

  if (modalDownload) {
    modalDownload.hidden = !hasFile;
    modalDownload.href = hasFile ? file : '#';
    modalDownload.textContent = t('portfolioDownloadButton', 'Download PDF');
    if (hasFile) {
      const filename = file.split('/').pop() || 'zertifikat.pdf';
      modalDownload.setAttribute('download', filename);
    } else {
      modalDownload.removeAttribute('download');
    }
  }
};

let optionsTitleBuffer = '';

const openDetailModal = (title, description, metaList, options = {}) => {
  optionsTitleBuffer = title || '';
  modalTitle.textContent = title || t('modal.title', 'Detailansicht');
  setModalDescription(description);
  modalMeta.innerHTML = '';
  configureModalFile(options);

  (metaList || []).forEach((metaItem) => {
    const li = document.createElement('li');
    li.textContent = metaItem;
    modalMeta.append(li);
  });

  if (typeof modal.showModal === 'function') {
    modal.showModal();
    document.body.classList.add('modal-open');
  }
};

const tryParseMeta = (value) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('button[data-title][data-description]');
  if (!trigger) {
    return;
  }

  openDetailModal(
    trigger.dataset.title,
    trigger.dataset.description,
    tryParseMeta(trigger.dataset.meta),
    {
      file: trigger.dataset.file || '',
      previewLabel: trigger.dataset.previewLabel || '',
      previewBadge: trigger.dataset.previewBadge || '',
      previewImage: trigger.dataset.previewImage || ''
    }
  );
});

if (modalClose) {
  modalClose.addEventListener('click', () => modal.close());
}

if (modal) {
  modal.addEventListener('cancel', (event) => {
    event.preventDefault();
    modal.close();
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  modal.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
  });
}

const selectLanguageButton = (languageCode) => {
  languageButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === languageCode);
  });
};

const refreshDynamicTexts = () => {
  activateFocus(currentFocusKey);
  renderCollection(portfolioData.projects, projectsGrid, 'projects');
  renderCollection(portfolioData.certificates, certificatesGrid, 'certificates');
};

const loadLanguage = async (languageCode) => {
  let dictionary = null;
  try {
    const response = await fetch(`lang/${languageCode}.json`, { cache: 'no-store' });
    if (response.ok) {
      dictionary = await response.json();
    }
  } catch {
    // fallback for local file:// usage
  }

  if (!dictionary) {
    dictionary = embeddedDictionaries[languageCode] || embeddedDictionaries.de || {};
  }

  activeDictionary = dictionary;
  applyStaticTranslations();
  refreshDynamicTexts();

  document.documentElement.lang = languageCode;
  localStorage.setItem('portfolio-language', languageCode);
  selectLanguageButton(languageCode);
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    loadLanguage(button.dataset.lang).catch(() => {
      selectLanguageButton('de');
      document.documentElement.lang = 'de';
    });
  });
});

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

const storedLanguage = localStorage.getItem('portfolio-language') || 'de';

renderStats();
renderTechStack();
activateTab('projects');
updateNavForScroll();

loadLanguage(storedLanguage).catch(() => {
  activeDictionary = {};
  applyStaticTranslations();
  refreshDynamicTexts();
  document.documentElement.lang = 'de';
  selectLanguageButton('de');
});

