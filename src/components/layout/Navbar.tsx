// ==============================
// NAVBAR COMPONENT (PROFESSIONAL VERSION)
// Uses centralized colour system for consistency
// ==============================

// Import React and required hooks
import React, { useState, useEffect } from "react"

// Import animation tools from framer-motion
import { motion, AnimatePresence } from "framer-motion"

// Import icons for the mobile menu
import { Menu, X } from "lucide-react"

// Import custom hook for active section detection
import { useActiveSection } from "../../hooks/useActiveSection"

// Import navigation link type
import type { NavLink } from "../../types"

// Import your centralized colour system
import { colours } from "../../styles/tokens"

// ==============================
// NAVIGATION LINKS CONFIG
// ==============================
const navLinks: NavLink[] = [
  { label: "Home", href: "hero" },
  { label: "Services", href: "services" },
  { label: "Solutions", href: "solutions" },
  { label: "Training", href: "training" },
  { label: "About", href: "why-metroblue" },
  { label: "Contact", href: "contact" },
]

// ==============================
// NAVBAR COMPONENT
// ==============================
export const Navbar: React.FC = () => {

  // Track scroll state (used for styling navbar on scroll)
  const [scrolled, setScrolled] = useState(false)

  // Mobile menu open/close state
  const [mobileOpen, setMobileOpen] = useState(false)

  // Get currently active section
  const activeSection = useActiveSection(navLinks.map((l) => l.href))

  // ==============================
  // HANDLE SCROLL EFFECT
  // ==============================
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ==============================
  // SMOOTH SCROLL FUNCTION
  // ==============================
  const scrollTo = (href: string) => {
    const element = document.getElementById(href)

    if (element) {
      const navbarHeight = 80

      const elementPosition = element.offsetTop - navbarHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }

    // Close mobile menu after navigation
    setMobileOpen(false)
  }

  return (

    // ==============================
    // HEADER CONTAINER
    // ==============================
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? colours.primary : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 8px 20px rgba(0,0,0,0.2)" : "none",
      }}
    >

      {/* MAIN NAVIGATION */}
      <nav className="container-xl flex items-center justify-between h-20">

        {/* LOGO SECTION */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5"
        >
          <img
            src="/image/logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </button>

        {/* ============================== */}
        {/* DESKTOP NAVIGATION */}
        {/* ============================== */}
        <ul className="hidden lg:flex items-center gap-1">

          {navLinks.map((link) => (
            <li key={link.href}>

              <button
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                style={{
                  color:
                    activeSection === link.href
                      ? colours.secondary
                      : colours.light,
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href) {
                    e.currentTarget.style.color = colours.white
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href) {
                    e.currentTarget.style.color = colours.light
                  }
                }}
              >
                {link.label}

                {/* Active underline animation */}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ backgroundColor: colours.secondary }}
                  />
                )}

              </button>

            </li>
          ))}

        </ul>

        {/* ============================== */}
        {/* DESKTOP CTA BUTTON */}
        {/* ============================== */}
        <div className="hidden lg:block">

          <button
            onClick={() => scrollTo("contact")}
            className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
            style={{
              backgroundColor: colours.secondary,
              color: colours.white,
              boxShadow: `0 4px 12px ${colours.secondary}66`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colours.primary
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colours.secondary
            }}
          >
            Get a Free Quote
          </button>

        </div>

        {/* ============================== */}
        {/* MOBILE MENU BUTTON */}
        {/* ============================== */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors"
          style={{ color: colours.white }}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* ============================== */}
      {/* MOBILE MENU */}
      {/* ============================== */}
      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t"
            style={{
              backgroundColor: colours.primary,
              borderColor: colours.border,
            }}
          >

            <ul className="container-xl py-4 flex flex-col gap-1">

              {navLinks.map((link) => (

                <li key={link.href}>

                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                    style={{
                      color:
                        activeSection === link.href
                          ? colours.secondary
                          : colours.light,
                      backgroundColor:
                        activeSection === link.href
                          ? `${colours.white}0D`
                          : "transparent",
                    }}
                  >
                    {link.label}
                  </button>

                </li>

              ))}

              {/* MOBILE CTA */}
              <li className="mt-2">

                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                  style={{
                    backgroundColor: colours.secondary,
                    color: colours.white,
                  }}
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
