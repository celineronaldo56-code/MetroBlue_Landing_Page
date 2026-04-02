import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-14 ${alignment}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="tag-pill bg-secondary/10 text-secondary mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`heading-display text-3xl sm:text-4xl lg:text-5xl leading-tight ${
          light ? 'text-white' : 'text-dark'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/65' : 'text-grey'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
