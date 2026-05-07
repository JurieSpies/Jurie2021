import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import RESUME_DATA from '@/utils/RESUME_DATA.json';
import profileImage from '@/assets/images/JuriePPbw3.png';

// ─── helpers ────────────────────────────────────────────────────────────────

const splitTimeline = (timeline) => {
  const [startRaw, endRaw] = String(timeline || '').split(' - ');
  return { start: (startRaw || '').trim(), end: (endRaw || '').trim() };
};

const unique = (items) => Array.from(new Set((items || []).filter(Boolean)));

const guessCompanyName = (workItem, index) => {
  if (workItem?.title) return workItem.title;
  const d = String(workItem?.description || '').toLowerCase();
  if (d.includes('capitec')) return 'Capitec';
  if (d.includes('online retailer') || d.includes('e-commerce')) return 'Takealot';
  return `Company${index + 1}`;
};

const summarizeText = (text, maxChars = 260) => {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (!clean) return '';
  if (clean.length <= maxChars) return clean;
  const truncated = clean.slice(0, maxChars);
  const lastStop = Math.max(truncated.lastIndexOf('. '), truncated.lastIndexOf('! '), truncated.lastIndexOf('? '));
  return (lastStop > 120 ? truncated.slice(0, lastStop + 1) : `${truncated.trim()}…`).trim();
};

const wrapText = (text, maxCharsPerLine = 56) => {
  const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
  if (!words.length) return [];

  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxCharsPerLine) {
      current = next;
      continue;
    }
    if (current) lines.push(current);
    current = word;
  }
  if (current) lines.push(current);
  return lines;
};

const parseTimelineStartDate = (timeline) => {
  const startRaw = String(timeline || '').split(' - ')[0]?.trim() || '';

  const yearMatch = startRaw.match(/\b(19|20)\d{2}\b/);
  const year = yearMatch ? Number(yearMatch[0]) : null;

  const monthMap = {
    jan: 0, january: 0,
    feb: 1, february: 1,
    mar: 2, march: 2,
    apr: 3, april: 3,
    may: 4,
    jun: 5, june: 5,
    jul: 6, july: 6,
    aug: 7, august: 7,
    sep: 8, sept: 8, september: 8,
    oct: 9, october: 9,
    nov: 10, november: 10,
    dec: 11, december: 11,
  };

  const monthMatch = startRaw.toLowerCase().match(/\b([a-z]{3,9})\b/);
  const month = monthMatch ? monthMap[monthMatch[1]] : null;

  if (!year) return null;
  return new Date(year, month ?? 0, 1);
};

const computeYearsOfExperience = (work = []) => {
  const starts = (work || [])
    .map((w) => parseTimelineStartDate(w?.timeline))
    .filter(Boolean)
    .sort((a, b) => a - b);

  if (!starts.length) return 1;

  const start = starts[0];
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = months / 12;

  return Math.max(1, Math.floor(years));
};

const toAbsoluteUrl = (rawUrl) => {
  const url = String(rawUrl || '').trim();
  if (!url) return '';
  if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
  return `https://${url}`;
};

// ─── syntax-highlight tokens ─────────────────────────────────────────────────

const KW  = ({ c = '#569cd6', children }) => <span style={{ color: c }}>{children}</span>;
const STR = ({ children }) => <span style={{ color: '#ce9178' }}>{children}</span>;
const CMT = ({ children }) => <span style={{ color: '#6a9955', fontStyle: 'italic' }}>{children}</span>;
const TYP = ({ children }) => <span style={{ color: '#4ec9b0' }}>{children}</span>;
const NUM = ({ children }) => <span style={{ color: '#b5cea8' }}>{children}</span>;
const VAR = ({ children }) => <span style={{ color: '#9cdcfe' }}>{children}</span>;
const PUN = ({ children }) => <span style={{ color: '#d4d4d4' }}>{children}</span>;
const FN  = ({ children }) => <span style={{ color: '#dcdcaa' }}>{children}</span>;

const CodeLink = ({ href, children }) => {
  const safeHref = toAbsoluteUrl(href);
  const isExternal = /^https?:\/\//i.test(safeHref);
  if (!safeHref) return <STR>{children}</STR>;

  return (
    <a
      href={safeHref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ color: '#ce9178', textDecoration: 'none' }}
    >
      {children}
    </a>
  );
};

