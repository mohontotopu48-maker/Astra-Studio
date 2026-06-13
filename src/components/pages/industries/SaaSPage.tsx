"use client";

import { motion } from "framer-motion";
import {
  UserPlus, Compass, DollarSign, TrendingDown, LayoutDashboard, Users,
  Palette, BarChart3, Component, Search, ArrowRight, Zap, Shield,
  Layers, Rocket, Target, Globe, Code, Database, Cloud, Lock, Cpu,
  CheckCircle2, Star,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const challenges = [
  {
    icon: UserPlus,
    title: "User Onboarding",
    description: "Creating intuitive first-time experiences that guide users to their \"aha moment\" faster, reducing time-to-value and increasing activation rates across your platform.",
  },
  {
    icon: Compass,
    title: "Feature Discovery",
    description: "Designing intelligent navigation and contextual prompts that help users discover powerful features without overwhelming them with information or cluttering the interface.",
  },
  {
    icon: DollarSign,
    title: "Pricing Page Optimization",
    description: "Crafting pricing pages that clearly communicate value tiers, reduce decision fatigue, and drive conversions through strategic visual hierarchy and persuasive layout design.",
  },
  {
    icon: TrendingDown,
    title: "Churn Reduction",
    description: "Identifying friction points in the user journey and designing engagement loops, re-engagement flows, and retention mechanisms that keep subscribers active and loyal.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Complexity",
    description: "Transforming data-heavy dashboards into clean, scannable interfaces that surface key metrics instantly and allow users to drill down without cognitive overload.",
  },
  {
    icon: Users,
    title: "Multi-Tenancy UX",
    description: "Building role-based interfaces that adapt to different user types, permissions, and organizational structures while maintaining a cohesive brand experience.",
  },
];

const services = [
  {
    icon: Palette,
    title: "Product Design",
    description: "End-to-end product design from user research and wireframing to high-fidelity prototypes and pixel-perfect UI delivery tailored for SaaS platforms.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Design",
    description: "Data-driven dashboard design that transforms complex datasets into actionable visualizations with intuitive filtering, sorting, and drill-down capabilities.",
  },
  {
    icon: Component,
    title: "Design Systems",
    description: "Scalable component libraries and design tokens that ensure visual consistency, accelerate development, and enable your team to ship features faster.",
  },
  {
    icon: Search,
    title: "UX Audit",
    description: "Comprehensive usability analysis of your existing SaaS product with actionable recommendations to improve task completion, reduce errors, and boost satisfaction.",
  },
];

const stats = [
  { value: "340%", label: "Average ROI Increase", description: "After SaaS UX redesign" },
  { value: "67%", label: "Onboarding Improvement", description: "Faster time-to-value" },
  { value: "4.2x", label: "Conversion Lift", description: "On pricing page redesigns" },
  { value: "52%", label: "Churn Reduction", description: "Through UX optimization" },
];

const technologies = [
  { icon: Globe, name: "React / Next.js" },
  { icon: Code, name: "Vue / Nuxt" },
  { icon: Database, name: "PostgreSQL" },
  { icon: Cloud, name: "AWS / GCP" },
  { icon: Lock, name: "OAuth / SSO" },
  { icon: Cpu, name: "Webhooks / APIs" },
  { icon: Layers, name: "Tailwind CSS" },
  { icon: Zap, name: "Vercel / Netlify" },
];

export default function SaaSPage() {
  return (
    <PageLayout
      title="SaaS Design That Drives Growth"
      subtitle="We design SaaS products that convert visitors into loyal subscribers, reduce churn, and scale effortlessly with your business."
      badge="SaaS Industry"
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
              src="/images/saas-design-hero.png"
              alt="SaaS Design"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Designing for the{" "}
              <span className="text-[#773DF2]">SaaS Ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The SaaS landscape demands more than just good looks. Your product needs to
              onboard users in seconds, demonstrate value immediately, and create habits
              that keep customers coming back. At Astra Studio, we specialize in the unique
              design challenges that subscription-based software faces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From self-serve signup flows to enterprise-grade dashboards, we craft every
              pixel with conversion and retention in mind. Our deep understanding of SaaS
              metrics—activation, engagement, expansion—means our designs don&apos;t just
              look great, they move the numbers that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
              Challenges
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              SaaS Design Challenges <span className="text-[#773DF2]">We Solve</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl border border-border/50 bg-background p-6 hover:border-[#592DB5]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center mb-4 group-hover:from-[#592DB5]/20 group-hover:to-[#773DF2]/20 transition-all">
                  <challenge.icon className="w-6 h-6 text-[#773DF2]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-display">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#592DB5] to-[#773DF2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Our SaaS Design <span className="text-[#773DF2]">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-xl border border-border/50 bg-background hover:border-[#592DB5]/30 transition-all duration-300"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-display mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <button className="mt-3 inline-flex items-center gap-1 text-sm text-[#773DF2] font-medium hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border/50 bg-background p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#592DB5]/10 to-transparent rounded-full blur-[80px]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#592DB5]/10 text-[#773DF2] text-xs font-semibold uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5" /> Case Study Highlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                FlowMetrics — Analytics SaaS Redesign
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                FlowMetrics came to us with a powerful analytics engine buried under a confusing
                interface. We redesigned their entire dashboard experience—from onboarding to
                advanced reporting—resulting in a 280% increase in user activation and a 45%
                reduction in support tickets within three months of launch.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">280% activation increase</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">45% fewer support tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">3x faster onboarding</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              SaaS Design <span className="text-[#773DF2]">Statistics</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-border/50 bg-background"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-[#773DF2] font-medium uppercase tracking-widest mb-4 block">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Technologies & <span className="text-[#773DF2]">Platforms</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-background hover:border-[#592DB5]/30 transition-all"
              >
                <tech.icon className="w-5 h-5 text-[#773DF2]" />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Scale Your SaaS Product?"
        subtitle="Let's design an experience that converts, retains, and delights. Book a discovery call with our SaaS design team."
        buttonText="Start Your SaaS Redesign"
      />
    </PageLayout>
  );
}
