'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    category: 'Hardware / Robotics',
    title: 'Human-Following Robotic Vehicle',
    points: [
      'Ultrasonic + dual IR sensor fusion for real-time spatial awareness',
      'Custom control flow with multiple operational modes and remote switching',
      'Motor actuation logic and servo-based directional control with power management',
    ],
    tags: ['Arduino', 'C++', 'Ultrasonic', 'IR Sensors', 'Control Systems'],
    accent: '#3b82f6',
  },
  {
    category: 'Embedded Systems',
    title: 'Embedded Systems Lab',
    points: [
      'Microcontroller prototyping with iterative hardware architecture testing',
      'Hardware-software interface design and signal flow analysis',
      'Power system design from repurposed and custom components',
    ],
    tags: ['Arduino', 'Embedded C', 'Electronics', 'Signal Processing'],
    accent: '#8b5cf6',
  },
  {
    category: 'Algorithms / Math',
    title: 'Algorithmic Reasoning Engine',
    points: [
      'Deep study of optimization algorithms including Kadane\'s, recurrence structures',
      'Custom implementations without library dependency for pure understanding',
      'Systems-level reasoning applied to differential equations and Fourier series',
    ],
    tags: ['C++', 'Algorithms', 'Mathematics', 'Optimization'],
    accent: '#3b82f6',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-blue-accent tracking-[0.2em] uppercase">02 / Projects</span>
          <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What I&apos;m Building
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass glass-hover rounded-2xl p-7 flex flex-col gap-5 group"
            >
              {/* Category tag */}
              <span
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full self-start"
                style={{
                  color: project.accent,
                  background: `${project.accent}15`,
                  border: `1px solid ${project.accent}30`,
                }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-text-primary text-xl leading-snug">
                {project.title}
              </h3>

              {/* Points */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {project.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                    <span className="font-body text-sm text-text-muted leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-text-muted bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