// ─── editor primitives ───────────────────────────────────────────────────────

let _lineCounter = 0;
const resetLines = () => { _lineCounter = 0; };

const Line = ({ n, children, indent = 0 }) => {
  const num = n ?? ++_lineCounter;
  return (
    <div style={{ display: 'flex', minHeight: '1.4em', lineHeight: '1.4em' }}>
      <span style={{
        minWidth: 38, textAlign: 'right', paddingRight: 16,
        color: '#858585', userSelect: 'none', flexShrink: 0, fontSize: '0.78rem',
      }}>{num}</span>
      <span style={{ paddingLeft: indent * 16 }}>{children}</span>
    </div>
  );
};

const Blank = () => <Line>{' '}</Line>;

// ─── reusable code-block sections ────────────────────────────────────────────

const ArrayConstSection = ({ name, items }) => (
  <>
    <Line>
      <KW>export</KW> <KW>const</KW> <VAR>{name}</VAR> <PUN>=</PUN> <PUN>[</PUN>
    </Line>
    {items.map((item, i) => (
      <Line key={i} indent={1}>
        {item && typeof item === 'object' && item.href ? (
          <>
            <CodeLink href={item.href}>"{item.text}"</CodeLink>
            {i < items.length - 1 ? <PUN>,</PUN> : ''}
          </>
        ) : (
          <>
            <STR>"{item}"</STR>
            {i < items.length - 1 ? <PUN>,</PUN> : ''}
          </>
        )}
      </Line>
    ))}
    <Line><PUN>]</PUN> <KW>as</KW> <KW>const</KW><PUN>;</PUN></Line>
    <Blank />
  </>
);

const RecordConstSection = ({ name, items }) => (
  <>
    <Line>
      <KW>export</KW> <KW>const</KW> <VAR>{name}</VAR> <PUN>=</PUN> <PUN>{'{'}</PUN>
    </Line>
    {items.map((item, i) => (
      <Line key={i} indent={1}>
        <STR>"{item.label}"</STR><PUN>:</PUN> <STR>"{item.level}"</STR>{i < items.length - 1 ? <PUN>,</PUN> : ''}
      </Line>
    ))}
    <Line><PUN>{'}'}</PUN> <KW>as</KW> <KW>const</KW><PUN>;</PUN></Line>
    <Blank />
  </>
);

// ─── main component ───────────────────────────────────────────────────────────

