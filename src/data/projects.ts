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
    linkBadge: 'Case study',
  },
]
