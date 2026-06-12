'use client'

import React, { useEffect, useRef, useCallback, useState } from 'react'
import { motion, useInView, useAnimation, type Variant } from 'framer-motion'

type AnimationVariant = {
  hidden: Variant
  visible: Variant
}

export const fadeInUp: AnimationVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInDown: AnimationVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInLeft: AnimationVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

export const fadeInRight: AnimationVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn: AnimationVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variant}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
  threshold?: number
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.15,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  )
}

// Magnetic button hook
export function useMagneticEffect(strength: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }, [])

  return { ref, handleMouseMove, handleMouseLeave }
}

// Counter animation hook
export function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (startOnView && !isInView) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, isInView, startOnView])

  return { count, ref }
}
