'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/lib/animations'

const testimonials = [
  {
    quote: 'Astra Studio transformed our entire product experience. Their strategic approach to design didn\'t just make things look better — it fundamentally changed how our users interact with our platform.',
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'FinFlow',
    rating: 5,
  },
  {
    quote: 'Working with Astra was a game-changer. They took our complex healthcare workflows and made them feel effortless. Our clinicians actually enjoy using the system now.',
    author: 'Dr. Michael Torres',
    role: 'CTO',
    company: 'MedSync',
    rating: 5,
  },
  {
    quote: 'The team at Astra doesn\'t just design interfaces — they architect experiences. Our AI platform went from confusing to indispensable, and our user retention proves it.',
    author: 'Elena Volkov',
    role: 'VP Product',
    company: 'NeuralOps',
    rating: 5,
  },
  {
    quote: 'I\'ve worked with many agencies. Astra is the first one that truly understood our enterprise needs while maintaining a consumer-grade design standard. Exceptional work.',
    author: 'James Mitchell',
    role: 'Head of Design',
    company: 'ScaleGrid',
    rating: 5,
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
  }),
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent-warm)] opacity-[0.03] blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-cool)] opacity-[0.03] blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[var(--accent-warm)] font-medium uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Trusted by the Best
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our clients don&apos;t just hire us — they partner with us. Here&apos;s what they have to say.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 200, damping: 25 },
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="text-center absolute inset-0"
              >
                {/* Quote icon with animation */}
                <motion.div
                  className="flex justify-center mb-8"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-warm)]/10 to-[var(--accent-cool)]/10 flex items-center justify-center">
                    <Quote className="h-7 w-7 text-[var(--accent-warm)]" />
                  </div>
                </motion.div>

                {/* Stars with stagger */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.08, type: 'spring' }}
                    >
                      <Star className="h-4 w-4 fill-[var(--accent-warm)] text-[var(--accent-warm)]" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text with word reveal */}
                <motion.blockquote
                  className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </motion.blockquote>

                {/* Author with slide-in */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="font-semibold text-lg">{testimonials[current].author}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border hover:bg-accent/50 hover:border-[var(--accent-warm)]/30 transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`relative h-2 rounded-full transition-all duration-500 ${
                    i === current
                      ? 'w-10 bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-cool)]'
                      : 'w-2 bg-border hover:bg-muted-foreground/30'
                  }`}
                >
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-cool)]"
                      layoutId="testimonial-indicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border hover:bg-accent/50 hover:border-[var(--accent-warm)]/30 transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
