// Import React and required hooks
import React, { useState, useEffect } from 'react'

// Import animation tools from framer-motion
import { motion, AnimatePresence } from 'framer-motion'

// Import icons for the mobile menu
import { Menu, X } from 'lucide-react'

// Import the custom hook that detects which section is active
import { useActiveSection } from '../../hooks/useActiveSection'

// Import the type used for navigation links
import type { NavLink } from '../../types'

// Import the MetroBlue logo image
import logo from '../../assets/logo.jpg'



// List of links that will appear in the navbar
// Each link corresponds to a section ID on the page
const navLinks: NavLink[] = [
  { label: 'Home', href: 'hero' },
  { label: 'Services', href: 'services' },
  { label: 'Solutions', href: 'solutions' },
  { label: 'Training', href: 'training' },
  { label: 'About', href: 'why-metroblue' },
  { label: 'Contact', href: 'contact' },
]



export const Navbar: React.FC = () => {

  // State to check if the page has been scrolled
  const [scrolled, setScrolled] = useState(false)

  // State to control mobile menu opening and closing
  const [mobileOpen, setMobileOpen] = useState(false)

  // This detects which section of the page is currently visible
  const activeSection = useActiveSection(navLinks.map((l) => l.href))



  // This effect runs whenever the user scrolls the page
  useEffect(() => {

    // If the user scrolls more than 80px, change navbar style
    const onScroll = () => setScrolled(window.scrollY > 80)

    // Listen for scroll events
    window.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', onScroll)

  }, [])



  // Function that scrolls smoothly to a section
  const scrollTo = (href: string) => {

    document
      .getElementById(href)
      ?.scrollIntoView({ behavior: 'smooth' })

    // Close mobile menu after clicking a link
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

      {/* Main Navigation Container */}
      <nav
        className="container-xl flex items-center justify-between h-20"
        aria-label="Main navigation"
      >

        {/* ---------------- LOGO SECTION ---------------- */}

        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5"
          aria-label="Go to top"
        >

          {/* MetroBlue Logo Image */}
          <img
            src={logo}
            alt="MetroBlue Logo"
            className="h-10 w-auto object-contain"
          />

          {/* Company Name */}
          <span className="font-display font-bold text-xl text-white tracking-tight">
            MetroBlue
            <span className="text-secondary"> Landing Page</span>
          </span>

        </button>



        {/* ---------------- DESKTOP NAVIGATION LINKS ---------------- */}

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

                {/* Link text */}
                {link.label}

                {/* Animated line under active section */}
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



        {/* ---------------- DESKTOP CTA BUTTON ---------------- */}

        <div className="hidden lg:block">

          <button
            onClick={() => scrollTo('contact')}

            className="bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#0d87be] transition-colors duration-200 shadow-md shadow-secondary/30"
          >
            Get a Free Quote
          </button>

        </div>



        {/* ---------------- MOBILE MENU BUTTON ---------------- */}

        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"

          onClick={() => setMobileOpen((p) => !p)}

          aria-expanded={mobileOpen}

          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >

          {/* Change icon depending on menu state */}
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}

        </button>

      </nav>



      {/* ---------------- MOBILE NAVIGATION MENU ---------------- */}

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



              {/* Mobile CTA Button */}

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