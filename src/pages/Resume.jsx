import './Resume.css';

const skills = {
  Design: ['Interface Design', 'Design Systems', 'Prototyping', 'Motion', 'Type Design'],
  Engineering: ['React / Next.js', 'TypeScript', 'WebGL / Three.js', 'Node', 'Rust (learning)'],
  Practice: ['User Research', 'Workshop Facilitation', 'Technical Writing', 'Mentorship'],
};

const education = [
  {
    school: 'University of Kansas',
    degree: 'B.F.A., Visual Communication',
    year: '2014 — 2018',
    note: 'Minor in Computer Science',
  },
  {
    school: 'Recurse Center',
    degree: 'Self-directed programming retreat',
    year: 'Spring 2020',
    note: 'Focus: graphics programming, type rendering',
  },
];

const speaking = [
  { event: 'Config 2024', talk: '"Designing for the next 10,000 days"', location: 'San Francisco' },
  { event: 'Front Conference', talk: '"WebGL without the headache"', location: 'Zurich' },
  { event: 'Layers 2023', talk: 'Workshop: Generative type systems', location: 'Brooklyn' },
];

export default function Resume() {
  return (
    <div className="page-enter resume">
      <div className="shell">
        <div className="page-header">
          <span className="eyebrow">File · 0002 / Resume</span>
          <h1 className="headline">resume.</h1>
          <p className="page-lede">
            A concise account of training, output, and public-facing work. For the
            full case studies, see <a href="/projects">/projects</a>.
          </p>
          <a href="#" className="resume-download" download>
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            </svg>
            <span>Download PDF</span>
          </a>
        </div>

        <section className="resume-section">
          <h2 className="resume-section-title">
            <span className="section-num">01</span> Skills
          </h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-block" key={category}>
                <h3 className="skill-cat">{category}</h3>
                <ul className="skill-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">
            <span className="section-num">02</span> Education
          </h2>
          <div className="education-list">
            {education.map((ed) => (
              <div className="education-row" key={ed.school}>
                <div className="edu-year">{ed.year}</div>
                <div className="edu-main">
                  <h3 className="edu-school">{ed.school}</h3>
                  <p className="edu-degree">{ed.degree}</p>
                  <p className="edu-note">{ed.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">
            <span className="section-num">03</span> Speaking & Writing
          </h2>
          <div className="speaking-list">
            {speaking.map((s) => (
              <div className="speaking-row" key={s.event}>
                <div className="speak-event">{s.event}</div>
                <div className="speak-talk">{s.talk}</div>
                <div className="speak-location">{s.location}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
