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
    graphLink: "Knowledge graph",
    platformNav: "Platform",
    developersNav: "Developers",
    agenticNav: "Agentic automation",
    codingAgents: "Coding agents",
    navigatorTitle: "Skills Navigator",
    sourceRepo: "Repository sorgente",
    repo: "Repository",
    navigator: "Navigator",
    catalogEyebrow: "Catalogo analizzato dal repository UiPath/skills",
    homeTitle: "Skills UiPath Platform per coding agents",
    homeIntro: "Esplora le skill che guidano discovery, progettazione, build, integrazione, deploy e operation delle automazioni UiPath.",
    installCommandLabel: "Installazione PowerShell",
    installCommandIntro: "Esegui questo comando in PowerShell per installare uip CLI e skills UiPath.",
    copyInstallCommand: "Copia comando",
    copiedInstallCommand: "Comando copiato",
    skillVersion: "Versione skill analizzate",
    skillCount: "Skill",
    commit: "Commit",
    localCli: "CLI locale",
    sourceNote: "Versione letta da version-manifest.json. Snapshot repository: 1.198.0. Schema manifest: 2. Hash completo: f6f621cb9379e4aa52bc2e470191f5d2169507e4.",
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
    guideEyebrow: "Consigli operativi",
    guideTitle: "Come massimizzare i coding agents sulle skill UiPath",
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
    operate: "Operate"
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
      text: "Tenant, Orchestrator, task runtime, Insights, test e run."
    },
    improve: {
      title: "6. Improve",
      text: "Review, governance, troubleshooting e feedback."
    }
  },
  guides: [
    {
      title: "Codex app come cockpit",
      text: "Apri Codex direttamente nella root del progetto UiPath o della soluzione. Così può leggere `project.json`, `.flow`, `agent.json`, `sdd.md`, dipendenze e diff locali prima di agire."
    },
    {
      title: "CLI come motore operativo",
      text: "Il `uip` CLI è il modo migliore per validare, buildare, cercare risorse tenant, pubblicare e diagnosticare. Codex lo orchestra, interpreta JSON e aggiorna i file."
    },
    {
      title: "Prompt con artefatto e outcome",
      text: "Scrivi richieste tipo: 'nel progetto aperto, modifica X, valida con Y, non eseguire run con effetti reali senza conferma'. È molto più efficace di un brief generico."
    },
    {
      title: "Design prima del build",
      text: "Per automazioni non banali, parti da `uipath-automation-discovery` quando il cosa automatizzare non è chiaro, poi usa `uipath-planner` per SDD e piano."
    },
    {
      title: "Validate è diverso da run",
      text: "Chiedi validate/build sempre; autorizza debug/run solo quando accetti effetti reali su sistemi, email, ticket, code o applicazioni aperte."
    },
    {
      title: "Review come quality gate",
      text: "Prima del deploy fai una `uipath-review` read-only. Poi chiedi alla skill specifica di correggere solo i finding prioritari."
    }
  ],
  skills: {}
};
