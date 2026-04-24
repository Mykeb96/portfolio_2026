import {
  ABOUT_LINKS,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  SKILL_GROUPS,
} from '../data/about'

export function AboutPage() {
  return (
    <div className="about">
      <header className="about__intro">
        <p className="eyebrow">About</p>
        <h1 className="about__title">Full-stack engineer, end to end.</h1>
        <p className="about__lede">
          I build practical web apps with React and modern back-end stacks — APIs,
          databases, and UI — with an emphasis on clarity, performance, and
          maintainability on real teams.
        </p>

        <div className="about__actions">
          <a
            className="btn btn--primary"
            href={ABOUT_LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            className="btn btn--ghost"
            href={ABOUT_LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className="btn btn--ghost"
            href={ABOUT_LINKS.resumePdf}
            download="Mykael_Barnes_resume_2026.pdf"
          >
            Download resume
          </a>
        </div>

        <dl className="about__contact">
          <div>
            <dt>Location</dt>
            <dd>{CONTACT.location}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
            </dd>
          </div>
        </dl>
      </header>

      <section className="about__section" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="about__section-title">
          Tech stack
        </h2>
        <div className="about__skill-groups">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="about__skill-group">
              <h3 className="about__skill-label">{group.label}</h3>
              <ul className="about__skill-tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about__section" aria-labelledby="exp-heading">
        <h2 id="exp-heading" className="about__section-title">
          Experience
        </h2>
        <ul className="about__timeline">
          {EXPERIENCE.map((job) => (
            <li key={job.id} className="about__job">
              <div className="about__job-head">
                <div>
                  <h3 className="about__job-title">
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <p className="about__job-role">
                    {job.role} · {job.location}
                  </p>
                </div>
                <p className="about__job-range">{job.range}</p>
              </div>
              <ul className="about__job-bullets">
                {job.highlights.map((line, i) => (
                  <li key={`${job.id}-${i}`}>{line}</li>
                ))}
              </ul>
              <ul className="about__job-stack">
                {job.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="about__section" aria-labelledby="edu-heading">
        <h2 id="edu-heading" className="about__section-title">
          Education
        </h2>
        <ul className="about__education">
          {EDUCATION.map((row) => (
            <li key={row.id} className="about__education-row">
              <div>
                <p className="about__education-school">{row.school}</p>
                <p className="about__education-cred">{row.credential}</p>
              </div>
              <p className="about__education-meta">
                {row.range}
                <span className="about__education-dot" aria-hidden="true">
                  ·
                </span>
                {row.location}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
