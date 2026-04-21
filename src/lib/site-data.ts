export type Language = "it" | "en";
export type ThemeMode = "dark" | "light";

export type LocalizedText = Record<Language, string>;

export const siteConfig = {
  name: "Alessandro Fontana",
  shortName: "AF",
  role: {
    it: "Freelance Full Stack Developer",
    en: "Freelance Full Stack Developer",
  },
  direction: {
    it: "Specializzato in AI Engineering",
    en: "Specializing in AI Engineering",
  },
  leadership: {
    it: "Head of Software Development and AI Integrations presso Hulk International Broker dal 2026",
    en: "Head of Software Development and AI Integrations at Hulk International Broker since 2026",
  },
  location: {
    it: "Piemonte, Italia",
    en: "Piedmont, Italy",
  },
  email: "fontana.alessandro97@gmail.com",
  phone: "+39 342 109 4829",
  url: "https://fonta.dev",
  social: {
    github: "https://github.com/Fonta97",
    linkedin: "https://linkedin.com/in/Fonta97",
    instagram: "https://instagram.com/therealfonta",
  },
};

export const navItems = [
  { label: { it: "Lavori", en: "Work" }, href: "/#work" },
  { label: { it: "Servizi", en: "Services" }, href: "/#services" },
  { label: { it: "Processo", en: "Process" }, href: "/#process" },
  { label: { it: "Profilo", en: "About" }, href: "/#about" },
  { label: { it: "Contatto", en: "Contact" }, href: "/#contact" },
] as const;

