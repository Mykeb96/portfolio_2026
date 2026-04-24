export type Project = {
  id: string
  title: string
  summary: string
  tags: string[]
  year: string
  /** Set when you have a live URL or case-study route */
  href?: string
}

/**
 * Placeholder entries — replace summaries, tags, and links as you ship work.
 */
export const PROJECTS: Project[] = [
  {
    id: 'sample-analytics',
    title: 'Analytics dashboard',
    summary:
      'Role, stack, and outcome will live here. One or two lines that sell the problem you solved.',
    tags: ['React', 'TypeScript', 'Data viz'],
    year: '2025',
  },
  {
    id: 'sample-commerce',
    title: 'E‑commerce experience',
    summary:
      'Skeleton card: note performance, accessibility, or conversion wins when you have them.',
    tags: ['Next.js', 'Design system'],
    year: '2024',
  },
  {
    id: 'sample-brand',
    title: 'Marketing site refresh',
    summary:
      'Placeholder for a content-led build — CMS, animation, or brand collaboration highlights.',
    tags: ['Vite', 'Three.js', 'Content'],
    year: '2024',
  },
  {
    id: 'sample-internal',
    title: 'Internal tooling',
    summary:
      'Use this slot for something less public: workflows, dashboards, or platform glue.',
    tags: ['Node', 'UX'],
    year: '2023',
  },
]
