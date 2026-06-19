"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Cookie,
  Globe,
  Users,
  FileText,
  Mail,
  AlertTriangle,
  Clock,
  Database,
  Scale,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";

const sections = [
  {
    icon: <Database className="w-5 h-5" />,
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you interact with our services, we may collect personal information that you voluntarily provide, including your name, email address, phone number, company name, job title, and any other information you choose to provide when filling out forms, subscribing to our newsletter, or contacting us. This information is essential for us to deliver our services and communicate effectively with you.",
      },
      {
        subtitle: "Usage Information",
        text: "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, links clicked, and the date and time of your visit. This information helps us understand how visitors use our website and enables us to improve the user experience and optimize our content.",
      },
      {
        subtitle: "Cookies and Tracking Technologies",
        text: "We use cookies, web beacons, pixels, and similar tracking technologies to collect information about your browsing activities. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of certain features on our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until they expire or are deleted).",
      },
    ],
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "2. How We Use Your Information",
    content: [
      {
        text: "We use the information we collect for the following purposes: to provide, maintain, and improve our services; to process your inquiries and requests; to send you newsletters, marketing communications, and updates (with your consent); to analyze usage trends and optimize our website performance; to protect against unauthorized access and legal liability; to comply with applicable laws and regulations; and to personalize your experience on our platform. We always strive to use your information in a manner that is fair, lawful, and transparent.",
      },
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "3. Information Sharing",
    content: [
      {
        text: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or serving our users, provided they agree to keep this information confidential. We may also disclose your information when we believe in good faith that such disclosure is necessary to comply with the law, enforce our policies, respond to claims, or protect the rights, property, or safety of Design Nuvio, our users, or others. In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
      },
    ],
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "4. Data Security",
    content: [
      {
        text: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit (SSL/TLS), secure server infrastructure, access controls, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security. We encourage you to use strong passwords and to never share your login credentials with others.",
      },
    ],
  },
  {
    icon: <Cookie className="w-5 h-5" />,
    title: "5. Cookies & Tracking",
    content: [
      {
        text: "Our website uses various types of cookies to enhance your browsing experience. Essential cookies are necessary for the website to function properly and cannot be disabled. Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. Performance cookies are used to understand and analyze key performance indexes. Marketing cookies are used to deliver advertisements more relevant to you. You can manage your cookie preferences at any time through our cookie consent banner or your browser settings.",
      },
    ],
  },
  {
    icon: <Scale className="w-5 h-5" />,
    title: "6. Your Rights",
    content: [
      {
        text: "Depending on your location, you may have certain rights regarding your personal information. These may include the right to access, correct, or delete your personal data; the right to restrict or object to the processing of your data; the right to data portability; the right to withdraw consent at any time; and the right to lodge a complaint with a supervisory authority. To exercise any of these rights, please contact us at privacy@designnuvio.com. We will respond to your request within 30 days in accordance with applicable data protection laws.",
      },
    ],
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "7. Third-Party Services",
    content: [
      {
        text: "Our website may contain links to third-party websites or services that are not owned or controlled by Design Nuvio. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policies of any third-party services you access. The inclusion of any link does not imply our endorsement. We use third-party services including Google Analytics for website analytics, Vercel for hosting, and SendGrid for email communications, each of which has their own privacy policies.",
      },
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "8. Children's Privacy",
    content: [
      {
        text: "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have inadvertently collected personal information from a child under 16, we will take immediate steps to delete such information from our records. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at privacy@designnuvio.com so we can take appropriate action.",
      },
    ],
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "9. International Data Transfers",
    content: [
      {
        text: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from your jurisdiction. By using our services, you consent to such transfers. We take appropriate safeguards to ensure your data is protected in accordance with this privacy policy, including using Standard Contractual Clauses approved by the European Commission and ensuring our partners maintain adequate security measures.",
      },
    ],
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "10. Changes to This Policy",
    content: [
      {
        text: "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on this page with an updated 'Last Updated' date. We will also send an email notification for material changes to our privacy practices. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes constitutes your acceptance of the updated policy.",
      },
    ],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "11. Contact Us",
    content: [
      {
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
      },
    ],
    contact: true,
  },
];

export function PrivacyPolicyPage() {
  return (
    <PageLayout
      badge="Privacy Policy"
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy outlines how Design Nuvio collects, uses, and protects your information."
    >
      {/* Last Updated */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground"
          >
            <Clock className="w-4 h-4" />
            Last Updated: March 1, 2025
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-[#592DB5]" />
              <h2 className="text-lg font-display font-semibold">
                Table of Contents
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((section, i) => (
                <a
                  key={i}
                  href={`#section-${i + 1}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#592DB5] transition-colors py-1.5"
                >
                  <span className="w-6 h-6 rounded-md bg-[#592DB5]/10 text-[#592DB5] text-xs font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {section.title.replace(/^\d+\.\s/, "")}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              id={`section-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#592DB5] to-[#773DF2] text-white flex items-center justify-center shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold">
                  {section.title}
                </h2>
              </div>
              <div className="pl-[52px] space-y-4">
                {section.content.map((block, j) => (
                  <div key={j}>
                    {block.subtitle && (
                      <h3 className="text-base font-semibold mb-2 text-foreground">
                        {block.subtitle}
                      </h3>
                    )}
                    <p className="text-muted-foreground leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                ))}
                {section.contact && (
                  <div className="mt-4 p-5 rounded-xl bg-muted/50 border border-border/50">
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold text-foreground">
                        Design Nuvio
                      </p>
                      <p className="text-muted-foreground">
                        Email: privacy@designnuvio.com
                      </p>
                      <p className="text-muted-foreground">
                        Address: 123 Design Avenue, San Francisco, CA 94102
                      </p>
                      <p className="text-muted-foreground">
                        Phone: +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#592DB5]/10 mb-4">
              <Shield className="w-7 h-7 text-[#592DB5]" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">
              Questions About Your Privacy?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're committed to protecting your data. If you have any questions
              or concerns about our privacy practices, don't hesitate to reach
              out.
            </p>
            <a
              href="mailto:privacy@designnuvio.com"
              className="inline-flex items-center gap-2 text-[#592DB5] font-semibold hover:gap-3 transition-all"
            >
              <Mail className="w-4 h-4" />
              privacy@designnuvio.com
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
