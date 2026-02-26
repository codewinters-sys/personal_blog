'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('loaded')
    if (hasLoaded) {
      setLoading(false)
      return
    }
    const timer = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem('loaded', 'true')
    }, 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090912]"
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Glow blob */}
          <div className="absolute w-64 h-64 rounded-full bg-blue-accent/10 blur-[80px] animate-blob-drift" />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-7xl font-extrabold text-white glow-blue tracking-tighter"
            >
              A.
            </motion.div>

            {/* Loading bar */}
            <motion.div className="w-32 h-px bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-accent to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
