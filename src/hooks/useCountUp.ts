import { useState, useEffect, useRef } from 'react'

export const useCountUp = (target: number, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!trigger) return
    startTimeRef.current = null

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration, trigger])

  return count
}
