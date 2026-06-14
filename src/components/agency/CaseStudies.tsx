'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/lib/animations'
import { useRouter, type PageRoute } from '@/hooks/use-router'

interface CaseStudy {
  title: string
  description: string
  category: string
  metrics: { label: string; value: string }[]
  client: { name: string; role: string; avatar: string }
  image: string
  bgColor: string
  tagColor: string
  route: PageRoute
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Easy Booking for Dream Trips',
    description: 'Triply is a hassle-free & effective tour solution for travelers. It\'s an all-inclusive booking and planning website that helps people make their dream trips easier.',
    category: 'Travel',
    metrics: [
      { label: 'Pages in Projects', value: '40+' },
      { label: 'Retention Growth', value: '36%' },
    ],
    client: { name: 'Shubho Al-Faroque', role: 'Triply CEO', avatar: 'SA' },
    image: '/images/case-travel.jpg',
    bgColor: 'bg-[#C6CFFF]',
    tagColor: 'text-[#1a1a2e]',
    route: 'case-studies',
  },
  {
    title: 'Transform Your Dining',
    description: 'At Plate, we bring you a handpicked selection of premium restaurants that offer not just meals, but memorable dining experiences you\'ll cherish.',
    category: 'Restaurant',
    metrics: [
      { label: 'Location', value: 'France' },
      { label: 'Project Duration', value: '5 Months' },
    ],
    client: { name: 'Neil Saidi', role: 'Plate CEO', avatar: 'NS' },
    image: '/images/case-restaurant.png',
    bgColor: 'bg-[#FFB8B0]',
    tagColor: 'text-[#1a1a2e]',
    route: 'case-studies',
  },
  {
    title: 'Reducing Carbon Footprints',
    description: 'Yenex is a smart and sustainable energy platform. It empowers users with distributed energy solutions to reduce carbon footprints effortlessly.',
    category: 'SaaS',
    metrics: [
      { label: 'Project Timeline', value: '2.5 Months' },
      { label: 'Customer Acquisition', value: '40%' },
    ],
    client: { name: 'Ted Nash', role: 'Yenex CEO', avatar: 'TN' },
    image: '/images/case-saas.png',
    bgColor: 'bg-[#FBE8A4]',
    tagColor: 'text-[#1a1a2e]',
    route: 'case-studies',
  },
  {
    title: 'Revolutionize Fitness Goals',
    description: 'Fitmate transforms fitness in Australia with flexible gym access, personalized schedules, and AI-driven insights to solve common workout limitations for users.',
    category: 'Healthcare',
    metrics: [
      { label: 'Project Scope', value: 'Mobile App' },
      { label: 'Project Duration', value: '2 Months' },
    ],
    client: { name: 'Omar', role: 'Fitmate CEO', avatar: 'OM' },
    image: '/images/case-healthcare.png',
    bgColor: 'bg-[#ABF5FF]',
    tagColor: 'text-[#1a1a2e]',
    route: 'case-studies',
  },
  {
    title: 'Simplifying Vehicle Care',
    description: 'Zantrik is an innovative vehicle maintenance app. We revamped it with a fresh design, gamification, and intuitive features to boost user engagement.',
    category: 'Automotive',
    metrics: [
      { label: 'Project Duration', value: '8 Weeks' },
      { label: 'Work Scope', value: 'Mobile App' },
    ],
    client: { name: 'Shubho Al-Farooque', role: 'Zantrik CEO', avatar: 'SA' },
    image: '/images/case-vehicle.png',
    bgColor: 'bg-[#C9FFF7]',
    tagColor: 'text-[#1a1a2e]',
    route: 'case-studies',
  },
]

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { navigate } = useRouter()
  const isReversed = index % 2 === 1 // Alternate layout on odd cards

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => navigate(study.route)}
      className="cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.005 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
        className={`group rounded-2xl ${study.bgColor} overflow-hidden flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0`}
      >
        {/* Text Content */}
        <div className="flex-1 p-5 sm:p-7 md:p-8 flex flex-col justify-between">
          {/* Top: Tag, Title, Description */}
          <div>
            {/* Industry tag */}
            <h3 className={`text-lg sm:text-xl font-bold ${study.tagColor} mb-2`}>
              {study.category}
            </h3>

            {/* Title */}
            <h4 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] font-display mb-2 leading-tight">
              {study.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-[#555] leading-relaxed mb-5">
              {study.description}
            </p>

            {/* Statistics - two columns */}
            <div className="flex gap-6 sm:gap-10 mb-5">
              {study.metrics.map((metric, i) => (
                <div key={i}>
                  <p className="text-xs sm:text-sm text-[#777] mb-1">{metric.label}</p>
                  <div className="text-xl sm:text-2xl font-bold text-[#0a0a0a] font-display">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Author + View Project */}
          <div className="flex items-center justify-between pt-4 border-t border-[#00000015]">
            <div className="flex items-center gap-3">
              {/* Author avatar */}
              <div className="w-10 h-10 rounded-full bg-[#00000015] flex items-center justify-center">
                <span className="text-xs font-bold text-[#0a0a0a]">{study.client.avatar}</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0a0a0a]">{study.client.name}</div>
                <div className="text-xs text-[#777]">{study.client.role}</div>
              </div>
            </div>

            {/* View Project button */}
            <div className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] group-hover:gap-3 transition-all duration-300">
              View Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-[45%] lg:w-[42%] flex-shrink-0 relative">
          <div className="h-56 sm:h-64 md:min-h-[380px] md:h-full overflow-hidden">
            <motion.img
              src={study.image}
              alt={`${study.title} - ${study.category} project showcase`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Subtle overlay */}
          <div className={`absolute inset-0 ${isReversed ? 'bg-gradient-to-r from-transparent to-[#00000008]' : 'bg-gradient-to-l from-transparent to-[#00000008]'}`} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function CaseStudies() {
  const { navigate } = useRouter()

  return (
    <section id="work" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - designmonks.co style */}
        <AnimatedSection className="mb-12 md:mb-16">
          {/* "Industry Wins" badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-[#592DB5]/10 border border-[#592DB5]/20 mb-4"
          >
            <span className="text-xs font-medium text-[#773DF2] uppercase tracking-widest">
              Industry Wins
            </span>
          </motion.div>

          {/* Main heading with emphasis */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display">
            Proven Success in{' '}
            <em className="not-italic bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
              Every Industry
            </em>
          </h2>
        </AnimatedSection>

        {/* Case Study Cards - stacked vertically */}
        <div className="flex flex-col gap-8 md:gap-12">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} />
          ))}
        </div>

        {/* See All Projects button */}
        <AnimatedSection className="text-center mt-8 md:mt-12">
          <motion.button
            onClick={() => navigate('case-studies')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white font-semibold text-base hover:shadow-[0_0_40px_#592DB540] transition-all duration-500"
          >
            See All Projects
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  )
}
