'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection } from '@/lib/animations'

const faqs = [
  {
    question: 'What industries do you specialize in?',
    answer: 'We specialize in SaaS, Fintech, AI, and Healthcare — industries where complex interactions demand exceptional design. Our deep domain expertise allows us to move faster and deliver more impactful results. That said, our design methodology translates across verticals, and we\'ve successfully partnered with companies in e-commerce, education, and enterprise software.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A brand identity project typically takes 4-6 weeks, while a full product design engagement can range from 8-16 weeks. We provide detailed timelines during our discovery phase and maintain transparent communication throughout. Rush timelines are available for time-sensitive launches.',
  },
  {
    question: 'What does your design process look like?',
    answer: 'Our four-phase process — Discovery, Research & Strategy, Design & Iterate, and Deliver & Scale — ensures every project is grounded in data and refined through feedback. We start with stakeholder interviews and user research, move through wireframing and prototyping, and deliver pixel-perfect designs with comprehensive documentation for seamless development handoff.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer: 'We work with both. Our client portfolio spans from Series A startups to Fortune 500 enterprises. We tailor our engagement model and pricing to match your stage and needs. Startups benefit from our speed and strategic guidance, while enterprises value our scalability and process rigor.',
  },
  {
    question: 'How do you handle design handoff to development?',
    answer: 'We provide comprehensive design specifications including Figma files with auto-layout, component documentation, interaction specifications, and responsive behavior guidelines. We also offer a handoff period where our team is available to answer developer questions and provide QA support during implementation.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer both project-based and retainer pricing models. Project-based engagements have a fixed scope and timeline with clear deliverables. Retainers provide ongoing design support with a monthly allocation. We discuss pricing openly during our discovery call and provide detailed proposals before any commitment.',
  },
  {
    question: 'Can you work with our existing design system?',
    answer: 'Absolutely. We regularly work within existing design systems, extending and evolving them rather than replacing them. We audit your current system, identify gaps and inconsistencies, and propose enhancements that align with your team\'s workflow. If needed, we can also build a design system from the ground up.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes. We offer post-launch support packages that include design iterations, A/B testing, performance optimization, and design system maintenance. Many of our clients transition to a retainer model after their initial project for continuous design support as their product evolves.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us. Can&apos;t find
            what you&apos;re looking for? Reach out directly.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-surface-elevated data-[state=open]:border-border transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
