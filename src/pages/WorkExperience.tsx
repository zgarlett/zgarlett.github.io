const jobs = [
  {
    company: 'Company Name',
    role: 'Senior Software Engineer',
    dates: 'Jan 20XX – Present',
    bullets: [
      'Placeholder: Describe a key technical achievement or responsibility.',
      'Placeholder: Highlight teamwork, scale, or business impact.',
      'Placeholder: Mention technologies or methodologies used.',
    ],
  },
  {
    company: 'Another Company',
    role: 'Software Engineer',
    dates: 'Jun 20XX – Dec 20XX',
    bullets: [
      'Placeholder: Describe a key technical achievement or responsibility.',
      'Placeholder: Highlight teamwork, scale, or business impact.',
      'Placeholder: Mention technologies or methodologies used.',
    ],
  },
  {
    company: 'First Company',
    role: 'Junior Developer',
    dates: 'Aug 20XX – May 20XX',
    bullets: [
      'Placeholder: Describe a key technical achievement or responsibility.',
      'Placeholder: Highlight something you learned or built.',
    ],
  },
]

export default function WorkExperience() {
  return (
    <section id="work-experience" className="page-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.company + job.role} className="job-entry">
            <div className="job-header">
              <div>
                <h3 className="job-role">{job.role}</h3>
                <span className="job-company">{job.company}</span>
              </div>
              <span className="job-dates">{job.dates}</span>
            </div>
            <ul className="job-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
