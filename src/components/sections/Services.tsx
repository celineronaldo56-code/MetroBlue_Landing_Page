import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Globe, TrendingUp, Palette, GraduationCap, Settings, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import { SectionHeader } from '../ui/SectionHeader'

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, TrendingUp, Palette, GraduationCap, Settings,
}

export const Services: React.FC = () => (
  <section id="services" className="section-pad bg-light">
    <div className="container-xl">
      <SectionHeader
        eyebrow="What We Do"
        title="Services Built for Modern Business"
        subtitle="From custom software to digital marketing — we deliver end-to-end technology solutions that move Nigerian businesses forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Code2
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-border flex flex-col"
            >
              {/* Accent top strip */}
              <div className="h-1.5 w-full" style={{ backgroundColor: service.accentColour }} />

              <div className="p-7 flex flex-col flex-1">
                <div
                  className={`w-12 h-12 ${service.colour} rounded-xl flex items-center justify-center mb-5`}
                  style={{ color: service.accentColour }}
                >
                  <Icon size={22} />
                </div>

                <h3 className="heading-display text-xl text-dark mb-3">{service.title}</h3>
                <p className="text-grey text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                <ul className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-light text-grey border border-border"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto transition-colors duration-200"
                  style={{ color: service.accentColour }}
                >
                  Learn More
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)
