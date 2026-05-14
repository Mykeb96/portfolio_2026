import { useMemo, type ComponentPropsWithoutRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getProjectDetail } from '../data/projectDetails'
import { PROJECTS } from '../data/projects'

type MarkdownAnchorProps = ComponentPropsWithoutRef<'a'>

function MarkdownLink({ href, children, ...rest }: MarkdownAnchorProps) {
  const external = href?.startsWith('http')
  return (
    <a
      href={href}
      {...rest}
      {...(external
        ? { target: '_blank', rel: 'noreferrer noopener' }
        : {})}
    >
      {children}
    </a>
  )
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = useMemo(() => PROJECTS.find((p) => p.id === slug), [slug])
  const detail = getProjectDetail(slug)

  if (!project || !detail) {
    return <Navigate to="/work" replace />
  }

  return (
    <div className="project-detail">
      <nav className="project-detail__nav" aria-label="Breadcrumb">
        <Link className="project-detail__back" to="/work">
          ← Back to work
        </Link>
      </nav>

      <header className="project-detail__hero">
        <div className="project-detail__hero-visual">
          <img
            src={detail.heroImageSrc}
            width={1200}
            height={630}
            alt={`${project.title} — screenshot of the deployed app`}
            loading="eager"
            decoding="async"
            className="project-detail__hero-img"
          />
        </div>
        <div className="project-detail__hero-panel">
          <p className="eyebrow">Case study</p>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__meta">
            <span>{project.year}</span>
            <span className="project-detail__meta-sep" aria-hidden="true">
              ·
            </span>
            <span>Shipped app + source</span>
          </p>
          <p className="project-detail__summary">{project.summary}</p>
          <div className="project-detail__actions">
            <a
              className="btn btn--primary"
              href={detail.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Open live site
            </a>
            <a
              className="btn btn--ghost"
              href={detail.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </header>

      <section
        className="project-detail__employer"
        aria-labelledby="employer-heading"
      >
        <h2 id="employer-heading" className="project-detail__section-title">
          Hiring-relevant highlights
        </h2>
        <p className="project-detail__employer-lede">{detail.employerLede}</p>
        <ul className="project-detail__keywords">
          {detail.employerKeywords.map((kw) => (
            <li key={kw}>{kw}</li>
          ))}
        </ul>
      </section>

      <section className="project-detail__readme" aria-labelledby="readme-heading">
        <h2 id="readme-heading" className="project-detail__section-title">
          README from the repository
        </h2>
        <div className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: MarkdownLink,
            }}
          >
            {detail.readmeMarkdown}
          </ReactMarkdown>
        </div>
      </section>
    </div>
  )
}
