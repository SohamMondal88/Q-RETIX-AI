import React from "react";
import { Metadata } from "next";
import { Shield, Lock, Eye, FileCheck, ArrowRight, Server, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Q-RETIX AI",
  description: "Q-RETIX AI privacy policy - how we handle and protect your data.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              <div className="prose prose-lg max-w-none">
                <div className="space-y-12">
                  <div>
                    <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">1. Introduction</h2>
                    <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                      Q-RETIX AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">2. Information We Collect</h2>
                    <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-4">
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="text-[15px] text-[#5A6B82]">Account information (name, email, organization)</li>
                      <li className="text-[15px] text-[#5A6B82]">Research data and documents uploaded to the platform</li>
                      <li className="text-[15px] text-[#5A6B82]">Usage data and analytics</li>
                      <li className="text-[15px] text-[#5A6B82]">Communication records with our support team</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">3. How We Use Your Information</h2>
                    <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-4">
                      We use the collected information to:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="text-[15px] text-[#5A6B82]">Provide and maintain our services</li>
                      <li className="text-[15px] text-[#5A6B82]">Process and analyze your research data</li>
                      <li className="text-[15px] text-[#5A6B82]">Improve and optimize our AI models</li>
                      <li className="text-[15px] text-[#5A6B82]">Communicate with you about updates and support</li>
                      <li className="text-[15px] text-[#5A6B82]">Ensure security and prevent fraud</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">4. Data Security</h2>
                    <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your data, including encryption, access controls, and regular security audits. Our platform is SOC 2 compliant and follows industry best practices for pharmaceutical data handling.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">5. Your Rights</h2>
                    <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                      You have the right to access, correct, or delete your personal data. You may also object to certain processing activities or request data portability. Contact us at privacy@qretix.ai to exercise these rights.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">6. Contact Us</h2>
                    <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at privacy@qretix.ai or through our support channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F8FAFB] rounded-2xl p-6 border border-[#E6EEF2] sticky top-24">
                <h3 className="text-lg font-bold text-[#2C4D78] mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/terms" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                      <FileCheck className="w-4 h-4" /> Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/cookies" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                      <Eye className="w-4 h-4" /> Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/gdpr" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                      <Globe className="w-4 h-4" /> GDPR
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#98D7C2]" />
                  <h3 className="text-lg font-bold">Data Protection</h3>
                </div>
                <p className="text-sm text-white/70 mb-4">
                  Your research data is encrypted and stored securely. We never share your proprietary data with third parties.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#98D7C2]">
                  <Lock className="w-4 h-4" />
                  SOC 2 Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
