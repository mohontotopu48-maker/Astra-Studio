"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Star,
  Zap,
  Shield,
  BarChart3,
  Quote,
  Filter,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

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

const categories = ["All", "SaaS", "Fintech", "Healthcare", "AI"];

const caseStudies = [
  {
    title: "FinFlow — Banking Dashboard Redesign",
    description: "Reimagined a legacy banking dashboard into a modern, intuitive experience that reduced user friction and increased engagement across all user segments.",
    category: "Fintech",
    gradient: "from-[#592DB5] to-[#773DF2]",
    metrics: [
      { value: "45%", label: "Faster Onboarding" },
      { value: "60%", label: "Less Support Tickets" },
      { value: "4.8", label: "App Rating" },
    ],
  },
  {
    title: "MedSync — Patient Portal",
    description: "Designed a HIPAA-compliant patient portal that streamlined appointment scheduling and medical record access for over 500,000 patients.",
    category: "Healthcare",
    gradient: "from-[#4520A0] to-[#9B6BF5]",
    metrics: [
      { value: "3x", label: "User Engagement" },
      { value: "92%", label: "Patient Satisfaction" },
      { value: "70%", label: "Fewer Calls" },
    ],
  },
  {
    title: "CloudMetrics — Analytics Platform",
    description: "Built a comprehensive analytics platform with real-time data visualization that helps businesses make data-driven decisions 10x faster.",
    category: "SaaS",
    gradient: "from-[#773DF2] to-[#B68DF7]",
    metrics: [
      { value: "10x", label: "Faster Insights" },
      { value: "300%", label: "ROI Increase" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    title: "NeuralPay — AI Payment System",
    description: "Created an AI-powered payment interface that predicts user behavior and optimizes checkout flows for maximum conversion.",
    category: "AI",
    gradient: "from-[#9B6BF5] to-[#592DB5]",
    metrics: [
      { value: "38%", label: "Higher Conversion" },
      { value: "50ms", label: "Avg Response" },
      { value: "2M+", label: "Transactions/mo" },
    ],
  },
  {
    title: "HealthHub — Telemedicine App",
    description: "Designed an end-to-end telemedicine experience connecting patients with doctors seamlessly, from scheduling to follow-up care.",
    category: "Healthcare",
    gradient: "from-[#592DB5] to-[#4520A0]",
    metrics: [
      { value: "85%", label: "Return Rate" },
      { value: "4.9", label: "App Store Rating" },
      { value: "40%", label: "Cost Reduction" },
    ],
  },
  {
    title: "SaaSly — Project Management Suite",
    description: "Redesigned a project management tool that teams actually love to use, reducing onboarding time and boosting daily active usage.",
    category: "SaaS",
    gradient: "from-[#773DF2] to-[#592DB5]",
    metrics: [
      { value: "55%", label: "More Daily Users" },
      { value: "2h", label: "Saved Per Week" },
      { value: "98%", label: "Retention Rate" },
    ],
  },
  {
    title: "CryptoVault — Digital Wallet",
    description: "Designed a secure and intuitive cryptocurrency wallet that makes digital asset management accessible to mainstream users.",
    category: "Fintech",
    gradient: "from-[#4520A0] to-[#773DF2]",
    metrics: [
      { value: "200K+", label: "Active Users" },
      { value: "0", label: "Security Breaches" },
      { value: "4.7", label: "User Rating" },
    ],
  },
  {
    title: "AIForge — ML Training Platform",
    description: "Built a visual interface for machine learning model training that empowers non-technical users to leverage AI capabilities.",
    category: "AI",
    gradient: "from-[#B68DF7] to-[#4520A0]",
    metrics: [
      { value: "5x", label: "Faster Deployment" },
      { value: "80%", label: "Less Code Needed" },
      { value: "150+", label: "Enterprise Clients" },
    ],
  },
];

const aggregateMetrics = [
  { value: "$2B+", label: "Client Revenue Generated", icon: TrendingUp },
  { value: "97%", label: "Client Retention Rate", icon: Users },
  { value: "4.9/5", label: "Average Project Rating", icon: Star },
  { value: "12+", label: "Industry Awards Won", icon: Zap },
];

const testimonials = [
  {
    quote: "Astra Studio transformed our entire digital presence. The results exceeded every KPI we set. They don't just design — they solve business problems.",
    name: "Sarah Mitchell",
    role: "VP of Product, FinFlow",
    gradient: "from-[#592DB5] to-[#773DF2]",
  },
  {
    quote: "The team's ability to understand our complex healthcare requirements and translate them into an intuitive interface was remarkable. Our patients love it.",
    name: "Dr. James Park",
    role: "CTO, MedSync",
    gradient: "from-[#773DF2] to-[#9B6BF5]",
  },
  {
    quote: "Working with Astra Studio felt like having an extension of our own team. Their design system has become the foundation of everything we build.",
    name: "Lisa Chen",
    role: "Head of Design, CloudMetrics",
    gradient: "from-[#4520A0] to-[#592DB5]",
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.category === activeFilter);

  return (
    <PageLayout
      title="Case Studies"
      subtitle="Explore how we have helped leading brands transform their digital experiences and achieve measurable business outcomes."
      badge="Case Studies"
    >
      {/* Hero Image */}
      <section className="relative pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden border border-border/30"
          >
            <img
              src="/images/case-studies-hero.png"
              alt="Case Studies"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white shadow-lg shadow-[#592DB5]/20"
                    : "bg-card border border-border text-muted-foreground hover:border-[#592DB5]/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  {...stagger}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-[#592DB5]/40 hover:shadow-xl hover:shadow-[#592DB5]/5 transition-all"
                >
                  {/* Gradient placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${study.gradient} relative`}>
                    <div className="absolute inset-0 grid-pattern opacity-10" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                      {study.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-[#592DB5] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {study.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <span className="text-lg font-display font-bold text-[#592DB5]">
                            {metric.value}
                          </span>
                          <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-[#773DF2] hover:text-[#592DB5] transition-colors group/btn">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Results That Speak */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Results That Speak</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our clients don&apos;t just get beautiful designs — they get measurable business impact.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aggregateMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card text-center hover:border-[#592DB5]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-[#773DF2]" />
                </div>
                <span className="text-3xl font-display font-bold bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <p className="text-muted-foreground text-sm mt-2">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear directly from the leaders we&apos;ve partnered with.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 transition-all"
              >
                <Quote className="w-8 h-8 text-[#773DF2]/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </PageLayout>
  );
}
