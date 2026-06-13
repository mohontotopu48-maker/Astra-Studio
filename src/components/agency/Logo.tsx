'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'icon' | 'footer'
  className?: string
  onClick?: () => void
}

// D+N interlocking monogram matching the uploaded Design Nuvio logo concept
// Using brand purple gradient: #592DB5 → #773DF2
function MonogramIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#592DB5" />
          <stop offset="100%" stopColor="#773DF2" />
        </linearGradient>
      </defs>
      {/* Rounded square background */}
      <rect x="2" y="2" width="96" height="96" rx="20" fill="url(#brandGradient)" />

      {/* Letter D - left portion with curved right side */}
      <path
        d="M20 24H38C50 24 60 33 60 46V54C60 67 50 76 38 76H20V24Z"
        fill="white"
        fillOpacity="0.95"
      />
      {/* D inner cutout (creates the D shape with curved negative space) */}
      <path
        d="M30 34H36C43 34 49 39 49 46V54C49 61 43 66 36 66H30V34Z"
        fill="url(#brandGradient)"
      />

      {/* Letter N - right portion, interlocking with D */}
      <path
        d="M44 76V58L56 76H68V24H56V42L44 24H32V76H44Z"
        fill="white"
        fillOpacity="0.92"
      />
      {/* N inner cutout for diagonal */}
      <path
        d="M56 42V66L44 44V24H56V42Z"
        fill="url(#brandGradient)"
        fillOpacity="0.7"
      />

      {/* Subtle shine overlay on top half */}
      <rect x="2" y="2" width="96" height="46" rx="20" fill="white" fillOpacity="0.07" />
    </svg>
  )
}

export function Logo({ variant = 'full', className = '', onClick }: LogoProps) {
  if (variant === 'icon') {
    return (
      <motion.div
        className={className}
        whileHover={{ rotate: 90 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        onClick={onClick}
      >
        <MonogramIcon size={36} />
      </motion.div>
    )
  }

  if (variant === 'footer') {
    return (
      <button onClick={onClick} className={`flex items-center gap-2.5 group ${className}`}>
        <MonogramIcon size={32} />
        <div className="flex flex-col">
          <span className="text-lg font-semibold font-display tracking-tight leading-none">
            Design
          </span>
          <span className="text-xs bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent tracking-wide font-semibold">
            Nuvio
          </span>
        </div>
      </button>
    )
  }

  // Full variant (navigation)
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2.5 group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <MonogramIcon size={36} />
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-semibold font-display tracking-tight">
          Design
        </span>
        <span className="text-lg font-semibold font-display tracking-tight bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
          Nuvio
        </span>
      </div>
    </motion.button>
  )
}
