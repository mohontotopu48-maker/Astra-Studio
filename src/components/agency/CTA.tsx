'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/lib/animations'

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent-warm)] opacity-[0.05] blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
            Start Your Project
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to Create Something{' '}
            <span className="gradient-text">Extraordinary?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s discuss your vision. Book a free discovery call with our
            team and learn how we can transform your digital presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-cool)] text-white border-0 hover:opacity-90 transition-all rounded-full px-8 py-6 text-base group"
            >
              <a href="#contact-form">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base border-border hover:bg-accent/50"
            >
              <a href="mailto:hello@astra.studio">hello@astra.studio</a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No commitment required · Free consultation · Response within 24 hours
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
