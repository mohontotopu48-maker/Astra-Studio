'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Phone, Send, Loader2, CalendarClock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { AnimatedSection } from '@/lib/animations'

const budgetRanges = [
  'Under $10,000',
  '$10,000 — $25,000',
  '$25,000 — $50,000',
  '$50,000 — $100,000',
  '$100,000 — $250,000',
  '$250,000+',
]

const benefits = [
  'Expect a response from us within 24 hours',
  'Secure and encrypted data handling for all project briefs',
  'Zero obligation, 100% transparent custom proposal',
  'Flexible milestone-based payment plans available',
  'Flexible & scalable design sprints tailored to your launch date',
]

interface ContactFormProps {
  /** Show the section heading on the left column (default true) */
  showLeftPanel?: boolean
  className?: string
}

export function ContactForm({ showLeftPanel = true, className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      toast({
        title: 'Inquiry sent!',
        description: "Thank you! We'll be in touch within 24 hours.",
      })
      ;(e.target as HTMLFormElement).reset()
    } catch (err) {
      toast({
        title: 'Submission failed',
        description: err instanceof Error ? err.message : 'Failed to submit form',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact-form"
      className={`relative py-20 md:py-28 overflow-hidden ${className}`}
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0820] to-[#1a0a2e]" />
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.15]" />
      {/* Decorative purple glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#592DB5] opacity-[0.08] blur-[140px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#773DF2] opacity-[0.06] blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${showLeftPanel ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-16 items-start`}>
          {/* === LEFT PANEL === */}
          {showLeftPanel && (
            <AnimatedSection className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium uppercase tracking-[0.25em] text-[#9B6BF5] mb-5"
              >
                Let&apos;s Walk &amp; Work Together
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[1.15] mb-8"
              >
                Have a project
                <br />
                idea in mind?
                <br />
                <span className="bg-gradient-to-r from-[#9B6BF5] via-[#773DF2] to-[#592DB5] bg-clip-text text-transparent">
                  Let&apos;s get started
                </span>
              </motion.h2>

              {/* Benefits list */}
              <ul className="space-y-3.5 mb-10">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-white/90"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#773DF2] to-[#592DB5] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Phone + book a call */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-6 border-t border-white/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#773DF2] to-[#592DB5] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </span>
                  <a
                    href="tel:+15551234567"
                    className="text-lg font-semibold text-white hover:text-[#9B6BF5] transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#9B6BF5] hover:text-[#773DF2] transition-colors group ml-13 pl-1"
                >
                  Book A Call Directly
                  <CalendarClock className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </AnimatedSection>
          )}

          {/* === RIGHT PANEL — FORM === */}
          <AnimatedSection
            delay={showLeftPanel ? 0.3 : 0}
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-sm font-medium">
                  Full Name <span className="text-[#9B6BF5]">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Type Here"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#773DF2] focus:ring-[#773DF2]/20 rounded-lg h-12"
                />
              </div>

              {/* Email + Phone row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm font-medium">
                    Email ID <span className="text-[#9B6BF5]">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Type Here"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#773DF2] focus:ring-[#773DF2]/20 rounded-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white text-sm font-medium">
                    Phone no <span className="text-[#9B6BF5]">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Type Here"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#773DF2] focus:ring-[#773DF2]/20 rounded-lg h-12"
                  />
                </div>
              </div>

              {/* Company + Budget row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white text-sm font-medium">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Type Here"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#773DF2] focus:ring-[#773DF2]/20 rounded-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-white text-sm font-medium">
                    Project budget <span className="text-[#9B6BF5]">*</span>
                  </Label>
                  <Select name="budget">
                    <SelectTrigger
                      id="budget"
                      className="bg-white/5 border-white/10 text-white focus:ring-[#773DF2]/20 rounded-lg h-12 [&>span]:text-white/40 data-[placeholder]:text-white/40"
                    >
                      <SelectValue placeholder="Select budget Range" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a0a2e] border-white/10 text-white">
                      {budgetRanges.map((range) => (
                        <SelectItem
                          key={range}
                          value={range}
                          className="text-white focus:bg-[#773DF2]/30 focus:text-white"
                        >
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white text-sm font-medium">
                  Project details <span className="text-[#9B6BF5]">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your idea...."
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#773DF2] focus:ring-[#773DF2]/20 rounded-lg resize-none min-h-[140px]"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white border-0 hover:shadow-[0_0_40px_#773DF240] transition-all duration-500 rounded-lg px-10 h-12 text-base font-medium group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="text-xs text-white/40 leading-relaxed">
                By submitting, you agree to our Privacy Policy. We&apos;ll never share your information.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
