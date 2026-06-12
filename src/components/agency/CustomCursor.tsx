'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showCursor, setShowCursor] = useState(false)
  const trailRef = useRef<Array<{ x: number; y: number }>>([])
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const idRef = useRef(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)

    // Add to trail
    idRef.current += 1
    trailRef.current = [
      { x: e.clientX, y: e.clientY },
      ...trailRef.current.slice(0, 8),
    ]
    setTrail(trailRef.current.map((p, i) => ({ ...p, id: idRef.current - i })))
  }, [])

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!hasFinePointer) return

    requestAnimationFrame(() => setShowCursor(true))
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', () => setIsVisible(true))
    document.addEventListener('mouseleave', () => setIsVisible(false))

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [handleMouseMove])

  if (!showCursor) return null

  return (
    <>
      {/* Cursor glow (large, soft) */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        animate={{
          x: position.x - 150,
          y: position.y - 150,
          opacity: isVisible ? (isHovering ? 0.15 : 0.06) : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 20,
          mass: 0.5,
        }}
      >
        <div className="w-[300px] h-[300px] rounded-full bg-[var(--accent-warm)] blur-[80px]" />
      </motion.div>

      {/* Trail dots */}
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 z-[9996] pointer-events-none"
          animate={{
            x: point.x - (2 - i * 0.2),
            y: point.y - (2 - i * 0.2),
            opacity: (1 - i * 0.12) * (isVisible ? 1 : 0),
            scale: 1 - i * 0.08,
          }}
          transition={{
            type: 'spring',
            stiffness: 400 - i * 30,
            damping: 25,
          }}
        >
          <div
            className="rounded-full bg-[var(--accent-warm)]"
            style={{
              width: Math.max(4 - i * 0.5, 1),
              height: Math.max(4 - i * 0.5, 1),
              opacity: 0.4 - i * 0.05,
            }}
          />
        </motion.div>
      ))}

      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* Ring that follows with delay */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: position.x - (isHovering ? 24 : 16),
          y: position.y - (isHovering ? 24 : 16),
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-colors duration-300 ${
            isHovering
              ? 'border-[var(--accent-warm)] bg-[var(--accent-warm)]/10 shadow-[0_0_20px_oklch(0.75_0.15_55/20%)]'
              : 'border-foreground/20'
          }`}
        />
      </motion.div>
    </>
  )
}
