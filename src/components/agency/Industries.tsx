'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedSection } from '@/lib/animations'
import {
  Building2, Brain, HeartPulse, Landmark, Plane, UtensilsCrossed,
  Dumbbell, Shirt, Calendar, Clapperboard, Cpu, ShieldCheck,
  Truck, Globe, Code, Gavel, Leaf, Gamepad2, ShoppingBag, Droplet
} from 'lucide-react'

const industries = [
  { icon: Building2, title: 'SaaS' },
  { icon: Landmark, title: 'Fintech' },
  { icon: Brain, title: 'AI & ML' },
  { icon: HeartPulse, title: 'Healthcare' },
  { icon: Plane, title: 'Tourism' },
  { icon: UtensilsCrossed, title: 'Food & Beverage' },
  { icon: Dumbbell, title: 'Fitness' },
  { icon: Shirt, title: 'Fashion' },
  { icon: Calendar, title: 'Events' },
  { icon: Clapperboard, title: 'Entertainment' },
  { icon: Cpu, title: 'Electronics' },
  { icon: ShieldCheck, title: 'Insurance' },
  { icon: Truck, title: 'Logistics' },
  { icon: Gavel, title: 'Legal' },
  { icon: Code, title: 'IT Solutions' },
  { icon: Gamepad2, title: 'Gaming' },
  { icon: ShoppingBag, title: 'E-Commerce' },
  { icon: Droplet, title: 'Mental Health' },
  { icon: Leaf, title: 'Sustainability' },
  { icon: Globe, title: 'Education' },
]

// Duplicate for seamless marquee loop
const marqueeItems = [...industries, ...industries]

export function Industries() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - compact */}
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight mb-3">
            Industries We{' '}
            <span className="bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Deep domain knowledge across 20+ verticals for faster delivery and better outcomes.
          </p>
        </AnimatedSection>

        {/* Marquee Row 1 - scrolls left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee-slow">
              {marqueeItems.map((industry, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex-shrink-0 mx-2 flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/40 bg-surface/50 backdrop-blur-sm hover:border-[#592DB5]/30 hover:bg-[#592DB5]/5 transition-all duration-300 cursor-default group"
                >
                  <industry.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-[#773DF2] transition-colors" />
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap">
                    {industry.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Marquee Row 2 - scrolls right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee-slow-reverse">
              {[...marqueeItems].reverse().map((industry, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex-shrink-0 mx-2 flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/40 bg-surface/50 backdrop-blur-sm hover:border-[#773DF2]/30 hover:bg-[#773DF2]/5 transition-all duration-300 cursor-default group"
                >
                  <industry.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-[#773DF2] transition-colors" />
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap">
                    {industry.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
