'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Infinity, HeartHandshake, CreditCard, Lightbulb, Headphones,
  Check, X, ArrowRight
} from 'lucide-react'
import { AnimatedSection } from '@/lib/animations'

const features = [
  {
    icon: Infinity,
    title: 'Unlimited Revisions',
    description: 'We\'re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.',
  },
  {
    icon: HeartHandshake,
    title: 'Lifetime Support',
    description: 'With our lifetime support, you\'re never alone. We\'ll be there for you at every stage with necessary guidance and assistance whenever you need it.',
  },
  {
    icon: CreditCard,
    title: 'Personalised Plans',
    description: 'Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment.',
  },
  {
    icon: Lightbulb,
    title: 'Custom Design Solutions',
    description: 'We craft bespoke design solutions tailored to your unique brand identity and business goals, ensuring every pixel serves a purpose.',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results.',
  },
]

const comparisonData = [
  { feature: 'Speed', designNuvio: true, inHouse: false, agency: false, freelancer: false, selfService: false },
  { feature: 'Flexibility', designNuvio: true, inHouse: true, agency: false, freelancer: true, selfService: true },
  { feature: 'Quality', designNuvio: true, inHouse: true, agency: true, freelancer: false, selfService: false },
  { feature: 'Scalability', designNuvio: true, inHouse: false, agency: true, freelancer: false, selfService: false },
  { feature: 'Affordability', designNuvio: true, inHouse: false, agency: false, freelancer: true, selfService: true },
]

const skillTags = [
  'Framer', 'Branding', 'Dashboard', 'Logos', 'Webflow',
  'Slide Decks', 'Mobile Apps', 'Figma', 'Social Media',
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="group relative rounded-2xl border border-border/50 bg-card p-6 h-full hover:border-border hover:shadow-lg transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center mb-4">
          <feature.icon className="h-6 w-6 text-[#773DF2]" />
        </div>
        <h3 className="text-lg font-display font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#592DB5]/5 to-[#773DF2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}

export function WhyChooseUs() {
  const [hoveredCol, setHoveredCol] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#592DB5] opacity-[0.02] blur-[200px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Why Us? Because Your Growth{' '}
            <span className="gradient-text">Is Our Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the difference thoughtful design makes. Our work highlights the dedication
            we bring to every client partnership.
          </p>
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Skills marquee */}
        <div className="mb-20">
          <div className="relative overflow-hidden py-6">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10" />
            
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skillTags, ...skillTags, ...skillTags, ...skillTags].map((tag, i) => (
                <span
                  key={i}
                  className="mx-4 px-5 py-2.5 rounded-full border border-border/50 bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-colors duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <AnimatedSection className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Design Nuvio&apos;s Alternative?{' '}
              <span className="gradient-text">Think One More Time!</span>
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/50 bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 md:p-5 text-sm font-semibold text-muted-foreground">
                    Platform
                  </th>
                  <th
                    className="p-4 md:p-5 text-sm font-semibold text-center"
                    onMouseEnter={() => setHoveredCol('us')}
                    onMouseLeave={() => setHoveredCol(null)}
                  >
                    <span className="gradient-text">Design Nuvio</span>
                  </th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-center text-muted-foreground">
                    In-House Team
                  </th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-center text-muted-foreground">
                    Creative Agencies
                  </th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-center text-muted-foreground">
                    Freelancers
                  </th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-center text-muted-foreground">
                    Self-Service
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border/30 last:border-0"
                  >
                    <td className="p-4 md:p-5 text-sm font-medium">{row.feature}</td>
                    <td
                      className={`p-4 md:p-5 text-center transition-colors duration-200 ${hoveredCol === 'us' ? 'bg-[#592DB5]/5' : ''}`}
                    >
                      {row.designNuvio ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#592DB5]/10">
                          <Check className="h-4 w-4 text-[#773DF2]" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted">
                          <X className="h-4 w-4 text-muted-foreground" />
                        </span>
                      )}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {row.inHouse ? (
                        <Check className="h-4 w-4 text-[#773DF2] mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {row.agency ? (
                        <Check className="h-4 w-4 text-[#773DF2] mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {row.freelancer ? (
                        <Check className="h-4 w-4 text-[#773DF2] mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {row.selfService ? (
                        <Check className="h-4 w-4 text-[#773DF2] mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Descriptions below table */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="text-xs text-muted-foreground p-3 rounded-lg bg-gradient-to-br from-[#592DB5]/5 to-[#773DF2]/5 border border-[#592DB5]/10">
              <span className="font-medium gradient-text">Design Nuvio</span> — Expert-driven & committed to higher quality. Get effective results & full support.
            </div>
            <div className="text-xs text-muted-foreground p-3 rounded-lg bg-muted/50">
              <span className="font-medium">In-House</span> — May ensure consistency, but limited expertise despite regular pay.
            </div>
            <div className="text-xs text-muted-foreground p-3 rounded-lg bg-muted/50">
              <span className="font-medium">Agencies</span> — Structured processes but with high costs and less flexibility.
            </div>
            <div className="text-xs text-muted-foreground p-3 rounded-lg bg-muted/50">
              <span className="font-medium">Freelancers</span> — Affordable but often lack consistency and reliability.
            </div>
            <div className="text-xs text-muted-foreground p-3 rounded-lg bg-muted/50">
              <span className="font-medium">DIY Tools</span> — Budget-friendly, but no strategic thinking or originality.
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white font-semibold text-base hover:shadow-[0_0_40px_#592DB540] transition-all duration-500"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
}
