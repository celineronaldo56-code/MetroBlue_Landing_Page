import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, MapPin } from 'lucide-react'

export const CallToAction: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

      <div className="container-xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="tag-pill bg-white/15 text-white border border-white/20 mb-5 inline-flex">
            🚀 Ready to Get Started?
          </p>

          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Take Your Business to the Next Level?
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you need custom software, a stunning website, expert digital marketing, or
            professional IT training — MetroBlue has you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-light transition-colors duration-200 shadow-xl shadow-black/20"
            >
              Get a Free Consultation <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('training')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-200"
            >
              <BookOpen size={18} /> View Training Courses
            </motion.button>
          </div>

          <p className="flex items-center justify-center gap-2 text-white/50 text-sm">
            <MapPin size={14} /> Based in Lagos, Nigeria · Serving clients nationwide
          </p>
        </motion.div>
      </div>
    </section>
  )
}
