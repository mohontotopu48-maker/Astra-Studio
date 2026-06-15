'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'icon' | 'footer'
  className?: string
  onClick?: () => void
}

// D+N interlocking monogram — clean flat design
// Brand purple gradient: #592DB5 → #773DF2
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
          <stop offset="0%" stopColor="#773DF2" />
          <stop offset="100%" stopColor="#592DB5" />
        </linearGradient>
      </defs>

      {/* Black square background — sharp corners */}
      <rect x="0" y="0" width="100" height="100" fill="#0A0A14" />

      {/* D letter — outer shape */}
      <path
        d="M18 22H42C56 22 67 33 67 48V52C67 67 56 78 42 78H18V22Z"
        fill="url(#brandGrad)"
      />
      {/* D letter — inner cutout */}
      <path
        d="M30 34H40C48 34 54 40 54 48V52C54 60 48 66 40 66H30V34Z"
        fill="#0A0A14"
      />

      {/* N letter — interlocking through D's interior */}
      <path
        d="M44 78V60L56 78H72V22H58V40L44 22H30V78H44Z"
        fill="url(#brandGrad)"
      />
      {/* N inner cutout for diagonal */}
      <path
        d="M58 40V62L44 38V22H58V40Z"
        fill="#0A0A14"
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
            <span className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-[#773DF2] to-[#592DB5] bg-clip-text text-transparent">
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
        <span className="text-lg font-semibold font-display tracking-tight bg-gradient-to-r from-[#773DF2] to-[#592DB5] bg-clip-text text-transparent">
          Nuvio
        </span>
      </div>
    </motion.button>
  )
}
