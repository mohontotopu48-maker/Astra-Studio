'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'icon' | 'footer'
  className?: string
  onClick?: () => void
}

// D+N interlocking monogram — clean flat design
// Purple gradient: #773DF2 (light, top-left) → #592DB5 (deep, bottom-right)
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
        <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9B6BF5" />
          <stop offset="50%" stopColor="#773DF2" />
          <stop offset="100%" stopColor="#592DB5" />
        </linearGradient>
      </defs>

      {/* Black square background — sharp corners */}
      <rect x="0" y="0" width="100" height="100" fill="#000000" />

      {/* === D letter === */}
      {/* D outer shape — vertical stem + curved right side */}
      <path
        d="M16 20 H38 C54 20 66 32 66 48 V52 C66 68 54 80 38 80 H16 Z"
        fill="url(#brandGrad)"
      />
      {/* D inner cutout — creates the hole inside the D */}
      <path
        d="M28 32 H38 C47 32 54 39 54 48 V52 C54 61 47 68 38 68 H28 Z"
        fill="#000000"
      />

      {/* === N letter === */}
      {/* N shape — interlocking through D's interior */}
      {/* Left vertical of N starts inside D, diagonal goes up-right, right vertical on the right */}
      <path
        d="M44 80 V62 L56 80 H78 V20 H62 V40 L44 20 H28 V80 H44 Z"
        fill="url(#brandGrad)"
      />
      {/* N inner cutout for the diagonal negative space */}
      <path
        d="M62 40 V64 L44 38 V20 H62 V40 Z"
        fill="#000000"
      />
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
      <button onClick={onClick} className={`flex flex-col items-start group ${className}`}>
        <div className="flex items-center gap-3 mb-2">
          <MonogramIcon size={40} />
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold font-display tracking-tight text-white">
              Design
            </span>
            <span className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-[#9B6BF5] via-[#773DF2] to-[#592DB5] bg-clip-text text-transparent">
              Nuvio
            </span>
          </div>
        </div>
        {/* Tagline with decorative lines */}
        <div className="flex items-center gap-2 ml-[52px]">
          <div className="w-5 h-[1px] bg-gradient-to-r from-[#592DB5] to-[#773DF2]" />
          <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
            Creative, Innovative &amp; Elegant
          </span>
          <div className="w-5 h-[1px] bg-gradient-to-r from-[#773DF2] to-[#592DB5]" />
        </div>
      </button>
    )
  }

  // Full variant (navigation) — horizontal layout
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
        <span className="text-lg font-semibold font-display tracking-tight bg-gradient-to-r from-[#9B6BF5] via-[#773DF2] to-[#592DB5] bg-clip-text text-transparent">
          Nuvio
        </span>
      </div>
    </motion.button>
  )
}
