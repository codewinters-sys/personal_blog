'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 animate-blob-drift"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 animate-blob-drift-slow"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[200px] h-[200px] rounded-full blur-[80px] opacity-10 animate-blob-drift"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)', animationDelay: '3s' }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 flex flex-col items-start"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="font-mono text-xs text-blue-accent border border-blue-accent/30 bg-blue-accent/5 px-4 py-2 rounded-full tracking-[0.2em] uppercase">
            [ Builder in Progress ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-text-primary leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          Engineering{' '}
          <span className="gradient-text-blue">Intelligent</span>
          <br />
          Systems for the
          <br />
          <span className="gradient-text">Future.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-sm text-text-secondary tracking-[0.15em] mb-4 uppercase"
        >
          Robotics&nbsp;&nbsp;•&nbsp;&nbsp;Control Systems&nbsp;&nbsp;•&nbsp;&nbsp;AI&nbsp;&nbsp;•&nbsp;&nbsp;Embedded Intelligence
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-body text-base text-text-secondary max-w-xl leading-relaxed mb-10"
        >
          Designing the hardware logic and algorithmic intelligence that powers tomorrow&apos;s autonomous systems — where code meets physical reality.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="btn-primary font-body font-medium text-white px-7 py-3.5 rounded-xl text-sm"
          >
            Explore My Work
          </Link>
          <Link
            href="#contact"
            className="btn-outline font-body font-medium text-text-primary px-7 py-3.5 rounded-xl text-sm"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-start gap-2"
        >
          <span className="font-mono text-xs text-text-muted tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-blue-accent to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090912] to-transparent" />
    </section>
  )
}
