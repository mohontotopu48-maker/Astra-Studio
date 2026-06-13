'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'icon' | 'footer'
  className?: string
  onClick?: () => void
}

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
      {/* Background rounded square */}
      <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#brandGradient)" />
      
      {/* Letter A - stylized geometric form */}
      <path
        d="M24 72L38 28H42L32 60H48L46 72H24Z"
        fill="white"
        fillOpacity="0.95"
      />
      {/* A crossbar */}
      <path
        d="M30 54H44L42.5 60H31.5L30 54Z"
        fill="white"
        fillOpacity="0.4"
      />
      
      {/* Letter S - interlocking with A */}
      <path
        d="M56 32C56 32 58 28 66 28C74 28 76 32 76 36C76 42 68 42 64 42C60 42 52 42 52 48C52 54 58 56 64 56C70 56 76 54 76 54L74 62C74 62 70 66 62 66C54 66 50 62 50 58C50 52 58 50 62 50C66 50 72 50 72 44C72 38 66 38 62 38C58 38 54 38 54 34C54 32 56 32 56 32Z"
        fill="white"
        fillOpacity="0.9"
      />
      
      {/* Subtle shine overlay */}
      <rect x="2" y="2" width="96" height="48" rx="22" fill="white" fillOpacity="0.06" />
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
            Astra
          </span>
          <span className="text-xs text-muted-foreground tracking-wide">Studio</span>
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
          Astra
        </span>
        <span className="text-lg font-semibold font-display tracking-tight bg-gradient-to-r from-[#592DB5] to-[#773DF2] bg-clip-text text-transparent">
          Studio
        </span>
      </div>
    </motion.button>
  )
}
