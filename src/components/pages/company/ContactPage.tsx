"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Share2,
  ChevronDown,
  Building2,
  Clock,
  Globe,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";
import { ContactForm } from "@/components/agency/ContactForm";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@designnuvio.com",
    subtitle: "We respond within 24 hours",
    gradient: "from-[#592DB5] to-[#773DF2]",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    subtitle: "Mon-Fri, 9am-6pm EST",
    gradient: "from-[#773DF2] to-[#9B6BF5]",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "350 Fifth Avenue, Suite 4200",
    subtitle: "New York, NY 10118",
    gradient: "from-[#9B6BF5] to-[#B68DF7]",
  },
  {
    icon: Share2,
    title: "Social Media",
    value: "@designnuvio",
    subtitle: "Twitter, LinkedIn, Dribbble",
    gradient: "from-[#4520A0] to-[#592DB5]",
  },
];

const faqs = [
  {
    question: "What is the typical project timeline?",
    answer: "Most projects take 8-12 weeks from kickoff to launch. We provide a detailed timeline during our initial consultation based on your specific scope and requirements.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "We work with companies of all sizes — from early-stage startups to Fortune 500 enterprises. Our engagement models are flexible and adapt to your needs and budget.",
  },
  {
    question: "What does the onboarding process look like?",
    answer: "After an initial discovery call, we schedule a strategy workshop, define project scope and deliverables, and kick off within 1-2 weeks. We keep the process lean and efficient.",
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Absolutely. We frequently collaborate with in-house teams. Whether it's design-only deliverables or full-stack implementation, we integrate seamlessly into your workflow.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in SaaS, Fintech, Healthcare, and AI. However, our design methodology is industry-agnostic — we've delivered successful projects across 20+ verticals.",
  },
];

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 4200",
    country: "United States",
    timezone: "EST (UTC-5)",
    gradient: "from-[#592DB5] to-[#773DF2]",
  },
  {
    city: "London",
    address: "30 St Mary Axe, Level 28",
    country: "United Kingdom",
    timezone: "GMT (UTC+0)",
    gradient: "from-[#773DF2] to-[#9B6BF5]",
  },
  {
    city: "Singapore",
    address: "1 Raffles Place, Tower 2",
    country: "Singapore",
    timezone: "SGT (UTC+8)",
    gradient: "from-[#4520A0] to-[#592DB5]",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout
      title="Get in Touch"
      subtitle="Have a project in mind? Let's talk about how we can help transform your vision into reality."
      badge="Contact Us"
    >
      {/* New Contact Form Section (matches home design) */}
      <ContactForm />

      {/* Reach Us — contact channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Reach Us Directly</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prefer a different channel? Here&apos;s how else you can get in touch with the Design Nuvio team.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 hover:shadow-md hover:shadow-[#592DB5]/5 transition-all group"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm">{info.title}</h3>
                  <p className="text-foreground font-medium mt-0.5 break-all">{info.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{info.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about working with Design Nuvio.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#773DF2] shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Global Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With teams across three continents, we&apos;re always close to where you need us.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl border border-border bg-card overflow-hidden hover:border-[#592DB5]/40 hover:shadow-lg hover:shadow-[#592DB5]/5 transition-all group"
              >
                {/* Gradient placeholder */}
                <div className={`h-40 bg-gradient-to-br ${office.gradient} relative`}>
                  <div className="absolute inset-0 grid-pattern opacity-10" />
                  <div className="absolute bottom-4 left-4">
                    <Globe className="w-6 h-6 text-white/60" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-1">{office.city}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{office.country}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{office.timezone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Start Your Project?"
        subtitle="Book a free consultation and let's explore how Design Nuvio can bring your vision to life."
        buttonText="Book a Free Consultation"
      />
    </PageLayout>
  );
}
