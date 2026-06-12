'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/lib/animations'

const caseStudies = [
  {
    title: 'FinFlow — Banking Reimagined',
    description: 'Redesigned the core banking experience for 2M+ users, resulting in 40% increase in engagement and 65% reduction in support tickets.',
    category: 'SaaS Design',
    industry: 'Fintech',
    metrics: ['40% ↑ Engagement', '65% ↓ Support', '3x Conversion'],
    gradient: 'from-amber-500/20 to-orange-600/10',
    accentColor: 'text-amber-500',
    glowColor: 'oklch(0.75 0.15 55 / 15%)',
  },
  {
    title: 'MedSync — Healthcare Platform',
    description: 'Designed an intuitive patient management system serving 500+ clinics, streamlining workflows and improving patient outcomes.',
    category: 'Dashboard Design',
    industry: 'Healthcare',
    metrics: ['500+ Clinics', '4.9★ Rating', '80% Time Saved'],
    gradient: 'from-emerald-500/20 to-teal-600/10',
    accentColor: 'text-emerald-500',
    glowColor: 'oklch(0.7 0.15 160 / 15%)',
  },
  {
    title: 'NeuralOps — AI Analytics',
    description: 'Created a visual analytics platform that transforms complex ML data into actionable insights for enterprise data teams.',
    category: 'Product Design',
    industry: 'AI',
    metrics: ['10x Data Insights', '50% Faster Decisions', '200+ Teams'],
    gradient: 'from-violet-500/20 to-purple-600/10',
    accentColor: 'text-violet-400',
    glowColor: 'oklch(0.6 0.2 280 / 15%)',
  },
]

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1])

  return (
    <div ref={ref}>
      <AnimatedSection delay={index * 0.15}>
        <motion.div
          style={{ y, rotate }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="group relative rounded-2xl border border-border/50 overflow-hidden cursor-pointer"
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

          {/* Animated glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              boxShadow: `inset 0 0 80px ${study.glowColor}`,
            }}
          />

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
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric, i) => (
                    <motion.span
                      key={metric}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`text-sm font-medium ${study.accentColor} bg-foreground/5 px-3 py-1.5 rounded-full`}
                    >
                      {metric}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom line animation */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </motion.div>
      </AnimatedSection>
    </div>
  )
}

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

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
