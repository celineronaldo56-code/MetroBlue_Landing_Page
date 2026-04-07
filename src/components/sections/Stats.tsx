import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, Award, GraduationCap } from 'lucide-react'
import { stats } from '../../data/stats'
import { useCountUp } from '../../hooks/useCountUp'

const iconMap: Record<string, React.ElementType> = {
  Briefcase, Users, Award, GraduationCap,
}

interface StatItemProps {
  value: number
  suffix: string
  label: string
  icon: string
  trigger: boolean
  delay: number
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label, icon, trigger, delay }) => {
  const count = useCountUp(value, 2000, trigger)
  const Icon  = iconMap[icon] ?? Briefcase

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center px-6 py-10"
    >
      <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <p className="heading-display text-5xl text-white mb-1">
        {count}
        <span className="text-green-500">{suffix}</span>
      </p>
      <p className="text-white/55 text-sm font-medium mt-1 tracking-wide uppercase">{label}</p>
    </motion.div>
  )
}

export const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); observer.disconnect() }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-stripe" />
      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
          {stats.map((stat, i) => (
            <StatItem key={stat.id} {...stat} trigger={triggered} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
