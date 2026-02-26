'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const value = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(value)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-[2px] bg-white/5">
      <motion.div
        style={{ scaleX: progress, transformOrigin: 'left' }}
        className="h-full bg-gradient-to-r from-blue-accent to-violet-accent"
      />
    </div>
  )
}
