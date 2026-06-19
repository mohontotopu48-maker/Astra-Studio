"use client";

import { motion } from "framer-motion";
import {
  Eye, MessageSquare, LineChart, Heart, Handshake, ShieldCheck,
  Palette, LayoutDashboard, Component, Search, ArrowRight, Brain,
  Sparkles, Workflow, Layers, Lightbulb, ToggleLeft,
  CheckCircle2, Star, GitBranch, Wand2,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const challenges = [
  {
    icon: Eye,
    title: "Explainable AI Interfaces",
    description: "Making AI decision-making transparent and understandable. Designing interfaces that reveal model reasoning, confidence scores, and data sources so users trust—and can verify—AI outputs.",
  },
  {
    icon: MessageSquare,
    title: "Conversational UX",
    description: "Crafting natural language interfaces that feel intuitive, handle ambiguity gracefully, and guide users through complex interactions without frustration or dead ends.",
  },
  {
    icon: LineChart,
    title: "Model Output Visualization",
    description: "Transforming raw model outputs—probabilities, embeddings, predictions—into meaningful visual representations that users can interpret, explore, and act upon with confidence.",
  },
  {
    icon: Heart,
    title: "Ethical Design",
    description: "Embedding fairness, accountability, and transparency into every interaction. Designing interfaces that surface bias indicators and provide meaningful human oversight mechanisms.",
  },
  {
    icon: Handshake,
    title: "Human-AI Collaboration",
    description: "Creating interfaces where humans and AI work as partners—not replacements. Designing handoff points, review workflows, and override controls that keep people in the loop.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description: "Building user confidence through clear AI labeling, provenance tracking, and honest communication about AI capabilities and limitations to prevent over-reliance.",
  },
];

const services = [
  {
    icon: Palette,
    title: "AI Product Design",
    description: "Full-spectrum product design for AI-powered tools, from prompt interfaces to output exploration, ensuring every AI interaction feels purposeful and human-centered.",
  },
  {
    icon: LayoutDashboard,
    title: "AI Dashboard Design",
    description: "Model monitoring dashboards, training pipelines, and analytics interfaces that make ML operations visible, understandable, and actionable for technical and non-technical users.",
  },
  {
    icon: Component,
    title: "AI Design Systems",
    description: "Component libraries with AI-specific patterns—confidence meters, streaming responses, thinking indicators—that maintain consistency across your AI product suite.",
  },
  {
    icon: Search,
    title: "AI UX Audit",
    description: "Evaluating your AI product's user experience with focus on trust, transparency, and task completion—identifying friction in human-AI interaction loops.",
  },
];

const stats = [
  { value: "73%", label: "Trust Increase", description: "With explainable AI interfaces" },
  { value: "4.8x", label: "Task Completion", description: "Human-AI collaboration UX" },
  { value: "61%", label: "Error Reduction", description: "Through transparent AI design" },
  { value: "92%", label: "User Satisfaction", description: "Conversational UX optimization" },
];

const designPatterns = [
  {
    icon: ToggleLeft,
    title: "Confidence Indicators",
    description: "Visual signals that communicate model certainty—progress bars, color-coded confidence levels, and uncertainty ranges that help users make informed decisions about AI suggestions.",
    example: "Showing 87% confidence with a gradient indicator alongside AI-generated recommendations.",
  },
  {
    icon: GitBranch,
    title: "Branching Interactions",
    description: "Design patterns that allow users to explore alternative AI outputs, regenerate responses, and compare different model results without losing context or previous work.",
    example: "Side-by-side comparison of multiple AI-generated options with easy selection and refinement.",
  },
  {
    icon: Wand2,
    title: "Progressive Disclosure",
    description: "Layering AI complexity—showing simple results first, then revealing model details, training data, and reasoning on demand so users aren't overwhelmed but can dig deeper when needed.",
    example: "Summary view → expanded rationale → full model metadata, each level on user request.",
  },
  {
    icon: Brain,
    title: "Thinking States",
    description: "Designing meaningful loading and processing states that communicate what the AI is doing, why it's taking time, and when to expect results—reducing perceived wait time and building trust.",
    example: "Animated progress with contextual messages like 'Analyzing patterns in your data...'",
  },
  {
    icon: Sparkles,
    title: "AI Labeling & Provenance",
    description: "Clear visual indicators that distinguish AI-generated content from human-created content, with metadata about the model version, data cutoff, and generation parameters.",
    example: "Subtle 'AI-generated' badges with expandable provenance information on every output.",
  },
  {
    icon: Workflow,
    title: "Human-in-the-Loop Controls",
    description: "Interface patterns for review, approval, editing, and override of AI outputs—ensuring human judgment remains central in high-stakes decisions and creative workflows.",
    example: "Approve, edit, or reject workflow with inline editing and version history tracking.",
  },
];

export default function AIPage() {
  return (
    <PageLayout
      title="AI Design That Humans Trust"
      subtitle="We design AI-powered interfaces that make complex models accessible, transparent, and genuinely helpful—bridging the gap between artificial intelligence and human understanding."
      badge="AI Industry"
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
              src="/images/ai-hero.png"
              alt="AI Design"
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
              Designing the Future of{" "}
              <span className="text-[#773DF2]">AI Interaction</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AI is only as powerful as the interface that delivers it. The most
              sophisticated model in the world is useless if users don&apos;t understand
              its outputs, trust its recommendations, or know when to apply human judgment.
              At Design Nuvio, we specialize in the emerging discipline of AI interaction
              design—creating interfaces that make artificial intelligence genuinely
              intelligible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From conversational AI and generative tools to predictive analytics and
              autonomous systems, we design every touchpoint with human understanding at the
              center. Our approach combines proven UX principles with cutting-edge AI design
              patterns to create experiences that are transparent, trustworthy, and genuinely
              empowering.
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
              AI Design <span className="text-[#773DF2]">Challenges</span>
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
              Our AI Design <span className="text-[#773DF2]">Services</span>
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
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#9B6BF5]/10 to-transparent rounded-full blur-[80px]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#592DB5]/10 text-[#773DF2] text-xs font-semibold uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5" /> Case Study Highlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                NeuralSight — AI Diagnostics Platform
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                NeuralSight had a powerful medical imaging AI but clinicians couldn&apos;t
                interpret its outputs. We redesigned the entire diagnostic interface with
                explainability at its core—adding confidence heatmaps, reasoning panels, and
                comparison views. The result: a 340% increase in clinical adoption and a 67%
                reduction in misinterpretation errors.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">340% clinical adoption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">67% fewer misinterpretations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">FDA UI compliance achieved</span>
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
              AI Design <span className="text-[#773DF2]">Statistics</span>
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

      {/* AI-Specific Design Patterns Section */}
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
              Patterns
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              AI-Specific Design <span className="text-[#773DF2]">Patterns</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve developed and refined a library of interaction patterns uniquely
              suited to AI products—patterns that build trust, enhance understanding,
              and empower users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designPatterns.map((pattern, i) => (
              <motion.div
                key={pattern.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-border/50 bg-background p-6 hover:border-[#592DB5]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center mb-4">
                  <pattern.icon className="w-5 h-5 text-[#773DF2]" />
                </div>
                <h4 className="text-sm font-semibold font-display mb-2">{pattern.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{pattern.description}</p>
                <div className="p-3 rounded-lg bg-[#592DB5]/5 border border-[#592DB5]/10">
                  <p className="text-xs text-muted-foreground italic">{pattern.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Humanize Your AI Product?"
        subtitle="Let's design AI interfaces that users understand, trust, and love. Book a discovery call with our AI design specialists."
        buttonText="Start Your AI Project"
      />
    </PageLayout>
  );
}
