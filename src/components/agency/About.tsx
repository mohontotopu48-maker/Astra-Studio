'use client'

import { AnimatedSection } from '@/lib/animations'

const values = [
  {
    title: 'Craft Over Speed',
    description: 'Every pixel matters. We take the time to get things right because quality compounds over time.',
  },
  {
    title: 'Strategy First',
    description: 'Beautiful design without strategic thinking is decoration. We lead with insights and measure by impact.',
  },
  {
    title: 'Radical Transparency',
    description: 'No hidden agendas, no surprises. We share our thinking, our process, and our honest assessment.',
  },
  {
    title: 'Growth Mindset',
    description: 'We approach every project as learners. Curiosity drives innovation and keeps our work fresh.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Design Partners, Not Just Designers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Astra Studio is a team of 30+ strategists, designers, and technologists
              who believe great design is the most powerful business lever. Founded in
              2018, we&apos;ve helped 200+ companies transform their digital presence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work at the intersection of business strategy and creative execution.
              Every project starts with understanding your goals, and ends with
              measurable impact. We don&apos;t just make things look good — we make
              them work brilliantly.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl border border-border/50 hover:border-border hover:bg-surface-elevated transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-warm)]/10 to-[var(--accent-cool)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold gradient-text">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
