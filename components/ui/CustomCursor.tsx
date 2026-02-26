'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 })

  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      setIsPointer(!!isClickable)
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handlePointerOver)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handlePointerOver)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Dot */}
      {/* Dot */}
<motion.div
  animate={{
    width: isPointer ? 6 : 8,
    height: isPointer ? 6 : 8,
    opacity: visible ? 1 : 0,
    backgroundColor: isPointer ? '#8b5cf6' : '#3b82f6',
  }}
  transition={{ duration: 0.15 }}
  style={{
    borderRadius: '50%',
    position: 'fixed',
    top: 0,
    left: 0,
    x: springX,
    y: springY,
    translateX: '-50%',
    translateY: '-50%',
    pointerEvents: 'none',
    zIndex: 99999,
  }}
/>
      

      {/* Ring */}
      <motion.div
        style={{
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 99998,
          border: `1.5px solid ${isPointer ? 'rgba(139,92,246,0.6)' : 'rgba(59,130,246,0.4)'}`,
        }}
        animate={{
          width: isPointer ? 44 : 32,
          height: isPointer ? 44 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
