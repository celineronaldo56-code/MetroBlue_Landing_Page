// ==============================
// HERO SECTION (PROFESSIONAL + COLOUR SYSTEM INTEGRATION)
// ==============================

import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, BookOpen, Briefcase, MapPin, Calendar,
  Code2, Globe, TrendingUp, Palette,
} from 'lucide-react'
import { Button } from '../ui/Button'

// Import centralized colour system
import { colours } from '../../styles/tokens'

// ==============================
// FLOATING SERVICE CARDS CONFIG
// ==============================
const floatingCards = [
  { icon: Code2,      label: 'Software Dev',  colour: colours.primary,   delay: 0    },
  { icon: Globe,      label: 'Web Solutions', colour: colours.secondary, delay: 0.3  },
  { icon: TrendingUp, label: 'Digital Mktg',  colour: colours.secondary,   delay: 0.6  },
  { icon: Palette,    label: 'Branding',      colour: colours.secondary,   delay: 0.9  },
]

// ==============================
// TRUST INDICATORS
// ==============================
const trustItems = [
  { icon: Briefcase, text: '200+ Projects Delivered' },
  { icon: Calendar,  text: 'Since 2019' },
  { icon: MapPin,    text: 'Lagos, Nigeria' },
]

// ==============================
// HERO COMPONENT
// ==============================
export const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ backgroundColor: colours.dark }} // Main background
  >

    {/* ============================== */}
    {/* BACKGROUND EFFECTS */}
    {/* ============================== */}

    {/* Grid overlay */}
    <div className="absolute inset-0 bg-dot-grid opacity-40" />

    {/* Glow effects */}
    <div
      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
      style={{ backgroundColor: `${colours.secondary}33` }}
    />

    <div
      className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
      style={{ backgroundColor: `${colours.primary}55` }}
    />

    {/* ============================== */}
    {/* MAIN CONTENT */}
    {/* ============================== */}

    <div className="container-xl relative z-10 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ============================== */}
        {/* LEFT SIDE (TEXT CONTENT) */}
        {/* ============================== */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-mono font-medium px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: `${colours.secondary}1A`,
              border: `1px solid ${colours.secondary}33`,
              color: colours.secondary,
            }}
          >
            🚀 Nigeria's Leading Tech Partner
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
            style={{ color: colours.white }}
          >
            We Build{' '}

            {/* Highlighted word */}
            <span style={{ color: colours.secondary }} className="relative">
              Technology

              {/* Underline SVG */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,0 100,5 Q150,10 200,5"
                  stroke={colours.secondary}
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}

            That Drives Your Business Forward
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg leading-relaxed mb-8 max-w-xl"
            style={{ color: `${colours.white}A6` }}
          >
            MetroBlue Tech Systems delivers world-class software development, web solutions,
            digital marketing, and IT training — tailored for Nigerian businesses and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button variant="primary" size="lg" href="#services">
              Explore Our Services <ArrowRight size={18} />
            </Button>

            <Button variant="outline" size="lg" href="#training">
              <BookOpen size={18} /> Start Your Training
            </Button>
          </motion.div>

          {/* ============================== */}
          {/* TRUST ROW */}
          {/* ============================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-6"
          >
            {trustItems.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: `${colours.white}80` }}
              >
                <Icon size={14} style={{ color: colours.secondary }} />
                {text}
              </div>
            ))}
          </motion.div>

        </div>

        {/* ============================== */}
        {/* RIGHT SIDE (FLOATING CARDS) */}
        {/* ============================== */}
        <div className="relative h-80 lg:h-[480px] flex items-center justify-center">

          {/* Circular rings */}
          <div
            className="absolute w-72 h-72 rounded-full animate-pulse-slow"
            style={{ border: `1px solid ${colours.secondary}33` }}
          />

          <div
            className="absolute w-52 h-52 rounded-full"
            style={{ border: `1px solid ${colours.secondary}1A` }}
          />

          {/* Floating cards */}
          {floatingCards.map(({ icon: Icon, label, colour, delay }, i) => {
            const angle  = (i * 90 - 45) * (Math.PI / 180)
            const radius = 140
            const x      = Math.cos(angle) * radius
            const y      = Math.sin(angle) * radius

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + delay }}
                className="animate-float absolute"
                style={{
                  left: `calc(50% + ${x}px - 48px)`,
                  top:  `calc(50% + ${y}px - 48px)`,
                  animationDelay: `${delay}s`,
                }}
              >

                {/* Card container */}
                <div
                    className="w-24 h-24 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center gap-2 shadow-xl hover:scale-110 transition-transform duration-300 cursor-default"
                    style={{
                      backgroundColor: `${colours.white}0D`,
                      border: `1px solid ${colours.white}1A`,
                    }}
                >

                  {/* Icon container */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: colour }}
                  >
                    <Icon size={20} style={{ color: colours.white }} />
                  </div>

                  {/* Label */}
                  <span
                    className="text-xs font-medium text-center leading-tight px-1"
                    style={{ color: `${colours.white}B3` }}
                  >
                    {label}
                  </span>

                </div>

              </motion.div>
            )
          })}

          {/* ============================== */}
          {/* CENTER BADGE */}
          {/* ============================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
            className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
            style={{
              backgroundColor: colours.secondary,
              boxShadow: `0 10px 30px ${colours.secondary}66`,
            }}
          >
            <span
              className="font-display font-bold text-xl"
              style={{ color: colours.white }}
            >
              MB
            </span>
          </motion.div>

        </div>
      </div>
    </div>

    {/* ============================== */}
    {/* BOTTOM FADE */}
    {/* ============================== */}
    <div
      className="absolute bottom-0 left-0 right-0 h-24"
      style={{
        background: `linear-gradient(to top, ${colours.dark}, transparent)`,
      }}
    />

  </section>
)
