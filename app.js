const portfolioData = {
  codingSinceYear: 2025,
  projects: [
    {
      title: 'PathLab',
      cardDescription: 'Visualizer fÃ¼r Wegfindungsalgorithmen auf einem gewichteten Raster mit BFS, DFS, Dijkstra und A*.',
      detailDescription: 'PathLab\n\nPathLab ist ein interaktiver Visualizer zum Lernen und Vergleichen von Wegfindungsalgorithmen. Die Anwendung arbeitet mit einem gewichteten Raster, Start- und Zielpunkten sowie Feldern wie Wand, Wasser und Schlamm.\n\nDer Schwerpunkt liegt auf nachvollziehbarer Algorithmus-Visualisierung: BFS, DFS, Dijkstra und A* kÃ¶nnen einzeln ausgefÃ¼hrt oder verglichen werden. Die Anwendung zeigt den gefundenen Pfad, Kosten und Laufzeit getrennt von der Animation.\n\nDas Projekt ist eine stabile Portfolio-Version mit GitHub-Pages-Demo, automatisierten Tests und GitHub-Actions-Workflow.',
      meta: ['Status: stabile Portfolio-Version', 'Stack: React, Vite, JavaScript, CSS, Vitest', 'Fokus: Algorithmen, Tests, UI-State', 'Demo: aktuell nicht verlinkt', 'Repository: Ã¶ffentlich'],
      tags: ['fertig', 'React/Vite', 'Tests', 'GitHub Pages'],
      filters: ['web', 'visualisierung'],
      role: 'Eigenes Lern- und Portfolio-Projekt',
      learning: 'Algorithmen getrennt von React-Komponenten halten, Tests fÃ¼r RandfÃ¤lle schreiben und UI-State nachvollziehbar machen.',
      links: [
        { label: 'GitHub', url: 'https://github.com/AleksZyro/PathLab' }
      ],
      previewImage: 'assets/project-previews/pathlab-overview.png',
      previewLabel: 'Projektvorschau',
      previewBadge: 'Fertig'
    },
    {
      title: 'SortLab',
      cardDescription: 'Sortieralgorithmus-Visualizer mit Balkenansicht, Steuerung, Statistik und ErklÃ¤rbereich.',
      detailDescription: 'SortLab\n\nSortLab ist ein interaktiver Visualizer fÃ¼r Sortieralgorithmen. Nutzerinnen und Nutzer sehen Schritt fÃ¼r Schritt, wie ein Array sortiert wird, kÃ¶nnen die Geschwindigkeit live anpassen und verschiedene Verfahren vergleichen.\n\nEnthalten sind Bubble Sort, Selection Sort, Insertion Sort, Quick Sort und Heap Sort. Das Dashboard zeigt Vergleiche, Swaps, Schritte und Laufzeit in Millisekunden.\n\nDas Projekt ist fertig nutzbar und dient als Lernprojekt fÃ¼r Algorithmen, React-State und Visualisierung.',
      meta: ['Status: fertig nutzbar', 'Stack: React, Vite, JavaScript, CSS', 'Fokus: Sortieralgorithmen und Visualisierung', 'Demo: lokal vorhanden', 'Repository: noch nicht Ã¶ffentlich verlinkt'],
      tags: ['fertig', 'React/Vite', 'Algorithmen', 'lokal'],
      filters: ['web', 'visualisierung'],
      role: 'Eigenes Lernprojekt',
      learning: 'Animation, Laufzeitsteuerung und Statistik so verbinden, dass der Algorithmus sichtbar und bedienbar bleibt.',
      previewImage: 'assets/project-previews/sortlab-preview.svg',
      previewLabel: 'Projektvorschau',
      previewBadge: 'Fertig'
    },
    {
      title: 'VSW - Vulnerability Scanner Web App',
      cardDescription: 'Defensive Fullstack-Web-App fÃ¼r risikoarme Security-Checks an autorisierten Domains oder IPs.',
      detailDescription: 'VSW - Vulnerability Scanner Web App\n\nVSW ist ein gemeinsames Projekt mit Botond. Die Anwendung fÃ¼hrt defensive, passive oder risikoarme Checks aus und stellt Ergebnisse in einem React-Dashboard dar.\n\nDer Fokus liegt auf HTTP-Security-Headern, TLS-/Zertifikatsinformationen, einer kleinen sicheren Portliste, Reports und Exporten. Das Projekt enthÃ¤lt ein FastAPI-Backend, ein React-Frontend, Tests und Docker-Grundlagen.\n\nWichtig: Das Projekt ist ausdrÃ¼cklich fÃ¼r eigene Systeme oder Systeme mit Erlaubnis gedacht. Es enthÃ¤lt keine Exploits, kein Brute Force und keine aggressiven Scans.',
      meta: ['Status: in Arbeit', 'Team: gemeinsam mit Botond', 'Stack: FastAPI, React, TypeScript, SQLite/PostgreSQL, Docker', 'Sichtbarkeit: Repository bei Botond', 'Hinweis: nur defensive Checks'],
      tags: ['in Arbeit', 'gemeinsam', 'FastAPI', 'React'],
      filters: ['python', 'web', 'fullstack', 'in-arbeit'],
      role: 'Gemeinsames Projekt mit Botond',
      learning: 'Defensive Checks klar begrenzen, Backend und Frontend sauber trennen und Ergebnisse verstÃ¤ndlich darstellen.',
      links: [
        { label: 'GitHub', url: 'https://github.com/BotondCsereklye/VSW' }
      ],
      previewImage: 'assets/project-previews/vsw-preview.svg',
      previewLabel: 'Projektvorschau',
      previewBadge: 'In Arbeit'
    },
    {
      title: 'BESP2074',
      cardDescription: 'Lokale Balkan-Wirtschaftssimulation mit Python-Modell, JSON-Export und Web-Dashboard.',
      detailDescription: 'BESP2074\n\nBESP2074 ist eine lokale, jahresbasierte Balkan-Simulation. Das Projekt nutzt ein Python-Modell, strukturierte JSON-Daten und ein lokales Web-Dashboard, um Szenarien bis 2074 darzustellen.\n\nDie Anwendung ist als Lern- und Szenariosimulation gedacht. Die Resultate sind keine echten wirtschaftlichen, politischen oder finanziellen Prognosen, sondern vereinfachte ModelllÃ¤ufe mit Annahmen, Seeds und optionalen Ereignissen.\n\nDas Projekt ist lokal nutzbar, aber noch nicht als fertige Ã¶ffentliche Anwendung verÃ¶ffentlicht.',
      meta: ['Status: lokal nutzbar, nicht verÃ¶ffentlicht', 'Stack: Python, JSON, HTML/CSS, JavaScript', 'Fokus: Simulation, Datenexport, Dashboard', 'Repository: aktuell nicht verlinkt', 'Hinweis: keine Prognose'],
      tags: ['in Arbeit', 'Python', 'Simulation', 'lokal'],
      filters: ['python', 'web', 'visualisierung', 'in-arbeit'],
      role: 'Eigenes Simulationsprojekt',
      learning: 'Modellannahmen, JSON-Export und Dashboard so verbinden, dass lokale Szenarien nachvollziehbar bleiben.',
      previewImage: 'assets/project-previews/besp2074-preview.svg',
      previewLabel: 'Projektvorschau',
      previewBadge: 'Lokal'
    }
  ],
  certificates: [
    {
      title: 'Ethical Hacker',
      cardDescription: 'Zertifikat im PDF-Format mit direkter Vorschau und Download.',
      detailDescription: 'Dieses Zertifikat kannst du direkt im Portfolio ansehen oder herunterladen.',
      meta: ['Format: PDF', 'Nachweis: Zertifikat', 'Download: verfÃ¼gbar'],
      file: 'assets/certificates/ethical-hacker.pdf',
      previewImage: 'assets/certificate-previews/ethical-hacker.png',
      previewLabel: 'Zertifikat',
      previewBadge: 'PDF'
    },
    {
      title: 'Introduction to Cybersecurity',
      cardDescription: 'Zertifikat im PDF-Format mit direkter Vorschau und Download.',
      detailDescription: 'Dieses Zertifikat kannst du direkt im Portfolio ansehen oder herunterladen.',
      meta: ['Format: PDF', 'Nachweis: Zertifikat', 'Download: verfÃ¼gbar'],
      file: 'assets/certificates/introduction-to-cybersecurity.pdf',
      previewImage: 'assets/certificate-previews/introduction-to-cybersecurity.png',
      previewLabel: 'Zertifikat',
      previewBadge: 'PDF'
    },
    {
      title: 'BBB Hackathon',
      cardDescription: 'Zertifikat im PDF-Format mit direkter Vorschau und Download.',
      detailDescription: 'Dieses Zertifikat kannst du direkt im Portfolio ansehen oder herunterladen.',
      meta: ['Format: PDF', 'Nachweis: Zertifikat', 'Download: verfÃ¼gbar'],
      file: 'assets/certificates/bbb-hackathon.pdf',
      previewImage: 'assets/certificate-previews/bbb-hackathon-preview.svg',
      previewLabel: 'Zertifikat',
      previewBadge: 'PDF'
    }
  ],
  techGroups: [
    { title: 'Python', items: ['FastAPI', 'pytest', 'CLI/local tools'] },
    { title: 'Frontend', items: ['HTML/CSS', 'JavaScript', 'React/Vite'] },
    { title: 'Daten', items: ['JSON', 'CSV', 'SQLite'] },
    { title: 'Tools', items: ['Git', 'GitHub Actions', 'Docker-Grundlagen'] }
  ]
};

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');
const sections = [...document.querySelectorAll('main section[id]')];
const revealItems = document.querySelectorAll('.reveal');
const tabs = document.querySelectorAll('.tab');
const tabPanels = { projects: document.getElementById('panel-projects'), certificates: document.getElementById('panel-certificates') };
const projectFilters = document.querySelectorAll('.filter-chip');
const projectsGrid = document.getElementById('projects-grid');
const certificatesGrid = document.getElementById('certificates-grid');
const techGrid = document.getElementById('tech-grid');
const focusTabs = document.querySelectorAll('.focus-tab');
const focusTitle = document.getElementById('focus-title');
const focusText = document.getElementById('focus-text');
const focusList = document.getElementById('focus-list');
const focusStatus = document.getElementById('focus-status');
const languageButtons = document.querySelectorAll('.lang-btn');
const languageMenuButton = document.getElementById('language-menu-button');
const languageMenu = document.getElementById('language-menu');
const languageOptions = document.querySelectorAll('.lang-option');
const languageCurrentFlag = document.getElementById('language-current-flag');
const languageCurrentLabel = document.getElementById('language-current-label');
const surfaceCanvas = document.getElementById('surface-canvas');
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
let activeProjectFilter = 'all';
let activeProjectTitle = '';
const embeddedDictionaries = {
  de: {
    skip: { content: 'Zum Inhalt springen' },
    nav: { home: 'Start', about: '\u00dcber mich', career: 'Werdegang', tech: 'Tech-Stack', portfolio: 'Projekte', github: 'GitHub', contact: 'Kontakt' },
    hero: {
      kicker: 'IMS Applikationsentwicklung | Praktikum 2027/2028',
      description: 'Ich entwickle kleine bis mittelgrosse Python- und Web-Anwendungen mit Fokus auf lokale Tools, APIs, Tests und nachvollziehbare BenutzeroberflÃ¤chen.',
      factEducation: 'Ab Sommer 2026: 3. IMS-Jahr, Applikationsentwicklung',
      factInternship: 'Praktikum gesucht: Schweiz, 2027/2028',
      availability: 'Aktuell suche ich eine Praktikumsstelle in der Schweiz f\u00fcr das 4. IMS-Jahr, Zeitraum 2027/2028.',
      factProjects: 'Projekte: PathLab, SortLab, VSW, BESP2074',
      factStack: 'Python, React/Vite, FastAPI, Git',
      projectsKicker: 'AusgewÃ¤hlte Projekte',
      projectsTitle: 'Projekte',
      projectPathlab: 'Routing-Visualizer, Tests, GitHub',
      projectSortlab: 'Sortieralgorithmen, React/Vite',
      projectVsw: 'Defensive Checks, Teamprojekt',
      projectBesp: 'Lokale Python-Simulation',
      ctaPortfolio: 'Projekte ansehen',
      ctaGithub: 'GitHub',
      ctaContact: 'Kontakt',
      ctaEmail: 'E-Mail'
    },
    focus: {
      title: 'Technische Praxis',
      subline: 'Kurzer Ãœberblick Ã¼ber die Bereiche, in denen ich aktuell praktisch arbeite.',
      web: {
        tab: 'Web',
        title: 'Web',
        text: 'WeboberflÃ¤chen fÃ¼r Lernprojekte, Dashboards und Portfolio-Projekte.',
        points: ['HTML/CSS', 'JavaScript', 'React/Vite'],
        status: 'Praxis: PathLab, SortLab, VSW'
      },
      backend: {
        tab: 'Backend',
        title: 'Backend',
        text: 'Kleine APIs und lokale Services mit klarer Datenlogik.',
        points: ['FastAPI', 'pytest', 'SQLite/JSON'],
        status: 'Praxis: VSW, lokale Tools'
      },
      cloud: {
        tab: 'Tools',
        title: 'Tools',
        text: 'Projektarbeit mit Versionskontrolle, einfachen Workflows und lokalen Setups.',
        points: ['Git und GitHub', 'GitHub Actions', 'Docker-Grundlagen'],
        status: 'Praxis: Tests und Builds'
      },
      automation: {
        tab: 'Automatisierung',
        title: 'Automatisierung',
        text: 'Skripte fÃ¼r lokale AblÃ¤ufe, Starts und einfache wiederkehrende Aufgaben.',
        points: ['PowerShell', 'CLI-Tools', 'lokale Helfer'],
        status: 'Praxis: Windows-Tools'
      }
    },
    about: {
      kicker: 'Ãœber mich',
      title: 'Ãœber mich',
      cardTitle: 'Hallo, ich bin Aleksandar',
      description: 'Ich besuche die IMS mit Schwerpunkt Applikationsentwicklung. Meine Projekte bewegen sich vor allem zwischen Python-Tools, WeboberflÃ¤chen, APIs, Tests und Datenverarbeitung. Wichtig sind mir nachvollziehbarer Code, klare Struktur und ehrliche ProjektstÃ¤nde.',
      factStatus: 'Status: ab Sommer 2026 im 3. IMS-Jahr',
      factFocus: 'Fokus: Python, Web, lokale Tools, APIs',
      factWork: 'Ziel: Praktikum Schweiz, 2027/2028'
    },
    career: {
      kicker: 'Werdegang',
      title: 'Weg und Lernumfeld',
      subline: 'Mein aktueller Weg verbindet Schule, Informatik und praktische Erfahrungen in der Applikationsentwicklung.',
      items: {
        hackathon: {
          type: 'Event',
          title: 'Baden hackt',
          period: 'Teilnahme',
          description: 'Teilnahme am Hackathon "Baden hackt" mit Fokus auf Teamarbeit, Ideenfindung und schneller technischer Umsetzung.'
        },
        ims: {
          type: 'Ausbildung',
          title: 'Alte Kantonsschule Aarau & Berufsbildung Baden',
          period: '2024 - heute',
          description: 'Informatikmittelschule (IMS), Fachrichtung Applikationsentwicklung. Ich starte ins 3. IMS-Jahr und bereite mich auf die Praktikumsphase im 4. Jahr vor.'
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
      title: 'Tech-Stack nach Einsatzbereich',
      subline: 'Nur Technologien, die in aktuellen Projekten vorkommen oder die ich plausibel erklÃ¤ren kann.'
    },
    portfolio: {
      kicker: 'Projekte',
      title: 'AusgewÃ¤hlte Arbeiten',
      subline: 'Projekt-Explorer mit Status, Stack und Links oder Hinweisen.',
      certificatesTitle: 'Zertifikate',
      certificatesSubline: 'Nachweise als PDF mit Vorschau und Download.',
      detailKicker: 'Projektdetails',
      detailStatus: 'Status',
      detailStack: 'Stack',
      detailRole: 'Rolle',
      detailLearning: 'Lerneffekt',
      detailEmptyTitle: 'Projekt ausw\u00e4hlen',
      detailEmptyText: 'Klicke auf eine Projektkarte, um Status, Stack, Rolle und Lerneffekt anzuzeigen.',
      tabs: { projects: 'Projekte', certificates: 'Zertifikate' },
      detailsButton: 'Details anzeigen',
      empty: {
        projects: { title: 'Projekte: Noch keine Inhalte' },
        certificates: { title: 'Zertifikate: Noch keine Inhalte' },
        description: 'Die Daten werden morgen mit echten Screenshots und Beschreibungen befÃ¼llt.',
        previewButton: 'Detailansicht-Vorschau Ã¶ffnen',
        modalDescription: 'Scaffold fÃ¼r Zoom/Detailansicht ist aktiv und bereit fÃ¼r reale Daten.',
        modalMeta: ['Titel', 'Kurzbeschreibung', 'Bild/Screenshot', 'Technologien oder Nachweis', 'Externer Link (optional)']
      }
    },
    filters: { all: 'Alle', visualization: 'Visualisierung', inProgress: 'In Arbeit' },
    github: {
      kicker: 'GitHub',
      title: 'Aktivit\u00e4t und Open Source',
      subline: 'GitHub nutze ich, um Projekte nachvollziehbar zu dokumentieren, \u00c4nderungen zu versionieren und \u00f6ffentliche Arbeiten verlinkbar zu machen.',
      profileLink: 'GitHub-Profil',
      reposLink: 'Repositories',
      openSourceTitle: 'Open-Source-Merges',
      openSourceEmpty: 'Noch keine \u00f6ffentlich belegten Merges hinterlegt.',
      openSourceText: 'Sobald gemergte Pull Requests vorhanden sind, werden sie hier mit Projekt, Kurzbeschreibung und Link aufgef\u00fchrt.'
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Kontakt',
      description: 'FÃ¼r Praktikum, RÃ¼ckfragen oder Zusammenarbeit bin ich per E-Mail erreichbar.',
      phoneLabel: 'Telefon',
      mailLabel: 'E-Mail',
      schoolMailLabel: 'Schul-Mail'
    },
    modal: { close: 'Schliessen', title: 'Detailansicht', projectKicker: 'Projektstatus', certificateKicker: 'Zertifikat' },
    portfolioDownloadButton: 'Download PDF',
    footer: { rights: 'Alle Rechte vorbehalten.', legalLink: 'Datenschutz und Cookies' }
  },
  en: {
    skip: { content: 'Skip to content' },
    nav: { home: 'Home', about: 'About', career: 'Journey', tech: 'Tech Stack', portfolio: 'Projects', github: 'GitHub', contact: 'Contact' },
    hero: {
      kicker: 'IMS Application Development | Internship 2027/2028',
      description: 'I build small to mid-sized Python and web applications with a focus on local tools, APIs, tests, and understandable user interfaces.',
      factEducation: 'From summer 2026: 3rd IMS year, application development',
      factInternship: 'Looking for an internship: Switzerland, 2027/2028',
      availability: 'I am currently looking for an internship position in Switzerland for the 4th IMS year, period 2027/2028.',
      factProjects: 'PathLab, SortLab, VSW, BESP2074',
      factStack: 'Python, React/Vite, FastAPI, Git',
      projectsKicker: 'Selected projects',
      projectsTitle: 'Easy to verify',
      projectPathlab: 'Routing visualizer, tests, GitHub',
      projectSortlab: 'Sorting algorithms, React/Vite',
      projectVsw: 'Defensive checks, team project',
      projectBesp: 'Local Python simulation',
      ctaPortfolio: 'View projects',
      ctaGithub: 'GitHub',
      ctaContact: 'Contact',
      ctaEmail: 'Email'
    },
    focus: {
      title: 'Work areas',
      subline: 'A short overview of the areas where I currently work in practice.',
      web: {
        tab: 'Web',
        title: 'Web',
        text: 'Web interfaces for learning projects, dashboards, and portfolio projects.',
        points: ['HTML/CSS', 'JavaScript', 'React/Vite'],
        status: 'Practice: PathLab, SortLab, VSW'
      },
      backend: {
        tab: 'Backend',
        title: 'Backend',
        text: 'Small APIs and local services with clear data logic.',
        points: ['FastAPI', 'pytest', 'SQLite/JSON'],
        status: 'Practice: VSW, local tools'
      },
      cloud: {
        tab: 'Tools',
        title: 'Tools',
        text: 'Project work with version control, simple workflows, and local setups.',
        points: ['Git and GitHub', 'GitHub Actions', 'Docker basics'],
        status: 'Practice: tests and builds'
      },
      automation: {
        tab: 'Automation',
        title: 'Automation',
        text: 'Scripts for local workflows, launches, and simple recurring tasks.',
        points: ['PowerShell', 'CLI tools', 'local helpers'],
        status: 'Practice: Windows tools'
      }
    },
    about: {
      kicker: 'About',
      title: 'Personal Profile',
      cardTitle: 'Hi, I am Aleksandar',
      description: 'I attend IMS with a focus on application development. My projects are mainly between Python tools, web interfaces, APIs, tests, and data processing. Clear structure, understandable code, and honest project status matter to me.',
      factStatus: 'Status: IMS, application development',
      factFocus: 'Focus: Python, web, local tools',
      factWork: 'Work style: tests, clear structure, honest project status'
    },
    career: {
      kicker: 'Journey',
      title: 'Path and Learning Environment',
      subline: 'My current path combines school, computer science, and practical experience in application development.',
      items: {
        hackathon: {
          type: 'Event',
          title: 'Baden hackt',
          period: 'Participation',
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
      title: 'Tech stack by use case',
      subline: 'Only technologies that appear in current projects or that I can explain plausibly.'
    },
    portfolio: {
      kicker: 'Projects',
      title: 'Selected work',
      subline: 'Project explorer with status, stack, and links or notes.',
      certificatesTitle: 'Certificates',
      certificatesSubline: 'PDF proof with preview and download.',
      detailKicker: 'Project details',
      detailStatus: 'Status',
      detailStack: 'Stack',
      detailRole: 'Role',
      detailLearning: 'Learning',
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
    filters: { all: 'All', visualization: 'Visualization', inProgress: 'In progress' },
    github: { kicker: 'GitHub', title: 'Activity and Open Source', subline: 'I use GitHub to document projects clearly, version changes, and make public work linkable.', profileLink: 'GitHub profile', reposLink: 'Repositories', openSourceTitle: 'Open-source merges', openSourceEmpty: 'No publicly verifiable merges listed yet.', openSourceText: 'Once merged pull requests are available, they will be listed here with project, short description, and link.' },
    contact: {
      kicker: 'Contact',
      title: 'Contact',
      description: 'For internships, questions, or collaboration, I am reachable by email.',
      phoneLabel: 'Phone',
      mailLabel: 'Email',
      schoolMailLabel: 'School email'
    },
    modal: { close: 'Close', title: 'Detail view', projectKicker: 'Project status', certificateKicker: 'Certificate' },
    portfolioDownloadButton: 'Download PDF',
    footer: { rights: 'All rights reserved.', legalLink: 'Privacy and cookies' }
  },
  fr: {
    skip: { content: 'Aller au contenu' },
    nav: { home: 'Accueil', about: 'Ã€ propos', career: 'Parcours', tech: 'Stack tech', portfolio: 'Projets', github: 'GitHub', contact: 'Contact' },
    hero: {
      kicker: 'D\u00e9veloppement applicatif IMS | Stage 2027/2028',
      description: 'Je developpe de petites et moyennes applications Python et web avec un focus sur les outils locaux, les API, les tests et des interfaces comprehensibles.',
      factEducation: 'D\u00e8s l\u2019\u00e9t\u00e9 2026: 3e ann\u00e9e IMS, d\u00e9veloppement applicatif',
      factInternship: 'Stage recherch\u00e9: Suisse, 2027/2028',
      availability: 'Je cherche actuellement une place de stage en Suisse pour la 4e ann\u00e9e IMS, p\u00e9riode 2027/2028.',
      factProjects: 'PathLab, SortLab, VSW, BESP2074',
      factStack: 'Python, React/Vite, FastAPI, Git',
      projectsKicker: 'Projets selectionnes',
      projectsTitle: 'Faciles a verifier',
      projectPathlab: 'Visualiseur de chemins, tests, GitHub',
      projectSortlab: 'Algorithmes de tri, React/Vite',
      projectVsw: 'Checks defensifs, projet en equipe',
      projectBesp: 'Simulation Python locale',
      ctaPortfolio: 'Voir les projets',
      ctaGithub: 'GitHub',
      ctaContact: 'Contact',
      ctaEmail: 'E-mail'
    },
    focus: {
      title: 'Domaines de travail',
      subline: 'Apercu court des domaines dans lesquels je travaille actuellement en pratique.',
      web: {
        tab: 'Web',
        title: 'Web',
        text: 'Interfaces web pour projets d\'apprentissage, tableaux de bord et portfolio.',
        points: ['HTML/CSS', 'JavaScript', 'React/Vite'],
        status: 'Pratique: PathLab, SortLab, VSW'
      },
      backend: {
        tab: 'Backend',
        title: 'Backend',
        text: 'Petites API et services locaux avec une logique de donnees claire.',
        points: ['FastAPI', 'pytest', 'SQLite/JSON'],
        status: 'Pratique: VSW, outils locaux'
      },
      cloud: {
        tab: 'Outils',
        title: 'Outils',
        text: 'Travail de projet avec controle de version, workflows simples et setups locaux.',
        points: ['Git et GitHub', 'GitHub Actions', 'Bases Docker'],
        status: 'Pratique: tests et builds'
      },
      automation: {
        tab: 'Automatisation',
        title: 'Automatisation',
        text: 'Scripts pour les workflows locaux, les lancements et les taches simples recurrentes.',
        points: ['PowerShell', 'Outils CLI', 'Assistants locaux'],
        status: 'Pratique: outils Windows'
      }
    },
    about: {
      kicker: 'Ã€ propos',
      title: '\u00c0 propos de moi',
      cardTitle: 'Salut, je suis Aleksandar',
      description: 'Je frequente l\'IMS avec une specialisation en developpement applicatif. Mes projets se situent surtout entre outils Python, interfaces web, API, tests et traitement de donnees. Une structure claire, un code comprehensible et des statuts de projet honnetes sont importants pour moi.',
      factStatus: 'Statut: IMS, developpement applicatif',
      factFocus: 'Focus: Python, web, outils locaux',
      factWork: 'Methode: tests, structure claire, statuts honnetes'
    },
    career: {
      kicker: 'Parcours',
      title: 'Parcours et cadre d apprentissage',
      subline: 'Mon parcours actuel relie l ecole, l informatique et l experience pratique en developpement applicatif.',
      items: {
        hackathon: {
          type: 'Evenement',
          title: 'Baden hackt',
          period: 'Participation',
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
      title: 'Stack tech par domaine',
      subline: 'Uniquement les technologies presentes dans mes projets actuels ou que je peux expliquer de maniere plausible.'
    },
    portfolio: {
      kicker: 'Projets',
      title: 'Travaux selectionnes',
      subline: 'Explorateur de projets avec statut, stack et liens ou notes.',
      certificatesTitle: 'Certificats',
      certificatesSubline: 'Justificatifs PDF avec apercu et telechargement.',
      detailKicker: 'Details du projet',
      detailStatus: 'Statut',
      detailStack: 'Stack',
      detailRole: 'Role',
      detailLearning: 'Apprentissage',
      detailEmptyTitle: 'Choisir un projet',
      detailEmptyText: 'Clique sur une carte de projet pour afficher le statut, le stack, le r\u00f4le et ce que le projet m\u2019apporte.',
      tabs: { projects: 'Projets', certificates: 'Certificats' },
      detailsButton: 'Afficher les details',
      empty: {
        projects: { title: 'Projets: Pas encore de contenu' },
        certificates: { title: 'Certificats: Pas encore de contenu' },
        description: 'Les donnees avec vraies captures et descriptions seront ajoutees demain.',
        previewButton: 'Ouvrir l\'aperÃ§u detail',
        modalDescription: 'Le scaffold detail/zoom est actif et pret pour des donnees reelles.',
        modalMeta: ['Titre', 'Description courte', 'Image/capture', 'Technologies ou preuve', 'Lien externe (optionnel)']
      }
    },
    filters: { all: 'Tous', visualization: 'Visualisation', inProgress: 'En cours' },
    github: { kicker: 'GitHub', title: 'Activit\u00e9 et open source', subline: 'J\u2019utilise GitHub pour documenter mes projets, versionner les changements et rendre mes travaux publics faciles \u00e0 consulter.', profileLink: 'Profil GitHub', reposLink: 'Repositories', openSourceTitle: 'Merges open source', openSourceEmpty: 'Aucun merge v\u00e9rifiable publiquement n\u2019est encore list\u00e9.', openSourceText: 'D\u00e8s que des pull requests merg\u00e9es seront disponibles, elles seront list\u00e9es ici avec projet, courte description et lien.' },
    contact: {
      kicker: 'Contact',
      title: 'Contact',
      description: 'Pour un stage, des questions ou une collaboration, je suis joignable par e-mail.',
      phoneLabel: 'Telephone',
      mailLabel: 'E-mail',
      schoolMailLabel: 'E-mail ecole'
    },
    modal: { close: 'Fermer', title: 'Vue detail', projectKicker: 'Statut du projet', certificateKicker: 'Certificat' },
    portfolioDownloadButton: 'Telecharger le PDF',
    footer: { rights: 'Tous droits rÃ©servÃ©s.', legalLink: 'ConfidentialitÃ© et cookies' }
  },
  sr: {
    skip: { content: 'PreskoÄi na sadrÅ¾aj' },
    nav: { home: 'PoÄetak', about: 'O meni', career: 'Razvoj', tech: 'Tech stack', portfolio: 'Projekti', github: 'GitHub', contact: 'Kontakt' },
    hero: {
      kicker: 'IMS razvoj aplikacija | praksa 2027/2028',
      description: 'Razvijam male i srednje Python i web aplikacije sa fokusom na lokalne alate, API-je, testove i razumljive korisnicke interfejse.',
      factEducation: 'Od leta 2026: 3. IMS godina, razvoj aplikacija',
      factInternship: 'Tra\u017eim praksu: \u0160vajcarska, 2027/2028',
      availability: 'Trenutno tra\u017eim mesto za praksu u \u0160vajcarskoj za 4. IMS godinu, period 2027/2028.',
      factProjects: 'PathLab, SortLab, VSW, BESP2074',
      factStack: 'Python, React/Vite, FastAPI, Git',
      projectsKicker: 'Odabrani projekti',
      projectsTitle: 'Lako proverljivo',
      projectPathlab: 'Routing vizualizacija, testovi, GitHub',
      projectSortlab: 'Algoritmi sortiranja, React/Vite',
      projectVsw: 'Defanzivne provere, timski projekat',
      projectBesp: 'Lokalna Python simulacija',
      ctaPortfolio: 'Pogledaj projekte',
      ctaGithub: 'GitHub',
      ctaContact: 'Kontakt',
      ctaEmail: 'E-mail'
    },
    focus: {
      title: 'Oblasti rada',
      subline: 'Kratak pregled oblasti u kojima trenutno prakticno radim.',
      web: {
        tab: 'Web',
        title: 'Web',
        text: 'Web interfejsi za projekte ucenja, dashboard-e i portfolio projekte.',
        points: ['HTML/CSS', 'JavaScript', 'React/Vite'],
        status: 'Praksa: PathLab, SortLab, VSW'
      },
      backend: {
        tab: 'Backend',
        title: 'Backend',
        text: 'Mali API-ji i lokalni servisi sa jasnom logikom podataka.',
        points: ['FastAPI', 'pytest', 'SQLite/JSON'],
        status: 'Praksa: VSW, lokalni alati'
      },
      cloud: {
        tab: 'Alati',
        title: 'Alati',
        text: 'Projektni rad sa kontrolom verzija, jednostavnim workflow-ovima i lokalnim setup-ima.',
        points: ['Git i GitHub', 'GitHub Actions', 'Docker osnove'],
        status: 'Praksa: testovi i build-ovi'
      },
      automation: {
        tab: 'Automatizacija',
        title: 'Automatizacija',
        text: 'Skripte za lokalne tokove rada, startovanje alata i jednostavne ponavljajuce zadatke.',
        points: ['PowerShell', 'CLI alati', 'lokalni pomocnici'],
        status: 'Praksa: Windows alati'
      }
    },
    about: {
      kicker: 'O meni',
      title: 'Licni profil',
      cardTitle: 'Zdravo, ja sam Aleksandar',
      description: 'UÄenik sam IMS-a sa fokusom na razvoj aplikacija. Moji projekti su uglavnom izmeÄ‘u Python alata, web interfejsa, API-ja, testova i obrade podataka. VaÅ¾ni su mi jasna struktura, razumljiv kod i iskren status projekta.',
      factStatus: 'Status: IMS, razvoj aplikacija',
      factFocus: 'Fokus: Python, web, lokalni alati',
      factWork: 'Rad: testovi, jasna struktura, iskren status projekta'
    },
    career: {
      kicker: 'Razvoj',
      title: 'Razvoj i okruÅ¾enje za uÄenje',
      subline: 'Moj trenutni put povezuje skolu, informatiku i prakticno iskustvo u razvoju aplikacija.',
      items: {
        hackathon: {
          type: 'Dogadjaj',
          title: 'Baden hackt',
          period: 'Ucesce',
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
      title: 'Tech stack po oblasti',
      subline: 'Samo tehnologije koje se pojavljuju u trenutnim projektima ili koje mogu smisleno objasniti.'
    },
    portfolio: {
      kicker: 'Projekti',
      title: 'Odabrani radovi',
      subline: 'Explorer projekata sa statusom, stack-om i linkovima ili napomenama.',
      certificatesTitle: 'Sertifikati',
      certificatesSubline: 'PDF dokazi sa pregledom i preuzimanjem.',
      detailKicker: 'Detalji projekta',
      detailStatus: 'Status',
      detailStack: 'Stack',
      detailRole: 'Uloga',
      detailLearning: 'Ucenje',
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
    filters: { all: 'Svi', visualization: 'Vizualizacija', inProgress: 'U radu' },
    github: { kicker: 'GitHub', title: 'Aktivnost i open source', subline: 'GitHub koristim za jasno dokumentovanje projekata, verzionisanje promena i javno linkovanje radova.', profileLink: 'GitHub profil', reposLink: 'Repositories', openSourceTitle: 'Open-source merge-ovi', openSourceEmpty: 'Jos nema javno proverljivih merge-ova.', openSourceText: 'Kada budu dostupni merge-ovani pull requestovi, ovde ce biti navedeni sa projektom, kratkim opisom i linkom.' },
    contact: {
      kicker: 'Kontakt',
      title: 'Kontakt',
      description: 'Za praksu, pitanja ili saradnju dostupan sam putem e-maila.',
      phoneLabel: 'Telefon',
      mailLabel: 'E-mail',
      schoolMailLabel: 'Skolski e-mail'
    },
    modal: { close: 'Zatvori', title: 'Detaljni prikaz', projectKicker: 'Status projekta', certificateKicker: 'Sertifikat' },
    portfolioDownloadButton: 'Preuzmi PDF',
    footer: { rights: 'Sva prava zadrÅ¾ana.', legalLink: 'Privatnost i cookies' }
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

const scrollToSection = (targetId, behavior = 'smooth') => {
  const section = document.querySelector(targetId);
  if (!section) return;

  const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
  const sectionOffsets = {
    '#portfolio': 8
  };
  const extraOffset = sectionOffsets[targetId] ?? 18;
  const top = Math.max(window.scrollY + section.getBoundingClientRect().top - headerHeight - extraOffset, 0);

  window.scrollTo({ top, behavior });
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

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (surfaceCanvas && !prefersReducedMotion.matches) {
  const ctx = surfaceCanvas.getContext('2d');
  const scratches = [];
  let canvasWidth = 0;
  let canvasHeight = 0;

  const resizeSurfaceCanvas = () => {
    const ratio = window.devicePixelRatio || 1;
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    surfaceCanvas.width = Math.round(canvasWidth * ratio);
    surfaceCanvas.height = Math.round(canvasHeight * ratio);
    surfaceCanvas.style.width = `${canvasWidth}px`;
    surfaceCanvas.style.height = `${canvasHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const addScratches = (x, y, amount = 5) => {
    for (let index = 0; index < amount; index += 1) {
      scratches.push({
        x: x + (Math.random() - 0.5) * 74,
        y: y + (Math.random() - 0.5) * 46,
        length: 10 + Math.random() * 28,
        angle: -0.35 + Math.random() * 0.7,
        life: 1,
        decay: 0.012 + Math.random() * 0.018,
      });
    }
    if (scratches.length > 180) scratches.splice(0, scratches.length - 180);
  };

  const drawSurface = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let index = scratches.length - 1; index >= 0; index -= 1) {
      const scratch = scratches[index];
      scratch.life -= scratch.decay;
      if (scratch.life <= 0) {
        scratches.splice(index, 1);
        continue;
      }

      const alpha = Math.min(0.24, scratch.life * 0.18);
      const dx = Math.cos(scratch.angle) * scratch.length;
      const dy = Math.sin(scratch.angle) * scratch.length;
      ctx.beginPath();
      ctx.moveTo(scratch.x - dx / 2, scratch.y - dy / 2);
      ctx.lineTo(scratch.x + dx / 2, scratch.y + dy / 2);
      ctx.strokeStyle = `rgba(180, 167, 229, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    window.requestAnimationFrame(drawSurface);
  };

  resizeSurfaceCanvas();
  window.addEventListener('resize', resizeSurfaceCanvas);
  window.addEventListener('pointermove', (event) => addScratches(event.clientX, event.clientY), { passive: true });
  window.addEventListener('pointerdown', (event) => addScratches(event.clientX, event.clientY, 18), { passive: true });
  drawSurface();
}


const renderStats = () => {
  if (!projectsCountEl || !certificatesCountEl || !yearsCountEl) return;
  const currentYear = new Date().getFullYear();
  const yearsCoding = Math.max(1, currentYear - portfolioData.codingSinceYear + 1);

  projectsCountEl.textContent = String(portfolioData.projects.length);
  certificatesCountEl.textContent = String(portfolioData.certificates.length);
  yearsCountEl.textContent = String(yearsCoding);
};

const createCard = (item) => {
  const card = document.createElement('article');
  card.className = 'item-card';
  if (item.title === activeProjectTitle) {
    card.classList.add('is-selected');
  }

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

  const tags = document.createElement('div');
  tags.className = 'project-tags';
  const duplicatedStatusTags = new Set(
    [item.previewBadge, 'fertig', 'in arbeit', 'lokal', 'privat']
      .filter(Boolean)
      .map((value) => String(value).trim().toLowerCase())
  );
  (item.tags || []).filter((tagText) => !duplicatedStatusTags.has(String(tagText).trim().toLowerCase())).forEach((tagText) => {
    const tag = document.createElement('span');
    tag.textContent = tagText;
    tags.append(tag);
  });

  const links = document.createElement('div');
  links.className = 'project-links';
  (item.links || []).forEach((linkItem) => {
    const link = document.createElement('a');
    link.className = 'link-arrow';
    link.href = linkItem.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = linkItem.label;
    links.append(link);
  });

  const detailButton = document.createElement('button');
  detailButton.type = 'button';
  detailButton.textContent = t('portfolio.detailsButton', 'Details anzeigen');
  detailButton.dataset.detailTrigger = 'true';
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

  if (item.links) {
    detailButton.dataset.links = JSON.stringify(item.links);
  }

  const actions = document.createElement('div');
  actions.className = 'card-actions';
  if (links.children.length) {
    actions.append(links);
  }
  actions.append(detailButton);

  card.append(preview, title, description);
  if (tags.children.length) {
    card.append(tags);
  }
  card.append(actions);
  return card;
};

const renderProjectExplorer = () => {
  if (!projectsGrid) return;

  const filteredProjects = portfolioData.projects.filter((project) => (
    activeProjectFilter === 'all' || (project.filters || []).includes(activeProjectFilter)
  ));

  if (activeProjectTitle && !filteredProjects.some((project) => project.title === activeProjectTitle)) {
    activeProjectTitle = '';
  }

  projectsGrid.innerHTML = '';
  filteredProjects.forEach((project) => {
    projectsGrid.append(createCard(project));
  });
};

const createEmptyState = (typeKey) => {
  const wrapper = document.createElement('article');
  wrapper.className = 'empty-state';

  const title = document.createElement('h3');
  title.textContent = t(`portfolio.empty.${typeKey}.title`, 'Noch keine Inhalte');

  const text = document.createElement('p');
    text.textContent = t('portfolio.empty.description', 'Die Daten werden morgen mit echten Screenshots und Beschreibungen befÃ¼llt.');

  const previewButton = document.createElement('button');
  previewButton.type = 'button';
  previewButton.className = 'empty-action';
  previewButton.textContent = t('portfolio.empty.previewButton', 'Detailansicht-Vorschau Ã¶ffnen');
  previewButton.dataset.title = t('modal.title', 'Detailansicht');
  previewButton.dataset.description = t('portfolio.empty.modalDescription', 'Scaffold fÃ¼r Zoom/Detailansicht ist aktiv und bereit fÃ¼r reale Daten.');
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

  if (Array.isArray(portfolioData.techGroups)) {
    portfolioData.techGroups.forEach((group) => {
      const card = document.createElement('article');
      card.className = 'tech-group-card';

      const title = document.createElement('h3');
      title.textContent = group.title;

      const list = document.createElement('ul');
      (group.items || []).forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);
      });

      card.append(title, list);
      techGrid.append(card);
    });
    return;
  }

  (portfolioData.technologies || []).forEach((tech) => {
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
    text: t('focus.web.text', 'WeboberflÃ¤chen fÃ¼r Lernprojekte, Dashboards und Portfolio-Projekte.'),
    points: tArray('focus.web.points', ['HTML/CSS', 'JavaScript', 'React/Vite']),
    status: t('focus.web.status', 'Praxis: PathLab, SortLab, VSW')
  },
  backend: {
    title: t('focus.backend.title', 'Backend'),
    text: t('focus.backend.text', 'Kleine APIs und lokale Services mit klarer Datenlogik.'),
    points: tArray('focus.backend.points', ['FastAPI', 'pytest', 'SQLite/JSON']),
    status: t('focus.backend.status', 'Praxis: VSW, lokale Tools')
  },
  cloud: {
    title: t('focus.cloud.title', 'Tools'),
    text: t('focus.cloud.text', 'Projektarbeit mit Versionskontrolle, einfachen Workflows und lokalen Setups.'),
    points: tArray('focus.cloud.points', ['Git und GitHub', 'GitHub Actions', 'Docker-Grundlagen']),
    status: t('focus.cloud.status', 'Praxis: Tests und Builds')
  },
  automation: {
    title: t('focus.automation.title', 'Automatisierung'),
    text: t('focus.automation.text', 'Skripte fÃ¼r lokale AblÃ¤ufe, Starts und einfache wiederkehrende Aufgaben.'),
    points: tArray('focus.automation.points', ['PowerShell', 'CLI-Tools', 'lokale Helfer']),
    status: t('focus.automation.status', 'Praxis: Windows-Tools')
  }
});

const activateFocus = (focusKey) => {
  if (!focusTitle || !focusText || !focusList || !focusStatus) return;
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
    if (!panel) return;
    panel.classList.toggle('is-active', key === tabName);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateTab(tab.dataset.tab);
  });
});

projectFilters.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    activeProjectFilter = filterButton.dataset.filter || 'all';
    projectFilters.forEach((button) => {
      const active = button === filterButton;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderProjectExplorer();
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
  const trigger = event.target.closest('button[data-detail-trigger][data-title][data-description]');
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
    const isActive = button.dataset.lang === languageCode;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  languageOptions.forEach((option) => {
    const isActive = option.dataset.lang === languageCode;
    option.classList.toggle('is-active', isActive);
    option.setAttribute('aria-selected', String(isActive));
  });

  const selectedOption = [...languageOptions].find((option) => option.dataset.lang === languageCode);
  if (selectedOption && languageCurrentLabel && languageCurrentFlag) {
    const selectedFlag = selectedOption.querySelector('.flag');
    languageCurrentLabel.textContent = selectedOption.textContent.trim();
    languageCurrentFlag.className = selectedFlag ? selectedFlag.className : 'flag flag-de';
  }
};

const setLanguageMenuOpen = (isOpen) => {
  if (!languageMenu || !languageMenuButton) return;
  languageMenu.hidden = !isOpen;
  languageMenuButton.setAttribute('aria-expanded', String(isOpen));
};

const refreshDynamicTexts = () => {
  activateFocus(currentFocusKey);
  renderProjectExplorer();
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

  const htmlLanguageCodes = { sr: 'sr-Latn', 'sr-cyrl': 'sr-Cyrl' };
  document.documentElement.lang = htmlLanguageCodes[languageCode] || languageCode;
  localStorage.setItem('portfolio-language', languageCode);
  selectLanguageButton(languageCode);
};

const alignInitialHash = () => {
  const target = window.location.hash;
  if (!target || !document.querySelector(target)) return;

  const align = () => {
    scrollToSection(target, 'auto');
    setActiveNav(target.slice(1));
  };

  window.setTimeout(align, 80);
  window.setTimeout(align, 420);
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    loadLanguage(button.dataset.lang).catch(() => {
      selectLanguageButton('de');
      document.documentElement.lang = 'de';
    });
  });
});

if (languageMenuButton && languageMenu) {
  languageMenuButton.addEventListener('click', () => {
    setLanguageMenuOpen(languageMenu.hidden);
  });

  languageOptions.forEach((option) => {
    option.addEventListener('click', () => {
      setLanguageMenuOpen(false);
      loadLanguage(option.dataset.lang).catch(() => {
        selectLanguageButton('de');
        document.documentElement.lang = 'de';
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (!languageMenu.hidden && !event.target.closest('.language-switch')) {
      setLanguageMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setLanguageMenuOpen(false);
    }
  });
}

if (languageOptions.length) {
  languageOptions.forEach((option) => {
    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setLanguageMenuOpen(false);
        loadLanguage(option.dataset.lang).catch(() => {
          selectLanguageButton('de');
          document.documentElement.lang = 'de';
        });
      }
    });
  });
}

const legacyLanguageSelect = document.getElementById('language-select');
if (legacyLanguageSelect) {
  legacyLanguageSelect.addEventListener('change', () => {
    loadLanguage(legacyLanguageSelect.value).catch(() => {
      selectLanguageButton('de');
      document.documentElement.lang = 'de';
    });
  });
}

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
localStorage.removeItem('portfolio-theme');
renderStats();
renderTechStack();
if (tabs.length) {
  activateTab('projects');
}
updateNavForScroll();

loadLanguage(storedLanguage).then(alignInitialHash).catch(() => {
  activeDictionary = {};
  applyStaticTranslations();
  refreshDynamicTexts();
  document.documentElement.lang = 'de';
  selectLanguageButton('de');
  alignInitialHash();
});
