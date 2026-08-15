import React from "react";
import { Metadata } from "next";
import { Eye, ArrowRight, Shield, FileCheck, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Q-RETIX AI",
  description: "How Q-RETIX AI uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
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
              Cookie Policy
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
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">1. What Are Cookies</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">2. How We Use Cookies</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-4">
                    Q-RETIX AI uses cookies for the following purposes:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Essential cookies:</strong> Required for the website to function properly</li>
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Preference cookies:</strong> Remember your settings and preferences</li>
                    <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">3. Managing Cookies</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse cookies or to delete cookies that have already been set. Please note that disabling cookies may affect the functionality of this website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">4. Third-Party Cookies</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    We may use third-party analytics services such as Google Analytics to help us understand how users engage with our website. These services may set their own cookies on your device.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">5. Contact Us</h2>
                  <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                    If you have any questions about our Cookie Policy, please contact us at privacy@qretix.ai.
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
                    <Link href="/legal/gdpr" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded">
                      <Globe className="w-4 h-4" /> GDPR
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
