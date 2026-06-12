'use client'

import { motion } from 'framer-motion'
import {
  Layers, Palette, Smartphone, BarChart3, PenTool, LayoutGrid,
  Shield, Figma, RefreshCw
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'

const services = [
  {
    icon: Layers,
    title: 'Product Design',
    description: 'End-to-end product design that balances user needs with business goals. From research to pixel-perfect delivery.',
    category: 'UI/UX Design',
  },
  {
    icon: BarChart3,
    title: 'SaaS Design',
    description: 'Complex interfaces made simple. We design SaaS platforms that users love and that scale with your business.',
    category: 'UI/UX Design',
  },
  {
    icon: LayoutGrid,
    title: 'Dashboard Design',
    description: 'Data-rich dashboards that transform complex information into clear, actionable visual insights.',
    category: 'UI/UX Design',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    description: 'Native mobile experiences crafted with platform-specific precision and cross-platform efficiency.',
    category: 'UI/UX Design',
  },
  {
    icon: Shield,
    title: 'UX Audit',
    description: 'Comprehensive usability analysis that identifies friction points and reveals growth opportunities.',
    category: 'UI/UX Design',
  },
  {
    icon: Figma,
    title: 'Design Systems',
    description: 'Scalable design systems that ensure consistency, accelerate development, and evolve with your product.',
    category: 'UI/UX Design',
  },
  {
    icon: PenTool,
    title: 'Brand Identity',
    description: 'Distinctive brand identities that capture your essence and resonate with your target audience.',
    category: 'Brand Design',
  },
  {
    icon: Palette,
    title: 'Logo Design',
    description: 'Memorable logos that embody your brand story and stand the test of time across every medium.',
    category: 'Brand Design',
  },
  {
    icon: RefreshCw,
    title: 'Rebranding',
    description: 'Strategic rebranding that refreshes your market position while honoring your brand heritage.',
    category: 'Brand Design',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Design That Moves the Needle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final delivery, we provide end-to-end design services
            that transform businesses and delight users.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Card className="group relative overflow-hidden border-border/50 bg-surface hover:bg-surface-elevated hover:border-border transition-all duration-500 hover:shadow-lg h-full">
                <CardContent className="p-6 md:p-8">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-warm)]/5 to-[var(--accent-cool)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-warm)]/10 to-[var(--accent-cool)]/10 flex items-center justify-center group-hover:from-[var(--accent-warm)]/20 group-hover:to-[var(--accent-cool)]/20 transition-colors duration-500">
                        <service.icon className="h-5 w-5 text-[var(--accent-warm)]" />
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
