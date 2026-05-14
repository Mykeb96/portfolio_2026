import readmeRaw from '../content/snippet-manager/README.md?raw'

/** Drop repo title line so the page heading is not duplicated in the README body. */
const snippetReadme = readmeRaw.replace(/^#\s+Snippet Manager\s*\n+/, '')

export type ProjectDetail = {
  slug: string
  employerLede: string
  employerKeywords: string[]
  liveUrl: string
  repoUrl: string
  heroImageSrc: string
  readmeMarkdown: string
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  'snippet-manager': {
    slug: 'snippet-manager',
    employerLede:
      'This build lines up with what many full-stack and product-engineering roles ask for: a secure API, a modern SPA, relational data modeling, and tests that behave the way a shipping team would expect.',
    employerKeywords: [
      'Full-stack development',
      'REST API design',
      'JWT authentication',
      'Role-based access control (RBAC)',
      'ASP.NET Core',
      '.NET / EF Core',
      'React & TypeScript',
      'SQLite & migrations',
      'OpenAPI / Swagger',
      'End-to-end testing (Playwright)',
      'API integration tests (xUnit)',
      'Test isolation & cleanup',
      'Rate limiting',
      'CORS & deployment config',
      'Accessibility-minded UI testing',
    ],
    liveUrl: 'https://my-snippet-manager.vercel.app/',
    repoUrl: 'https://github.com/Mykeb96/snippet-manager',
    heroImageSrc: '/images/projects/snippet-manager.jpg',
    readmeMarkdown: snippetReadme,
  },
}

export function getProjectDetail(slug: string | undefined): ProjectDetail | undefined {
  if (!slug) return undefined
  return PROJECT_DETAILS[slug]
}
