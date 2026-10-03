import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, school } from '../../data/content'
import Button from '../ui/Button'

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold text-brand">
          {school.name}
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted transition hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex size-11 items-center justify-center rounded-full border border-line text-fg transition hover:border-accent"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button href="#admissions" className="hidden md:inline-flex">
            Apply for 2026-27
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex size-11 items-center justify-center rounded-full border border-line md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line px-5 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className="block py-3 text-base font-medium">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pb-4 pt-2">
              <Button href="#admissions" onClick={closeMenu} className="w-full">
                Apply for 2026-27
              </Button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
