import { Link } from 'react-router-dom';
import './ProjectCard.css';

/**
 * Touchable project card.
 * Wraps everything in a <Link> so the entire card is one tap target,
 * which is the right pattern for mobile + accessibility.
 *
 * Props:
 *   id          - string, used to build the URL: /projects/:id
 *   title       - string
 *   subtitle    - string (e.g., role, client, or tagline)
 *   date        - string (e.g., "2024" or "Mar 2024")
 *   description - string, short summary
 *   image       - string, URL to cover image
 *   accent      - optional CSS color string for tag/glow
 */
export default function ProjectCard({
  id,
  title,
  subtitle,
  date,
  description,
  image,
  accent = 'var(--accent)',
}) {
  return (
    <Link
      to={`/projects/${id}`}
      className="project-card"
      style={{ '--card-accent': accent }}
      aria-label={`Open project: ${title}`}
    >
      <div className="card-media">
        <img src={image} alt="" loading="lazy" />
        <div className="card-media-overlay" aria-hidden="true" />
        <span className="card-date">{date}</span>
      </div>

      <div className="card-body">
        <div className="card-heading">
          <h3 className="card-title">{title}</h3>
          <span className="card-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </div>
        <p className="card-subtitle">{subtitle}</p>
        <p className="card-description">{description}</p>

        <div className="card-footer">
          <span className="card-cta">View case study</span>
          <span className="card-id">/{id}</span>
        </div>
      </div>
    </Link>
  );
}
