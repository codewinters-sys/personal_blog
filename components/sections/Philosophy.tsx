'use client'

import { motion } from 'framer-motion'

const principles = [
  'Systems > Shortcuts',
  'Clarity over memorization',
  'First-principles thinking',
  'Discipline compounds',
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-pad relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-violet-accent/5 blur-[100px] animate-pulse-glow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-blue-accent tracking-[0.2em] uppercase">05 / Philosophy</span>
          <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Engineering Philosophy
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="py-7 border-b border-white/[0.06] flex items-center justify-between">
                <span
                  className="font-display font-extrabold text-text-primary group-hover:gradient-text-blue transition-all duration-300"
                  style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)' }}
                >
                  {principle}
                </span>
                <span className="font-mono text-text-muted/40 text-sm ml-8 hidden sm:block">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
