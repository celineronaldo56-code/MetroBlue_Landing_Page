import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Star, ArrowRight } from 'lucide-react'
import { courses } from '../../data/training'
import { SectionHeader } from '../ui/SectionHeader'
import type { TrainingCategory } from '../../types'

const categories: TrainingCategory[] = [
  'All', 'Web Development', 'Mobile', 'Digital Marketing', 'Graphics', 'Software',
]

const levelColour: Record<string, string> = {
  Beginner:     'bg-green-500/20 text-green-400',
  Intermediate: 'bg-yellow-500/20 text-yellow-400',
  Advanced:     'bg-red-500/20 text-red-400',
}

export const Training: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TrainingCategory>('All')

  const filtered =
    activeTab === 'All' ? courses : courses.filter((c) => c.category === activeTab)

  return (
    <section id="training" className="section-pad bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-xl relative z-10">
        <SectionHeader
          eyebrow="IT Training"
          title="Build Skills. Launch Careers."
          subtitle="Practical, industry-focused courses taught by working professionals. Join hundreds of graduates working in tech across Nigeria."
          light
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`relative bg-[#1A2744] rounded-2xl p-7 flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  course.isFeatured
                    ? 'border-secondary/40 shadow-lg shadow-secondary/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {course.isFeatured && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      <Star size={10} fill="white" /> Featured
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg ${levelColour[course.level]}`}
                  >
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/40 text-xs">
                    <Clock size={12} /> {course.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-white/40 text-xs font-mono mb-5">{course.category}</p>

                <div className="flex flex-wrap gap-2 mb-6 flex-1">
                  {course.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium bg-secondary/10 text-secondary px-2.5 py-1 rounded-lg border border-secondary/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="w-full flex items-center justify-center gap-2 bg-secondary/10 hover:bg-secondary text-secondary hover:text-white text-sm font-semibold py-2.5 rounded-xl border border-secondary/30 hover:border-secondary transition-all duration-200 group mt-auto"
                >
                  Enrol Now
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
