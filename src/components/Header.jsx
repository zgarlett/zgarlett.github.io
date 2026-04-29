import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const links = [
  { to: '/', label: 'Home', code: '00' },
  { to: '/resume', label: 'Resume', code: '01' },
  { to: '/experience', label: 'Experience', code: '02' },
  { to: '/projects', label: 'Projects', code: '03' },
];

export default function Header() {
  return (
    <header className="floating-header">
      <div className="header-inner">
        <Link to="/" className="header-mark" aria-label="Home">
          <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
            <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="16" r="4" fill="currentColor" />
            <line x1="16" y1="0" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
            <line x1="16" y1="26" x2="16" y2="32" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>NAV.01</span>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link-active' : '')
              }
            >
              <span className="nav-code">{link.code}</span>
              <span className="nav-label">{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="header-status" aria-hidden="true">
          <span className="status-dot" />
          <span>online</span>
        </div>
      </div>
    </header>
  );
}
