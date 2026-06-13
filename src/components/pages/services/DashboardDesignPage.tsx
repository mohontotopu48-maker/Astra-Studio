"use client";

import { motion } from "framer-motion";
import {
  Activity,
  LayoutGrid,
  BarChart3,
  Smartphone,
  Shield,
  Filter,
  ArrowRight,
  CheckCircle2,
  Layers,
  Database,
  LineChart,
  PieChart,
  Eye,
  MousePointer,
  RefreshCw,
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

export default function DashboardDesignPage() {
  return (
    <PageLayout
      badge="Dashboard Design"
      title="Dashboard Design"
      subtitle="Create powerful, intuitive dashboards that transform complex data into actionable insights and drive informed decision-making."
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
              src="/images/dashboard-design-hero.png"
              alt="Dashboard Design"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Dashboard Design That Drives Decisions */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="absolute inset-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="ml-2 text-white/50 text-xs">Dashboard Preview</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { label: "Revenue", val: "$48.2K" },
                      { label: "Users", val: "12,847" },
                      { label: "Growth", val: "+23%" },
                    ].map((s, i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-2 text-center">
                        <div className="text-white/50 text-[10px]">{s.label}</div>
                        <div className="text-white text-sm font-bold">{s.val}</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-20 bg-white/5 rounded-lg flex items-end px-2 pb-2 gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/20 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Dashboard Design That <span className="gradient-text">Drives Decisions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A well-designed dashboard is the nerve center of your business. It transforms raw data into visual narratives that empower teams to act with confidence. We design dashboards that balance information density with clarity, ensuring every metric tells a story.
              </p>
              <ul className="space-y-3">
                {[
                  "Information hierarchy that surfaces what matters most",
                  "Real-time data visualization that's instantly readable",
                  "Role-based views tailored to each stakeholder's needs",
                  "Interactive filters for deep-dive exploration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#773DF2] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Dashboard Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Dashboard <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We build dashboards with the features your team needs to monitor, analyze, and act on data effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: "Real-Time Analytics",
                desc: "Live data streams with auto-refreshing visualizations that keep your team informed of critical changes the moment they happen.",
              },
              {
                icon: LayoutGrid,
                title: "Custom Widgets",
                desc: "Drag-and-drop widget systems that let users personalize their view with the charts, KPIs, and metrics most relevant to their role.",
              },
              {
                icon: BarChart3,
                title: "Data Visualization",
                desc: "Expertly crafted charts, graphs, and visual elements that make complex datasets immediately understandable at a glance.",
              },
              {
                icon: Smartphone,
                title: "Responsive Layouts",
                desc: "Dashboards that adapt beautifully from ultra-wide monitors to mobile phones, ensuring data access anywhere, anytime.",
              },
              {
                icon: Shield,
                title: "Role-Based Views",
                desc: "Permission-aware interfaces that show each user exactly what they need — no more, no less — based on their role and access level.",
              },
              {
                icon: Filter,
                title: "Interactive Filters",
                desc: "Powerful filtering, drill-down, and cross-filtering capabilities that transform static reports into exploratory data experiences.",
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

      {/* Dashboard Design Process */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Dashboard Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our systematic approach ensures every dashboard we create delivers maximum value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Data Audit",
                desc: "Catalog all available data sources, identify key metrics, and understand the relationships between different data points.",
                icon: Database,
              },
              {
                step: "02",
                title: "Information Architecture",
                desc: "Organize data into logical hierarchies, define user roles, and map the information flow for each dashboard view.",
                icon: Layers,
              },
              {
                step: "03",
                title: "Visual Design",
                desc: "Create visual systems with appropriate chart types, color coding, and layout patterns that maximize readability and insight.",
                icon: PieChart,
              },
              {
                step: "04",
                title: "Prototype & Test",
                desc: "Build interactive prototypes, test with real users and real data, and iterate until every metric is crystal clear.",
                icon: Eye,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative p-6 rounded-2xl bg-background border border-border"
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
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Before & <span className="gradient-text">After</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See the transformation our dashboard redesigns deliver for real products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="rounded-2xl overflow-hidden border border-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-red-500/10 px-4 py-2 text-center">
                <span className="text-sm font-semibold text-red-500">Before</span>
              </div>
              <div className="p-6 bg-muted/30">
                <div className="space-y-3">
                  <div className="h-3 bg-muted-foreground/10 rounded w-full" />
                  <div className="h-3 bg-muted-foreground/10 rounded w-4/5" />
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-16 bg-muted-foreground/5 rounded" />
                    <div className="h-16 bg-muted-foreground/5 rounded" />
                  </div>
                  <div className="h-24 bg-muted-foreground/5 rounded mt-2" />
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">Cluttered layout, unclear hierarchy, poor data visibility</p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden border border-[#592DB5]/30"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-[#592DB5] to-[#773DF2] px-4 py-2 text-center">
                <span className="text-sm font-semibold text-white">After</span>
              </div>
              <div className="p-6 bg-muted/30">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { l: "Rev", v: "$48K" },
                    { l: "Users", v: "12.8K" },
                    { l: "Growth", v: "+23%" },
                  ].map((s, i) => (
                    <div key={i} className="bg-[#592DB5]/5 rounded-lg p-2 text-center border border-[#592DB5]/10">
                      <div className="text-[10px] text-muted-foreground">{s.l}</div>
                      <div className="text-sm font-bold text-[#592DB5]">{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="h-20 bg-[#592DB5]/5 rounded-lg border border-[#592DB5]/10 flex items-end px-2 pb-1 gap-0.5">
                  {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#592DB5] to-[#773DF2] rounded-t opacity-60" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">Clear hierarchy, visual data, actionable insights</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Technologies We <span className="gradient-text">Use</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work with the best data visualization and front-end technologies to build dashboards.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: LineChart, name: "D3.js" },
              { icon: BarChart3, name: "Chart.js" },
              { icon: PieChart, name: "Recharts" },
              { icon: MousePointer, name: "Figma" },
              { icon: RefreshCw, name: "React" },
              { icon: Settings, name: "Tableau" },
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

      <PageCTA
        title="Ready to Build a Better Dashboard?"
        subtitle="Transform your data into decisions with dashboards designed for clarity, speed, and impact. Let's make your data work harder."
        buttonText="Get Started"
      />
    </PageLayout>
  );
}
