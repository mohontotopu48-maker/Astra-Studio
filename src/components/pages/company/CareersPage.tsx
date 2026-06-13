"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BookOpen,
  HeartPulse,
  DollarSign,
  Sparkles,
  PartyPopper,
  MapPin,
  Clock,
  Building2,
  ChevronRight,
  FileText,
  UserSearch,
  MessageSquare,
  Award,
  ArrowRight,
  Palette,
  Code,
  Search,
  Briefcase,
  Monitor,
  Layers,
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

const perks = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in the world. Our distributed team spans 12+ countries and counting.",
    gradient: "from-[#592DB5] to-[#773DF2]",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    description: "$3,000 annual budget for courses, conferences, books, and professional development.",
    gradient: "from-[#773DF2] to-[#9B6BF5]",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness stipend for all team members.",
    gradient: "from-[#9B6BF5] to-[#B68DF7]",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Top-of-market salaries with equity options. We believe great talent deserves great compensation.",
    gradient: "from-[#4520A0] to-[#592DB5]",
  },
  {
    icon: Sparkles,
    title: "Creative Freedom",
    description: "20% time for passion projects. Explore new tools, techniques, and ideas that push boundaries.",
    gradient: "from-[#592DB5] to-[#4520A0]",
  },
  {
    icon: PartyPopper,
    title: "Team Events",
    description: "Annual retreats, quarterly team offsites, and virtual social events that bring us together.",
    gradient: "from-[#773DF2] to-[#4520A0]",
  },
];

const positions = [
  {
    title: "Senior UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    icon: Palette,
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote / NYC",
    type: "Full-time",
    icon: Code,
  },
  {
    title: "UX Researcher",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    icon: Search,
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "London / Remote",
    type: "Full-time",
    icon: Briefcase,
  },
  {
    title: "Motion Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    icon: Monitor,
  },
  {
    title: "Design System Engineer",
    department: "Engineering",
    location: "Remote / Singapore",
    type: "Full-time",
    icon: Layers,
  },
];

const cultureValues = [
  {
    title: "Bold Creativity",
    description: "We encourage wild ideas and creative risk-taking. The best solutions often come from the most unexpected places. Every team member is empowered to push creative boundaries.",
    icon: Sparkles,
  },
  {
    title: "Radical Transparency",
    description: "From company finances to project roadmaps, we believe in open communication. Knowledge sharing isn't just encouraged — it's expected. We trust our team with the full picture.",
    icon: MessageSquare,
  },
  {
    title: "Relentless Growth",
    description: "We hire people who are hungry to learn and grow. Mistakes are celebrated as learning opportunities, and every challenge is a chance to level up — individually and collectively.",
    icon: Award,
  },
];

const hiringSteps = [
  {
    step: 1,
    title: "Application",
    description: "Submit your resume and a short note about why Design Nuvio excites you.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Portfolio Review",
    description: "Our team reviews your work and assesses alignment with our design philosophy.",
    icon: UserSearch,
  },
  {
    step: 3,
    title: "Technical Interview",
    description: "A collaborative session where we work through a real design or engineering challenge together.",
    icon: MessageSquare,
  },
  {
    step: 4,
    title: "Offer",
    description: "Welcome to the team! We move fast — most candidates receive an offer within 2 weeks.",
    icon: Award,
  },
];

export default function CareersPage() {
  return (
    <PageLayout
      title="Join Design Nuvio"
      subtitle="Build the future of design with us. We're looking for passionate people who want to create work that matters."
      badge="Careers"
    >
      {/* Why Join */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Why Join Design Nuvio?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We invest in our people because extraordinary work requires extraordinary teams.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 hover:shadow-lg hover:shadow-[#592DB5]/5 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${perk.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <perk.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{perk.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your next role and help us shape the future of digital design.
            </p>
          </motion.div>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-border bg-card hover:border-[#592DB5]/40 hover:shadow-lg hover:shadow-[#592DB5]/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <position.icon className="w-5 h-5 text-[#773DF2]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold group-hover:text-[#592DB5] transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Building2 className="w-3 h-3" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#592DB5]/20 transition-all shrink-0">
                  Apply
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Culture isn&apos;t what&apos;s on the wall — it&apos;s what happens when no one is watching.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-2xl border border-[#592DB5]/20 bg-gradient-to-br from-[#592DB5]/5 to-transparent text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#592DB5] to-[#773DF2] flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Hiring Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our process is designed to be fair, transparent, and respectful of your time.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step, index) => (
              <motion.div
                key={step.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-6 rounded-2xl border border-border bg-card text-center"
              >
                <span className="text-5xl font-display font-bold text-[#592DB5]/10 absolute top-4 right-4">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#592DB5] to-[#773DF2] flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Make Your Mark?"
        subtitle="Join a team where your creativity is valued, your growth is supported, and your work makes a real impact."
        buttonText="Apply Now"
      />
    </PageLayout>
  );
}
