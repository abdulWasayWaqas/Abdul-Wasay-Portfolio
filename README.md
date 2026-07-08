# Abdul Wasay Waqas — Portfolio

Personal portfolio of **Abdul Wasay Waqas**, Full-Stack AI Engineer — real-time voice & LLM pipelines, Python/FastAPI backends, and React/Next.js frontends.

An animated, single-page site with a 3D interactive hero, smooth scrolling, and a project gallery.

## Tech stack

- **Framework:** Next.js 14 (App Router), TypeScript
- **Styling:** Tailwind CSS
- **3D:** Three.js via React Three Fiber + drei
- **Motion:** Framer Motion, Lenis (smooth scroll)
- **UI patterns:** Aceternity UI, React Bits, Skiper UI components
- **Icons:** react-icons (Simple Icons)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Structure

```
app/                 # Next.js App Router (layout, page, globals)
components/
  sections/          # Hero, About, Skills, Experience, Projects, Contact
  three/             # React Three Fiber scene
  ui/                # animation components (aceternity / reactbits / skiper)
lib/data.ts          # single source of truth for all content
public/              # images, résumé, project screenshots
```

## License

© 2026 Abdul Wasay Waqas. All rights reserved.
