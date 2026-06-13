'use client'

import { Navigation } from '@/components/agency/Navigation'
import { Hero } from '@/components/agency/Hero'
import { ClientLogos } from '@/components/agency/ClientLogos'
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main className="flex-1">
        <Hero />
        <ClientLogos />
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
    </div>
  )
}
