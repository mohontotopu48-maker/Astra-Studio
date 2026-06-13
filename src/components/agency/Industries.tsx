'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations'
import {
  Building2, Brain, HeartPulse, Landmark, Plane, UtensilsCrossed,
  Dumbbell, Shirt, Calendar, Clapperboard, Cpu, ShieldCheck,
  Truck, Globe, Code, Gavel, Leaf, Gamepad2, ShoppingBag, Droplet
} from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { useRouter, type PageRoute } from '@/hooks/use-router'

const industries: { icon: typeof Building2; title: string; description: string; route?: PageRoute }[] = [
  { icon: Building2, title: 'SaaS', description: 'Effective SaaS solutions that enhance usability, build trust, and drive subscription growth.', route: 'saas' },
  { icon: Landmark, title: 'Fintech', description: 'Regulatory-compliant financial interfaces that build trust and simplify complex transactions.', route: 'fintech' },
  { icon: Brain, title: 'AI & ML', description: 'AI-powered products that make complex data accessible and intelligent automation intuitive.', route: 'ai' },
  { icon: HeartPulse, title: 'Healthcare', description: 'HIPAA-aware healthcare interfaces that improve patient outcomes and streamline workflows.', route: 'healthcare' },
  { icon: Plane, title: 'Tourism', description: 'Smooth UX designs for tourism websites to simplify travel planning and inspire bookings.' },
  { icon: UtensilsCrossed, title: 'Food & Beverages', description: 'Smart designs for food platforms that simplify browsing, ordering, and delivery tracking.' },
  { icon: Dumbbell, title: 'Fitness & Gym', description: 'Intuitive design that encourages consistency and keeps users actively engaged.' },
  { icon: Shirt, title: 'Fashion & Apparel', description: 'Distinct digital experiences that combine aesthetics, usability, and smooth shopping journeys.' },
  { icon: Calendar, title: 'Event Management', description: 'Modern solutions for event platforms to enhance discovery, streamline booking, and drive engagement.' },
  { icon: Clapperboard, title: 'Entertainment', description: 'Personalized digital experiences to streamline access, boost retention, and delight every interaction.' },
  { icon: Cpu, title: 'Electronics', description: 'Modern design solutions that boost usability, increase retention, and drive consistent engagement.' },
  { icon: ShieldCheck, title: 'Insurance', description: 'Straightforward UI/UX for insurance businesses to simplify policies and increase customer trust.' },
  { icon: Truck, title: 'Logistics', description: 'Effective UI/UX that boosts efficiency, real-time tracking, and enhances user control.' },
  { icon: Gavel, title: 'Legal Services', description: 'Intuitive design that improves user confidence and streamlines document management.' },
  { icon: Code, title: 'IT Solutions', description: 'Innovative UI/UX strategies that boost productivity and keep users engaged.' },
  { icon: Gamepad2, title: 'Gaming', description: 'Gaming websites need seamless UX to captivate players and create unforgettable experiences.' },
  { icon: ShoppingBag, title: 'E-Commerce', description: 'Conversion-optimized shopping experiences that blend beauty with business results.' },
  { icon: Droplet, title: 'Mental Health', description: 'User-centered solutions that simplify appointments and create a safe digital space.' },
  { icon: Leaf, title: 'Sustainability', description: 'Design for eco-conscious platforms that educate, engage, and drive sustainable action.' },
  { icon: Globe, title: 'Education', description: 'Learning platforms that make education accessible, engaging, and effective for all.' },
]

const gradients = [
  'from-[#592DB5]/10 to-[#773DF2]/5',
  'from-[#773DF2]/10 to-[#592DB5]/5',
  'from-[#592DB5]/8 to-[#9B6BF5]/5',
  'from-[#9B6BF5]/10 to-[#592DB5]/5',
  'from-[#4520A0]/10 to-[#592DB5]/5',
  'from-[#592DB5]/10 to-[#B68DF7]/5',
  'from-[#773DF2]/8 to-[#4520A0]/5',
  'from-[#B68DF7]/10 to-[#773DF2]/5',
  'from-[#592DB5]/10 to-[#4520A0]/5',
  'from-[#773DF2]/10 to-[#9B6BF5]/5',
]

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const gradient = gradients[index % gradients.length]
  const { navigate } = useRouter()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        onClick={() => industry.route && navigate(industry.route)}
        className={`group relative rounded-xl border border-border/50 p-5 bg-gradient-to-br ${gradient} hover:border-border ${industry.route ? 'cursor-pointer' : ''} h-full overflow-hidden`}
      >
        {/* Icon */}
        <motion.div
          className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center mb-3"
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <industry.icon className="h-5 w-5 text-foreground" />
        </motion.div>

        <h3 className="text-sm font-semibold mb-1.5 group-hover:gradient-text transition-all duration-300">
          {industry.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {industry.description}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#592DB5] to-[#773DF2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </motion.div>
    </motion.div>
  )
}

export function Industries() {
  const [showAll, setShowAll] = useState(false)
  const displayedIndustries = showAll ? industries : industries.slice(0, 8)

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
            Our Expertise Across{' '}
            <span className="gradient-text">Diverse Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just design — we understand your industry. Deep domain
            knowledge means faster delivery and better outcomes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {displayedIndustries.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </div>

        {!showAll && industries.length > 8 && (
          <AnimatedSection className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent/50 hover:border-[#592DB5]/30 transition-all duration-300 text-sm font-medium"
            >
              See All Industries
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
