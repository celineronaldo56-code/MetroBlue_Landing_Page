import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Flag, Handshake, GraduationCap } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const values = [
  {
    icon: Trophy,
    title: 'Proven Expertise',
    description: '5+ years building 200+ projects to international standards. We deliver what we promise, every time.',
    colour: 'text-yellow-500',
    bg:     'bg-yellow-50',
  },
  {
    icon: Flag,
    title: 'Built for Nigeria',
    description: 'Solutions designed with the Nigerian market, infrastructure, and business environment in mind from day one.',
    colour: 'text-green-600',
    bg:     'bg-green-50',
  },
  {
    icon: Handshake,
    title: 'End-to-End Support',
    description: 'From ideation and design through deployment and maintenance — we stay with you at every step.',
    colour: 'text-secondary',
    bg:     'bg-sky-50',
  },
  {
    icon: GraduationCap,
    title: 'Training & Growth',
    description: "We don't just build for you — we build your team's capacity too with knowledge transfer built in.",
    colour: 'text-purple-600',
    bg:     'bg-purple-50',
  },
]

const floatingStats = [
  { value: '200+', label: 'Projects', pos: { bottom: '-20px', left: '20px'  } },
  { value: '5+',   label: 'Years',    pos: { top:    '-20px', right: '20px' } },
  { value: '50+',  label: 'Clients',  pos: { bottom: '40px',  right: '-20px'} },
]

export const WhyMetroBlue: React.FC = () => (
  <section id="why-metroblue" className="section-pad bg-light">
    <div className="container-xl">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-secondary aspect-[4/3] shadow-2xl">
            <div className="absolute inset-0 bg-dot-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="font-display font-bold text-6xl mb-2">5+</p>
                <p className="text-white/70 text-lg">Years of Excellence</p>
                <p className="text-white/50 text-sm mt-1 font-mono">Lagos, Nigeria · Since 2019</p>
              </div>
            </div>
          </div>

          {floatingStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
              style={{ position: 'absolute', ...stat.pos }}
              className="bg-white rounded-2xl shadow-xl px-5 py-4 text-center border border-border"
            >
              <p className="heading-display text-2xl text-primary">{stat.value}</p>
              <p className="text-grey text-xs font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content side */}
        <div>
          <SectionHeader
            eyebrow="Why MetroBlue"
            title="Why Businesses & Learners Choose MetroBlue"
            subtitle="Nigeria's reliable technology partner since 2019 — delivering software, web, and training solutions that actually work."
            align="left"
          />

          <div className="grid gap-5">
            {values.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-5 bg-white rounded-2xl border border-border hover:shadow-md hover:border-secondary/30 transition-all duration-200"
                >
                  <div
                    className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 ${item.colour}`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-dark mb-1">{item.title}</h4>
                    <p className="text-grey text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            {['RC-1634086', 'Lagos HQ', 'Founded 2019', '🇳🇬 Nigerian-Owned'].map((badge) => (
              <span
                key={badge}
                className="tag-pill bg-primary/10 text-primary border border-primary/15 font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
