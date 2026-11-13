# Release Desk

Release Desk is the live demonstration on my personal site,
[fabiopiras.dev](https://fabiopiras.dev). It is a small release dashboard:
a team's tasks, how close the release is to shipping, and a history of every
change. You can search and filter tasks, move them between review and ready,
create new ones and delete them.

The app itself is deliberately modest. Its purpose is to show **how** I build
interfaces. The site describes my way of working; this repository is that
method applied to real, running code, so it can be read and checked rather
than taken on trust.

## The method

- **Composition.** Small components with one job each. State and behaviour
  live in hooks and plain functions; components describe what you see.
- **Boundaries.** Code is organised by feature. Each part of the app keeps its
  components, hooks and tests together and exposes a single public entry
  point. These boundaries are enforced by tooling, not left to discipline.
- **Performance.** Server-rendered by default, with client code only where
  someone interacts. The React Compiler handles memoization, and the pages are
  prerendered.
- **Testing.** Tests describe what a person needs to get done, using the page
  the way they would: by role and by label, not by implementation details.
- **Accessibility.** WCAG 2.2 AA from the start: semantic HTML first, ARIA only
  where HTML falls short, visible focus, full keyboard support, and automated
  checks in both colour themes.

## About the data

Everything is fictional and lives in memory: there is no backend, no account
and no tracking. Reloading the page restores the sample tasks.

## Built with

Next.js (App Router), React 19 with the React Compiler, TypeScript, Tailwind CSS
and Zod. Tested with Vitest, Testing Library, Playwright and axe.

---

Made by Fabio Piras · [fabiopiras.dev](https://fabiopiras.dev)
