'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-animated flex flex-col items-center justify-center gap-8 px-6 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-violet-accent/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center gap-6"
      >
        <span
          className="font-display font-extrabold glow-violet"
          style={{
            fontSize: 'clamp(6rem, 20vw, 14rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(139,92,246,0.4)',
            lineHeight: 1,
          }}
        >
          404
        </span>

        <p
          className="font-display font-semibold text-text-secondary"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
        >
          This system doesn&apos;t exist.{' '}
          <span className="gradient-text-blue">Yet.</span>
        </p>

        <p className="font-body text-sm text-text-muted max-w-xs">
          The route you&apos;re looking for hasn&apos;t been built into the architecture.
        </p>

        <Link
          href="/"
          className="btn-primary font-body font-medium text-white px-7 py-3.5 rounded-xl text-sm mt-4"
        >
          ← Return to Base
        </Link>
      </motion.div>
    </main>
  )
}
