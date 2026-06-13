'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'

const mainStats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
  { value: 4.9, suffix: '', label: 'Average Rating' },
  { value: 12, suffix: '', label: 'Design Awards' },
]

const detailStats = [
  { id: '001', value: '16', label: 'Total Awards' },
  { id: '002', value: '5+', label: 'Years of Service' },
  { id: '003', value: '6', label: 'Locations' },
  { id: '004', value: '80+', label: 'Team Members' },
  { id: '005', value: '350+', label: 'Happy Clients' },
]

function AnimatedCounter({ value, suffix, isDecimal = false }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = isDecimal ? parseFloat((eased * value).toFixed(1)) : Math.floor(eased * value)
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, isInView, isDecimal])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function Statistics() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Dark background section */}
      <motion.div style={{ y: bgY }} className="relative bg-[#0a0a0a] py-16 md:py-24">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

        {/* Purple glow orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#592DB5] opacity-[0.07] blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#773DF2] opacity-[0.05] blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <span className="text-sm text-[#B68DF7] font-medium uppercase tracking-widest mb-4 block">
              Impact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
              Numbers That Matter
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Our track record speaks for itself. Every number represents a real
              partnership and measurable business impact.
            </p>
          </AnimatedSection>

          {/* Main stats - large gradient numbers */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20">
            {mainStats.map((stat, i) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="text-center group relative"
                >
                  {/* Glow behind on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <div className="relative">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-display bg-gradient-to-r from-[#592DB5] via-[#773DF2] to-[#9B6BF5] bg-clip-text text-transparent mb-3">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.value === 4.9} />
                    </div>
                    <div className="text-base sm:text-lg font-medium text-white/70">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </motion.div>

      {/* Light background section with detail cards */}
      <div className="relative bg-background py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {detailStats.map((stat, i) => (
              <StaggerItem key={stat.id}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative bg-white dark:bg-white/5 border border-border/50 rounded-2xl p-6 text-center hover:border-[#592DB5]/30 transition-colors duration-300"
                >
                  {/* Number label */}
                  <span className="text-xs font-mono text-[#592DB5] font-semibold tracking-wider mb-3 block">
                    {stat.id}
                  </span>

                  {/* Value */}
                  <div className="text-3xl sm:text-4xl font-bold font-display bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-[#592DB5] to-[#773DF2] transition-all duration-500" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
