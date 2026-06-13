"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Award,
  Users,
  Heart,
  UserCheck,
  TrendingUp,
  Star,
  Target,
  Eye,
  Rocket,
  Briefcase,
  Palette,
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

const coreValues = [
  { icon: Lightbulb, title: "Innovation", description: "We push boundaries and explore new frontiers in design, never settling for the ordinary." },
  { icon: Award, title: "Excellence", description: "Every pixel, every interaction is crafted with meticulous attention to detail and quality." },
  { icon: Users, title: "Collaboration", description: "Great work happens when brilliant minds come together with a shared purpose." },
  { icon: Heart, title: "Integrity", description: "We build trust through transparency, honesty, and delivering on our promises." },
  { icon: UserCheck, title: "User-First", description: "The people who use our designs are at the heart of every decision we make." },
  { icon: TrendingUp, title: "Growth", description: "We embrace continuous learning and evolution to stay ahead of the curve." },
];

const teamMembers = [
  { name: "Alexandra Chen", role: "CEO & Co-Founder", gradient: "from-[#592DB5] to-[#9B6BF5]" },
  { name: "Marcus Rivera", role: "CTO", gradient: "from-[#773DF2] to-[#B68DF7]" },
  { name: "Sophia Laurent", role: "Head of Design", gradient: "from-[#4520A0] to-[#773DF2]" },
  { name: "James Okafor", role: "Lead Developer", gradient: "from-[#9B6BF5] to-[#592DB5]" },
  { name: "Yuki Tanaka", role: "UX Researcher", gradient: "from-[#B68DF7] to-[#4520A0]" },
  { name: "Elena Petrova", role: "Project Manager", gradient: "from-[#592DB5] to-[#773DF2]" },
];

const awards = [
  { title: "Awwwards SOTD", year: "2024", org: "Awwwards" },
  { title: "Design Excellence", year: "2023", org: "Red Dot" },
  { title: "Best UI Design", year: "2023", org: "CSS Design Awards" },
  { title: "Agency of the Year", year: "2022", org: "FWA" },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "12+", label: "Years of Experience" },
  { value: "4.9", label: "Client Rating" },
];

const timelineEvents = [
  { year: "2012", title: "The Beginning", description: "Founded in a small studio with a vision to transform digital experiences." },
  { year: "2016", title: "Global Expansion", description: "Opened offices in London and Singapore, serving clients across 3 continents." },
  { year: "2020", title: "Design System Pioneers", description: "Launched our proprietary design system methodology adopted by Fortune 500 companies." },
  { year: "2024", title: "AI-Powered Design", description: "Integrated AI into our workflow, delivering faster and more innovative solutions." },
];

export default function AboutPage() {
  return (
    <PageLayout
      title="About Astra Studio"
      subtitle="We are a team of passionate designers and engineers dedicated to crafting exceptional digital experiences that drive real business results."
      badge="About Us"
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
              src="/images/about-team.png"
              alt="About Astra Studio"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a bold idea to a globally recognized design agency — our journey has been driven by an unwavering commitment to design excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#592DB5] to-[#773DF2] hidden md:block" />
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  {...stagger}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-[#773DF2] font-display font-bold text-lg">{event.year}</span>
                    <h3 className="text-xl font-display font-semibold mt-1">{event.title}</h3>
                    <p className="text-muted-foreground mt-2">{event.description}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#592DB5] to-[#773DF2] shrink-0 ring-4 ring-background hidden md:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeInUp}
              className="relative p-8 rounded-2xl border border-[#592DB5]/20 bg-gradient-to-br from-[#592DB5]/5 to-transparent"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#592DB5] to-[#773DF2] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with world-class design that transforms complex challenges into intuitive, delightful experiences. We bridge the gap between vision and reality through strategic design thinking and cutting-edge technology.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-8 rounded-2xl border border-[#773DF2]/20 bg-gradient-to-br from-[#773DF2]/5 to-transparent"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#773DF2] to-[#9B6BF5] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world&apos;s most trusted design partner — where every brand, regardless of size, has access to design that drives meaningful impact. We envision a future where thoughtful design is the standard, not the exception.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do — from how we design to how we collaborate.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 hover:shadow-lg hover:shadow-[#592DB5]/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#592DB5] to-[#773DF2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who bring bold ideas to life every day.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 hover:shadow-lg transition-all text-center"
              >
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} mx-auto mb-4 flex items-center justify-center`}
                >
                  <span className="text-white font-display font-bold text-xl">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold">{member.name}</h3>
                <p className="text-[#773DF2] text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our work has been recognized by the most prestigious design organizations worldwide.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card text-center hover:border-[#592DB5]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-[#773DF2]" />
                </div>
                <h3 className="font-display font-semibold">{award.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{award.org}</p>
                <span className="text-[#773DF2] text-sm font-medium mt-2 inline-block">{award.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">By the Numbers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl text-center bg-gradient-to-br from-[#592DB5]/5 via-[#773DF2]/5 to-transparent border border-[#592DB5]/10"
              >
                <span className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </PageLayout>
  );
}
