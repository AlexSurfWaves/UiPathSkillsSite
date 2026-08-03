const repoUrl = "https://github.com/UiPath/skills/tree/main/skills";

const skills = [
  {
    id: "uipath-automation-discovery",
    name: "uipath-automation-discovery",
    category: "Discovery & strategy",
    phase: "design",
    status: "preview",
    product: "Automation discovery, opportunity mining",
    files: "Slack, email, wiki, CRM, HRIS, ERP inputs",
    purpose: "Scopre e prioritizza opportunità di automazione e, quando richiesto, stima l'effort con complexity band, pack-hours, fattori di aggiustamento e contingency.",
    when: "Usala prima di progettare una soluzione specifica, quando vuoi capire cosa automatizzare o dimensionare una pipeline di opportunità.",
    how: [
      "Fornisci fonti o estratti di conversazioni, ticket, documentazione operativa, workflow manuali o sistemi sorgente.",
      "Chiedi a Codex di classificare opportunità per impatto, fattibilità, ripetibilità e percorso UiPath suggerito.",
      "Passa poi a `uipath-planner` solo per le opportunità selezionate e abbastanza mature.",
      "Per l'estimation, fornisci matrici di complessità e cataloghi ore autorevoli: la skill non inventa soglie o effort mancanti."
    ],
    cli: ["references/intake-guide.md", "references/mining-guide.md", "references/estimation-guide.md", "assets/templates/estimation-worksheet-template.md", "references/report-template.md"],
    prompt: "Analizza questi materiali operativi e produci un report prioritizzato di opportunità UiPath; se fornisco le matrici di sizing, aggiungi effort e contingency tracciabili.",
    handoffs: ["uipath-planner", "uipath-rpa", "uipath-maestro-flow", "uipath-agents", "uipath-human-in-the-loop", "uipath-platform"],
    caveat: "Non costruisce automazioni e non inventa input di sizing. Le opportunità oltre 7 applicazioni o 8 varianti vanno scomposte, non compresse in una fascia."
  },
  {
    id: "uipath-planner",
    name: "uipath-planner",
    category: "Design & planning",
    phase: "design",
    status: "preview",
    product: "PDD, SDD, task planning",
    files: "pdd.md, sdd.md, project.json, .flow, .bpmn, .py",
    purpose: "Unifica solution design e task planning: seleziona i prodotti in base al bisogno, trasforma PDD o requisiti in un SDD implementabile e deriva una task list multi-skill eseguibile.",
    when: "Usala quando hai un PDD/SDD, devi scegliere prodotti UiPath in base al bisogno o vuoi una roadmap tecnica prima di modificare progetti.",
    how: [
      "Fai leggere PDD, vincoli, sistemi, dati, eccezioni, SLA e criteri di successo.",
      "Chiedi un SDD implementabile con contratti di produzione e poi task granulari per build, test, deploy e handoff.",
      "Mantieni i task come guida viva: dopo ogni fase chiedi a Codex di aggiornare stato e blocchi."
    ],
    cli: ["assets/templates/*-sdd-template.md", "references/product-selection-guide.md", "references/sdd-generation-guide.md", "references/plan-and-tasks-format.md"],
    prompt: "Leggi `pdd.md`, crea o aggiorna `sdd.md`, poi genera un piano di implementazione multi-skill con stop condition e validazioni.",
    handoffs: ["uipath-review", "uipath-solution", "uipath-platform", "uipath-rpa", "uipath-maestro-flow", "uipath-maestro-bpmn", "uipath-maestro-case", "uipath-agents"],
    caveat: "`uipath-design` non è più una skill separata nel catalogo aggiornato: per design e planning usa `uipath-planner`."
  },
  {
    id: "uipath-rpa",
    name: "uipath-rpa",
    category: "Authoring",
    phase: "build",
    status: "preview",
    product: "Studio, RPA, Coded Workflows, UI Automation",
    files: ".xaml, .cs, project.json",
    purpose: "Crea, modifica, valida, compila, esegue e testa automazioni RPA moderne in XAML o C# coded workflow, con discovery di progetto e regole UIA più esplicite.",
    when: "Usala per workflow RPA, UI automation, Excel, email, file, code fallback, Integration Service da RPA, test case, error handling e correzione errori XAML/C#.",
    how: [
      "Apri Codex nella root che contiene `project.json`, così può rilevare framework, dipendenze e workflow.",
      "Lascia che Codex usi `uip rpa validate` per file e `uip rpa build` a livello progetto prima di dichiarare completato; la lista analyzer rules si consulta solo quando serve.",
      "Prima di qualsiasi lavoro UIA, verifica `UiPath.UIAutomation.Activities` (minimo `26.10.2-alpha.12792334`) e chiedi consenso esplicito prima di installare o aggiornare il package.",
      "Per UI automation desktop e web, usa Object Repository e `uia-configure-target`; leggi la guida UIA installata nel package, collega i riferimenti di default e usa l'embed solo come fallback per il singolo target.",
      "Se la destinazione è Studio Web, consegna una Solution: importa il progetto con `uip solution projects import` invece di lasciare un progetto RPA isolato.",
      "Nel debug headless, usa breakpoint per attività e interroga `debug state` fino a uno stato stabile prima di decidere il passo successivo.",
      "Per problemi UI avanzati, abilita `--profiling` per raccogliere timing per attività e screenshot prima/dopo l'esecuzione."
    ],
    cli: ["uip rpa init", "uip rpa packages versions --package-id UiPath.UIAutomation.Activities --include-prerelease", "uip rpa validate", "uip rpa build", "uip solution projects import", "uip rpa debug start --breakpoints", "uip rpa debug start --profiling", "uip rpa debug state", "uip rpa debug set-breakpoints", "references/uia-starter-guide.md", "agents/uipath-project-discovery-agent.md"],
    prompt: "Nel progetto RPA aperto, aggiungi un workflow XAML per processare una queue, valida il file e poi compila l'intero progetto.",
    handoffs: ["uipath-platform", "uipath-test", "uipath-solution", "uipath-agents", "uipath-maestro-flow", "uipath-troubleshoot"],
    caveat: "Per `debug` e `run` ci possono essere effetti reali su app, email, code o API: chiedi sempre a Codex di distinguere validate/build da esecuzione."
  },
  {
    id: "uipath-maestro-flow",
    name: "uipath-maestro-flow",
    category: "Authoring",
    phase: "build",
    status: "in-development",
    product: "Maestro Flow, Studio Web",
    files: ".flow",
    purpose: "Costruisce e gestisce Flow: nodi, edge, variabili, trigger, connector, script, subflow, IxP, debug, publish ed eval.",
    when: "Usala per ogni progetto `.flow`, per orchestrare servizi, processi, agenti, approvazioni e integrazioni in Maestro/Studio Web.",
    how: [
      "Prima di scaffoldare un nuovo Flow, cerca `.uipx` esistenti: se ne trovi, chiedi quale usare. Solo quando non esistono soluzioni, creane una automaticamente.",
      "Chiedi a Codex di usare registry search prima di creare risorse o scegliere connector.",
      "Per riferimenti tra nodi usa le variabili esportate e `$vars`, mantenendo binding e variabili coerenti.",
      "Tratta ogni warning di `flow validate` come un difetto da risolvere anche quando il comando termina con exit code 0; `flow debug` va autorizzato perché esegue davvero il processo."
    ],
    cli: ["uip maestro flow init", "uip solution init", "uip maestro flow registry search", "uip maestro flow validate", "uip maestro flow eval"],
    prompt: "Crea un Flow in una soluzione UiPath che riceve un trigger, legge dati da un connector, invoca un agente e produce un output validato.",
    handoffs: ["uipath-agents", "uipath-human-in-the-loop", "uipath-ixp", "uipath-rpa", "uipath-platform", "uipath-solution", "uipath-connector-builder"],
    caveat: "La skill distingue nodi editabili a mano e nodi posseduti dal CLI. Un warning su connector keyword o HTTP generico indica che il Flow non è ancora pronto."
  },
  {
    id: "uipath-maestro-bpmn",
    name: "uipath-maestro-bpmn",
    category: "Authoring",
    phase: "build",
    status: "in-development",
    product: "Maestro BPMN",
    files: ".bpmn, project.uiproj, bindings_v2.json",
    purpose: "Autore e operatore per process orchestration BPMN in Maestro, con packaging, inspect, validate e diagnostica.",
    when: "Usala quando il progetto contiene BPMN o package descriptor Maestro, specialmente per processi lunghi e orchestrazioni formali.",
    how: [
      "Distingui subito discovery-only da authoring: nelle richieste di sola discovery salva `registry pull/list/get` in `registry-evidence/` e non scaffoldare un progetto.",
      "Per authoring, usa template registry solo per i nodi posseduti dal registry e il reference strutturale per flow, gateway, eventi, loop, mapping e diagramma.",
      "Per un progetto locale usa il layout semplice `<Project>/<Project>.bpmn`; crea Solution e package solo quando richiesti.",
      "Nei Script Task restituisci un oggetto con `response`, mappa l'output con `result.response` e dichiara root output leggibili senza `elementId`.",
      "Valida offline con `uip maestro bpmn validate <file>.bpmn --output json`: correggi gli errori, ma non inseguire i warning in loop.",
      "Usala per validazione e operatività BPMN, non per `.flow` JSON."
    ],
    cli: ["uip maestro bpmn init", "uip maestro bpmn registry pull", "uip maestro bpmn registry list --limit -1", "uip maestro bpmn registry get", "uip maestro bpmn validate", "uip maestro bpmn package", "bindings_v2.json", "entry-points.json"],
    prompt: "Rivedi questo progetto BPMN Maestro, correggi il modello e prepara la validazione/package senza toccare i file generati dal CLI.",
    handoffs: ["uipath-maestro-flow", "uipath-rpa", "uipath-agents", "uipath-troubleshoot"],
    caveat: "È diversa da Flow: se il file principale è `.flow`, passa a `uipath-maestro-flow`. Il validator incluso è stato rimosso: la validazione ora passa dal CLI 1.200+."
  },
  {
    id: "uipath-maestro-case",
    name: "uipath-maestro-case",
    category: "Authoring",
    phase: "build",
    status: "in-development",
    product: "Case Management",
    files: "sdd.md, sdd.draft.md, tasks.md, caseplan.json",
    purpose: "Progetta e crea Case Management da SDD, draft o richiesta greenfield, quindi modifica caseplan esistenti con operazioni brownfield mirate.",
    when: "Usala per soluzioni case-centric, dove il lavoro evolve per stati, attività umane, regole e dati associati al caso.",
    how: [
      "Parti da `sdd.md` quando esiste; finalizza `sdd.draft.md` nella stessa skill. Senza SDD, Codex prepara per best assumption un unico Case Review completo, inclusi percorsi alternativi e decisioni prese.",
      "Fissa all'avvio la preferenza per una pausa di preview; il flusso standard può procedere senza un hard stop tra prototipo e implementazione.",
      "Genera `tasks.md` e poi scrive `caseplan.json` direttamente con Write/Edit: i comandi mutativi `uip maestro case ... add/update/remove` non sono un percorso di authoring supportato.",
      "Mantieni il file case flat in `<Solution>/<Project>/caseplan.json`: `content/` è layout di package e `caseplan.json.bpmn` è generato.",
      "Modella task sequenziali, event-triggered e ad hoc con le entry rule corrette; usa stage secondari come lane di eccezione e regole root per completare il case.",
      "Mantieni parità tra `caseplan.json` e `bindings_v2.json` prima della validazione; evita i due punti nei nomi di stage e SLA.",
      "Quando il registry non trova risorse, raggruppale per nome e tipo: crea inline solo Agent o API Workflow scelti dall'utente e usa placeholder per le altre.",
      "Per brownfield usa edit mirati e pull dello stato server quando il case esiste gia in Studio Web.",
      "Valida e pubblica solo dopo aver verificato fasi, ruoli, variabili e binding."
    ],
    cli: ["uip maestro case validate", "caseplan.json", "tasks.md", "bindings_v2.json"],
    prompt: "Dal SDD crea un piano Case Management con fasi, task, variabili e regole, poi valida `caseplan.json`.",
    handoffs: ["uipath-planner", "uipath-maestro-bpmn", "uipath-rpa", "uipath-human-in-the-loop", "uipath-maestro-flow", "uipath-solution"],
    caveat: "Non usarla per BPMN o Flow generici. Per PDD→SDD o pianificazione esplicitamente cross-product, suggerisci `uipath-planner` senza invocarla automaticamente."
  },
  {
    id: "uipath-agents",
    name: "uipath-agents",
    category: "Authoring",
    phase: "build",
    status: "in-development",
    product: "Agents, Agent Builder, Python SDK",
    files: "agent.json, pyproject.toml, .py",
    purpose: "Copre l'intero ciclo di vita degli agenti UiPath, sia low-code sia coded con Python, LangGraph, LlamaIndex o OpenAI Agents.",
    when: "Usala per scaffold, modifica, Studio Web sync, tools, memory, guardrails, escalation, binding, eval, tracing e deploy di agenti.",
    how: [
      "Fai decidere esplicitamente low-code vs coded quando il progetto non esiste ancora.",
      "Per evaluator LLM-as-judge, scopri i modelli disponibili con il CLI invece di inventare identificativi.",
      "Per coded agent, lascia rigenerare i binding da SDK calls invece di scriverli a mano.",
      "Completa con smoke eval e domanda di delivery prima di considerare chiuso il lavoro."
    ],
    cli: ["uip agent init", "uip agent validate", "uip codedagent exec", "uip agent memory", "uip solution deploy run"],
    prompt: "Crea un agente UiPath coded in Python con guardrail, una connection Integration Service e una smoke evaluation.",
    handoffs: ["uipath-platform", "uipath-maestro-flow", "uipath-human-in-the-loop", "uipath-mcp-servers", "uipath-solution"],
    caveat: "Le Integration Service discovery rule vivono in `uipath-platform`; per agenti con connector fai caricare entrambe le competenze."
  },
  {
    id: "uipath-api-workflow",
    name: "uipath-api-workflow",
    category: "Authoring",
    phase: "build",
    status: "in-development",
    product: "API Workflow",
    files: "Workflow.json, project.uiproj, entry-points.json, bindings_v2.json",
    purpose: "Crea, valida, esegue, pubblica, opera e diagnostica workflow JSON DSL, inclusi HTTP, JavaScript, controllo di flusso e connector Integration Service.",
    when: "Usala per automazioni API-first, orchestrazioni headless, workflow JSON con `do[]` e operatività o diagnosi dopo il publish.",
    how: [
      "Crea sempre il progetto con `uip api-workflow init`: dentro una Solution per Studio Web e deploy, oppure con `--skip-solution-registration` solo per uso locale/CLI.",
      "Non consegnare mai un `Workflow.json` isolato: anche un workflow locale deve conservare i file di progetto generati da init.",
      "Valida offline prima di eseguire con credenziali o chiamate reali.",
      "Usa registry resolve e stub per attività Integration Service, non JSON inventato a mano.",
      "Dopo il deploy gestisci trigger, connection, job, log e trace tramite le superfici `uip is`, `uip or` e `uip traces`."
    ],
    cli: ["uip api-workflow init", "uip api-workflow init --skip-solution-registration", "uip api-workflow validate", "uip api-workflow build", "uip api-workflow pack", "uip api-workflow run --no-auth", "uip api-workflow registry resolve", "uip solution publish", "uip is connections list", "uip or jobs", "uip traces spans get"],
    prompt: "Crea un API Workflow che chiama un endpoint REST, normalizza la risposta con JavaScript e ritorna un payload validato.",
    handoffs: ["uipath-platform", "uipath-solution", "uipath-maestro-flow", "uipath-agents", "uipath-rpa", "uipath-coded-apps"],
    caveat: "È preview/in sviluppo: tieni i file piccoli, valida spesso e separa run senza auth da run con effetti reali."
  },
  {
    id: "uipath-coded-apps",
    name: "uipath-coded-apps",
    category: "Authoring",
    phase: "build",
    status: "preview",
    product: "Coded Apps, Action Apps, dashboards",
    files: "app.config.json, action-schema.json, TypeScript, dashboard assets",
    purpose: "Scaffold, build, debug e deploy di Coded Web Apps, Coded Action Apps e dashboard analytics/governance generate da richiesta naturale.",
    when: "Usala per app.config, action schema, interfacce custom, Action Center, SDK UiPath e dashboard su agent health, KPI, error rate, governance o consumption trends.",
    how: [
      "Fai installare/verificare tool `codedapp` e dipendenze TypeScript prima del build.",
      "Per Action App, definisci prima `action-schema.json` e mapping di input/output.",
      "Per dashboard, risolvi metriche, scope OAuth e sorgenti Insights/RTM prima di build e deploy; per nuovi metodi SDK leggi le signature `.d.ts` del package installato.",
      "Crea o correggi le External Application con `uip admin external-apps`; usa il portale solo come fallback quando manca autenticazione o autorizzazione admin.",
      "Per Web App e dashboard, leggi `scope` da `uipath.json`; per Action App usa `new UiPath()` senza `sdk.initialize()`.",
      "Per Validation Station scegli il componente all-in-one o i subcomponenti composabili; condividi un solo `instanceId` e verifica asset, CSS e font sia in dev sia nel build.",
      "Usa preview/debug locale, poi pack/publish/deploy quando la UI è verificata.",
      "Nel deploy non interattivo, risolvi la folder key per workspace personale, cartella esistente o nuova cartella; per i dashboard scegli anche la modalità standalone o governance."
    ],
    cli: ["uip codedapp create", "uip codedapp build", "uip codedapp debug", "uip codedapp pack", "uip admin external-apps", "references/widgets/validation-station.md", "references/dashboards/CAPABILITY.md"],
    prompt: "Crea una Coded Action App o un dashboard operativo UiPath, con schema/scope corretti, SDK UiPath e build verificata.",
    handoffs: ["uipath-human-in-the-loop", "uipath-tasks", "uipath-functions", "uipath-insights", "uipath-platform", "uipath-solution", "uipath-agents", "uipath-rpa"],
    caveat: "Per workflow `.cs` o `.xaml` non usare questa skill: passa a `uipath-rpa`."
  },
  {
    id: "uipath-functions",
    name: "uipath-functions",
    category: "Authoring",
    phase: "build",
    status: "preview",
    product: "Coded Functions, Python",
    files: "uipath.json, entry-points.json, pyproject.toml, .py",
    purpose: "Crea unita deterministiche di business logic Python pacchettizzate come artefatti UiPath, con input/output tipizzati e job semantics.",
    when: "Usala quando serve logica custom, integrazione ERP/API, trasformazione dati o chiamate SDK UiPath senza ragionamento LLM o loop agentico.",
    how: [
      "Scaffolda con `uip function new <name> --language py` e registra gli entry point nel map `functions` di `uipath.json`.",
      "Definisci schema Input/Output tipizzato, inizializza `UiPath()` in modo lazy e ritorna errori come campi output invece di far propagare eccezioni.",
      "Esegui `uip function init` prima di pack, publish o push quando cambiano schema o entry point."
    ],
    cli: ["uip function new --language py", "uip function init", "uip function run", "uip function pack", "uip function publish", "uip function push"],
    prompt: "Crea una Python Coded Function UiPath con input/output Pydantic, logica deterministica, init lazy del SDK, `uipath.json` aggiornato e `uip function init` pronto per pack.",
    handoffs: ["uipath-platform", "uipath-maestro-flow", "uipath-agents", "uipath-solution", "uipath-troubleshoot"],
    caveat: "Non e una skill per agenti LLM: se servono reasoning, routing o framework LangGraph/LlamaIndex/OpenAI Agents passa a `uipath-agents`."
  },
  {
    id: "uipath-connector-builder",
    name: "uipath-connector-builder",
    category: "Integration",
    phase: "integrate",
    status: "in-development",
    product: "Integration Service Connector Builder",
    files: "element.json, element-metadata.json, standard-resources/*.json, hooks/*.js, periodic-* connector repos",
    purpose: "Crea e modifica connector custom di UiPath Integration Service per API REST JSON, con auth, attivita, trigger, hook JavaScript, validate, import e publish.",
    when: "Usala quando devi costruire o aggiornare un connector Integration Service su disco, non quando devi semplicemente usare una connection o un'attivita gia pubblicata.",
    how: [
      "Esegui sempre `builder inspect` prima di modificare un connector esistente.",
      "Configura uno dei 19 tipi di autenticazione con `auth set`, crea attività e campi con i comandi builder, poi valida warning inclusi.",
      "Usa il marker `.uip-connector.json` per individuare l'ultimo connector inizializzato e aggiungi `hintText` alle configurazioni visibili all'utente.",
      "Dopo la validazione, usa import e publish solo quando tenant, login e version bump sono corretti."
    ],
    cli: ["uip is connectors builder init", "uip is connectors builder inspect", "uip is connectors builder activity create", "uip is connectors builder activity field create", "uip is connectors builder validate", "uip is connectors import", "uip is connectors publish"],
    prompt: "Crea un connector Integration Service per questa API REST JSON: configura auth, attivita tipizzate, campi request/response, validate, poi fermati prima del publish.",
    handoffs: ["uipath-platform", "uipath-maestro-flow"],
    caveat: "Non gestisce l'uso operativo di connector gia pubblicati: per connection, discovery e run usa `uipath-platform`; per nodi connector dentro `.flow` usa `uipath-maestro-flow`."
  },
  {
    id: "uipath-human-in-the-loop",
    name: "uipath-human-in-the-loop",
    category: "Human work",
    phase: "integrate",
    status: "in-development",
    product: "HITL, Action Center authoring",
    files: ".flow, agent.json, .bpmn",
    purpose: "Progetta gate umani, approvazioni, escalation, enrichment e validazioni dentro Flow, Maestro o agenti low-code; per coded agent passa a `uipath-agents`.",
    when: "Usala quando l'automazione deve fermarsi per decisioni umane, approvazione, controllo qualità o raccolta dati.",
    how: [
      "Fai identificare la surface: Flow, Low-Code Agent, Maestro o Coded Action App.",
      "Per un nuovo Flow, `uip maestro flow init` crea la soluzione padre automaticamente; inizializzala prima solo per scegliere un nome personalizzato.",
      "Scegli il tipo task: QuickForm, Coded Action App, AppTask o escalation agentica.",
      "In esecuzione non interattiva, non bloccare su una conferma se campi, outcome e output sono già chiari: applica uno schema sensato e rendilo esplicito nel report.",
      "In Maestro BPMN, scrivi direttamente un `bpmn:UserTask` QuickForm o Coded Action App e valida spesso con `uip maestro bpmn validate`.",
      "Scrivi il nodo nel progetto e verifica output/outcome usati dai passi successivi."
    ],
    cli: ["uip solution init", "uip maestro bpmn validate", "QuickForm schema", "AppTask", "CreateTask", "CreateEscalation"],
    prompt: "Aggiungi un'approvazione umana nel Flow: mostra i dati estratti, consenti approve/reject e rimappa l'outcome sui rami successivi.",
    handoffs: ["uipath-tasks", "uipath-coded-apps", "uipath-maestro-flow", "uipath-agents"],
    caveat: "Questa skill crea il punto HITL; per gestire task già esistenti usa `uipath-tasks`."
  },
  {
    id: "uipath-tasks",
    name: "uipath-tasks",
    category: "Human work",
    phase: "operate",
    status: "preview",
    product: "Action Center runtime",
    files: "runtime tasks",
    purpose: "Gestisce task Action Center già creati: elenco, dettagli, assegnazione, completamento e verifica stato.",
    when: "Usala in operatività, supporto o demo quando devi agire su task umani esistenti.",
    how: [
      "Verifica login, tenant e folder prima di leggere o modificare task.",
      "Scopri task e tipo, pianifica l'azione, poi assegna o completa con verifica finale.",
      "Mantieni separato authoring HITL da runtime task management."
    ],
    cli: ["uip tasks list", "uip tasks get", "uip tasks assign", "uip tasks complete", "uip login tenant set"],
    prompt: "Elenca i task Action Center aperti per questo tenant, assegnami quello urgente e mostrami lo stato dopo l'operazione.",
    handoffs: ["uipath-human-in-the-loop", "uipath-platform", "uipath-coded-apps"],
    caveat: "Non usarla per Document Understanding review; la skill IXP copre quel caso."
  },
  {
    id: "uipath-insights",
    name: "uipath-insights",
    category: "Observability",
    phase: "operate",
    status: "preview",
    product: "Insights, job monitoring",
    files: "job metrics, process execution data",
    purpose: "Interroga metriche aggregate sui job UiPath via `uip insights`: health, failure analysis, trend di completamento e performance per processo.",
    when: "Usala per job success rate, processi che falliscono di piu, failure reasons, job timeline, pending/faulted jobs e KPI operativi.",
    how: [
      "Verifica login, tenant e time range prima di ogni query; un intervallo è sempre obbligatorio.",
      "Per range assoluti, risolvi prima le date e passa numeri epoch-ms letterali a `--started-after` e `--started-before`; il limite finale è esclusivo.",
      "Parti da `summary`, poi scendi su `top-failures`, `failures-by-reason`, timeline o process details.",
      "Per start/stop/log di un job specifico passa a `uipath-platform`; per root cause dettagliata passa a `uipath-troubleshoot`."
    ],
    cli: ["uip insights jobs summary", "uip insights jobs top-failures", "uip insights jobs failures-by-reason", "uip insights jobs completed-timeline", "uip insights jobs process-details"],
    prompt: "Analizza la salute dei job UiPath negli ultimi 7 giorni: mostra KPI, trend, processi piu fallosi e failure reason principali con output JSON.",
    handoffs: ["uipath-platform", "uipath-troubleshoot", "uipath-coded-apps", "uipath-rpa"],
    caveat: "Non avvia, ferma o modifica job e non fa root-cause profonda di un errore singolo. Non incorporare sostituzioni shell o variabili nei flag temporali."
  },
  {
    id: "uipath-ixp",
    name: "uipath-ixp",
    category: "Documents & AI",
    phase: "integrate",
    status: "in-development",
    product: "IXP, Document Understanding",
    files: "document extraction projects",
    purpose: "Gestisce il ciclo IXP completo: progetti, documenti, tassonomia, estrazione, review, metriche, versioni modello, publish, tag e rollback.",
    when: "Usala per creare o amministrare progetti Document Understanding, caricare documenti, definire campi, rivedere estrazioni e governare le versioni del modello.",
    how: [
      "Crea il progetto da tassonomia suggerita da Autopilot, importata o vuota, poi carica i documenti necessari.",
      "Verifica ogni sintassi `uip ixp` nel CLI Reference e non improvvisare un comando quando il percorso non è documentato.",
      "Riusa i data type IXP built-in e, quando un nome è ambiguo, elenca tutti i candidati con il relativo tipo prima di chiedere conferma.",
      "Configura gruppi, campi, istruzioni di estrazione e preprocessing; leggi modello e preprocessing correnti da `projects get-taxonomy`, non da `list-models`.",
      "Per spostare un campo tra gruppi, aggiungilo nel target prima di cancellarlo dalla sorgente: l'ID cambia e le label confermate non seguono il campo.",
      "Nei gruppi ripetibili, considera `Occurrence` valido solo per l'ultima lettura: usa un batch `--updates` o rileggi le predizioni dopo ogni write.",
      "Accetta come review completata la dichiarazione esplicita dell'utente sui documenti nominati; non rifare discovery inutile prima della conferma.",
      "Considera il publish come ultimo passo CLI: il deploy del modello in una folder/environment si completa nel prodotto, non con `uip ixp`.",
      "Per nodi IxP dentro `.flow`, passa invece a `uipath-maestro-flow`."
    ],
    cli: ["references/cli-reference.md", "uip ixp projects create", "uip ixp projects get-taxonomy", "uip ixp documents", "uip ixp groups", "uip ixp fields", "uip ixp labellings confirm --updates", "uip ixp projects list-models", "uip ixp projects publish"],
    prompt: "Crea o aggiorna questo progetto IXP, configura tassonomia ed estrazione, rivedi le predizioni e prepara la versione corretta per il publish.",
    handoffs: ["uipath-maestro-flow", "uipath-troubleshoot", "uipath-platform"],
    caveat: "Non è la skill per modellare il Flow che usa IXP. Il deploy a una folder non è supportato dal CLI; move di campi e indici occurrence richiedono cautela perché non sono stabili o reversibili."
  },
  {
    id: "uipath-platform",
    name: "uipath-platform",
    category: "Platform",
    phase: "operate",
    status: "preview",
    product: "Cloud, Orchestrator, Integration Service, Data Fabric, LLM Gateway",
    files: "tenant resources, entities, records, traces",
    purpose: "Copre operazioni UiPath Cloud via `uip`: auth, tenant, folder, assets, queue, jobs, packages, Integration Service, Data Fabric, LLM Gateway, traces e licensing.",
    when: "Usala prima di qualunque codice o workflow che tocchi UiPath Cloud, Orchestrator, Studio Web, Integration Service, Data Fabric, LLM Gateway o trace.",
    how: [
      "Fai usare `uip` prima di considerare REST manuale.",
      "Se la richiesta chiede perché qualcosa è fallito o la root cause, passa prima a `uipath-troubleshoot` anche quando nomina una risorsa platform.",
      "Per audit trail, audit log o login history di organizzazione/tenant passa a `uipath-admin`; `uip or audit-logs` è una superficie Orchestrator diversa.",
      "Per Data Fabric, fai leggere prima `references/data-fabric/data-fabric.md` e poi il topic specifico su schema, record, query, choice set, file o import CSV.",
      "Richiedi `--output json` e filtri server-side per risultati affidabili.",
      "Usala come skill di supporto quando RPA, Flow o Agent devono scoprire risorse tenant."
    ],
    cli: ["uip login status", "uip or folders list", "uip or assets create", "uip df entities list", "uip df records query", "uip df records get", "uip is connections list", "uip traces spans get", "uip platform licenses consumables get"],
    prompt: "Verifica login e tenant, trova la folder corretta, lista risorse Orchestrator e Data Fabric necessarie e restituisci i riferimenti da usare nel workflow.",
    handoffs: ["uipath-solution", "uipath-planner", "uipath-rpa", "uipath-maestro-flow", "uipath-maestro-bpmn", "uipath-agents", "uipath-test", "uipath-insights", "uipath-connector-builder", "uipath-troubleshoot"],
    caveat: "Il REST diretto è fallback. Per Data Fabric leggi il reference dedicato; per diagnosi causali usa `uipath-troubleshoot`; per audit org/tenant usa `uipath-admin`."
  },
  {
    id: "uipath-admin",
    name: "uipath-admin",
    category: "Platform",
    phase: "operate",
    status: "in-development",
    product: "Admin, Identity, OMS, Audit",
    files: "organization settings",
    purpose: "Gestisce superfici admin: Identity Server, utenti, gruppi, robot account, external OAuth apps, ruoli, OMS, IP restriction e audit.",
    when: "Usala per amministrazione organizzazione/tenant e security posture, non per risorse Orchestrator operative.",
    how: [
      "Chiedi scoperta read-only prima di mutate su utenti, ruoli o IP allowlist.",
      "Per audit, distingui scope `org` e `tenant`, limita il periodo e scopri dal vivo source/target/type con `uip admin audit <scope> sources`.",
      "Tutti gli audit trail org/tenant, inclusi login history e who-did-what, usano `uip admin audit`, non `uip or audit-logs`.",
      "Per Orchestrator folder/jobs/processi passa a `uipath-platform`."
    ],
    cli: ["uip admin identity", "uip admin external-apps", "uip admin authz", "uip admin oms", "uip admin ip-restriction", "uip admin audit"],
    prompt: "Elenca i gruppi e le assegnazioni ruolo rilevanti per questo tenant, poi proponi la modifica minima senza applicarla.",
    handoffs: ["uipath-platform", "uipath-rpa", "uipath-governance", "uipath-troubleshoot"],
    caveat: "Sono operazioni sensibili: privilegia read-only, conferme esplicite e output auditabile; se una ricerca audit non trova eventi, non attribuire l'azione per inferenza."
  },
  {
    id: "uipath-governance",
    name: "uipath-governance",
    category: "Platform",
    phase: "operate",
    status: "in-development",
    product: "Governance, AOps, ToolUsePolicy, compliance standards",
    files: "policy definitions, compliance-pack state",
    purpose: "Autore, deploy e diagnosi di policy governance: AOps product policies, Access ToolUsePolicy e compliance standards come ISO 42001.",
    when: "Usala quando devi limitare, bloccare, imporre comportamenti o controllare/applicare posture compliance in Studio, Assistant, Robot, AI Trust Layer, Agent Builder o tool invocation.",
    how: [
      "Classifica prima se serve policy prodotto, policy accesso tool o compliance standard.",
      "Fai scoprire target, utenti/gruppi e risorse prima di applicare deploy.",
      "Per compliance pack fai posture analysis, mostra un piano state-aware e richiedi conferma in un turno separato prima di applicare, rimuovere o ripristinare setting.",
      "Usa il percorso restore per riportare uno standard configurato alle impostazioni raccomandate e `catalog get` per interrogare un controllo."
    ],
    cli: ["uip gov aops-policy", "uip gov access-policy", "uip gov compliance-packs catalog get", "uip gov compliance-packs state", "uip gov deployed-policy"],
    prompt: "Crea una bozza di governance policy o analizza la posture ISO 42001, senza applicare cambiamenti finche il piano non e confermato.",
    handoffs: ["uipath-admin", "uipath-platform", "uipath-agents"],
    caveat: "Non usarla per normali permessi Orchestrator. I compliance pack sono preview e ogni mutazione richiede conferma, salvo waiver esplicito."
  },
  {
    id: "uipath-mcp-servers",
    name: "uipath-mcp-servers",
    category: "Integration",
    phase: "integrate",
    status: "in-development",
    product: "AgentHub MCP",
    files: "MCP server definitions",
    purpose: "Registra MCP server in AgentHub e crea resource tool su server UiPath.",
    when: "Usala per esporre capability esterne o UiPath come tool MCP richiamabili da agenti.",
    how: [
      "Scegli il tipo server: uipath, coded, command, remote, platform o swagger.",
      "Usa `mcp list --all-folders` per la discovery globale e specifica `--target-folder-key` o `--target-folder-path` per target cross-folder.",
      "Sui server `uipath`, crea solo resource tool per automation, agent, agentic process o API Workflow; i tool raw e Integration Service activity sono stati rimossi dalla guida rilasciata.",
      "Per Python MCP server o integrazione coded agent, passa anche da `uipath-agents`."
    ],
    cli: ["uip agenthub mcp list --all-folders", "uip agenthub mcp-tools candidates", "uip agenthub mcp-tools template resource", "uip agenthub mcp-tools create-resource --target-folder-key"],
    prompt: "Registra un MCP server AgentHub di tipo uipath e aggiungi un resource tool che esponga un'automazione della folder selezionata.",
    handoffs: ["uipath-agents", "uipath-platform", "uipath-governance"],
    caveat: "L'authoring manuale su server `uipath` copre solo resource tool; per Python MCP server o integrazione coded agent passa a `uipath-agents`."
  },
  {
    id: "uipath-solution",
    name: "uipath-solution",
    category: "Deploy",
    phase: "deploy",
    status: "preview",
    product: "Solutions, .uipx",
    files: ".uipx, solution config",
    purpose: "Gestisce lifecycle di soluzioni UiPath: init, import/add project, resource refresh, pack, publish, deploy, activate e upload.",
    when: "Usala per bundlare più progetti RPA, Flow, Case, Agent o API Workflow in una soluzione deployabile.",
    how: [
      "Usa layout e risorse già validate dalle skill di authoring.",
      "Usa il gruppo canonico `uip solution projects` per add, import e remove; conserva `uip solution resources` per le risorse.",
      "Fai eseguire pack/publish/deploy con output JSON e verifiche di ambiente.",
      "Se la solution è già deployata, usa il comando preview `uip solution deploy upgrade <deployment-key>` per aggiornarla in place all'ultima versione pubblicata.",
      "Dopo modifiche alle risorse, refresh e ricrea package prima del deploy.",
      "Per feed controllati, offline o air-gapped, passa un `NuGet.config` locale con `--nuget-sources-config-path` a restore e pack.",
      "Verifica la piattaforma: Automation Cloud o Automation Suite 2.2510.0+; i project type supportati variano per versione."
    ],
    cli: ["uip solution init", "uip solution projects add", "uip solution projects import", "uip solution projects remove", "uip solution resources refresh", "uip solution restore --nuget-sources-config-path", "uip solution pack --nuget-sources-config-path", "uip solution publish", "uip solution deploy run", "uip solution deploy upgrade"],
    prompt: "Prepara questa soluzione UiPath per il deploy: verifica progetti inclusi, refresh risorse, pack e dimmi il comando di publish/deploy.",
    handoffs: ["uipath-platform", "uipath-planner", "uipath-rpa", "uipath-maestro-flow", "uipath-maestro-bpmn", "uipath-agents", "uipath-coded-apps", "uipath-review", "uipath-troubleshoot"],
    caveat: "Non è supportata su Standalone Orchestrator; Maestro self-hosted richiede Automation Suite 2.2510.2+. Se validate/build falliscono, torna alla skill di prodotto."
  },
  {
    id: "uipath-test",
    name: "uipath-test",
    category: "Quality",
    phase: "improve",
    status: "in-development",
    product: "Test Manager",
    files: "test projects, test cases, executions",
    purpose: "Gestisce Test Manager: progetti, test case, set, esecuzioni, log, allegati, risultati, report e custom field.",
    when: "Usala per pianificare, eseguire e rendicontare test funzionali o regressivi in Test Manager.",
    how: [
      "Verifica autenticazione e scope progetto prima di leggere o modificare test.",
      "Crea o aggiorna test case/set, avvia esecuzioni e raccogli risultati.",
      "Per automazioni di test RPA passa a `uipath-rpa`; questa skill gestisce la superficie Test Manager."
    ],
    cli: ["uip tm projects", "uip tm test-cases", "uip tm test-sets", "uip tm executions", "uip tm reports"],
    prompt: "Trova il progetto Test Manager, crea un test set per questa release e genera un report delle esecuzioni fallite.",
    handoffs: ["uipath-rpa", "uipath-platform", "uipath-review"],
    caveat: "Non è la skill per scrivere XAML o C# test automation; gestisce asset ed esecuzioni Test Manager."
  },
  {
    id: "uipath-review",
    name: "uipath-review",
    category: "Quality",
    phase: "improve",
    status: "preview",
    product: "Review, quality gate, rule catalog",
    files: ".xaml, .cs, .flow, .bpmn, agent.json, .uipx",
    purpose: "Revisore read-only per struttura, qualita, best practice, cataloghi regole, allineamento PDD/SDD e rischi di deploy su artefatti UiPath.",
    when: "Usala prima di merge, publish o deploy, oppure quando vuoi un audit indipendente senza modifiche su RPA, agenti, Flow, BPMN, API workflow, Coded Apps o Solution.",
    how: [
      "Chiedi review read-only e indica scope: progetto, soluzione o artefatto singolo.",
      "Fai includere validazioni automatiche disponibili, poi giudizio manuale per pattern e rischi; per agent low-code esegui `uip agent refresh` prima di validate/review.",
      "Escludi `.agent-builder/`, `.local/build/` ed entry point low-code generati dall'inventario dei file authored; conserva gli ID regola esattamente come emessi.",
      "Usa il report per tornare alle skill di build con fix mirati."
    ],
    cli: ["uip rpa validate", "uip rpa build", "uip agent refresh", "uip agent validate", "uip maestro flow validate", "uip maestro bpmn validate", "review report"],
    prompt: "Esegui una review read-only della soluzione UiPath, elenca finding bloccanti, warning e test mancanti con riferimenti ai file.",
    handoffs: ["uipath-rpa", "uipath-maestro-flow", "uipath-agents", "uipath-solution"],
    caveat: "Non modifica manualmente i file; `uip agent refresh` è l'unica eccezione ammessa perché rigenera artefatti CLI-managed. Per i fix usa la skill di dominio."
  },
  {
    id: "uipath-troubleshoot",
    name: "uipath-troubleshoot",
    category: "Diagnostics",
    phase: "improve",
    status: "preview",
    product: "Troubleshooting",
    files: "logs, traces, incidents, diagnostic archives, app config",
    purpose: "Investiga in modo evidence-first la causa di errori, regressioni, fault, problemi runtime e comportamenti inattesi su prodotti, activity package e UiPath Assistant.",
    when: "Usala quando l'obiettivo principale è capire perché qualcosa è fallito, anche se la richiesta nomina direttamente Orchestrator, Flow, Agent, RPA, un activity package o condivide un archivio diagnostico di UiPath Assistant.",
    how: [
      "Parti dal segnale più forte e definisci sintomo, scope, ultimo stato noto funzionante e cambiamenti recenti.",
      "Leggi prima le investigation guide, poi scegli il playbook più vicino e usa solo i comandi documentati per raccogliere evidenze correlate.",
      "Per UiPath Assistant, parti dall'archivio ExportDiagnoseArchive e correla `combined.log` e `Robot.log` prima di proporre il fix.",
      "Per Coded Apps, confronta `uipath.json` con l'External Application e usa i playbook dedicati per OAuth, 401/403, CORS, callback, form e deploy 404.",
      "Per activity package usa i playbook consolidati: Invoke Workflow File design/runtime, Excel non installato, file bloccati, NullReference, sheet dinamici e Outlook shared mailbox.",
      "Per Orchestrator copre anche time limit serverless, contention di sessione/workstation, incident di piattaforma, credential store, output troppo grandi e policy queue/system-exception.",
      "Salva ogni risposta CLI grezza sotto la root dell'indagine e non ricostruire manualmente i file di evidenza se una redirezione fallisce.",
      "Formula ipotesi formali solo se non esiste un playbook adatto, le cause sono multiple o cross-domain, oppure le evidenze si contraddicono.",
      "Quando la causa è confermata, presenta il fix minimo e passa l'applicazione alla skill proprietaria dell'artefatto."
    ],
    cli: ["uip or jobs logs", "uip traces spans get", "uip maestro flow incidents", "uip admin external-apps get", "references/investigation_guide.md", "references/presenting.md"],
    prompt: "Questo job UiPath è faulted: ancora l'indagine alle evidenze, segui il playbook appropriato e restituisci root cause, fix minimo e verifica.",
    handoffs: ["uipath-platform", "uipath-admin", "uipath-coded-apps", "uipath-insights", "uipath-rpa", "uipath-maestro-flow", "uipath-feedback"],
    caveat: "Le operazioni platform note restano a `uipath-platform`; quando arrivano nuovi dati, l'indagine deve riancorarsi al segnale più forte invece di difendere l'ipotesi precedente."
  },
  {
    id: "uipath-feedback",
    name: "uipath-feedback",
    category: "Feedback",
    phase: "improve",
    status: "stable",
    product: "Feedback CLI",
    files: "bug reports, improvement suggestions",
    purpose: "Invia bug report o suggerimenti al team UiPath con `uip feedback send`.",
    when: "Usala quando hai già identificato un problema del tool, una mancanza di documentazione o un miglioramento da proporre.",
    how: [
      "Raccogli riproduzione, ambiente, comando, output, expected vs actual e impatto.",
      "Fai preparare a Codex un report conciso e salva la descrizione multilinea in un file temporaneo.",
      "Invia il body con `--description-file`: non passarlo inline, perché PowerShell può interpretarne le righe come opzioni.",
      "Usala dopo troubleshoot quando la causa sembra essere una lacuna o bug del prodotto/skill."
    ],
    cli: ["uip feedback send --description-file", "/uipath-feedback"],
    prompt: "Prepara e invia un feedback UiPath per questo errore CLI, includendo comando, output, versione e passi di riproduzione.",
    handoffs: ["uipath-troubleshoot"],
    caveat: "Non sostituisce l'investigazione: prima capisci se è errore di progetto, configurazione o prodotto."
  }
];

