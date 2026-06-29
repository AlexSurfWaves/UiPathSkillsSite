window.uipathLocales = window.uipathLocales || {};
window.uipathLocales.en = {
  title: {
    index: "UiPath Skills Navigator for Codex",
    graph: "UiPath Skills Knowledge Graph"
  },
  ui: {
    language: "Language",
    search: "Search",
    all: "All",
    allPhases: "All phases",
    design: "Design",
    build: "Build",
    integrate: "Integrate",
    deploy: "Deploy",
    operate: "Operate",
    graphLink: "Knowledge graph",
    platformNav: "Platform",
    developersNav: "Developers",
    agenticNav: "Agentic automation",
    codingAgents: "Coding agents",
    navigatorTitle: "Skills Navigator",
    sourceRepo: "Source repository",
    repo: "Repository",
    navigator: "Navigator",
    catalogEyebrow: "Catalog analyzed from the UiPath/skills repository",
    homeTitle: "UiPath Platform skills for coding agents",
    homeIntro: "Explore the skills that guide discovery, design, build, integration, deployment, and operations for UiPath automations.",
    skillVersion: "Analyzed skills version",
    skillCount: "Skills",
    commit: "Commit",
    localCli: "Local CLI",
    sourceNote: "Version read from version-manifest.json. Repository snapshot: 1.198.0. Full hash: 6e122c6cf81432d8b3d0b7bec1877018eb4a0ec7.",
    lifecycleEyebrow: "Lifecycle",
    lifecycleTitle: "From discovery to operations",
    when: "When to use it",
    capabilities: "What it can do",
    how: "How to use it with coding agents",
    subskills: "Invoked sub-skills",
    commands: "Typical commands and artifacts",
    prompt: "Effective prompt",
    handoffs: "Natural handoffs",
    caveat: "Watch out",
    guideEyebrow: "Operational guidance",
    guideTitle: "How to maximize coding agents with UiPath skills",
    graphEyebrow: "Skill relationships",
    graphTitle: "Navigable graph of UiPath skills",
    graphIntro: "Each node is a skill. Lines show the handoffs and sub-skills Codex uses when one capability needs to delegate to another. Hover a node to read what the skill does; drag nodes to improve graph readability.",
    graphVersion: "Skills version",
    graphMeta: "22 nodes · handoff relationships",
    graphSearch: "Search skills",
    graphPhase: "Phase",
    reset: "Reset",
    selectedSkill: "Selected skill",
    category: "Category",
    phase: "Phase",
    relations: "Relations",
    openFullCard: "Open full card",
    invokes: "Invokes",
    invokedBy: "Invoked by",
    legend: "Graph legend",
    noSkill: "No skill",
    noSkillHelp: "Change the filters to display the graph.",
    noOutgoing: "No declared sub-skills.",
    noIncoming: "No skill invokes it directly.",
    noResults: "No skill matches the filters.",
    visibleStats: "{count} visible skills, {edges} relationships",
    subskillIntro: "When this skill needs to delegate or combine with other capabilities, the coding agent naturally moves to these {count} sub-skills.",
    subskillNone: "This skill does not declare sub-skills in the analyzed catalog.",
    missingSkill: "Skill referenced as a handoff, but not present in the analyzed catalog.",
    degree: "{outgoing} outgoing, {incoming} incoming"
  },
  placeholders: {
    search: "RPA, Flow, deploy, test...",
    graphSearch: "platform, flow, agent..."
  },
  phases: {
    design: "Design",
    build: "Build",
    integrate: "Integrate",
    deploy: "Deploy",
    operate: "Operate"
  },
  status: {
    stable: "Stable",
    preview: "Preview",
    "in-development": "In development"
  },
  lifecycle: {
    design: {
      title: "1. Discover & Design",
      text: "Opportunity mining, PDDs, SDDs, architecture choices, and task plans."
    },
    build: {
      title: "2. Build",
      text: "Local artifacts: RPA, Flow, BPMN, Case, Agent, API, and Apps."
    },
    integrate: {
      title: "3. Integrate",
      text: "Human tasks, IXP, Data Fabric through Platform, connector builder, and MCP."
    },
    deploy: {
      title: "4. Deploy",
      text: "Pack, publish, deploy, activate, and solution resources."
    },
    operate: {
      title: "5. Operate",
      text: "Tenant, Orchestrator, runtime tasks, tests, and runs."
    },
    improve: {
      title: "6. Improve",
      text: "Review, governance, troubleshooting, and feedback."
    }
  },
  guides: [
    {
      title: "Codex app as cockpit",
      text: "Open Codex directly in the UiPath project or solution root. It can read `project.json`, `.flow`, `agent.json`, `sdd.md`, dependencies, and local diffs before acting."
    },
    {
      title: "CLI as operating engine",
      text: "The `uip` CLI is the best way to validate, build, discover tenant resources, publish, and diagnose. Codex orchestrates it, interprets JSON, and updates files."
    },
    {
      title: "Prompt with artifact and outcome",
      text: "Use requests such as: 'in the open project, change X, validate with Y, and do not run anything with real effects without confirmation.' It works far better than a generic brief."
    },
    {
      title: "Design before build",
      text: "For non-trivial automations, start with `uipath-automation-discovery` when the target is unclear, then use `uipath-planner` for the SDD and plan."
    },
    {
      title: "Validate is not run",
      text: "Ask for validate/build every time; authorize debug/run only when you accept real effects on systems, email, tickets, queues, or open applications."
    },
    {
      title: "Review as a quality gate",
      text: "Before deployment, run a read-only `uipath-review`. Then ask the relevant product skill to fix only the prioritized findings."
    }
  ],
  skills: {
    "uipath-automation-discovery": {
      category: "Discovery and strategy",
      product: "Automation discovery, opportunity mining",
      purpose: "Discovers automation opportunities by analyzing signals of repetitive work, bottlenecks, single points of failure, and reusable patterns.",
      when: "Use it before designing a specific solution, when you want to understand what to automate in a team, process, department, or organization.",
      how: [
        "Provide sources or excerpts from conversations, tickets, operational documentation, manual workflows, or source systems.",
        "Ask Codex to classify opportunities by impact, feasibility, repeatability, and suggested UiPath implementation path.",
        "Move to `uipath-planner` only for selected opportunities that are mature enough to design."
      ],
      prompt: "Analyze these operational materials and produce a prioritized UiPath automation opportunity report with tier, impact, effort, and recommended skills.",
      caveat: "It does not build automations: it turns organizational signals into a realistic, prioritized opportunity pipeline.",
      capabilities: [
        "Collects input from conversations, tickets, documents, and operational systems to identify repetitive manual work.",
        "Recognizes automation patterns such as repeated steps, fragile handoffs, rule-based activities, recurring backlogs, and single-person dependencies.",
        "Classifies opportunities into priority tiers with impact, complexity, risk, data prerequisites, and suggested UiPath path.",
        "Suggests whether a case fits RPA, Flow, Agent, Case Management, API Workflow, HITL, IXP, or multi-product combinations.",
        "Produces an executive and technical report that feeds directly into `uipath-planner`."
      ]
    },
    "uipath-planner": {
      category: "Design and planning",
      product: "PDD, SDD, task planning",
      purpose: "Unifies solution design and task planning: turns PDDs into implementation-ready SDDs and derives executable multi-skill task lists.",
      when: "Use it when you have a PDD/SDD, need to choose UiPath products, or want a technical roadmap before changing projects.",
      how: [
        "Have it read the PDD, constraints, systems, data, exceptions, SLAs, and success criteria.",
        "Ask for an implementation-ready SDD and then granular tasks for build, test, deployment, and handoff.",
        "Keep the tasks as a living guide: after each phase, ask Codex to update status and blockers."
      ],
      prompt: "Read `pdd.md`, create or update `sdd.md`, then generate a multi-skill implementation plan with stop conditions and validations.",
      caveat: "`uipath-design` is no longer a separate skill in the updated catalog: use `uipath-planner` for design and planning.",
      capabilities: [
        "Analyzes PDDs or unstructured requests and generates an implementable SDD with scope, systems, data, exceptions, risks, and acceptance criteria.",
        "Selects the right UiPath surface: RPA, Maestro Flow, BPMN, Case, Agents, Coded Apps, API Workflow, Platform, or Solution.",
        "Derives multi-skill tasks ordered by phase, with implicit owner, dependencies, stop conditions, and required validations.",
        "Uses SDD templates specific to RPA, Flow, Agent, Case, API Workflow, and Coded Apps.",
        "Helps separate greenfield work, brownfield changes, tenant integration, deployment, and final review."
      ]
    },
    "uipath-rpa": {
      category: "Authoring",
      product: "Studio, RPA, Coded Workflows",
      purpose: "Creates, edits, validates, builds, runs, and tests modern RPA automations in XAML or C# coded workflows.",
      when: "Use it for RPA workflows, UI automation, Excel, email, files, coded fallbacks, Integration Service from RPA, test cases, and XAML/C# fixes.",
      how: [
        "Open Codex in the root that contains `project.json`, so it can detect framework, dependencies, and workflows.",
        "Let Codex run `uip rpa validate` for individual files and `uip rpa build` at project level before declaring the work complete.",
        "For UI automation, use UiPath Object Repository and target capture; avoid shortcuts through Playwright, Selenium, or the DOM."
      ],
      prompt: "In the open RPA project, add a XAML workflow to process a queue, validate the file, and then build the whole project.",
      caveat: "`debug` and `run` can have real effects on apps, email, queues, or APIs: always ask Codex to distinguish validate/build from execution.",
      capabilities: [
        "Creates modern RPA projects with `uip rpa init`, choosing the right target framework, expression language, and template.",
        "Edits XAML workflows, C# coded workflows, test cases, and project files without breaking `entryPoints` and `fileInfoCollection`.",
        "Discovers and installs activity packages, reads `.local/docs`, and generates activity XAML from safe defaults.",
        "Handles UI automation with Object Repository, target capture, selector placeholders, and multi-window workflows.",
        "Validates per file, builds at project level, runs debug/run with discipline around real effects, and returns verifiable completion output.",
        "Supports enterprise patterns such as REFramework, queue processing, triggers, library authoring, long-running workflows, and coded fallbacks."
      ]
    },
    "uipath-maestro-flow": {
      category: "Authoring",
      product: "Maestro Flow, Studio Web",
      purpose: "Builds and manages Flow projects: nodes, edges, variables, triggers, connectors, scripts, subflows, IXP, debug, publish, and evaluations.",
      when: "Use it for every `.flow` project and for orchestrating services, processes, agents, approvals, and integrations in Maestro or Studio Web.",
      how: [
        "Create the solution before the Flow: use the `<Solution>/<Project>/<Project>.flow` layout.",
        "Ask Codex to search the registry before creating resources or selecting connectors.",
        "Use validate for safety; `flow debug` requires authorization because it really executes the process."
      ],
      prompt: "Create a Flow inside a UiPath Solution that receives a trigger, reads data from a connector, invokes an agent, and returns validated output.",
      caveat: "The skill distinguishes nodes that can be edited by hand from nodes owned by the CLI. Let `uip maestro flow node add/configure` configure connectors.",
      capabilities: [
        "Creates and edits `.flow` projects inside a UiPath Solution with a Studio Web compatible layout.",
        "Adds nodes, edges, variables, triggers, connectors, managed HTTP, scripts, subflows, RPA, agents, approvals, and IXP.",
        "Uses the registry to choose real node types and connectors, avoiding keys guessed from commercial names.",
        "Distinguishes CLI-owned nodes from JSON-editable nodes, reducing configuration mistakes.",
        "Validates, formats, publishes, uploads to Studio Web, manages runs/instances, and supports eval sets with `uip maestro flow eval`.",
        "Diagnoses known failure modes with incidents, traces, runtime variables, and deployed BPMN."
      ]
    },
    "uipath-maestro-bpmn": {
      category: "Authoring",
      product: "Maestro BPMN",
      purpose: "Authors and operates Maestro BPMN process orchestration, including packaging, inspect, validate, and diagnostics.",
      when: "Use it when the project contains BPMN or Maestro package descriptors, especially for long-running formal process orchestration.",
      how: [
        "Ask Codex to inspect the BPMN XML and project files before editing.",
        "Leave Integration Service components and generated package files to the CLI.",
        "Use it for BPMN validation and operations, not for `.flow` JSON."
      ],
      prompt: "Review this Maestro BPMN project, fix the model, and prepare validation/package without touching CLI-generated files.",
      caveat: "It is different from Flow: if the main file is `.flow`, switch to `uipath-maestro-flow`.",
      capabilities: [
        "Authors and edits Maestro BPMN processes for formal and long-running orchestration.",
        "Manages `.bpmn`, `project.uiproj`, `entry-points.json`, `operate.json`, `bindings_v2.json`, and package descriptors.",
        "Writes BPMN skeletons and non-Integration-Service UiPath XML, leaving generated IS nodes and templates to the CLI.",
        "Validates structure, bindings, entry points, packaging, and process operations.",
        "Routes Flow JSON, RPA, agent, or Case requests to the right specialist skills."
      ]
    },
    "uipath-maestro-case": {
      category: "Authoring",
      product: "Case Management",
      purpose: "Creates Case Management plans from an SDD or a lightweight interview, including tasks, stages, rules, and validation.",
      when: "Use it for case-centric solutions where work evolves through states, human activities, rules, and case data.",
      how: [
        "Start from `sdd.md` when it exists; otherwise have Codex collect the minimum required information.",
        "Generate `tasks.md` and then `caseplan.json` through dedicated JSON recipes.",
        "Validate and publish only after stages, roles, variables, and bindings have been checked."
      ],
      prompt: "From the SDD, create a Case Management plan with stages, tasks, variables, and rules, then validate `caseplan.json`.",
      caveat: "Do not use it for generic BPMN or Flow work: it is centered on `caseplan.json`.",
      capabilities: [
        "Creates `caseplan.json` from an SDD or through a minimum interview when no design exists.",
        "Models cases, stages, tasks, entry/exit conditions, SLAs, global variables, and IO bindings.",
        "Produces `tasks.md` and works by phases: interview, planning, prototyping, implementation, validation, debug, and publish.",
        "Uses plugin-specific JSON recipes instead of manually inventing case plan structures.",
        "Validates and prepares case management publication with attention to bindings and expression rules."
      ]
    },
    "uipath-agents": {
      category: "Authoring",
      product: "Agents, Agent Builder, Python SDK",
      purpose: "Covers the full lifecycle of UiPath agents, both low-code and coded with Python, LangGraph, LlamaIndex, or OpenAI Agents.",
      when: "Use it for scaffolding, editing, Studio Web sync, tools, memory, guardrails, escalation, bindings, evaluations, tracing, and deployment of agents.",
      how: [
        "Decide explicitly between low-code and coded when the project does not exist yet.",
        "For coded agents, regenerate bindings from SDK calls instead of writing them by hand.",
        "Finish with smoke evaluation and delivery questions before treating the work as complete."
      ],
      prompt: "Create a UiPath coded agent in Python with guardrails, one Integration Service connection, and a smoke evaluation.",
      caveat: "Integration Service discovery rules live in `uipath-platform`; for agents with connectors, load both capabilities.",
      capabilities: [
        "Decides and manages low-code agent projects (`agent.json`) or coded Python projects (`pyproject.toml`, UiPath SDK).",
        "Scaffolds agents, integrates LangGraph, LlamaIndex, or OpenAI Agents, and supports Agent Builder/Studio Web local workspaces.",
        "Adds tools, process invocation, Integration Service, MCP, memory spaces, guardrails, HITL escalation, attachments, and context grounding.",
        "Regenerates bindings from SDK calls for coded agents, avoiding environment-specific hardcoded resources.",
        "Runs debug, smoke eval, evaluation sets, tracing, pack/deploy, and version bump up to the delivery fork."
      ]
    },
    "uipath-api-workflow": {
      category: "Authoring",
      product: "API Workflow",
      purpose: "Authors JSON DSL workflows executed with `uip api-workflow run`, including HTTP, JavaScript, control flow, and Integration Service connectors.",
      when: "Use it for API-first automations, headless orchestration, public/vendor API calls, and JSON workflows with `do[]`.",
      how: [
        "Start from JSON templates and add activities after WorkflowStart in the root sequence.",
        "Validate offline before executing with credentials or real calls.",
        "Use registry resolve and stubs for Integration Service activities instead of inventing JSON by hand."
      ],
      prompt: "Create an API Workflow that calls a REST endpoint, normalizes the response with JavaScript, and returns a validated payload.",
      caveat: "It is preview/in development: keep files small, validate often, and separate runs without auth from runs with real effects.",
      capabilities: [
        "Creates JSON DSL workflows for API-first automations with sequence, assign, JavaScript, if, loops, try/catch, wait, and response.",
        "Integrates manual HTTP, managed HTTP, and Integration Service connector activities through registry resolve and stubs.",
        "Validates offline, then runs only with consent when credentials or real calls are involved.",
        "Handles templates, nested control flow, HTTP retry, expression context, and DSL troubleshooting.",
        "Prepares package and publish through the solution lifecycle so the workflow is deployable."
      ]
    },
    "uipath-coded-apps": {
      category: "Authoring",
      product: "Coded Apps, Action Apps",
      purpose: "Scaffolds, builds, debugs, and deploys Coded Web Apps and Coded Action Apps with the UiPath TypeScript SDK.",
      when: "Use it for `app.config`, action schemas, custom UIs, Action Center apps, and integrations with Orchestrator, Data Fabric, or Maestro.",
      how: [
        "Verify/install the `codedapp` tooling and TypeScript dependencies before building.",
        "For Action Apps, define `action-schema.json` and input/output mapping first.",
        "Use local preview/debug, then pack/publish/deploy once the UI has been verified."
      ],
      prompt: "Create a Coded Action App to approve a request, with input/output schema and an SDK call to Orchestrator.",
      caveat: "For `.cs` or `.xaml` workflows, do not use this skill: switch to `uipath-rpa`.",
      capabilities: [
        "Scaffolds Coded Web Apps and Coded Action Apps with config, action schema, and TypeScript/CSS templates.",
        "Validates `action-schema.json`, handles Action Center input/output, and generates approval or data-entry UI.",
        "Uses the `@uipath/uipath-typescript` SDK for Orchestrator, Data Fabric, Maestro, Action Center, feedback, and pagination.",
        "Runs local debug, build, pack, publish, and deploy with `uip codedapp`.",
        "Supports OAuth scopes, client setup, file sync, and patterns for apps with document tabs or complex forms."
      ]
    },
    "uipath-connector-builder": {
      category: "Integration",
      product: "Integration Service Connector Builder",
      purpose: "Creates and edits custom UiPath Integration Service connectors for JSON REST APIs, including auth, activities, triggers, JavaScript hooks, validation, import, and publish.",
      when: "Use it when you need to build or update an Integration Service connector on disk, not when you only need to use an already-published connection or activity.",
      how: [
        "Always run `builder inspect` before editing an existing connector.",
        "Configure authentication with `auth set`, create activities and fields with builder commands, then validate errors and warnings.",
        "After validation, import and publish only when tenant, login, and version bump are correct."
      ],
      prompt: "Create an Integration Service connector for this JSON REST API: configure auth, typed activities, request/response fields, validate it, then stop before publishing.",
      caveat: "It does not operate already-published connectors: use `uipath-platform` for connections, discovery, and runtime use; use `uipath-maestro-flow` for connector nodes inside `.flow`.",
      capabilities: [
        "Scaffolds or updates `periodic-*` connector repositories with `element.json`, `element-metadata.json`, standard resources, and JavaScript hooks.",
        "Configures 14 authentication types through `auth set`, including OAuth2, PKCE, client credentials, API key, basic, JWT, and AWS v4.",
        "Creates Integration Service activities with methods, paths, parameters, typed request/response fields, and Studio Web curation.",
        "Adds polling or webhook triggers, system resources, pre/post request hooks, and configuration for host, region, and per-connection values.",
        "Runs `inspect` and `validate`, treats warnings as real release gaps, and prepares import/publish with version bumps when needed.",
        "Hands off to `uipath-platform` for published connector use and to `uipath-maestro-flow` for connector nodes inside a Flow."
      ]
    },
    "uipath-human-in-the-loop": {
      category: "Human work",
      product: "HITL, Action Center authoring",
      purpose: "Designs human gates, approvals, escalations, enrichment, and validation checkpoints inside Flow, Maestro, or coded/low-code agents.",
      when: "Use it when the automation must pause for human decisions, approval, quality control, or data collection.",
      how: [
        "Identify the surface first: Flow, Low-Code Agent, Maestro, or Coded Action App.",
        "Choose the task type: QuickForm, Coded Action App, AppTask, or agentic escalation.",
        "Write the node in the project and verify that outputs/outcomes are used by the next steps."
      ],
      prompt: "Add a human approval to the Flow: show the extracted data, allow approve/reject, and map the outcome to the next branches.",
      caveat: "This skill creates the HITL checkpoint; use `uipath-tasks` to manage already-created tasks.",
      capabilities: [
        "Designs approval gates, validation checkpoints, escalations, write-back, and human enrichment inside Flow, Maestro, or agents.",
        "Detects the right surface: `.flow`, low-code agent, coded agent, BPMN, or Coded Action App.",
        "Chooses a task type among QuickForm, Coded Action App, deployed AppTask, and agentic escalation.",
        "Defines input/output schema, outcome, required fields, labels, mappings, and next branches.",
        "Writes the appropriate HITL nodes directly and calls out what remains to configure on the app/task side."
      ]
    },
    "uipath-tasks": {
      category: "Human work",
      product: "Action Center runtime",
      purpose: "Manages existing Action Center runtime tasks: list, details, assignment, completion, and state verification.",
      when: "Use it in operations, support, or demos when you need to act on existing human tasks.",
      how: [
        "Verify login, tenant, and folder before reading or modifying tasks.",
        "Discover the task and its type, plan the action, then assign or complete with final verification.",
        "Keep HITL authoring separate from runtime task management."
      ],
      prompt: "List the open Action Center tasks for this tenant, assign the urgent one to me, and show the status after the operation.",
      caveat: "Do not use it for Document Understanding review; IXP covers that case.",
      capabilities: [
        "Manages Action Center runtime tasks: list, get, assign, complete, and verify.",
        "Works with tenant, folder, state, priority, and task type before acting.",
        "Distinguishes approval, validation, form, and other Action Center tasks.",
        "Follows discover -> plan -> act -> verify to avoid modifying the wrong task.",
        "Supports troubleshooting permissions, wrong tenant, folder scope, and task-not-found issues."
      ]
    },
    "uipath-ixp": {
      category: "Documents and AI",
      product: "IXP, Document Understanding",
      purpose: "Supports IXP prediction review, field confirmation, prompt improvement, and Document Understanding model publishing.",
      when: "Use it for IXP work outside Flow: labeling/review, extraction quality, valid fields, and prompt tuning.",
      how: [
        "Provide the project, fields, sample documents, and expected results.",
        "Ask Codex to compare predictions with ground truth and propose better prompts.",
        "For IXP nodes inside `.flow`, switch to `uipath-maestro-flow`."
      ],
      prompt: "Analyze these IXP predictions, identify unstable fields, and propose prompt changes before publication.",
      caveat: "This is not the skill for modeling the Flow that uses IXP; it focuses on the model/document extraction lifecycle.",
      capabilities: [
        "Supports IXP and Document Understanding projects outside the Flow context.",
        "Reviews predictions, confirms valid fields, and identifies recurring extraction errors.",
        "Improves prompts and model instructions to increase field quality and stability.",
        "Guides model publish and pre-runtime checks.",
        "Routes document extraction nodes inside `.flow` to `uipath-maestro-flow`."
      ]
    },
    "uipath-platform": {
      category: "Platform",
      product: "Cloud, Orchestrator, Integration Service, Data Fabric",
      purpose: "Covers UiPath Cloud and Orchestrator operations through `uip`: login, tenants, folders, assets, queues, jobs, packages, Integration Service, Data Fabric, LLM Gateway, traces, and licensing.",
      when: "Use it before any code or workflow touches UiPath Cloud, Orchestrator, Studio Web, Integration Service, or Data Fabric.",
      how: [
        "Use `uip` before considering manual REST calls.",
        "For Data Fabric, read `references/data-fabric/data-fabric.md` first and then the specific topic for schema, records, choice sets, files, or import.",
        "Request `--output json` and server-side filters for reliable results.",
        "Use it as a support skill when RPA, Flow, or Agents need to discover tenant resources."
      ],
      prompt: "Verify login and tenant, find the right folder, list required Orchestrator and Data Fabric resources, and return references to use in the workflow.",
      caveat: "Direct REST is a fallback. In most cases the CLI handles headers, pagination, tenant, and output shape better than custom code.",
      capabilities: [
        "Operates on UiPath Cloud, Orchestrator, Studio Web, Integration Service, Data Fabric, LLM Gateway, traces, and licensing through the `uip` CLI.",
        "Manages login, tenant, folders, assets, queues, queue items, buckets, files, libraries, webhooks, triggers, jobs, and processes.",
        "Manages Data Fabric through `uip df`: entity schema, record CRUD, queries, aggregations, choice sets, file attachments, CSV import, and folder scoping.",
        "For Data Fabric, respects preview/approval gates for schema, choice sets, and irreversible operations, with `--folder-key` when needed.",
        "Discovers Integration Service connectors, connections, activities, and triggers for Flow, RPA, and agents.",
        "Configures or audits BYO LLM connections for OpenAI, Azure OpenAI, Bedrock, Vertex, Anthropic, and compatible providers.",
        "Reads trace spans and operational resources, using REST only when the CLI does not cover the case."
      ]
    },
    "uipath-admin": {
      category: "Platform",
      product: "Admin, Identity, OMS, Audit",
      purpose: "Manages admin surfaces: Identity Server, users, groups, robot accounts, external OAuth apps, roles, OMS, IP restrictions, and audit.",
      when: "Use it for organization/tenant administration and security posture, not for operational Orchestrator resources.",
      how: [
        "Ask for read-only discovery before mutating users, roles, or IP allowlists.",
        "For audit, specify period, subject, and resource.",
        "For Orchestrator folders, jobs, or processes, switch to `uipath-platform`."
      ],
      prompt: "List the groups and role assignments relevant to this tenant, then propose the smallest change without applying it.",
      caveat: "These are sensitive operations: prefer read-only discovery, explicit confirmations, and auditable output.",
      capabilities: [
        "Manages Identity Server: users, groups, robot accounts, external apps, PATs, and federated credentials.",
        "Operates on Authorization: custom roles, role assignments, permission catalog, and check-access PDP.",
        "Manages OMS: organization, tenant lifecycle, services, regions, and asynchronous operations.",
        "Configures IP restrictions, enforcement, bypass rules, and anti-lockout checks.",
        "Runs audit on organization or tenant with paginated queries and daily JSON or single CSV export."
      ]
    },
    "uipath-governance": {
      category: "Platform",
      product: "Governance, AOps, ToolUsePolicy",
      purpose: "Authors and deploys governance policies: AOps product policies and Access ToolUsePolicy for tool-to-tool invocation.",
      when: "Use it when you need to restrict, block, or enforce behavior in Studio, Assistant, Robot, AI Trust Layer, Agent Builder, or tool invocation.",
      how: [
        "Classify whether you need a product policy or a tool access policy first.",
        "Discover targets, users/groups, and resources before applying a deployment.",
        "Use specific examples and references to avoid policies that are too broad."
      ],
      prompt: "Create a draft governance policy that prevents agents from invoking workflows not tagged `approved`, without deploying it automatically.",
      caveat: "Do not use it for normal Orchestrator permissions: that belongs to platform/admin.",
      capabilities: [
        "Creates AOps policies to block, limit, or enforce features in Studio, StudioX, Assistant, Robot, AI Trust Layer, and Agent Builder.",
        "Creates Access ToolUsePolicy to control when one workflow can invoke another as a tool.",
        "Filters policies by tag, caller, actor, user, or group, distinguishing product layer from tool-use layer.",
        "Guides deployment, management, sampling, and policy verification.",
        "Helps avoid overly broad rules through disambiguation and dedicated planning."
      ]
    },
    "uipath-mcp-servers": {
      category: "Integration",
      product: "AgentHub MCP",
      purpose: "Registers MCP servers in AgentHub and creates resource, raw, or Integration Service activity tools on UiPath servers.",
      when: "Use it to expose external or UiPath capabilities as MCP tools callable by agents.",
      how: [
        "Choose the server type first: uipath, coded, command, remote, platform, or swagger.",
        "For UiPath-type servers, choose whether the tool is an Integration Service activity, resource, or raw tool.",
        "Test discovery and invocation before wiring the tool into agents."
      ],
      prompt: "Register an AgentHub MCP server and expose this Integration Service activity as a tool an agent can call safely.",
      caveat: "For Python MCP servers or coded-agent integration, switch to `uipath-agents`; for raw Integration Service discovery, use `uipath-platform`.",
      capabilities: [
        "Registers AgentHub MCP servers of type uipath, coded, command, remote, platform, or swagger.",
        "Creates tools on `uipath` servers of type Integration Service activity, resource, or raw.",
        "Guides discovery, authoring, and troubleshooting of MCP tools through the CLI.",
        "Routes Integration Service activity work to dedicated references and Python MCP/coded agent work to `uipath-agents`.",
        "Helps make enterprise capabilities callable by agents through MCP."
      ]
    },
    "uipath-solution": {
      category: "Deployment",
      product: "UiPath Solution lifecycle",
      purpose: "Manages the UiPath Solution lifecycle: init, import/add project, resource refresh, pack, publish, deploy, activate, and upload.",
      when: "Use it to bundle multiple RPA, Flow, Case, Agent, or API Workflow projects into one deployable `.uipx` solution.",
      how: [
        "Initialize the solution root and add/import the individual automation projects.",
        "Run resource refresh and inspect resources before packing.",
        "Separate pack/publish from deploy/activate because the latter touches real tenant resources."
      ],
      prompt: "Package this UiPath Solution, refresh resources, validate the `.uipx`, and stop before deployment unless I confirm.",
      caveat: "Build or validation errors usually belong to the underlying project skill, not to Solution packaging.",
      capabilities: [
        "Initializes solutions, adds or imports projects, and manages `.uipx` files.",
        "Runs resource refresh/add/remove/edit to make deployment parameterized and repeatable.",
        "Packs, publishes, deploys, activates, and uploads solutions to UiPath.",
        "Handles complex scenarios: shared cloud resources, intra-solution references, virtual resources, and duplicate names across folders.",
        "Routes build or validation errors to authoring skills instead of hiding them in deployment."
      ]
    },
    "uipath-test": {
      category: "Quality",
      product: "Test Manager",
      purpose: "Manages Test Manager projects, cases, sets, executions, logs, attachments, results, reports, and custom fields.",
      when: "Use it for Test Manager operations; use `uipath-rpa` when you need to write the actual test automation.",
      how: [
        "Verify organization, tenant, project, and Test Manager scope before changing anything.",
        "Use project-scoped list/get operations before create/update/delete.",
        "For executable test automation, hand off to `uipath-rpa`."
      ],
      prompt: "Find the Test Manager project, list open test cases and sets, then generate a report for the latest execution.",
      caveat: "It manages tests and results; it does not author the RPA test workflow itself.",
      capabilities: [
        "Manages Test Manager: projects, requirements, test cases, test sets, executions, logs, attachments, results, and reports.",
        "Creates, lists, updates, deletes, and searches test entities with explicit project scope.",
        "Starts or monitors executions and generates reports for different stakeholders.",
        "Handles custom fields, object labels, and wait commands for asynchronous processes.",
        "Routes test automation authoring to `uipath-rpa`."
      ]
    },
    "uipath-review": {
      category: "Quality",
      product: "Read-only review",
      purpose: "Runs read-only audits for structure, quality, and best practices across RPA, agents, flows, BPMN, coded apps, and solutions.",
      when: "Use it as a quality gate before deployment or when you want findings without changing files.",
      how: [
        "Run it before deployment or before a risky refactor.",
        "Ask for findings ordered by severity with file references and missing validations.",
        "Then send only the selected fixes to the relevant authoring skill."
      ],
      prompt: "Review this UiPath project read-only, list blocking issues first, and include validation evidence and recommended next steps.",
      caveat: "It does not edit files. Use the domain skill for fixes after the review.",
      capabilities: [
        "Runs read-only audits on RPA, agents, Flow, BPMN, Coded Apps, Case, and Solution artifacts.",
        "Discovers project, PDD/SDD, language, framework, artifact markers, and available validations.",
        "Combines automated validation, CLI review, rule catalog, and manual judgment.",
        "Produces blocking findings, warnings, opportunities, PDD alignment, validation results, and next steps.",
        "Calculates grading for agents and evaluates optimization, security, maintainability, and deployment readiness."
      ]
    },
    "uipath-troubleshoot": {
      category: "Support",
      product: "Diagnostics and RCA",
      purpose: "Investigates root causes of errors, regressions, stuck jobs, faults, runtime problems, and unexpected behavior across UiPath products.",
      when: "Use it whenever something failed, slowed down, returned wrong results, lost access, or stopped working after a change.",
      how: [
        "Provide exact command, error, logs, traces, run/job IDs, and recent changes.",
        "Let Codex reproduce or narrow the failure when feasible before proposing a fix.",
        "Ask for primary cause, contributing factors, minimum remediation, and verification evidence."
      ],
      prompt: "Investigate this UiPath failure, form hypotheses, test them against logs/traces, and return root cause, remediation, and verification steps.",
      caveat: "If the evidence points to a product or CLI issue, route the final report to `uipath-feedback`.",
      capabilities: [
        "Runs root-cause investigations with state, phases, hypotheses, tests, evaluation, and depth checks.",
        "Analyzes logs, traces, incidents, jobs, queues, error codes, runtime exceptions, and configuration history.",
        "Covers playbooks for Orchestrator, Maestro, agents, UI automation, system activities, database activities, and more.",
        "Distinguishes primary cause, contributing factors, and the minimum verifiable fix.",
        "Produces evidence-backed resolution, remediation, and guidance on when to send product feedback."
      ]
    },
    "uipath-feedback": {
      category: "Support",
      product: "Feedback and bug reports",
      purpose: "Prepares UiPath bug reports and improvement suggestions through `uip feedback send`.",
      when: "Use it after investigation, when the evidence points to a product, CLI, or skill issue that should be reported.",
      how: [
        "Collect the exact environment, command, logs, expected behavior, actual behavior, and reproduction steps.",
        "Sanitize sensitive data before sending.",
        "Ask for explicit confirmation before invoking `uip feedback send`."
      ],
      prompt: "Prepare and send UiPath feedback for this CLI error, including command, output, version, and reproduction steps.",
      caveat: "It does not replace investigation: first understand whether the issue is project, configuration, or product related.",
      capabilities: [
        "Collects prerequisites, environment, command, error, expected/actual behavior, prompt, and session retrospective.",
        "Sanitizes sensitive data before submission.",
        "Builds a structured bug or improvement report.",
        "Asks for user confirmation before sending with `uip feedback send`.",
        "Is used after troubleshooting when the evidence suggests a tool, skill, or product issue."
      ]
    }
  }
};
