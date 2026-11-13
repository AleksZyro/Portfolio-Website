const portfolioData = {
  projects: [
    {
      id: 'pathlab',
      title: 'PathLab',
      links: [
        { label: 'GitHub', url: 'https://github.com/AleksZyro/PathLab' },
        { label: 'Demo', url: 'https://alekszyro.github.io/PathLab/' }
      ],
      previewImage: 'assets/project-previews/pathlab.png',
      demoMedia: { src: 'assets/project-demos/pathlab-demo.webp', alt: 'Animierte PathLab-Demo' }
    },
    {
      id: 'sortlab',
      title: 'SortLab',
      links: [
        { label: 'GitHub', url: 'https://github.com/AleksZyro/SortLab' },
        { label: 'Demo', url: 'https://alekszyro.github.io/SortLab/' }
      ],
      previewImage: 'assets/project-previews/sortlab.png',
      demoMedia: { src: 'assets/project-demos/sortlab-demo.webp', alt: 'Animierte SortLab-Demo' }
    },
    {
      id: 'vsw',
      title: 'VSW - Vulnerability Scanner Web App',
      links: [
        { label: 'GitHub', url: 'https://github.com/BotondCsereklye/VSW' }
      ],
      previewImage: 'assets/project-previews/vsw.jpeg',
    },
    {
      id: 'foliolint',
      title: 'FolioLint',
      links: [
        { label: 'GitHub', url: 'https://github.com/AleksZyro/FolioLint' }
      ],
      previewImage: 'assets/project-previews/foliolint.png',
    },
    {
      id: 'internetEinAus',
      title: 'Internet ein und aus',
      links: [
        { label: 'GitHub', url: 'https://github.com/BotondCsereklye/internet-ein-aus' }
      ],
      previewImage: 'assets/project-previews/internet-ein-aus.png',
      demoMedia: { src: 'assets/project-demos/internet-ein-aus-demo.gif', alt: 'Animierte Demo von Internet ein und aus' }
    }
  ],
  moreProjects: [
    {
      id: 'twintype',
      title: 'TwinType',
      description: 'Kleineres Python-Projekt, das noch kompakt dokumentiert wird.',
      tags: ['Python'],
      url: 'https://github.com/AleksZyro/TwinType'
    },
    {
      id: 'lb259',
      title: 'LB259',
      description: 'Datenanalyse zum Energieverbrauch in der Stahlindustrie mit Python-Notebooks und linearer Regression.',
      tags: ['Daten', 'Notebook'],
      url: 'https://github.com/AleksZyro/LB259'
    },
    {
      id: 'heimatschutz',
      title: 'Heimatschutz Aargau',
      description: 'Gemeinsame interne Webanwendung zur Sammlung und Prüfung von Baugesuchen mit AGIS-Schutzdaten.',
      tags: ['Teamprojekt', 'Webanwendung'],
      url: 'https://github.com/Momik-jpg/Projekt-Heimatschutz-ANAMB'
    }
  ],
  certificates: [
    {
      id: 'ethicalHacker',
      title: 'Ethical Hacker',
      file: 'assets/certificates/ethical-hacker.pdf',
      previewImage: 'assets/certificate-previews/ethical-hacker.png',
    },
    {
      id: 'introCybersecurity',
      title: 'Introduction to Cybersecurity',
      file: 'assets/certificates/introduction-to-cybersecurity.pdf',
      previewImage: 'assets/certificate-previews/introduction-to-cybersecurity.png',
    },
    {
      id: 'bbbHackathon',
      title: 'BBB Hackathon',
      file: 'assets/certificates/bbb-hackathon.pdf',
      previewImage: 'assets/certificate-previews/bbb-hackathon-preview.png',
    },
    {
      id: 'absofort-ki-ollama',
      title: 'Lokale KI nutzen: private KI-Assistenz mit Ollama & Open-Source-Modellen',
      file: 'assets/certificates/absofort-zertifikat-491A67E697.pdf',
      previewImage: 'assets/certificate-previews/absofort-zertifikat-491A67E697.png',
    },
    {
      id: 'abacus-finanzbuchhaltung',
      title: 'ABACUS Finanzbuchhaltung',
      previewImage: 'assets/certificate-previews/abacus-finanzbuchhaltung.svg',
    },
    {
      id: 'linkedin-generative-ki',
      title: 'Was ist generative KI?',
      courseUrl: 'https://de.linkedin.com/learning/was-ist-generative-ki-22860708',
      previewImage: 'assets/certificate-previews/linkedin-generative-ki.svg',
    }
  ],
  techGroups: [
    {
      title: 'Frontend-Basics',
      items: ['html', 'css', 'javascript', 'typescript']
    },
    {
      title: 'Frontend-Runtime',
      items: ['react', 'vite', 'nodejs']
    },
    {
      title: 'Python und API',
      items: ['python', 'fastapi', 'pytest']
    },
    {
      title: 'Datenformate und Speicher',
      items: ['json', 'csv', 'sqlite']
    },
    {
      title: 'Weitere Sprachen und Frameworks',
      items: ['java', 'csharp', 'dotnet']
    },
    {
      title: 'Tools, Cloud und Automation',
      items: [
        'git', 'docker', 'powershell', 'batchfile', 'aws', 'openai'
      ]
    },
    {
      title: 'Hosting und Plattformen',
      items: ['netlify', 'vercel', 'wordpress', 'hostpoint', 'cloudflare']
    }
  ],
  openSourceContributions: [
    {
      id: 'leetcodeRanking543',
      repo: 'codepvg/leetcode-ranking',
      number: 543,
      url: 'https://github.com/codepvg/leetcode-ranking/pull/543'
    },
    {
      id: 'leetcodeRanking542',
      repo: 'codepvg/leetcode-ranking',
      number: 542,
      kind: 'issue',
      status: 'completed',
      url: 'https://github.com/codepvg/leetcode-ranking/issues/542'
    },
    {
      id: 'pipAudit553',
      repo: 'pypa/pip-audit',
      number: 553,
      kind: 'issue',
      status: 'completed',
      url: 'https://github.com/pypa/pip-audit/issues/553#event-31566567936'
    },
    {
      id: 'pipAudit1119',
      repo: 'pypa/pip-audit',
      number: 1119,
      url: 'https://github.com/pypa/pip-audit/pull/1119'
    },
    {
      id: 'vaultCleaner54',
      repo: 'tonym999/vault-cleaner',
      number: 54,
      url: 'https://github.com/tonym999/vault-cleaner/pull/54'
    },
    {
      id: 'agentcache38',
      repo: 'Yashwant00CR7/agentcache',
      number: 38,
      url: 'https://github.com/Yashwant00CR7/agentcache/pull/38'
    },
    {
      id: 'contextPilot36',
      repo: 'msousa202/ContextPilot',
      number: 36,
      url: 'https://github.com/msousa202/ContextPilot/pull/36'
    },
    {
      id: 'contextPilot47',
      repo: 'msousa202/ContextPilot',
      number: 47,
      url: 'https://github.com/msousa202/ContextPilot/pull/47'
    },
    {
      id: 'beets6837',
      repo: 'beetbox/beets',
      number: 6837,
      url: 'https://github.com/beetbox/beets/pull/6837'
    },
    {
      id: 'vaultCleaner75',
      repo: 'tonym999/vault-cleaner',
      number: 75,
      url: 'https://github.com/tonym999/vault-cleaner/pull/75'
    },
    {
      id: 'sshfs73',
      repo: 'fsspec/sshfs',
      number: 73,
      url: 'https://github.com/fsspec/sshfs/pull/73'
    },
    {
      id: 'archy397',
      repo: 'hslee16/Archy',
      number: 397,
      url: 'https://github.com/hslee16/Archy/pull/397'
    },
    {
      id: 'beets6839',
      repo: 'beetbox/beets',
      number: 6839,
      url: 'https://github.com/beetbox/beets/pull/6839'
    },
    {
      id: 'isort2616',
      repo: 'PyCQA/isort',
      number: 2616,
      url: 'https://github.com/PyCQA/isort/pull/2616'
    }
  ]
};
