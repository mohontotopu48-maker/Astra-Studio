"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Star,
  Zap,
  Quote,
  Filter,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";
import { useRouter, type PageRoute } from "@/hooks/use-router";
import { caseStudies } from "@/lib/case-studies-data";

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

const categories = [
  "All",
  "Travel",
  "Restaurant",
  "SaaS",
  "Healthcare",
  "Automotive",
];

const aggregateMetrics = [
  { value: "$2B+", label: "Client Revenue Generated", icon: TrendingUp },
  { value: "97%", label: "Client Retention Rate", icon: Users },
  { value: "4.9/5", label: "Average Project Rating", icon: Star },
  { value: "12+", label: "Industry Awards Won", icon: Zap },
];

const testimonials = [
  {
    quote:
      "Design Nuvio didn't just redesign our booking flow — they reframed how we think about the traveler's journey. The new Triply feels effortless, and our retention numbers prove it.",
    name: "Shubho Al-Faroque",
    role: "Triply CEO",
    avatar: "SA",
    accentColor: "#3B4BDB",
  },
  {
    quote:
      "Design Nuvio understood that Plate isn't a reservation app — it's a love letter to French dining. They gave every restaurant a voice and every diner a reason to fall in love.",
    name: "Neil Saidi",
    role: "Plate CEO",
    avatar: "NS",
    accentColor: "#E5594F",
  },
  {
    quote:
      "Design Nuvio took a dashboard that scared people away and turned it into something my parents could use. Our activation rate is the highest it's ever been.",
    name: "Ted Nash",
    role: "Yenex CEO",
    avatar: "TN",
    accentColor: "#C99700",
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { navigate } = useRouter();

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
                <motion.button
                  key={study.slug}
                  {...stagger}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(study.route as PageRoute)}
                  className="group text-left rounded-2xl border border-border bg-card overflow-hidden hover:border-[#592DB5]/40 hover:shadow-xl hover:shadow-[#592DB5]/5 transition-all"
                >
                  {/* Image */}
                  <div
                    className={`h-56 sm:h-64 relative overflow-hidden ${study.bgColor}`}
                  >
                    <img
                      src={study.image}
                      alt={`${study.title} - ${study.category} project`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-sm text-[#1a1a2e] text-xs font-semibold">
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
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center p-3 rounded-lg bg-muted/40">
                          <span
                            className="text-lg font-display font-bold block"
                            style={{ color: study.accentColor }}
                          >
                            {metric.value}
                          </span>
                          <p className="text-xs text-muted-foreground mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-[#773DF2] group-hover:text-[#592DB5] transition-colors">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Results That Speak */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Results That Speak
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our clients don&apos;t just get beautiful designs — they get
              measurable business impact.
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
                <p className="text-muted-foreground text-sm mt-2">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Client Testimonials
            </h2>
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
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: testimonial.accentColor }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
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
