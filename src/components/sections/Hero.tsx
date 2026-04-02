import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, BookOpen, Briefcase, MapPin, Calendar,
  Code2, Globe, TrendingUp, Palette,
} from 'lucide-react'
import { Button } from '../ui/Button'

const floatingCards = [
  { icon: Code2,      label: 'Software Dev',  colour: 'bg-blue-500',   delay: 0    },
  { icon: Globe,      label: 'Web Solutions', colour: 'bg-secondary',  delay: 0.3  },
  { icon: TrendingUp, label: 'Digital Mktg',  colour: 'bg-indigo-500', delay: 0.6  },
  { icon: Palette,    label: 'Branding',      colour: 'bg-purple-500', delay: 0.9  },
]

const trustItems = [
  { icon: Briefcase, text: '200+ Projects Delivered' },
  { icon: Calendar,  text: 'Since 2019'              },
  { icon: MapPin,    text: 'Lagos, Nigeria'           },
]

export const Hero: React.FC = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
    {/* Background layers */}
    <div className="absolute inset-0 bg-dot-grid opacity-40" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/35 rounded-full blur-3xl pointer-events-none" />

    <div className="container-xl relative z-10 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary text-sm font-mono font-medium px-4 py-2 rounded-full mb-6"
          >
            🚀 Nigeria's Leading Tech Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
          >
            We Build{' '}
            <span className="text-secondary relative">
              Technology
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,0 100,5 Q150,10 200,5"
                  stroke="#0F9BD7"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            That Drives Your Business Forward
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl"
          >
            MetroBlue Tech Systems delivers world-class software development, web solutions,
            digital marketing, and IT training — tailored for Nigerian businesses and beyond.
          </motion.p>

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

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-6"
          >
            {trustItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50 text-sm font-medium">
                <Icon size={14} className="text-secondary" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — floating cards */}
        <div className="relative h-80 lg:h-[480px] flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full border border-secondary/15 animate-pulse-slow" />
          <div className="absolute w-52 h-52 rounded-full border border-secondary/10" />

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
                <div className="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center gap-2 shadow-xl hover:scale-110 transition-transform duration-300 cursor-default">
                  <div className={`w-10 h-10 ${colour} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-white/70 text-xs font-medium text-center leading-tight px-1">
                    {label}
                  </span>
                </div>
              </motion.div>
            )
          })}

          {/* Centre badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
            className="relative z-10 w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center shadow-2xl shadow-secondary/40"
          >
            <span className="text-white font-display font-bold text-xl">MB</span>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
  </section>
)