export const pageCopy = {
  it: {
    headerCta: "Avvia progetto",
    languageLabel: "Lingua",
    themeLabel: "Tema",
    hero: {
      eyebrow: "Piemonte, Italia / progetti da remoto",
      title: "Sistemi full stack per aziende ambiziose.",
      lead:
        "Sono Alessandro Fontana. Costruisco siti premium, piattaforme custom, e-commerce, gestionali e workflow AI per aziende che hanno bisogno di tecnologia solida, veloce e misurabile.",
      primary: "Avvia un progetto",
      secondary: "Guarda i lavori",
      statusLabel: "Focus attuale",
      statusValue: "AI Engineering",
      leadership: "Head of Software Development and AI Integrations / Hulk International Broker",
    },
    cinematic: {
      stack: ["PRODOTTI WEB", "SISTEMI AI", "WORKFLOW REALI"],
      label: "01 / Direzione",
      text:
        "Sviluppo web di fascia alta, architettura software e integrazioni AI pensate per processi reali, non per demo da portfolio.",
      chips: ["Architettura chiara", "Delivery veloce", "Impatto operativo"],
    },
    visualProof: {
      eyebrow: "Ambienti di lavoro",
      title: "Interfacce, automazioni e sistemi che devono reggere la produzione.",
      text:
        "Una panoramica visiva dei contesti in cui progetto: dashboard operative, flussi AI, commerce e strumenti costruiti per essere usati ogni giorno, non solo mostrati.",
    },
    magicBento: {
      eyebrow: "Sistema operativo",
      title: "Un layer in piu per orchestrare prodotto, AI e delivery.",
      text:
        "Una sezione ispirata a Magic UI per raccontare come collego file, notifiche, integrazioni e planning dentro un ecosistema di lavoro pulito e leggibile.",
    },
    work: {
      eyebrow: "Lavori selezionati",
      title: "Case study sintetici, concreti, scalabili.",
      text:
        "Case study costruiti a partire da progetti reali su retail, WordPress, gestionali, tool interni e AI engineering.",
      rail: ["Sviluppo web", "Strumenti interni", "AI engineering"],
    },
    services: {
      eyebrow: "Servizi",
      title: "Progetto soluzioni per problemi di business, non liste di feature.",
    },
    process: {
      eyebrow: "Processo",
      title: "Un percorso preciso dall'idea al rilascio.",
      text:
        "Ridurre ambiguita, scegliere bene l'architettura e costruire in modo sostenibile: il risultato deve funzionare oggi e restare manutenibile domani.",
    },
    capabilities: {
      eyebrow: "Competenze",
      title: "Uno stack scelto per risultati duraturi.",
      text:
        "Frontend moderno, backend pragmatico, CMS, commerce, automazioni e delivery con attenzione a performance, SEO e accessibilita.",
    },
    about: {
      eyebrow: "Profilo",
      title: "Partner tecnico per prodotti web che devono lavorare sul serio.",
      paragraphs: [
        "Sono un Full Stack Web Developer con esperienza su applicazioni custom, gestionali aziendali, e-commerce e piattaforme digitali. Arrivo da un percorso retail management e porto nel codice una lettura concreta di processi, vendite e operativita.",
        "Dal 2026 lavoro anche per Hulk International Broker come Head of Software Development and AI Integrations, guidando sviluppo software e integrazioni AI con una visione orientata a sistemi affidabili, automazioni controllate e impatto operativo.",
        "Ho lavorato su Shopify enterprise retail, gestionali .NET/Angular integrati con oltre 50 API REST, WordPress headless, plugin di import/export, landing React e backend Node/PHP/Laravel.",
      ],
      facts: ["React / Next.js / Angular", "WordPress / PHP / Laravel", ".NET / SQL Server / API", "Node.js / AI workflows"],
      personalSummary: "Segnale personale",
      personalText:
        "Instagram resta in secondo piano, dove ha senso per questo sito. Per vedere qualcosa di piu leggero dietro ai sistemi:",
    },
    faq: {
      eyebrow: "Risposte",
      title: "Contesto utile prima di una prima call.",
    },
    contact: {
      eyebrow: "Avvia un progetto",
      title: "Raccontami cosa vuoi costruire.",
      text:
        "Mandami un brief sintetico: ti aiuto a chiarire la strada tecnica migliore per sito premium, piattaforma custom, e-commerce, gestionale o automazione AI.",
      form: {
        name: "Nome",
        email: "Email",
        project: "Tipo progetto",
        budget: "Budget / timeline",
        message: "Messaggio",
        placeholderBudget: "Esempio: lancio entro 6 settimane",
        placeholderMessage: "Dimmi cosa vuoi costruire, migliorare o automatizzare.",
        button: "Invia brief",
        status: "La tua app email dovrebbe aprirsi con il brief gia compilato.",
        options: ["Piattaforma custom", "WordPress o CMS", "E-commerce", "AI automation", "Landing page", "Altro"],
      },
    },
    footerRole: "Freelance Full Stack Developer / AI Engineering",
    backToWork: "Torna ai lavori",
    projectCtaTitle: "Ti serve un sistema simile?",
    projectCtaLink: "Avvia un brief",
    projectLabels: {
      year: "Anno",
      role: "Ruolo",
      result: "Risultato",
      challenge: "Sfida",
      approach: "Approccio",
      outcome: "Esito",
      stack: "Stack tecnico",
      next: "Prossimo passo",
    },
  },
  en: {
    headerCta: "Start a project",
    languageLabel: "Language",
    themeLabel: "Theme",
    hero: {
      eyebrow: "Piedmont, Italy / remote projects",
      title: "Full stack systems for ambitious businesses.",
      lead:
        "I am Alessandro Fontana. I build premium websites, custom platforms, e-commerce, internal tools, and AI workflows for companies that need technology to be solid, fast, and measurable.",
      primary: "Start a project",
      secondary: "View selected work",
      statusLabel: "Current focus",
      statusValue: "AI Engineering",
      leadership: "Head of Software Development and AI Integrations / Hulk International Broker",
    },
    cinematic: {
      stack: ["WEB PRODUCTS", "AI SYSTEMS", "REAL WORKFLOWS"],
      label: "01 / Direction",
      text:
        "High-end web development, software architecture, and AI integrations shaped around real operations, not portfolio demos.",
      chips: ["Clear architecture", "Fast delivery", "Operational impact"],
    },
    visualProof: {
      eyebrow: "Working environments",
      title: "Interfaces, automations, and systems built for production pressure.",
      text:
        "A visual overview of the environments I design for: operational dashboards, AI workflows, commerce, and tools meant to be used daily, not just presented.",
    },
    magicBento: {
      eyebrow: "Operating layer",
      title: "An extra layer to orchestrate product, AI, and delivery.",
      text:
        "A Magic UI-inspired section that shows how I connect files, notifications, integrations, and planning into a cleaner working system.",
    },
    work: {
      eyebrow: "Selected work",
      title: "Concise case studies, grounded and expandable.",
      text:
        "Case studies shaped from real delivery work across retail, WordPress, business systems, internal tooling, and AI engineering.",
      rail: ["Web development", "Internal tools", "AI engineering"],
    },
    services: {
      eyebrow: "Services",
      title: "Designed for business problems, not feature checklists.",
    },
    process: {
      eyebrow: "Process",
      title: "A precise route from idea to launch.",
      text:
        "Reduce ambiguity, choose the right architecture, and build sustainably. The product needs to work now and remain maintainable later.",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "A stack chosen for durable outcomes.",
      text:
        "Modern frontend, pragmatic backend, CMS, commerce, automations, and delivery with attention to performance, SEO, and accessibility.",
    },
    about: {
      eyebrow: "About",
      title: "A technical partner for web products that have to work hard.",
      paragraphs: [
        "I am a Full Stack Web Developer with experience across custom applications, business management systems, e-commerce, and digital platforms. My retail management background helps me read operations, sales, and workflows with practical clarity.",
        "Since 2026 I also work for Hulk International Broker as Head of Software Development and AI Integrations, leading software development and AI integration work with a focus on reliable systems, controlled automation, and operational impact.",
        "My work includes enterprise retail Shopify, .NET/Angular business systems connected through 50+ REST APIs, headless WordPress, import/export plugins, React landing pages, and Node/PHP/Laravel backends.",
      ],
      facts: ["React / Next.js / Angular", "WordPress / PHP / Laravel", ".NET / SQL Server / APIs", "Node.js / AI workflows"],
      personalSummary: "Personal signal",
      personalText:
        "Instagram stays in the background, where it belongs for this site. For a lighter look behind the systems:",
    },
    faq: {
      eyebrow: "Answers",
      title: "Useful context before a first call.",
    },
    contact: {
      eyebrow: "Start a project",
      title: "Tell me what you want to build next.",
      text:
        "Send a concise brief and I will help you clarify the right technical path for a premium website, custom platform, e-commerce system, internal tool, or AI automation.",
      form: {
        name: "Name",
        email: "Email",
        project: "Project type",
        budget: "Budget / timeline",
        message: "Message",
        placeholderBudget: "Example: launch in 6 weeks",
        placeholderMessage: "Tell me what you want to build, improve, or automate.",
        button: "Send project brief",
        status: "Your email app should open with the project details ready.",
        options: ["Custom web platform", "WordPress or CMS", "E-commerce", "AI automation", "Landing page", "Other"],
      },
    },
    footerRole: "Freelance Full Stack Developer / AI Engineering",
    backToWork: "Back to selected work",
    projectCtaTitle: "Need a system like this?",
    projectCtaLink: "Start a project brief",
    projectLabels: {
      year: "Year",
      role: "Role",
      result: "Result",
      challenge: "Challenge",
      approach: "Approach",
      outcome: "Outcome",
      stack: "Technology stack",
      next: "Next step",
    },
  },
} as const;