const CyberTechCv = ({ open = false, onClose }) => {
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  const cv = useMemo(() => ({
    name: 'Jurie Spies',
    title: RESUME_DATA.work?.[0]?.occupation || 'Software Engineer',
    location: 'South Africa',
    photoUrl: profileImage,
    yearsOfExperience: computeYearsOfExperience(RESUME_DATA.work),
    contact: {
      phone: RESUME_DATA.phoneNumber,
      email: RESUME_DATA.email,
      website: 'www.juriespies.co.za',
      city: 'South Africa',
    },
    platforms: [
      { label: 'GitHub',    value: (RESUME_DATA.github    || '').replace(/^https?:\/\//, ''), href: toAbsoluteUrl(RESUME_DATA.github) },
      { label: 'LinkedIn',  value: (RESUME_DATA.linkedIn  || '').replace(/^https?:\/\//, ''), href: toAbsoluteUrl(RESUME_DATA.linkedIn) },
      { label: 'Portfolio', value: 'www.juriespies.co.za', href: 'https://www.juriespies.co.za' },
    ],
    programmingLanguages: unique([...(RESUME_DATA.skills || []).map((s) => s?.language), 'Python']),
    tools: unique([
      ...(RESUME_DATA.frameworkSkills || []).map((f) => f?.frameworkTitle),
      'TypeScript', 'JavaScript', 'GraphQL', 'REST APIs', 'Node.js',
      'Express.js', 'Firebase', 'Docker', 'Git', 'Figma', 'VS Code', 'Tailwind CSS',
    ]),
    spokenLanguages: [
      { label: 'English',   level: 'Fluent' },
      { label: 'Afrikaans', level: 'Fluent' },
    ],
    education: [
      {
        title: 'Self-Directed Learning',
        school: 'Udemy & Pluralsight',
        start: 'Ongoing', end: 'Present',
        highlights: ['React, React Native, Node.js, and modern front-end practices.'],
      },
      {
        title: 'Instrumentation Red Seal',
        school: 'Majuba FET College',
        start: 'Jan 2008', end: 'Dec 2011',
        highlights: ['Trade qualification with strong technical foundation.'],
      },
      {
        title: 'Matriculated',
        school: 'HTS Witbank',
        start: '2013', end: '2013',
        highlights: ['Completed high school education.'],
      },
    ],
    experience: (RESUME_DATA.work || []).map((workItem, index) => {
      const company = guessCompanyName(workItem, index);
      const { start, end } = splitTimeline(workItem.timeline);

      const presets = {
        Capitec: {
          bullets: [
            'Built front-end experiences for a high-traffic banking application.',
            'Developed the Devices section for phone purchases & in-app return scheduling.',
          ],
          tech: ['React', 'TypeScript', 'REST APIs'],
        },
        Takealot: {
          bullets: ["Software Engineer at South Africa's largest e-commerce platform."],
          tech: ['React', 'TypeScript'],
        },
        'Open Vantage': {
          bullets: [
            'Built web & mobile apps using React and React Native.',
            'Integrated third-party APIs and payment gateways.',
            'Managed Play Store and App Store deployments.',
          ],
          tech: ['React', 'React Native', 'Node.js', 'GraphQL'],
        },
        'Verge Technologies': {
          bullets: [
            'Started as Junior Developer building React Native mobile apps.',
            'Progressed to delivering larger features and shipping two complete apps.',
          ],
          tech: ['React Native', 'JavaScript'],
        },
      };

      const preset = presets[company] || {
        bullets: [summarizeText(workItem.description, 220)].filter(Boolean),
        tech: unique((RESUME_DATA.frameworkSkills || []).map((f) => f?.frameworkTitle)).slice(0, 4),
      };

      return { role: workItem.occupation, company, location: 'South Africa', start, end, ...preset };
    }),
    projects: [
      { name: 'WODbud',     description: 'Fitness app with workout generation, timers, and Hero WODs.',    stack: ['React Native', 'JavaScript'], link: 'wodbud.netlify.app' },
      { name: 'ApexFit',    description: 'Gym management: memberships, payments, and class bookings.',      stack: ['React', 'TypeScript', 'Firebase'], link: 'apexfit-crossfit.netlify.app' },
      { name: 'GoWaterfall',description: 'Mobile platform enhancing city engagement with navigation.',       stack: ['React', 'TypeScript', 'Firebase'], link: 'www.gowaterfall.co.za' },
      { name: 'DreamCode',  description: 'Personal dev studio / portfolio of experiments and builds.',      stack: ['React', 'Vite'], link: (RESUME_DATA.dreamCode || '').replace(/^https?:\/\//, '') },
    ],
  }), []);

  // Reset line counter before each render
  resetLines();

  const editorFont = "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace";

  if (!open) return null;

  return createPortal(
    <div
      className="cybercv-print cybercv-modal"
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        padding: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="cybercv-backdrop"
        onMouseDown={() => onClose?.()}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.72)' }}
      />
      <div
        className="cybercv-shell"
        onMouseDown={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: 'min(1240px, 96vw)', maxHeight: '92vh', borderRadius: 10, overflow: 'hidden', border: '1px solid #2a2a2a', boxShadow: '0 18px 70px rgba(0,0,0,0.55)', zIndex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <div className="cybercv-print-bg" />

        <div style={{ height: '100%', background: '#1e1e1e', color: '#d4d4d4', fontFamily: editorFont, fontSize: '0.82rem', display: 'flex', flexDirection: 'column', minHeight: 0, flex: 1 }}>
          <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap');
        @page { size: A4; margin: 6mm; }
        @media print {
          html, body {
            background: #1e1e1e !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body > :not(.cybercv-print) { display: none !important; }
          .cybercv-modal { position: static !important; inset: auto !important; padding: 0 !important; display: block !important; }
          .cybercv-backdrop { display: none !important; }
          .cybercv-shell {
            position: static !important;
            width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          .cybercv-content { overflow: visible !important; max-height: none !important; }
          .cybercv-print-bg {
            display: block !important;
            position: fixed !important;
            inset: 0 !important;
            background: #1e1e1e !important;
            z-index: -1 !important;
          }
          .no-print { display: none !important; }
        }
        .cybercv-print-bg { display: none; }
        a { color: inherit; text-decoration: none; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 10px; background: #252526; }
        ::-webkit-scrollbar-thumb { background: #424242; }
      `}</style>

          <div className="no-print" style={{ background: '#323233', borderBottom: '1px solid #1b1b1b', display: 'flex', alignItems: 'center', padding: '0 16px', height: 35, gap: 8, userSelect: 'none' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                aria-label="Close"
                className="no-print"
                onClick={() => onClose?.()}
                style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', border: 'none', padding: 0, cursor: 'pointer' }}
              />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <span style={{ background: '#1e1e1e', padding: '2px 20px', fontSize: '0.78rem', color: '#cccccc', borderRadius: 4 }}>
                JurieSpies.cv.tsx — React/TypeScript
              </span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                onClick={() => window.print()}
                style={{ background: '#0e639c', color: '#fff', border: 'none', borderRadius: 4, padding: '3px 12px', fontSize: '0.78rem', cursor: 'pointer' }}
              >
                ⬇ Export PDF
              </button>
            </div>
          </div>

          <div className="no-print" style={{ background: '#2d2d2d', borderBottom: '1px solid #1b1b1b', display: 'flex', padding: '0 0', fontSize: '0.78rem' }}>
            <div style={{ background: '#1e1e1e', borderTop: '1px solid #0e639c', padding: '6px 20px', color: '#d4d4d4', borderRight: '1px solid #1b1b1b' }}>
              📄 JurieSpies.cv.tsx
            </div>
          </div>

          <div className="cybercv-content" style={{ width: '100%', flex: 1, minHeight: 0, overflowY: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', maxWidth: 1200, margin: '0 auto', width: '100%' }}>

              <div style={{ background: '#1e1e1e', borderRight: '1px solid #333', padding: '12px 0' }}>
                <Line>
                  <CMT>{'// <img />'}</CMT>
                </Line>
                <Line>
                  <span style={{ paddingLeft: 0 }}>
                    <img
                      src={cv.photoUrl}
                      alt="Jurie Spies"
                      style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 4, marginLeft: 8, marginTop: 4, marginBottom: 10, border: '1px solid #555', display: 'block' }}
                    />
                  </span>
                </Line>
                <Blank />

                {(() => {
                  const paragraphs = [
                    `I’ve been building websites and mobile apps for over ${cv.yearsOfExperience}+ years.`,
                    "Most of my work is with React and React Native. I enjoy the tricky part of taking a design and turning it into something that feels good to use, especially when the UX needs a bit of extra thought. When I’m not fixing bugs or chasing performance, I’m usually trying out a new tool or looking for a cleaner way to ship a feature.",
                  ];

                  return (
                    <>
                      <Line>
                        <KW>export</KW> <KW>const</KW> <VAR>about</VAR> <PUN>=</PUN> <PUN>[</PUN>
                      </Line>
                      {paragraphs.map((p, pi) => {
                        const lines = wrapText(p, 62);
                        return (
                          <div key={pi}>
                            {lines.map((line, li) => (
                              <Line key={li} indent={1}>
                                <STR>"{line}"</STR>
                                {li === lines.length - 1 ? (pi < paragraphs.length - 1 ? <PUN>,</PUN> : '') : ''}
                              </Line>
                            ))}
                          </div>
                        );
                      })}
                      <Line><PUN>]</PUN> <KW>as</KW> <KW>const</KW><PUN>;</PUN></Line>
                      <Blank />
                    </>
                  );
                })()}

                <Line>
                  <KW>export</KW> <KW>const</KW> <VAR>profile</VAR> <PUN>=</PUN> <PUN>{'{'}</PUN>
                </Line>
                <Line indent={1}><VAR>name</VAR><PUN>:</PUN> <STR>"{cv.name}"</STR><PUN>,</PUN></Line>
                <Line indent={1}><VAR>title</VAR><PUN>:</PUN> <STR>"{cv.title}"</STR><PUN>,</PUN></Line>
                <Line indent={1}><VAR>yearsOfExperience</VAR><PUN>:</PUN> <NUM>{cv.yearsOfExperience}</NUM><PUN>,</PUN></Line>
                <Line indent={1}>
                  <VAR>email</VAR><PUN>:</PUN> <CodeLink href={`mailto:${cv.contact.email}`}>"{cv.contact.email}"</CodeLink><PUN>,</PUN>
                </Line>
                <Line indent={1}>
                  <VAR>phone</VAR><PUN>:</PUN> <CodeLink href={`tel:${String(cv.contact.phone).replace(/\s+/g, '')}`}>"{cv.contact.phone}"</CodeLink><PUN>,</PUN>
                </Line>
                <Line indent={1}><VAR>location</VAR><PUN>:</PUN> <STR>"{cv.contact.city}"</STR><PUN>,</PUN></Line>
                <Line indent={1}>
                  <VAR>website</VAR><PUN>:</PUN> <CodeLink href={cv.contact.website}>"{cv.contact.website}"</CodeLink>
                </Line>
                <Line><PUN>{'}'}</PUN> <KW>as</KW> <KW>const</KW><PUN>;</PUN></Line>
                <Blank />

                <ArrayConstSection name="platforms" items={cv.platforms.map((p) => ({ text: `${p.label} — ${p.value}`, href: p.href }))} />

                <ArrayConstSection name="languages" items={cv.programmingLanguages} />

                <ArrayConstSection name="tools" items={cv.tools.slice(0, 10)} />

                {cv.tools.length > 10 && <ArrayConstSection name="tools2" items={cv.tools.slice(10)} />}

                <RecordConstSection name="spokenLanguages" items={cv.spokenLanguages} />

                <ArrayConstSection name="traits" items={['Curious', 'Punctual', 'Passionate']} />
              </div>

              <div style={{ background: '#1e1e1e', padding: '12px 0' }}>

                <Line>
                  <KW>export</KW> <KW>type</KW> <TYP>Education</TYP> <PUN>=</PUN> <PUN>{'{'}</PUN>
                </Line>
                <Line indent={1}><VAR>school</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line indent={1}><VAR>program</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line indent={1}><VAR>dates</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line indent={1}><VAR>highlights</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>[];</PUN></Line>
                <Line><PUN>{'}'}</PUN><PUN>;</PUN></Line>
                <Blank />

                <Line>
                  <KW>export</KW> <KW>const</KW> <VAR>education</VAR> <PUN>:</PUN> <TYP>Education</TYP><PUN>[]</PUN> <PUN>=</PUN> <PUN>[</PUN>
                </Line>
                {cv.education.map((edu, i) => (
                  <div key={i}>
                    <Line indent={1}><PUN>{'{'}</PUN></Line>
                    <Line indent={2}><VAR>school</VAR><PUN>:</PUN> <STR>"{edu.school}"</STR><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>program</VAR><PUN>:</PUN> <STR>"{edu.title}"</STR><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>dates</VAR><PUN>:</PUN> <STR>"{edu.start} → {edu.end}"</STR><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>highlights</VAR><PUN>:</PUN> <PUN>[</PUN></Line>
                    {edu.highlights.map((h, j) => (
                      <Line key={j} indent={3}><STR>"{h}"</STR>{j < edu.highlights.length - 1 ? <PUN>,</PUN> : ''}</Line>
                    ))}
                    <Line indent={2}><PUN>]</PUN></Line>
                    <Line indent={1}><PUN>{'}'}</PUN>{i < cv.education.length - 1 ? <PUN>,</PUN> : ''}</Line>
                  </div>
                ))}
                <Line><PUN>]</PUN> <KW>as</KW> <KW>const</KW><PUN>;</PUN></Line>
                <Blank />

                <Line>
                  <KW>export</KW> <KW>type</KW> <TYP>WorkItem</TYP> <PUN>=</PUN> <PUN>{'{'}</PUN>
                </Line>
                <Line indent={1}><VAR>company</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line indent={1}><VAR>role</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line indent={1}><VAR>range</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line indent={1}><VAR>tech</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>[];</PUN></Line>
                <Line indent={1}><VAR>bullets</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>[];</PUN></Line>
                <Line><PUN>{'}'}</PUN><PUN>;</PUN></Line>
                <Blank />

                <Line>
                  <KW>export</KW> <KW>const</KW> <VAR>experience</VAR> <PUN>:</PUN> <TYP>WorkItem</TYP><PUN>[]</PUN> <PUN>=</PUN> <PUN>[</PUN>
                </Line>
                {cv.experience.map((exp, i) => (
                  <div key={i}>
                    <Line indent={1}><PUN>{'{'}</PUN></Line>
                    <Line indent={2}><VAR>company</VAR><PUN>:</PUN> <STR>"{exp.company}"</STR><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>role</VAR><PUN>:</PUN> <STR>"{exp.role}"</STR><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>range</VAR><PUN>:</PUN> <STR>"{exp.start} → {exp.end}"</STR><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>tech</VAR><PUN>:</PUN> <PUN>[</PUN></Line>
                    {exp.tech.map((t, j) => (
                      <Line key={j} indent={3}><STR>"{t}"</STR>{j < exp.tech.length - 1 ? <PUN>,</PUN> : ''}</Line>
                    ))}
                    <Line indent={2}><PUN>]</PUN><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>bullets</VAR><PUN>:</PUN> <PUN>[</PUN></Line>
                    {exp.bullets.map((b, j) => (
                      <Line key={j} indent={3}><STR>"{b}"</STR>{j < exp.bullets.length - 1 ? <PUN>,</PUN> : ''}</Line>
                    ))}
                    <Line indent={2}><PUN>]</PUN></Line>
                    <Line indent={1}><PUN>{'}'}</PUN>{i < cv.experience.length - 1 ? <PUN>,</PUN> : ''}</Line>
                  </div>
                ))}
                <Line><PUN>]</PUN> <KW>as</KW> <KW>const</KW><PUN>;</PUN></Line>
                <Blank />

                <Line>
                  <KW>export</KW> <KW>type</KW> <TYP>Project</TYP> <PUN>=</PUN> <PUN>{'{'}</PUN>
                </Line>
                <Line indent={1}><VAR>name</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line indent={1}><VAR>description</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line indent={1}><VAR>stack</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>[];</PUN></Line>
                <Line indent={1}><VAR>url</VAR><PUN>:</PUN> <TYP>string</TYP><PUN>;</PUN></Line>
                <Line><PUN>{'}'}</PUN><PUN>;</PUN></Line>
                <Blank />

                <Line>
                  <KW>export</KW> <KW>const</KW> <VAR>projects</VAR> <PUN>:</PUN> <TYP>Project</TYP><PUN>[]</PUN> <PUN>=</PUN> <PUN>[</PUN>
                </Line>
                {cv.projects.map((proj, i) => (
                  <div key={i}>
                    <Line indent={1}><PUN>{'{'}</PUN></Line>
                    <Line indent={2}><VAR>name</VAR><PUN>:</PUN> <STR>"{proj.name}"</STR><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>description</VAR><PUN>:</PUN> <STR>"{proj.description}"</STR><PUN>,</PUN></Line>
                    <Line indent={2}><VAR>stack</VAR><PUN>:</PUN> <PUN>[</PUN></Line>
                    {proj.stack.map((s, j) => (
                      <Line key={j} indent={3}><STR>"{s}"</STR>{j < proj.stack.length - 1 ? <PUN>,</PUN> : ''}</Line>
                    ))}
                    <Line indent={2}><PUN>]</PUN><PUN>,</PUN></Line>
                    <Line indent={2}>
                      <VAR>url</VAR><PUN>:</PUN> <CodeLink href={proj.link}>"{proj.link}"</CodeLink>
                    </Line>
                    <Line indent={1}><PUN>{'}'}</PUN>{i < cv.projects.length - 1 ? <PUN>,</PUN> : ''}</Line>
                  </div>
                ))}
                <Line><PUN>]</PUN> <KW>as</KW> <KW>const</KW><PUN>;</PUN></Line>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default CyberTechCv;
