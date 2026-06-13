"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "@/hooks/use-router";

export function PageCTA({
  title = "Ready to Transform Your Vision?",
  subtitle = "Let's collaborate to create something extraordinary. Book a discovery call and see how Design Nuvio can elevate your brand.",
  buttonText = "Book a Discovery Call",
  secondaryButtonText,
  onButtonClick,
  onSecondaryButtonClick,
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  secondaryButtonText?: string;
  onButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}) {
  const { navigate } = useRouter();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#592DB5] to-[#773DF2]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Decorative orbs */}
      <motion.div
        className="absolute top-10 right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-48 h-48 bg-white/5 rounded-full blur-[60px]"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Start Your Project
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            {title}
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={
                onButtonClick || (() => navigate("contact"))
              }
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#592DB5] font-semibold rounded-xl hover:bg-white/90 transition-all hover:scale-105"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
            {secondaryButtonText && (
              <button
                onClick={onSecondaryButtonClick || (() => navigate("home"))}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
