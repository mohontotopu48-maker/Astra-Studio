"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  PenTool,
  Code,
  Rocket,
  CheckCircle2,
  Users,
  BarChart3,
  Shield,
  Figma,
  Chrome,
  Smartphone,
  Palette,
  Layers,
  MousePointer,
  ChevronDown,
  Zap,
  Target,
  Clock,
  ArrowRight,
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

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    timeframe: "Week 1-2",
    icon: Search,
    gradient: "from-[#592DB5] to-[#773DF2]",
    description: "We dive deep into your business, users, and market to build a solid strategic foundation.",
    tasks: ["User Research & Interviews", "Stakeholder Alignment", "Competitive Analysis", "Project Roadmap"],
  },
  {
    number: "02",
    title: "Design & Prototyping",
    timeframe: "Week 3-5",
    icon: PenTool,
    gradient: "from-[#773DF2] to-[#9B6BF5]",
    description: "We translate insights into pixel-perfect designs and interactive prototypes for validation.",
    tasks: ["Wireframes & Information Architecture", "Visual Design System", "Interactive Prototypes", "User Testing & Iteration"],
  },
  {
    number: "03",
    title: "Development & Testing",
    timeframe: "Week 6-8",
    icon: Code,
    gradient: "from-[#9B6BF5] to-[#B68DF7]",
    description: "Our engineers bring designs to life with clean, performant, and accessible code.",
    tasks: ["Frontend Development", "Quality Assurance", "Performance Optimization", "Accessibility Testing"],
  },
  {
    number: "04",
    title: "Launch & Iterate",
    timeframe: "Week 9-10",
    icon: Rocket,
    gradient: "from-[#4520A0] to-[#592DB5]",
    description: "We launch with confidence and continuously improve based on real user data.",
    tasks: ["Deployment & Go-Live", "Analytics Setup", "User Feedback Collection", "Continuous Improvement"],
  },
];

const benefits = [
  {
    icon: CheckCircle2,
    title: "Predictable Outcomes",
    description: "Our proven methodology eliminates guesswork, ensuring every project is delivered on time and on budget.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "You're involved at every stage — no surprises, no black boxes. Transparency is our default.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Every design choice is backed by research and validated by real user data, not assumptions.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Early validation and iterative testing catch issues before they become costly problems.",
  },
];

const tools = [
  { name: "Figma", icon: Figma },
  { name: "React", icon: Code },
  { name: "Next.js", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Framer Motion", icon: MousePointer },
  { name: "Chrome DevTools", icon: Chrome },
  { name: "Responsive Design", icon: Smartphone },
  { name: "Analytics", icon: BarChart3 },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects follow our 10-week process, but timelines can vary based on scope. A focused product redesign might take 6-8 weeks, while a comprehensive design system can take 12-16 weeks. We provide a detailed timeline during the Discovery phase.",
  },
  {
    question: "What if I only need design, not development?",
    answer: "Absolutely! We offer standalone design services. Our process adapts to your needs — whether that's a full design-to-development engagement or focused design sprints for specific challenges.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer: "Collaboration is built into every step. We have structured feedback points throughout the process, and our iterative approach means your input shapes the final product. We typically include 2-3 rounds of revisions per deliverable.",
  },
  {
    question: "What happens after launch?",
    answer: "We don't disappear after launch. Our engagement includes post-launch analytics setup, a 30-day support window, and optional retainers for ongoing optimization. We believe in long-term partnerships, not one-off transactions.",
  },
];

export default function ProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout
      title="Our Process"
      subtitle="A proven, transparent methodology that transforms complex challenges into exceptional digital products — on time and on budget."
      badge="Our Process"
    >
      {/* How We Work */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">How We Work</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe great design isn&apos;t accidental — it&apos;s the result of a disciplined, collaborative process. Our four-phase methodology has been refined over 12 years and 200+ projects, combining strategic thinking with creative execution to deliver results that matter.
            </p>
            <div className="flex items-center justify-center gap-8 mt-10">
              <div className="text-center">
                <span className="text-3xl font-display font-bold text-[#592DB5]">4</span>
                <p className="text-xs text-muted-foreground mt-1">Phases</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <span className="text-3xl font-display font-bold text-[#773DF2]">10</span>
                <p className="text-xs text-muted-foreground mt-1">Weeks</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <span className="text-3xl font-display font-bold text-[#9B6BF5]">∞</span>
                <p className="text-xs text-muted-foreground mt-1">Iterations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our 4-Step Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Our 4-Step Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each phase builds on the last, creating a clear path from discovery to launch.
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 hover:shadow-lg hover:shadow-[#592DB5]/5 transition-all">
                  {/* Left: Number & Icon */}
                  <div className="flex lg:flex-col items-center gap-4 lg:w-48 shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shrink-0`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="lg:text-center">
                      <span className="text-4xl font-display font-bold bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
                        {step.number}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1 lg:justify-center">
                        <Clock className="w-3 h-3" />
                        {step.timeframe}
                      </p>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.tasks.map((task) => (
                        <div key={task} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-[#592DB5]/10 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-[#592DB5]" />
                          </div>
                          <span className="text-muted-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex justify-center py-2">
                    <div className="w-px h-6 bg-gradient-to-b from-[#592DB5] to-[#773DF2]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Why Our Process Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our methodology isn&apos;t just theory — it&apos;s battle-tested and designed for real results.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 hover:shadow-lg hover:shadow-[#592DB5]/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#592DB5] to-[#773DF2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Tools & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the best tools in the industry to deliver exceptional results.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                {...stagger}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-border bg-card text-center hover:border-[#592DB5]/40 hover:shadow-md hover:shadow-[#592DB5]/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <tool.icon className="w-5 h-5 text-[#773DF2]" />
                </div>
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions About Our Process
            </h2>
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

      <PageCTA />
    </PageLayout>
  );
}
