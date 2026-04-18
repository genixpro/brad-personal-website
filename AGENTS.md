# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro personal website. Source code lives in `src/`; generated output lives in `dist/` and should not be hand-edited. Public static files and images live in `public/assets/`, with larger originals under `public/assets/full-size/`.

Key source areas:

- `src/pages/`: explicit public routes, including preserved top-level service URLs.
- `src/content/`: Astro content collections for portfolio, services, creations, presentations, legal pages, and case studies.
- `src/components/`: reusable UI grouped by site area, with shared pieces in `common/` and layout pieces in `layout/`.
- `src/data/`: shared navigation, metadata, social links, home-page copy, and tag configuration.
- `src/styles/`: global styling.

## Build, Test, and Development Commands

- `npm install`: install project dependencies.
- `npm run dev`: start the Astro development server.
- `npm run build`: build the static site into `dist/`.
- `npm run check`: run Astro content and TypeScript checks.
- `npm run preview`: preview the built site locally.

Run commands from the repository root.

## Coding Style & Naming Conventions

Use TypeScript and Astro conventions already present in the project. Prefer small, focused components under the relevant `src/components/<area>/` directory. Use PascalCase for component filenames, such as `HeroBanner.astro`, and camelCase for TypeScript variables and exported data fields.

Keep content collection entries descriptive and route-oriented. Each content entry should include an `order` field; lower numbers render first. Avoid editing generated `.astro/`, `dist/`, or dependency files.

## Testing Guidelines

There is no standalone test runner configured. Use `npm run check` as the primary validation step for content schemas and TypeScript correctness. For visual or routing changes, run `npm run dev` during development and `npm run build` before submitting larger changes.

## Commit & Pull Request Guidelines

This repository uses trunk-based development. Commit small, complete changes directly to `main` rather than creating long-lived feature branches. Keep `main` releasable: run the relevant checks before committing meaningful code, content, or visual changes.

Recent commit history uses short, imperative summaries, for example `Complete Astro structure refactor` and `Add original asset lightboxes`. Follow that style: keep the subject concise, specific, and action-oriented.

If a pull request is used for review, keep it short-lived and include:

- A brief summary of the user-facing change.
- Any affected routes, content collections, or assets.
- Screenshots for visual changes.
- Notes about validation performed, such as `npm run check` or `npm run build`.

## Agent-Specific Instructions

Make minimal, targeted edits. Preserve existing URLs and content ordering unless the task explicitly asks to change them. Do not modify generated output in `dist/`; update source files instead.