export const stockImages = [
  {
    src: "/assets/stock-ai-workspace.jpg",
    alt: {
      it: "Workspace tecnologico con laptop e interfacce digitali",
      en: "Technology workspace with laptop and digital interfaces",
    },
    title: {
      it: "AI e automazioni",
      en: "AI and automations",
    },
  },
  {
    src: "/assets/stock-systems-dashboard.jpg",
    alt: {
      it: "Dashboard dati per sistemi aziendali",
      en: "Data dashboard for business systems",
    },
    title: {
      it: "Sistemi operativi",
      en: "Operational systems",
    },
  },
  {
    src: "/assets/stock-commerce.jpg",
    alt: {
      it: "Esperienza e-commerce e pagamenti digitali",
      en: "E-commerce and digital payment experience",
    },
    title: {
      it: "Commerce e conversione",
      en: "Commerce and conversion",
    },
  },
] as const;

export const projects = [
  {
    slug: "hulk-software-ai-integrations",
    title: {
      it: "Hulk International Broker Software & AI",
      en: "Hulk International Broker Software & AI",
    },
    year: "2026",
    category: { it: "Leadership tecnica / AI", en: "Technical Leadership / AI" },
    short: {
      it: "Direzione sviluppo software e integrazioni AI per processi aziendali con focus su affidabilita, automazione e impatto operativo.",
      en: "Software development and AI integration leadership for business processes, focused on reliability, automation, and operational impact.",
    },
    description: {
      it: "Dal 2026 collaboro con Hulk International Broker come Head of Software Development and AI Integrations, guidando sistemi software e workflow AI controllati.",
      en: "Since 2026 I work with Hulk International Broker as Head of Software Development and AI Integrations, leading software systems and controlled AI workflows.",
    },
    client: {
      it: "Hulk International Broker",
      en: "Hulk International Broker",
    },
    role: { it: "Head of Software Development and AI Integrations", en: "Head of Software Development and AI Integrations" },
    result: {
      it: "Direzione tecnica piu chiara, basi per automazioni affidabili e integrazioni pensate per processi reali.",
      en: "Clearer technical direction, foundations for reliable automation, and integrations designed around real workflows.",
    },
    stack: ["AI Workflows", "Software Architecture", "APIs", "Automation", "Business Systems"],
    tags: ["AI", "Leadership", "Ops"],
    accent: "violet",
    challenge: {
      it: "Portare AI e sviluppo software dentro processi aziendali senza perdere controllo, affidabilita e chiarezza operativa.",
      en: "Bring AI and software development into business processes without losing control, reliability, or operational clarity.",
    },
    approach: {
      it: "Definizione di workflow supervisionati, integrazioni modulari, priorita tecniche e basi architetturali per evolvere in modo sostenibile.",
      en: "Defined supervised workflows, modular integrations, technical priorities, and architectural foundations for sustainable evolution.",
    },
    outcome: {
      it: "La tecnologia diventa un livello operativo governabile: meno lavoro manuale, piu tracciabilita e un percorso realistico verso l'AI Engineering.",
      en: "Technology becomes a controllable operations layer: less manual work, more traceability, and a realistic path toward AI Engineering.",
    },
    visual: {
      backgroundSrc: "/assets/case-studies/hib-office.jpg",
      backgroundAlt: {
        it: "Immagine aziendale usata come mood visivo per Hulk International Broker",
        en: "Business image used as visual mood for Hulk International Broker",
      },
      foregroundSrc: "/assets/case-studies/hib-logo.png",
      foregroundAlt: {
        it: "Logo Hulk International Broker",
        en: "Hulk International Broker logo",
      },
      foregroundFit: "contain",
    },
  },
  {
    slug: "beppino-occelli-management-system",
    title: {
      it: "Gestionale Modulare Beppino Occelli",
      en: "Beppino Occelli Modular Management System",
    },
    year: "2024-2025",
    category: { it: "Gestionale / API", en: "Business System / API" },
    short: {
      it: "Gestionale modulare .NET 8 + Angular 17 per commerciale, e-commerce, logistica e contabilita, integrato con Shopify tramite 50+ API REST.",
      en: ".NET 8 + Angular 17 modular management system for sales, e-commerce, logistics, and accounting, connected to Shopify through 50+ REST APIs.",
    },
    description: {
      it: "Sistema aziendale con sincronizzazione ordini, stock e fatturazione, migrazione da core VB legacy e ottimizzazione SQL Server.",
      en: "Business platform handling orders, stock, and invoicing sync, legacy VB migration, and SQL Server optimization.",
    },
    client: {
      it: "Beppino Occelli",
      en: "Beppino Occelli",
    },
    role: { it: "Developer IT interno / ownership backend e frontend", en: "Internal IT Developer / backend and frontend ownership" },
    result: {
      it: "Oltre 100 ordini/giorno sincronizzati, stock allineato e flussi aziendali piu affidabili.",
      en: "100+ daily orders synchronized, aligned stock, and more reliable business workflows.",
    },
    stack: [".NET 8", "Angular 17", "SQL Server", "Shopify API", "OAuth2", "HMAC"],
    tags: ["ERP", "API", "Retail"],
    accent: "cyan",
    challenge: {
      it: "Modernizzare un core legacy e collegare dati commerciali, e-commerce, logistica e contabilita senza interrompere l'operativita.",
      en: "Modernize a legacy core and connect sales, e-commerce, logistics, and accounting data without interrupting operations.",
    },
    approach: {
      it: "Architettura MVC .NET, frontend Angular, oltre 50 API proprietarie, autenticazione OAuth2/HMAC e ottimizzazione query/stored procedure.",
      en: "MVC .NET architecture, Angular frontend, 50+ proprietary APIs, OAuth2/HMAC authentication, and query/stored procedure optimization.",
    },
    outcome: {
      it: "Un gestionale piu scalabile, con continuita dei flussi, pipeline di rilascio supervisionata e dati Shopify piu affidabili.",
      en: "A more scalable management system, stronger workflow continuity, supervised release pipeline, and more reliable Shopify data.",
    },
    visual: {
      backgroundSrc: "/assets/case-studies/occelli-hero.png",
      backgroundAlt: {
        it: "Prodotto Beppino Occelli usato come immagine di supporto per il case study",
        en: "Beppino Occelli product used as supporting image for the case study",
      },
      foregroundSrc: "/assets/case-studies/occelli-logo.jpg",
      foregroundAlt: {
        it: "Logo Beppino Occelli",
        en: "Beppino Occelli logo",
      },
      foregroundFit: "contain",
    },
  },
  {
    slug: "shopify-enterprise-retail",
    title: {
      it: "Shopify Retail Custom per Terranova",
      en: "Terranova Custom Shopify Retail",
    },
    year: "2026",
    category: { it: "E-commerce", en: "E-commerce" },
    short: {
      it: "Sviluppo Shopify custom per contesti retail fashion, con sezioni, logiche frontend e componenti in linea con campagne, merchandising e brand identity.",
      en: "Custom Shopify development for fashion retail contexts, with sections, frontend logic, and components aligned with campaigns, merchandising, and brand identity.",
    },
    description: {
      it: "Supporto Shopify su scenari retail ad alta frequenza promozionale, con focus su performance, coerenza visiva e affidabilita in produzione.",
      en: "Shopify support for high-frequency retail scenarios, focused on performance, visual consistency, and production reliability.",
    },
    client: {
      it: "Terranova",
      en: "Terranova",
    },
    role: { it: "Sviluppo frontend e integrazioni", en: "Frontend and integration development" },
    result: {
      it: "Store piu flessibili, componenti riutilizzabili e codice piu mantenibile per campagne e crescita.",
      en: "More flexible stores, reusable components, and more maintainable code for campaigns and growth.",
    },
    stack: ["Shopify", "Liquid", "JavaScript", "Theme Architecture", "Analytics"],
    tags: ["Shopify", "Fashion", "CRO"],
    accent: "rose",
    challenge: {
      it: "Mantenere esperienza premium e flessibilita commerciale dentro architetture e-commerce complesse.",
      en: "Maintain a premium experience and commercial flexibility within complex e-commerce architectures.",
    },
    approach: {
      it: "Customizzazione tema, sezioni modulari, logiche frontend mirate e supporto continuo alle esigenze marketing e business.",
      en: "Theme customization, modular sections, focused frontend logic, and continuous support for marketing and business needs.",
    },
    outcome: {
      it: "Un ecosistema e-commerce piu solido, pronto per iterazioni rapide senza sacrificare performance e brand consistency.",
      en: "A stronger e-commerce ecosystem ready for fast iterations without sacrificing performance or brand consistency.",
    },
    visual: {
      backgroundSrc: "/assets/case-studies/shopify-brand.jpg",
      backgroundAlt: {
        it: "Visual retail generico usato come supporto per il case study Terranova",
        en: "Generic retail visual used to support the Terranova case study",
      },
      foregroundSrc: "/assets/case-studies/terranova-italia-logo.png",
      foregroundAlt: {
        it: "Logo Terranova Italia",
        en: "Terranova Italy logo",
      },
      foregroundFit: "contain",
      brandSurface: "dark",
    },
  },
  {
    slug: "wordpress-headless-learning-platform",
    title: {
      it: "Siti WordPress per agenzie web",
      en: "WordPress Builds for Web Agencies",
    },
    year: "2025",
    category: { it: "WordPress / CMS", en: "WordPress / CMS" },
    short: {
      it: "Sviluppo WordPress su commissione per agenzie web di tutta Italia, con temi custom, performance curate e consegne pensate per flussi white-label.",
      en: "Commissioned WordPress development for web agencies across Italy, with custom themes, tuned performance, and delivery built for white-label workflows.",
    },
    description: {
      it: "Realizzazione siti WordPress, landing e corporate per agenzie partner, con componenti riusabili e gestione contenuti chiara per team marketing e clienti finali.",
      en: "WordPress websites, landing pages, and corporate builds for partner agencies, with reusable components and clearer content workflows for marketing teams and end clients.",
    },
    client: {
      it: "Esperienza in Luce",
      en: "Esperienza in Luce",
    },
    role: {
      it: "Sviluppo WordPress custom / commissioni agenzia",
      en: "Custom WordPress development / agency delivery",
    },
    result: {
      it: "Delivery piu rapida, siti piu semplici da gestire e standard tecnici coerenti su piu progetti commissionati.",
      en: "Faster delivery, easier-to-manage websites, and more consistent technical standards across commissioned projects.",
    },
    stack: ["WordPress", "PHP", "ACF", "Custom Theme", "Performance"],
    tags: ["WordPress", "Agency", "Delivery"],
    accent: "lime",
    challenge: {
      it: "Consegnare siti su commissione con tempi stretti, qualita costante e backend semplici da usare per agenzie e clienti finali.",
      en: "Deliver commissioned websites on tight timelines while keeping quality high and admin flows easy for agencies and end clients.",
    },
    approach: {
      it: "Temi custom, componenti riutilizzabili, attenzione a performance, SEO e un flusso editoriale semplice per siti vetrina, landing e corporate.",
      en: "Custom themes, reusable components, attention to performance and SEO, and a straightforward editorial flow for brochure sites, landing pages, and corporate builds.",
    },
    outcome: {
      it: "Un setup WordPress piu replicabile per progetti commissionati in tutta Italia, con meno attrito in delivery e manutenzione.",
      en: "A more repeatable WordPress setup for commissioned projects across Italy, with less friction in delivery and maintenance.",
    },
    visual: {
      backgroundSrc: "/assets/stock-ai-workspace.jpg",
      backgroundAlt: {
        it: "Workspace digitale usato come visual di supporto per case study WordPress su commissione",
        en: "Digital workspace used as supporting visual for commissioned WordPress case studies",
      },
      foregroundSrc: "/assets/case-studies/esperienzainluce-logo.svg",
      foregroundAlt: {
        it: "Logo Esperienza in Luce",
        en: "Esperienza in Luce logo",
      },
      foregroundFit: "contain",
      brandSurface: "dark",
    },
  },
  {
    slug: "wordpress-shopify-import-export-tools",
    title: {
      it: "Plugin Import / Export WordPress & Shopify",
      en: "WordPress & Shopify Import / Export Plugins",
    },
    year: "2021-2026",
    category: { it: "Automazione dati", en: "Data Automation" },
    short: {
      it: "Strumenti proprietari per sincronizzazione dati e automazione flussi, con 3.000+ record gestiti e rollback transazionali.",
      en: "Proprietary tools for data sync and workflow automation, handling 3,000+ records with transactional rollbacks.",
    },
    description: {
      it: "Plugin e script in PHP e Shopify Liquid per prodotti, ordini, eventi e contenuti, con controlli di consistenza e riduzione costi SaaS.",
      en: "PHP and Shopify Liquid plugins/scripts for products, orders, events, and content, with consistency checks and SaaS cost reduction.",
    },
    client: {
      it: "Automation Toolkit",
      en: "Automation Toolkit",
    },
    role: { it: "Plugin development e automazione", en: "Plugin development and automation" },
    result: {
      it: "Fino al 40% di costi SaaS annuali tagliati e flussi dati piu controllabili.",
      en: "Up to 40% annual SaaS cost reduction and more controllable data flows.",
    },
    stack: ["PHP", "WordPress", "Shopify Liquid", "CSV/XML", "Data Validation"],
    tags: ["Automation", "Plugin", "Data"],
    accent: "amber",
    challenge: {
      it: "Ridurre dipendenza da tool esterni mantenendo import/export affidabili su dati business-critical.",
      en: "Reduce dependence on external tools while keeping imports/exports reliable for business-critical data.",
    },
    approach: {
      it: "Script e plugin custom con validazione, rollback transazionali e controlli di consistenza su record, ordini e contenuti.",
      en: "Custom scripts and plugins with validation, transactional rollbacks, and consistency checks across records, orders, and content.",
    },
    outcome: {
      it: "Meno costi ricorrenti, piu ownership tecnica e processi dati piu prevedibili.",
      en: "Lower recurring costs, more technical ownership, and more predictable data processes.",
    },
    visual: {
      backgroundSrc: "/assets/stock-systems-dashboard.jpg",
      backgroundAlt: {
        it: "Dashboard dati usata come fallback visivo per plugin e automazioni",
        en: "Data dashboard used as visual fallback for plugins and automations",
      },
    },
  },
] as const;

