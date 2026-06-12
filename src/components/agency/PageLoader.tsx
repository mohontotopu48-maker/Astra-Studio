'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent-cool)] flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="text-white font-bold text-2xl">A</span>
              </motion.div>
              
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent-cool)]"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
              />
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-[2px] bg-border/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-cool)] rounded-full loader-bar"
              />
            </div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-muted-foreground tracking-[0.3em] uppercase"
            >
              Astra Studio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
