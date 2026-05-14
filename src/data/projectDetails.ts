import memorizerReadmeRaw from '../content/memorizer/README.md?raw'
import readmeRaw from '../content/snippet-manager/README.md?raw'

/** Drop repo title line so the page heading is not duplicated in the README body. */
const memorizerReadme = memorizerReadmeRaw.replace(/^#\s+Memorizer\s*\n+/, '')
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
  memorizer: {
    slug: 'memorizer',
    employerLede:
      'This build lines up with what many front-end and product-engineering roles ask for: a focused SPA, strict TypeScript modeling of UI state, performance-minded components, and polish that holds up on real devices.',
    employerKeywords: [
      'React & TypeScript',
      'Vite',
      'SCSS modules',
      'Component-driven UI',
      'Game / interaction state',
      'React.memo & stable keys',
      'Touch-friendly controls',
      'Static site deployment (Vercel)',
      'ESLint',
    ],
    liveUrl: 'https://memorizer-game.vercel.app/',
    repoUrl: 'https://github.com/Mykeb96/Memorizer',
    heroImageSrc: '/images/projects/memorizer.jpg',
    readmeMarkdown: memorizerReadme,
  },
}

export function getProjectDetail(slug: string | undefined): ProjectDetail | undefined {
  if (!slug) return undefined
  return PROJECT_DETAILS[slug]
}
