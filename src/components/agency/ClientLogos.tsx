'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/lib/animations'

const clients = [
  'Stripe', 'Vercel', 'Linear', 'Notion', 'Figma',
  'Spotify', 'Airbnb', 'Slack', 'Dropbox', 'Shopify',
  'Discord', 'GitHub',
]

export function ClientLogos() {
  return (
    <section className="py-20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm text-muted-foreground mb-12 uppercase tracking-widest">
            Trusted by industry leaders
          </p>
        </AnimatedSection>

        {/* Scrolling logo wall */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -50 * clients.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex gap-16 items-center"
          >
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 text-xl sm:text-2xl font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 select-none whitespace-nowrap"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