const capabilityDetails = {
  "uipath-automation-discovery": [
    "Raccoglie input da conversazioni, ticket, documenti e sistemi operativi per individuare lavoro ripetitivo e manuale.",
    "Riconosce pattern di automazione: passaggi ripetuti, handoff fragili, attività rule-based, backlog ricorrenti e dipendenze da singole persone.",
    "Classifica opportunità in tier di priorità con impatto, complessità, rischio, prerequisiti dati e percorso UiPath suggerito.",
    "Propone se un caso è più adatto a RPA, Flow, Agent, Case Management, API Workflow, HITL, IXP o combinazioni multi-prodotto.",
    "Esegue sizing opzionale con complexity band, pack-hours, fattori di aggiustamento e contingency usando solo matrici autorevoli fornite dall'utente.",
    "Scompone le opportunità oversized oltre 7 applicazioni o 8 varianti invece di forzarle nella fascia massima.",
    "Produce un report esecutivo e tecnico che alimenta direttamente `uipath-planner`."
  ],
  "uipath-planner": [
    "Analizza PDD o richieste non strutturate e genera un SDD implementabile con scope, contratti di produzione, sistemi, dati, eccezioni, rischi e criteri di accettazione.",
    "Seleziona la superficie UiPath dal bisogno sintetizzato invece che da parole chiave di prodotto: RPA, Maestro Flow, BPMN, Case, Agents, Coded Apps, API Workflow, Platform o Solution.",
    "Deriva task multi-skill ordinati per fasi, con owner implicito, dipendenze, stop condition e validazioni richieste.",
    "Usa template SDD specifici per RPA, Flow, Agent, Case, API Workflow e Coded App.",
    "Aiuta a separare lavoro greenfield, brownfield, integrazione tenant, deploy e review finale."
  ],
  "uipath-rpa": [
    "Crea nuovi progetti RPA moderni con `uip rpa init`, scegliendo target framework, expression language e template appropriato.",
    "Modifica workflow XAML, coded workflow C#, test case e file di progetto senza rompere `entryPoints` e `fileInfoCollection`.",
    "Aggiorna project context tramite discovery agent quando `.claude/rules/project-context.md` manca o diventa stale.",
    "Scopre e installa activity package, legge documentazione `.local/docs` e genera activity XAML partendo da default sicuri.",
    "Gestisce UI automation cross-platform desktop e web con Object Repository, target capture, selector placeholders e workflow multi-schermo.",
    "Verifica `UiPath.UIAutomation.Activities` >= `26.10.2-alpha.12792334` e richiede consenso prima di installare o aggiornare il package.",
    "Collega di default i target Object Repository tramite IdRef e usa l'embed solo per il riferimento che non si lascia collegare.",
    "Preserva l'attributo `Version` delle attività UIA `N*`, usa `TextString` come output di `NGetText` e riacquisisce i target rimontati dalle interazioni.",
    "Usa `references/uia-starter-guide.md` per le policy e la guida installata nel package UIA per authoring e target capture.",
    "Per una destinazione Studio Web avvolge il progetto RPA in una Solution e lo importa con il gruppo canonico `uip solution projects`.",
    "Applica la validazione in due fasi: `validate` per ciascun file modificato e `build` per l'intero progetto; consulta le analyzer rules solo on demand.",
    "Supporta debug headless con breakpoint per attività, `debug state`, aggiornamento breakpoint e attesa di uno stato stabile prima di proseguire.",
    "Raccoglie profiling avanzato con timing per attività e screenshot prima/dopo l'esecuzione tramite `uip rpa debug start --profiling`.",
    "Interpreta `DebugState: Suspended` come eccezione in attesa di decisione anche quando `HasErrors` è ancora false.",
    "Supporta pattern enterprise come REFramework, queue processing, trigger, library authoring, long-running workflow e coded fallback."
  ],
  "uipath-maestro-flow": [
    "Crea e modifica progetti `.flow` con layout soluzione compatibile Studio Web, scoprendo prima eventuali `.uipx` e chiedendo quale usare prima di qualsiasi scaffold.",
    "Aggiunge nodi, edge, variabili, trigger, connector, managed HTTP, script, subflow, RPA, agenti, approval e IxP.",
    "Usa la registry per scegliere node type e connector reali, evitando chiavi dedotte dal nome commerciale.",
    "Per i generic connector trigger risolve e passa `objectName` in `node configure --detail`; i curated trigger usano il nome oggetto incluso nel manifest.",
    "Distingue nodi posseduti dal CLI e nodi editabili nel JSON, riducendo errori di configurazione.",
    "Valida, formatta, pubblica, carica in Studio Web, gestisce run/instance e supporta eval set con `uip maestro flow eval`.",
    "Considera i warning di `flow validate` difetti da correggere anche con exit code 0, in particolare connector keyword e fallback HTTP generici.",
    "Diagnostica failure mode noti con incident, trace, variabili runtime e BPMN deployato."
  ],
  "uipath-maestro-bpmn": [
    "Autore e modifica processi Maestro BPMN per orchestrazioni formali e long-running.",
    "Gestisce file `.bpmn`, `project.uiproj`, `entry-points.json`, `operate.json`, `bindings_v2.json` e package descriptor.",
    "Separa la discovery-only dall'authoring e salva l'evidenza registry senza creare artefatti non richiesti.",
    "Scrive lo scheletro BPMN e le strutture non possedute dal registry, lasciando al CLI solo nodi e template registry-owned.",
    "Mantiene tag BPMN lower-camel, diagramma completo, Script Task con `result.response` e output root ispezionabili.",
    "Valida struttura, binding, entry point e deploy-readiness offline con `uip maestro bpmn validate`; il validator bundled precedente è stato rimosso.",
    "Instrada correttamente richieste Flow JSON, RPA, agenti o Case verso skill specialistiche."
  ],
  "uipath-maestro-case": [
    "Crea `caseplan.json` da SDD, finalizza `sdd.draft.md` o progetta greenfield per best assumption tramite un unico Case Review completo.",
    "Modifica caseplan esistenti con percorso brownfield mirato, senza rigenerare l'intero piano quando serve solo un edit.",
    "Modella case, stage, task, condizioni di ingresso/uscita, SLA, variabili globali e IO binding.",
    "Esegue un other-path sweep su rework, rejection, cancellation, SLA, failure e override prima della conferma del design.",
    "Presenta all'avvio il flusso e raccoglie la preferenza per una pausa di preview; produce `tasks.md` e procede per fasi fino a validate, debug e publish.",
    "Dopo `tasks.md` procede normalmente al prototipo; si ferma solo quando l'utente chiede esplicitamente un output plan-only.",
    "Mantiene `caseplan.json` nella root del progetto e non modifica `caseplan.json.bpmn` o layout `content/` generati.",
    "Normalizza task sequenziali, event-triggered e ad hoc, stage secondari interrupting e regole root di completamento del case.",
    "Scrive direttamente JSON tramite Write/Edit e non usa comandi mutativi `uip maestro case` per authoring.",
    "Registra ogni risoluzione in `registry-resolved.json` con stage, task, tipo, cache, query, match completi, selezione e motivazione.",
    "Raggruppa le risorse mancanti per nome e tipo e crea inline solo Agent o API Workflow selezionati; le altre restano placeholder espliciti.",
    "Valida e prepara pubblicazione di case management con attenzione a binding e regole di espressione."
  ],
  "uipath-agents": [
    "Decide e gestisce progetti agent low-code (`agent.json`) o coded Python (`pyproject.toml`, SDK UiPath).",
    "Scaffolda agenti, integra LangGraph, LlamaIndex o OpenAI Agents e supporta Agent Builder/Studio Web local workspace.",
    "Aggiunge tool, process invocation, Integration Service, MCP, memory spaces, guardrail, escalation HITL, attachments e context grounding.",
    "Rigenera binding da chiamate SDK per coded agent, evitando risorse hardcoded non sovrascrivibili per ambiente.",
    "Scopre via CLI i modelli LLM-as-judge, poi esegue debug, smoke eval, evaluation set, tracing, pack/deploy e version bump fino alla delivery fork."
  ],
  "uipath-api-workflow": [
    "Scaffolda ogni workflow con `uip api-workflow init`, ottenendo la struttura `project.uiproj` compatibile Studio Web e la registrazione nella Solution quando serve.",
    "Usa `--skip-solution-registration` solo per progetti locali/CLI e non consegna mai un `Workflow.json` isolato.",
    "Crea workflow JSON DSL per automazioni API-first con sequence, assign, JavaScript, if, loop, try/catch, wait e response.",
    "Integra HTTP manuale, managed HTTP e Integration Service connector activity tramite registry resolve e stub.",
    "Valida offline, poi esegue `run` solo con consenso quando ci sono credenziali o chiamate reali.",
    "Gestisce template, control-flow annidato, retry HTTP, contesto espressioni e troubleshooting del DSL.",
    "Esegue package e publish via solution lifecycle, poi opera workflow pubblicati tramite trigger HTTP, schedule o evento.",
    "Diagnostica run cloud tramite connection Integration Service, job/log Orchestrator e trace span."
  ],
  "uipath-coded-apps": [
    "Scaffolda Coded Web Apps e Coded Action Apps con config, schema azione e template TypeScript/CSS.",
    "Genera dashboard analytics, observability e governance da richiesta naturale, con metriche agent health, KPI, error rate e consumption trends.",
    "Valida `action-schema.json`, gestisce input/output di Action Center e genera UI per approvazione o data entry.",
    "Usa SDK `@uipath/uipath-typescript` per Orchestrator, Data Fabric, Maestro, Action Center, agenti, governance, traces, feedback e pagination.",
    "Legge signature e JSDoc dai `.d.ts` del package SDK installato invece di dedurre metodi dai reference o dal bundle compilato.",
    "Gestisce scope OAuth da `uipath.json`, scope `Apps.Read Apps.Write` per publish headless e sorgenti Insights/RTM prima di build o deploy.",
    "Gestisce i campi Data Fabric `MULTILINE_MAX`: recupera il contenuto completo per ID, non persiste i marker di list/query e non li usa in filtri o sort.",
    "Esegue debug locale, build, pack, publish e deploy non interattivo con folder key per workspace personale, cartella esistente o nuova cartella e modalità dashboard standalone/governance.",
    "Crea e aggiorna External Application con `uip admin external-apps`, preservando il portale come fallback per errori di autenticazione o permessi.",
    "Supporta Validation Station all-in-one o componibile con subcomponenti sincronizzati, asset runtime e CSS raw verificati in dev e build.",
    "Supporta file sync e pattern per app con document tab o form complessi; nelle Action App evita `sdk.initialize()`."
  ],
  "uipath-functions": [
    "Scaffolda Python Coded Functions con `uip function new --language py` e genera metadati con `uip function init`.",
    "Definisce input/output tipizzati con Pydantic, dataclass o classi annotate e registra gli entry point nel map `functions` di `uipath.json`.",
    "Implementa logica deterministica senza chiamate LLM, con `UiPath()` inizializzato lazy e tracing sull'entry point.",
    "Usa SDK UiPath per assets, buckets, queues, attachments e Integration Service connections quando serve accesso platform.",
    "Esegue run locale, pack, publish e push, separando Python job semantics da funzioni JS/TS HTTP per Coded Apps."
  ],
  "uipath-connector-builder": [
    "Scaffolda o aggiorna repository connector `periodic-*` con `element.json`, `element-metadata.json`, standard resources e hook JavaScript.",
    "Configura 19 tipi di autenticazione con `auth set`, inclusi OAuth2, PKCE, client credentials, API key, basic, JWT, jwtOauth claims, FPS, none e AWS v4.",
    "Crea attivita Integration Service con metodi, path, parametri, campi request/response tipizzati e curatela Studio Web.",
    "Usa `.uip-connector.json` per ritrovare l'ultimo connector inizializzato e richiede `hintText` nelle configurazioni visibili all'utente.",
    "Mantiene disponibili le attività CRUD generiche accanto alle attività curate.",
    "Aggiunge trigger polling o webhook, system resources, hook pre/post request e configurazioni per host, region e valori per-connection.",
    "Esegue `inspect` e `validate`, tratta i warning come gap da risolvere e prepara import/publish con version bump quando serve.",
    "Passa a `uipath-platform` per usare connector pubblicati e a `uipath-maestro-flow` per nodi connector dentro un Flow."
  ],
  "uipath-human-in-the-loop": [
    "Disegna approval gate, validation checkpoint, escalation, write-back e enrichment umano dentro Flow, Maestro o agenti.",
    "Rileva la surface corretta: `.flow`, low-code agent, Maestro BPMN o Coded Action App; per coded agent passa a `uipath-agents`.",
    "Sceglie task type tra QuickForm, Coded Action App, deployed AppTask ed escalation agentica.",
    "Definisce schema input/output, outcome, campi obbligatori, label, mapping e rami successivi.",
    "In CI/headless applica un fallback non interattivo quando lo schema è già determinabile, invece di bloccare su una conferma impossibile.",
    "Scrive direttamente i nodi HITL appropriati, incluso `bpmn:UserTask` per QuickForm o Coded Action App in Maestro, e segnala cosa resta da configurare lato app/task.",
    "Valida frequentemente i nodi Maestro con `uip maestro bpmn validate`."
  ],
  "uipath-tasks": [
    "Gestisce task Action Center runtime: list, get, assign, complete e verify.",
    "Lavora con tenant, folder, stato, priorità e tipo task prima di agire.",
    "Distingue approval, validation, form e altri task Action Center.",
    "Segue il flusso discover -> plan -> act -> verify per evitare modifiche su task sbagliati.",
    "Supporta troubleshooting di permessi, tenant errato, folder scope e task non trovato."
  ],
  "uipath-insights": [
    "Interroga `uip insights jobs` per KPI job, success rate, processing time e conteggi aggregati.",
    "Analizza trend completed/uncompleted, process breakdown, top failures, failure reasons e failure details.",
    "Richiede sempre un time range relativo o assoluto e usa `--output json` per parsing affidabile.",
    "Per range assoluti risolve le date separatamente, poi passa valori epoch-ms letterali; `--started-before` è esclusivo.",
    "Parte da `summary` e poi fa drill-down sui segnali piu rilevanti.",
    "Rimanda a `uipath-platform` per gestire job specifici e a `uipath-troubleshoot` per root-cause di errori puntuali."
  ],
  "uipath-ixp": [
    "Crea progetti IXP con tassonomia suggerita da Autopilot, importata o vuota e gestisce upload, download e cancellazione dei documenti.",
    "Verifica la sintassi nel CLI Reference prima di ogni comando e segnala quando non esiste un percorso `uip ixp` documentato.",
    "Crea gruppi e campi tassonomici riusando i data type built-in, con istruzioni per campo e per estrazione complessiva.",
    "Configura modello e preprocessing, leggendone lo stato corrente da `projects get-taxonomy`, poi rivede predizioni, conferma o annulla conferme e marca i campi mancanti.",
    "Sposta un campo con add-then-delete, dichiarando prima che il nuovo field ID non conserva le label confermate.",
    "Tratta `Occurrence` come indice valido solo per l'ultima lettura e preferisce un singolo batch `--updates` per gruppi ripetibili.",
    "Corregge valori OCR illeggibili durante la conferma senza usare `--corrections` per ribaltare una predizione errata.",
    "Analizza metriche e versioni modello, quindi gestisce publish, tag e rollback.",
    "Elenca tutti i candidati e il relativo tipo quando un nome è ambiguo, invece di selezionare un target per supposizione.",
    "Accetta una review esplicita dell'utente sui documenti nominati senza rifare discovery ridondante.",
    "Instrada i nodi document extraction dentro `.flow` verso `uipath-maestro-flow` e lascia il deploy folder/environment all'interfaccia di prodotto."
  ],
  "uipath-platform": [
    "Opera su UiPath Cloud, Orchestrator, Studio Web, Integration Service, Data Fabric, LLM Gateway, traces e licensing via `uip` CLI.",
    "Gestisce login, tenant, folder, assets, queues, queue items, buckets, files, libraries, webhooks, triggers, jobs e processes.",
    "Gestisce Data Fabric via `uip df`: entity schema, record CRUD, search/query, aggregazioni, choice set, file attachment, CSV import e folder scoping.",
    "Gestisce `MULTILINE_MAX`: list/query restituiscono un marker, il contenuto completo richiede `records get`, e il campo non supporta filtri o ordinamento.",
    "Legge sempre il reference Data Fabric prima dei comandi `uip df`, inclusi upload, download e cancellazione degli attachment.",
    "Per Data Fabric rispetta preview/approval gate su schema, choice set e operazioni irreversibili, con `--folder-key` quando necessario.",
    "Scopre connector, connection, activity e trigger Integration Service per alimentare Flow, RPA e agenti.",
    "Risolve l'oggetto dei generic CRUD trigger Integration Service e lo espone a Maestro Flow come `detail.objectName`.",
    "Configura o audita BYO LLM connection per OpenAI, Azure OpenAI, Bedrock, Vertex, Anthropic e compatibili.",
    "Legge trace span e risorse operative, usando REST solo quando il CLI non copre il caso.",
    "Passa a `uipath-insights` quando servono metriche aggregate e trend sui job invece di gestione job puntuale.",
    "Instrada subito a `uipath-troubleshoot` le richieste causali o di root cause, anche quando citano una risorsa platform.",
    "Instrada audit trail, login history e who-did-what di organizzazione/tenant a `uipath-admin`, separandoli da `uip or audit-logs`.",
    "Interroga i consumabili licenza con `uip platform licenses consumables get`, usando `--mode` per summary, daily o folders."
  ],
  "uipath-admin": [
    "Gestisce Identity Server: utenti, gruppi, robot account, external apps, PAT e credenziali federate.",
    "Opera su Authorization: ruoli custom, assegnazioni ruolo, catalogo permessi e check-access PDP.",
    "Gestisce OMS: organizzazione, tenant lifecycle, servizi, regioni e operazioni asincrone.",
    "Configura IP restriction, enforcement, bypass rules e controlli anti-lockout.",
    "Esegue audit su org o tenant con `uip admin audit`, discovery live delle source, query paginate ed export JSON giornaliero o CSV singolo.",
    "Mantiene separato l'audit trail org/tenant da `uip or audit-logs` e non attribuisce un attore quando la query mirata non restituisce eventi."
  ],
  "uipath-governance": [
    "Crea policy AOps per bloccare, limitare o imporre feature in Studio, StudioX, Assistant, Robot, AI Trust Layer e Agent Builder.",
    "Analizza, applica, rimuove o ripristina compliance standards come ISO 42001 con posture state-aware e conferma esplicita in un turno separato.",
    "Ritenta fino a tre volte i conflitti 409 temporanei dei compliance pack quando il server richiede di attendere 10 secondi.",
    "Crea Access ToolUsePolicy per controllare quando un workflow può invocarne un altro come tool.",
    "Filtra policy per tag, caller, actor, user o group, distinguendo layer prodotto e layer tool-use.",
    "Guida deploy, gestione, campionatura, effective-policy query e verifica delle policy.",
    "Aiuta a evitare regole troppo ampie tramite domanda di disambiguazione e planning dedicato."
  ],
  "uipath-mcp-servers": [
    "Registra server MCP AgentHub di tipo uipath, coded, command, remote, platform o swagger.",
    "Crea resource tool su server `uipath` per automation, agent, agentic process o API Workflow.",
    "Scopre server in tutte le folder con `mcp list --all-folders` e usa target folder espliciti per riferimenti cross-folder.",
    "Non propone più tool raw o Integration Service activity: la guida 1.200 documenta soltanto `create-resource` per l'authoring manuale.",
    "Guida discovery, authoring e troubleshooting dei resource tool MCP tramite CLI.",
    "Instrada Python MCP/coded agent verso `uipath-agents`.",
    "Aiuta a rendere capability aziendali richiamabili dagli agenti tramite protocollo MCP."
  ],
  "uipath-solution": [
    "Inizializza soluzioni, aggiunge/importa/rimuove progetti con `uip solution projects` e gestisce `.uipx`.",
    "Esegue resource refresh/add/remove/edit per rendere il deploy parametrico e ripetibile.",
    "Packa, pubblica, deploya, attiva e carica soluzioni verso UiPath.",
    "Aggiorna in place deployment esistenti con il comando preview `uip solution deploy upgrade`, monitorando poi lo stato fino al completamento.",
    "Usa `--nuget-sources-config-path` su restore e pack per controllare i feed in ambienti offline, air-gapped o CI.",
    "Gestisce scenari complessi: risorse condivise cloud, riferimenti intra-solution, virtual resources e nomi uguali su folder diverse.",
    "Supporta Automation Cloud e Automation Suite 2.2510.0+, con project type vincolati alla versione; non supporta Standalone Orchestrator.",
    "Instrada errori di build o validate verso le skill di authoring invece di mascherarli nel deploy."
  ],
  "uipath-test": [
    "Gestisce Test Manager: progetti, requirement, test case, test set, execution, log, attachment, result e report.",
    "Crea, lista, aggiorna, elimina e cerca entità di test con scope progetto esplicito.",
    "Avvia o monitora esecuzioni e genera report orientati a stakeholder diversi.",
    "Gestisce custom field, object label e wait command per processi asincroni.",
    "Instrada la scrittura di test automation RPA verso `uipath-rpa`."
  ],
  "uipath-review": [
    "Esegue audit read-only su RPA, agenti, Flow, BPMN, Coded Apps, Case e Solution.",
    "Scopre progetto, PDD/SDD, lingua, framework, artifact marker e validazioni disponibili, escludendo output generati come `.agent-builder/` e `.local/build/`.",
    "Per agent low-code esegue `uip agent refresh` prima di validate/review e conserva gli ID regola esattamente come emessi.",
    "Combina validation automatica, review CLI, cataloghi regole per agenti/RPA/Flow/BPMN/API/Coded Apps e giudizio manuale.",
    "Produce finding bloccanti, warning, opportunità, allineamento PDD, risultati validation e next step.",
    "Calcola grading per agenti e valuta ottimizzazione, sicurezza, mantenibilità e readiness al deploy."
  ],
  "uipath-troubleshoot": [
    "Ancora l'indagine al segnale più forte, definendo sintomo, scope, ultimo stato funzionante e cambiamenti recenti.",
    "Legge le investigation guide generica e di dominio prima dei comandi, poi segue il playbook usando le forme comando esatte documentate.",
    "Diagnostica API Workflow, Studio, UiPath Assistant, Jira, OCR/Document Understanding, PDF, IPC, SAP BAPI, Slack, Terminal, System, UI Automation, Coded Apps, Action Apps e runtime agent tramite playbook dedicati.",
    "Copre Invoke Workflow File design/runtime, Excel non installato, workbook lock, NullReference, sheet dinamici e Outlook shared mailbox con playbook consolidati.",
    "Copre failure Orchestrator come time limit serverless, workstation/session contention, incident di piattaforma, credential store, output troppo grandi e soglie system-exception.",
    "Conserva output CLI verbatim sotto la root dell'indagine e usa il fallback documentato quando il filtro esatto per nome di una queue restituisce HTTP 400.",
    "Usa ipotesi formali solo su trigger di escalation: nessun playbook adatto, cause multiple o cross-domain, oppure evidenze contraddittorie.",
    "Analizza log, trace, incident, job, queue, error code, runtime exception e storia configurativa.",
    "Distingue causa primaria, fattori contribuenti e fix minimo verificabile, poi delega la correzione dell'artefatto alla skill proprietaria senza modificarlo direttamente.",
    "Riancora l'indagine quando emergono nuovi dati e produce una risoluzione supportata da evidenze."
  ],
  "uipath-feedback": [
    "Raccoglie prerequisiti, ambiente, comando, errore, expected/actual, prompt e session retrospective.",
    "Sanitizza dati sensibili prima dell'invio.",
    "Costruisce un report strutturato per bug o miglioramento.",
    "Chiede conferma utente prima di inviare con `uip feedback send` e usa sempre `--description-file` per i body multilinea.",
    "Si usa dopo troubleshooting quando sembra emergere un problema del tool, della skill o del prodotto."
  ]
};

