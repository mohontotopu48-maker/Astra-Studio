"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Handshake,
  Shield,
  CreditCard,
  Lock,
  AlertTriangle,
  XCircle,
  Gavel,
  RefreshCw,
  Mail,
  Clock,
  CheckCircle,
  Scale,
} from "lucide-react";
import { PageLayout } from "@/components/pages/PageLayout";

const sections = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the services provided by Design Nuvio ('Company', 'we', 'us', or 'our'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, you may not access or use our services. These Terms apply to all visitors, users, clients, and others who access or use our services. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our services after any such changes constitutes your acceptance of the new Terms. It is your responsibility to review these Terms periodically.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "2. Services Description",
    content:
      "Design Nuvio provides UI/UX design, brand identity development, product design, design system creation, UX audits, prototyping, and related consulting services. Our services are delivered through project-based engagements, retainer agreements, or customized packages as mutually agreed upon. The specific scope, deliverables, timeline, and terms for each engagement will be outlined in a separate Statement of Work (SOW) or project agreement. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with reasonable notice to affected clients.",
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "3. Project Agreements",
    content:
      "Each project engagement will be governed by a Statement of Work (SOW) that outlines the specific scope, deliverables, timeline, milestones, and fees. The SOW forms part of these Terms and, in the event of a conflict between the SOW and these Terms, the SOW shall prevail with respect to that specific project. Any changes to the agreed scope must be documented through a formal change order signed by both parties. Work outside the original SOW scope may incur additional charges at our standard hourly rates. We will always communicate scope changes and obtain approval before proceeding with additional work.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "4. Intellectual Property",
    content:
      "Upon full payment of all applicable fees, the client will receive ownership of the final deliverables as specified in the SOW. Design Nuvio retains ownership of all pre-existing intellectual property, tools, frameworks, and methodologies used in the creation of deliverables. We reserve the right to use general knowledge, skills, experience, and techniques acquired during the project for future engagements. We also reserve the right to showcase the work in our portfolio and marketing materials unless a written confidentiality agreement states otherwise. Any third-party assets used in the project remain subject to their respective licenses.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "5. Client Responsibilities",
    content:
      "The client agrees to provide timely access to necessary information, materials, feedback, and approvals as required for the successful completion of the project. Delays in client feedback or approvals may result in corresponding delays to the project timeline. The client is responsible for ensuring that all materials provided to Design Nuvio do not infringe upon the intellectual property rights of any third party. The client shall designate a primary point of contact authorized to make decisions and provide approvals on behalf of the client organization.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "6. Payment Terms",
    content:
      "Payment terms are specified in the applicable SOW. Unless otherwise agreed, our standard payment structure is: 40% upon project initiation, 30% at the mid-project milestone, and 30% upon project completion and delivery. Invoices are due within 15 business days of issuance. Late payments may incur a monthly interest charge of 1.5% on the outstanding balance. We accept payment via bank transfer (ACH/wire), credit card (Visa, Mastercard, American Express), and PayPal. All fees are quoted in USD unless otherwise specified. The client is responsible for any applicable taxes not included in the quoted fees.",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "7. Confidentiality",
    content:
      "Both parties agree to maintain the confidentiality of all proprietary and sensitive information disclosed during the course of the engagement. Confidential information includes, but is not limited to, business strategies, technical data, financial information, customer lists, and unpublished creative works. This obligation of confidentiality shall survive the termination of the agreement for a period of three (3) years. Neither party shall disclose confidential information to any third party without the prior written consent of the disclosing party. Confidential information does not include information that is publicly available, independently developed, or rightfully received from a third party.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "8. Limitation of Liability",
    content:
      "To the maximum extent permitted by applicable law, Design Nuvio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising out of or in connection with our services. Our total cumulative liability for any claims arising from or related to our services shall not exceed the total fees paid by the client for the specific project giving rise to the claim. This limitation applies regardless of the legal theory on which the claim is based, whether in contract, tort, strict liability, or otherwise.",
  },
  {
    icon: <XCircle className="w-5 h-5" />,
    title: "9. Termination",
    content:
      "Either party may terminate a project engagement with 30 days' written notice. In the event of termination, the client shall pay for all work completed up to the date of termination, including any non-cancellable expenses incurred on behalf of the project. Design Nuvio may terminate immediately if the client fails to make payments when due, breaches the confidentiality provisions, or engages in conduct that is harmful to our reputation or business. Upon termination, we will deliver all completed work and work-in-progress for which payment has been received. Termination does not affect any rights or obligations that accrued prior to the termination date.",
  },
  {
    icon: <Gavel className="w-5 h-5" />,
    title: "10. Dispute Resolution",
    content:
      "In the event of any dispute arising from or related to these Terms or our services, the parties shall first attempt to resolve the matter through good-faith negotiation. If the dispute cannot be resolved through negotiation within 30 days, the parties agree to submit the dispute to mediation administered by a mutually agreed-upon mediator. If mediation fails, the dispute shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in San Francisco, California, and the language of the arbitration shall be English. The prevailing party in any dispute resolution proceeding shall be entitled to recover its reasonable attorney's fees and costs.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "11. Modifications",
    content:
      "Design Nuvio reserves the right to modify these Terms of Service at any time. We will notify clients of material changes by posting a notice on our website or sending an email to the address on file. The modified Terms will become effective upon posting or as specified in the notice. Your continued use of our services after the effective date of any modification constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically to stay informed of any updates. For active projects, any material changes to these Terms will not apply retroactively without the client's written consent.",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "12. Contact Information",
    content:
      "If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at:",
    contact: true,
  },
];

export function TermsOfServicePage() {
  return (
    <PageLayout
      badge="Terms of Service"
      title="Terms of Service"
      subtitle="Please review these terms carefully before using our services. They govern your relationship with Design Nuvio."
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

      {/* Important Notice */}
      <section className="py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#592DB5]/20 bg-[#592DB5]/5 p-6"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#592DB5]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Scale className="w-5 h-5 text-[#592DB5]" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">
                  Legal Notice
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These Terms of Service constitute a legally binding agreement
                  between you and Design Nuvio. By engaging our services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these terms. If you have any questions, please consult
                  legal counsel before proceeding.
                </p>
              </div>
            </div>
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
                  href={`#tos-section-${i + 1}`}
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

      {/* Terms Sections */}
      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              id={`tos-section-${i + 1}`}
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
              <div className="pl-[52px]">
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
                {section.contact && (
                  <div className="mt-4 p-5 rounded-xl bg-muted/50 border border-border/50">
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold text-foreground">
                        Design Nuvio
                      </p>
                      <p className="text-muted-foreground">
                        Email: legal@astrastudio.com
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
              <Gavel className="w-7 h-7 text-[#592DB5]" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">
              Questions About These Terms?
            </h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions or need clarification about our Terms of
              Service, our legal team is here to help.
            </p>
            <a
              href="mailto:legal@astrastudio.com"
              className="inline-flex items-center gap-2 text-[#592DB5] font-semibold hover:gap-3 transition-all"
            >
              <Mail className="w-4 h-4" />
              legal@astrastudio.com
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
