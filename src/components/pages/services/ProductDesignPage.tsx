"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Lightbulb,
  Rocket,
  Search,
  Users,
  Monitor,
  BarChart3,
  Zap,
  Maximize,
  Accessibility,
  Figma,
  PenTool,
  Layout,
  Eye,
  MousePointer,
  Palette,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function ProductDesignPage() {
  return (
    <PageLayout
      badge="Product Design"
      title="Product Design"
      subtitle="Transform ideas into market-leading products with our human-centered design approach that drives engagement and business growth."
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
              src="/images/product-design-hero.png"
              alt="Product Design"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* What is Product Design? */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              What is <span className="gradient-text">Product Design</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Product design is the end-to-end process of identifying market opportunities, understanding user needs, and creating solutions that deliver measurable value. It bridges the gap between business objectives and user satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            {...staggerContainer}
          >
            {[
              { icon: Users, label: "User Research", desc: "Deep user understanding" },
              { icon: Lightbulb, label: "Ideation", desc: "Creative problem solving" },
              { icon: Layers, label: "Prototyping", desc: "Rapid concept validation" },
              { icon: Rocket, label: "Launch", desc: "Market-ready solutions" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-2xl bg-background border border-border hover:border-[#592DB5]/30 transition-colors card-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Product Design Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Our Product Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven four-phase methodology that transforms raw ideas into polished, market-ready products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Search,
                title: "Research",
                desc: "We conduct thorough user research, competitive analysis, and market studies to understand the landscape and identify opportunities for innovation.",
                details: ["User interviews", "Competitive audit", "Market analysis", "Persona creation"],
              },
              {
                step: "02",
                icon: Lightbulb,
                title: "Ideation",
                desc: "Through collaborative workshops and creative exercises, we generate a wide range of concepts and narrow them down to the most promising solutions.",
                details: ["Design workshops", "Concept sketching", "Feature prioritization", "Journey mapping"],
              },
              {
                step: "03",
                icon: Layers,
                title: "Prototyping",
                desc: "We build interactive prototypes at varying fidelities, testing assumptions and iterating rapidly based on real user feedback.",
                details: ["Wireframing", "Interactive prototypes", "Usability testing", "Iterative refinement"],
              },
              {
                step: "04",
                icon: Rocket,
                title: "Launch",
                desc: "We polish every detail, prepare comprehensive design specs, and support development teams through implementation to ensure a flawless launch.",
                details: ["Design specs", "Developer handoff", "QA support", "Post-launch iteration"],
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
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <ul className="space-y-1.5">
                  {item.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#773DF2] flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our product design services are built on core principles that ensure exceptional outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "User-Centered Design",
                desc: "Every design decision is rooted in real user insights, ensuring products resonate with your target audience and solve genuine problems.",
              },
              {
                icon: Monitor,
                title: "Cross-Platform",
                desc: "Design experiences that work seamlessly across web, mobile, tablet, and emerging platforms without compromising on quality or consistency.",
              },
              {
                icon: BarChart3,
                title: "Data-Driven",
                desc: "Leverage analytics and user data to inform design decisions, measure impact, and continuously optimize the product experience.",
              },
              {
                icon: Zap,
                title: "Rapid Prototyping",
                desc: "Validate concepts quickly through iterative prototyping, reducing risk and accelerating time-to-market with proven methodologies.",
              },
              {
                icon: Maximize,
                title: "Scalable Architecture",
                desc: "Design systems and patterns that grow with your product, ensuring maintainability and consistency as features expand.",
              },
              {
                icon: Accessibility,
                title: "Accessibility First",
                desc: "Inclusive design practices ensure your product is usable by everyone, meeting WCAG standards and expanding your potential user base.",
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

      {/* Tools We Use */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Tools We <span className="gradient-text">Use</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We leverage the industry&apos;s best design tools to deliver exceptional results efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: Figma, name: "Figma" },
              { icon: PenTool, name: "Sketch" },
              { icon: Layout, name: "Adobe XD" },
              { icon: Eye, name: "InVision" },
              { icon: MousePointer, name: "Principle" },
              { icon: Palette, name: "Framer" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border hover:border-[#592DB5]/30 transition-all card-lift"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center">
                  <tool.icon className="w-7 h-7 text-[#592DB5]" />
                </div>
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Design Showcase */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Design <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore examples of our product design work across different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Fintech Mobile App", desc: "A complete redesign of a banking app that increased user engagement by 40%", gradient: "from-[#592DB5] to-[#9B6BF5]" },
              { title: "E-Commerce Platform", desc: "End-to-end product design for a marketplace serving 2M+ monthly users", gradient: "from-[#4520A0] to-[#773DF2]" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden border border-border card-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={`h-56 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <Layers className="w-16 h-16 text-white/30" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-[#773DF2] font-medium">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Build Your Next Product?"
        subtitle="From concept to launch, our product design team will guide you every step of the way. Let's create something remarkable together."
        buttonText="Start Your Project"
      />
    </PageLayout>
  );
}
