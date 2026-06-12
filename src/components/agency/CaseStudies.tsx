'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'

const caseStudies = [
  {
    title: 'FinFlow — Banking Reimagined',
    description: 'Redesigned the core banking experience for 2M+ users, resulting in 40% increase in engagement and 65% reduction in support tickets.',
    category: 'SaaS Design',
    industry: 'Fintech',
    metrics: ['40% ↑ Engagement', '65% ↓ Support', '3x Conversion'],
    gradient: 'from-amber-500/20 to-orange-600/10',
    accentColor: 'text-amber-500',
  },
  {
    title: 'MedSync — Healthcare Platform',
    description: 'Designed an intuitive patient management system serving 500+ clinics, streamlining workflows and improving patient outcomes.',
    category: 'Dashboard Design',
    industry: 'Healthcare',
    metrics: ['500+ Clinics', '4.9★ Rating', '80% Time Saved'],
    gradient: 'from-emerald-500/20 to-teal-600/10',
    accentColor: 'text-emerald-500',
  },
  {
    title: 'NeuralOps — AI Analytics',
    description: 'Created a visual analytics platform that transforms complex ML data into actionable insights for enterprise data teams.',
    category: 'Product Design',
    industry: 'AI',
    metrics: ['10x Data Insights', '50% Faster Decisions', '200+ Teams'],
    gradient: 'from-violet-500/20 to-purple-600/10',
    accentColor: 'text-violet-400',
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Work That Speaks Volumes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses. Every project is a partnership
            built on trust and driven by measurable outcomes.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-8">
          {caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-border/50 overflow-hidden cursor-pointer"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="text-xs font-medium">
                          {study.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {study.industry}
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground max-w-xl leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-6">
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {study.metrics.map((metric) => (
                          <span
                            key={metric}
                            className={`text-sm font-medium ${study.accentColor} bg-foreground/5 px-3 py-1.5 rounded-full`}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
