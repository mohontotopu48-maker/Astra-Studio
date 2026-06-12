'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Phone, Star, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const heroStats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '4.9', label: 'Average Rating' },
  { value: '12', label: 'Design Awards' },
]

const trustedLogos = [
  'Google', 'Microsoft', 'Stripe', 'Spotify', 'Notion', 'Figma', 'Shopify', 'Airbnb',
]

// Animated text reveal word by word
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ')
  
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0, rotateX: 40 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + wordIndex * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// Particle field for hero background
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles - fewer, more subtle
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.05,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(119, 61, 242, ${p.opacity * 0.3})`
        ctx.fill()

        // Draw connections
        particles.forEach((p2, j) => {
          if (i === j) return
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(119, 61, 242, ${0.02 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40"
    />
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <ParticleField />

      {/* Animated mesh gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      {/* Floating orbs with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#592DB5] opacity-[0.06] blur-[120px]"
      >
        <motion.div
          className="w-full h-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#773DF2] opacity-[0.04] blur-[150px]"
      >
        <motion.div
          className="w-full h-full"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/50 bg-surface/50 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold gradient-text">4.9</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#773DF2] text-[#773DF2]" />
                  ))}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                Leading UI/UX Design Agency
              </span>
            </div>
            
            {/* Countries badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 backdrop-blur-sm border border-border/30"
            >
              <span className="text-xs">🌍</span>
              <span className="text-xs text-muted-foreground">Designing across 8+ countries</span>
            </motion.div>
          </motion.div>

          {/* Main Headline - 2 lines */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6 font-display">
            <AnimatedText text="We Design Products" delay={2.4} />
            <br />
            <span className="hero-gradient-text">
              <AnimatedText text="That Drive Results" delay={3.0} />
            </span>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Astra Studio is a premium design agency that transforms complex ideas into
            elegant, conversion-focused digital experiences for the world&apos;s leading brands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.0, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <MagneticButton>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white border-0 hover:shadow-[0_0_40px_#592DB540] transition-all duration-500 rounded-full px-8 text-base group relative overflow-hidden h-[50px]"
              >
                <a href="#contact">
                  <span className="relative z-10 flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Book a Call
                  </span>
                  {/* Shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'linear' }}
                  />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base border-border hover:bg-accent/50 hover:border-[#592DB5]/30 transition-all duration-300 h-[50px]"
              >
                <a href="#work">View Our Work</a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trusted by logos marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.3 }}
            className="mb-12"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Trusted by 200+ of the world&apos;s top brands
            </p>
            <div className="relative overflow-hidden max-w-3xl mx-auto">
              {/* Edge fade gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
              
              <div className="flex animate-marquee whitespace-nowrap">
                {[...trustedLogos, ...trustedLogos].map((logo, i) => (
                  <span
                    key={i}
                    className="mx-8 text-lg font-semibold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300 cursor-default"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats with stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 4.6 + i * 0.12,
                  ease: [0.76, 0, 0.24, 1],
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 font-display">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.2, duration: 1 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

// Magnetic button wrapper
function MagneticButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
