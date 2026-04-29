import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="page-enter home">
      <div className="shell home-shell">
        <span className="eyebrow">Index · 0001</span>

        <h1 className="home-headline">
          Software<br />
          <span className="outline-text">Engineering</span><br />
          for the<br />
          <span className="accent-text">near-future</span>.
        </h1>

        <div className="home-meta">
          <div>
            <p className="meta-label">Currently</p>
            <p className="meta-value">Available — Q2 2026</p>
          </div>
          <div>
            <p className="meta-label">Based</p>
            <p className="meta-value">Kansas → Anywhere</p>
          </div>
          <div>
            <p className="meta-label">Practice</p>
            <p className="meta-value">Software Engineering</p>
          </div>
        </div>

        <p className="home-intro">
          Independent software engineer working on interfaces that feel less like
          software and more like instruments. I help teams turn complex systems into
          things people can actually hold in their head.
        </p>

        <div className="home-cta">
          <Link to="/projects" className="cta-primary">
            <span>See the work</span>
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            </svg>
          </Link>
          <Link to="/resume" className="cta-secondary">Read the resume</Link>
        </div>

        {/* Decorative geometric block */}
        <div className="home-deco" aria-hidden="true">
          <svg viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" fill="none" stroke="var(--rule-strong)" strokeDasharray="2 6" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="var(--rule-strong)" />
            <circle cx="200" cy="200" r="80" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="var(--rule)" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="var(--rule)" />
            <circle cx="200" cy="200" r="6" fill="var(--accent)" />
            <text x="210" y="125" fontFamily="JetBrains Mono" fontSize="10" fill="var(--ink-dim)">
              N 37.7°
            </text>
            <text x="210" y="285" fontFamily="JetBrains Mono" fontSize="10" fill="var(--ink-dim)">
              W 97.4°
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