const lifecycle = [
  {
    key: "design",
    title: "1. Discover & Design",
    text: "Opportunity mining, PDD, SDD, scelte architetturali e task plan.",
    skills: ["uipath-automation-discovery", "uipath-planner"]
  },
  {
    key: "build",
    title: "2. Build",
    text: "Artefatti locali: RPA, Flow, BPMN, Case, Agent, API, App e Functions.",
    skills: ["uipath-rpa", "uipath-maestro-flow", "uipath-maestro-bpmn", "uipath-maestro-case", "uipath-agents", "uipath-api-workflow", "uipath-coded-apps", "uipath-functions"]
  },
  {
    key: "integrate",
    title: "3. Integra",
    text: "Human tasks, IXP, Data Fabric via Platform, connector builder e MCP.",
    skills: ["uipath-human-in-the-loop", "uipath-ixp", "uipath-connector-builder", "uipath-platform", "uipath-mcp-servers"]
  },
  {
    key: "deploy",
    title: "4. Deploy",
    text: "Pack, publish, deploy, activate e risorse soluzione.",
    skills: ["uipath-solution", "uipath-platform"]
  },
  {
    key: "operate",
    title: "5. Operate",
    text: "Tenant, Orchestrator, task runtime, Insights e run.",
    skills: ["uipath-platform", "uipath-admin", "uipath-tasks", "uipath-insights"]
  },
  {
    key: "improve",
    title: "6. Test & Improve",
    text: "Test, review, governance, troubleshooting e feedback.",
    skills: ["uipath-test", "uipath-review", "uipath-governance", "uipath-troubleshoot", "uipath-feedback"]
  }
];

