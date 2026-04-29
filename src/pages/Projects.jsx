import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <div className="page-enter projects-page">
      <div className="shell">
        <div className="page-header">
          <span className="eyebrow">File · 0004 / Projects</span>
          <h1 className="headline">selected work.</h1>
          <p className="page-lede">
            A small archive of recent projects. Tap any card for the full case study —
            including process notes, mistakes, and what I'd do differently.
          </p>
        </div>

        <div className="projects-meta">
          <span className="meta-count">
            <span className="count-num">{projects.length}</span>
            <span className="count-label">projects archived</span>
          </span>
          <span className="meta-filter">All disciplines · 2022–2024</span>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
