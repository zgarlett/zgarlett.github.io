import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

const links = [
  { to: '/', label: 'Home', code: '00' },
  { to: '/resume', label: 'Resume', code: '01' },
  { to: '/experience', label: 'Experience', code: '02' },
  { to: '/projects', label: 'Projects', code: '03' },
];

export default function Header() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

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

        <div className="header-right">
          <div className="header-status" aria-hidden="true">
            <span className="status-dot" />
            <span>online</span>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
