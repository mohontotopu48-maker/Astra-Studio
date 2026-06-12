'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'
import { Building2, Brain, HeartPulse, Landmark } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'SaaS',
    description: 'Complex B2B and B2C platforms that users love. We design for adoption, retention, and expansion.',
    gradient: 'from-amber-500/10 to-orange-500/5',
    glow: 'oklch(0.75 0.15 55 / 10%)',
  },
  {
    icon: Landmark,
    title: 'Fintech',
    description: 'Regulatory-compliant financial interfaces that build trust and simplify complex transactions.',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    glow: 'oklch(0.7 0.15 160 / 10%)',
  },
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'AI-powered products that make complex data accessible and intelligent automation intuitive.',
    gradient: 'from-violet-500/10 to-purple-500/5',
    glow: 'oklch(0.6 0.2 280 / 10%)',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'HIPAA-aware healthcare interfaces that improve patient outcomes and streamline clinical workflows.',
    gradient: 'from-rose-500/10 to-pink-500/5',
    glow: 'oklch(0.65 0.2 15 / 10%)',
  },
]

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <StaggerItem>
      <div ref={ref}>
        <motion.div
          style={{ y }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
          className={`group relative rounded-2xl border border-border/50 p-8 bg-gradient-to-br ${industry.gradient} hover:border-border cursor-pointer h-full overflow-hidden`}
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ boxShadow: `inset 0 0 80px ${industry.glow}` }}
          />

          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-2 right-2 w-8 h-[1px] bg-gradient-to-l from-[var(--accent-warm)] to-transparent" />
            <div className="absolute top-2 right-2 w-[1px] h-8 bg-gradient-to-b from-[var(--accent-warm)] to-transparent" />
          </div>

          <motion.div
            className="w-12 h-12 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center mb-6"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <industry.icon className="h-6 w-6 text-foreground" />
          </motion.div>

          <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">{industry.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {industry.description}
          </p>

          {/* Bottom border animation */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-cool)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </motion.div>
      </div>
    </StaggerItem>
  )
}

export function Industries() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Deep Domain Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just design — we understand your industry. Deep domain
            knowledge means faster delivery and better outcomes.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
