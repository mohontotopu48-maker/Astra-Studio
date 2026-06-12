'use client'

import { motion } from 'framer-motion'
import { Building2, Brain, HeartPulse, Landmark } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'

const industries = [
  {
    icon: Building2,
    title: 'SaaS',
    description: 'Complex B2B and B2C platforms that users love. We design for adoption, retention, and expansion.',
    gradient: 'from-amber-500/10 to-orange-500/5',
  },
  {
    icon: Landmark,
    title: 'Fintech',
    description: 'Regulatory-compliant financial interfaces that build trust and simplify complex transactions.',
    gradient: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'AI-powered products that make complex data accessible and intelligent automation intuitive.',
    gradient: 'from-violet-500/10 to-purple-500/5',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'HIPAA-aware healthcare interfaces that improve patient outcomes and streamline clinical workflows.',
    gradient: 'from-rose-500/10 to-pink-500/5',
  },
]

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
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-2xl border border-border/50 p-8 bg-gradient-to-br ${industry.gradient} hover:border-border transition-all duration-500 cursor-pointer h-full`}
              >
                <div className="w-12 h-12 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
