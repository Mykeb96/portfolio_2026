import { ProjectCard } from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

export function WorkPage() {
  return (
    <div className="work">
      <header className="work__intro">
        <p className="eyebrow">Selected work</p>
        <h1 className="work__title">Projects</h1>
        <p className="work__lede">
          Recent builds and experiments — links go to demos, repos, or write-ups
          when they are public.
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
