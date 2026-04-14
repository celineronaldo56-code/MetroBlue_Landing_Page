


// ==============================
// STATS SECTION (COLOUR SYSTEM APPLIED)
// Fully documented for clarity and reusability
// ==============================

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, Award, GraduationCap } from 'lucide-react'
import { stats } from '../../data/stats'
import { useCountUp } from '../../hooks/useCountUp'
import { colours } from '../../styles/tokens' // Import design system colours

// Map string names coming from your data to actual icon components
const iconMap: Record<string, React.ElementType> = {
  Briefcase, Users, Award, GraduationCap,
}

// Props definition for a single stat item
interface StatItemProps {
  value: number          // Final number to count up to
  suffix: string         // e.g. +, %, etc.
  label: string          // Description text
  icon: string           // Icon name (mapped above)
  trigger: boolean       // Controls when animation starts
  delay: number          // Stagger animation delay
}

// ==============================
// SINGLE STAT ITEM COMPONENT
// ==============================
const StatItem: React.FC<StatItemProps> = ({ value, suffix, label, icon, trigger, delay }) => {

  // Custom hook to animate numbers (0 → value)
  const count = useCountUp(value, 2000, trigger)

  // Get the correct icon or fallback to Briefcase
  const Icon  = iconMap[icon] ?? Briefcase

  return (
    <motion.div
      // Initial animation state (hidden + moved down)
      initial={{ opacity: 0, y: 30 }}

      // Animate into view
      whileInView={{ opacity: 1, y: 0 }}

      // Run animation only once
      viewport={{ once: true }}

      // Control animation timing
      transition={{ duration: 0.6, delay }}

      // Layout styling
      className="flex flex-col items-center text-center px-6 py-10"
    >

      {/* ICON BOX */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ backgroundColor: colours.secondary }} // Use design system colour
      >
        <Icon size={24} style={{ color: colours.white }} />
      </div>

      {/* COUNT NUMBER */}
      <p
        className="heading-display text-5xl mb-1"
        style={{ color: colours.white }}
      >
        {count}

        {/* SUFFIX (e.g. +) */}
        <span style={{ color: colours.secondary }}>{suffix}</span>
      </p>

      {/* LABEL TEXT */}
      <p
        className="text-sm font-medium mt-1 tracking-wide uppercase"
        style={{ color: `${colours.white}8C` }} // Muted text
      >
        {label}
      </p>

    </motion.div>
  )
}

// ==============================
// MAIN STATS SECTION COMPONENT
// ==============================
export const Stats: React.FC = () => {

  // Reference to section (used for intersection observer)
  const ref = useRef<HTMLDivElement>(null)

  // Controls when counting animation should start
  const [triggered, setTriggered] = useState(false)

  // ==============================
  // INTERSECTION OBSERVER
  // Detects when section enters viewport
  // ==============================
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section is visible → trigger animation
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect() // Stop observing after trigger
        }
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: colours.primary }} // Section background
    >

      {/* BACKGROUND PATTERN (optional styling layer) */}
      <div className="absolute inset-0 bg-stripe" />

      <div className="container-xl relative z-10">

        {/* GRID LAYOUT FOR STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4">

          {/* LOOP THROUGH STATS DATA */}
          {stats.map((stat, i) => (
            <StatItem
              key={stat.id}
              {...stat}              // Spread data from stats array
              trigger={triggered}    // Start animation when visible
              delay={i * 0.1}        // Stagger animation for nicer effect
            />
          ))}

        </div>

      </div>

    </section>
  )
}
