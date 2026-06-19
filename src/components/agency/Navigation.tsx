'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronDown, Palette, Monitor, LayoutDashboard, Smartphone, Search, Layers, Building2, BookOpen, Users, Briefcase, Mail, Cloud, Landmark, Brain, HeartPulse, FileText, HelpCircle, Shield, Scale } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useRouter, type PageRoute } from '@/hooks/use-router'
import { Logo } from '@/components/agency/Logo'

function ThemeToggle({ mounted, theme, setTheme }: { mounted: boolean; theme: string | undefined; setTheme: (theme: string) => void }) {
  if (!mounted) return <div className="w-9 h-9" />
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle color theme"
      className="rounded-full overflow-hidden relative"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-4 w-4" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}

interface NavChild {
  label: string
  route: PageRoute
  icon: React.ElementType
  description: string
}

interface NavParent {
  label: string
  children: NavChild[]
}

const navItems: NavParent[] = [
  {
    label: 'Services',
    children: [
      { label: 'Product Design', route: 'product-design', icon: Palette, description: 'End-to-end product design solutions' },
      { label: 'SaaS Design', route: 'saas-design', icon: Cloud, description: 'Design for SaaS platforms & tools' },
      { label: 'Dashboard Design', route: 'dashboard-design', icon: LayoutDashboard, description: 'Data-driven dashboard interfaces' },
      { label: 'Mobile App Design', route: 'mobile-app-design', icon: Smartphone, description: 'iOS & Android app experiences' },
      { label: 'UX Audit', route: 'ux-audit', icon: Search, description: 'Comprehensive usability analysis' },
      { label: 'Design Systems', route: 'design-systems', icon: Layers, description: 'Scalable component libraries' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About', route: 'about', icon: Building2, description: 'Our story & mission' },
      { label: 'Case Studies', route: 'case-studies', icon: BookOpen, description: 'Real results from real projects' },
      { label: 'Process', route: 'process', icon: Monitor, description: 'How we bring ideas to life' },
      { label: 'Careers', route: 'careers', icon: Users, description: 'Join our creative team' },
      { label: 'Contact', route: 'contact', icon: Mail, description: 'Get in touch with us' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'SaaS', route: 'saas', icon: Cloud, description: 'Software-as-a-Service solutions' },
      { label: 'Fintech', route: 'fintech', icon: Landmark, description: 'Financial technology design' },
      { label: 'AI', route: 'ai', icon: Brain, description: 'Artificial intelligence interfaces' },
      { label: 'Healthcare', route: 'healthcare', icon: HeartPulse, description: 'Health & medical design' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', route: 'blog', icon: FileText, description: 'Insights & design articles' },
      { label: 'FAQ', route: 'faq', icon: HelpCircle, description: 'Frequently asked questions' },
      { label: 'Privacy Policy', route: 'privacy-policy', icon: Shield, description: 'How we handle your data' },
      { label: 'Terms of Service', route: 'terms-of-service', icon: Scale, description: 'Our terms & conditions' },
    ],
  },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { navigate, goHome } = useRouter()

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const handleNavClick = (route: PageRoute) => {
    navigate(route)
    setOpenDropdown(null)
    setIsMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-[0_1px_0_0_oklch(1_0_0/5%)]'
            : 'bg-background/50 backdrop-blur-md'
        }`}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo variant="full" onClick={goHome} />

            {/* Desktop Nav with Dropdowns */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, i) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                >
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-300 rounded-lg ${
                      openDropdown === item.label
                        ? 'text-foreground bg-accent/50'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </motion.button>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72"
                      >
                        <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-2 overflow-hidden">
                          {item.children.map((child, j) => {
                            const Icon = child.icon
                            return (
                              <motion.button
                                key={child.route}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.03 }}
                                onClick={() => handleNavClick(child.route)}
                                className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-accent/50 transition-colors duration-200 text-left group"
                              >
                                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center group-hover:from-[#592DB5]/20 group-hover:to-[#773DF2]/20 transition-colors">
                                  <Icon className="w-4 h-4 text-[#773DF2]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-foreground group-hover:text-[#773DF2] transition-colors">
                                    {child.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                    {child.description}
                                  </div>
                                </div>
                              </motion.button>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hidden lg:flex items-center gap-3"
            >
              <ThemeToggle mounted={mounted} theme={theme} setTheme={setTheme} />
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={() => handleNavClick('contact')}
                  className="bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white border-0 hover:shadow-[0_0_30px_#592DB530] transition-shadow duration-500 rounded-full px-6 relative overflow-hidden"
                >
                  <span className="relative z-10">Start a Project</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle mounted={mounted} theme={theme} setTheme={setTheme} />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                className="rounded-full"
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden overflow-y-auto"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col px-6 pt-24 pb-8 gap-2"
            >
              {/* Home link */}
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => { goHome(); setIsMobileOpen(false) }}
                className="text-2xl font-medium text-foreground hover:text-[#773DF2] transition-colors duration-300 text-left py-2"
              >
                Home
              </motion.button>

              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full text-2xl font-medium text-foreground hover:text-[#773DF2] transition-colors duration-300 py-2"
                  >
                    {item.label}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-1">
                          {item.children.map((child) => {
                            const Icon = child.icon
                            return (
                              <button
                                key={child.route}
                                onClick={() => handleNavClick(child.route)}
                                className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-accent/50 transition-colors text-left"
                              >
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#592DB5]/10 to-[#773DF2]/10 flex items-center justify-center">
                                  <Icon className="w-4 h-4 text-[#773DF2]" />
                                </div>
                                <div>
                                  <div className="text-base font-medium text-foreground">{child.label}</div>
                                  <div className="text-xs text-muted-foreground">{child.description}</div>
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Button
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-gradient-to-r from-[#592DB5] to-[#773DF2] text-white border-0 rounded-full py-7 text-lg"
                >
                  Start a Project
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
