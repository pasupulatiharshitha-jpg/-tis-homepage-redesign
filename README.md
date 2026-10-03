# Tula's International School (TIS) - Homepage Redesign

A modern, animated, mobile-first redesign of the Tula's International School homepage. The school's name, colours (orange and green) and copy are kept. Content comes from tis.edu.in.

## Live Demo
- **Live URL:** [Add Vercel link here]
- **Repository:** [Add GitHub repo link here]

## Tech Stack
- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS v4 (colours are CSS variables, so the theme switch is one class)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Standout Features
1. **Custom cursor:** a ring follows the mouse (smoothed with `useSpring`) and grows over links and buttons. Hidden on touch screens.
2. **Scroll-triggered reveals:** a reusable `Reveal` component using `whileInView`, with staggered delays in lists. Plays once.
3. **Dark/light theme switcher:** the `useTheme` hook saves the choice in `localStorage` and falls back to the system setting.
4. **Scroll progress bar:** `useScroll` + `useSpring` drive a bar fixed to the top of the page.

Motion respects `prefers-reduced-motion` through `MotionConfig`.

## Getting Started Locally
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the dev server
   ```bash
   npm run dev
   ```
4. Open the local address shown in the terminal (usually http://localhost:5173).

Production build: `npm run build`, then `npm run preview`.

## Component Architecture
- `src/components/ui/` - small reusable pieces (`Button`, `Section`)
- `src/components/sections/` - page sections (Navbar, Hero, About, Recognition, Academics, Admissions, Footer)
- `src/components/animation/` - animation helpers (`Reveal`, `ScrollProgress`, `Cursor`)
- `src/hooks/useTheme.js` - theme state and persistence
- `src/data/content.js` - all page text in one place

## Brand Identity Retained
Orange and green palette, the "Modern Gurukul" idea, and copy and facts from tis.edu.in.
