


// ==============================
// SOLUTIONS SECTION (COLOUR SYSTEM APPLIED + DOCUMENTED)
// ==============================

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { solutions } from '../../data/solutions'
import { SectionHeader } from '../ui/SectionHeader'
import { Badge } from '../ui/Badge'
import { colours } from '../../styles/tokens' // Import design system colours

// Gradient system using your colour tokens (no random greens)
const gradients = [
  `linear-gradient(135deg, ${colours.primary}, ${colours.secondary})`,
  `linear-gradient(135deg, ${colours.secondary}, ${colours.primary})`,
  `linear-gradient(135deg, ${colours.primary}, ${colours.dark})`,
]

export const Solutions: React.FC = () => (
  <section
    id="solutions"
    className="section-pad"
    style={{ backgroundColor: colours.white }}
  >
    <div className="container-xl">

      {/* Section header */}
      <SectionHeader
        eyebrow="Our Platforms"
        title="Proprietary Solutions for Every Need"
        subtitle="Purpose-built platforms addressing real challenges faced by Nigerian schools, businesses, and entrepreneurs."
      />

      {/* Solutions list */}
      <div className="flex flex-col gap-20">

        {solutions.map((solution, i) => {

          const isEven = i % 2 === 0

          return (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}
            >

              {/* ============================== */}
              {/* TEXT CONTENT */}
              {/* ============================== */}
              <div className={isEven ? '' : 'lg:col-start-2'}>

                {/* Badge */}
                <Badge className={`${solution.badgeColour} mb-4`}>
                  {solution.badge}
                </Badge>

                {/* Title */}
                <h3
                  className="heading-display text-3xl lg:text-4xl mb-3"
                  style={{ color: colours.dark }}
                >
                  {solution.name}
                </h3>

                {/* Tagline */}
                <p
                  className="font-semibold text-lg mb-4"
                  style={{ color: colours.secondary }}
                >
                  {solution.tagline}
                </p>

                {/* Description */}
                <p
                  className="leading-relaxed mb-7"
                  style={{ color: colours.grey }}
                >
                  {solution.description}
                </p>

                {/* Features list */}
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {solution.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm font-medium"
                      style={{ color: colours.dark }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: colours.secondary }}
                        className="mt-0.5 flex-shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 shadow-lg group"
                  style={{
                    backgroundColor: colours.secondary,
                    color: colours.white,
                    boxShadow: `0 10px 25px ${colours.primary}33`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colours.primary
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colours.secondary
                  }}
                >
                  {solution.ctaText}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>

              </div>

              {/* ============================== */}
              {/* VISUAL PANEL */}
              {/* ============================== */}
              <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>

                <div
                  className="relative rounded-3xl p-8 lg:p-10 overflow-hidden min-h-[320px] flex flex-col justify-between shadow-2xl"
                  style={{ background: gradients[i % gradients.length] }}
                >

                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-dot-grid opacity-20" />

                  {/* Top content */}
                  <div className="relative z-10">
                    <p
                      className="text-xs font-mono uppercase tracking-widest mb-1"
                      style={{ color: `${colours.white}8C` }}
                    >
                      Platform
                    </p>

                    <h4
                      className="font-display font-bold text-2xl"
                      style={{ color: colours.white }}
                    >
                      {solution.name}
                    </h4>
                  </div>

                  {/* Feature tags */}
                  <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                    {solution.features.map((f) => (
                      <span
                        key={f}
                        className="backdrop-blur-sm border text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: `${colours.white}26`,
                          borderColor: `${colours.white}33`,
                          color: colours.white,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Decorative circles */}
                  <div
                    className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full"
                    style={{ backgroundColor: `${colours.white}1A` }}
                  />

                  <div
                    className="absolute -top-8 -left-8 w-32 h-32 rounded-full"
                    style={{ backgroundColor: `${colours.white}0D` }}
                  />

                </div>

              </div>

            </motion.div>
          )
        })}

      </div>

    </div>
  </section>
)
