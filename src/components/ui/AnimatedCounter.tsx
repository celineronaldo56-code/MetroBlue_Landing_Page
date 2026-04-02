import React, { useRef, useState, useEffect } from 'react'
import { useCountUp } from '../../hooks/useCountUp'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  duration = 2000,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const [triggered, setTriggered] = useState(false)
  const count = useCountUp(value, duration, triggered)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
