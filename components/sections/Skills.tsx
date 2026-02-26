'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Hardware',
    skills: ['Arduino', 'Servo Motors', 'Ultrasonic Sensors', 'IR Sensors', 'Motor Drivers'],
  },
  {
    label: 'Languages',
    skills: ['C++', 'Python', 'TypeScript'],
  },
  {
    label: 'Software / Frameworks',
    skills: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Concepts',
    skills: ['Control Systems', 'Embedded Systems', 'Signal Processing', 'Systems Design', 'Algorithms'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-blue-accent tracking-[0.2em] uppercase">03 / Skills</span>
          <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Tools &amp; Technologies
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: gi * 0.08, duration: 0.6 }}
            >
              <p className="font-mono text-xs text-text-muted tracking-[0.18em] uppercase mb-5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.06 + si * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass glass-hover px-5 py-2.5 rounded-xl font-body text-sm text-text-secondary cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
