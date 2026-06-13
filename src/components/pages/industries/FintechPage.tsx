"use client";

import { motion } from "framer-motion";
import {
  Shield, Lock, BarChart3, CreditCard, Globe, Zap,
  Palette, LayoutDashboard, Component, Search, ArrowRight, FileCheck,
  Scale, Eye, Fingerprint, CheckCircle2, Star, AlertTriangle,
  Banknote, Wallet, PieChart, Bell,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const challenges = [
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Navigating complex financial regulations like PSD2, GDPR, and KYC requirements while maintaining a seamless user experience that doesn't overwhelm customers with legal jargon.",
  },
  {
    icon: Lock,
    title: "Security & Trust",
    description: "Building interfaces that communicate security without creating anxiety—balancing robust authentication flows with frictionless access that users actually want to complete.",
  },
  {
    icon: BarChart3,
    title: "Complex Data Visualization",
    description: "Transforming dense financial data—portfolios, market trends, risk metrics—into clear, actionable visualizations that both novice and expert users can interpret instantly.",
  },
  {
    icon: CreditCard,
    title: "Payment Flows",
    description: "Designing payment experiences that minimize drop-off at every step, from payment method selection through confirmation, while supporting diverse payment rails and currencies.",
  },
  {
    icon: Globe,
    title: "Multi-Currency UX",
    description: "Creating intuitive interfaces for currency conversion, international transfers, and multi-currency account management that handle edge cases gracefully and display information clearly.",
  },
  {
    icon: Zap,
    title: "Real-Time Transactions",
    description: "Designing for immediacy—real-time balance updates, instant notifications, and live transaction feeds that keep users informed without creating information overload.",
  },
];

const services = [
  {
    icon: Palette,
    title: "Fintech Product Design",
    description: "Full-cycle product design for banking, payments, and investment platforms with regulatory compliance baked into every interaction from day one.",
  },
  {
    icon: LayoutDashboard,
    title: "Financial Dashboard Design",
    description: "Portfolio dashboards, trading interfaces, and analytics panels that make complex financial data accessible and actionable for every user level.",
  },
  {
    icon: Component,
    title: "Design System for Fintech",
    description: "Component libraries built with financial UI patterns—currency inputs, charts, compliance badges—that ensure consistency across your entire product suite.",
  },
  {
    icon: Search,
    title: "UX Audit & Optimization",
    description: "In-depth analysis of your fintech product's conversion funnels, onboarding flows, and transaction processes with data-backed recommendations for improvement.",
  },
];

const stats = [
  { value: "89%", label: "Trust Score Improvement", description: "After security UX redesign" },
  { value: "3.6x", label: "Onboarding Completion", description: "Streamlined KYC flows" },
  { value: "156%", label: "Transaction Volume", description: "Optimized payment flows" },
  { value: "94%", label: "Compliance Adherence", description: "Regulation-first design" },
];

const complianceStandards = [
  { icon: Shield, name: "PCI DSS", description: "Payment card data security standards for all transaction interfaces" },
  { icon: FileCheck, name: "KYC / AML", description: "Know Your Customer and Anti-Money Laundering compliant user flows" },
  { icon: Eye, name: "GDPR", description: "Data privacy and consent management built into every touchpoint" },
  { icon: Scale, name: "PSD2 / SCA", description: "Strong Customer Authentication and Open Banking compliance" },
  { icon: Fingerprint, name: "SOC 2", description: "Security controls and trust principles reflected in UI patterns" },
  { icon: AlertTriangle, name: "WCAG 2.1 AA", description: "Accessibility compliance ensuring financial services reach everyone" },
];

export default function FintechPage() {
  return (
    <PageLayout
      title="Fintech Design That Builds Trust"
      subtitle="We design secure, compliant, and delightful financial experiences that turn complex transactions into confident user actions."
      badge="Fintech Industry"
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
              src="/images/fintech-hero.png"
              alt="Fintech Design"
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
              Designing Trust in{" "}
              <span className="text-[#773DF2]">Financial Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In fintech, trust isn&apos;t optional—it&apos;s the foundation of every interaction.
              Users are entrusting you with their money, their data, and their financial
              future. Every pixel must reinforce confidence, clarity, and control. At Astra
              Studio, we understand that fintech design lives at the intersection of
              regulatory rigor and user delight.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you&apos;re building a neobank, a payment platform, or an investment
              app, our design process starts with compliance and ends with conversion. We
              create interfaces that make complex financial operations feel effortless while
              ensuring every flow meets the strictest regulatory standards.
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
              Fintech Design <span className="text-[#773DF2]">Challenges</span>
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
              Our Fintech Design <span className="text-[#773DF2]">Services</span>
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
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#4520A0]/10 to-transparent rounded-full blur-[80px]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#592DB5]/10 text-[#773DF2] text-xs font-semibold uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5" /> Case Study Highlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                VaultPay — Digital Banking Redesign
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                VaultPay needed to transform their legacy banking interface into a modern,
                mobile-first experience. We redesigned their entire platform—from account
                opening to international transfers—achieving a 92% KYC completion rate and
                a 210% increase in daily active users within the first quarter post-launch.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">92% KYC completion rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">210% DAU increase</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">PCI DSS compliant</span>
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
              Fintech Design <span className="text-[#773DF2]">Statistics</span>
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

      {/* Compliance & Security Standards */}
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
              Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Compliance & Security <span className="text-[#773DF2]">Standards</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every interface we design adheres to the strictest financial regulations,
              ensuring your product is compliant from launch day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, i) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl border border-border/50 bg-background hover:border-[#592DB5]/30 transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#4520A0]/10 to-[#773DF2]/10 flex items-center justify-center">
                  <standard.icon className="w-5 h-5 text-[#773DF2]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-display">{standard.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{standard.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Build Trust Through Design?"
        subtitle="Let's create a fintech experience that users trust with their money. Book a discovery call with our financial design specialists."
        buttonText="Start Your Fintech Project"
      />
    </PageLayout>
  );
}
