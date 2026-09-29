# Aditya Jain — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS. No other runtime dependencies.

## Structure
- `app/` layout, metadata, page
- `components/` Navbar, Hero, About, Education, Skills, Projects, ProjectCard, Achievements, Contact, Footer
- `data/site.ts` **all content** (profile, skills, projects, achievements, nav)
- `styles/globals.css` theme tokens (dark default, light toggle)
- `public/` static files

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start   # production check
```

## Editing
- Text, projects, links: `data/site.ts`
- Live demo link: set `liveUrl` on a project and "View Project" appears.
- Resume: put `resume.pdf` in `public/`, then set `resumeUrl: "/resume.pdf"` in `data/site.ts`.
- Project screenshots: put images in `public/projects/` (the cards are text-first; add an image field and an `<Image>` to `ProjectCard.tsx` when you have them).
- Colors: CSS variables in `styles/globals.css`.
- Experience later: see the note at the bottom of `data/site.ts`.

## Deploy to Vercel
1. Push to GitHub.
2. On vercel.com choose **Add New → Project**, import the repo.
3. Keep the detected Next.js defaults and click **Deploy**.
