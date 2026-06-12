'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Sparkles, Eye, Zap, PenTool, Rocket, Image, MessageSquare,
  Check, Wand2, Layout, Search, Lightbulb
} from 'lucide-react'
import { AnimatedSection } from '@/lib/animations'

// First row cards (from Monk.png)
const firstRowCards = [
  {
    icon: MessageSquare,
    title: 'UX Copy That Clicks',
    description: 'We use AI to create effective copies like CTAs and microcopy that speaks.',
    type: 'input' as const,
    inputPlaceholder: 'Smarter UX Writing...',
    buttonText: 'Generate',
  },
  {
    icon: Image,
    title: 'Visuals, Instantly on Point',
    description: 'We generate custom visuals using AI for faster concept directions, brand-ready',
    type: 'tools' as const,
    tools: [
      { name: 'Midjourney', icon: '🎨' },
      { name: 'RunwayML', icon: '🎬' },
      { name: 'Ideogram', icon: '✨' },
    ],
  },
  {
    icon: Eye,
    title: 'Data-Led Design Decisions',
    description: 'We predict user behavior before launch with AI-powered heatmaps that help us',
    type: 'chart' as const,
  },
]

// Second row cards (from Monk 1.png)
const secondRowCards = [
  {
    icon: PenTool,
    title: 'Smarter & Faster Wireframes',
    description: 'We rapidly turn ideas into functional wireframes using AI tools, with less',
    type: 'features' as const,
    features: [
      { name: 'Visily', sub: 'Design wireframes with ease', icon: Layout },
      { name: 'Uizard', sub: 'Ideas into wireframes instantly', icon: Zap },
    ],
  },
  {
    icon: Rocket,
    title: 'Launch Quicker, Spend Less',
    description: 'AI reduces revisions and guesswork and makes your website ready to launch',
    type: 'metrics' as const,
  },
  {
    icon: Lightbulb,
    title: 'No Blank Canvas Struggles',
    description: 'AI generates editable mockups from prompts so we can skip the slow start',
    type: 'prompt' as const,
    promptText: 'Create a kid wearing space helmet!',
    buttonText: 'Generate',
  },
]

function AICard({ card, index }: { card: typeof firstRowCards[0] | typeof secondRowCards[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        className="relative rounded-2xl border border-purple-500/20 bg-[#1A0B2E] p-6 md:p-8 h-full overflow-hidden"
        style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center mb-5"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <card.icon className="h-6 w-6 text-purple-400" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
          {card.description}
        </p>

        {/* Interactive card content based on type */}
        <CardContent card={card} />

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/60 to-violet-500/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      </motion.div>
    </motion.div>
  )
}

function CardContent({ card }: { card: typeof firstRowCards[0] | typeof secondRowCards[0] }) {
  if (card.type === 'input') {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-9 h-9 rounded-full bg-purple-500/15 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-purple-400" />
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-[#2A1B3E] border border-purple-500/15 rounded-lg px-3 py-2.5 text-sm text-white/50">
            {card.inputPlaceholder}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-semibold flex items-center gap-1.5"
          >
            <Wand2 className="h-4 w-4" />
            {card.buttonText}
          </motion.button>
        </div>
      </div>
    )
  }

  if (card.type === 'tools') {
    return (
      <div className="space-y-2.5">
        {card.tools?.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 bg-[#2A1B3E] rounded-lg px-4 py-3"
          >
            <span className="text-lg">{tool.icon}</span>
            <span className="text-sm text-white/80 font-medium">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    )
  }

  if (card.type === 'chart') {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 bg-[#2A1B3E] rounded-lg px-4 py-3">
          <Eye className="h-5 w-5 text-purple-400" />
          <span className="text-sm text-white/80 font-medium">Attention Insight</span>
        </div>
        {/* Bar chart visualization */}
        <div className="flex items-end gap-1.5 h-16 px-2">
          {[35, 50, 70, 90, 100, 85, 60, 40].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex-1 bg-gradient-to-t from-purple-600 to-violet-400 rounded-sm min-w-0"
            />
          ))}
        </div>
      </div>
    )
  }

  if (card.type === 'features') {
    return (
      <div className="space-y-3">
        {card.features?.map((feature, i) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3 bg-[#2A1B3E] rounded-lg px-4 py-3"
          >
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <feature.icon className="h-4 w-4 text-purple-400" />
            </div>
            <div>
              <div className="text-sm text-white font-medium">{feature.name}</div>
              <div className="text-xs text-white/50">{feature.sub}</div>
            </div>
            <Check className="h-4 w-4 text-purple-400 ml-auto" />
          </motion.div>
        ))}
      </div>
    )
  }

  if (card.type === 'metrics') {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {[
            { icon: Rocket, label: 'Fast Launch' },
            { icon: Check, label: 'Less Revisions' },
            { icon: Search, label: 'No Guesswork' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/15 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-purple-400" />
              </div>
              <span className="text-[10px] text-white/50 text-center">{item.label}</span>
            </motion.div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="bg-[#2A1B3E] rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/50">Time Saved</span>
            <span className="text-xs text-purple-400 font-semibold">68%</span>
          </div>
          <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '68%' }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full bg-gradient-to-r from-purple-600 to-violet-400 rounded-full"
            />
          </div>
        </div>
      </div>
    )
  }

  if (card.type === 'prompt') {
    return (
      <div className="space-y-3">
        {/* AI avatar placeholder */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/20 flex items-center justify-center overflow-hidden">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/30 to-violet-500/30 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-purple-500/10 border border-purple-500/20 rounded-lg px-3 py-2.5 text-sm text-white/70">
            {card.promptText}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-semibold flex items-center gap-1.5"
          >
            <Wand2 className="h-4 w-4" />
            {card.buttonText}
          </motion.button>
        </div>
      </div>
    )
  }

  return null
}

export function AIPoweredDesign() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark purple background for the entire section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0D0520] to-background" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[200px] rounded-full" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/3 blur-[150px] rounded-full" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          {/* AI-Powered Design badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/15 border border-emerald-500/20 mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">AI-Powered Design</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Smarter Design,{' '}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Supercharged
            </span>{' '}
            by AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            From wireframes to launch, we blend AI tools with strategy to deliver faster,
            sharper, and data-led design results.
          </motion.p>
        </AnimatedSection>

        {/* First row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-5 md:mb-6">
          {firstRowCards.map((card, i) => (
            <AICard key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* Central decorative element between rows */}
        <div className="flex items-center justify-center py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="relative"
          >
            {/* Glowing central icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center"
              style={{ boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.15)' }}
            >
              <Sparkles className="h-9 w-9 text-white" />
            </div>

            {/* Connection dots */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500/40" />
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-purple-500/15" />
          </motion.div>
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {secondRowCards.map((card, i) => (
            <AICard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
