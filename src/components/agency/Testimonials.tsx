'use client'

import { useState } from 'react'
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

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface">
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
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-warm)]/10 to-[var(--accent-cool)]/10 flex items-center justify-center">
                    <Quote className="h-7 w-7 text-[var(--accent-warm)]" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--accent-warm)] text-[var(--accent-warm)]" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-semibold text-lg">{testimonials[current].author}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border hover:bg-accent/50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-[var(--accent-warm)]'
                        : 'bg-border hover:bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border hover:bg-accent/50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
