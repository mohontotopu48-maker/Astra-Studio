"use client";

import { motion } from "framer-motion";
import {
  Search,
  GitBranch,
  Accessibility,
  Gauge,
  Navigation,
  Eye,
  MousePointer,
  FileText,
  BarChart3,
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileVideo,
  LayoutGrid,
  ListChecks,
  ClipboardList,
  Layers,
  Lightbulb,
  Zap,
  Users,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function UXAuditPage() {
  return (
    <PageLayout
      badge="UX Audit"
      title="UX Audit"
      subtitle="Uncover hidden usability issues and unlock your product's full potential with our comprehensive UX audit services."
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
              src="/images/ux-audit-hero.png"
              alt="UX Audit"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* What is a UX Audit? */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                What is a <span className="gradient-text">UX Audit</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A UX audit is a systematic evaluation of your product&apos;s user experience against established usability principles and industry best practices. It identifies friction points, accessibility barriers, and design inconsistencies that silently erode user satisfaction and business metrics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our audits go beyond surface-level findings. We combine heuristic evaluation with data analytics, user research, and competitive benchmarking to deliver actionable recommendations that have measurable impact on your key performance indicators.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="absolute inset-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Search className="w-5 h-5 text-white/60" />
                    <span className="text-white/60 text-sm">UX Audit Report</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Usability", score: 72, color: "bg-yellow-400" },
                      { label: "Accessibility", score: 58, color: "bg-red-400" },
                      { label: "Performance", score: 85, color: "bg-green-400" },
                      { label: "Consistency", score: 64, color: "bg-yellow-400" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between text-xs text-white/70 mb-1">
                          <span>{item.label}</span>
                          <span>{item.score}%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Audit Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Our Audit <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A thorough, multi-layered evaluation that leaves no stone unturned.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Search,
                title: "Heuristic Evaluation",
                desc: "Expert review against Nielsen's 10 usability heuristics and platform-specific guidelines, identifying violations that impact user efficiency and satisfaction.",
              },
              {
                step: "02",
                icon: GitBranch,
                title: "User Flow Analysis",
                desc: "Map and analyze every critical user journey to find friction points, unnecessary steps, and abandonment triggers in your conversion funnels.",
              },
              {
                step: "03",
                icon: Accessibility,
                title: "Accessibility Review",
                desc: "Comprehensive WCAG compliance check covering contrast ratios, screen reader compatibility, keyboard navigation, and assistive technology support.",
              },
              {
                step: "04",
                icon: Gauge,
                title: "Performance Assessment",
                desc: "Evaluate load times, interaction responsiveness, and perceived performance to identify technical barriers that degrade the user experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative p-6 rounded-2xl border border-border hover:border-[#592DB5]/30 transition-all card-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="text-5xl font-display font-bold text-[#592DB5]/10 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Analyze */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              What We <span className="gradient-text">Analyze</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our audits cover every dimension of the user experience with meticulous attention to detail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Navigation,
                title: "Navigation & IA",
                desc: "Menu structures, wayfinding cues, and information hierarchy that determine how easily users find what they need.",
              },
              {
                icon: Eye,
                title: "Visual Design",
                desc: "Typography, color usage, spacing consistency, and visual hierarchy that impact readability and brand perception.",
              },
              {
                icon: MousePointer,
                title: "Interaction Patterns",
                desc: "Button states, form behaviors, feedback mechanisms, and micro-interactions that shape the tactile experience.",
              },
              {
                icon: FileText,
                title: "Content Strategy",
                desc: "Copy clarity, tone consistency, error messaging, and content organization that guides user understanding.",
              },
              {
                icon: BarChart3,
                title: "Performance Metrics",
                desc: "Core Web Vitals, time-to-interactive, and resource loading patterns that affect perceived speed and reliability.",
              },
              {
                icon: Shield,
                title: "Accessibility Compliance",
                desc: "ARIA labels, keyboard support, color contrast, and screen reader compatibility ensuring universal access.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-background border border-border hover:border-[#592DB5]/30 transition-all card-lift group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#592DB5]/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#592DB5] group-hover:to-[#773DF2] transition-all">
                  <item.icon className="w-6 h-6 text-[#592DB5] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Deliverables */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Audit <span className="gradient-text">Deliverables</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              You receive a comprehensive package designed to drive immediate improvements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "PDF Report",
                desc: "A detailed 40+ page report with findings categorized by severity, complete with annotated screenshots and specific recommendations.",
                color: "from-[#592DB5] to-[#9B6BF5]",
              },
              {
                icon: FileVideo,
                title: "Video Walkthrough",
                desc: "A narrated screen recording walking through each major finding, showing exactly what the issue is and how it impacts users.",
                color: "from-[#4520A0] to-[#773DF2]",
              },
              {
                icon: LayoutGrid,
                title: "Priority Matrix",
                desc: "An impact-effort matrix that helps your team prioritize which issues to tackle first for the greatest ROI on design improvements.",
                color: "from-[#773DF2] to-[#B68DF7]",
              },
              {
                icon: ClipboardList,
                title: "Action Plan",
                desc: "A phased implementation roadmap with clear milestones, resource estimates, and expected outcomes for each improvement.",
                color: "from-[#592DB5] to-[#773DF2]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border border-border text-center card-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues We Find */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Common Issues We <span className="gradient-text">Find</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These are the most frequent UX problems we uncover during our audits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Unclear Call-to-Actions", desc: "Buttons that blend into the background or use ambiguous language, causing user hesitation and drop-off." },
              { title: "Broken Navigation Flows", desc: "Dead ends, orphan pages, and inconsistent back-button behavior that trap users in unexpected states." },
              { title: "Poor Error Handling", desc: "Generic error messages that don't tell users what went wrong or how to fix it, increasing frustration." },
              { title: "Inconsistent Design Patterns", desc: "Mixed UI patterns, varying button styles, and inconsistent spacing that erode trust and usability." },
              { title: "Accessibility Barriers", desc: "Low contrast text, missing alt text, and keyboard traps that exclude users with disabilities." },
              { title: "Slow Perceived Performance", desc: "Loading states without feedback, skeleton screens that don't match content, and layout shifts that disorient users." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4 p-5 rounded-xl border border-border hover:border-[#592DB5]/30 transition-colors"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Is Your Product Hiding UX Issues?"
        subtitle="Don't let hidden usability problems cost you users and revenue. Get a comprehensive UX audit and start making improvements that matter."
        buttonText="Request an Audit"
      />
    </PageLayout>
  );
}
