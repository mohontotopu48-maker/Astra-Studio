"use client";

import { motion } from "framer-motion";
import {
  LogIn,
  LayoutDashboard,
  CreditCard,
  Compass,
  Heart,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Layers,
  Target,
  RefreshCw,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function SaaSDesignPage() {
  return (
    <PageLayout
      badge="SaaS Design"
      title="SaaS Design"
      subtitle="Design SaaS products that users love, reduce churn, and accelerate growth with intuitive interfaces and seamless experiences."
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

      {/* Why SaaS Design Matters */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Why SaaS Design <span className="gradient-text">Matters</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                In the SaaS industry, design is the primary differentiator. Users evaluate products within seconds, and a poor first impression leads to immediate churn. Great SaaS design reduces friction, accelerates onboarding, and creates the kind of experience that turns trial users into lifelong customers.
              </p>
              <ul className="space-y-3">
                {[
                  "First impressions determine 94% of purchase decisions",
                  "88% of users won't return after a bad experience",
                  "Every $1 invested in UX returns $2–$100",
                  "Reduced churn directly impacts MRR and company valuation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#773DF2] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
                <LayoutDashboard className="w-24 h-24 text-white/20" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">Monthly Active Users</span>
                    <span className="text-white text-sm font-bold">+127%</span>
                  </div>
                  <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-white/60 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our SaaS Design Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Our SaaS Design <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We specialize in every aspect of SaaS design, from first login to long-term retention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: LogIn,
                title: "Onboarding Flows",
                desc: "Guided experiences that reduce time-to-value and help users achieve their 'aha moment' faster, increasing activation rates dramatically.",
              },
              {
                icon: LayoutDashboard,
                title: "Dashboard Interfaces",
                desc: "Clean, information-rich dashboards that surface the right data at the right time, enabling users to make confident decisions quickly.",
              },
              {
                icon: CreditCard,
                title: "Subscription Models",
                desc: "Transparent pricing pages and upgrade flows that build trust and convert free users to paid plans with minimal friction.",
              },
              {
                icon: Compass,
                title: "Feature Discovery",
                desc: "Smart discovery patterns that introduce advanced features at the right moment, increasing product depth and user engagement over time.",
              },
              {
                icon: Heart,
                title: "User Retention",
                desc: "Engagement loops, empty states, and re-engagement strategies that keep users coming back and reduce monthly churn rates.",
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                desc: "Powerful data visualization and reporting interfaces that make complex metrics accessible and actionable for all user roles.",
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

      {/* SaaS Design Process - Visual Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              SaaS Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven process is tailored for SaaS products, focusing on metrics that matter.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#592DB5]/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  icon: Target,
                  title: "Discovery & Audit",
                  desc: "Analyze your current product metrics, user feedback, and competitive landscape to identify the highest-impact design opportunities.",
                },
                {
                  step: "02",
                  icon: Layers,
                  title: "Strategy & Wireframes",
                  desc: "Develop a design strategy aligned with business KPIs, then create detailed wireframes mapping every user flow and interaction.",
                },
                {
                  step: "03",
                  icon: Zap,
                  title: "Visual Design & Prototype",
                  desc: "Craft pixel-perfect designs and interactive prototypes that validate concepts before any development begins, saving time and resources.",
                },
                {
                  step: "04",
                  icon: RefreshCw,
                  title: "Test & Iterate",
                  desc: "Run usability tests, analyze behavioral data, and continuously refine designs to optimize conversion, retention, and satisfaction metrics.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[#773DF2] uppercase tracking-wider">Step {item.step}</span>
                  <h3 className="font-display font-bold text-lg mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Leading SaaS Companies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-8" {...fadeInUp}>
            Trusted by Leading SaaS Companies
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-8 md:gap-16 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {["CloudSync", "DataFlow", "StackPulse", "AppForge", "NetScale"].map((name, i) => (
              <div
                key={i}
                className="w-28 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground text-sm font-medium"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Results That <span className="gradient-text">Speak</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our SaaS design work delivers measurable improvements across key business metrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                stat: "+45%",
                label: "Conversion Rate",
                desc: "Average improvement in free-to-paid conversion after redesign",
                gradient: "from-[#592DB5] to-[#9B6BF5]",
              },
              {
                icon: Users,
                stat: "+60%",
                label: "User Retention",
                desc: "Increase in 30-day retention through optimized onboarding and engagement",
                gradient: "from-[#4520A0] to-[#773DF2]",
              },
              {
                icon: Clock,
                stat: "-70%",
                label: "Onboarding Time",
                desc: "Reduction in time-to-first-value with streamlined onboarding flows",
                gradient: "from-[#773DF2] to-[#B68DF7]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative p-8 rounded-2xl border border-border overflow-hidden stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2`} />
                <div className="w-12 h-12 rounded-xl bg-[#592DB5]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#592DB5]" />
                </div>
                <div className="text-4xl font-display font-bold gradient-text mb-1">{item.stat}</div>
                <div className="font-display font-semibold text-lg mb-2">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Transform Your SaaS Product?"
        subtitle="Join the leading SaaS companies that trust Design Nuvio to design products users love. Let's reduce churn and accelerate growth together."
        buttonText="Schedule a Consultation"
      />
    </PageLayout>
  );
}
