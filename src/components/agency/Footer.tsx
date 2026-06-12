'use client'

import { Separator } from '@/components/ui/separator'

const footerLinks = {
  Services: [
    { label: 'Product Design', href: '#services' },
    { label: 'SaaS Design', href: '#services' },
    { label: 'Dashboard Design', href: '#services' },
    { label: 'Mobile App Design', href: '#services' },
    { label: 'UX Audit', href: '#services' },
    { label: 'Design Systems', href: '#services' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Industries: [
    { label: 'SaaS', href: '#' },
    { label: 'Fintech', href: '#' },
    { label: 'AI', href: '#' },
    { label: 'Healthcare', href: '#' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent-cool)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Astra Studio
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Premium UI/UX &amp; Brand Design Agency. Crafting digital
              experiences that drive growth.
            </p>
            <div className="flex gap-3">
              {['X', 'Li', 'Dr', 'Ig'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-border/50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Astra Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
