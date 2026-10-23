# Sreeram Vasisht — Developer Portfolio

A responsive React + Vite portfolio with an interactive Three.js avatar, GSAP scroll reveals, Framer Motion hover interactions, custom project artwork, About, Skills, Experience, and Contact sections.

## Requirements
- Node.js 18+ (Node 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production output is created in `dist/`.

## Personalize before publishing
1. In `src/App.jsx`, update the contact email (`sreeram.vasisht@gmail.com`) if needed.
2. Replace the GitHub and LinkedIn profile URLs with your actual profiles.
3. Add your resume PDF under `public/` and link it from the hero or About section if desired.
4. Replace the stylized project illustrations in `ProjectArt` with screenshots or case-study images when ready.
5. Verify dates, project metrics, and internship details before publishing.

## Notes
- The 3D avatar is a procedural illustrative character built from Three.js geometry. It is not a photorealistic scan or a likeness model.
- Google Fonts are loaded from Google Fonts; a system sans-serif fallback is provided.
- Project cards currently link to the contact section until individual live demos or case studies are supplied.
