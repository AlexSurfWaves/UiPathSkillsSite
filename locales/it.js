window.uipathLocales = window.uipathLocales || {};
window.uipathLocales.it = {
  title: {
    index: "UiPath Skills Navigator per Codex",
    graph: "UiPath Skills Knowledge Graph"
  },
  ui: {
    language: "Lingua",
    search: "Cerca",
    all: "Tutte",
    allPhases: "Tutte le fasi",
    design: "Design",
    build: "Build",
    integrate: "Integra",
    deploy: "Deploy",
    operate: "Operate",
    improve: "Test & improve",
    graphLink: "Knowledge graph",
    platformNav: "Platform",
    developersNav: "Developers",
    agenticNav: "Agentic automation",
    codingAgents: "Coding agents",
    navigatorTitle: "Skills Navigator",
    sourceRepo: "Repository sorgente",
    sourceOverview: "Skills overview",
    sourceCatalog: "Skills catalog",
    sourceBestPractices: "Best practice",
    repo: "Repository",
    navigator: "Navigator",
    catalogEyebrow: "Catalogo analizzato dal repository UiPath/skills",
    homeTitle: "Skills UiPath Platform per coding agents",
    homeIntro: "Esplora le skill che guidano discovery, progettazione, build, integrazione, deploy e operation delle automazioni UiPath.",
    installCommandLabel: "Installazione PowerShell",
    installCommandIntro: "Esegui questo comando in PowerShell per installare il CLI e le skill UiPath incluse.",
    copyInstallCommand: "Copia comando",
    copiedInstallCommand: "Comando copiato",
    skillVersion: "Versione skill analizzate",
    skillCount: "Skill",
    commit: "Commit",
    localCli: "CLI locale",
    snapshotDate: "22 luglio 2026",
    sourceNote: "Versione letta da version-manifest.json. Snapshot repository: 1.199.0. Schema manifest: 2. Hash completo: eefe56761c18a9781496897176eb6ae1a9581aae.",
    referencesEyebrow: "Materiale di riferimento",
    referencesTitle: "Fonti con ruoli distinti",
    referencesIntro: "Il repository definisce lo stato corrente; overview e catalog descrivono le skill, mentre le best practice guidano contesto, collaborazione e validazione.",
    referenceCurrent: "Fonte corrente",
    referenceConcepts: "Concetti",
    referenceSnapshot: "Vista ufficiale",
    referenceRepoTitle: "UiPath skills repository",
    referenceRepoText: "Fonte di verità per elenco, istruzioni, risorse e modifiche più recenti delle skill.",
    referenceOverviewTitle: "Skills overview",
    referenceOverviewText: "Definisce cosa contiene una skill, come viene selezionata dal coding agent e come indirizzarla esplicitamente.",
    referenceCatalogTitle: "Skills catalog",
    referenceCatalogText: "Raggruppa le skill per fase del lifecycle e fornisce prompt di esempio; è una snapshot rispetto al repository.",
    referencePractice: "Best practice",
    referencePracticeTitle: "Working effectively",
    referencePracticeText: "Definisce il ciclo operativo: contesto mirato, piano, iterazioni brevi, validazione UiPath e controllo umano.",
    lifecycleEyebrow: "Lifecycle",
    lifecycleTitle: "Dalla discovery all'operatività",
    when: "Quando usarla",
    capabilities: "Cosa può fare in concreto",
    how: "Come usarla con coding agents",
    subskills: "Sub-skill invocate",
    commands: "Comandi e artefatti tipici",
    prompt: "Prompt efficace",
    handoffs: "Handoff naturali",
    caveat: "Attenzione",
    guideEyebrow: "Workflow operativo",
    guideTitle: "Come lavorare bene con coding agents e skill UiPath",
    guideIntro: "Tratta il coding agent come un collaboratore veloce: tu imposti architettura e controlli, la skill fornisce il metodo, gli strumenti UiPath forniscono le prove.",
    flowAria: "Workflow consigliato per coding agents e skill UiPath",
    decision: "Decisione",
    iterationGateTitle: "Il risultato passa i criteri end-to-end?",
    guideHabitsEyebrow: "Checklist",
    guideHabitsTitle: "Sei abitudini che alzano la qualità",
    guideSourcesAria: "Fonti ufficiali delle best practice",
    guideSourcesLabel: "Approfondisci nelle guide ufficiali:",
    sourceWorkingEffectively: "Working effectively",
    sourceProjectContext: "Project context",
    sourceReviewValidation: "Review & validation",
    graphEyebrow: "Relazioni tra skill",
    graphTitle: "Grafo navigabile delle skill UiPath",
    graphIntro: "Ogni nodo è una skill. Le linee mostrano gli handoff/sub-skill che Codex usa quando una competenza deve delegare a un'altra. Passa il mouse su un nodo per leggere cosa fa la skill; trascina i nodi per migliorare la leggibilità del grafo.",
    graphVersion: "Versione skill",
    graphMeta: "24 nodi · relazioni da handoff",
    graphSearch: "Cerca skill",
    graphPhase: "Fase",
    reset: "Reset",
    selectedSkill: "Skill selezionata",
    category: "Categoria",
    phase: "Fase",
    relations: "Relazioni",
    openFullCard: "Apri scheda completa",
    invokes: "Invoca",
    invokedBy: "Invocata da",
    legend: "Legenda grafo",
    noSkill: "Nessuna skill",
    noSkillHelp: "Modifica i filtri per visualizzare il grafo.",
    noOutgoing: "Nessuna sub-skill dichiarata.",
    noIncoming: "Nessuna skill la invoca direttamente.",
    noResults: "Nessuna skill corrisponde ai filtri.",
    visibleStats: "{count} skill visibili, {edges} relazioni",
    subskillIntro: "Quando questa skill deve delegare o combinarsi con altre competenze, il coding agent passa naturalmente a queste {count} sub-skill.",
    subskillNone: "Questa skill non dichiara sub-skill nel catalogo analizzato.",
    missingSkill: "Skill citata come handoff, ma non presente nel catalogo analizzato.",
    degree: "{outgoing} uscite, {incoming} ingressi"
  },
  placeholders: {
    search: "RPA, Flow, deploy, test...",
    graphSearch: "platform, flow, agent..."
  },
  phases: {
    design: "Design",
    build: "Build",
    integrate: "Integra",
    deploy: "Deploy",
    operate: "Operate",
    improve: "Test & improve"
  },
  status: {
    stable: "Stable",
    preview: "Preview",
    "in-development": "In sviluppo"
  },
  lifecycle: {
    design: {
      title: "1. Discover & Design",
      text: "Opportunity mining, PDD, SDD, scelte architetturali e task plan."
    },
    build: {
      title: "2. Build",
      text: "Artefatti locali: RPA, Flow, BPMN, Case, Agent, API, App e Functions."
    },
    integrate: {
      title: "3. Integra",
      text: "Human tasks, IXP, Data Fabric via Platform, connector builder e MCP."
    },
    deploy: {
      title: "4. Deploy",
      text: "Pack, publish, deploy, activate e risorse soluzione."
    },
    operate: {
      title: "5. Operate",
      text: "Tenant, Orchestrator, task runtime, Insights e run."
    },
    improve: {
      title: "6. Test & Improve",
      text: "Test, review, governance, troubleshooting e feedback."
    }
  },
  developerFlow: [
    {
      title: "Inquadra il risultato",
      text: "Definisci artefatto e percorso esatti, input/output con tipi, comportamento end-to-end, vincoli e criteri di accettazione."
    },
    {
      title: "Carica il contesto utile",
      text: "Avvia una sessione fresca per il task e fornisci solo file aggiornati e rilevanti, convenzioni di progetto e PDD/SDD sanitizzati."
    },
    {
      title: "Seleziona la skill",
      text: "Nomina la skill `uipath-*` quando il task è critico e chiedi al coding agent di confermare che sia stata caricata."
    },
    {
      title: "Allinea piano e checkpoint",
      text: "Per lavori non banali, fai esplicitare piano, dipendenze e punti di approvazione prima delle modifiche; chiedi review-first se la skill procede automaticamente."
    },
    {
      title: "Costruisci un incremento",
      text: "Genera una porzione significativa ma verificabile, mantenendo il lavoro nelle attività native e nella struttura UiPath corretta."
    },
    {
      title: "Verifica con UiPath",
      text: "Esegui Workflow Analyzer, build dell'intero progetto e run locale controllato; poi confronta i file reali con i criteri di accettazione."
    }
  ],
  iterationPaths: [
    {
      title: "Passa",
      text: "Esamina i file effettivi, non solo il riepilogo, quindi approva separatamente publish, deploy o altre modifiche a sistemi condivisi."
    },
    {
      title: "Gap localizzato",
      text: "Correggi e ripeti build + verifica. In genere bastano 2–3 cicli generate-check-refine."
    },
    {
      title: "Struttura errata o errori ripetuti",
      text: "Interrompi la catena di patch: riparti in una sessione fresca con contesto, piano o contratto del prompt corretti."
    }
  ],
  guides: [
    {
      title: "Tu resti l'architetto",
      text: "Usa il coding agent come collaboratore veloce: definisci direzione e trade-off, giudica l'output e mantieni sotto approvazione le azioni che cambiano stato condiviso."
    },
    {
      title: "Contesto persistente, breve e corrente",
      text: "Mantieni un `AGENTS.md` con skill preferite, regole di qualità, package fissati, attività da preferire o evitare e file che non devono essere sovrascritti."
    },
    {
      title: "Il prompt è un contratto di consegna",
      text: "Specifica file e posizione, input/output e tipi, comportamento completo, vincoli, dipendenze e come sarà verificato il risultato."
    },
    {
      title: "Contesto rilevante, non più contesto",
      text: "Ogni sessione parte da zero: usa una sessione per task, allega solo le fonti necessarie e rimuovi dati reali di clienti mantenendo struttura e casi limite."
    },
    {
      title: "Validazione prima della fiducia",
      text: "Cerca TODO o placeholder, attività sbagliate, selector rimossi, package non fissati, logging ed error handling mancanti; valida l'intero progetto, non solo il file modificato."
    },
    {
      title: "Segreti e cambi di stato restano controllati",
      text: "Conserva i segreti in asset o credential store, riferiscili per nome e richiedi conferma esplicita prima di run con effetti reali, publish, deploy o upgrade di package."
    }
  ],
  skills: {}
};
