# Reference sources

Use these sources together when refreshing the UiPath Skills Site.

## Current analyzed snapshot

- Repository commit: `391093e53fbdea4c9d37a99998cebe87ce086641`
- Snapshot date: 2026-07-23
- Skills version: `1.199.0`
- Target CLI: `^1.199.0`
- Skill count: 24

## Source precedence

1. [UiPath skills repository](https://github.com/UiPath/skills/tree/main/skills) - source of truth for the current skill set, each `SKILL.md`, supporting resources, `version-manifest.json`, and recent changes.
2. [Skills overview](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/skills-overview) - official explanation of what a skill contains, how a coding agent selects skills, where skills come from, and how users can steer selection.
3. [Skills catalog](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/skills-catalog) - official lifecycle grouping, concise descriptions, and example prompts. Treat this page as a documentation snapshot; use the repository when the two differ on the current catalog.
4. [Working effectively](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/working-effectively) - operating model for prompts, planning, short generate-check-refine loops, safe human control, and deciding when to iterate or restart.
5. [Give your agent project context](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/agent-context-files) - guidance for short, current global and project context files such as `AGENTS.md`, including skill routing, quality rules, packages, conventions, and protected files.
6. [Reviewing and validating output](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/reviewing-agent-output) - acceptance checklist and the required evidence chain: inspect actual files, run Workflow Analyzer, build the whole project, and confirm a controlled local run.

## Refresh checklist

- Check the public GitHub repository for changes before editing site content.
- Compare the local repository commit with `origin/main` and record the analyzed commit, date, skill version, target CLI, and skill count.
- Compare source skill folder IDs with the IDs in `app.js`.
- Review changed `SKILL.md` files and update the affected summaries, capabilities, routing notes, prompts, and caveats in both site languages.
- Recheck the overview and catalog for changes to skill-selection guidance, lifecycle grouping, installation guidance, and example prompts.
- Recheck all three best-practice pages for changes to context, planning, prompt design, iteration, review, validation, security, and approval guidance.
- Keep the site explicit that skill selection is automatic but not guaranteed: users can name a skill and confirm that it loaded.
- Validate JavaScript syntax, source-to-site coverage, and both index and graph views before publishing.
