'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Layers, Palette, Smartphone, BarChart3, PenTool, LayoutGrid,
  Shield, Figma, RefreshCw
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'

const services = [
  { icon: Layers, title: 'Product Design', description: 'End-to-end product design that balances user needs with business goals. From research to pixel-perfect delivery.', category: 'UI/UX Design' },
  { icon: BarChart3, title: 'SaaS Design', description: 'Complex interfaces made simple. We design SaaS platforms that users love and that scale with your business.', category: 'UI/UX Design' },
  { icon: LayoutGrid, title: 'Dashboard Design', description: 'Data-rich dashboards that transform complex information into clear, actionable visual insights.', category: 'UI/UX Design' },
  { icon: Smartphone, title: 'Mobile App Design', description: 'Native mobile experiences crafted with platform-specific precision and cross-platform efficiency.', category: 'UI/UX Design' },
  { icon: Shield, title: 'UX Audit', description: 'Comprehensive usability analysis that identifies friction points and reveals growth opportunities.', category: 'UI/UX Design' },
  { icon: Figma, title: 'Design Systems', description: 'Scalable design systems that ensure consistency, accelerate development, and evolve with your product.', category: 'UI/UX Design' },
  { icon: PenTool, title: 'Brand Identity', description: 'Distinctive brand identities that capture your essence and resonate with your target audience.', category: 'Brand Design' },
  { icon: Palette, title: 'Logo Design', description: 'Memorable logos that embody your brand story and stand the test of time across every medium.', category: 'Brand Design' },
  { icon: RefreshCw, title: 'Rebranding', description: 'Strategic rebranding that refreshes your market position while honoring your brand heritage.', category: 'Brand Design' },
]

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
      {/* Glare effect */}
      <motion.div
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: useTransform(
            [glareX, glareY],
            ([latestX, latestY]) =>
              `radial-gradient(circle at ${latestX} ${latestY}, oklch(0.95 0 0 / 80%), transparent 60%)`
          ),
        }}
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
      />
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard className="h-full">
                <Card className="group relative overflow-hidden border-border/50 bg-surface hover:bg-surface-elevated hover:border-border transition-all duration-500 hover:shadow-xl h-full">
                  <CardContent className="p-6 md:p-8">
                    {/* Animated glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[var(--accent-warm)]/8 to-[var(--accent-cool)]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />

                    {/* Animated border glow */}
                    <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[var(--accent-warm)]/0 via-[var(--accent-warm)]/0 to-[var(--accent-cool)]/0 group-hover:from-[var(--accent-warm)]/20 group-hover:via-transparent group-hover:to-[var(--accent-cool)]/20 transition-all duration-700 -z-10 blur-sm" />

                    <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-warm)]/10 to-[var(--accent-cool)]/10 flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <service.icon className="h-5 w-5 text-[var(--accent-warm)]" />
                        </motion.div>
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
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
