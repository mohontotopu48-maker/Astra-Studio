"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, UserCircle, Stethoscope, Accessibility, Lock,
  Video, Palette, LayoutDashboard, Component, Search, ArrowRight,
  HeartPulse, ClipboardCheck, Eye, FileCheck, Scale,
  CheckCircle2, Star, HandHeart,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const challenges = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance",
    description: "Designing interfaces that meet strict HIPAA requirements for protected health information—from secure data display and audit logging to role-based access controls woven naturally into the user experience.",
  },
  {
    icon: UserCircle,
    title: "Patient Portal UX",
    description: "Creating patient-facing portals that are genuinely usable by diverse populations—handling appointment scheduling, test results, messaging, and billing with clarity and compassion for people in vulnerable moments.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Workflow",
    description: "Streamlining complex clinical workflows—charting, ordering, referrals—so healthcare providers spend less time navigating software and more time focused on patient care and critical decisions.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Ensuring healthcare interfaces are accessible to all users—including elderly patients, those with visual impairments, limited tech literacy, or cognitive challenges—because healthcare is for everyone.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Building privacy-by-design into every interaction—consent management, data minimization, anonymization patterns, and clear communication about how sensitive health information is used and protected.",
  },
  {
    icon: Video,
    title: "Telehealth Interfaces",
    description: "Designing seamless telehealth experiences that handle video consultations, waiting rooms, document sharing, and follow-up care while maintaining the warmth and reassurance of an in-person visit.",
  },
];

const services = [
  {
    icon: Palette,
    title: "Healthcare Product Design",
    description: "End-to-end product design for patient portals, EHR systems, and health platforms with regulatory compliance and clinical validity integrated from the first wireframe.",
  },
  {
    icon: LayoutDashboard,
    title: "Clinical Dashboard Design",
    description: "Provider-facing dashboards that surface critical patient data, alerts, and workflows efficiently—reducing cognitive load during high-pressure clinical decision-making.",
  },
  {
    icon: Component,
    title: "Healthcare Design Systems",
    description: "Component libraries built for medical interfaces—compliant form patterns, medication displays, vital sign components—that ensure consistency and safety across your product ecosystem.",
  },
  {
    icon: Search,
    title: "Healthcare UX Audit",
    description: "Comprehensive usability evaluation focused on clinical safety, patient comprehension, accessibility compliance, and workflow efficiency for your existing healthcare product.",
  },
];

const stats = [
  { value: "94%", label: "Patient Satisfaction", description: "After portal UX redesign" },
  { value: "3.2x", label: "Portal Adoption", description: "Accessibility-first design" },
  { value: "58%", label: "Charting Time Reduction", description: "Clinical workflow optimization" },
  { value: "100%", label: "HIPAA Compliance", description: "Regulation-first approach" },
];

const complianceStandards = [
  { icon: ShieldCheck, name: "HIPAA", description: "Full compliance with Health Insurance Portability and Accountability Act for all PHI handling and display" },
  { icon: ClipboardCheck, name: "HITECH", description: "Health Information Technology standards for electronic health records and meaningful use requirements" },
  { icon: Eye, name: "WCAG 2.1 AAA", description: "Highest accessibility standards ensuring healthcare is usable by people with all abilities and disabilities" },
  { icon: FileCheck, name: "21 CFR Part 11", description: "FDA electronic records and signatures compliance for medical device software interfaces" },
  { icon: Scale, name: "ADA Compliance", description: "Americans with Disabilities Act requirements for healthcare digital services and public accommodations" },
  { icon: HandHeart, name: "Section 508", description: "Federal accessibility standards ensuring healthcare technology is accessible to all users regardless of ability" },
];

export default function HealthcarePage() {
  return (
    <PageLayout
      title="Healthcare Design That Cares"
      subtitle="We design compassionate, compliant, and accessible healthcare experiences that improve patient outcomes and empower clinical professionals."
      badge="Healthcare Industry"
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
              src="/images/healthcare-hero.png"
              alt="Healthcare Design"
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
              Designing for{" "}
              <span className="text-[#773DF2]">Health & Wellbeing</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Healthcare design carries a unique responsibility. Unlike other industries,
              the stakes are personal—a confusing medication display, an inaccessible
              appointment flow, or an unclear test result can directly impact someone&apos;s
              health and wellbeing. At Design Nuvio, we treat every healthcare project with
              the gravity and empathy it deserves.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our healthcare design practice combines deep regulatory expertise with
              human-centered design methodology. We work closely with clinical advisors,
              patient advocates, and compliance teams to create interfaces that are not just
              usable, but genuinely helpful—reducing the burden on both patients and
              providers while meeting the strictest privacy and accessibility standards.
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
              Healthcare Design <span className="text-[#773DF2]">Challenges</span>
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
              Our Healthcare Design <span className="text-[#773DF2]">Services</span>
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
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#B68DF7]/10 to-transparent rounded-full blur-[80px]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#592DB5]/10 text-[#773DF2] text-xs font-semibold uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5" /> Case Study Highlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                MedConnect — Patient Portal Redesign
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                MedConnect served 2 million patients through a portal that only 23% could
                navigate successfully. We redesigned the entire patient experience—from
                appointment booking to test result delivery—with accessibility and health
                literacy at the core. The redesign achieved 89% task completion, a 4.8/5
                patient satisfaction score, and full WCAG 2.1 AAA compliance.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">89% task completion rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">4.8/5 patient satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#773DF2]" />
                  <span className="text-sm font-medium">WCAG AAA certified</span>
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
              Healthcare Design <span className="text-[#773DF2]">Statistics</span>
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

      {/* Compliance & Accessibility Standards */}
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
              Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Compliance & Accessibility <span className="text-[#773DF2]">Standards</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Healthcare design demands the highest standards of compliance and
              accessibility. We build every interface to exceed regulatory requirements
              and serve every patient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, i) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl border border-border/50 bg-background hover:border-[#592DB5]/30 transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#4520A0]/10 to-[#773DF2]/10 flex items-center justify-center">
                  <standard.icon className="w-5 h-5 text-[#773DF2]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-display">{standard.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{standard.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Accessibility commitment banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#592DB5]/5 to-[#773DF2]/5 border border-[#592DB5]/20"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold font-display mb-2">
                  Our Accessibility Commitment
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe healthcare is a right, not a privilege. That&apos;s why every
                  healthcare interface we design exceeds WCAG 2.1 AAA standards by default.
                  We conduct usability testing with diverse populations—including elderly
                  users, those with visual and motor impairments, and people with limited
                  English proficiency—to ensure our designs truly work for everyone who
                  needs care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA
        title="Ready to Improve Patient Outcomes Through Design?"
        subtitle="Let's create healthcare experiences that are compassionate, compliant, and truly accessible. Book a discovery call with our healthcare design team."
        buttonText="Start Your Healthcare Project"
      />
    </PageLayout>
  );
}