export const services = [
  {
    title: { it: "Sviluppo Web Custom", en: "Custom Web Development" },
    text: {
      it: "Piattaforme, dashboard, portali e interfacce prodotto costruite attorno a workflow reali.",
      en: "Tailored platforms, dashboards, portals, and product interfaces built around real workflows.",
    },
  },
  {
    title: { it: "Gestionali e Internal Tools", en: "Business Platforms & Internal Tools" },
    text: {
      it: "Sistemi booking, CRM, admin panel, logiche loyalty, reportistica e software operativo.",
      en: "Booking systems, CRM-style tools, admin panels, loyalty logic, reporting, and operational software.",
    },
  },
  {
    title: { it: "WordPress e CMS", en: "WordPress & CMS Solutions" },
    text: {
      it: "Temi custom, plugin, contenuti strutturati, setup headless e CMS orientati alla performance.",
      en: "Custom themes, plugin development, structured content, headless setups, and performance-oriented CMS builds.",
    },
  },
  {
    title: { it: "E-commerce", en: "E-commerce Development" },
    text: {
      it: "Shopify e commerce custom con product page solide, integrazioni pulite e UX orientata alla conversione.",
      en: "Shopify and custom commerce with strong product pages, clean integrations, and conversion-minded UX.",
    },
  },
  {
    title: { it: "AI Automations e Integrazioni", en: "AI Automations & Integrations" },
    text: {
      it: "Workflow AI supervisionati, agenti interni, prompt system, pipeline dati e automazioni operative.",
      en: "Supervised AI workflows, internal agents, prompt systems, data pipelines, and operational automation.",
    },
  },
  {
    title: { it: "Landing Page e Siti Business", en: "Landing Pages & Business Websites" },
    text: {
      it: "Siti premium, veloci, SEO-ready per aziende che cercano credibilita, chiarezza e lead qualificati.",
      en: "Premium, fast, SEO-ready websites for companies that need credibility, clarity, and qualified leads.",
    },
  },
] as const;

