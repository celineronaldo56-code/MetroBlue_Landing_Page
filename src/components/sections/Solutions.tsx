import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { solutions } from '../../data/solutions'
import { SectionHeader } from '../ui/SectionHeader'
import { Badge } from '../ui/Badge'

const gradients = [
  'from-green-600 to-teal-500',
  'from-primary to-secondary',
  'from-secondary to-sky-400',
]

export const Solutions: React.FC = () => (
  <section id="solutions" className="section-pad bg-white">
    <div className="container-xl">
      <SectionHeader
        eyebrow="Our Platforms"
        title="Proprietary Solutions for Every Need"
        subtitle="Purpose-built platforms addressing real challenges faced by Nigerian schools, businesses, and entrepreneurs."
      />

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
              {/* Text side */}
              <div className={isEven ? '' : 'lg:col-start-2'}>
                <Badge className={`${solution.badgeColour} mb-4`}>{solution.badge}</Badge>
                <h3 className="heading-display text-3xl lg:text-4xl text-dark mb-3">
                  {solution.name}
                </h3>
                <p className="text-secondary font-semibold text-lg mb-4">{solution.tagline}</p>
                <p className="text-grey leading-relaxed mb-7">{solution.description}</p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {solution.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-dark font-medium">
                      <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-2 bg-green-500 text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-green-800 transition-colors duration-200 shadow-lg shadow-primary/20 group"
                >
                  {solution.ctaText}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>

              {/* Visual panel */}
              <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                <div
                  className={`relative rounded-3xl bg-gradient-to-br ${gradients[i]} p-8 lg:p-10 overflow-hidden min-h-[320px] flex flex-col justify-between shadow-2xl`}
                >
                  <div className="absolute inset-0 bg-dot-grid opacity-20" />
                  <div className="relative z-10">
                    <p className="text-white/55 text-xs font-mono uppercase tracking-widest mb-1">
                      Platform
                    </p>
                    <h4 className="font-display font-bold text-2xl text-white">{solution.name}</h4>
                  </div>
                  <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                    {solution.features.map((f) => (
                      <span
                        key={f}
                        className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)
