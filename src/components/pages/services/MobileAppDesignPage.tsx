"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Tablet,
  Watch,
  Globe,
  Apple,
  CheckCircle2,
  Layers,
  Search,
  Lightbulb,
  Rocket,
  Palette,
  Zap,
  Fingerprint,
  Navigation,
  MessageSquare,
  Camera,
  MapPin,
  Star,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";
import { PageCTA } from "@/components/pages/PageCTA";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function MobileAppDesignPage() {
  return (
    <PageLayout
      badge="Mobile App Design"
      title="Mobile App Design"
      subtitle="Craft stunning mobile experiences that delight users and achieve top ratings across iOS and Android platforms."
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
              src="/images/mobile-app-design-hero.png"
              alt="Mobile App Design"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Mobile-First Design Philosophy */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Mobile-First Design <span className="gradient-text">Philosophy</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                With over 6.8 billion smartphone users worldwide, mobile is no longer secondary — it&apos;s primary. Our mobile-first approach ensures every interaction is optimized for touch, every screen is designed for thumbs, and every experience is crafted for the small screen first.
              </p>
              <ul className="space-y-3">
                {[
                  "Touch-optimized interfaces with 44px minimum tap targets",
                  "Gesture-driven interactions that feel natural and intuitive",
                  "Performance-conscious design that loads in under 2 seconds",
                  "Offline-capable experiences that work without connectivity",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#773DF2] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-64 h-[500px] rounded-[2.5rem] bg-gradient-to-br from-[#592DB5] to-[#773DF2] flex items-center justify-center relative overflow-hidden border-[8px] border-foreground/10">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl" />
                <div className="relative w-full h-full p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-2 bg-white/30 rounded" />
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-20 bg-white/10 rounded-xl" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-white/10 rounded-xl" />
                      <div className="h-16 bg-white/10 rounded-xl" />
                    </div>
                    <div className="h-24 bg-white/10 rounded-xl" />
                    <div className="h-16 bg-white/10 rounded-xl" />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <div className="w-28 h-1 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Design */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              What We <span className="gradient-text">Design</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From native apps to cross-platform solutions, we design for every mobile context.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Apple,
                title: "iOS Apps",
                desc: "Pixel-perfect designs that follow Apple's Human Interface Guidelines and feel right at home on iPhone and iPad.",
              },
              {
                icon: Smartphone,
                title: "Android Apps",
                desc: "Material Design-aligned experiences that leverage Android's unique capabilities while maintaining brand identity.",
              },
              {
                icon: Layers,
                title: "Cross-Platform",
                desc: "Unified design systems for React Native and Flutter that deliver native-feeling experiences across both platforms.",
              },
              {
                icon: Watch,
                title: "Wearable Apps",
                desc: "Glanceable, context-aware interfaces for Apple Watch, Wear OS, and other wearable platforms.",
              },
              {
                icon: Globe,
                title: "Progressive Web Apps",
                desc: "App-like web experiences that work offline, send push notifications, and install directly from the browser.",
              },
              {
                icon: Tablet,
                title: "Tablet Apps",
                desc: "Enhanced layouts that take advantage of larger screens with split views, drag-and-drop, and richer interactions.",
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

      {/* Mobile Design Process */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Mobile Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our mobile design process is optimized for the unique constraints and opportunities of mobile platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Search,
                title: "Platform Research",
                desc: "Study platform conventions, user expectations, and competitive landscape specific to iOS and Android ecosystems.",
              },
              {
                step: "02",
                icon: Lightbulb,
                title: "UX Strategy",
                desc: "Define user flows, information architecture, and interaction patterns optimized for mobile contexts and environments.",
              },
              {
                step: "03",
                icon: Palette,
                title: "Visual Design",
                desc: "Create pixel-perfect designs for every screen size, state, and orientation with platform-appropriate aesthetics.",
              },
              {
                step: "04",
                icon: Rocket,
                title: "Dev Handoff",
                desc: "Deliver comprehensive specs, assets, and interactive prototypes that make implementation seamless and accurate.",
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

      {/* Platform Guidelines We Follow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Platform Guidelines We <span className="gradient-text">Follow</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We respect platform conventions while pushing creative boundaries, ensuring users feel at home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-2xl border border-border card-lift"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <Apple className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Apple Human Interface Guidelines</h3>
                  <p className="text-sm text-muted-foreground">iOS, iPadOS, watchOS</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "SF Symbols integration",
                  "Navigation patterns",
                  "Haptic feedback",
                  "Dynamic Type support",
                  "Safe area layouts",
                  "Dark mode native",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#592DB5]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl border border-border card-lift"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#592DB5]/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#592DB5]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Material Design 3</h3>
                  <p className="text-sm text-muted-foreground">Android, Wear OS</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Material You theming",
                  "Edge-to-edge layouts",
                  "Material motion",
                  "Adaptive icons",
                  "Gesture navigation",
                  "Compose elements",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#773DF2]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Design Statistics */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              App Design <span className="gradient-text">Statistics</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our mobile design work is backed by results that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "4.8", label: "Avg App Rating", icon: Star },
              { stat: "50%", label: "More Engaged", icon: Zap },
              { stat: "3x", label: "Faster Onboard", icon: Rocket },
              { stat: "2M+", label: "Downloads", icon: Navigation },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-background border border-border text-center stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-[#592DB5]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#592DB5]" />
                </div>
                <div className="text-3xl font-display font-bold gradient-text">{item.stat}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Build a Top-Rated App?"
        subtitle="From concept to App Store launch, we'll design a mobile experience your users will love. Let's create something exceptional."
        buttonText="Start Your App Project"
      />
    </PageLayout>
  );
}
