import blackjackSpReadmeRaw from '../content/blackjack-sp/README.md?raw'
import memorizerReadmeRaw from '../content/memorizer/README.md?raw'
import readmeRaw from '../content/snippet-manager/README.md?raw'
import typeRacerReadmeRaw from '../content/type-racer/README.md?raw'

/** Drop repo title line so the page heading is not duplicated in the README body. */
const blackjackSpReadme = blackjackSpReadmeRaw.replace(
  /^#\s+Blackjack \(single player\)\s*\n+/,
  '',
)
const memorizerReadme = memorizerReadmeRaw.replace(/^#\s+Memorizer\s*\n+/, '')
const snippetReadme = readmeRaw.replace(/^#\s+Snippet Manager\s*\n+/, '')
const typeRacerReadme = typeRacerReadmeRaw.replace(/^#\s+Type\s+Racer\s*\n+/, '')

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
  'blackjack-sp': {
    slug: 'blackjack-sp',
    employerLede:
      'This build lines up with roles that care about clear domain modeling in the UI layer: game rules expressed in typed TypeScript modules, predictable round flow, and a polished responsive interface — including motion preferences — without leaning on a heavy framework beyond React.',
    employerKeywords: [
      'React & TypeScript',
      'Vite',
      'Domain models (deck, player, dealer, game)',
      'Game rules & outcomes in code',
      'Responsive / safe-area layout',
      'Animation timing & reduced motion',
      'ESLint (flat config)',
      'Static site deployment (Vercel)',
    ],
    liveUrl: 'https://black-jack-sp.vercel.app/',
    repoUrl: 'https://github.com/Mykeb96/BlackJack-SP',
    heroImageSrc: '/images/projects/blackjack-sp.jpg',
    readmeMarkdown: blackjackSpReadme,
  },
  'type-racer': {
    slug: 'type-racer',
    employerLede:
      'This build lines up with front-end roles that value tight input handling and feedback loops: comparing keystrokes to expected text, driving UI from derived state, measuring elapsed time accurately, and presenting results (WPM) without muddying the core typing flow.',
    employerKeywords: [
      'React & TypeScript',
      'Vite',
      'Controlled input & keyboard UX',
      'Per-character validation / highlighting',
      'Timers & round lifecycle',
      'Derived game state in components',
      'ESLint (flat config)',
      'Static site deployment (Vercel)',
    ],
    liveUrl: 'https://type-racer-game.vercel.app/',
    repoUrl: 'https://github.com/Mykeb96/type_racer',
    heroImageSrc: '/images/projects/type-racer.jpg',
    readmeMarkdown: typeRacerReadme,
  },
}

export function getProjectDetail(slug: string | undefined): ProjectDetail | undefined {
  if (!slug) return undefined
  return PROJECT_DETAILS[slug]
}
