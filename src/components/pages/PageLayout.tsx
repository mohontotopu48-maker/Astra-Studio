"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter, type PageRoute } from "@/hooks/use-router";
import { Navigation } from "@/components/agency/Navigation";
import { Footer } from "@/components/agency/Footer";
import { ScrollProgress } from "@/components/agency/ScrollProgress";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  badge?: string;
  gradient?: string;
}

export function PageLayout({
  children,
  title,
  subtitle,
  badge = "Astra Studio",
  gradient = "from-[#592DB5] to-[#773DF2]",
}: PageLayoutProps) {
  const { goHome } = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollProgress />
      <Navigation />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${gradient} opacity-[0.07] rounded-full blur-[120px]`}
            />
            <div
              className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr ${gradient} opacity-[0.05] rounded-full blur-[100px]`}
            />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <motion.button
              onClick={goHome}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </motion.button>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r ${gradient} text-white`}
              >
                {badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          </div>
        </section>

        {/* Page Content */}
        <div>{children}</div>
      </main>

      <Footer />
    </div>
  );
}
