# Personal Portfolio — Artūras Semenčiuk

A personal portfolio website built with React and Vite, featuring a WebGL animated background, scroll-triggered fade-in animations, and full English/Lithuanian language support.

**Live site:** [arturas-sem.vercel.app](https://arturas-sem.vercel.app)

---

## Sections

- **Hero** — Animated greeting with interactive WebGL light pillar background
- **About** — Bio, profile photo, and links to email, GitHub, and LinkedIn
- **Experience** — LAN Party event manager role at MIDI (2025–2026)
- **Skills** — Programming languages, frameworks, tools, and networking knowledge
- **Education** — Completed university courses at VU MIF

---

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 18, Vite |
| Styling | Inline styles, CSS variables, custom fonts (Syncopate, Inter) |
| Background | Custom WebGL light pillar (`LightPillar` component) |
| Animations | IntersectionObserver fade-in, CSS transitions |
| Icons | Lucide React, custom SVG (GitHub, LinkedIn) |
| Deployment | Vercel |
| Language | JavaScript (JSX) |

---

## Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Navigation.jsx
│   ├── Skills.jsx
│   └── Toast.jsx
├── assets/
│   ├── PFP/
│   ├── git.svg
│   └── linkedin.svg
├── bitsBackground/     # WebGL light pillar
├── bitsText/           # Animated text pressure effect
├── App.jsx
└── App.css
```

---

## Running Locally

```bash
git clone https://github.com/arce0827/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## Features

- **Bilingual** — full EN/LT translation support throughout all sections
- **Scroll animations** — sections fade in as they enter the viewport using IntersectionObserver
- **Interactive background** — WebGL light pillar reacts to mouse movement
- **Responsive navigation** — fixed pill navbar with smooth scroll to each section
- **Clipboard toast** — click the mail icon to copy email address, confirmed by a toast notification

---

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic redeploy.
