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
    improve: "Test & improve",
    graphLink: "Knowledge graph",
    platformNav: "Platform",
    developersNav: "Developers",
    agenticNav: "Agentic automation",
    codingAgents: "Coding agents",
    navigatorTitle: "Skills Navigator",
    sourceRepo: "Source repository",
    sourceOverview: "Skills overview",
    sourceCatalog: "Skills catalog",
    sourceBestPractices: "Best practices",
    repo: "Repository",
    navigator: "Navigator",
    catalogEyebrow: "Catalog analyzed from the UiPath/skills repository",
    homeTitle: "UiPath Platform skills for coding agents",
    homeIntro: "Explore the skills that guide discovery, design, build, integration, deployment, and operations for UiPath automations.",
    installCommandLabel: "PowerShell install",
    installCommandIntro: "Run this PowerShell command to install the CLI and its bundled UiPath skills.",
    copyInstallCommand: "Copy command",
    copiedInstallCommand: "Command copied",
    skillVersion: "Analyzed skills version",
    skillCount: "Skills",
    commit: "Commit",
    localCli: "Local CLI",
    snapshotDate: "July 23, 2026",
    sourceNote: "Version read from version-manifest.json. Repository snapshot: 1.199.0. Manifest schema: 2. Full hash: 391093e53fbdea4c9d37a99998cebe87ce086641.",
    referencesEyebrow: "Reference material",
    referencesTitle: "Sources with distinct roles",
    referencesIntro: "The repository defines the current state; the overview and catalog describe skills, while the best-practice pages guide context, collaboration, and validation.",
    referenceCurrent: "Current source",
    referenceConcepts: "Concepts",
    referenceSnapshot: "Official view",
    referenceRepoTitle: "UiPath skills repository",
    referenceRepoText: "Source of truth for the latest skill list, instructions, resources, and changes.",
    referenceOverviewTitle: "Skills overview",
    referenceOverviewText: "Explains what a skill contains, how a coding agent selects it, and how to steer selection explicitly.",
    referenceCatalogTitle: "Skills catalog",
    referenceCatalogText: "Groups skills by lifecycle stage and provides example prompts; it is a snapshot of the repository.",
    referencePractice: "Best practices",
    referencePracticeTitle: "Working effectively",
    referencePracticeText: "Defines the operating loop: focused context, a plan, short iterations, UiPath validation, and human control.",
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
    guideEyebrow: "Operating workflow",
    guideTitle: "How to work effectively with coding agents and UiPath skills",
    guideIntro: "Treat the coding agent as a fast collaborator: you set the architecture and controls, the skill provides the method, and UiPath tools provide the evidence.",
    flowAria: "Recommended workflow for coding agents and UiPath skills",
    decision: "Decision",
    iterationGateTitle: "Does the result pass the end-to-end criteria?",
    guideHabitsEyebrow: "Checklist",
    guideHabitsTitle: "Six habits that raise quality",
    guideSourcesAria: "Official best-practice sources",
    guideSourcesLabel: "Read more in the official guides:",
    sourceWorkingEffectively: "Working effectively",
    sourceProjectContext: "Project context",
    sourceReviewValidation: "Review & validation",
    graphEyebrow: "Skill relationships",
    graphTitle: "Navigable graph of UiPath skills",
    graphIntro: "Each node is a skill. Lines show the handoffs and sub-skills Codex uses when one capability needs to delegate to another. Hover a node to read what the skill does; drag nodes to improve graph readability.",
    graphVersion: "Skills version",
    graphMeta: "24 nodes · handoff relationships",
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
    operate: "Operate",
    improve: "Test & improve"
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
      text: "Local artifacts: RPA, Flow, BPMN, Case, Agent, API, Apps, and Functions."
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
      text: "Tenant, Orchestrator, runtime tasks, Insights, and runs."
    },
    improve: {
      title: "6. Test & Improve",
      text: "Testing, review, governance, troubleshooting, and feedback."
    }
  },
  developerFlow: [
    {
      title: "Frame the outcome",
      text: "Define the exact artifact and path, typed inputs and outputs, end-to-end behavior, constraints, and acceptance criteria."
    },
    {
      title: "Load useful context",
      text: "Start a fresh session for the task and provide only current, relevant files, project conventions, and sanitized PDDs or SDDs."
    },
    {
      title: "Select the skill",
      text: "Name the `uipath-*` skill for critical work and ask the coding agent to confirm that it loaded."
    },
    {
      title: "Align plan and checkpoints",
      text: "For non-trivial work, make the plan, dependencies, and approval points explicit before edits; request review-first when a skill normally proceeds automatically."
    },
    {
      title: "Build one increment",
      text: "Generate a meaningful but testable slice, keeping work in native activities and the correct UiPath project structure."
    },
    {
      title: "Verify with UiPath",
      text: "Run Workflow Analyzer, build the whole project, and perform a controlled local run; then compare the actual files with the acceptance criteria."
    }
  ],
  iterationPaths: [
    {
      title: "Pass",
      text: "Inspect the actual files, not only the summary, then separately approve publish, deploy, or other changes to shared systems."
    },
    {
      title: "Localized gap",
      text: "Correct it and repeat build plus verification. Two or three generate-check-refine cycles are usually enough."
    },
    {
      title: "Wrong structure or repeated failures",
      text: "Stop patching and restart in a fresh session with corrected context, plan, or prompt contract."
    }
  ],
  guides: [
    {
      title: "You remain the architect",
      text: "Use the coding agent as a fast collaborator: set direction and trade-offs, judge the output, and keep actions that change shared state under explicit approval."
    },
    {
      title: "Persistent, short, current context",
      text: "Keep an `AGENTS.md` with preferred skills, quality rules, pinned packages, activities to favor or avoid, and files that must not be overwritten."
    },
    {
      title: "The prompt is a delivery contract",
      text: "Specify the file and location, typed inputs and outputs, complete behavior, constraints, dependencies, and how the result will be verified."
    },
    {
      title: "Relevant context, not more context",
      text: "Every session starts fresh: use one session per task, attach only the necessary sources, and remove real customer data while preserving structure and edge cases."
    },
    {
      title: "Validation before trust",
      text: "Look for TODOs or placeholders, wrong activities, removed selectors, unpinned packages, and missing logging or error handling; validate the whole project, not only the changed file."
    },
    {
      title: "Secrets and state changes stay controlled",
      text: "Keep secrets in assets or a credential store, reference them by name, and require explicit confirmation before real-effect runs, publishing, deployment, or package upgrades."
    }
  ],
  skills: {
    "uipath-automation-discovery": {
      category: "Discovery and strategy",
      product: "Automation discovery, opportunity mining",
      purpose: "Discovers and prioritizes automation opportunities and, when requested, estimates delivery effort with complexity bands, pack-hours, adjustment factors, and contingency.",
      when: "Use it before designing a specific solution, when you want to understand what to automate or size an opportunity pipeline.",
      how: [
        "Provide sources or excerpts from conversations, tickets, operational documentation, manual workflows, or source systems.",
        "Ask Codex to classify opportunities by impact, feasibility, repeatability, and suggested UiPath implementation path.",
        "Move to `uipath-planner` only for selected opportunities that are mature enough to design.",
        "For estimation, provide authoritative complexity matrices and hour catalogs; the skill never invents missing thresholds or effort."
      ],
      prompt: "Analyze these operational materials and produce a prioritized UiPath opportunity report; if I provide sizing matrices, add traceable effort and contingency.",
      caveat: "It does not build automations or invent sizing inputs. Opportunities above 7 applications or 8 variations must be decomposed, not clamped to the largest band.",
      capabilities: [
        "Collects input from conversations, tickets, documents, and operational systems to identify repetitive manual work.",
        "Recognizes automation patterns such as repeated steps, fragile handoffs, rule-based activities, recurring backlogs, and single-person dependencies.",
        "Classifies opportunities into priority tiers with impact, complexity, risk, data prerequisites, and suggested UiPath path.",
        "Suggests whether a case fits RPA, Flow, Agent, Case Management, API Workflow, HITL, IXP, or multi-product combinations.",
        "Optionally sizes opportunities with complexity bands, pack-hours, adjustment factors, and contingency using only user-supplied authoritative matrices.",
        "Decomposes oversized opportunities above 7 applications or 8 variations instead of clamping them to the largest band.",
        "Produces an executive and technical report that feeds directly into `uipath-planner`."
      ]
    },
    "uipath-planner": {
      category: "Design and planning",
      product: "PDD, SDD, task planning",
      purpose: "Unifies solution design and task planning: selects products from the underlying need, turns PDDs or requirements into implementation-ready SDDs, and derives executable multi-skill task lists.",
      when: "Use it when you have a PDD/SDD, need to choose UiPath products from the underlying need, or want a technical roadmap before changing projects.",
      how: [
        "Have it read the PDD, constraints, systems, data, exceptions, SLAs, and success criteria.",
        "Ask for an implementation-ready SDD with production contracts and then granular tasks for build, test, deployment, and handoff.",
        "Keep the tasks as a living guide: after each phase, ask Codex to update status and blockers."
      ],
      prompt: "Read `pdd.md`, create or update `sdd.md`, then generate a multi-skill implementation plan with stop conditions and validations.",
      caveat: "`uipath-design` is no longer a separate skill in the updated catalog: use `uipath-planner` for design and planning.",
      capabilities: [
        "Analyzes PDDs or unstructured requests and generates an implementable SDD with scope, production contracts, systems, data, exceptions, risks, and acceptance criteria.",
        "Selects the right UiPath surface from the synthesized need rather than product keywords: RPA, Maestro Flow, BPMN, Case, Agents, Coded Apps, API Workflow, Platform, or Solution.",
        "Derives multi-skill tasks ordered by phase, with implicit owner, dependencies, stop conditions, and required validations.",
        "Uses SDD templates specific to RPA, Flow, Agent, Case, API Workflow, and Coded Apps.",
        "Helps separate greenfield work, brownfield changes, tenant integration, deployment, and final review."
      ]
    },
    "uipath-rpa": {
      category: "Authoring",
      product: "Studio, RPA, Coded Workflows, UI Automation",
      purpose: "Creates, edits, validates, builds, runs, and tests modern RPA automations in XAML or C# coded workflows, with stronger project discovery and UIA rules.",
      when: "Use it for RPA workflows, UI automation, Excel, email, files, coded fallbacks, Integration Service from RPA, test cases, error handling, and XAML/C# fixes.",
      how: [
        "Open Codex in the root that contains `project.json`, so it can detect framework, dependencies, and workflows.",
        "Let Codex run `uip rpa validate` for individual files and `uip rpa build` at project level before declaring the work complete; list analyzer rules only when needed.",
        "For UI automation, use UiPath Object Repository and target capture; link references by default and use embedding only as a per-target fallback.",
        "For a Studio Web destination, deliver a Solution: import the project with `uip solution projects import` instead of leaving a standalone RPA project.",
        "In headless debug, use activity breakpoints and poll `debug state` until a stable state is reached before choosing the next action.",
        "For advanced UI issues, enable `--profiling` to collect per-activity timings and before/after execution screenshots."
      ],
      prompt: "In the open RPA project, add a XAML workflow to process a queue, validate the file, and then build the whole project.",
      caveat: "`debug` and `run` can have real effects on apps, email, queues, or APIs: always ask Codex to distinguish validate/build from execution.",
      capabilities: [
        "Creates modern RPA projects with `uip rpa init`, choosing the right target framework, expression language, and template.",
        "Edits XAML workflows, C# coded workflows, test cases, and project files without breaking `entryPoints` and `fileInfoCollection`.",
        "Refreshes project context through the discovery agent when `.claude/rules/project-context.md` is missing or stale.",
        "Discovers and installs activity packages, reads `.local/docs`, and generates activity XAML from safe defaults.",
        "Handles UI automation with Object Repository, target capture, selector placeholders, and multi-window workflows.",
        "Links Object Repository targets by IdRef by default and embeds only the individual reference that cannot be linked.",
        "Preserves the `Version` attribute on UIA `N*` activities, uses `TextString` as the `NGetText` output, and reacquires targets remounted by interactions.",
        "Centralizes error handling, UIA-only boundaries, and placeholder selector patterns to avoid stubs that validate but do not automate.",
        "For Studio Web destinations, wraps the RPA project in a Solution and imports it through the canonical `uip solution projects` command group.",
        "Applies two-phase validation: `validate` for every changed file and `build` for the full project; analyzer-rule listing is on demand.",
        "Supports headless debug with activity breakpoints, `debug state`, breakpoint updates, and stable-state polling before continuing.",
        "Collects advanced profiling with per-activity timings and before/after screenshots through `uip rpa debug start --profiling`.",
        "Treats `DebugState: Suspended` as an exception awaiting a decision even when `HasErrors` is still false.",
        "Supports enterprise patterns such as REFramework, queue processing, triggers, library authoring, long-running workflows, and coded fallbacks."
      ]
    },
    "uipath-maestro-flow": {
      category: "Authoring",
      product: "Maestro Flow, Studio Web",
      purpose: "Builds and manages Flow projects: nodes, edges, variables, triggers, connectors, scripts, subflows, IXP, debug, publish, and evaluations.",
      when: "Use it for every `.flow` project and for orchestrating services, processes, agents, approvals, and integrations in Maestro or Studio Web.",
      how: [
        "Initialize the Flow: outside a solution, the CLI auto-creates `<Project>Solution/<Project>/`; create the solution first only when you need to control its name.",
        "Ask Codex to search the registry before creating resources or selecting connectors.",
        "Use exported variables and `$vars` for cross-node references, keeping bindings and variable definitions consistent.",
        "Treat every `flow validate` warning as a defect even when the command exits with code 0; `flow debug` requires authorization because it really executes the process."
      ],
      prompt: "Create a Flow inside a UiPath Solution that receives a trigger, reads data from a connector, invokes an agent, and returns validated output.",
      caveat: "The skill distinguishes hand-editable nodes from CLI-owned nodes. A connector-keyword or generic HTTP warning means the Flow is not ready yet.",
      capabilities: [
        "Creates and edits `.flow` projects in a Studio Web compatible solution layout, including automatic parent-solution scaffolding on init.",
        "Adds nodes, edges, variables, triggers, connectors, managed HTTP, scripts, subflows, RPA, agents, approvals, and IXP.",
        "Uses the registry to choose real node types and connectors, avoiding keys guessed from commercial names.",
        "For generic connector triggers, resolves and passes `objectName` in `node configure --detail`; curated triggers use the object name embedded in the manifest.",
        "Distinguishes CLI-owned nodes from JSON-editable nodes, reducing configuration mistakes.",
        "Validates, formats, publishes, uploads to Studio Web, manages runs/instances, and supports eval sets with `uip maestro flow eval`.",
        "Treats `flow validate` warnings as defects even with exit code 0, especially connector-keyword and generic HTTP fallbacks.",
        "Diagnoses known failure modes with incidents, traces, runtime variables, and deployed BPMN."
      ]
    },
    "uipath-maestro-bpmn": {
      category: "Authoring",
      product: "Maestro BPMN",
      purpose: "Authors and operates Maestro BPMN process orchestration, including packaging, inspect, validate, and diagnostics.",
      when: "Use it when the project contains BPMN or Maestro package descriptors, especially for long-running formal process orchestration.",
      how: [
        "Separate discovery-only from authoring: for discovery-only requests, save `registry pull/list/get` evidence under `registry-evidence/` and do not scaffold a project.",
        "For authoring, use registry templates only for registry-owned nodes and the structural reference for flows, gateways, events, loops, mappings, and diagrams.",
        "For local projects, use the plain `<Project>/<Project>.bpmn` layout; create a Solution and package only when requested.",
        "For Script Tasks, return an object with `response`, map through `result.response`, and declare readable root outputs without `elementId`.",
        "Use it for BPMN validation and operations, not for `.flow` JSON."
      ],
      prompt: "Review this Maestro BPMN project, fix the model, and prepare validation/package without touching CLI-generated files.",
      caveat: "It is different from Flow: if the main file is `.flow`, switch to `uipath-maestro-flow`. There is no `uip maestro bpmn validate`; use the validator bundled with the skill.",
      capabilities: [
        "Authors and edits Maestro BPMN processes for formal and long-running orchestration.",
        "Manages `.bpmn`, `project.uiproj`, `entry-points.json`, `operate.json`, `bindings_v2.json`, and package descriptors.",
        "Separates discovery-only work from authoring and saves registry evidence without creating unrequested artifacts.",
        "Writes the BPMN skeleton and structures not owned by the registry, leaving only registry-owned nodes and templates to the CLI.",
        "Keeps lower-camel BPMN tags, a complete diagram, Script Tasks mapped through `result.response`, and inspectable root outputs.",
        "Validates structure, bindings, entry points, packaging, and operations with the bundled validator rather than a nonexistent CLI command.",
        "Routes Flow JSON, RPA, agent, or Case requests to the right specialist skills."
      ]
    },
    "uipath-maestro-case": {
      category: "Authoring",
      product: "Case Management",
      purpose: "Creates Case Management plans from an SDD or a guided interview, and edits existing caseplans through targeted brownfield operations.",
      when: "Use it for case-centric solutions where work evolves through states, human activities, rules, and case data.",
      how: [
        "Start from `sdd.md` when it exists; otherwise have Codex collect the minimum required information.",
        "At kickoff, make the phases and decision checkpoints explicit so it is clear when review, debug, and publish choices will be requested.",
        "For greenfield work, generate `tasks.md` and then `caseplan.json` through dedicated JSON recipes; explicitly request review-first mode when you want to stop on the plan before building.",
        "Keep the case file flat at `<Solution>/<Project>/caseplan.json`; `content/` is package layout and `caseplan.json.bpmn` is generated.",
        "Model sequential, event-triggered, and ad hoc tasks with the correct entry rules; use secondary stages for exception lanes and root rules for case completion.",
        "Keep `caseplan.json` and `bindings_v2.json` in parity before validation, and avoid colons in stage and SLA names.",
        "When registry resources are missing, group them by name and type: create only user-selected Agents or API Workflows inline and use placeholders for the rest.",
        "For brownfield work, use targeted edits and pull server state when the case already exists in Studio Web.",
        "Validate and publish only after stages, roles, variables, and bindings have been checked."
      ],
      prompt: "From the SDD, create a Case Management plan with stages, tasks, variables, and rules, then validate `caseplan.json`.",
      caveat: "Do not use it for generic BPMN or Flow work: it is centered on `caseplan.json`. Complex cases remain supported; use `uipath-planner` when the user asks for multi-product planning.",
      capabilities: [
        "Creates `caseplan.json` from an SDD or through a guided interview when no design exists, without rejecting complex cases by a fixed threshold.",
        "Edits existing caseplans through a targeted brownfield path without regenerating the full plan when only one change is needed.",
        "Models cases, stages, tasks, entry/exit conditions, SLAs, global variables, and IO bindings.",
        "Presents the flow and checkpoints at kickoff, produces `tasks.md`, and works by phases: interview, planning, prototyping, implementation, validation, debug, and publish.",
        "Normally proceeds from `tasks.md` to prototyping; it stops for plan review when the user explicitly requests plan-only or review-first mode.",
        "Keeps `caseplan.json` at project root and never edits generated `caseplan.json.bpmn` or `content/` package layout.",
        "Normalizes sequential, event-triggered, and ad hoc tasks, interrupting secondary stages, and root-level case completion rules.",
        "Uses plugin-specific JSON recipes instead of manually inventing case plan structures.",
        "Records each lookup in `registry-resolved.json` with stage, task, type, cache, query, complete matches, selection, and rationale.",
        "Groups missing resources by name and type and creates only selected Agents or API Workflows inline; all others remain explicit placeholders.",
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
        "For LLM-as-judge evaluators, discover available models through the CLI instead of inventing identifiers.",
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
        "Discovers LLM-as-judge models through the CLI, then runs debug, smoke eval, evaluation sets, tracing, pack/deploy, and version bump up to the delivery fork."
      ]
    },
    "uipath-api-workflow": {
      category: "Authoring",
      product: "API Workflow",
      purpose: "Creates, validates, runs, publishes, operates, and diagnoses JSON DSL workflows, including HTTP, JavaScript, control flow, and Integration Service connectors.",
      when: "Use it for API-first automations, headless orchestration, JSON workflows with `do[]`, and post-publish operations or diagnosis.",
      how: [
        "Always create the project with `uip api-workflow init`: inside a Solution for Studio Web and deployment, or with `--skip-solution-registration` only for local/CLI use.",
        "Never deliver a lone `Workflow.json`; even a local workflow keeps the project files generated by init.",
        "Validate offline before executing with credentials or real calls.",
        "Use registry resolve and stubs for Integration Service activities instead of inventing JSON by hand.",
        "After deployment, manage triggers, connections, jobs, logs, and traces through `uip is`, `uip or`, and `uip traces`."
      ],
      prompt: "Create an API Workflow that calls a REST endpoint, normalizes the response with JavaScript, and returns a validated payload.",
      caveat: "It is preview/in development: keep files small, validate often, and separate runs without auth from runs with real effects.",
      capabilities: [
        "Scaffolds every workflow with `uip api-workflow init`, producing the Studio Web-compatible `project.uiproj` shape and Solution registration when needed.",
        "Uses `--skip-solution-registration` only for local/CLI projects and never delivers a lone `Workflow.json`.",
        "Creates JSON DSL workflows for API-first automations with sequence, assign, JavaScript, if, loops, try/catch, wait, and response.",
        "Integrates manual HTTP, managed HTTP, and Integration Service connector activities through registry resolve and stubs.",
        "Validates offline, then runs only with consent when credentials or real calls are involved.",
        "Handles templates, nested control flow, HTTP retry, expression context, and DSL troubleshooting.",
        "Packages and publishes through the solution lifecycle, then operates published workflows through HTTP, schedule, or event triggers.",
        "Diagnoses cloud runs with Integration Service connections, Orchestrator jobs and logs, and trace spans."
      ]
    },
    "uipath-coded-apps": {
      category: "Authoring",
      product: "Coded Apps, Action Apps, dashboards",
      purpose: "Scaffolds, builds, debugs, and deploys Coded Web Apps, Coded Action Apps, and analytics/governance dashboards generated from natural language.",
      when: "Use it for `app.config`, action schemas, custom UIs, Action Center apps, UiPath SDK integrations, and dashboards for agent health, KPIs, error rate, governance, or consumption trends.",
      how: [
        "Verify/install the `codedapp` tooling and TypeScript dependencies before building.",
        "For Action Apps, define `action-schema.json` and input/output mapping first.",
        "For dashboards, resolve metrics, OAuth scopes, and Insights/RTM sources before build and deploy.",
        "Create or repair External Applications with `uip admin external-apps`; use the portal only when authentication or admin authorization blocks the CLI.",
        "For Web Apps and dashboards, read `scope` from `uipath.json`; for Action Apps, use `new UiPath()` without `sdk.initialize()`.",
        "For Validation Station, choose the all-in-one component or composable subcomponents; share one `instanceId` and verify assets, CSS, and fonts in both dev and production builds.",
        "Use local preview/debug, then pack/publish/deploy once the UI has been verified.",
        "For non-interactive deploys, resolve the folder key for a personal workspace, an existing folder, or a newly created folder; dashboards also choose standalone or governance deploy mode."
      ],
      prompt: "Create a Coded Action App or UiPath operations dashboard with correct schema/scopes, UiPath SDK usage, and verified build.",
      caveat: "For `.cs` or `.xaml` workflows, do not use this skill: switch to `uipath-rpa`.",
      capabilities: [
        "Scaffolds Coded Web Apps and Coded Action Apps with config, action schema, and TypeScript/CSS templates.",
        "Generates analytics, observability, and governance dashboards from natural-language requests, including agent health, KPIs, error rate, and consumption trends.",
        "Validates `action-schema.json`, handles Action Center input/output, and generates approval or data-entry UI.",
        "Uses the `@uipath/uipath-typescript` SDK for Orchestrator, Data Fabric, Maestro, Action Center, agents, governance, traces, feedback, and pagination.",
        "Manages OAuth scopes from `uipath.json`, `Apps.Read Apps.Write` scopes for headless publish, and Insights/RTM sources before build or deploy.",
        "Handles Data Fabric `MULTILINE_MAX` fields safely: fetches full content by ID, never persists list/query markers, and excludes them from filters and sorting.",
        "Runs local debug, build, pack, publish, and non-interactive deploy with folder keys for personal, existing, or new folders plus standalone/governance dashboard modes.",
        "Creates and updates External Applications through `uip admin external-apps`, retaining the portal only as an authentication/permission fallback.",
        "Supports all-in-one or composable Validation Station layouts with synchronized subcomponents and runtime assets verified in dev and build.",
        "Supports file sync and patterns for apps with document tabs or complex forms; avoids `sdk.initialize()` in Action Apps."
      ]
    },
    "uipath-functions": {
      category: "Authoring",
      product: "Coded Functions, Python",
      purpose: "Creates deterministic Python business-logic units packaged as UiPath artifacts, with typed input/output and job semantics.",
      when: "Use it when you need custom logic, ERP/API integration, data transformation, or UiPath SDK calls without LLM reasoning or an agent loop.",
      how: [
        "Scaffold with `uip functions new <name> --language py` and register entry points in the `functions` map in `uipath.json`.",
        "Define typed Input/Output schemas, initialize `UiPath()` lazily, and return errors as output fields instead of letting exceptions bubble out.",
        "Run `uip functions init` before pack, publish, or push whenever schemas or entry points change."
      ],
      prompt: "Create a UiPath Python Coded Function with Pydantic input/output, deterministic logic, lazy SDK initialization, updated `uipath.json`, and `uip functions init` ready for packing.",
      caveat: "This is not an LLM agent skill: if the work needs reasoning, routing, or LangGraph/LlamaIndex/OpenAI Agents, switch to `uipath-agents`.",
      capabilities: [
        "Scaffolds Python Coded Functions with `uip functions new --language py` and generates metadata with `uip functions init`.",
        "Defines typed input/output through Pydantic, dataclasses, or annotated classes and registers entry points in the `functions` map in `uipath.json`.",
        "Implements deterministic logic without LLM calls, with lazy `UiPath()` initialization and tracing on the entry point.",
        "Uses the UiPath SDK for assets, buckets, queues, attachments, and Integration Service connections when platform access is needed.",
        "Runs locally, packs, publishes, and pushes functions while separating Python job semantics from JS/TS HTTP functions for Coded Apps."
      ]
    },
    "uipath-connector-builder": {
      category: "Integration",
      product: "Integration Service Connector Builder",
      purpose: "Creates and edits custom UiPath Integration Service connectors for JSON REST APIs, including auth, activities, triggers, JavaScript hooks, validation, import, and publish.",
      when: "Use it when you need to build or update an Integration Service connector on disk, not when you only need to use an already-published connection or activity.",
      how: [
        "Always run `builder inspect` before editing an existing connector.",
        "Configure one of 19 authentication types with `auth set`, create activities and fields with builder commands, then validate errors and warnings.",
        "Use the `.uip-connector.json` marker to target the last initialized connector and add `hintText` to user-facing configurations.",
        "After validation, import and publish only when tenant, login, and version bump are correct."
      ],
      prompt: "Create an Integration Service connector for this JSON REST API: configure auth, typed activities, request/response fields, validate it, then stop before publishing.",
      caveat: "It does not operate already-published connectors: use `uipath-platform` for connections, discovery, and runtime use; use `uipath-maestro-flow` for connector nodes inside `.flow`.",
      capabilities: [
        "Scaffolds or updates `periodic-*` connector repositories with `element.json`, `element-metadata.json`, standard resources, and JavaScript hooks.",
        "Configures 19 authentication types through `auth set`, including OAuth2, PKCE, client credentials, API key, basic, JWT, jwtOauth claims, FPS, none, and AWS v4.",
        "Creates Integration Service activities with methods, paths, parameters, typed request/response fields, and Studio Web curation.",
        "Uses `.uip-connector.json` to find the last initialized connector and requires `hintText` in user-facing configurations.",
        "Keeps generic CRUD activities available alongside curated activities.",
        "Adds polling or webhook triggers, system resources, pre/post request hooks, and configuration for host, region, and per-connection values.",
        "Runs `inspect` and `validate`, treats warnings as real release gaps, and prepares import/publish with version bumps when needed.",
        "Hands off to `uipath-platform` for published connector use and to `uipath-maestro-flow` for connector nodes inside a Flow."
      ]
    },
    "uipath-human-in-the-loop": {
      category: "Human work",
      product: "HITL, Action Center authoring",
      purpose: "Designs human gates, approvals, escalations, enrichment, and validation checkpoints inside Flow, Maestro, or low-code agents; coded-agent wiring belongs to `uipath-agents`.",
      when: "Use it when the automation must pause for human decisions, approval, quality control, or data collection.",
      how: [
        "Identify the surface first: Flow, Low-Code Agent, Maestro, or Coded Action App.",
        "For a new Flow, `uip maestro flow init` auto-scaffolds the parent solution; initialize it first only when you need a custom solution name.",
        "Choose the task type: QuickForm, Coded Action App, AppTask, or agentic escalation.",
        "In non-interactive runs, do not block on confirmation when fields, outcomes, and output shape are already clear; apply a sensible schema and report it explicitly.",
        "Write the node in the project and verify that outputs/outcomes are used by the next steps."
      ],
      prompt: "Add a human approval to the Flow: show the extracted data, allow approve/reject, and map the outcome to the next branches.",
      caveat: "This skill creates the HITL checkpoint; use `uipath-tasks` to manage already-created tasks.",
      capabilities: [
        "Designs approval gates, validation checkpoints, escalations, write-back, and human enrichment inside Flow, Maestro, or agents.",
        "Detects the right surface: `.flow`, low-code agent, Maestro BPMN, or Coded Action App; for coded agents, switches to `uipath-agents`.",
        "Chooses a task type among QuickForm, Coded Action App, deployed AppTask, and agentic escalation.",
        "Defines input/output schema, outcome, required fields, labels, mappings, and next branches.",
        "In CI/headless runs, applies a non-interactive fallback when the schema is determinable instead of blocking on an impossible confirmation.",
        "Uses automatic parent-solution scaffolding for new Flow projects and writes the appropriate HITL nodes directly.",
        "Calls out what remains to configure on the app/task side."
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
    "uipath-insights": {
      category: "Observability",
      product: "Insights, job monitoring",
      purpose: "Queries aggregated UiPath job metrics through `uip insights`: automation health, failure analysis, completion trends, and process performance.",
      when: "Use it for job success rate, processes that fail the most, failure reasons, job timelines, pending/faulted jobs, and operational KPIs.",
      how: [
        "Verify login, tenant, and a time range before every query.",
        "Start with `summary`, then drill into `top-failures`, `failures-by-reason`, timelines, or process details.",
        "For starting, stopping, or inspecting a specific job, switch to `uipath-platform`; for detailed root cause, switch to `uipath-troubleshoot`."
      ],
      prompt: "Analyze UiPath job health for the last 7 days: show KPIs, trends, top failing processes, and main failure reasons with JSON-backed evidence.",
      caveat: "It does not start, stop, or modify jobs and does not perform deep root-cause analysis of one specific error; it covers aggregate job analytics.",
      capabilities: [
        "Queries `uip insights jobs` for job KPIs, success rate, processing time, and aggregate counts.",
        "Analyzes completed and uncompleted trends, process breakdowns, top failures, failure reasons, and failure details.",
        "Always requires a relative or absolute time range and uses `--output json` for reliable parsing.",
        "Starts from `summary` and drills down into the most relevant operational signals.",
        "Hands off to `uipath-platform` for managing specific jobs and to `uipath-troubleshoot` for root cause of individual errors."
      ]
    },
    "uipath-ixp": {
      category: "Documents and AI",
      product: "IXP, Document Understanding",
      purpose: "Manages the full IXP lifecycle: projects, documents, taxonomy, extraction, review, metrics, model versions, publish, tags, and rollback.",
      when: "Use it to create or administer Document Understanding projects, upload documents, define fields, review extraction, and govern model versions.",
      how: [
        "Create the project from an Autopilot-suggested, imported, or empty taxonomy, then upload the required documents.",
        "Verify every `uip ixp` command against the CLI Reference and do not improvise when no documented path exists.",
        "Reuse built-in IXP data types and list every candidate with its entity kind before asking about an ambiguous name.",
        "Configure groups, fields, extraction instructions, and preprocessing, then inspect predictions, metrics, and versions before publishing.",
        "Accept the user's explicit statement that named documents were reviewed; do not repeat unnecessary discovery before confirming them.",
        "Treat publish as the last CLI step: deploying the model to a folder or environment is completed in-product, not through `uip ixp`.",
        "For IXP nodes inside `.flow`, switch to `uipath-maestro-flow`."
      ],
      prompt: "Create or update this IXP project, configure taxonomy and extraction, review predictions, and prepare the right version for publishing.",
      caveat: "This is not the skill for modeling the Flow that uses IXP. Folder deployment is not supported by the CLI; it must stop and ask when names are ambiguous.",
      capabilities: [
        "Creates IXP projects from Autopilot-suggested, imported, or empty taxonomies and manages document upload, download, and deletion.",
        "Verifies syntax in the CLI Reference before commands and reports when no documented `uip ixp` path exists.",
        "Creates taxonomy groups and fields using built-in data types, with per-field and overall extraction instructions.",
        "Configures model and preprocessing, reviews predictions, confirms or unconfirms values, and marks missing fields.",
        "Corrects OCR-garbled values during confirmation without using `--corrections` to overturn a wrong prediction.",
        "Inspects metrics and model versions, then manages publish, tags, and rollback.",
        "Lists every matching candidate and its entity kind when a name is ambiguous instead of guessing the target.",
        "Accepts an explicit user review of named documents without repeating redundant discovery.",
        "Routes document extraction nodes inside `.flow` to `uipath-maestro-flow` and leaves folder/environment deployment to the product UI."
      ]
    },
    "uipath-platform": {
      category: "Platform",
      product: "Cloud, Orchestrator, Integration Service, Data Fabric, LLM Gateway",
      purpose: "Covers UiPath Cloud and Orchestrator operations through `uip`: login, tenants, folders, assets, queues, jobs, packages, Integration Service, Data Fabric, LLM Gateway, traces, and licensing.",
      when: "Use it before any code or workflow touches UiPath Cloud, Orchestrator, Studio Web, Integration Service, Data Fabric, LLM Gateway, or traces.",
      how: [
        "Use `uip` before considering manual REST calls.",
        "If the request asks why something failed or seeks root cause, switch to `uipath-troubleshoot` first even when a platform resource is named.",
        "For Data Fabric, read `references/data-fabric/data-fabric.md` first and then the specific topic for schema, records, query/search, choice sets, files, or CSV import.",
        "Request `--output json` and server-side filters for reliable results.",
        "Use it as a support skill when RPA, Flow, or Agents need to discover tenant resources."
      ],
      prompt: "Verify login and tenant, find the right folder, list required Orchestrator and Data Fabric resources, and return references to use in the workflow.",
      caveat: "Direct REST is a fallback. Read the dedicated Data Fabric reference before any `uip df` command; use `uipath-troubleshoot` for causal diagnosis.",
      capabilities: [
        "Operates on UiPath Cloud, Orchestrator, Studio Web, Integration Service, Data Fabric, LLM Gateway, traces, and licensing through the `uip` CLI.",
        "Manages login, tenant, folders, assets, queues, queue items, buckets, files, libraries, webhooks, triggers, jobs, and processes.",
        "Manages Data Fabric through `uip df`: entity schema, record CRUD, search/query, aggregations, choice sets, file attachments, CSV import, and folder scoping.",
        "Handles `MULTILINE_MAX`: list/query returns a marker, full content requires `records get`, and the field cannot be filtered or sorted.",
        "Always reads the Data Fabric reference before `uip df` commands, including attachment upload, download, and deletion.",
        "For Data Fabric, respects preview/approval gates for schema, choice sets, and irreversible operations, with `--folder-key` when needed.",
        "Discovers Integration Service connectors, connections, activities, and triggers for Flow, RPA, and agents.",
        "Resolves the object for generic Integration Service CRUD triggers and exposes it to Maestro Flow as `detail.objectName`.",
        "Configures or audits BYO LLM connections for OpenAI, Azure OpenAI, Bedrock, Vertex, Anthropic, and compatible providers.",
        "Reads trace spans and operational resources, using REST only when the CLI does not cover the case.",
        "Hands off to `uipath-insights` when the task needs aggregate job metrics and trends instead of direct job management.",
        "Routes causal and root-cause requests to `uipath-troubleshoot` first, even when a platform resource is named."
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
      product: "Governance, AOps, ToolUsePolicy, compliance standards",
      purpose: "Authors, deploys, and diagnoses governance policies: AOps product policies, Access ToolUsePolicy, and compliance standards such as ISO 42001.",
      when: "Use it when you need to restrict, block, enforce behavior, or check/apply compliance posture in Studio, Assistant, Robot, AI Trust Layer, Agent Builder, or tool invocation.",
      how: [
        "Classify whether you need a product policy, tool access policy, or compliance standard first.",
        "Discover targets, users/groups, and resources before applying a deployment.",
        "For compliance packs, run posture analysis, show a per-setting state-aware plan, and require confirmation before applying settings."
      ],
      prompt: "Create a draft governance policy or analyze ISO 42001 posture, without applying changes until the plan is confirmed.",
      caveat: "Do not use it for normal Orchestrator permissions: that belongs to platform/admin.",
      capabilities: [
        "Creates AOps policies to block, limit, or enforce features in Studio, StudioX, Assistant, Robot, AI Trust Layer, and Agent Builder.",
        "Creates Access ToolUsePolicy to control when one workflow can invoke another as a tool.",
        "Analyzes and applies compliance standards such as ISO 42001 with posture analysis, per-setting coverage, state-aware next actions, and explicit confirmation.",
        "Retries transient compliance-pack 409 conflicts up to three times when the server requests a 10-second wait.",
        "Filters policies by tag, caller, actor, user, or group, distinguishing product layer from tool-use layer.",
        "Guides deployment, management, sampling, effective-policy queries, and policy verification.",
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
        "Use `mcp list --all-folders` for global discovery and provide `--target-folder-key` or `--target-folder-path` for cross-folder targets.",
        "For UiPath-type servers, choose whether the tool is an Integration Service activity, resource, or raw tool.",
        "Test discovery and invocation before wiring the tool into agents."
      ],
      prompt: "Register an AgentHub MCP server and expose this Integration Service activity as a tool an agent can call safely.",
      caveat: "On `Reason: IsActivityNotAvailable`, stop `is-activity` attempts and offer only a genuinely different `resource` or `raw` tool.",
      capabilities: [
        "Registers AgentHub MCP servers of type uipath, coded, command, remote, platform, or swagger.",
        "Creates tools on `uipath` servers of type Integration Service activity, resource, or raw.",
        "Discovers servers across folders with `mcp list --all-folders` and uses explicit target folders for cross-folder references.",
        "Stops `is-activity` authoring on `Reason: IsActivityNotAvailable` and offers only genuinely different resource/raw alternatives.",
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
        "Use the canonical `uip solution projects` group for add, import, and remove; keep `uip solution resources` for resource operations.",
        "Run resource refresh and inspect resources before packing.",
        "Separate pack/publish from deploy/activate because the latter touches real tenant resources.",
        "For controlled, offline, or air-gapped feeds, pass a local `NuGet.config` to restore and pack with `--nuget-sources-config-path`.",
        "Verify the platform: Automation Cloud or Automation Suite 2.2510.0+; supported project types vary by version."
      ],
      prompt: "Package this UiPath Solution, refresh resources, validate the `.uipx`, and stop before deployment unless I confirm.",
      caveat: "Solutions are not supported on Standalone Orchestrator; self-hosted Maestro requires Automation Suite 2.2510.2+. Build or validation errors belong to the underlying project skill.",
      capabilities: [
        "Initializes solutions, adds/imports/removes projects through `uip solution projects`, and manages `.uipx` files.",
        "Runs resource refresh/add/remove/edit to make deployment parameterized and repeatable.",
        "Packs, publishes, deploys, activates, and uploads solutions to UiPath.",
        "Uses `--nuget-sources-config-path` on restore and pack to control package feeds in offline, air-gapped, or CI environments.",
        "Handles complex scenarios: shared cloud resources, intra-solution references, virtual resources, and duplicate names across folders.",
        "Supports Automation Cloud and Automation Suite 2.2510.0+, with project types gated by platform version; it is not supported on Standalone Orchestrator.",
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
      product: "Read-only review, rule catalog",
      purpose: "Runs read-only audits for structure, quality, rule catalogs, PDD/SDD alignment, and deployment risks across UiPath artifacts.",
      when: "Use it as a quality gate before merge, publish, or deploy, or when you want an independent audit across RPA, agents, Flow, BPMN, API Workflow, Coded Apps, or Solutions.",
      how: [
        "Run it before deployment or before a risky refactor.",
        "Ask for findings ordered by severity with file references and missing validations.",
        "Then send only the selected fixes to the relevant authoring skill."
      ],
      prompt: "Review this UiPath project read-only, list blocking issues first, and include validation evidence and recommended next steps.",
      caveat: "It does not edit files. Use the domain skill for fixes after the review.",
      capabilities: [
        "Runs read-only audits on RPA, agents, Flow, BPMN, API Workflow, Coded Apps, Case, and Solution artifacts.",
        "Discovers project, PDD/SDD, language, framework, artifact markers, and available validations.",
        "Combines automated validation, CLI review, rule catalogs for agents/RPA/Flow/BPMN/API/Coded Apps, and manual judgment.",
        "Produces blocking findings, warnings, opportunities, PDD alignment, validation results, and next steps.",
        "Calculates grading for agents and evaluates optimization, security, maintainability, and deployment readiness."
      ]
    },
    "uipath-troubleshoot": {
      category: "Support",
      product: "Diagnostics and RCA",
      purpose: "Runs evidence-first causal investigations of errors, regressions, faults, runtime problems, and unexpected behavior across UiPath products, activity packages, and UiPath Assistant.",
      when: "Use it when the primary outcome is understanding why something failed, even if the request names Orchestrator, Flow, Agent, RPA, an activity package, or shares a UiPath Assistant diagnostic archive.",
      how: [
        "Anchor on the strongest signal and define the symptom, scope, last known good state, and recent changes.",
        "Read the investigation guides first, then choose the closest playbook and use only documented commands to collect correlated evidence.",
        "For UiPath Assistant, start from the ExportDiagnoseArchive bundle and correlate `combined.log` with `Robot.log` before proposing a fix.",
        "For Coded Apps, compare `uipath.json` with the External Application and use dedicated playbooks for OAuth, 401/403, CORS, callback, forms, and deploy 404.",
        "For activity packages, use consolidated playbooks for Invoke Workflow File design/runtime, Excel not installed, locked workbooks, NullReference failures, dynamic sheets, and Outlook shared mailboxes.",
        "Keep every raw CLI response rooted under the investigation directory; if capture redirection fails, rerun the command instead of reconstructing evidence by hand.",
        "Use formal hypotheses only when no playbook fits, causes are multiple or cross-domain, or evidence conflicts.",
        "Once the cause is confirmed, present the minimum fix and hand its application to the artifact-owning skill."
      ],
      prompt: "Investigate this UiPath failure, anchor on the evidence, follow the appropriate playbook, and return root cause, minimum fix, and verification.",
      caveat: "Known platform operations stay with `uipath-platform`; when new data arrives, re-anchor on the strongest signal instead of defending the prior hypothesis.",
      capabilities: [
        "Anchors the investigation on the strongest signal, defining symptom, scope, last known good state, and recent changes.",
        "Reads the generic and domain investigation guides before commands, then follows the matching playbook and its exact documented command forms.",
        "Diagnoses API Workflows, Studio, UiPath Assistant, Jira, OCR and Document Understanding, PDF, IPC, SAP BAPI, Slack, Terminal, System, UI Automation, Coded Apps, Action Apps, and agent runtime failures through dedicated playbooks.",
        "Covers Invoke Workflow File design/runtime, Excel installation and workbook-lock failures, activity NullReference errors, dynamic sheets, and Outlook shared mailboxes with consolidated playbooks.",
        "Preserves verbatim CLI output under the investigation root and uses the documented fallback when an exact-name queue filter returns HTTP 400.",
        "Uses formal hypotheses only on escalation triggers: no matching playbook, multiple or cross-domain causes, or conflicting evidence.",
        "Analyzes logs, traces, incidents, jobs, queues, error codes, runtime exceptions, and configuration history.",
        "Separates primary cause, contributing factors, and the minimum verifiable fix, then delegates source-artifact remediation to the owning skill instead of editing it directly.",
        "Re-anchors when new evidence arrives and produces an evidence-backed resolution."
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
