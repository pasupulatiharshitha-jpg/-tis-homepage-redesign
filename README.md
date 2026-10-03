# Tula's International School (TIS) - Homepage Redesign

A modern, animated, mobile-first redesign of the Tula's International School homepage. School name, orange and green colours, and content are kept from tis.edu.in.

## Live Demo
- **Live URL:** https://tis-homepage-redesign-puce.vercel.app
- **Repository:** https://github.com/pasupulatiharshitha-jpg/-tis-homepage-redesign

## Tech Stack
- React 19 with Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Deployed on Vercel

## Standout Features
1. **Custom cursor:** a ring follows the mouse and grows over links and buttons. Hidden on touch screens.
2. **Scroll-triggered reveals:** a reusable Reveal component using whileInView.
3. **Dark/light theme switcher:** saved in localStorage.
4. **Scroll progress bar:** built with useScroll and useSpring.

## Getting Started Locally
1. Clone the repository: git clone https://github.com/pasupulatiharshitha-jpg/-tis-homepage-redesign.git
2. Install dependencies: npm install
3. Start the dev server: npm run dev
4. Open http://localhost:5173 in your browser.

Production build: npm run build

## Folder Structure
- src/components/ui - Button, Section
- src/components/sections - Navbar, Hero, About, Recognition, Academics, Admissions, Footer
- src/components/animation - Reveal, ScrollProgress, Cursor
- src/hooks/useTheme.js - theme logic
- src/data/content.js - all page text
