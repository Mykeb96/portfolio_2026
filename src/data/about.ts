/** External profiles and static assets */
export const ABOUT_LINKS = {
  github: 'https://github.com/Mykeb96',
  linkedin: 'https://www.linkedin.com/in/mykael-barnes/',
  /** Served from `/public` */
  resumePdf: '/Mykael_Barnes_resume_2026.pdf',
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
      'Code reviews and mentorship for junior engineers.',
      'Partnered with design on front-end UX improvements.',
      'Production CI/CD pipeline ownership.',
      'Led a dev team: delegation, communication, and delivery against deadlines.',
      'Introduced AWS S3 to offload assets from builds and reduce slug size.',
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
      'Built large-scale AI-backed products end to end.',
      'Ported web projects to mobile (iOS and Android).',
      'Owned lifecycle from concept through staging to production.',
      'Collaborated across regions on multilingual product features.',
      'Shipped a credit system to drive sign-ups and repeat purchases.',
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
      'Integrated Shopify APIs for a custom front-end rework.',
      'Standardized workflow with GitHub, standards, and pull requests.',
      'Project management and task delegation.',
    ],
    stack: ['TypeScript', 'React', 'Next.js'],
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
    credential: 'Full-Stack Development',
    range: 'Apr 2021 – Apr 2022',
    location: 'Online',
  },
  {
    id: 'psu',
    school: 'Portland State University',
    credential: 'Computer Science',
    range: 'Jan 2015 – 2019',
    location: 'Portland, OR',
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
]
