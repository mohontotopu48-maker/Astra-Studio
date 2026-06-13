'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'
import { Lightbulb, Search, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We dive deep into your business, users, and market to uncover opportunities and define a clear strategy.',
    details: ['Stakeholder interviews', 'User research', 'Competitive analysis', 'Strategy definition'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Research & Strategy',
    description: 'Data-driven insights shape every decision. We map user journeys and define information architecture.',
    details: ['User journey mapping', 'Information architecture', 'Content strategy', 'Technical feasibility'],
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design & Iterate',
    description: 'From wireframes to high-fidelity designs, we iterate rapidly based on feedback and testing.',
    details: ['Wireframing', 'Visual design', 'Interactive prototyping', 'Usability testing'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deliver & Scale',
    description: 'Pixel-perfect handoff with comprehensive documentation. We ensure flawless implementation.',
    details: ['Design specifications', 'Development handoff', 'QA support', 'Post-launch optimization'],
  },
]

function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="relative">
      {/* Animated vertical timeline line (desktop) */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border/30 -translate-x-1/2">
        <motion.div
          className="w-full bg-gradient-to-b from-[#592DB5] to-[#773DF2]"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-16 lg:space-y-24">
        {steps.map((step, i) => (
          <ProcessStep key={step.number} step={step} index={i} />
        ))}
      </div>
    </div>
  )
}

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? -60 : 60, 0]
  )

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
        <div className="group">
          {/* Number with gradient */}
          <div className="text-7xl md:text-8xl font-bold text-border/30 group-hover:text-[#773DF2]/15 transition-colors duration-500 mb-4">
            {step.number}
          </div>

          {/* Icon with animation */}
          <motion.div
            className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 items-center justify-center mb-4`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <step.icon className="h-7 w-7 text-[#773DF2]" />
          </motion.div>

          <h3 className="text-2xl font-semibold font-display mb-3">{step.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed max-w-md inline-block">
            {step.description}
          </p>

          <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
            {step.details.map((detail, j) => (
              <motion.li
                key={detail}
                initial={{ opacity: 0, x: index % 2 === 0 ? 10 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: j * 0.08 }}
                viewport={{ once: true }}
                className={`text-sm text-muted-foreground/70 flex items-center gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#592DB5]/60" />
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center dot */}
      <div className="hidden lg:flex w-5 h-5 rounded-full border-2 border-border bg-background z-10 flex-shrink-0 group-hover:border-[#592DB5] transition-colors">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#592DB5] to-[#773DF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  )
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.3]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
            From Vision to Launch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology refined over 200+ projects. Every step is designed
            to maximize impact and minimize risk.
          </p>
        </AnimatedSection>

        <ProcessTimeline />
      </div>
    </section>
  )
}
