import { education, experience, facts, languages, person, skills, type Highlight, type Role } from './cvData';
import './cv-v2.css';

const year = (ym: string | null) => (ym ? ym.slice(0, 4) : 'Now');

/** ['A1', 'A3', 'A4', 'A5'] → 'A1, A3–A5' */
function formatRefs(refs: string[]) {
  const nums = refs.map((r) => Number(r.slice(1))).sort((a, b) => a - b);
  const runs: string[] = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) j++;
    runs.push(j - i >= 2 ? `A${nums[i]}–A${nums[j]}` : nums.slice(i, j + 1).map((n) => `A${n}`).join(', '));
    i = j;
  }
  return runs.join(', ');
}

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

function HighlightList({ label, items, className }: { label: string; items: Highlight[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <>
      <p className="micro hl-label">{label}</p>
      <ul className={className ? `hl ${className}` : 'hl'}>
        {items.map((h, i) => (
          <HighlightItem key={i} item={h} />
        ))}
      </ul>
    </>
  );
}

function RoleEntry({ role }: { role: Role }) {
  const current = role.end === null;
  const startYear = year(role.start);
  const endYear = year(role.end);

  return (
    <article id={role.id} className={`role${current ? ' is-current' : ''}`}>
      <div className="role-date">
        <span className="ref micro">{role.id}</span>
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
        {role.note && <p className="role-note">{role.note}</p>}
        {role.intro.map((p, i) => (
          <p key={i} className="summary">
            {p}
          </p>
        ))}
        <HighlightList label="Responsibilities" items={role.responsibilities} />
        <HighlightList label="Results" items={role.results} className="hl-results" />
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
                <dd>
                  Prof. Bachelor Applied Informatics, {education[0].year}
                </dd>
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
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="micro">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="grid experience" aria-labelledby="h-exp">
          <div className="sec-head">
            <h2 id="h-exp">Experience</h2>
            <p className="micro">A1–A{experience.length} · 2017–now</p>
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
            <p className="micro">By depth of use · where used</p>
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
                    <li key={s.name}>
                      {s.name} <span className="refs">{formatRefs(s.refs)}</span>
                    </li>
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
                <h3>
                  {e.english}
                  <small>{e.degree}</small>
                </h3>
                <p>
                  {e.school}
                  <br />
                  Graduated {e.year}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid edu langs" aria-labelledby="h-lang">
          <div className="sec-head">
            <h2 id="h-lang">Languages</h2>
            <p className="micro">CEFR levels</p>
          </div>
          <div className="sec-body">
            {languages.map((l) => (
              <div key={l.name} className="edu-row">
                <h3>
                  {l.name} <span className="lvl">{l.level}</span>
                </h3>
                {l.note && <p>{l.note}</p>}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
