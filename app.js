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
    purpose: "Scopre opportunità di automazione analizzando segnali di lavoro ripetitivo, colli di bottiglia, single point of failure e modelli replicabili.",
    when: "Usala prima di progettare una soluzione specifica, quando vuoi capire cosa automatizzare in un team, processo, reparto o organizzazione.",
    how: [
      "Fornisci fonti o estratti di conversazioni, ticket, documentazione operativa, workflow manuali o sistemi sorgente.",
      "Chiedi a Codex di classificare opportunità per impatto, fattibilità, ripetibilità e percorso UiPath suggerito.",
      "Passa poi a `uipath-planner` solo per le opportunità selezionate e abbastanza mature."
    ],
    cli: ["references/intake-guide.md", "references/mining-guide.md", "references/report-template.md"],
    prompt: "Analizza questi materiali operativi e produci un report prioritizzato di opportunità di automazione UiPath, con tier, impatto, effort e skill consigliate.",
    handoffs: ["uipath-planner", "uipath-rpa", "uipath-maestro-flow", "uipath-agents", "uipath-human-in-the-loop", "uipath-platform"],
    caveat: "Non costruisce automazioni: trasforma segnali organizzativi in una pipeline di opportunità realistica e prioritizzata."
  },
  {
    id: "uipath-planner",
    name: "uipath-planner",
    category: "Design & planning",
    phase: "design",
    status: "preview",
    product: "PDD, SDD, task planning",
    files: "pdd.md, sdd.md, project.json, .flow, .bpmn, .py",
    purpose: "Ora unifica solution design e task planning: trasforma PDD in SDD implementabile e deriva una task list multi-skill eseguibile.",
    when: "Usala quando hai un PDD/SDD, quando devi scegliere prodotti UiPath o quando vuoi una roadmap tecnica prima di modificare progetti.",
    how: [
      "Fai leggere PDD, vincoli, sistemi, dati, eccezioni, SLA e criteri di successo.",
      "Chiedi un SDD implementabile e poi task granulari per build, test, deploy e handoff.",
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
    purpose: "Crea, modifica, valida, compila, esegue e testa automazioni RPA moderne in XAML o C# coded workflow, con discovery di progetto e regole UIA piu esplicite.",
    when: "Usala per workflow RPA, UI automation, Excel, email, file, code fallback, Integration Service da RPA, test case, error handling e correzione errori XAML/C#.",
    how: [
      "Apri Codex nella root che contiene `project.json`, così può rilevare framework, dipendenze e workflow.",
      "Lascia che Codex usi `uip rpa validate` per file e `uip rpa build` a livello progetto prima di dichiarare completato.",
      "Per UI automation, fai usare Object Repository e target capture UiPath; evita scorciatoie con Playwright, Selenium o DOM."
    ],
    cli: ["uip rpa init", "uip rpa validate", "uip rpa build", "uip rpa debug start", "agents/uipath-project-discovery-agent.md"],
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
      "Fai creare la soluzione prima del Flow: layout `<Solution>/<Project>/<Project>.flow`.",
      "Chiedi a Codex di usare registry search prima di creare risorse o scegliere connector.",
      "Usa validate per sicurezza; `flow debug` va autorizzato perché esegue davvero il processo."
    ],
    cli: ["uip solution init", "uip maestro flow init", "uip maestro flow registry search", "uip maestro flow validate", "uip maestro flow eval"],
    prompt: "Crea un Flow in una soluzione UiPath che riceve un trigger, legge dati da un connector, invoca un agente e produce un output validato.",
    handoffs: ["uipath-agents", "uipath-human-in-the-loop", "uipath-ixp", "uipath-rpa", "uipath-platform", "uipath-solution", "uipath-connector-builder"],
    caveat: "La skill distingue nodi editabili a mano e nodi posseduti dal CLI. Per i connector lascia configurare a `uip maestro flow node add/configure`."
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
      "Chiedi a Codex di ispezionare XML BPMN e file di progetto prima di modificare.",
      "Lascia al CLI i componenti Integration Service e i file generati di package.",
      "Usala per validazione e operatività BPMN, non per `.flow` JSON."
    ],
    cli: ["uip maestro bpmn validate", "uip maestro bpmn package", "bindings_v2.json", "entry-points.json"],
    prompt: "Rivedi questo progetto BPMN Maestro, correggi il modello e prepara la validazione/package senza toccare i file generati dal CLI.",
    handoffs: ["uipath-maestro-flow", "uipath-rpa", "uipath-agents", "uipath-troubleshoot"],
    caveat: "È diversa da Flow: se il file principale è `.flow`, passa a `uipath-maestro-flow`."
  },
  {
    id: "uipath-maestro-case",
    name: "uipath-maestro-case",
    category: "Authoring",
    phase: "build",
    status: "in-development",
    product: "Case Management",
    files: "caseplan.json",
    purpose: "Crea Case Management plan a partire da SDD o da un'intervista leggera, e modifica caseplan esistenti con operazioni brownfield mirate.",
    when: "Usala per soluzioni case-centric, dove il lavoro evolve per stati, attività umane, regole e dati associati al caso.",
    how: [
      "Parti da `sdd.md` quando esiste; altrimenti fai raccogliere a Codex le informazioni minime.",
      "Per greenfield fai generare `tasks.md` e poi `caseplan.json` con recipe JSON dedicate.",
      "Per brownfield usa edit mirati e pull dello stato server quando il case esiste gia in Studio Web.",
      "Valida e pubblica solo dopo aver verificato fasi, ruoli, variabili e binding."
    ],
    cli: ["uip maestro case validate", "caseplan.json", "tasks.md", "bindings_v2.json"],
    prompt: "Dal SDD crea un piano Case Management con fasi, task, variabili e regole, poi valida `caseplan.json`.",
    handoffs: ["uipath-planner", "uipath-maestro-bpmn", "uipath-rpa", "uipath-human-in-the-loop", "uipath-maestro-flow", "uipath-solution"],
    caveat: "Non usarla per BPMN o Flow generici: è centrata su `caseplan.json`."
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
    files: "main.json, document.dsl",
    purpose: "Autore per workflow JSON DSL eseguibili con `uip api-workflow run`, inclusi HTTP, JavaScript, controllo di flusso e connector Integration Service.",
    when: "Usala per automazioni API-first, orchestrazioni headless, fetch da API pubbliche/vendor e workflow JSON con `do[]`.",
    how: [
      "Parti dai template JSON e aggiungi attività dopo WorkflowStart nella root sequence.",
      "Valida offline prima di eseguire con credenziali o chiamate reali.",
      "Usa registry resolve e stub per attività Integration Service, non JSON inventato a mano."
    ],
    cli: ["uip api-workflow validate", "uip api-workflow run", "uip api-workflow registry resolve", "uip solution pack", "uip solution publish"],
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
      "Per dashboard, risolvi metriche, scope OAuth e sorgenti Insights/RTM prima di build e deploy.",
      "Per Web App e dashboard, leggi `scope` da `uipath.json`; per Action App usa `new UiPath()` senza `sdk.initialize()`.",
      "Usa preview/debug locale, poi pack/publish/deploy quando la UI è verificata."
    ],
    cli: ["uip codedapp create", "uip codedapp build", "uip codedapp debug", "uip codedapp pack", "references/dashboards/CAPABILITY.md"],
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
      "Scaffolda con `uip functions new <name> --language py` e registra gli entry point nel map `functions` di `uipath.json`.",
      "Definisci schema Input/Output tipizzato, inizializza `UiPath()` in modo lazy e ritorna errori come campi output invece di far propagare eccezioni.",
      "Esegui `uip functions init` prima di pack, publish o push quando cambiano schema o entry point."
    ],
    cli: ["uip functions new --language py", "uip functions init", "uip functions run", "uip functions pack", "uip functions publish", "uip functions push"],
    prompt: "Crea una Python Coded Function UiPath con input/output Pydantic, logica deterministica, init lazy del SDK, `uipath.json` aggiornato e `uip functions init` pronto per pack.",
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
      "Configura l'autenticazione con `auth set`, crea attivita e campi con i comandi builder, poi valida warning inclusi.",
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
      "Scegli il tipo task: QuickForm, Coded Action App, AppTask o escalation agentica.",
      "Scrivi il nodo nel progetto e verifica output/outcome usati dai passi successivi."
    ],
    cli: ["uip solution init", "QuickForm schema", "AppTask", "CreateTask", "CreateEscalation"],
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
      "Verifica login, tenant e time range prima di ogni query.",
      "Parti da `summary`, poi scendi su `top-failures`, `failures-by-reason`, timeline o process details.",
      "Per start/stop/log di un job specifico passa a `uipath-platform`; per root cause dettagliata passa a `uipath-troubleshoot`."
    ],
    cli: ["uip insights jobs summary", "uip insights jobs top-failures", "uip insights jobs failures-by-reason", "uip insights jobs completed-timeline", "uip insights jobs process-details"],
    prompt: "Analizza la salute dei job UiPath negli ultimi 7 giorni: mostra KPI, trend, processi piu fallosi e failure reason principali con output JSON.",
    handoffs: ["uipath-platform", "uipath-troubleshoot", "uipath-coded-apps", "uipath-rpa"],
    caveat: "Non avvia, ferma o modifica job e non fa root-cause profonda di un errore singolo; copre analytics aggregate dei job."
  },
  {
    id: "uipath-ixp",
    name: "uipath-ixp",
    category: "Documents & AI",
    phase: "integrate",
    status: "in-development",
    product: "IXP, Document Understanding",
    files: "document extraction projects",
    purpose: "Supporta revisione predizioni IXP, conferma campi, miglioramento prompt e pubblicazione modelli Document Understanding.",
    when: "Usala per attività IXP fuori da Flow: labeling/review, qualità estrazione, campi validi e prompt tuning.",
    how: [
      "Fornisci progetto, campi, esempi di documenti e risultati attesi.",
      "Chiedi a Codex di confrontare predizioni con ground truth e proporre prompt migliori.",
      "Per nodi IxP dentro `.flow`, passa invece a `uipath-maestro-flow`."
    ],
    cli: ["uip ixp projects", "uip ixp predictions", "uip ixp publish", "references/prediction-review.md"],
    prompt: "Analizza queste predizioni IXP, individua campi instabili e proponi modifiche al prompt prima della pubblicazione.",
    handoffs: ["uipath-maestro-flow", "uipath-troubleshoot", "uipath-platform"],
    caveat: "Non è la skill per modellare il Flow che usa IXP; è focalizzata sul ciclo del modello/document extraction."
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
      "Per Data Fabric, fai leggere prima `references/data-fabric/data-fabric.md` e poi il topic specifico su schema, record, query, choice set, file o import CSV.",
      "Richiedi `--output json` e filtri server-side per risultati affidabili.",
      "Usala come skill di supporto quando RPA, Flow o Agent devono scoprire risorse tenant."
    ],
    cli: ["uip login status", "uip or folders list", "uip or assets create", "uip df entities list", "uip df records query", "uip is connections list", "uip traces spans get"],
    prompt: "Verifica login e tenant, trova la folder corretta, lista risorse Orchestrator e Data Fabric necessarie e restituisci i riferimenti da usare nel workflow.",
    handoffs: ["uipath-solution", "uipath-planner", "uipath-rpa", "uipath-maestro-flow", "uipath-maestro-bpmn", "uipath-agents", "uipath-test", "uipath-insights", "uipath-connector-builder", "uipath-troubleshoot"],
    caveat: "Il REST diretto è fallback. Nella maggioranza dei casi il CLI gestisce header, paginazione, tenant e shape di output meglio del codice custom."
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
      "Per audit, specifica periodo, soggetto e risorsa.",
      "Per Orchestrator folder/jobs/processi passa a `uipath-platform`."
    ],
    cli: ["uip admin identity", "uip admin authz", "uip admin oms", "uip admin ip-restriction", "uip admin audit"],
    prompt: "Elenca i gruppi e le assegnazioni ruolo rilevanti per questo tenant, poi proponi la modifica minima senza applicarla.",
    handoffs: ["uipath-platform", "uipath-rpa", "uipath-governance", "uipath-troubleshoot"],
    caveat: "Sono operazioni sensibili: privilegia read-only, conferme esplicite e output auditabile."
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
      "Per compliance pack fai posture analysis, mostra piano e richiedi conferma prima di applicare setting."
    ],
    cli: ["uip gov aops-policy", "uip gov access-policy", "uip gov compliance-packs", "uip gov deployed-policy"],
    prompt: "Crea una bozza di governance policy o analizza la posture ISO 42001, senza applicare cambiamenti finche il piano non e confermato.",
    handoffs: ["uipath-admin", "uipath-platform", "uipath-agents"],
    caveat: "Non usarla per normali permessi Orchestrator: quella è piattaforma/admin."
  },
  {
    id: "uipath-mcp-servers",
    name: "uipath-mcp-servers",
    category: "Integration",
    phase: "integrate",
    status: "in-development",
    product: "AgentHub MCP",
    files: "MCP server definitions",
    purpose: "Registra MCP server in AgentHub e crea tool resource, raw o Integration Service activity su server UiPath.",
    when: "Usala per esporre capability esterne o UiPath come tool MCP richiamabili da agenti.",
    how: [
      "Scegli il tipo server: uipath, coded, command, remote, platform o swagger.",
      "Per Integration Service activity leggi il reference dedicato prima di authoring.",
      "Per Python MCP server o integrazione coded agent, passa anche da `uipath-agents`."
    ],
    cli: ["uip agenthub mcp", "uip agenthub mcp-tools", "is-activity", "resource", "raw"],
    prompt: "Registra un MCP server AgentHub di tipo uipath e aggiungi un tool Integration Service activity per creare un ticket.",
    handoffs: ["uipath-agents", "uipath-platform", "uipath-governance"],
    caveat: "Non è un sostituto dei connector Flow: serve a rendere tool disponibili agli agenti via MCP."
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
      "Fai eseguire pack/publish/deploy con output JSON e verifiche di ambiente.",
      "Dopo modifiche alle risorse, refresh e ricrea package prima del deploy."
    ],
    cli: ["uip solution init", "uip solution project add", "uip solution resource refresh", "uip solution pack", "uip solution publish", "uip solution deploy run"],
    prompt: "Prepara questa soluzione UiPath per il deploy: verifica progetti inclusi, refresh risorse, pack e dimmi il comando di publish/deploy.",
    handoffs: ["uipath-platform", "uipath-planner", "uipath-rpa", "uipath-maestro-flow", "uipath-maestro-bpmn", "uipath-agents", "uipath-coded-apps", "uipath-review", "uipath-troubleshoot"],
    caveat: "Non corregge automaticamente i workflow: se validate/build falliscono, torna alla skill di prodotto."
  },
  {
    id: "uipath-test",
    name: "uipath-test",
    category: "Quality",
    phase: "operate",
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
    phase: "operate",
    status: "preview",
    product: "Review, quality gate, rule catalog",
    files: ".xaml, .cs, .flow, .bpmn, agent.json, .uipx",
    purpose: "Revisore read-only per struttura, qualita, best practice, cataloghi regole, allineamento PDD/SDD e rischi di deploy su artefatti UiPath.",
    when: "Usala prima di merge, publish o deploy, oppure quando vuoi un audit indipendente senza modifiche su RPA, agenti, Flow, BPMN, API workflow, Coded Apps o Solution.",
    how: [
      "Chiedi review read-only e indica scope: progetto, soluzione o artefatto singolo.",
      "Fai includere validazioni automatiche disponibili, poi giudizio manuale per pattern e rischi.",
      "Usa il report per tornare alle skill di build con fix mirati."
    ],
    cli: ["uip rpa validate", "uip rpa build", "uip maestro flow validate", "uip solution pack", "review report"],
    prompt: "Esegui una review read-only della soluzione UiPath, elenca finding bloccanti, warning e test mancanti con riferimenti ai file.",
    handoffs: ["uipath-rpa", "uipath-maestro-flow", "uipath-agents", "uipath-solution"],
    caveat: "Per definizione non modifica file. Se vuoi fix automatici, chiedi poi alla skill specifica."
  },
  {
    id: "uipath-troubleshoot",
    name: "uipath-troubleshoot",
    category: "Diagnostics",
    phase: "operate",
    status: "preview",
    product: "Troubleshooting",
    files: "logs, traces, incidents, project artifacts",
    purpose: "Investiga root cause di errori, regressioni, job bloccati, fault, problemi runtime e comportamenti inattesi su prodotti UiPath.",
    when: "Usala quando qualcosa fallisce o rallenta e vuoi sapere perché, non solo applicare una correzione casuale.",
    how: [
      "Fornisci errore, trace id, job id, log, ultimo cambiamento e artefatti correlati.",
      "Lascia seguire triage, ipotesi, test e valutazione prima della fix.",
      "Quando la causa è confermata, passa alla skill di prodotto per l'implementazione della correzione."
    ],
    cli: ["uip or jobs logs", "uip traces spans get", "uip maestro flow incidents", "runtime exception playbooks"],
    prompt: "Questo job UiPath è faulted: analizza log e trace, formula ipotesi, verifica la root cause e proponi la correzione minima.",
    handoffs: ["uipath-platform", "uipath-insights", "uipath-rpa", "uipath-maestro-flow", "uipath-feedback"],
    caveat: "Non saltare direttamente alla soluzione: la skill è pensata per preservare evidenza e ragionamento causale."
  },
  {
    id: "uipath-feedback",
    name: "uipath-feedback",
    category: "Feedback",
    phase: "operate",
    status: "stable",
    product: "Feedback CLI",
    files: "bug reports, improvement suggestions",
    purpose: "Invia bug report o suggerimenti al team UiPath con `uip feedback send`.",
    when: "Usala quando hai già identificato un problema del tool, una mancanza di documentazione o un miglioramento da proporre.",
    how: [
      "Raccogli riproduzione, ambiente, comando, output, expected vs actual e impatto.",
      "Fai preparare a Codex un report conciso prima dell'invio.",
      "Usala dopo troubleshoot quando la causa sembra essere una lacuna o bug del prodotto/skill."
    ],
    cli: ["uip feedback send", "/uipath-feedback"],
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
    "Produce un report esecutivo e tecnico che alimenta direttamente `uipath-planner`."
  ],
  "uipath-planner": [
    "Analizza PDD o richieste non strutturate e genera un SDD implementabile con scope, sistemi, dati, eccezioni, rischi e criteri di accettazione.",
    "Seleziona la superficie UiPath corretta: RPA, Maestro Flow, BPMN, Case, Agents, Coded Apps, API Workflow, Platform o Solution.",
    "Deriva task multi-skill ordinati per fasi, con owner implicito, dipendenze, stop condition e validazioni richieste.",
    "Usa template SDD specifici per RPA, Flow, Agent, Case, API Workflow e Coded App.",
    "Aiuta a separare lavoro greenfield, brownfield, integrazione tenant, deploy e review finale."
  ],
  "uipath-rpa": [
    "Crea nuovi progetti RPA moderni con `uip rpa init`, scegliendo target framework, expression language e template appropriato.",
    "Modifica workflow XAML, coded workflow C#, test case e file di progetto senza rompere `entryPoints` e `fileInfoCollection`.",
    "Aggiorna project context tramite discovery agent quando `.claude/rules/project-context.md` manca o diventa stale.",
    "Scopre e installa activity package, legge documentazione `.local/docs` e genera activity XAML partendo da default sicuri.",
    "Gestisce UI automation con Object Repository, target capture, selector placeholders e workflow multi-schermo.",
    "Centralizza error-handling, UIA-only boundaries e placeholder selector pattern per evitare stub che validano ma non automatizzano.",
    "Valida per file, compila a livello progetto, esegue debug/run con disciplina sugli effetti reali e produce output di completamento verificabile.",
    "Supporta pattern enterprise come REFramework, queue processing, trigger, library authoring, long-running workflow e coded fallback."
  ],
  "uipath-maestro-flow": [
    "Crea e modifica progetti `.flow` dentro una UiPath Solution con layout compatibile Studio Web.",
    "Aggiunge nodi, edge, variabili, trigger, connector, managed HTTP, script, subflow, RPA, agenti, approval e IxP.",
    "Usa la registry per scegliere node type e connector reali, evitando chiavi dedotte dal nome commerciale.",
    "Distingue nodi posseduti dal CLI e nodi editabili nel JSON, riducendo errori di configurazione.",
    "Valida, formatta, pubblica, carica in Studio Web, gestisce run/instance e supporta eval set con `uip maestro flow eval`.",
    "Diagnostica failure mode noti con incident, trace, variabili runtime e BPMN deployato."
  ],
  "uipath-maestro-bpmn": [
    "Autore e modifica processi Maestro BPMN per orchestrazioni formali e long-running.",
    "Gestisce file `.bpmn`, `project.uiproj`, `entry-points.json`, `operate.json`, `bindings_v2.json` e package descriptor.",
    "Scrive lo scheletro BPMN e XML UiPath non Integration Service, lasciando al CLI nodi e template IS generati.",
    "Valida struttura, binding, entry point, packaging e operatività del processo.",
    "Instrada correttamente richieste Flow JSON, RPA, agenti o Case verso skill specialistiche."
  ],
  "uipath-maestro-case": [
    "Crea `caseplan.json` da SDD o tramite intervista minima quando il design non esiste.",
    "Modifica caseplan esistenti con percorso brownfield mirato, senza rigenerare l'intero piano quando serve solo un edit.",
    "Modella case, stage, task, condizioni di ingresso/uscita, SLA, variabili globali e IO binding.",
    "Produce `tasks.md` e lavora per fasi: interview, planning, prototyping, implementation, validate, debug, publish.",
    "Usa recipe JSON per plugin specifici invece di inventare manualmente strutture di case plan.",
    "Valida e prepara pubblicazione di case management con attenzione a binding e regole di espressione."
  ],
  "uipath-agents": [
    "Decide e gestisce progetti agent low-code (`agent.json`) o coded Python (`pyproject.toml`, SDK UiPath).",
    "Scaffolda agenti, integra LangGraph, LlamaIndex o OpenAI Agents e supporta Agent Builder/Studio Web local workspace.",
    "Aggiunge tool, process invocation, Integration Service, MCP, memory spaces, guardrail, escalation HITL, attachments e context grounding.",
    "Rigenera binding da chiamate SDK per coded agent, evitando risorse hardcoded non sovrascrivibili per ambiente.",
    "Esegue debug, smoke eval, evaluation set, tracing, pack/deploy e version bump fino alla delivery fork."
  ],
  "uipath-api-workflow": [
    "Crea workflow JSON DSL per automazioni API-first con sequence, assign, JavaScript, if, loop, try/catch, wait e response.",
    "Integra HTTP manuale, managed HTTP e Integration Service connector activity tramite registry resolve e stub.",
    "Valida offline, poi esegue `run` solo con consenso quando ci sono credenziali o chiamate reali.",
    "Gestisce template, control-flow annidato, retry HTTP, contesto espressioni e troubleshooting del DSL.",
    "Prepara package e publish via solution lifecycle per rendere il workflow deployabile."
  ],
  "uipath-coded-apps": [
    "Scaffolda Coded Web Apps e Coded Action Apps con config, schema azione e template TypeScript/CSS.",
    "Genera dashboard analytics, observability e governance da richiesta naturale, con metriche agent health, KPI, error rate e consumption trends.",
    "Valida `action-schema.json`, gestisce input/output di Action Center e genera UI per approvazione o data entry.",
    "Usa SDK `@uipath/uipath-typescript` per Orchestrator, Data Fabric, Maestro, Action Center, agenti, governance, traces, feedback e pagination.",
    "Gestisce scope OAuth da `uipath.json`, scope `Apps.Read Apps.Write` per publish headless e sorgenti Insights/RTM prima di build o deploy.",
    "Esegue debug locale, build, pack, publish e deploy con `uip codedapp`.",
    "Supporta client setup, file sync e pattern per app con document tab o form complessi; nelle Action App evita `sdk.initialize()`."
  ],
  "uipath-functions": [
    "Scaffolda Python Coded Functions con `uip functions new --language py` e genera metadati con `uip functions init`.",
    "Definisce input/output tipizzati con Pydantic, dataclass o classi annotate e registra gli entry point nel map `functions` di `uipath.json`.",
    "Implementa logica deterministica senza chiamate LLM, con `UiPath()` inizializzato lazy e tracing sull'entry point.",
    "Usa SDK UiPath per assets, buckets, queues, attachments e Integration Service connections quando serve accesso platform.",
    "Esegue run locale, pack, publish e push, separando Python job semantics da funzioni JS/TS HTTP per Coded Apps."
  ],
  "uipath-connector-builder": [
    "Scaffolda o aggiorna repository connector `periodic-*` con `element.json`, `element-metadata.json`, standard resources e hook JavaScript.",
    "Configura 14 tipi di autenticazione con `auth set`, inclusi OAuth2, PKCE, client credentials, API key, basic, JWT e AWS v4.",
    "Crea attivita Integration Service con metodi, path, parametri, campi request/response tipizzati e curatela Studio Web.",
    "Aggiunge trigger polling o webhook, system resources, hook pre/post request e configurazioni per host, region e valori per-connection.",
    "Esegue `inspect` e `validate`, tratta i warning come gap da risolvere e prepara import/publish con version bump quando serve.",
    "Passa a `uipath-platform` per usare connector pubblicati e a `uipath-maestro-flow` per nodi connector dentro un Flow."
  ],
  "uipath-human-in-the-loop": [
    "Disegna approval gate, validation checkpoint, escalation, write-back e enrichment umano dentro Flow, Maestro o agenti.",
    "Rileva la surface corretta: `.flow`, low-code agent, Maestro BPMN o Coded Action App; per coded agent passa a `uipath-agents`.",
    "Sceglie task type tra QuickForm, Coded Action App, deployed AppTask ed escalation agentica.",
    "Definisce schema input/output, outcome, campi obbligatori, label, mapping e rami successivi.",
    "Scrive direttamente i nodi HITL appropriati e segnala cosa resta da configurare lato app/task."
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
    "Parte da `summary` e poi fa drill-down sui segnali piu rilevanti.",
    "Rimanda a `uipath-platform` per gestire job specifici e a `uipath-troubleshoot` per root-cause di errori puntuali."
  ],
  "uipath-ixp": [
    "Supporta progetti IXP e Document Understanding fuori dal contesto Flow.",
    "Rivede predizioni, conferma campi validi e identifica errori di estrazione ricorrenti.",
    "Migliora prompt e istruzioni di modello per aumentare qualità e stabilità dei campi.",
    "Guida publish dei modelli e controlli prima dell'uso runtime.",
    "Instrada i nodi document extraction dentro `.flow` verso `uipath-maestro-flow`."
  ],
  "uipath-platform": [
    "Opera su UiPath Cloud, Orchestrator, Studio Web, Integration Service, Data Fabric, LLM Gateway, traces e licensing via `uip` CLI.",
    "Gestisce login, tenant, folder, assets, queues, queue items, buckets, files, libraries, webhooks, triggers, jobs e processes.",
    "Gestisce Data Fabric via `uip df`: entity schema, record CRUD, search/query, aggregazioni, choice set, file attachment, CSV import e folder scoping.",
    "Per Data Fabric rispetta preview/approval gate su schema, choice set e operazioni irreversibili, con `--folder-key` quando necessario.",
    "Scopre connector, connection, activity e trigger Integration Service per alimentare Flow, RPA e agenti.",
    "Configura o audita BYO LLM connection per OpenAI, Azure OpenAI, Bedrock, Vertex, Anthropic e compatibili.",
    "Legge trace span e risorse operative, usando REST solo quando il CLI non copre il caso.",
    "Passa a `uipath-insights` quando servono metriche aggregate e trend sui job invece di gestione job puntuale."
  ],
  "uipath-admin": [
    "Gestisce Identity Server: utenti, gruppi, robot account, external apps, PAT e credenziali federate.",
    "Opera su Authorization: ruoli custom, assegnazioni ruolo, catalogo permessi e check-access PDP.",
    "Gestisce OMS: organizzazione, tenant lifecycle, servizi, regioni e operazioni asincrone.",
    "Configura IP restriction, enforcement, bypass rules e controlli anti-lockout.",
    "Esegue audit su org o tenant, con query paginate ed export JSON giornaliero o CSV singolo."
  ],
  "uipath-governance": [
    "Crea policy AOps per bloccare, limitare o imporre feature in Studio, StudioX, Assistant, Robot, AI Trust Layer e Agent Builder.",
    "Analizza e applica compliance standards come ISO 42001 con posture analysis, piano e conferma esplicita.",
    "Crea Access ToolUsePolicy per controllare quando un workflow può invocarne un altro come tool.",
    "Filtra policy per tag, caller, actor, user o group, distinguendo layer prodotto e layer tool-use.",
    "Guida deploy, gestione, campionatura, effective-policy query e verifica delle policy.",
    "Aiuta a evitare regole troppo ampie tramite domanda di disambiguazione e planning dedicato."
  ],
  "uipath-mcp-servers": [
    "Registra server MCP AgentHub di tipo uipath, coded, command, remote, platform o swagger.",
    "Crea tool su server `uipath` di tipo Integration Service activity, resource o raw.",
    "Guida discovery, authoring e troubleshooting dei tool MCP tramite CLI.",
    "Instrada Integration Service activity verso reference dedicato e Python MCP/coded agent verso `uipath-agents`.",
    "Aiuta a rendere capability aziendali richiamabili dagli agenti tramite protocollo MCP."
  ],
  "uipath-solution": [
    "Inizializza soluzioni, aggiunge o importa progetti e gestisce `.uipx`.",
    "Esegue resource refresh/add/remove/edit per rendere il deploy parametrico e ripetibile.",
    "Packa, pubblica, deploya, attiva e carica soluzioni verso UiPath.",
    "Gestisce scenari complessi: risorse condivise cloud, riferimenti intra-solution, virtual resources e nomi uguali su folder diverse.",
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
    "Scopre progetto, PDD/SDD, lingua, framework, artifact marker e validazioni disponibili.",
    "Combina validation automatica, review CLI, cataloghi regole per agenti/RPA/Flow/BPMN/API/Coded Apps e giudizio manuale.",
    "Produce finding bloccanti, warning, opportunità, allineamento PDD, risultati validation e next step.",
    "Calcola grading per agenti e valuta ottimizzazione, sicurezza, mantenibilità e readiness al deploy."
  ],
  "uipath-troubleshoot": [
    "Conduce investigazioni root-cause con stato, fasi, ipotesi, test, valutazione e depth check.",
    "Analizza log, trace, incident, job, queue, error code, runtime exception e storia configurativa.",
    "Copre playbook per Orchestrator, Maestro, agenti, UI automation, system activities, database activities e altro.",
    "Distingue causa primaria, fattori contribuenti e fix minimo verificabile.",
    "Produce risoluzione con evidenza, remediation e quando inviare feedback prodotto."
  ],
  "uipath-feedback": [
    "Raccoglie prerequisiti, ambiente, comando, errore, expected/actual, prompt e session retrospective.",
    "Sanitizza dati sensibili prima dell'invio.",
    "Costruisce un report strutturato per bug o miglioramento.",
    "Chiede conferma utente prima di inviare con `uip feedback send`.",
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
    skills: ["uipath-rpa", "uipath-maestro-flow", "uipath-agents", "uipath-api-workflow", "uipath-functions"]
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
    text: "Tenant, Orchestrator, task runtime, Insights, test e run.",
    skills: ["uipath-platform", "uipath-admin", "uipath-tasks", "uipath-insights", "uipath-test"]
  },
  {
    key: "improve",
    title: "6. Improve",
    text: "Review, governance, troubleshooting e feedback.",
    skills: ["uipath-review", "uipath-governance", "uipath-troubleshoot", "uipath-feedback"]
  }
];

const guide = [
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
    `<span class="badge">${skill.files}</span>`
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
