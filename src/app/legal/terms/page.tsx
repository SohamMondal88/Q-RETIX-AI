import React from "react";
import { Metadata } from "next";
import { FileCheck, ArrowRight, Shield, Scale, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Q-RETIX AI",
  description: "Q-RETIX AI terms of service and usage agreement.",
};

export default function TermsPage() {
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
              Terms of Service
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
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">1. Acceptance of Terms</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    By accessing or using the Q-RETIX AI platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">2. Description of Services</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    Q-RETIX AI provides AI-powered pharmaceutical research tools including molecular analysis, clinical trial monitoring, regulatory documentation, and predictive modeling. Services are provided on a subscription basis.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">3. User Accounts</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">4. Intellectual Property</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    All content, software, and technology provided by Q-RETIX AI are protected by intellectual property laws. You retain ownership of your research data and any results generated from your inputs.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">5. Limitation of Liability</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    Q-RETIX AI is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform. Our AI-generated outputs are for research purposes only and should not be used as sole basis for clinical decisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">6. Governing Law</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    These terms are governed by the laws of the State of California, without regard to its conflict of law principles.
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
                    <Link href="/legal/cookies" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded">
                      <AlertCircle className="w-4 h-4" /> Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/gdpr" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded">
                      <Scale className="w-4 h-4" /> GDPR
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-[#98D7C2]" />
                  <h3 className="text-lg font-bold">Need Legal Help?</h3>
                </div>
                <p className="text-sm text-white/70 mb-4">
                  For legal inquiries or questions about these terms, please contact our legal team.
                </p>
                <a href="mailto:legal@qretix.ai" className="inline-flex items-center gap-2 text-sm font-semibold text-[#98D7C2] hover:text-white transition-colors">
                  Contact Legal
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
