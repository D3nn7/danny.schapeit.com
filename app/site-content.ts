export const desktopLinks = [
  { href: "#about", icon: "💻", label: "System" },
  { href: "#experience", icon: "📄", label: "CV.doc" },
  { href: "#skills", icon: "🔧", label: "Skills.exe" },
  { href: "#projects", icon: "📁", label: "Projekte" },
  { href: "#contact", icon: "📧", label: "Kontakt" },
] as const;

export const profile = {
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
} as const;

export const quickLinks = [
  { href: "/cv", label: "CV ansehen" },
  { href: "mailto:danny@schapeit.com", label: "E-Mail schreiben" },
  { href: "https://dev.to/d3nn7", label: "Blog lesen", external: true },
] as const;

export const experience = [
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
] as const;

export const projects = [
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
    title: "Kubernetes & Cloud Infrastruktur",
    stack: "Kubernetes · ArgoCD · Kibana",
    description:
      "Cluster-Aufbau im Team, GitOps-Workflows und Containerisierung von .NET-8-Anwendungen.",
  },
  {
    title: "Identity & Access Management",
    stack: "Keycloak Migration",
    description:
      "Anpassungen in Android, iOS und Backend inklusive Fallback-Mechanismus für Auth-Flows.",
  },
] as const;

export const skillGroups = [
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
] as const;

export const education = [
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
] as const;

export const certifications = [
  "Samsung Knox Certified Associate (2025)",
  "Samsung Galaxy Business Associate (2025)",
  "WeAreDevelopers World Congress Teilnahme (2025)",
  "Ausbilder-Eignung, IHK (2024)",
] as const;

export const languages = [
  { name: "Deutsch", level: "Muttersprache" },
  { name: "Englisch", level: "Verhandlungssicher im Arbeitsalltag" },
] as const;

export const contactLinks = [
  { label: "E-Mail", href: "mailto:danny@schapeit.com", value: "danny@schapeit.com" },
  { label: "GitHub", href: "https://github.com/d3nn7", value: "github.com/d3nn7" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danny-schapeit-a23b5a232",
    value: "linkedin.com/in/danny-schapeit-a23b5a232",
  },
  { label: "Dev.to", href: "https://dev.to/d3nn7", value: "dev.to/d3nn7" },
] as const;

export const interests = [
  "Open Source",
  "IT-Sicherheit",
  "Privacy",
  "Moderne Softwarearchitektur",
] as const;