const developerFlow = [
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
];

const iterationPaths = [
  {
    state: "pass",
    title: "Passa",
    text: "Esamina i file effettivi, non solo il riepilogo, quindi approva separatamente publish, deploy o altre modifiche a sistemi condivisi."
  },
  {
    state: "refine",
    title: "Gap localizzato",
    text: "Correggi e ripeti build + verifica. In genere bastano 2–3 cicli generate-check-refine."
  },
  {
    state: "restart",
    title: "Struttura errata o errori ripetuti",
    text: "Interrompi la catena di patch: riparti in una sessione fresca con contesto, piano o contratto del prompt corretti."
  }
];

const guide = [
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
];

const statusLabels = {
  stable: "Stable",
  preview: "Preview",
  "in-development": "In-development"
};

window.uipathSkillsData = {
  repoUrl,
  skills,
  capabilityDetails,
  lifecycle,
  developerFlow,
  iterationPaths,
  guide,
  statusLabels
};

let currentFilter = "all";
let currentSkillId = window.location.hash.replace("#", "") || "uipath-automation-discovery";

const listEl = document.querySelector("#skillList");
const searchEl = document.querySelector("#searchInput");
const filterEls = [...document.querySelectorAll(".filter-chip")];

function translator() {
  return window.uipathI18n;
}

