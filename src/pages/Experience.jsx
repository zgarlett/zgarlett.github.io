import './Experience.css';

const experiences = [
  {
    company: 'Flint Hills Resources',
    role: 'Software Engineer',
    dates: 'Nov 2020 - Feb 2026',
    location: 'Wichita, KS',
    summary:
      'Solo practice working with early-stage teams on interface design, design systems, and frontend implementation. Recent clients span aerospace, climate, and developer tools.',
    bullets: [
      'Wrote clean, maintainable, and reusable code in TypeScript and React for front-end and serverless back-end components, following software engineering best practices.',
      'Collaborated with product managers, engineers, and operations throughout the SDLC to define requirements and prioritize deliverables.',
      'Translated business requirements into technical solutions, designing REST API contracts and optimizing MySQL schemas for integrations between systems.',
      'Debugged, troubleshot, and resolved production issues, performing root-cause analysis and supporting incident response and customer-facing technical support.',
      'Participated in code reviews and testing processes using Git and unit/integration tests; worked closely with QA to improve test coverage and release quality.',
      'Documented software architecture and design decisions, producing API documentation and diagrams for cloud-based/serverless deployments on AWS.',
      'Collaborated on full-stack product development, ensuring seamless integration of front-end and back-end components.',
    ],
  },
  {
    company: 'Flint Hills Resources - Intern',
    role: 'Software Engineer',
    dates: 'May 2020 — Aug 2020',
    location: 'Wichita, KS',
    summary:
      'Owned the design of the data exploration product (~200k MAU). Partnered closely with engineering on a year-long performance overhaul that cut interaction latency by 40%.',
    bullets: [
      'Built integrations between applications and data sources (databases, REST APIs) to support feature development and data flows.',
      'Created AWS Lambda functions using the Serverless Framework (infrastructure-as-code) to implement serverless business logic and event-driven workflows.',
      'Gained practical software development experience and adapted to professional SDLC processes and team workflows.',
    ],
  },
  {
    company: 'Bert Cooper Civil Engineering Lab',
    role: 'Mobile Application Developer',
    dates: 'Jan 2019 - Dec 2020',
    location: 'Stillwater, OK',
    summary:
      'Developing mobile applications that interact with equipment via bluetooth to streamline data collection and improve user experience for field engineers.',
    bullets: [
      'Developed mobile applications that interact with equipment via Bluetooth to streamline data collection',
      'Improved user experience for field engineers through intuitive interface design',
      'Collaborated with cross-functional teams to gather requirements and implement features for a bluetooth-enabled pressure transducer',
    ],
  },
];

export default function Experience() {
  return (
    <div className="page-enter experience">
      <div className="shell">
        <div className="page-header">
          <span className="eyebrow">File · 0002 / Experience</span>
          <h1 className="headline">work history.</h1>
          <p className="page-lede">
            Roles I've held, in reverse chronological order.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <article className="timeline-entry" key={exp.company}>
              <div className="timeline-marker" aria-hidden="true">
                <span className="marker-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="marker-line" />
              </div>

              <div className="timeline-content">
                <div className="entry-header">
                  <div>
                    <h3 className="entry-company">{exp.company}</h3>
                    <p className="entry-role">{exp.role}</p>
                  </div>
                  <div className="entry-meta">
                    <span className="entry-dates">{exp.dates}</span>
                    <span className="entry-location">{exp.location}</span>
                  </div>
                </div>

                <p className="entry-summary">{exp.summary}</p>

                <ul className="entry-bullets">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
