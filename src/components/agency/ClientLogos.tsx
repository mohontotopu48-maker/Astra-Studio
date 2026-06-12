'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/lib/animations'

const clients = [
  'Stripe', 'Vercel', 'Linear', 'Notion', 'Figma',
  'Spotify', 'Airbnb', 'Slack', 'Dropbox', 'Shopify',
  'Discord', 'GitHub',
]

const clientsRow2 = [
  'Google', 'Meta', 'Apple', 'Amazon', 'Netflix',
  'Uber', 'Airbnb', 'Stripe', 'Notion', 'Figma',
  'Linear', 'Vercel',
]

export function ClientLogos() {
  return (
    <section className="py-20 border-y border-border/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm text-muted-foreground mb-12 uppercase tracking-[0.25em]">
            Trusted by industry leaders
          </p>
        </AnimatedSection>
      </div>

      {/* Double row marquee */}
      <div className="space-y-6">
        {/* Row 1 - scrolls left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="animate-marquee flex gap-16 items-center whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <motion.span
                key={`row1-${i}`}
                className="text-xl font-semibold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-500 cursor-default select-none"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right (reverse) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="animate-marquee flex gap-16 items-center whitespace-nowrap" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
            {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, i) => (
              <motion.span
                key={`row2-${i}`}
                className="text-xl font-semibold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-500 cursor-default select-none"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
