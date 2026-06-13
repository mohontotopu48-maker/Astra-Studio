"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  LayoutGrid,
  BookOpen,
  Award,
  Code2,
  ArrowRight,
  CheckCircle2,
  Search,
  Lightbulb,
  Rocket,
  Puzzle,
  RefreshCw,
  Zap,
  Users,
  Maximize,
  Box,
  Paintbrush,
  Type,
  Grid3x3,
  FileCode,
  Settings,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function DesignSystemsPage() {
  return (
    <PageLayout
      badge="Design Systems"
      title="Design Systems"
      subtitle="Build scalable, consistent design systems that accelerate product development and ensure brand coherence across all touchpoints."
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
              src="/images/design-systems-hero.png"
              alt="Design Systems"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* What is a Design System? */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                What is a <span className="gradient-text">Design System</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A design system is a comprehensive collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It&apos;s the single source of truth that aligns design and development teams around a shared visual language.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                More than a component library, a design system encompasses design tokens, documentation, brand guidelines, and code implementations — creating a living ecosystem that evolves with your product and scales with your team.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#592DB5]" />
                  Single source of truth
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#773DF2]" />
                  Living documentation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B6BF5]" />
                  Cross-platform
                </div>
              </div>
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
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Type, label: "Typography" },
                      { icon: Palette, label: "Colors" },
                      { icon: Grid3x3, label: "Spacing" },
                      { icon: Box, label: "Components" },
                      { icon: Paintbrush, label: "Icons" },
                      { icon: FileCode, label: "Code" },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-3 flex flex-col items-center gap-2">
                        <item.icon className="w-5 h-5 text-white/60" />
                        <span className="text-white/50 text-[10px]">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 h-8 bg-white/10 rounded-lg flex items-center px-3">
                    <Settings className="w-3 h-3 text-white/40 mr-2" />
                    <div className="h-1.5 bg-white/20 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Components of Our Design Systems */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Components of Our <span className="gradient-text">Design Systems</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every design system we create includes these essential building blocks for maximum coverage and scalability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Component Library",
                desc: "A comprehensive set of UI components — buttons, inputs, cards, modals, and more — each with all states, variants, and responsive behaviors documented.",
              },
              {
                icon: Palette,
                title: "Design Tokens",
                desc: "A centralized token system defining colors, typography, spacing, shadows, and animations as platform-agnostic variables that ensure cross-platform consistency.",
              },
              {
                icon: Puzzle,
                title: "Pattern Library",
                desc: "Common UI patterns like navigation, forms, data tables, and onboarding flows with usage guidelines, do's and don'ts, and real-world examples.",
              },
              {
                icon: BookOpen,
                title: "Documentation",
                desc: "Living documentation with interactive examples, usage guidelines, accessibility notes, and code snippets that keep everyone aligned and productive.",
              },
              {
                icon: Award,
                title: "Brand Guidelines",
                desc: "Logo usage, color palette, typography rules, imagery standards, and tone of voice guidelines that preserve brand integrity across every touchpoint.",
              },
              {
                icon: Code2,
                title: "Code Implementation",
                desc: "Production-ready code packages for React, Vue, or Angular with TypeScript support, accessibility built-in, and comprehensive testing coverage.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border border-border hover:border-[#592DB5]/30 transition-all card-lift group"
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

      {/* Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Why Invest in a <span className="gradient-text">Design System</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The ROI of a design system extends across design, development, and business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "Consistency",
                desc: "Eliminate visual drift and ensure every screen, every flow, and every interaction feels cohesive and on-brand across all products.",
                stat: "99%",
                statLabel: "visual consistency",
              },
              {
                icon: Zap,
                title: "Speed",
                desc: "Design and develop new features up to 47% faster by composing with pre-built, tested components instead of starting from scratch.",
                stat: "47%",
                statLabel: "faster delivery",
              },
              {
                icon: Maximize,
                title: "Scalability",
                desc: "Grow from one product to ten without multiplying design debt. New products inherit the system's quality and consistency automatically.",
                stat: "10x",
                statLabel: "scale potential",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "Bridge the gap between designers and developers with a shared language, reducing handoff friction and miscommunication.",
                stat: "60%",
                statLabel: "fewer handoff issues",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-background border border-border text-center stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#592DB5]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#592DB5]" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <div className="pt-4 border-t border-border">
                  <div className="text-2xl font-display font-bold gradient-text">{item.stat}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design System Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Design System <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building a design system is a strategic investment — we make sure it's done right from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Search,
                title: "Audit & Inventory",
                desc: "Catalog every existing component, pattern, and style across your products to understand the current state and identify consolidation opportunities.",
              },
              {
                step: "02",
                icon: Lightbulb,
                title: "System Architecture",
                desc: "Define the token structure, component taxonomy, naming conventions, and governance model that will guide the entire system's evolution.",
              },
              {
                step: "03",
                icon: LayoutGrid,
                title: "Build & Document",
                desc: "Create core components with all variants, write comprehensive documentation, and build interactive examples that demonstrate proper usage.",
              },
              {
                step: "04",
                icon: Rocket,
                title: "Adopt & Evolve",
                desc: "Support teams through adoption, establish contribution workflows, and set up processes for the system to grow and improve over time.",
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
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System Examples Showcase */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Design System <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse into the design systems we've built for leading organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "FinTech Design System",
                desc: "120+ components serving 8 product teams across web and mobile platforms.",
                tags: ["React", "Tokens", "Accessibility"],
                gradient: "from-[#592DB5] to-[#9B6BF5]",
              },
              {
                title: "Healthcare UI Kit",
                desc: "A WCAG 2.1 AA compliant system with 80+ clinical data visualization components.",
                tags: ["Vue", "Charts", "WCAG AA"],
                gradient: "from-[#4520A0] to-[#773DF2]",
              },
              {
                title: "E-Commerce System",
                desc: "A conversion-optimized component library powering 3 storefronts with 200+ variations.",
                tags: ["Angular", "A/B Testing", "Responsive"],
                gradient: "from-[#773DF2] to-[#B68DF7]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden border border-border card-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={`h-44 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 grid-pattern opacity-10" />
                  <LayoutGrid className="w-14 h-14 text-white/20" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#592DB5]/10 text-[#592DB5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Build Your Design System?"
        subtitle="A design system is the foundation of scalable, consistent product development. Let's build one that grows with your team and your vision."
        buttonText="Start Building"
      />
    </PageLayout>
  );
}
