import { ProjectCard } from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

export function WorkPage() {
  return (
    <div className="work">
      <header className="work__intro">
        <p className="eyebrow">Selected work</p>
        <h1 className="work__title">Projects</h1>
        <p className="work__lede">
          Placeholder cards for now — swap in thumbnails, links, and case-study
          routes when each piece is ready to show.
        </p>
      </header>

      <ul className="work__grid">
        {PROJECTS.map((project) => (
          <li key={project.id} className="work__grid-item">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  )
}
