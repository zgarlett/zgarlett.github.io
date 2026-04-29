import { useParams, Link, Navigate } from 'react-router-dom';
import { getProject, projects } from '../data/projects';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find next project for "next up" link
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="page-enter project-details" style={{ '--project-accent': project.accent }}>
      <div className="shell">
        <Link to="/projects" className="back-link">
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path d="M19 12H5M11 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          </svg>
          <span>Back to archive</span>
        </Link>

        <header className="detail-header">
          <span className="detail-eyebrow">
            <span className="dot" /> {project.subtitle}
          </span>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-tagline">{project.description}</p>
        </header>

        <div className="detail-hero">
          <img src={project.image} alt={project.title} />
          <div className="hero-overlay" aria-hidden="true" />
        </div>

        <div className="detail-meta-grid">
          <div className="meta-item">
            <p className="meta-key">Role</p>
            <p className="meta-val">{project.role}</p>
          </div>
          <div className="meta-item">
            <p className="meta-key">Timeline</p>
            <p className="meta-val">{project.timeline}</p>
          </div>
          <div className="meta-item">
            <p className="meta-key">Date</p>
            <p className="meta-val">{project.date}</p>
          </div>
          <div className="meta-item">
            <p className="meta-key">Stack</p>
            <p className="meta-val">{project.stack.join(' · ')}</p>
          </div>
        </div>

        <article className="detail-body">
          {project.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>

        <Link to={`/projects/${nextProject.id}`} className="next-project">
          <div className="next-meta">
            <span className="next-label">Next case study</span>
            <span className="next-id">/{nextProject.id}</span>
          </div>
          <h3 className="next-title">{nextProject.title}</h3>
          <span className="next-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
