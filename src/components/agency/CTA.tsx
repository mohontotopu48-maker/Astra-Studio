'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Calendar, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/lib/animations'
import { useRouter } from '@/hooks/use-router'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { navigate } = useRouter()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.04]" />

      {/* Purple glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-[#592DB5] opacity-[0.12] blur-[180px]"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-[#773DF2] opacity-[0.08] blur-[150px]"
        animate={{ scale: [1, 0.7, 1], y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#4520A0] opacity-[0.06] blur-[200px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Decorative spinning elements */}
      <div className="absolute top-10 left-10 opacity-[0.04]">
        <div className="w-32 h-32 border border-white rounded-full animate-spin-slow" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-[0.04]">
        <div className="w-48 h-48 border border-white rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <AnimatedSection>
          <span className="text-sm text-[#B68DF7] font-medium uppercase tracking-widest mb-4 block">
            Start Your Project
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Ready to Create Something{' '}
            <span className="bg-gradient-to-r from-[#592DB5] via-[#773DF2] to-[#9B6BF5] bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let&apos;s discuss your vision. Book a free discovery call with our
            team and learn how we can transform your digital presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                onClick={() => navigate('contact')}
                size="lg"
                className="bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white border-0 hover:shadow-[0_0_60px_#592DB550] transition-all duration-700 rounded-full px-10 py-7 text-lg group relative overflow-hidden h-[56px]"
              >
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
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-7 text-lg border-white/20 text-white hover:bg-white/10 hover:border-[#773DF2]/50 transition-all duration-300 h-[56px] bg-transparent"
              >
                <a href="mailto:hello@astra.studio">
                  <Mail className="mr-2 h-4 w-4" />
                  hello@astra.studio
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.p
            className="text-sm text-white/40 flex items-center justify-center gap-2 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span>No commitment required</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Free consultation</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Response within 24 hours</span>
          </motion.p>
        </AnimatedSection>
      </motion.div>
    </section>
  )
}
