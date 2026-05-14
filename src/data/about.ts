/** External profiles and static assets */
export const ABOUT_LINKS = {
  github: 'https://github.com/Mykeb96',
  linkedin: 'https://www.linkedin.com/in/mykael-barnes/',
  /** Served from `/public` */
  resumePdf: '/Mykael_Barnes_Resume.pdf',
} as const

export const CONTACT = {
  email: 'mykael.barnes@hotmail.com',
  phoneDisplay: '(503) 550-2853',
  phoneTel: '+15035502853',
  location: 'Hillsboro, OR',
} as const

export type JobEntry = {
  id: string
  company: string
  companyUrl?: string
  role: string
  location: string
  range: string
  highlights: string[]
  stack: string[]
}

export const EXPERIENCE: JobEntry[] = [
  {
    id: 'tcr',
    company: 'Top Casino Rewards',
    companyUrl: 'https://topcasinorewards.com',
    role: 'Software Engineer II',
    location: 'Remote (Canada)',
    range: 'Sep 2024 – Present',
    highlights: [
      'Automated synchronization of externally hosted JSON with a scheduled process that detects changes and updates the database, eliminating manual tracking.',
      'Conducted code reviews and provided mentorship to junior engineers.',
      'Led a development team: delegating tasks, keeping communication clear, and collaborating to hit project goals and deadlines.',
      'Improved system reliability by finding inefficiencies and implementing scalable solutions across workflows.',
      'Used AWS S3 to restructure asset delivery, cutting build size and improving performance.',
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'Prisma', 'PostgreSQL', 'Docker', 'Redis'],
  },
  {
    id: 'dawraty',
    company: 'Dawraty',
    companyUrl: 'https://joindawraty.com',
    role: 'Software Engineer I',
    location: 'Remote (Kuwait)',
    range: 'Aug 2023 – Aug 2025',
    highlights: [
      'Automated internal workflows that cut manual processing from hours or days to minutes, improving efficiency and reducing human error.',
      'Adapted web applications for iOS and Android with consistent functionality and performance.',
      'Led the full product lifecycle from concept through development, staging, and production.',
      'Worked with international teams to design features for multiple languages and countries.',
    ],
    stack: ['JavaScript', 'React', 'React Native', 'PHP', 'Laravel', 'MySQL'],
  },
  {
    id: 'percent',
    company: 'Percent Apparel',
    role: 'Full-Stack Developer',
    location: 'San Jose, CA',
    range: 'Feb 2022 – Jun 2023',
    highlights: [
      'Streamlined data sync between Shopify APIs and internal systems, reducing manual data handling.',
      'Integrated Shopify API services for a full custom front-end rework.',
      'Built dynamic, data-driven UI using product, inventory, and customer datasets.',
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'Shopify'],
  },
]

export type SchoolEntry = {
  id: string
  school: string
  credential: string
  range: string
  location: string
}

export const EDUCATION: SchoolEntry[] = [
  {
    id: 'bloom',
    school: 'Bloom Institute of Technology',
    credential: 'Computer Science',
    range: 'Apr 2021 – Apr 2022',
    location: 'Online',
  },
]

/** Grouped for the About page; adjust anytime. */
export const SKILL_GROUPS: { label: string; items: string[] }[] = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'PHP', 'Laravel', 'ASP.NET Core', 'Python'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MySQL', 'Prisma', 'Redis'],
  },
  {
    label: 'Platform',
    items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Azure', 'AWS', 'CI/CD'],
  },
  {
    label: 'Testing',
    items: ['Playwright', 'xUnit'],
  },
]
