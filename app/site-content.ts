import type { Locale } from "@/lib/i18n";

const asciiBanner = String.raw`
 ____                          ____       _
|  _ \  __ _ _ __  _ __  _   _/ ___|  ___| |__   __ _ _ __   ___
| | | |/ _\` | '_ \| '_ \| | | \___ \ / __| '_ \ / _\` | '_ \ / _ \
| |_| | (_| | | | | | | | |_| |___) | (__| | | | (_| | |_) |  __/
|____/ \__,_|_| |_|_| |_|\__, |____/ \___|_| |_|\__,_| .__/ \___|
                         |___/                        |_|
`;

export function getPortfolioContent(locale: Locale) {
  if (locale === "en") {
    return {
      profile: {
        name: "Danny Schapeit",
        role: "Software Engineer",
        focus: "Android, full-stack, architecture, deployment, and system integration",
        company: "SPEDION GmbH",
        location: "Germany",
        website: "danny.schapeit.com",
        intro: [
          "Hi, I'm Danny. I build production software with a focus on Android, full-stack systems, and long-term maintainability.",
          "My day-to-day work ranges from feature development and UI improvements to architecture, deployment, identity topics, and cloud infrastructure.",
          "I care a lot about sound technical decisions, privacy, security, and a codebase that stays understandable over time.",
        ],
      },
      experience: [
        {
          title: "Software Engineer",
          organization: "SPEDION GmbH",
          period: "07/2023 - today",
          description:
            "Further development of production Android and full-stack applications in an enterprise environment. Work on features, bug fixes, UI improvements, and technical integrations.",
          tags: ["Android", "Kotlin", "Full-stack", "Production systems"],
        },
        {
          title: "Trainer",
          organization: "SPEDION GmbH",
          period: "since 11/2024",
          description:
            "Mentoring and technical support for software development apprentices.",
          tags: ["Mentoring", "Training", "Code reviews"],
        },
        {
          title: "Apprenticeship in Application Development",
          organization: "SPEDION GmbH",
          period: "09/2020 - 07/2023",
          description:
            "Apprenticeship focused on software development, production systems, and modern engineering workflows.",
          tags: ["Apprenticeship", ".NET", "Web", "Mobile"],
        },
        {
          title: "Slynite",
          organization: "Open-source project",
          period: "2019 - today",
          description:
            "Concept and development of a platform focused on privacy, transparency, and sustainable technical learning.",
          tags: ["Open source", "Privacy", "Product design"],
        },
      ],
      projects: [
        {
          title: "SPEDION App",
          stack: "Android · Production system",
          description:
            "Feature development, bug fixing, and UI improvements including dark mode in the main product.",
        },
        {
          title: "SPEDION Navigation",
          stack: "Android",
          description:
            "Co-development of core components plus speed camera and notification engine.",
        },
        {
          title: "SPEDION DocScan",
          stack: "Android · Jetpack Compose",
          description:
            "Development of core features with GeniusSDK and modern UI flows in Compose.",
        },
        {
          title: "Monitoring Tool",
          stack: "Next.js + C# API",
          description:
            "Monitoring interface for visualizing and processing Nagios alerts.",
        },
        {
          title: "Kubernetes & Cloud Infrastructure",
          stack: "Kubernetes · ArgoCD · Kibana",
          description:
            "Team-based cluster setup, GitOps workflows, and containerization of .NET 8 applications.",
        },
        {
          title: "Identity & Access Management",
          stack: "Keycloak migration",
          description:
            "Adjustments across Android, iOS, and backend including a fallback mechanism for auth flows.",
        },
      ],
      skillGroups: [
        {
          title: "Mobile & App Development",
          items: [
            { name: "Java & Kotlin", level: 95, label: "Excellent" },
            { name: "Android / Jetpack Compose", level: 94, label: "Excellent" },
            { name: "TypeScript", level: 92, label: "Excellent" },
          ],
        },
        {
          title: "Web, Backend & Platform",
          items: [
            { name: "Next.js", level: 86, label: "Strong" },
            { name: "C# / .NET 8", level: 85, label: "Strong" },
            { name: "Docker & Kubernetes", level: 84, label: "Strong" },
            { name: "ArgoCD / Jenkins / Octopus", level: 80, label: "Strong" },
            { name: "Keycloak / IAM", level: 82, label: "Strong" },
          ],
        },
      ],
      education: [
        {
          title: "Application Development Apprenticeship",
          period: "2020 - 2023",
          details: "Berufsschule Obernburg",
        },
        {
          title: "Secondary school diploma",
          period: "2020",
          details: "Mittelschule Schöllkrippen",
        },
      ],
      certifications: [
        "Samsung Knox Certified Associate (2025)",
        "Samsung Galaxy Business Associate (2025)",
        "WeAreDevelopers World Congress attendee (2025)",
        "Trainer qualification, IHK (2024)",
      ],
      languages: [
        { name: "German", level: "Native" },
        { name: "English", level: "Professional working proficiency" },
      ],
      contactLinks: [
        { label: "Email", href: "mailto:danny@schapeit.com", value: "danny@schapeit.com" },
        { label: "GitHub", href: "https://github.com/d3nn7", value: "github.com/d3nn7" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/danny-schapeit-a23b5a232",
          value: "linkedin.com/in/danny-schapeit-a23b5a232",
        },
        { label: "Dev.to", href: "https://dev.to/d3nn7", value: "dev.to/d3nn7" },
      ],
      interests: ["Open source", "IT security", "Privacy", "Modern software architecture"],
      guestbookEntries: [
        { author: "xXCodingMasterXx", date: "14 Apr 2026 09:42", text: "Cool site. Feels like the GeoCities era in the best way." },
        { author: "SwiftNinja2000", date: "13 Apr 2026 16:20", text: "Finally someone who understands that Xcode is the real final boss." },
        { author: "HomelabHero", date: "12 Apr 2026 23:15", text: "Tailscale + Docker = love. Greetings from the server room." },
        { author: "RetroWebDev", date: "10 Apr 2026 11:33", text: "A website that doesn't look like every other one. About time." },
      ],
      clippyMessages: [
        "Welcome to the desktop. Use the icons on the left to jump between sections.",
        "The CV window contains experience, education, and certifications in separate tabs.",
        "The terminal knows a few commands. `help` is a good place to start.",
      ],
      asciiBanner,
      ui: {
        desktopLabels: {
          about: "Danny.exe",
          cv: "CV.doc",
          skills: "Skills.exe",
          projects: "Projects",
          console: "Terminal",
          guestbook: "Guestbook",
          contact: "Contact",
          recycle: "Recycle Bin",
        },
        menus: {
          file: "File",
          edit: "Edit",
          view: "View",
          help: "Help",
          format: "Format",
          insert: "Insert",
          extras: "Extras",
        },
        windowTitles: {
          about: "Danny Schapeit - System Properties",
          cv: "CV.doc - Microsoft Word 98",
          skills: "Skills.exe - Control Panel",
          projects: "C:\\Projects - Windows Explorer",
          console: "C:\\WINDOWS\\system32\\cmd.exe",
          guestbook: "Guestbook - Internet Explorer 5.0",
          contact: "Contact - Outlook Express",
        },
        windowStatus: {
          about: "Ready",
          cv: "Page 1 of 1",
          skills: "Skills loaded",
          console: "Console ready",
          contact: "Online (probably)",
        },
        about: {
          underConstruction: "*** under construction ***",
          bestView: "best viewed on desktop and mobile",
          visitorCount: "Visitor No. 031337",
          openCv: "Open CV",
          mail: "Mail",
          blog: "Blog",
        },
        cvTabs: {
          experience: "Experience",
          education: "Education",
          certs: "Certifications",
        },
        projectsCount: (count: number) => `${count} objects`,
        guestbookCount: (count: number) => `${count} entries`,
        contact: {
          languages: "Languages",
          interests: "Interests",
        },
        start: "Start",
        startMenuTitle: "Portfolio 98.2026",
        systemMessage: "System Message",
        ok: "OK",
        languageSwitcherLabel: "Language",
        switchLocale: "DE",
        switchPath: "/de",
        quickLinksPath: "/en/links",
        quickLinksLabel: "Links",
        contextMenu: {
          openAbout: "Open About",
          openCv: "Open CV",
          openTerminal: "Open Terminal",
          refreshDesktop: "Refresh Desktop",
          desktopRefreshed: "Desktop refreshed successfully. Nothing broke. ¯\\_(ツ)_/¯",
          bringToFront: (target: string) => `Bring ${target} to front`,
          minimize: "Minimize",
          close: "Close",
        },
        recycleMessage: "Recycle Bin contents:\n- old-portfolio-v1.html\n- node_modules/ (undeletable)\n\n¯\\_(ツ)_/¯",
        consoleBoot: [
          "Microsoft Windows [Version 98.2026]",
          "(c) Danny Schapeit. No rights reserved. ¯\\_(ツ)_/¯",
          "",
          "Available commands: help, about, skills, contact, coffee, matrix, clear, exit",
        ],
        consoleHelp: [
          "help - Help",
          "about - Short profile",
          "skills - Technologies",
          "contact - Contact",
          "coffee - Coffee",
          "matrix - ASCII",
          "clear - Clear",
          "exit - Minimize",
        ],
        consoleResponses: {
          about: ["Software engineer focused on Android, full-stack, and maintainable systems."],
          skills: ["Android", "Kotlin", "TypeScript", "Next.js", ".NET", "Docker", "Kubernetes"],
          contact: ["Email: danny@schapeit.com", "GitHub: github.com/d3nn7", "LinkedIn: linkedin.com/in/danny-schapeit-a23b5a232"],
          coffee: ["Coffee mode enabled.", "Productivity +12%."],
          matrix: ["01000100 01100001 01101110 01101110 01111001", "wake up, developer..."],
        },
        consoleUnknown: (command: string) => `'${command}' is not a valid command.`,
        consoleExit: "Terminal is being minimized...",
        menuActionMessages: {
          mailCopied: "Email copied.",
          editDecorative: "Edit.exe is decorative. ¯\\_(ツ)_/¯",
          retroHelp: "Retro help: windows can be clicked, moved, and focused via the taskbar.",
          formattingChecked: "Formatting checked successfully. 800x600 approved.",
          pasteEmpty: "Nothing to paste yet. Maybe later via floppy import.",
          optionsOpened: "Options opened: more CRT, more bevel, more Y2K.",
          maximizeLater: "Maximize will arrive in Build 98.2026.",
        },
        menuActionLabels: {
          focusWindow: (target: string) => `Window ${target}`,
          minimize: "Minimize",
          close: "Close",
          openExternal: "Open external link",
          copyEmail: "Copy email",
          showInfo: "Show info",
        },
        commandPaletteHint: "help is a good start.",
      },
    };
  }

  return {
    profile: {
      name: "Danny Schapeit",
      role: "Softwareentwickler",
      focus: "Android, Fullstack, Architektur, Deployment und Systemintegration",
      company: "SPEDION GmbH",
      location: "Deutschland",
      website: "danny.schapeit.com",
      intro: [
        "Hallo, ich bin Danny. Ich entwickle produktive Software mit Fokus auf Android, Fullstack und langfristig wartbare Systeme.",
        "Mein Arbeitsalltag reicht von Feature-Entwicklung und UI-Verbesserungen bis zu Architektur, Deployment, Identity-Themen und Cloud-Infrastruktur.",
        "Besonders wichtig sind mir saubere technische Entscheidungen, Privacy, Security und ein nachvollziehbarer Codebestand.",
      ],
    },
    experience: [
      {
        title: "Software Engineer",
        organization: "SPEDION GmbH",
        period: "07/2023 - heute",
        description:
          "Weiterentwicklung produktiver Android- und Fullstack-Anwendungen im Unternehmensumfeld. Arbeit an Features, Bugfixes, UI-Verbesserungen und technischen Integrationen.",
        tags: ["Android", "Kotlin", "Fullstack", "Produktivsysteme"],
      },
      {
        title: "Ausbilder",
        organization: "SPEDION GmbH",
        period: "seit 11/2024",
        description:
          "Begleitung und fachliche Unterstützung von Fachinformatiker-Auszubildenden im Bereich Anwendungsentwicklung.",
        tags: ["Mentoring", "Ausbildung", "Code Reviews"],
      },
      {
        title: "Ausbildung Fachinformatiker Anwendungsentwicklung",
        organization: "SPEDION GmbH",
        period: "09/2020 - 07/2023",
        description:
          "Ausbildung mit Fokus auf Softwareentwicklung, produktive Systeme und moderne Entwicklungsprozesse.",
        tags: ["Ausbildung", ".NET", "Web", "Mobile"],
      },
      {
        title: "Slynite",
        organization: "Open-Source-Projekt",
        period: "2019 - heute",
        description:
          "Konzeption und Entwicklung einer Plattform mit Fokus auf Privacy, Transparenz und nachhaltigem technischen Lernen.",
        tags: ["Open Source", "Privacy", "Produktkonzeption"],
      },
    ],
    projects: [
      {
        title: "SPEDION App",
        stack: "Android · Produktivsystem",
        description:
          "Feature-Entwicklung, Bugfixing und UI-Verbesserungen inklusive Dark Mode im Hauptprodukt.",
      },
      {
        title: "SPEDION Navigation",
        stack: "Android",
        description:
          "Mitentwicklung zentraler Komponenten sowie Blitzer- und Benachrichtigungs-Engine.",
      },
      {
        title: "SPEDION DocScan",
        stack: "Android · Jetpack Compose",
        description:
          "Entwicklung zentraler Features mit GeniusSDK und Umsetzung moderner UI-Flows via Compose.",
      },
      {
        title: "Monitoring Tool",
        stack: "Next.js + C# API",
        description:
          "Monitoring-Oberfläche zur Visualisierung und Verarbeitung von Nagios-Meldungen.",
      },
      {
        title: "Kubernetes & Cloud-Infrastruktur",
        stack: "Kubernetes · ArgoCD · Kibana",
        description:
          "Cluster-Aufbau im Team, GitOps-Workflows und Containerisierung von .NET-8-Anwendungen.",
      },
      {
        title: "Identity & Access Management",
        stack: "Keycloak-Migration",
        description:
          "Anpassungen in Android, iOS und Backend inklusive Fallback-Mechanismus für Auth-Flows.",
      },
    ],
    skillGroups: [
      {
        title: "Mobile & App Development",
        items: [
          { name: "Java & Kotlin", level: 95, label: "Sehr gut" },
          { name: "Android / Jetpack Compose", level: 94, label: "Sehr gut" },
          { name: "TypeScript", level: 92, label: "Sehr gut" },
        ],
      },
      {
        title: "Web, Backend & Plattform",
        items: [
          { name: "Next.js", level: 86, label: "Gut" },
          { name: "C# / .NET 8", level: 85, label: "Gut" },
          { name: "Docker & Kubernetes", level: 84, label: "Gut" },
          { name: "ArgoCD / Jenkins / Octopus", level: 80, label: "Gut" },
          { name: "Keycloak / IAM", level: 82, label: "Gut" },
        ],
      },
    ],
    education: [
      {
        title: "Fachinformatiker für Anwendungsentwicklung",
        period: "2020 - 2023",
        details: "Berufsschule Obernburg",
      },
      {
        title: "Realschulabschluss",
        period: "2020",
        details: "Mittelschule Schöllkrippen",
      },
    ],
    certifications: [
      "Samsung Knox Certified Associate (2025)",
      "Samsung Galaxy Business Associate (2025)",
      "WeAreDevelopers World Congress Teilnahme (2025)",
      "Ausbilder-Eignung, IHK (2024)",
    ],
    languages: [
      { name: "Deutsch", level: "Muttersprache" },
      { name: "Englisch", level: "Verhandlungssicher im Arbeitsalltag" },
    ],
    contactLinks: [
      { label: "E-Mail", href: "mailto:danny@schapeit.com", value: "danny@schapeit.com" },
      { label: "GitHub", href: "https://github.com/d3nn7", value: "github.com/d3nn7" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/danny-schapeit-a23b5a232",
        value: "linkedin.com/in/danny-schapeit-a23b5a232",
      },
      { label: "Dev.to", href: "https://dev.to/d3nn7", value: "dev.to/d3nn7" },
    ],
    interests: [
      "Open Source",
      "IT-Sicherheit",
      "Privacy",
      "Moderne Softwarearchitektur",
    ],
    guestbookEntries: [
      { author: "xXCodingMasterXx", date: "14.04.2026 09:42", text: "Coole Seite. Erinnert mich an GeoCities-Zeiten. Weiter so!" },
      { author: "SwiftNinja2000", date: "13.04.2026 16:20", text: "Endlich versteht jemand, dass Xcode der wahre Endgegner ist." },
      { author: "HomelabHero", date: "12.04.2026 23:15", text: "Tailscale + Docker = Liebe. Grüße aus dem Serverraum!" },
      { author: "RetroWebDev", date: "10.04.2026 11:33", text: "Endlich eine Seite, die nicht aussieht wie jede andere." },
    ],
    clippyMessages: [
      "Willkommen auf dem Desktop. Mit den Icons links springst du direkt in die einzelnen Bereiche.",
      "Im CV-Fenster findest du Erfahrung, Ausbildung und Zertifikate in eigenen Tabs.",
      "Das Terminal kennt ein paar kleine Kommandos. „help“ ist ein guter Start.",
    ],
    asciiBanner,
    ui: {
      desktopLabels: {
        about: "Danny.exe",
        cv: "CV.doc",
        skills: "Skills.exe",
        projects: "Projekte",
        console: "Terminal",
        guestbook: "Gästebuch",
        contact: "Kontakt",
        recycle: "Papierkorb",
      },
      menus: {
        file: "Datei",
        edit: "Bearbeiten",
        view: "Ansicht",
        help: "Hilfe",
        format: "Format",
        insert: "Einfügen",
        extras: "Extras",
      },
      windowTitles: {
        about: "Danny Schapeit - Systemeigenschaften",
        cv: "CV.doc - Microsoft Word 98",
        skills: "Skills.exe - Systemsteuerung",
        projects: "C:\\Projekte - Windows Explorer",
        console: "C:\\WINDOWS\\system32\\cmd.exe",
        guestbook: "Gästebuch - Internet Explorer 5.0",
        contact: "Kontakt - Outlook Express",
      },
      windowStatus: {
        about: "Bereit",
        cv: "Seite 1 von 1",
        skills: "Skills geladen",
        console: "Konsole bereit",
        contact: "Online (wahrscheinlich)",
      },
      about: {
        underConstruction: "*** under construction ***",
        bestView: "beste Ansicht: Desktop und Mobile",
        visitorCount: "Besucher Nr. 031337",
        openCv: "CV öffnen",
        mail: "Mail",
        blog: "Blog",
      },
      cvTabs: {
        experience: "Erfahrung",
        education: "Ausbildung",
        certs: "Zertifikate",
      },
      projectsCount: (count: number) => `${count} Objekte`,
      guestbookCount: (count: number) => `${count} Einträge`,
      contact: {
        languages: "Sprachen",
        interests: "Interessen",
      },
      start: "Start",
      startMenuTitle: "Portfolio 98.2026",
      systemMessage: "Systemmeldung",
      ok: "OK",
      languageSwitcherLabel: "Sprache",
      switchLocale: "EN",
      switchPath: "/en",
      quickLinksPath: "/de/links",
      quickLinksLabel: "Links",
      contextMenu: {
        openAbout: "Über mich öffnen",
        openCv: "CV öffnen",
        openTerminal: "Terminal öffnen",
        refreshDesktop: "Desktop aktualisieren",
        desktopRefreshed: "Desktop erfolgreich aktualisiert. Nichts ist kaputt gegangen. ¯\\_(ツ)_/¯",
        bringToFront: (target: string) => `${target} nach vorne`,
        minimize: "Minimieren",
        close: "Schließen",
      },
      recycleMessage: "Papierkorb-Inhalt:\n- alte-portfolio-v1.html\n- node_modules/ (unlöschbar)\n\n¯\\_(ツ)_/¯",
      consoleBoot: [
        "Microsoft Windows [Version 98.2026]",
        "(c) Danny Schapeit. Keine Rechte vorbehalten. ¯\\_(ツ)_/¯",
        "",
        "Verfügbare Befehle: help, about, skills, contact, coffee, matrix, clear, exit",
      ],
      consoleHelp: [
        "help - Hilfe",
        "about - Kurzprofil",
        "skills - Technologien",
        "contact - Kontakt",
        "coffee - Kaffee",
        "matrix - ASCII",
        "clear - Leeren",
        "exit - Minimieren",
      ],
      consoleResponses: {
        about: ["Softwareentwickler mit Fokus auf Android, Fullstack und wartbare Systeme."],
        skills: ["Android", "Kotlin", "TypeScript", "Next.js", ".NET", "Docker", "Kubernetes"],
        contact: ["E-Mail: danny@schapeit.com", "GitHub: github.com/d3nn7", "LinkedIn: linkedin.com/in/danny-schapeit-a23b5a232"],
        coffee: ["Kaffee-Modus aktiv.", "Produktivität +12 %."],
        matrix: ["01000100 01100001 01101110 01101110 01111001", "wake up, developer..."],
      },
      consoleUnknown: (command: string) => `'${command}' ist kein gültiger Befehl.`,
      consoleExit: "Terminal wird minimiert...",
      menuActionMessages: {
        mailCopied: "E-Mail kopiert.",
        editDecorative: "Bearbeiten.exe ist dekorativ. ¯\\_(ツ)_/¯",
        retroHelp: "Retro-Hilfe: Fenster sind klickbar, verschiebbar und per Taskbar fokussierbar.",
        formattingChecked: "Formatierung erfolgreich geprüft. 800x600 approved.",
        pasteEmpty: "Noch nichts zum Einfügen. Vielleicht später per Floppy-Import.",
        optionsOpened: "Optionen geöffnet: mehr CRT, mehr Bevel, mehr Y2K.",
        maximizeLater: "Maximieren folgt in Build 98.2026.",
      },
      menuActionLabels: {
        focusWindow: (target: string) => `Fenster ${target}`,
        minimize: "Minimieren",
        close: "Schließen",
        openExternal: "Externen Link öffnen",
        copyEmail: "E-Mail kopieren",
        showInfo: "Info anzeigen",
      },
      commandPaletteHint: "„help“ ist ein guter Start.",
    },
  };
}

