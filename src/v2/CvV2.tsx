import { education, experience, person, skills, type Highlight, type Role } from './cvData';
import './cv-v2.css';

const year = (ym: string | null) => (ym ? ym.slice(0, 4) : 'Now');

function HighlightItem({ item }: { item: Highlight }) {
  if (typeof item === 'string') return <li>{item}</li>;
  return (
    <li>
      <span>
        {item.text}
        <ul className="sub">
          {item.sub.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </span>
    </li>
  );
}

function RoleEntry({ role }: { role: Role }) {
  const current = role.end === null;
  const startYear = year(role.start);
  const endYear = year(role.end);

  return (
    <article className={`role${current ? ' is-current' : ''}`}>
      <div className="role-date">
        <span className="yr">{startYear}</span>
        {startYear !== endYear && <span className="to">–{endYear}</span>}
        <span className="period">{role.period}</span>
        {current && (
          <span className="now">
            <i aria-hidden="true" />
            Current role
          </span>
        )}
      </div>

      <div className="role-body">
        <p className="company">
          {role.company}
          {role.companyNote && <span> {role.companyNote}</span>}
        </p>
        <h3>{role.role}</h3>
        {role.location && <p className="loc">{role.location}</p>}
        {role.intro.map((p, i) => (
          <p key={i} className="summary">
            {p}
          </p>
        ))}
        {role.highlights.length > 0 && (
          <>
            {role.highlightsLabel && <p className="micro hl-label">{role.highlightsLabel}</p>}
            <ul className="hl">
              {role.highlights.map((h, i) => (
                <HighlightItem key={i} item={h} />
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="role-skills">
        <p className="micro">Stack</p>
        <ul>
          {role.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const tiers = [
  { key: 'expert', label: 'Expert', mark: 'A', cls: 't-a' },
  { key: 'intermediate', label: 'Intermediate', mark: 'B', cls: 't-b' },
  { key: 'novice', label: 'Novice', mark: 'C', cls: 't-c' },
] as const;

export default function CvV2() {
  const [first, ...rest] = person.name.split(' ');

  return (
    <div className="cv2">
      <div className="page">
        <header>
          <div className="grid meta">
            <p className="micro">Curriculum vitae</p>
            <p className="micro">{person.focus}</p>
            <p className="micro">{person.coords}</p>
            <p className="micro">Edition 2026</p>
          </div>

          <div className="grid masthead">
            <h1 className="name">
              <span>{first}</span>
              <span>{rest.join(' ')}</span>
            </h1>
            <img className="portrait" src={person.photo} alt={`Portrait of ${person.name}`} width={320} height={320} />
            <p className="role-line">
              {person.title}
              <small>{person.tagline}</small>
            </p>
            <dl className="contact">
              <div>
                <dt className="micro">Email</dt>
                <dd>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </dd>
              </div>
              <div>
                <dt className="micro">Phone</dt>
                <dd>
                  <a href={person.phoneHref}>{person.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="micro">Based in</dt>
                <dd>{person.location}</dd>
              </div>
              <div>
                <dt className="micro">Education</dt>
                <dd>{education[0].degree}</dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="grid profile" aria-labelledby="h-profile">
          <div className="sec-head">
            <h2 id="h-profile">Profile</h2>
          </div>
          <div className="sec-body">
            <p>{person.profile}</p>
          </div>
        </section>

        <section className="grid experience" aria-labelledby="h-exp">
          <div className="sec-head">
            <h2 id="h-exp">Experience</h2>
            <p className="micro">{experience.length} roles · 2017–now</p>
          </div>
          <div className="sec-body">
            {experience.map((r) => (
              <RoleEntry key={`${r.company}-${r.start}`} role={r} />
            ))}
          </div>
        </section>

        <section className="grid skills" aria-labelledby="h-skills">
          <div className="sec-head">
            <h2 id="h-skills">Skills</h2>
            <p className="micro">By depth of use</p>
          </div>
          <div className="sec-body">
            <p className="legend">
              <span>
                <b>A</b>Expert · daily, leads on it
              </span>
              <span>
                <b>B</b>Intermediate · shipped in production
              </span>
              <span>
                <b>C</b>Novice · explored
              </span>
            </p>
            {tiers.map((t) => (
              <div key={t.key} className={`tier ${t.cls}`}>
                <p className="tier-head">
                  <span className="mark">{t.mark}</span>
                  <span>{t.label}</span>
                  <span className="count">{String(skills[t.key].length).padStart(2, '0')}</span>
                </p>
                <ul>
                  {skills[t.key].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid edu" aria-labelledby="h-edu">
          <div className="sec-head">
            <h2 id="h-edu">Education</h2>
          </div>
          <div className="sec-body">
            {education.map((e) => (
              <div key={e.degree} className="edu-row">
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="grid colophon">
          <p className="micro">
            {person.name} · {person.email}
          </p>
          <p className="micro">Set in Archivo on a 12-column grid</p>
        </footer>
      </div>
    </div>
  );
}
