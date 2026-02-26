'use client'

import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section id="vision" className="section-pad">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-blue-accent tracking-[0.2em] uppercase"
        >
          06 / Vision
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 mb-10"
        >
          {/* Decorative line */}
          <div className="w-12 h-px bg-gradient-to-r from-blue-accent to-violet-accent mx-auto mb-8" />

          <p className="font-display text-text-secondary leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            The aim is to contribute to intelligent autonomous systems operating in complex, 
            unpredictable environments — where hardware reliability and algorithmic precision 
            must coexist without compromise. Not control rooms and simulations. 
            Real-world systems that perceive, reason, and act.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span
            className="font-display font-extrabold gradient-text-blue"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)' }}
          >
            &quot;The mission is the machine.&quot;
          </span>
        </motion.div>
      </div>
    </section>
  )
}
