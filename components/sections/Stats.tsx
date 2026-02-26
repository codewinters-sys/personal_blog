'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 3, suffix: '+', label: 'Hardware Builds' },
  { value: 2, suffix: '', label: 'Programming Languages' },
  { value: 100, suffix: '+', label: 'Hours of Experimentation' },
  { value: null, suffix: '∞', label: 'Problems Left to Solve' },
]

function CountUp({ target, suffix }: { target: number | null; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || target === null) return
    let start = 0
    const duration = 1500
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  if (target === null) {
    return <span ref={ref}>{suffix}</span>
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/5 via-violet-accent/5 to-blue-accent/5" />
      <div className="absolute inset-0 border-y border-white/[0.04]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span
                className="font-display font-extrabold gradient-text-blue"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-mono text-xs text-text-muted tracking-wider uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
