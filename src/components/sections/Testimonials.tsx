import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { SectionHeader } from '../ui/SectionHeader'

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused]   = useState(false)

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % testimonials.length),
    []
  )
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [paused, next])

  const t = testimonials[current]

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Real results from real businesses and learners across Nigeria."
        />

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-light rounded-3xl p-8 lg:p-12 border border-border relative overflow-hidden"
            >
              <Quote
                size={80}
                className="absolute top-6 right-8 text-secondary/8 rotate-180"
              />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#0F9BD7" className="text-secondary" />
                ))}
              </div>

              <blockquote className="text-dark text-lg lg:text-xl leading-relaxed font-medium mb-8 relative z-10">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${t.avatarColour} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <span className="text-white font-bold text-sm">{t.avatarInitials}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-dark">{t.name}</p>
                  <p className="text-grey text-sm">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-secondary' : 'w-2 bg-border hover:bg-grey'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl bg-light border border-border flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 text-grey"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl bg-light border border-border flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 text-grey"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
