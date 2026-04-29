import './Resume.css';

const skills = {
    Languages: ['TypeScript', 'JavaScript', 'C#', 'VB.NET', 'C++', 'Swift', 'Kotlin'],
    Frontend: ['React', 'React Native', 'CSS'],
    'Backend & Cloud': ['MySQL', 'MS SQL Server', 'Oracle', 'AWS', 'AWS Lambda', 'REST APIs', 'Azure DevOps', 'Git'],
};

const education = [
    {
        school: 'Oklahoma State University',
        degree: 'B.S., Computer Science',
        year: 'Dec 2020',
        note: 'GPA: 3.5',
    },
    {
        school: 'University of Oklahoma',
        degree: 'B.S., Geology',
        year: 'Dec 2015',
        note: '',
    },
];

const speaking = [
    {
        event: 'Hour of Code 2024',
        talk: '"Intro to Development: Building a Web Game, 4th Grade"',
        location: 'Isely Traditional Magnet Elementary School',
    },
    { event: 'Hour of Code 2025', talk: '"Intro to Development: Building a Web Game, 3rd Grade"', location: 'Isely Traditional Magnet Elementary School' }
];

export default function Resume() {
    return (
        <div className="page-enter resume">
            <div className="shell">
                <div className="page-header">
                    <span className="eyebrow">File · 0001 / Resume</span>
                    <h1 className="headline">resume.</h1>
                    <p className="page-lede">
                        Full-stack software engineer with 5+ years building cloud-based applications
                        and integrations. Experienced translating product requirements into
                        maintainable REST APIs and database schemas. For project case studies,
                        see <a href="/projects">/projects</a>.
                    </p>
                    <a href="#" className="resume-download" download>
                        <svg viewBox="0 0 24 24" width="14" height="14">
                            <path
                                d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="square"
                            />
                        </svg>
                        <a
                            href="https://raw.githubusercontent.com/zgarlett/zgarlett.github.io/main/Garlett-Resume.pdf"
                            download
                        >
                            Download PDF
                        </a>
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
                        <span className="section-num">03</span> Extra Curricular
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
