import { useGetProjectsQuery } from '../features/projects/projectsApi'
import ProjectCard from '../features/projects/ProjectCard'

export default function Projects() {
  const { data: projects, isLoading, isError } = useGetProjectsQuery()

  return (
    <section id="projects" className="page-section">
      <h2 className="section-title">Projects</h2>

      {isLoading && (
        <div className="card-grid">
          {[1, 2, 3].map((n) => (
            <div key={n} className="card card--skeleton">
              <div className="skeleton skeleton--media" />
              <div className="card-body">
                <div className="skeleton skeleton--title" />
                <div className="skeleton skeleton--line" />
                <div className="skeleton skeleton--line skeleton--line-short" />
              </div>
            </div>
          ))}
        </div>
      )}

      {isError && (
        <p className="section-error">
          Could not load projects. Make sure the backend server is running.
        </p>
      )}

      {projects && (
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
