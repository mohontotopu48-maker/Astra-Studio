'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/lib/animations'

const caseStudies = [
  {
    title: 'Easy Booking for Dream Trips',
    description: 'Triply is a hassle-free & effective tour solution for travelers. It\'s an all-inclusive booking and planning website that helps people make their dream trips easier.',
    category: 'Travel',
    metrics: [
      { label: 'Pages in Projects', value: '40+' },
      { label: 'Retention Growth', value: '36%' },
    ],
    client: { name: 'Shubho Al-Faroque', role: 'Triply CEO' },
    gradient: 'from-[#592DB5]/90 to-[#773DF2]/90',
    bgColor: 'bg-[#592DB5]',
    accentColor: 'text-[#773DF2]',
    iconBg: 'bg-[#592DB5]/10',
  },
  {
    title: 'Transform Your Dining',
    description: 'At Plate, we bring you a handpicked selection of premium restaurants that offer not just meals, but memorable dining experiences you\'ll cherish.',
    category: 'Restaurant',
    metrics: [
      { label: 'Location', value: 'France' },
      { label: 'Duration', value: '5 Months' },
    ],
    client: { name: 'Neil Saidi', role: 'Plate CEO' },
    gradient: 'from-[#773DF2]/90 to-[#592DB5]/90',
    bgColor: 'bg-[#773DF2]',
    accentColor: 'text-[#773DF2]',
    iconBg: 'bg-[#773DF2]/10',
  },
  {
    title: 'Reducing Carbon Footprints',
    description: 'Yenex is a smart and sustainable energy platform. It empowers users with distributed energy solutions to reduce carbon footprints effortlessly.',
    category: 'SaaS',
    metrics: [
      { label: 'Timeline', value: '2.5 Months' },
      { label: 'Customer Acquisition', value: '40%' },
    ],
    client: { name: 'Ted Nash', role: 'Yenex CEO' },
    gradient: 'from-[#592DB5]/80 to-[#9B6BF5]/90',
    bgColor: 'bg-[#9B6BF5]',
    accentColor: 'text-[#9B6BF5]',
    iconBg: 'bg-[#592DB5]/10',
  },
  {
    title: 'Revolutionize Fitness Goals',
    description: 'Fitmate transforms fitness in Australia with flexible gym access, personalized schedules, and AI-driven insights to solve common workout limitations for users.',
    category: 'Healthcare',
    metrics: [
      { label: 'Scope', value: 'Mobile App' },
      { label: 'Duration', value: '2 Months' },
    ],
    client: { name: 'Omar', role: 'Fitmate CEO' },
    gradient: 'from-[#4520A0]/90 to-[#592DB5]/90',
    bgColor: 'bg-[#4520A0]',
    accentColor: 'text-[#592DB5]',
    iconBg: 'bg-[#4520A0]/10',
  },
  {
    title: 'Simplifying Vehicle Care',
    description: 'Zantrik is an innovative vehicle maintenance app. We revamped it with a fresh design, gamification, and intuitive features to boost user engagement.',
    category: 'Vehicle',
    metrics: [
      { label: 'Duration', value: '8 Weeks' },
      { label: 'Scope', value: 'Mobile App' },
    ],
    client: { name: 'Shubho Al-Farooque', role: 'Zantrik CEO' },
    gradient: 'from-[#773DF2]/80 to-[#B68DF7]/90',
    bgColor: 'bg-[#773DF2]',
    accentColor: 'text-[#773DF2]',
    iconBg: 'bg-[#773DF2]/10',
  },
]

export function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollContainerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll)
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.8
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="work" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#592DB5] opacity-[0.03] blur-[200px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#773DF2] opacity-[0.03] blur-[200px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
            Industry Wins
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
            Proven Success in{' '}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses. Every project is a partnership
            built on trust and driven by measurable outcomes.
          </p>
        </AnimatedSection>

        {/* Horizontal scroll container */}
        <div className="relative">
          {/* Navigation arrows */}
          <div className="flex items-center justify-end gap-2 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-card hover:bg-accent hover:border-[#592DB5]/30 cursor-pointer'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'bg-card hover:bg-accent hover:border-[#592DB5]/30 cursor-pointer'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Scrollable area */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.title} study={study} index={i} />
            ))}
          </div>

          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
        </div>

        {/* See all projects link */}
        <AnimatedSection className="text-center mt-10">
          <motion.a
            href="#work"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#773DF2] hover:text-[#773DF2]/80 transition-colors"
          >
            See All Projects
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
}

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex-shrink-0 w-[340px] sm:w-[400px] snap-start"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
        className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden cursor-pointer h-full"
      >
        {/* Gradient banner */}
        <div className={`relative h-44 bg-gradient-to-br ${study.gradient} overflow-hidden`}>
          {/* Dot pattern */}
          <div className="absolute inset-0 dot-pattern opacity-10" />
          
          {/* Decorative circles */}
          <motion.div
            className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-white/5"
            whileHover={{ scale: 1.3 }}
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 text-xs font-medium px-3 py-1">
              {study.category}
            </Badge>
          </div>

          {/* Phone mockup placeholder */}
          <div className="absolute bottom-4 right-4 w-20 h-36 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <div className="w-14 h-28 rounded-lg bg-white/20" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-display mb-2 group-hover:gradient-text transition-all duration-300">
            {study.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {study.description}
          </p>

          {/* Metrics */}
          <div className="flex gap-4 mb-5">
            {study.metrics.map((metric, i) => (
              <div key={i}>
                <div className={`text-lg font-bold ${study.accentColor}`}>{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Client testimonial */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div className={`w-9 h-9 rounded-full ${study.iconBg} flex items-center justify-center`}>
              <span className="text-xs font-bold text-foreground/70">
                {study.client.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{study.client.name}</div>
              <div className="text-xs text-muted-foreground">{study.client.role}</div>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300 shrink-0"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${study.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
      </motion.div>
    </motion.div>
  )
}