export const processSteps = [
  {
    title: { it: "Discovery", en: "Discovery" },
    text: {
      it: "Chiarisco modello di business, utenti, vincoli e risultato che il sistema deve produrre.",
      en: "Clarify the business model, users, constraints, and the outcome the website or system must create.",
    },
  },
  {
    title: { it: "Strategia", en: "Strategy" },
    text: {
      it: "Definisco scope, struttura contenuti, direzione tecnica e percorso piu intelligente al rilascio.",
      en: "Shape the scope, content structure, technical direction, and the smartest path to launch.",
    },
  },
  {
    title: { it: "Design / Architettura", en: "Design / Architecture" },
    text: {
      it: "Traduco l'obiettivo in flussi, data model, interfacce e una struttura realmente costruibile.",
      en: "Translate the goal into flows, data models, interface systems, and a buildable product structure.",
    },
  },
  {
    title: { it: "Build", en: "Build" },
    text: {
      it: "Sviluppo frontend, backend, CMS, integrazioni e automazioni con attenzione a performance e manutenzione.",
      en: "Develop the frontend, backend, CMS, integrations, and automation layer with performance in mind.",
    },
  },
  {
    title: { it: "Launch / Iterate", en: "Launch / Iterate" },
    text: {
      it: "Rilascio, verifico, misuro cio che conta e miglioro in base all'uso reale.",
      en: "Ship cleanly, verify the experience, monitor what matters, and improve based on real usage.",
    },
  },
] as const;

