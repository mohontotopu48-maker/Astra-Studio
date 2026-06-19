'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Target,
  Lightbulb,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import * as Icons from 'lucide-react'
import { useRouter, type PageRoute } from '@/hooks/use-router'
import { Navigation } from '@/components/agency/Navigation'
import { Footer } from '@/components/agency/Footer'
import { ScrollProgress } from '@/components/agency/ScrollProgress'
import { PageCTA } from '@/components/pages/PageCTA'
import {
  getCaseStudyByRoute,
  getNextCaseStudy,
  type CaseStudy,
} from '@/lib/case-studies-data'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name]
  if (!Icon) return <Sparkles className={className} />
  return <Icon className={className} />
}

function SectionHeader({
  label,
  title,
  description,
  accent,
}: {
  label: string
  title: string
  description?: string
  accent: string
}) {
  return (
    <motion.div {...fadeInUp} className="max-w-3xl mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-[2px]"
          style={{ background: accent }}
        />
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: accent }}
        >
          {label}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

function CaseStudyHero({ study }: { study: CaseStudy }) {
  const { navigate } = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.08]"
          style={{ background: study.accentColor }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.05]"
          style={{ background: study.accentColor }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.button
          onClick={() => navigate('case-studies')}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to All Case Studies
        </motion.button>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-white"
                style={{ background: study.accentColor }}
              >
                {study.category}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Case Study
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 leading-[1.05]"
            >
              {study.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
            >
              {study.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Quick stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            ref={ref}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Project Snapshot
              </h3>
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Client</p>
                    <p className="text-sm font-semibold">{study.client.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-sm font-semibold">{study.client.location}</p>
                  </div>
                </div>
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between gap-4 pb-5 border-b border-border last:border-0 last:pb-0"
                  >
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                    <p
                      className="text-lg font-display font-bold"
                      style={{ color: study.accentColor }}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroImage({ study }: { study: CaseStudy }) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden border border-border/30"
        >
          <img
            src={study.image}
            alt={`${study.title} — ${study.category} case study showcase`}
            className="w-full h-[300px] sm:h-[460px] lg:h-[560px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
                {study.category} · {study.client.company}
              </p>
              <p className="text-lg sm:text-xl font-semibold text-white font-display">
                {study.title}
              </p>
            </div>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(study.client.company)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium hover:bg-white/25 transition-colors"
            >
              Visit Live Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Overview({ study }: { study: CaseStudy }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              label="Overview"
              title="The Project"
              accent={study.accentColor}
            />
          </div>
          <motion.div
            {...fadeInUp}
            className="lg:col-span-7"
          >
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/90">
              {study.overview}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Challenge({ study }: { study: CaseStudy }) {
  return (
    <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Challenge"
          title={study.challenge.title}
          description={study.challenge.description}
          accent={study.accentColor}
        />
        <motion.div
          {...fadeInUp}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10"
        >
          {study.challenge.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border"
            >
              <Target
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: study.accentColor }}
              />
              <p className="text-sm text-foreground/80 leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Solution({ study }: { study: CaseStudy }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Solution"
          title={study.solution.title}
          description={study.solution.description}
          accent={study.accentColor}
        />
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mt-10">
          {study.solution.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/30 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${study.accentColor}15` }}
              >
                <Lightbulb
                  className="w-5 h-5"
                  style={{ color: study.accentColor }}
                />
              </div>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed pt-2">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features({ study }: { study: CaseStudy }) {
  return (
    <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Key Features"
          title="What we shipped"
          description="The high-impact features that defined this project — each one tied directly to a user need we uncovered in research."
          accent={study.accentColor}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {study.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 hover:shadow-lg hover:shadow-[#592DB5]/5 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ background: `${study.accentColor}15` }}
              >
                <FeatureIcon
                  name={feature.icon}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process({ study }: { study: CaseStudy }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Process"
          title="How we got there"
          description="A structured, transparent engagement — from first research session to launch day and beyond."
          accent={study.accentColor}
        />
        <div className="relative mt-12">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-[2px] bg-border" />

          <div className="space-y-8 md:space-y-12">
            {study.process.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative md:grid md:grid-cols-[10rem_1fr] md:gap-12 items-start"
              >
                <div className="flex md:flex-col md:items-end items-center gap-4 mb-2 md:mb-0">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-display font-bold text-lg sm:text-xl flex-shrink-0 relative z-10 border-4 border-background"
                    style={{
                      background: `${study.accentColor}15`,
                      color: study.accentColor,
                    }}
                  >
                    {phase.phase}
                  </div>
                  <div className="md:text-right text-center md:text-right">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Duration
                    </p>
                    <p className="text-sm font-semibold">{phase.duration}</p>
                  </div>
                </div>
                <div className="md:pl-0">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Results({ study }: { study: CaseStudy }) {
  return (
    <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Results"
          title="Outcomes that matter"
          description="Beautiful design is the price of entry. The real measure is whether it moved the business. Here's what changed after launch."
          accent={study.accentColor}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {study.results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card text-center hover:border-[#592DB5]/40 transition-all"
            >
              <TrendingUp
                className="w-6 h-6 mx-auto mb-4"
                style={{ color: study.accentColor }}
              />
              <p
                className="text-3xl sm:text-4xl font-display font-bold mb-2"
                style={{ color: study.accentColor }}
              >
                {result.value}
              </p>
              <p className="text-sm font-semibold mb-2">{result.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonial({ study }: { study: CaseStudy }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16"
          style={{
            background: `linear-gradient(135deg, ${study.accentColor}08, ${study.accentColor}03)`,
          }}
        >
          <Quote
            className="w-12 h-12 mb-6"
            style={{ color: `${study.accentColor}40` }}
          />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium leading-relaxed mb-8 text-foreground">
            &ldquo;{study.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ background: study.accentColor }}
            >
              {study.testimonial.avatar}
            </div>
            <div>
              <p className="font-display font-semibold">{study.testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function NextCaseStudy({ study }: { study: CaseStudy }) {
  const { navigate } = useRouter()
  const next = getNextCaseStudy(study.slug)
  if (!next) return null

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => navigate(next.route as PageRoute)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="group w-full text-left"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Next Case Study
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src={next.image}
                  alt={next.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest text-white mb-2"
                  style={{ background: next.accentColor }}
                >
                  {next.category}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-2 group-hover:text-[#592DB5] transition-colors">
                  {next.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  {next.tagline}
                </p>
              </div>
            </div>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:translate-x-2 transition-transform"
              style={{ background: `${next.accentColor}15` }}
            >
              <ArrowRight
                className="w-6 h-6"
                style={{ color: next.accentColor }}
              />
            </div>
          </div>
        </motion.button>
      </div>
    </section>
  )
}

interface CaseStudyDetailPageProps {
  route: PageRoute
}

export default function CaseStudyDetailPage({ route }: CaseStudyDetailPageProps) {
  const study = getCaseStudyByRoute(route)

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold mb-2">Case study not found</h1>
            <p className="text-muted-foreground">The case study you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">
        <CaseStudyHero study={study} />
        <HeroImage study={study} />
        <Overview study={study} />
        <Challenge study={study} />
        <Solution study={study} />
        <Features study={study} />
        <Process study={study} />
        <Results study={study} />
        <Testimonial study={study} />
        <NextCaseStudy study={study} />
        <PageCTA
          title="Inspired by what you see?"
          subtitle="Let's create the next case study together. Book a discovery call and let's talk about your project."
          buttonText="Start Your Project"
        />
      </main>
      <Footer />
    </div>
  )
}