export function getLinksPageUi(locale: Locale) {
  if (locale === "en") {
    return {
      errorKicker: "System error",
      errorTitle: "Links could not be loaded.",
      errorCopy: "The source at /api/links did not return a valid response.",
      loadingKicker: "Connection",
      loadingTitle: "Loading links...",
      headline: "Links.exe",
      statusLabel: "Status",
      featuredTitle: "Quick Access",
      featuredCopy: "The most important contact points first.",
      moreTitle: "More",
      moreCopy: "Additional channels and the main site.",
      switchLocale: "DE",
      switchPath: "/de/links",
      homePath: "/en",
      homeLabel: "Desktop",
    };
  }

  return {
    errorKicker: "Systemfehler",
    errorTitle: "Links konnten nicht geladen werden.",
    errorCopy: "Die Quelle unter /api/links hat aktuell keine gültige Antwort geliefert.",
    loadingKicker: "Verbindung",
    loadingTitle: "Links werden geladen...",
    headline: "Links.exe",
    statusLabel: "Status",
    featuredTitle: "Schnellzugriff",
    featuredCopy: "Die wichtigsten Kontaktpunkte zuerst.",
    moreTitle: "Mehr",
    moreCopy: "Weitere Kanäle und die Hauptseite.",
    switchLocale: "EN",
    switchPath: "/en/links",
    homePath: "/de",
    homeLabel: "Desktop",
  };
}

export function getNotFoundContent(locale: Locale) {
  if (locale === "en") {
    return {
      titlebar: "404 - Game Over",
      kicker: "404",
      title: "This page could not be found.",
      description: "One wrong click. Back to the homepage or switch to the German desktop.",
      home: "Back to Home",
      secondary: "Deutsche Version",
    };
  }

  return {
    titlebar: "404 - Spiel vorbei",
    kicker: "404",
    title: "Diese Seite wurde nicht gefunden.",
    description: "Ein falscher Klick. Zurück zur Startseite oder direkt zur englischen Version.",
    home: "Zur Startseite",
    secondary: "English Version",
  };
}
