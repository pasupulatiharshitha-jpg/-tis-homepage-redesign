# Review ki ready avvu (Telugu + English)

Technical review lo "ee code ela panichestundi" ani adugutaru. Idi chaduvu.

## Project enti?
React tho oka single page website. Vite project ni run chestundi. Tailwind styling, Framer Motion animations.

## Files ela work avtayi
- `index.html` - page start. Fonts load chestundi. Chinna script saved theme ni mundu pettestundi (flash raakunda).
- `src/main.jsx` - React app ni page lo start chestundi. `MotionConfig` ante: user ki "reduce motion" on unte animations taggistayi.
- `src/App.jsx` - anni components ni order lo petti vuntundi: ScrollProgress, Cursor, Navbar, sections, Footer.
- `src/data/content.js` - website lo text anta ikkade. Components lo text ledhu, ikkadi nunchi vastundi.
- `src/index.css` - colours CSS variables (`--bg`, `--fg`, `--accent`...). `.dark` class vachinappudu values maaru. Anduke dark mode ki separate code kavali.

## 4 features
1. **Scroll reveal** - `components/animation/Reveal.jsx`. `whileInView` ante screen lo ki vachinappudu animate avvu. `once: true` ante okka sari matrame. `delay` tho list items okokati vastayi.
2. **Scroll progress bar** - `ScrollProgress.jsx`. `useScroll()` scroll ni 0 nunchi 1 varaku istundi. `useSpring` daanni smooth chestundi. `scaleX` tho bar width perugutundi.
3. **Theme switcher** - `hooks/useTheme.js`. `useState` lo theme. `useEffect` lo `<html>` ki `dark` class add/remove chesi `localStorage` lo save chestundi.
4. **Custom cursor** - `Cursor.jsx`. Mouse position ni `useMotionValue` lo petti `useSpring` tho smooth chestundi. Link/button meeda unte `overLink = true`, ring pedda avtundi. Touch phones lo CSS `pointer: coarse` tho hide.

## Important React words
- **Component** - chinna reusable piece (Button, Hero).
- **Props** - component ki pampe values (`<Button href="#x">`).
- **useState** - maarey value ni gurthupettukuntundi (menu open/closed, theme).
- **useEffect** - render tarvata pani (event listener add cheyyadam, class marchadam). `return` lo cleanup untundi.
- **Custom hook** - `useTheme` laanti nee own hook, logic ni component nunchi veru chesindi.

## Review lo adige questions
1. Enduku `content.js` veru file? - Text maarchali ante okka chota maarchachu, components clean ga untayi.
2. `Reveal` ni enduku component chesav? - Same animation anni sections lo repeat cheyyakunda.
3. `once: true` enduku? - Scroll up/down chesinappudu malli malli animate ayithe distract avtundi.
4. Dark mode ela panichestundi? - CSS variables + `dark` class on `<html>`.
5. Mobile lo cursor enduku ledu? - Touch ki mouse ledu, CSS `pointer: coarse` tho hide.
6. Performance? - Transform/opacity matrame animate chesam, layout maaradu, so smooth.
7. Accessibility? - Buttons ki `aria-label`, keyboard focus outline, reduced-motion support.

## Nuvvu cheyalsindi (order lo)
1. `npm install` then `npm run build` - error lekunda ravali.
2. `npm run dev` - browser lo choosi anni sections, dark toggle, menu check chey.
3. Browser width 375, 768, 1280 lo test chey.
4. GitHub public repo -> push.
5. Vercel lo deploy -> live link.
6. README lo rendu links add chey.
7. Screen recording (Drive link) -> NxtWave form fill.
