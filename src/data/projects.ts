export type Project = {
  id: string
  title: string
  summary: string
  tags: string[]
  year: string
  /** In-app detail page at `/work/:id` */
  detailSlug?: string
  /** Hero / card image under `public/` */
  thumbnailSrc?: string
  /** External card link when there is no `detailSlug` */
  href?: string
  /** Label next to the year when the card is interactive */
  linkBadge?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'snippet-manager',
    title: 'Snippet Manager',
    summary:
      'Full-stack app for creating, tagging, and sharing code snippets — ASP.NET Core 10 and EF Core API with JWT and role-based auth, React 19 and TypeScript SPA, plus Playwright e2e and xUnit integration tests.',
    tags: ['React', 'TypeScript', 'ASP.NET Core', 'EF Core', 'Playwright'],
    year: '2026',
    detailSlug: 'snippet-manager',
    thumbnailSrc: '/images/projects/snippet-manager.jpg',
    linkBadge: 'full-stack app',
  },
  {
    id: 'memorizer',
    title: 'Memorizer',
    summary:
      'Memory card game — React and TypeScript with Vite, SCSS modules, glass-style cards and pair sigils, match timing and win flow, touch-friendly layout, and a static build deployed on Vercel.',
    tags: ['React', 'TypeScript', 'Vite', 'SCSS'],
    year: '2026',
    detailSlug: 'memorizer',
    thumbnailSrc: '/images/projects/memorizer.jpg',
    linkBadge: 'game',
  },
  {
    id: 'blackjack-sp',
    title: 'Blackjack',
    summary:
      'Single-player Blackjack — React 19 and TypeScript with Vite, model layer for deck, hands, dealer, and round flow, casino-style betting UI, staggered deal animation, and responsive layout with reduced-motion support.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    year: '2026',
    detailSlug: 'blackjack-sp',
    thumbnailSrc: '/images/projects/blackjack-sp.jpg',
    linkBadge: 'game',
  },
  {
    id: 'type-racer',
    title: 'Type Racer',
    summary:
      'Typing speed game — React 19 and TypeScript with Vite, live per-character feedback, centisecond timer, WPM on completion, countdown and auto-finish when the passage matches, and multiple built-in prompts.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    year: '2026',
    detailSlug: 'type-racer',
    thumbnailSrc: '/images/projects/type-racer.jpg',
    linkBadge: 'game',
  },
]
