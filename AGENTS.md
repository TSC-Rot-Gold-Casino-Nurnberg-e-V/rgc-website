## Agent skills

### Issue tracker

Issues and specs are tracked in this repository's GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the five canonical triage labels without aliases. See `docs/agents/triage-labels.md`.

### Domain docs

This repo uses a single-context domain-doc layout. See `docs/agents/domain.md`.

### Git changes

Leave all changes in the working tree and report the resulting changeset. Create,
amend, or rewrite a commit only when the user explicitly requests that exact
operation in the current conversation; never commit automatically as part of
implementation, validation, or handoff.

## Feedback loop

Before handing changes to the user for review, always run:

```shell
npm run check
```

This single command runs the formatter check, ESLint, Next.js type generation,
TypeScript, and the complete Vitest suite in sequence. It is intentionally
simple and checks all project code rather than trying to infer changed files.

Use `npm run format` or `npm run lint:fix` when you intentionally want to
rewrite files. Run `npm run build` as well when a change affects production
build or runtime behavior.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
