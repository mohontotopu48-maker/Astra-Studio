'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', description: 'Across 30+ industries', icon: '🚀' },
  { value: 50, suffix: '+', label: 'Enterprise Clients', description: 'Fortune 500 to Series A', icon: '🏢' },
  { value: 12, suffix: '', label: 'Design Awards', description: 'Including Awwwards & CSS Design Awards', icon: '🏆' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', description: 'Based on post-project surveys', icon: '⭐' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
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
      // Custom easing - dramatic start, smooth finish
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, isInView])

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
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-b from-surface via-background to-surface" />

      {/* Floating decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-[1px] h-40 bg-gradient-to-b from-transparent via-[var(--accent-warm)]/20 to-transparent"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[1px] h-60 bg-gradient-to-b from-transparent via-[var(--accent-cool)]/20 to-transparent"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Numbers That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Every number represents a real
            partnership and measurable business impact.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="text-center group relative"
              >
                {/* Glow behind on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-warm)]/5 to-[var(--accent-cool)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="relative">
                  {/* Decorative ring */}
                  <motion.div
                    className="mx-auto mb-4 w-20 h-20 rounded-full border border-border/30 flex items-center justify-center"
                    whileInView={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute w-2 h-2 rounded-full bg-[var(--accent-warm)]/40 top-0 left-1/2 -translate-x-1/2" />
                  </motion.div>

                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-3">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-base sm:text-lg font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="mt-4 mx-auto h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
