import React from "react";
import { Metadata } from "next";
import { BookOpen, ArrowRight, Code, FileText, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation | Q-RETIX AI",
  description: "Comprehensive documentation for Q-RETIX AI platform, APIs, and integrations.",
};

const sections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Quick start guides and platform overview for new users.",
    links: ["Platform Overview", "Quick Start Guide", "Account Setup", "Authentication"],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation with examples and endpoints.",
    links: ["REST API", "GraphQL", "Webhooks", "Rate Limits"],
  },
  {
    icon: FileText,
    title: "Guides",
    description: "Detailed guides for common use cases and workflows.",
    links: ["Drug Discovery Pipeline", "Clinical Trial Setup", "Data Import", "Reporting"],
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Connect Q-RETIX AI with your existing tools and workflows.",
    links: ["Electronic Lab Notebooks", "LIMS Systems", "CRMs", "Data Warehouses"],
  },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-xs sm:text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C4D78] tracking-tight mb-4 sm:mb-6 leading-tight">
              Q-RETIX AI Documentation
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#5A6B82] leading-relaxed">
              Everything you need to integrate, configure, and get the most out of the Q-RETIX AI platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="group bg-white rounded-2xl border border-[#E6EEF2] p-5 sm:p-6 md:p-8 hover:border-[#A8DADC] hover:shadow-xl hover:shadow-[#2C4D78]/5 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E6EEF2] flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#2C4D78] transition-colors">
                  <section.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C4D78] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C4D78] mb-1 sm:mb-2">{section.title}</h3>
                <p className="text-sm sm:text-[15px] text-[#5A6B82] mb-4 sm:mb-6">{section.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <button className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded">
                        <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-5 sm:p-6 md:p-8 text-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 sm:mb-6">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[#98D7C2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">API Reference</h3>
                <p className="text-xs sm:text-sm text-white/70">
                  Explore our complete API documentation with interactive examples and code samples.
                </p>
              </div>
              <Link
                href="/docs/api"
                className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-[#98D7C2] hover:text-white transition-colors"
              >
                View API Docs
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
