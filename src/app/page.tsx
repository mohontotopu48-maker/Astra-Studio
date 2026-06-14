'use client'

import { useRouter, type PageRoute } from '@/hooks/use-router'
import { Navigation } from '@/components/agency/Navigation'
import { Hero } from '@/components/agency/Hero'
import { Services } from '@/components/agency/Services'
import { About } from '@/components/agency/About'
import { CaseStudies } from '@/components/agency/CaseStudies'
import { Industries } from '@/components/agency/Industries'
import { Testimonials } from '@/components/agency/Testimonials'
import { Statistics } from '@/components/agency/Statistics'
import { FAQ } from '@/components/agency/FAQ'
import { CTA } from '@/components/agency/CTA'
import { ContactForm } from '@/components/agency/ContactForm'
import { Footer } from '@/components/agency/Footer'
import { CustomCursor } from '@/components/agency/CustomCursor'
import { PageLoader } from '@/components/agency/PageLoader'
import { ScrollProgress } from '@/components/agency/ScrollProgress'

// Service pages
import ProductDesignPage from '@/components/pages/services/ProductDesignPage'
import SaaSDesignPage from '@/components/pages/services/SaaSDesignPage'
import DashboardDesignPage from '@/components/pages/services/DashboardDesignPage'
import MobileAppDesignPage from '@/components/pages/services/MobileAppDesignPage'
import UXAuditPage from '@/components/pages/services/UXAuditPage'
import DesignSystemsPage from '@/components/pages/services/DesignSystemsPage'

// Company pages
import AboutPage from '@/components/pages/company/AboutPage'
import CaseStudiesPage from '@/components/pages/company/CaseStudiesPage'
import ProcessPage from '@/components/pages/company/ProcessPage'
import CareersPage from '@/components/pages/company/CareersPage'
import ContactPage from '@/components/pages/company/ContactPage'

// Industry pages
import SaaSPage from '@/components/pages/industries/SaaSPage'
import FintechPage from '@/components/pages/industries/FintechPage'
import AIPage from '@/components/pages/industries/AIPage'
import HealthcarePage from '@/components/pages/industries/HealthcarePage'

// Resource pages
import { BlogPage } from '@/components/pages/resources/BlogPage'
import { FAQPage } from '@/components/pages/resources/FAQPage'
import { PrivacyPolicyPage } from '@/components/pages/resources/PrivacyPolicyPage'
import { TermsOfServicePage } from '@/components/pages/resources/TermsOfServicePage'

const pageMap: Record<PageRoute, React.ComponentType> = {
  home: () => null, // handled separately
  'product-design': ProductDesignPage,
  'saas-design': SaaSDesignPage,
  'dashboard-design': DashboardDesignPage,
  'mobile-app-design': MobileAppDesignPage,
  'ux-audit': UXAuditPage,
  'design-systems': DesignSystemsPage,
  about: AboutPage,
  'case-studies': CaseStudiesPage,
  process: ProcessPage,
  careers: CareersPage,
  contact: ContactPage,
  saas: SaaSPage,
  fintech: FintechPage,
  ai: AIPage,
  healthcare: HealthcarePage,
  blog: BlogPage,
  faq: FAQPage,
  'privacy-policy': PrivacyPolicyPage,
  'terms-of-service': TermsOfServicePage,
}

function HomePage() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Industries />
        <Testimonials />
        <Statistics />
        <FAQ />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default function Home() {
  const { currentRoute } = useRouter()

  if (currentRoute === 'home') {
    return (
      <div className="min-h-screen flex flex-col">
        <HomePage />
      </div>
    )
  }

  const PageComponent = pageMap[currentRoute]
  if (PageComponent) {
    return <PageComponent />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HomePage />
    </div>
  )
}
