# Bradley Arsenault Personal Website

Static Astro site for Bradley Arsenault's personal portfolio, services, creations, presentations, legal pages, and case studies.

## Development

Install dependencies:

```sh
npm install
```

Run the local dev server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Run Astro content and type checks:

```sh
npm run check
```

## Content Editing

Structured site content lives in Astro content collections under `src/content/`:

- `src/content/portfolio/` for portfolio projects
- `src/content/services/` for service pages
- `src/content/creations/` for personal projects
- `src/content/presentations/` for talks and presentations
- `src/content/legal/` for legal pages
- `src/content/case-studies/` for case studies

Shared site data lives under `src/data/`:

- `navigation.ts` for header navigation and the header call to action
- `social.ts` for social links
- `site.ts` for metadata and contact details
- `home.ts` for home page stats, logos, and promo copy
- `portfolioTags.ts` for portfolio tag colors

Each content entry has an `order` field. Lower numbers render first.

## Routes

Public routes are explicit Astro page files in `src/pages/`. Top-level service URLs such as `/code-review-services` are intentionally preserved for compatibility.
