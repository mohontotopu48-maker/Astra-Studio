"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Sparkles,
  Mail,
  Search,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const categories = ["All", "Design", "Development", "Industry", "Process"];

const blogPosts = [
  {
    id: 1,
    category: "Design",
    date: "Feb 28, 2025",
    readTime: "8 min",
    title: "The Future of SaaS Design in 2025",
    excerpt:
      "Explore the emerging design patterns shaping the next generation of SaaS products, from AI-driven interfaces to adaptive layouts.",
    gradient: "from-[#592DB5] to-[#9B6BF5]",
  },
  {
    id: 2,
    category: "Design",
    date: "Feb 22, 2025",
    readTime: "6 min",
    title: "How AI is Reshaping UX",
    excerpt:
      "Artificial intelligence is no longer a buzzword — it's fundamentally changing how users interact with digital products.",
    gradient: "from-[#773DF2] to-[#B68DF7]",
  },
  {
    id: 3,
    category: "Development",
    date: "Feb 18, 2025",
    readTime: "10 min",
    title: "Building Accessible Design Systems",
    excerpt:
      "A comprehensive guide to creating design systems that are inclusive, scalable, and built with accessibility at the core.",
    gradient: "from-[#4520A0] to-[#773DF2]",
  },
  {
    id: 4,
    category: "Process",
    date: "Feb 14, 2025",
    readTime: "7 min",
    title: "Our Design Sprint Methodology",
    excerpt:
      "How we run 5-day design sprints to validate ideas rapidly and deliver production-ready concepts.",
    gradient: "from-[#9B6BF5] to-[#592DB5]",
  },
  {
    id: 5,
    category: "Industry",
    date: "Feb 10, 2025",
    readTime: "9 min",
    title: "Fintech UX Trends to Watch",
    excerpt:
      "The financial technology sector is evolving fast. Here are the UX trends driving the next wave of fintech innovation.",
    gradient: "from-[#592DB5] to-[#4520A0]",
  },
  {
    id: 6,
    category: "Development",
    date: "Feb 5, 2025",
    readTime: "12 min",
    title: "Micro-Frontends for Design Systems",
    excerpt:
      "How micro-frontend architecture can help scale design systems across large enterprise organizations.",
    gradient: "from-[#773DF2] to-[#592DB5]",
  },
  {
    id: 7,
    category: "Design",
    date: "Jan 30, 2025",
    readTime: "5 min",
    title: "The Psychology of Color in UI",
    excerpt:
      "Understanding how color choices impact user behavior, trust, and conversion rates in digital interfaces.",
    gradient: "from-[#B68DF7] to-[#773DF2]",
  },
  {
    id: 8,
    category: "Industry",
    date: "Jan 25, 2025",
    readTime: "8 min",
    title: "Healthcare Design: Compliance Meets Creativity",
    excerpt:
      "Balancing strict regulatory requirements with compelling user experiences in healthcare product design.",
    gradient: "from-[#4520A0] to-[#9B6BF5]",
  },
  {
    id: 9,
    category: "Process",
    date: "Jan 20, 2025",
    readTime: "6 min",
    title: "From Research to Prototype in 48 Hours",
    excerpt:
      "Our rapid prototyping framework that turns user research insights into testable prototypes in record time.",
    gradient: "from-[#592DB5] to-[#B68DF7]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <PageLayout
      badge="Blog"
      title="Insights & Ideas"
      subtitle="Thoughts on design, technology, and the craft of building digital products that people love."
    >
      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-xl transition-shadow"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#592DB5] to-[#773DF2] opacity-90" />
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-60" />
                    <span className="text-sm font-medium opacity-70">
                      Featured Article
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#592DB5]/10 text-[#592DB5]">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#773DF2]/10 text-[#773DF2]">
                    Design
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Mar 1, 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    12 min read
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 group-hover:text-[#592DB5] transition-colors">
                  The Complete Guide to Product Design in the Age of AI
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AI is transforming every aspect of product design — from
                  research and ideation to prototyping and testing. In this
                  comprehensive guide, we explore how design teams can leverage
                  AI tools while maintaining human-centered design principles.
                </p>
                <span className="inline-flex items-center gap-2 text-[#592DB5] font-semibold group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter + Blog Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white shadow-lg shadow-[#592DB5]/25"
                      : "bg-card border border-border text-muted-foreground hover:border-[#592DB5]/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-[#592DB5]/30 focus:border-[#592DB5]/50"
              />
            </div>
          </div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-xl hover:border-[#592DB5]/20 transition-all"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}
                  />
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white/40" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-[#592DB5] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#592DB5] group-hover:gap-2.5 transition-all">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 mx-auto text-muted-foreground/40 mb-4" />
              <p className="text-muted-foreground">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-border/50 p-8 sm:p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#592DB5]/5 to-[#773DF2]/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#592DB5]/5 rounded-full blur-[80px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#592DB5]/10 text-[#592DB5] text-sm font-medium mb-6">
                <Mail className="w-4 h-4" />
                Newsletter
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Get the latest insights on design, technology, and product
                development delivered straight to your inbox. No spam, just
                quality content.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-[#592DB5]/30 focus:border-[#592DB5]/50"
                />
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#592DB5]/25 transition-all hover:scale-105 inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Join 2,500+ designers and developers. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA />
    </PageLayout>
  );
}
