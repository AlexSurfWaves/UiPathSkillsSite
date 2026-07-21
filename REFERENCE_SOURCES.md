# Reference sources

Use these sources together when refreshing the UiPath Skills Site.

## Source precedence

1. [UiPath skills repository](https://github.com/UiPath/skills/tree/main/skills) - source of truth for the current skill set, each `SKILL.md`, supporting resources, `version-manifest.json`, and recent changes.
2. [Skills overview](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/skills-overview) - official explanation of what a skill contains, how a coding agent selects skills, where skills come from, and how users can steer selection.
3. [Skills catalog](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/skills-catalog) - official lifecycle grouping, concise descriptions, and example prompts. Treat this page as a documentation snapshot; use the repository when the two differ on the current catalog.

## Refresh checklist

- Check the public GitHub repository for changes before editing site content.
- Compare the local repository commit with `origin/main` and record the analyzed commit, date, skill version, target CLI, and skill count.
- Compare source skill folder IDs with the IDs in `app.js`.
- Review changed `SKILL.md` files and update the affected summaries, capabilities, routing notes, prompts, and caveats in both site languages.
- Recheck the overview and catalog for changes to skill-selection guidance, lifecycle grouping, installation guidance, and example prompts.
- Keep the site explicit that skill selection is automatic but not guaranteed: users can name a skill and confirm that it loaded.
- Validate JavaScript syntax, source-to-site coverage, and both index and graph views before publishing.
