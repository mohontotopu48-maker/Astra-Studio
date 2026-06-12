'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/lib/animations'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#592DB5] opacity-[0.04] blur-[200px]"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#773DF2] opacity-[0.03] blur-[120px]"
        animate={{ scale: [1, 0.7, 1], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Decorative spinning elements */}
      <div className="absolute top-10 left-10 opacity-[0.03]">
        <div className="w-32 h-32 border border-foreground rounded-full animate-spin-slow" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-[0.03]">
        <div className="w-48 h-48 border border-foreground rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <AnimatedSection>
          <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
            Start Your Project
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to Create Something{' '}
            <span className="gradient-text">Extraordinary?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Let&apos;s discuss your vision. Book a free discovery call with our
            team and learn how we can transform your digital presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white border-0 hover:shadow-[0_0_50px_#592DB540] transition-shadow duration-700 rounded-full px-10 py-7 text-lg group relative overflow-hidden"
              >
                <a href="#contact-form">
                  <span className="relative z-10 flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  {/* Animated shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'linear' }}
                  />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-7 text-lg border-border hover:bg-accent/50 hover:border-[#592DB5]/30 transition-all duration-300"
              >
                <a href="mailto:hello@astra.studio">hello@astra.studio</a>
              </Button>
            </motion.div>
          </div>

          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            No commitment required · Free consultation · Response within 24 hours
          </motion.p>
        </AnimatedSection>
      </motion.div>
    </section>
  )
}
