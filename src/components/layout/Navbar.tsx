import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { useActiveSection } from '../../hooks/useActiveSection'
import type { NavLink } from '../../types'

const navLinks: NavLink[] = [
  { label: 'Home',      href: 'hero'          },
  { label: 'Services',  href: 'services'      },
  { label: 'Solutions', href: 'solutions'     },
  { label: 'Training',  href: 'training'      },
  { label: 'About',     href: 'why-metroblue' },
  { label: 'Contact',   href: 'contact'       },
]

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(navLinks.map((l) => l.href))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/96 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-xl flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5"
          aria-label="Go to top"
        >
          <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shadow-md shadow-secondary/40">
            <Zap size={18} className="text-white" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            MetroBlue<span className="text-secondary">Landing Page</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === link.href
                    ? 'text-secondary'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo('contact')}
            className="bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#0d87be] transition-colors duration-200 shadow-md shadow-secondary/30"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen((p) => !p)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-primary/98 backdrop-blur-md border-t border-white/10"
          >
            <ul className="container-xl py-4 flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === link.href
                        ? 'text-secondary bg-white/5'
                        : 'text-white/75 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full bg-secondary text-white text-sm font-semibold px-4 py-3 rounded-xl hover:bg-[#0d87be] transition-colors"
                >
                  Get a Free Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
