'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/lib/animations'
import { useRouter, type PageRoute } from '@/hooks/use-router'

interface ServiceItem {
  title: string
  titleBreak?: string
  description: string
  serviceList: string
  route: PageRoute
  images: string[]
}

const services: ServiceItem[] = [
  {
    title: 'UI/UX',
    titleBreak: 'Design',
    description: 'When it comes to UI/UX design, we create experiences that are simple to navigate. Our goal is to deliver user-friendly interactions that align with your brand and fulfill user needs.',
    serviceList: 'UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.',
    route: 'product-design',
    images: ['/images/service-uiux-1.png', '/images/service-uiux-2.png'],
  },
  {
    title: 'Web',
    titleBreak: 'Development',
    description: 'We build robust, scalable, and visually appealing web solutions that combine powerful functionality with stunning design to deliver exceptional user experiences.',
    serviceList: 'Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.',
    route: 'product-design',
    images: ['/images/service-webdev-1.png', '/images/service-webdev-2.png'],
  },
  {
    title: 'Logo &',
    titleBreak: 'Branding',
    description: 'Create distinctive logos and cohesive brand identities that reflect your company\'s essence with our advanced logo and branding services that help you connect with your target audience.',
    serviceList: 'Logo Design, Full Branding, Business Branding, 3D Logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.',
    route: 'product-design',
    images: ['/images/service-branding-1.png', '/images/service-branding-2.png'],
  },
  {
    title: 'Webflow &',
    titleBreak: 'Framer',
    description: 'We create visually appealing and user-friendly websites that offer flawless navigation, optimized performance, and a strong connection to your brand\'s identity using modern no-code tools.',
    serviceList: 'Custom Webflow Websites, Webflow Plugin, Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.',
    route: 'product-design',
    images: ['/images/service-webflow-1.png', '/images/service-webflow-2.png'],
  },
  {
    title: 'SaaS',
    titleBreak: 'Design',
    description: 'We focus on designing user-friendly and high-performing SaaS products that streamline workflows and enhance user satisfaction. We ensure a smooth journey from start to finish.',
    serviceList: 'SaaS Product Strategy, UI/UX Design for SaaS, Dashboard & Admin Panel, Usability Testing, Onboarding Experience, Design System Creation.',
    route: 'saas-design',
    images: ['/images/service-saas-1.png', '/images/service-saas-2.png'],
  },
]

function ServiceCard({
  service,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  service: ServiceItem
  index: number
  isActive: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const { navigate } = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => navigate(service.route)}
      className={`group cursor-pointer py-6 ${index < services.length - 1 ? 'border-b border-border/30' : ''}` }
    >
      {/* Service Title */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-display transition-colors duration-300 ${
          isActive ? 'text-foreground' : 'text-muted-foreground'
        }`}>
          {service.title}{' '}
          <span className="bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
            {service.titleBreak}
          </span>
        </h3>

        {/* Hover arrow indicator */}
        <motion.div
          className="flex-shrink-0 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center mt-1 transition-all duration-300"
          animate={isActive ? {
            backgroundColor: 'rgba(89, 45, 181, 0.15)',
            borderColor: 'rgba(119, 61, 242, 0.4)',
          } : {}}
        >
          <motion.div
            animate={isActive ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className={`h-4 w-4 transition-colors duration-300 ${isActive ? 'text-[#773DF2]' : 'text-muted-foreground'}`} />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient divider line */}
      <motion.div
        className="h-px mb-4 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
        style={{
          background: 'linear-gradient(90deg, #592DB5, #773DF2, transparent)',
        }}
      />

      {/* Description text */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {service.description}
            </p>

            {/* Comma-separated service list */}
            <p className="text-sm text-foreground/70 leading-relaxed mb-4">
              {service.serviceList}
            </p>

            {/* See More link */}
            <motion.span
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#773DF2] hover:text-[#592DB5] transition-colors cursor-pointer"
              whileHover={{ x: 4 }}
            >
              See More
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ServiceImages({ activeIndex }: { activeIndex: number }) {
  const service = services[activeIndex]

  return (
    <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 flex flex-col gap-4"
        >
          {/* Main large image */}
          <div className="flex-1 relative rounded-xl overflow-hidden border border-border/20 bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-[#592DB5]/5 to-[#773DF2]/5 z-10" />
            <motion.img
              src={service.images[0]}
              alt={`${service.title} ${service.titleBreak} - Project showcase`}
              className="w-full h-full object-cover object-top"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Secondary image row */}
          <div className="flex gap-4 h-1/3">
            <div className="flex-1 relative rounded-xl overflow-hidden border border-border/20 bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-[#592DB5]/5 to-[#773DF2]/5 z-10" />
              <motion.img
                src={service.images[1]}
                alt={`${service.title} ${service.titleBreak} - Additional work`}
                className="w-full h-full object-cover object-top"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            </div>

            {/* Stats card */}
            <div className="w-1/3 rounded-xl border border-border/20 bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 flex flex-col items-center justify-center p-4">
              <motion.span
                className="text-3xl md:text-4xl font-bold font-display bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {activeIndex === 0 ? '200+' : activeIndex === 1 ? '150+' : activeIndex === 2 ? '180+' : activeIndex === 3 ? '120+' : '100+'}
              </motion.span>
              <span className="text-xs text-muted-foreground mt-1 text-center">Projects Delivered</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function Services() {
  const [activeService, setActiveService] = useState(0)
  const { navigate } = useRouter()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - designmonks.co style */}
        <AnimatedSection className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              {/* "What We Do" tag/badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-[#592DB5]/10 border border-[#592DB5]/20 mb-4"
              >
                <span className="text-xs font-medium text-[#773DF2] uppercase tracking-widest">
                  What We Do
                </span>
              </motion.div>

              {/* Main heading with italic emphasis words */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display">
                We Design{' '}
                <em className="not-italic bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
                  Brands
                </em>{' '}
                That{' '}
                <em className="not-italic bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
                  Speak
                </em>{' '}
                to Audiences
              </h2>
            </div>

            {/* Book a Call button (desktop) */}
            <motion.button
              onClick={() => navigate('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white font-semibold text-sm hover:shadow-[0_0_40px_#592DB540] transition-all duration-500 flex-shrink-0"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Two-column layout - designmonks.co style */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left column - Service list */}
          <div className="w-full lg:w-[42%] flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              {services.map((service, i) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={i}
                  isActive={activeService === i}
                  onHover={() => setActiveService(i)}
                  onLeave={() => {}}
                />
              ))}
            </div>
          </div>

          {/* Right column - Image showcase */}
          <div className="w-full lg:flex-1">
            <div className="lg:sticky lg:top-28">
              <ServiceImages activeIndex={activeService} />
            </div>
          </div>
        </div>

        {/* Mobile Book a Call button */}
        <AnimatedSection className="text-center mt-12 md:mt-16 lg:hidden">
          <motion.button
            onClick={() => navigate('contact')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white font-semibold text-base hover:shadow-[0_0_40px_#592DB540] transition-all duration-500"
          >
            Book a Call
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  )
}
