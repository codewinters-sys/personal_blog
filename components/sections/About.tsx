'use client'

import { motion } from 'framer-motion'

const milestones = [
  { label: 'First Hardware Build', desc: 'Human-following robotic vehicle — sensor fusion and control logic from scratch.' },
  { label: 'Embedded Systems Depth', desc: 'Microcontroller experiments, power systems, and hardware-software interfaces.' },
  { label: 'Algorithmic Reasoning', desc: 'Deep study of optimization algorithms, recurrence relations, and computational thinking.' },
  { label: 'Systems Integration', desc: 'Combining hardware intuition with software precision into coherent intelligent systems.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-blue-accent tracking-[0.2em] uppercase">01 / About</span>
          <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Systems First. Always.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Text */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {[
              `Every problem is a system. Every system has inputs, outputs, and a logic that governs the relationship between them. That's not just how I think about engineering — it's how I think about everything. When I encounter something complex, the first instinct isn't to memorize a solution. It's to understand the architecture.`,
              `My approach is build-first. I've taken apart hardware, built sensors into control logic, written algorithms from scratch without libraries, and iterated on systems until they behaved the way I intended. The theory always follows the experiment — not the other way around. That's how real understanding compounds.`,
              `The long-term direction is clear: intelligent autonomous systems that operate in complex, unpredictable environments. Systems that don't just execute commands, but perceive, reason, and respond. I'm building the foundation for that now — one experiment, one algorithm, one hardware module at a time.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className="font-body text-base text-text-secondary leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-2 relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-accent via-violet-accent to-transparent origin-top"
            />

            <div className="flex flex-col gap-8 pl-10">
              {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[2.05rem] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-accent border-2 border-[#090912] shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

                  <h4 className="font-display font-semibold text-text-primary text-sm mb-1">{item.label}</h4>
                  <p className="font-body text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
