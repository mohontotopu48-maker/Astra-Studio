'use client'

import { useRouter, type PageRoute } from '@/hooks/use-router'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/agency/Logo'

const footerLinks: Record<string, { label: string; route: PageRoute }[]> = {
  Services: [
    { label: 'Product Design', route: 'product-design' },
    { label: 'SaaS Design', route: 'saas-design' },
    { label: 'Dashboard Design', route: 'dashboard-design' },
    { label: 'Mobile App Design', route: 'mobile-app-design' },
    { label: 'UX Audit', route: 'ux-audit' },
    { label: 'Design Systems', route: 'design-systems' },
  ],
  Company: [
    { label: 'About', route: 'about' },
    { label: 'Case Studies', route: 'case-studies' },
    { label: 'Process', route: 'process' },
    { label: 'Careers', route: 'careers' },
    { label: 'Contact', route: 'contact' },
  ],
  Industries: [
    { label: 'SaaS', route: 'saas' },
    { label: 'Fintech', route: 'fintech' },
    { label: 'AI', route: 'ai' },
    { label: 'Healthcare', route: 'healthcare' },
  ],
  Resources: [
    { label: 'Blog', route: 'blog' },
    { label: 'FAQ', route: 'faq' },
    { label: 'Privacy Policy', route: 'privacy-policy' },
    { label: 'Terms of Service', route: 'terms-of-service' },
  ],
}

export function Footer() {
  const { navigate, goHome } = useRouter()

  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Logo variant="footer" onClick={goHome} className="mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Premium UI/UX &amp; Brand Design Agency. Crafting digital
              experiences that drive growth.
            </p>
            <div className="flex gap-3">
              {['X', 'Li', 'Dr', 'Ig'].map((social) => (
                <button
                  key={social}
                  onClick={goHome}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  {social}
                </button>
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
                    <button
                      onClick={() => navigate(link.route)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
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
            <button
              onClick={() => navigate('privacy-policy')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('terms-of-service')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