export const capabilityGroups = [
  {
    label: { it: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: { it: "Backend", en: "Backend" },
    items: ["Node.js", "Laravel", "PHP", ".NET", "REST APIs", "SQL Server", "MySQL"],
  },
  {
    label: { it: "CMS e Commerce", en: "CMS & Commerce" },
    items: ["WordPress", "Custom Plugins", "Headless CMS", "Shopify", "Liquid"],
  },
  {
    label: { it: "AI e Automazione", en: "AI & Automation" },
    items: ["AI Workflows", "OpenAI API", "Webhooks", "Prompt Systems", "Ops Automation"],
  },
  {
    label: { it: "Delivery", en: "Delivery" },
    items: ["Vercel", "SEO", "WCAG 2.1", "Performance", "Analytics", "Git"],
  },
] as const;

export const faqs = [
  {
    question: {
      it: "Per che tipo di clienti e adatto questo lavoro?",
      en: "What kind of clients is this work best suited for?",
    },
    answer: {
      it: "Aziende, agenzie e professionisti che cercano un partner tecnico per sito premium, piattaforma custom, CMS, e-commerce, gestionale o automazione AI.",
      en: "Businesses, agencies, and professionals that need a technical partner for a premium website, custom platform, CMS, e-commerce system, internal tool, or AI automation.",
    },
  },
  {
    question: {
      it: "Lavori solo con React e Next.js?",
      en: "Do you only build with React and Next.js?",
    },
    answer: {
      it: "No. React e Next.js sono il nucleo frontend moderno, ma lavoro anche con WordPress, PHP, Laravel, Node.js, .NET, Angular, Shopify e integrazioni custom.",
      en: "No. React and Next.js are the modern frontend core, but I also work with WordPress, PHP, Laravel, Node.js, .NET, Angular, Shopify, and custom integrations.",
    },
  },
  {
    question: {
      it: "Puoi integrare AI senza sostituire gli strumenti esistenti?",
      en: "Can you add AI automation without replacing existing tools?",
    },
    answer: {
      it: "Si. I progetti AI migliori spesso collegano strumenti gia in uso e aggiungono intake, classificazione, sintesi, drafting e reporting con supervisione umana.",
      en: "Yes. The strongest AI projects often connect to tools a business already uses, adding intake, classification, summaries, drafting, and reporting with human review.",
    },
  },
] as const;
