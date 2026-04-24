import type { Project } from '../data/projects'

function initials(title: string) {
  const parts = title.split(/\s+/).filter(Boolean)
  const a = parts[0]?.[0] ?? ''
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? ''
  return (a + b).toUpperCase() || '—'
}

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const { title, summary, tags, year, href } = project
  const interactive = Boolean(href)

  const inner = (
    <>
      <div className="project-card__media" aria-hidden="true">
        <span className="project-card__glyph">{initials(title)}</span>
      </div>
      <div className="project-card__body">
        <p className="project-card__meta">
          <span>{year}</span>
          {!interactive && (
            <span className="project-card__badge">Case study soon</span>
          )}
          {interactive && (
            <span className="project-card__badge project-card__badge--live">
              Live
            </span>
          )}
        </p>
        <h2 className="project-card__title" id={`project-${project.id}-title`}>
          {title}
        </h2>
        <p className="project-card__summary">{summary}</p>
        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      {interactive && (
        <span className="project-card__cta">
          View project
          <span className="project-card__cta-arrow" aria-hidden="true">
            →
          </span>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a
        className="project-card project-card--link"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {inner}
      </a>
    )
  }

  return (
    <article
      className="project-card"
      aria-labelledby={`project-${project.id}-title`}
    >
      {inner}
    </article>
  )
}
