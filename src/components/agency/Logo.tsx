'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'icon' | 'footer'
  className?: string
  onClick?: () => void
}

// D+N interlocking monogram with neon glow effect
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
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#592DB5" />
          <stop offset="100%" stopColor="#773DF2" />
        </linearGradient>
        <linearGradient id="brandGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9B6BF5" />
          <stop offset="100%" stopColor="#B68DF7" />
        </linearGradient>
        {/* Neon glow filter */}
        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Dark rounded square background */}
      <rect x="2" y="2" width="96" height="96" rx="20" fill="#0A0A14" />
      {/* Subtle inner border */}
      <rect x="3" y="3" width="94" height="94" rx="19" fill="none" stroke="#592DB5" strokeOpacity="0.3" strokeWidth="0.5" />

      {/* D letter - outer path */}
      <path
        d="M22 26H40C52 26 62 35 62 48V52C62 65 52 74 40 74H22V26Z"
        fill="url(#brandGradient)"
        filter="url(#neonGlow)"
      />
      {/* D letter - inner cutout */}
      <path
        d="M32 36H38C45 36 51 41 51 48V52C51 59 45 64 38 64H32V36Z"
        fill="#0A0A14"
      />
      {/* D inner outline */}
      <path
        d="M32 36H38C45 36 51 41 51 48V52C51 59 45 64 38 64H32"
        fill="none"
        stroke="url(#brandGradientLight)"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />

      {/* N letter - outer path */}
      <path
        d="M46 74V56L58 74H70V26H58V44L46 26H34V74H46Z"
        fill="url(#brandGradient)"
        filter="url(#neonGlow)"
      />
      {/* N letter - inner cutout for diagonal */}
      <path
        d="M58 44V64L46 42V26H58V44Z"
        fill="#0A0A14"
      />
      {/* N inner outline */}
      <path
        d="M34 74V26H46L58 44V26H70V74H58L46 56V74H34Z"
        fill="none"
        stroke="url(#brandGradientLight)"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />

      {/* Subtle shine overlay */}
      <rect x="2" y="2" width="96" height="46" rx="20" fill="white" fillOpacity="0.04" />
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
