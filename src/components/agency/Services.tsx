'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Layers, Palette, Globe, Smartphone, BarChart3,
  ArrowRight, ChevronRight, Code2, Globe2
} from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'
import { useRouter, type PageRoute } from '@/hooks/use-router'

const services: {
  icon: typeof Layers
  title: string
  subtitle: string
  description: string
  serviceList: string
  gradient: string
  route: PageRoute
}[] = [
  {
    icon: Layers,
    title: 'UI/UX Design',
    route: 'product-design',
    subtitle: 'Creating user-friendly digital experiences.',
    description: 'When it comes to UI/UX design, we create experiences that are simple to navigate. Our goal is to deliver user-friendly interactions that align with your brand and fulfill user needs.',
    serviceList: 'UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.',
    gradient: 'from-violet-600 to-purple-700',
  },
  {
    icon: Code2,
    title: 'Web Development',
    route: 'product-design',
    subtitle: 'Building visually appealing & functional websites.',
    description: 'Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.',
    serviceList: 'Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Palette,
    title: 'Logo & Branding',
    route: 'product-design',
    subtitle: 'Creating memorable identities for brands.',
    description: 'Create distinctive logos and cohesive brand identities that reflect your company\'s essence with our advanced logo and branding services that help you connect with your target audience.',
    serviceList: 'Logo Design, Full Branding, Business Branding, 3D Logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Globe2,
    title: 'Webflow & Framer',
    route: 'product-design',
    subtitle: 'Interactive web designs made simple.',
    description: 'We create visually appealing and user-friendly websites that offer flawless navigation, optimized performance, and a strong connection to your brand\'s identity using modern no-code tools.',
    serviceList: 'Custom Webflow Websites, Webflow Plugin, Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'SaaS Design',
    route: 'saas-design',
    subtitle: 'Intuitive interfaces that boost user engagement.',
    description: 'We focus on designing user-friendly and high-performing SaaS products that streamline workflows and enhance user satisfaction. We ensure a smooth journey from start to finish.',
    serviceList: 'SaaS Product Strategy, UI/UX Design for SaaS, Dashboard & Admin Panel, Usability Testing, Onboarding Experience, Design System Creation.',
    gradient: 'from-rose-500 to-pink-600',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { navigate } = useRouter()

  return (
    <StaggerItem>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(service.route)}
        className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden cursor-pointer"
      >
        {/* Gradient banner area - same as Design Monks */}
        <div className={`relative h-48 md:h-56 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 dot-pattern opacity-10" />

          {/* Animated decorative shapes */}
          <motion.div
            className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10"
            animate={isHovered ? { scale: 1.2, rotate: 45 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          />
          <motion.div
            className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/5"
            animate={isHovered ? { scale: 1.3, x: 10 } : { scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          />
          <motion.div
            className="absolute right-1/4 top-1/4 w-20 h-20 rounded-full bg-white/5"
            animate={isHovered ? { scale: 1.5, y: -10 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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

        {/* Content area - Design Monks style */}
        <div className="p-6 md:p-8">
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Comma-separated service list - same as Design Monks */}
          <p className="text-sm text-foreground/80 leading-relaxed mb-6">
            {service.serviceList}
          </p>

          {/* See More link - same as Design Monks */}
          <div className="flex items-center pt-4 border-t border-border/50">
            <motion.span
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#773DF2] hover:text-[#592DB5] transition-colors cursor-pointer group/see"
              whileHover={{ x: 4 }}
            >
              See More
              <ChevronRight className="h-4 w-4 group-hover/see:translate-x-1 transition-transform" />
            </motion.span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
      </motion.div>
    </StaggerItem>
  )
}

export function Services() {
  const { navigate } = useRouter()
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

        {/* Bottom CTA - Book a Call button */}
        <AnimatedSection className="text-center mt-12 md:mt-16">
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
