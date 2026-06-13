"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const faqCategories = ["General", "Services", "Process", "Pricing", "Support"];

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    category: "General",
    question: "What services does Design Nuvio offer?",
    answer:
      "Design Nuvio offers a comprehensive suite of design services including UI/UX design, brand identity development, product design, design systems, UX audits, prototyping, and front-end development. We work with startups, scale-ups, and enterprise clients to create digital products that are both beautiful and functional.",
  },
  {
    category: "General",
    question: "How long has Design Nuvio been in business?",
    answer:
      "Design Nuvio was founded in 2018, and we've been helping businesses transform their digital presence for over 7 years. In that time, we've completed more than 200 projects across industries including fintech, healthcare, SaaS, e-commerce, and education. Our team has grown to include 30+ talented designers, developers, and strategists.",
  },
  {
    category: "General",
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including fintech, healthcare, SaaS, e-commerce, education, real estate, and logistics. Our diverse experience allows us to bring cross-industry insights to every project. We particularly excel in regulated industries where compliance and user experience must coexist harmoniously.",
  },
  {
    category: "Services",
    question: "What is included in your product design service?",
    answer:
      "Our product design service is end-to-end, covering user research, competitive analysis, information architecture, wireframing, visual design, interactive prototyping, usability testing, and design handoff. We also include up to 2 rounds of revisions and provide a comprehensive design system documentation to ensure seamless developer handoff.",
  },
  {
    category: "Services",
    question: "Do you offer UX audits?",
    answer:
      "Yes! Our UX audit service provides a thorough evaluation of your existing product's user experience. We analyze usability heuristics, accessibility compliance, user flows, and visual consistency. You'll receive a detailed report with prioritized recommendations, annotated screenshots, and an actionable roadmap for improvement. Audits typically take 1-2 weeks depending on product complexity.",
  },
  {
    category: "Services",
    question: "Can you build design systems?",
    answer:
      "Absolutely. Design systems are one of our core specialties. We build scalable, component-based design systems that include a comprehensive token library (colors, typography, spacing), reusable UI components with all states and variants, interaction guidelines, and full documentation. Our design systems are built in Figma and can be integrated with popular front-end frameworks like React, Vue, and Angular.",
  },
  {
    category: "Process",
    question: "What is your design process?",
    answer:
      "Our process follows a structured yet flexible approach: Discovery (research, stakeholder interviews, competitive analysis), Define (personas, user journeys, information architecture), Design (wireframes, visual design, prototyping), Validate (usability testing, stakeholder review), and Deliver (final assets, design system, handoff documentation). Each phase includes check-ins and collaboration with your team.",
  },
  {
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A UX audit typically takes 1-2 weeks. A landing page design takes 2-3 weeks. A full product design project ranges from 6-12 weeks. Complex enterprise projects with design systems can take 3-6 months. We provide a detailed timeline estimate during our proposal phase so you always know what to expect.",
  },
  {
    category: "Process",
    question: "How do you handle revisions?",
    answer:
      "We include structured revision rounds at key milestones in every project. Typically, we offer 2-3 rounds of revisions at the wireframe and visual design stages. We use a collaborative feedback system where you can leave comments directly on designs. Additional revision rounds can be accommodated and would be scoped accordingly. Our goal is to get it right the first time through close collaboration.",
  },
  {
    category: "Pricing",
    question: "How much does a project cost?",
    answer:
      "Our projects start at $5,000 for smaller engagements like UX audits or landing pages. Mid-range product design projects typically fall between $15,000-$50,000. Enterprise-scale projects with design systems range from $50,000-$150,000+. We provide detailed proposals with transparent pricing after our discovery call. Every project is unique, so we tailor our pricing to your specific needs and goals.",
  },
  {
    category: "Pricing",
    question: "Do you offer fixed-price projects?",
    answer:
      "Yes, we offer both fixed-price and time-and-materials pricing models. Fixed-price projects work well when the scope is clearly defined. For projects with evolving requirements, we recommend a retainer or time-and-materials approach that provides greater flexibility. We'll recommend the best model for your situation during our proposal phase.",
  },
  {
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers (ACH/wire), credit cards (Visa, Mastercard, American Express), and PayPal. For larger projects, we typically structure payments in milestones: 40% upfront, 30% at mid-project review, and 30% upon delivery. We can also accommodate custom payment schedules to align with your organization's procurement processes.",
  },
  {
    category: "Support",
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer post-launch support packages to ensure your product continues to perform optimally. Our support includes design bug fixes, minor adjustments, performance monitoring, and design iteration based on user feedback. Support packages start at $2,000/month and can be customized based on your needs. We also offer priority support for urgent requests.",
  },
  {
    category: "Support",
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply book a free discovery call through our website. During the 30-minute call, we'll discuss your project goals, challenges, timeline, and budget. After the call, we'll send you a detailed proposal within 3-5 business days. Once approved, we can kick off your project within 1-2 weeks.",
  },
  {
    category: "Support",
    question: "Can I see your portfolio?",
    answer:
      "Of course! You can view our portfolio on our Work page, which showcases a curated selection of our recent projects across various industries. We also provide case studies with detailed insights into our process and results during the proposal phase. If you're looking for examples in a specific industry or project type, let us know and we'll share relevant work during our discovery call.",
  },
];

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");

  const filteredFAQs = faqItems.filter(
    (item) => item.category === activeCategory
  );

  const categoryIcons: Record<string, React.ReactNode> = {
    General: <HelpCircle className="w-4 h-4" />,
    Services: <MessageCircle className="w-4 h-4" />,
    Process: <ArrowRight className="w-4 h-4" />,
    Pricing: <Phone className="w-4 h-4" />,
    Support: <Mail className="w-4 h-4" />,
  };

  return (
    <PageLayout
      badge="FAQ"
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our services, process, pricing, and how we work with clients."
    >
      {/* Category Tabs */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white shadow-lg shadow-[#592DB5]/25"
                    : "bg-card border border-border text-muted-foreground hover:border-[#592DB5]/30 hover:text-foreground"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border/50 bg-card overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-display font-bold mb-2">
                {activeCategory}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                {activeCategory === "General" &&
                  "General information about Design Nuvio and our capabilities."}
                {activeCategory === "Services" &&
                  "Details about the design services we offer."}
                {activeCategory === "Process" &&
                  "How we work, from kick-off to delivery."}
                {activeCategory === "Pricing" &&
                  "Transparent information about our pricing and payment options."}
                {activeCategory === "Support" &&
                  "Post-launch support, getting started, and accessing our portfolio."}
              </p>

              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-border/50"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold hover:no-underline hover:text-[#592DB5] transition-colors">
                      <span className="flex items-center gap-3">
                        <ChevronRight className="w-4 h-4 text-[#9B6BF5] shrink-0" />
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pl-7">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "7+", label: "Years in Business" },
              { value: "30+", label: "Team Members" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border/50"
              >
                <div className="text-3xl font-display font-bold bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#592DB5]/10 mb-6">
              <HelpCircle className="w-8 h-8 text-[#592DB5]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Can't find what you're looking for? We're here to help. Reach out
              to our team and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#592DB5]/25 transition-all hover:scale-105">
                <Mail className="w-4 h-4" />
                Send Us a Message
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:border-[#592DB5]/30 transition-all">
                <Phone className="w-4 h-4" />
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA />
    </PageLayout>
  );
}
