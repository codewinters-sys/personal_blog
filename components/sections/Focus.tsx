'use client'

import { motion } from 'framer-motion'

const focusItems = [
  {
    icon: '⚙️',
    title: 'Advanced Control Systems',
    desc: 'Feedback loops, stability analysis, and PID fundamentals — understanding what makes systems behave.',
  },
  {
    icon: '🤖',
    title: 'Robotics Architecture',
    desc: 'Sensor fusion, actuation logic, and motion planning for intelligent physical systems.',
  },
  {
    icon: '🧠',
    title: 'AI Foundations',
    desc: 'Mathematical intuition behind learning systems — building understanding from the ground up.',
  },
  {
    icon: '⚡',
    title: 'Hardware-Software Integration',
    desc: 'Building systems where code meets physical reality — where precision in both domains matters equally.',
  },
]

export default function Focus() {
  return (
    <section id="focus" className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="font-mono text-xs text-blue-accent tracking-[0.2em] uppercase">04 / Focus</span>
          <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Current Direction
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-body text-text-muted text-sm mb-14"
        >
          What&apos;s getting the most deliberate attention right now.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {focusItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-7 flex flex-col gap-4"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-display font-semibold text-text-primary text-base leading-snug">{item.title}</h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
