# Mykael Barnes — portfolio (2026)

Personal portfolio site: React, TypeScript, Vite, React Router, and a Three.js hero background.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Local dev server (HMR)   |
| `npm run build`| Typecheck + production build |
| `npm run preview` | Serve the `dist` output |
| `npm run lint` | ESLint                   |

## Project layout

- `src/pages/` — route screens (home, work, about)
- `src/layouts/` — shared shell (header, footer, canvas)
- `src/components/` — UI pieces (e.g. `HeroScene`, cards)
- `src/data/` — static content (projects, about copy)
- `public/` — static assets (favicon, resume PDF, etc.)

## Deploying

This is a client-side SPA. Configure your host so unknown paths (e.g. `/work`, `/about`) fall back to `index.html` instead of 404.

## Favicon

Tab icon is `public/favicon.svg`, linked from `index.html`.
