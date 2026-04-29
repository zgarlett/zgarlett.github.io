import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-block">
          <p className="footer-key">// transmission ends</p>
          <p className="footer-copy">
            Built by hand. No tracking, no analytics, no cookies.
          </p>
        </div>

        <div className="footer-block footer-links">
          <a href="mailto:zachary.garlett@okstate.edu">zachary.garlett@okstate.edu</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">github</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">linkedin</a>
        </div>

        <div className="footer-block footer-meta">
          <span>© 2026</span>
          <span className="footer-divider">·</span>
          <span>Wichita, KS · 37.7°N 97.4°W</span>
        </div>
      </div>
    </footer>
  );
}
