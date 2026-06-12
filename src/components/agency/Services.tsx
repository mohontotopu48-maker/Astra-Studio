'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Layers, Palette, Smartphone, BarChart3, PenTool, LayoutGrid,
  Shield, Figma, RefreshCw, ArrowRight, Monitor, Smartphone as Mobile,
  Globe, Zap, ChevronRight, Check
} from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'

const services = [
  {
    icon: Layers,
    title: 'UI/UX Design',
    subtitle: 'Creating user-friendly digital experiences.',
    description: 'When it comes to UI/UX design, we create experiences that are simple to navigate. Our goal is to deliver user-friendly interactions that align with your brand and fulfill user needs.',
    items: [
      { label: 'UI/UX Design', value: 'Visual UI Design' },
      { label: 'User Research', value: 'Usability Testing' },
      { label: 'Wireframe & Prototyping', value: 'Interaction Design' },
    ],
    gradient: 'from-[#592DB5]/90 to-[#773DF2]/90',
    accentLight: 'bg-[#592DB5]/10',
    accentColor: 'text-[#773DF2]',
    accentBorder: 'border-[#592DB5]/20',
    tools: ['Figma', 'XD', 'Sketch', 'Principle'],
    image: '/services-uiux.svg',
  },
  {
    icon: Palette,
    title: 'Logo & Branding',
    subtitle: 'Creating memorable identities for brands.',
    description: 'Create distinctive logos and cohesive brand identities that reflect your company\'s essence with our advanced logo and branding services that help you connect with your target audience.',
    items: [
      { label: 'Custom Logo Design', value: 'Brand Identity Development' },
      { label: 'Brand Guidelines & Strategy', value: 'Typography & Color Palette' },
      { label: 'Marketing Collateral', value: 'Social Media Branding' },
    ],
    gradient: 'from-[#773DF2]/90 to-[#592DB5]/90',
    accentLight: 'bg-[#773DF2]/10',
    accentColor: 'text-[#773DF2]',
    accentBorder: 'border-[#773DF2]/20',
    tools: ['Illustrator', 'Photoshop', 'Figma', 'After Effects'],
    image: '/services-branding.svg',
  },
  {
    icon: Globe,
    title: 'Web Design',
    subtitle: 'Building visually appealing & functional websites.',
    description: 'We create visually appealing and user-friendly websites that offer flawless navigation, optimized performance, and a strong connection to your brand\'s identity.',
    items: [
      { label: 'Responsive Web Design', value: 'UI/UX Design' },
      { label: 'E-commerce Website', value: 'Figma Sites Development' },
      { label: 'CMS Integration', value: 'Landing Page Design' },
    ],
    gradient: 'from-[#592DB5]/80 to-[#9B6BF5]/90',
    accentLight: 'bg-[#592DB5]/10',
    accentColor: 'text-[#592DB5]',
    accentBorder: 'border-[#592DB5]/20',
    tools: ['Figma', 'Webflow', 'Framer', 'WordPress'],
    image: '/services-web.svg',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    subtitle: 'Intuitive interfaces for every device.',
    description: 'We design mobile experiences that are simple to use and visually appealing. Our design ensures smoother performance and maximum value for users on every device.',
    items: [
      { label: 'App Concept & Strategy', value: 'UI/UX for Mobile' },
      { label: 'Interaction Design', value: 'Mobile Prototyping' },
      { label: 'Responsive Design', value: 'App Screenshot Service' },
    ],
    gradient: 'from-[#773DF2]/80 to-[#B68DF7]/90',
    accentLight: 'bg-[#773DF2]/10',
    accentColor: 'text-[#773DF2]',
    accentBorder: 'border-[#773DF2]/20',
    tools: ['Figma', 'ProtoPie', 'Principle', 'InVision'],
    image: '/services-mobile.svg',
  },
  {
    icon: BarChart3,
    title: 'SaaS Design',
    subtitle: 'Intuitive interfaces that boost user engagement.',
    description: 'We focus on designing user-friendly and high-performing SaaS products that streamline workflows and enhance user satisfaction. We ensure a smooth journey from start to finish.',
    items: [
      { label: 'SaaS Product Strategy', value: 'UI/UX Design for SaaS' },
      { label: 'Dashboard & Admin Panel', value: 'Usability Testing' },
      { label: 'Onboarding Experience', value: 'Design System Creation' },
    ],
    gradient: 'from-[#4520A0]/90 to-[#592DB5]/90',
    accentLight: 'bg-[#4520A0]/10',
    accentColor: 'text-[#592DB5]',
    accentBorder: 'border-[#4520A0]/20',
    tools: ['Figma', 'Mixpanel', 'Hotjar', 'Dovetail'],
    image: '/services-saas.svg',
  },
  {
    icon: Shield,
    title: 'UX Audit',
    subtitle: 'Comprehensive usability analysis for growth.',
    description: 'Comprehensive usability analysis that identifies friction points and reveals growth opportunities. We analyze your product end-to-end and provide actionable recommendations.',
    items: [
      { label: 'Heuristic Evaluation', value: 'User Flow Analysis' },
      { label: 'Accessibility Audit', value: 'Performance Review' },
      { label: 'Competitive Analysis', value: 'Actionable Report' },
    ],
    gradient: 'from-[#592DB5]/90 to-[#4520A0]/90',
    accentLight: 'bg-[#592DB5]/10',
    accentColor: 'text-[#773DF2]',
    accentBorder: 'border-[#592DB5]/20',
    tools: ['Hotjar', 'Maze', 'Lighthouse', 'Axe'],
    image: '/services-audit.svg',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <StaggerItem>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden cursor-pointer"
      >
        {/* Image/gradient banner area */}
        <div className={`relative h-48 md:h-56 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 dot-pattern opacity-10" />
          
          {/* Animated shapes */}
          <motion.div
            className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10"
            animate={isHovered ? { scale: 1.2, rotate: 45 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <motion.div
            className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/5"
            animate={isHovered ? { scale: 1.3, x: 10 } : { scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Service icon and title on the banner */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
            <motion.div
              className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <service.icon className="h-6 w-6 text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-display">
              {service.title}
            </h3>
            <p className="text-white/70 text-sm">
              {service.subtitle}
            </p>
          </div>

          {/* Hover arrow */}
          <motion.div
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            animate={isHovered ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </motion.div>
        </div>

        {/* Content area */}
        <div className="p-6 md:p-8">
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Two-column service listing */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {service.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 text-sm group/item cursor-pointer"
              >
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0 group-hover/item:text-[#773DF2] group-hover/item:translate-x-0.5 transition-all duration-200" />
                <span className="text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tool icons row */}
          <div className="flex items-center gap-2 pt-4 border-t border-border/50">
            <span className="text-xs text-muted-foreground mr-2">Tools:</span>
            {service.tools.map((tool) => (
              <span
                key={tool}
                className={`text-xs px-2.5 py-1 rounded-full ${service.accentLight} ${service.accentColor} border ${service.accentBorder} font-medium`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
      </motion.div>
    </StaggerItem>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display">
            We Design Brands That{' '}
            <span className="gradient-text">Speak to Audiences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final delivery, we provide end-to-end design services
            that transform businesses and delight users.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-12 md:mt-16">
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
