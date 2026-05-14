import { Link } from 'react-router-dom'
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
  const { title, summary, tags, year, href, linkBadge, detailSlug, thumbnailSrc } =
    project
  const detailPath = detailSlug ? `/work/${detailSlug}` : undefined
  const interactive = Boolean(detailPath || href)

  const inner = (
    <>
      <div
        className={`project-card__media${thumbnailSrc ? ' project-card__media--image' : ''}`}
        aria-hidden={thumbnailSrc ? undefined : true}
      >
        {thumbnailSrc ? (
          <img
            className="project-card__thumb"
            src={thumbnailSrc}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="project-card__glyph">{initials(title)}</span>
        )}
      </div>
      <div className="project-card__body">
        <p className="project-card__meta">
          <span>{year}</span>
          {!interactive && (
            <span className="project-card__badge">Case study soon</span>
          )}
          {interactive && (
            <span className="project-card__badge project-card__badge--live">
              {linkBadge ?? (detailPath ? 'Case study' : 'Live')}
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

  if (detailPath) {
    return (
      <Link className="project-card project-card--link" to={detailPath}>
        {inner}
      </Link>
    )
  }

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
