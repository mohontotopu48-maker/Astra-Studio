'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/lib/animations'

const testimonials = [
  {
    quote: 'We started with an MVP and needed a polished product. Astra Studio delivered with great communication, high-quality work, and quick iterations until everything felt right. Truly grateful and highly recommended.',
    author: 'Sebastian',
    role: 'Founder',
    company: 'Salesgo',
    rating: 5,
  },
  {
    quote: 'Working with Astra Studio was a fantastic experience. Their team was incredibly responsive, patient, and easy to work with throughout the entire process. They took the time to understand my ideas and delivered great work.',
    author: 'David',
    role: 'Founder',
    company: 'Externalize It',
    rating: 5,
  },
  {
    quote: 'Astra Studio did an amazing job bringing my brand to life. From the branding strategy to the logo, the team was professional, responsive, and kept me informed every step of the way. Highly recommended.',
    author: 'Tommy Lu',
    role: 'Founder',
    company: 'GoodGenes',
    rating: 5,
  },
  {
    quote: 'Working with Astra Studio on our app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We\'re happy to continue our partnership.',
    author: 'Sofia Gouveia',
    role: 'Design Director',
    company: 'Esdiac',
    rating: 5,
  },
  {
    quote: 'I\'ve worked with Astra Studio on three websites, and they\'ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. 10/10 partner.',
    author: 'Austin',
    role: 'CEO',
    company: 'Clarity LLC',
    rating: 5,
  },
  {
    quote: 'Astra Studio is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development, they exceeded my expectations. I couldn\'t be happier with the collaboration!',
    author: 'Anika',
    role: 'Founder',
    company: 'Coinpulse',
    rating: 5,
  },
  {
    quote: 'They translated our business goals into clean, aesthetic designs with total transparency. The process was fast and stress-free, even in the complex cybersecurity space. Highly recommended design partner.',
    author: 'Armen Avagyan',
    role: 'CEO & Co-Founder',
    company: 'Fraus',
    rating: 5,
  },
  {
    quote: 'Big shoutout to the Astra Studio team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency made everything smooth.',
    author: 'Victor Okon',
    role: 'COO & Co-Founder',
    company: 'Dlicio',
    rating: 5,
  },
  {
    quote: 'Astra Studio felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Astra Studio.',
    author: 'Jahnnobi Rahman',
    role: 'CEO & Founder',
    company: 'Relaxy',
    rating: 5,
  },
  {
    quote: 'Thanks to Astra Studio for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas.',
    author: 'Emran Hasan',
    role: 'CEO & Co-Founder',
    company: 'Klasio',
    rating: 5,
  },
  {
    quote: 'We\'ve worked with Astra Studio for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process worry-free.',
    author: 'Moshiur Rahman Radif',
    role: 'COO',
    company: 'Ontik Technologies',
    rating: 5,
  },
  {
    quote: 'We tried many designers before, but nothing really worked until we found Astra Studio. They turn simple ideas into clear, user-friendly designs, and their process is fast and effortless. We trust them fully.',
    author: 'Arvin',
    role: 'Co-Founder',
    company: 'Medease',
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        className="relative rounded-2xl border border-border/50 bg-card p-6 h-full hover:border-border hover:shadow-lg transition-all duration-300"
      >
        {/* Quote icon */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center mb-4">
          <Quote className="h-5 w-5 text-[#773DF2]" />
        </div>

        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-[#773DF2] text-[#773DF2]" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#592DB5]/20 to-[#773DF2]/20 flex items-center justify-center">
            <span className="text-xs font-bold gradient-text">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="text-sm font-medium">{testimonial.author}</div>
            <div className="text-xs text-muted-foreground">
              {testimonial.role} @ {testimonial.company}
            </div>
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#592DB5]/5 to-[#773DF2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6)

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#592DB5] opacity-[0.03] blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#773DF2] opacity-[0.03] blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
            Success Stories That{' '}
            <span className="gradient-text">Inspire Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our clients don&apos;t just hire us — they partner with us. Here&apos;s what they have to say about working with Astra Studio.
          </p>
        </AnimatedSection>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={i} />
          ))}
        </div>

        {/* Show more button */}
        {!showAll && testimonials.length > 6 && (
          <AnimatedSection className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent/50 hover:border-[#592DB5]/30 transition-all duration-300 text-sm font-medium"
            >
              Show More Reviews
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
