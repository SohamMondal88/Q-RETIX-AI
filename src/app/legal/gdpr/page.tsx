import React from "react";
import { Metadata } from "next";
import { Globe, ArrowRight, Shield, FileCheck, Eye } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR | Q-RETIX AI",
  description: "Q-RETIX AI GDPR compliance and data protection information.",
};

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              GDPR Compliance
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">1. Our Commitment to GDPR</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    Q-RETIX AI is fully committed to compliance with the General Data Protection Regulation (GDPR). We respect the privacy rights of all individuals in the European Union and have implemented comprehensive measures to protect your personal data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">2. Your Rights Under GDPR</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-4">
                    As a data subject under GDPR, you have the following rights:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Right to Access:</strong> You can request a copy of your personal data</li>
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Right to Rectification:</strong> You can request corrections to inaccurate data</li>
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Right to Erasure:</strong> You can request deletion of your data</li>
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Right to Restrict Processing:</strong> You can limit how we use your data</li>
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Right to Data Portability:</strong> You can receive your data in a machine-readable format</li>
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Right to Object:</strong> You can object to certain processing activities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">3. Data Processing</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    We process personal data only on lawful grounds, including consent, contractual necessity, and legitimate interests. We maintain detailed records of processing activities and conduct regular Data Protection Impact Assessments (DPIAs) for high-risk processing.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">4. Data Protection Officer</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance efforts. You can contact our DPO at dpo@qretix.ai for any privacy-related concerns or to exercise your rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">5. International Transfers</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    When transferring personal data outside the European Economic Area, we implement appropriate safeguards including Standard Contractual Clauses (SCCs) and ensure that data recipients maintain adequate levels of protection.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">6. Contact Information</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    For any GDPR-related inquiries or to exercise your data subject rights, please contact us at dpo@qretix.ai or through our support channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F8FAFB] rounded-2xl p-6 border border-[#E6EEF2] sticky top-24">
                <h3 className="text-lg font-bold text-[#2C4D78] mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/privacy" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded">
                      <Shield className="w-4 h-4" /> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/terms" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded">
                      <FileCheck className="w-4 h-4" /> Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/cookies" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded">
                      <Eye className="w-4 h-4" /> Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-[#98D7C2]" />
                  <h3 className="text-lg font-bold">EU Representative</h3>
                </div>
                <p className="text-sm text-white/70">
                  For EU-based users, our representative is available for all GDPR-related matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
