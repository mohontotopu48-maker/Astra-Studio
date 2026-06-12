'use client'

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

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From Vision to Launch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology refined over 200+ projects. Every step is designed
            to maximize impact and minimize risk.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="group relative">
                {/* Connection line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-border to-transparent" />
                )}

                <div className="relative">
                  {/* Number */}
                  <div className="text-6xl font-bold text-border/50 group-hover:text-[var(--accent-warm)]/20 transition-colors duration-500 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--accent-warm)]/10 to-[var(--accent-cool)]/10 flex items-center justify-center mb-4 group-hover:from-[var(--accent-warm)]/20 group-hover:to-[var(--accent-cool)]/20 transition-colors duration-500">
                    <step.icon className="h-6 w-6 text-[var(--accent-warm)]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-xs text-muted-foreground/70 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-[var(--accent-warm)]/60" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
