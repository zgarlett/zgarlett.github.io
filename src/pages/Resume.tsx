export default function Resume() {
  return (
    <section id="resume" className="page-section">
      <h2 className="section-title">Resume</h2>
      <div className="resume-grid">
        <div className="resume-block">
          <h3 className="resume-block-title">Contact</h3>
          <ul className="resume-list">
            <li>your.email@example.com</li>
            <li>linkedin.com/in/yourprofile</li>
            <li>github.com/yourusername</li>
            <li>City, State</li>
          </ul>
        </div>
        <div className="resume-block">
          <h3 className="resume-block-title">Education</h3>
          <ul className="resume-list">
            <li>
              <strong>B.S. Computer Science</strong>
              <br />
              University Name — 20XX–20XX
            </li>
          </ul>
        </div>
        <div className="resume-block">
          <h3 className="resume-block-title">Skills</h3>
          <div className="tag-list">
            {['JavaScript', 'TypeScript', 'React', 'Python', 'SQL', 'Git', 'Docker', 'AWS'].map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="resume-block">
          <h3 className="resume-block-title">Certifications</h3>
          <ul className="resume-list">
            <li>Certification Name — Issuer, 20XX</li>
            <li>Certification Name — Issuer, 20XX</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
