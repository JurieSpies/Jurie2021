# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Jurie Spies, a South African software developer, for a role. They scan quickly to judge fit, then either request the CV or get in touch.

## Product Purpose

Online CV and portfolio for Jurie Spies. It presents work experience, projects, skills, education, and recommendations, and lets a visitor download the resume PDF. Success means a recruiter understands the experience in under a minute and takes the next step (download the CV or contact).

## Positioning

Proof over claims. The site shows real employers (Capitec, Takealot), real shipped projects with screenshots, live GitHub-backed repositories, and named LinkedIn recommendations. A generic CV lists these; this site presents them as evidence.

## Operating Context

- Visitors arrive on desktop and mobile, typically from a link shared by the candidate or found on LinkedIn or search.
- Desktop shows a header navigation; mobile uses a burger menu. Both paths must work.
- A chatbot answers questions about the CV, driven by the resume data file (`src/utils/RESUME_DATA.json`).
- Repositories are pulled from GitHub at runtime.

## Capabilities and Constraints

- Sections: About Me, Experience, Skills, Education, Projects (Work), Recommendations, Resume download.
- Stack in use: React 18, Vite, styled-components, Tailwind, react-icons, react-countup, react-typed, TanStack Query, axios. Build with `npm run build`.
- Data sources: resume JSON, GitHub repos (via token in `.env`), Gemini API for the chatbot (via `.env`). Secrets stay in `.env`; never commit them.
- Terminology: "Work" is the experience/projects section name in code; keep it.

## Brand Commitments

- Name: Jurie Spies. Title: Software Developer.
- Content is factual. Do not invent testimonials, employers, metrics, awards, or client names.
- The chatbot and GitHub integration are kept and their data sources are preserved.
- The resume PDF (`src/assets/JurieSpiesResume.pdf`) stays downloadable and remains the source of truth for the CV.

## Evidence on Hand

- Employers: Capitec, Takealot (logos in `src/assets/images/Capitec.png` and `src/assets/svg/Takealot.svg`).
- Projects with screenshots in `src/assets/projects/`: AnyWorx, Bean & Berry, Bill Scanner, ETTX, GoWaterfall, Password Generator, Pickle, Proof, ApexFit, PiggyVault, WodBud.
- Recommendations: seven LinkedIn recommendation images in `src/assets/linkedInRecommendations/`.
- Profile photo: `src/assets/images/JuriePPbw3.png`.
- Skill icons: `src/assets/skillIcons/`.
- Absent: case studies, customer metrics, and press. Do not fabricate them.

## Product Principles

- Evidence before adjectives: every claim is backed by an employer, project, or recommendation.
- Scan speed first: a recruiter gets the key facts without reading everything.
- Mobile and desktop are equal citizens, not a squeezed version.
- Facts are fixed; presentation can change.