function t(key, params) {
  return translator()?.t(key, params) || key;
}

function localizedSkill(skill) {
  return translator()?.localizeSkill(skill) || skill;
}

function localizedLifecycle(item) {
  return translator()?.localizeLifecycle(item) || item;
}

function localizedGuide(item, index) {
  return translator()?.localizeGuide(item, index) || item;
}

function localizedDeveloperFlow(item, index) {
  return translator()?.localizeDeveloperFlow(item, index) || item;
}

function localizedIterationPath(item, index) {
  return translator()?.localizeIterationPath(item, index) || item;
}

function phaseLabel(phase) {
  return translator()?.phaseLabel(phase) || phase;
}

function statusLabel(status) {
  return translator()?.statusLabel(status) || statusLabels[status] || status;
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function skillMatches(skill, query) {
  if (!query) return true;
  const localized = localizedSkill(skill);
  const haystack = normalize([
    skill.name,
    localized.category,
    localized.product,
    skill.files,
    localized.purpose,
    localized.when,
    localized.prompt,
    localized.caveat,
    (localized.capabilities || capabilityDetails[skill.id] || []).join(" "),
    (localized.how || skill.how).join(" "),
    skill.cli.join(" "),
    skill.handoffs.join(" ")
  ].join(" "));
  return haystack.includes(normalize(query));
}

function filteredSkills() {
  const query = searchEl.value.trim();
  return skills.filter((skill) => {
    const phaseMatch = currentFilter === "all" || skill.phase === currentFilter;
    return phaseMatch && skillMatches(skill, query);
  });
}

function renderSkillList() {
  const visible = filteredSkills();
  listEl.innerHTML = visible.map((skill) => {
    const localized = localizedSkill(skill);
    return `
    <button class="skill-nav-item ${skill.id === currentSkillId ? "is-selected" : ""}" type="button" data-skill="${skill.id}">
      <span class="skill-nav-title">${skill.name}</span>
      <span class="skill-nav-meta">${localized.category} · ${localized.product}</span>
    </button>
  `;
  }).join("");

  if (!visible.some((skill) => skill.id === currentSkillId) && visible.length) {
    currentSkillId = visible[0].id;
    renderDetail();
  }

  document.querySelector("#skillCount").textContent = String(skills.length);
}

function badgeClass(status) {
  if (status === "stable") return "stable";
  if (status === "preview") return "preview";
  return "dev";
}

function renderSubskills(skill) {
  const subskills = skill.handoffs.map((id) => ({
    id,
    skill: skills.find((item) => item.id === id)
  }));
  const subskillCount = subskills.length;
  document.querySelector("#skillSubskillIntro").textContent = subskillCount
    ? t("ui.subskillIntro", { count: subskillCount })
    : t("ui.subskillNone");
  document.querySelector("#skillSubskills").innerHTML = subskills.map(({ id, skill: subskill }) => `
    <button class="subskill-card" type="button" data-subskill="${id}">
      <strong>${id}</strong>
      <span>${subskill ? localizedSkill(subskill).purpose : t("ui.missingSkill")}</span>
    </button>
  `).join("");
}

function renderDetail() {
  const skill = skills.find((item) => item.id === currentSkillId) || skills[0];
  const localized = localizedSkill(skill);
  currentSkillId = skill.id;
  window.history.replaceState(null, "", `#${skill.id}`);

  document.querySelector("#skillCategory").textContent = localized.category;
  document.querySelector("#skillTitle").textContent = skill.name;
  document.querySelector("#skillPurpose").textContent = localized.purpose;
  document.querySelector("#skillWhen").textContent = localized.when;
  document.querySelector("#skillPrompt").textContent = localized.prompt || skill.prompt;
  document.querySelector("#skillCaveat").textContent = localized.caveat || skill.caveat;
  document.querySelector("#skillCapabilities").innerHTML = (localized.capabilities || capabilityDetails[skill.id] || []).map((item) => `<li>${item}</li>`).join("");

  document.querySelector("#skillBadges").innerHTML = [
    `<span class="badge ${badgeClass(skill.status)}">${statusLabel(skill.status)}</span>`,
    `<span class="badge">${phaseLabel(skill.phase)}</span>`,
    `<span class="badge badge-files">${skill.files}</span>`
  ].join("");

  document.querySelector("#skillHow").innerHTML = (localized.how || skill.how).map((item) => `<li>${item}</li>`).join("");
  renderSubskills(skill);
  document.querySelector("#skillCli").innerHTML = skill.cli.map((item) => `<span class="command">${item}</span>`).join("");
  document.querySelector("#skillHandoffs").innerHTML = skill.handoffs.map((item) => `<li>${item}</li>`).join("");

  renderSkillList();
}

function renderLifecycle() {
  document.querySelector("#lifecycleGrid").innerHTML = lifecycle.map((phase) => {
    const localized = localizedLifecycle(phase);
    return `
    <article class="phase">
      <strong>${localized.title}</strong>
      <p>${localized.text}</p>
      <div class="mini-skills">
        ${phase.skills.map((id) => `<span class="mini-skill">${id.replace("uipath-", "")}</span>`).join("")}
      </div>
    </article>
  `;
  }).join("");
}

function renderGuide() {
  document.querySelector("#developerFlow").innerHTML = developerFlow.map((item, index) => {
    const localized = localizedDeveloperFlow(item, index);
    return `
    <li class="flow-step">
      <span class="flow-step-index" aria-hidden="true">${index + 1}</span>
      <div>
        <h3>${localized.title}</h3>
        <p>${localized.text}</p>
      </div>
    </li>
  `;
  }).join("");

  document.querySelector("#iterationPaths").innerHTML = iterationPaths.map((item, index) => {
    const localized = localizedIterationPath(item, index);
    return `
    <article class="iteration-path iteration-path-${item.state}">
      <h4>${localized.title}</h4>
      <p>${localized.text}</p>
    </article>
  `;
  }).join("");

  document.querySelector("#guideGrid").innerHTML = guide.map((item, index) => {
    const localized = localizedGuide(item, index);
    return `
    <article class="guide-item">
      <h3><span class="guide-index">${index + 1}</span>${localized.title}</h3>
      <p>${localized.text}</p>
    </article>
  `;
  }).join("");
}

function legacyCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) {
    throw new Error("Copy command failed");
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    legacyCopyText(text);
  }
}

