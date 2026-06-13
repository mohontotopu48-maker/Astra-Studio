'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
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
import { AnimatedSection } from '@/lib/animations'

const budgetRanges = [
  'Under $25,000',
  '$25,000 — $50,000',
  '$50,000 — $100,000',
  '$100,000 — $250,000',
  '$250,000+',
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

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

      if (!res.ok) {
        const result = await res.json()
        throw new Error(result.error || 'Something went wrong')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-16 md:py-24 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="h-16 w-16 text-[#773DF2] mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
            <p className="text-muted-foreground">
              We&apos;ve received your message and will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours
            with a personalized proposal.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  required
                  className="bg-background border-border/50 focus:border-[#592DB5]/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="bg-background border-border/50 focus:border-[#592DB5]/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Company name"
                  className="bg-background border-border/50 focus:border-[#592DB5]/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-background border-border/50 focus:border-[#592DB5]/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Project Budget</Label>
              <Select name="budget">
                <SelectTrigger className="bg-background border-border/50">
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project Details *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project, goals, and timeline..."
                required
                rows={5}
                className="bg-background border-border/50 focus:border-[#592DB5]/50 resize-none"
              />
            </div>

            {error && (
              <div className="text-sm text-destructive text-center">
                {error}
              </div>
            )}

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white border-0 hover:opacity-90 transition-all rounded-full px-8 py-6 text-base group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              By submitting, you agree to our Privacy Policy. We&apos;ll never share your information.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
