# Zyra Website – Apple-Style Hero

This project is a Next.js + Tailwind CSS setup that includes a premium, Apple-style cinematic hero section for the Zyra website. The hero uses GSAP + ScrollTrigger to drive a scroll-linked canvas image sequence that showcases Zyra's transformation process from blueprint to finished commercial interior.

## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- GSAP + ScrollTrigger

## Hero Components

- `components/hero/ZyraHero.tsx` – Main section wrapper with two-column layout.
- `components/hero/HeroCopy.tsx` – Zyra copy (headline, supporting text, CTA).
- `components/hero/HeroCanvasSequence.tsx` – Canvas-based GSAP ScrollTrigger image sequence.

Image sequence frames should live under:

- `public/hero-sequence/frame-0001.webp`
- `public/hero-sequence/frame-0002.webp`
- ...

See `lib/heroFrames.ts` for how paths are constructed.