function setupInstallCommandCopy() {
  const button = document.querySelector("[data-copy-install-command]");
  if (!button) return;

  button.addEventListener("click", async () => {
    const target = document.querySelector(`#${button.dataset.copyTarget}`);
    const command = target?.textContent?.trim();
    if (!command) return;

    try {
      await copyText(command);
      button.classList.add("is-copied");
      button.setAttribute("aria-label", t("ui.copiedInstallCommand"));
      button.setAttribute("title", t("ui.copiedInstallCommand"));
      window.setTimeout(() => {
        button.classList.remove("is-copied");
        button.setAttribute("aria-label", t("ui.copyInstallCommand"));
        button.setAttribute("title", t("ui.copyInstallCommand"));
      }, 1600);
    } catch {
      button.classList.remove("is-copied");
    }
  });
}

if (listEl && searchEl) {
  listEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-skill]");
    if (!button) return;
    currentSkillId = button.dataset.skill;
    renderDetail();
  });

  const subskillsEl = document.querySelector("#skillSubskills");
  if (subskillsEl) {
    subskillsEl.addEventListener("click", (event) => {
      const button = event.target.closest("[data-subskill]");
      if (!button) return;
      if (!skills.some((skill) => skill.id === button.dataset.subskill)) return;
      searchEl.value = "";
      currentFilter = "all";
      filterEls.forEach((item) => item.classList.toggle("is-active", item.dataset.filter === "all"));
      currentSkillId = button.dataset.subskill;
      renderDetail();
    });
  }

  searchEl.addEventListener("input", () => {
    renderSkillList();
  });

  filterEls.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      filterEls.forEach((item) => item.classList.toggle("is-active", item === button));
      renderSkillList();
    });
  });

  window.addEventListener("uipath-language-change", () => {
    renderLifecycle();
    renderGuide();
    renderSkillList();
    renderDetail();
  });

  renderLifecycle();
  renderGuide();
  renderSkillList();
  renderDetail();
  setupInstallCommandCopy();
}
