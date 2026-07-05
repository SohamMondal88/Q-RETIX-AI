import React from "react";
import { Metadata } from "next";
import { Truck, Clock, Package, Shield, ArrowRight, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery Details | Q-RETIX AI",
  description: "Platform access, data delivery, and service provisioning details for Q-RETIX AI.",
};

const deliverySteps = [
  {
    icon: FileCheck,
    title: "Onboarding & Verification",
    description: "Complete account setup and institutional verification. For enterprise partners, we conduct a brief compliance review to ensure regulatory alignment.",
    timeline: "1–2 business days",
  },
  {
    icon: Package,
    title: "Platform Access Provisioning",
    description: "Once verified, your team receives secure API credentials, dashboard access, and onboarding documentation tailored to your therapeutic area.",
    timeline: "Same day",
  },
  {
    icon: Truck,
    title: "Data Pipeline Configuration",
    description: "We configure secure data exchange channels — whether cloud-native uploads, on-premise connectors, or hybrid architectures for sensitive structural data.",
    timeline: "2–3 business days",
  },
  {
    icon: Shield,
    title: "Go-Live & Ongoing Support",
    description: "Your dedicated solutions engineer validates end-to-end workflows. Continuous support and quarterly platform health reviews are included.",
    timeline: "Ongoing",
  },
];

const serviceTiers = [
  {
    name: "Research Access",
    delivery: "Instant (post-verification)",
    channels: "Web dashboard, REST API",
    support: "Community & documentation",
  },
  {
    name: "Enterprise Platform",
    delivery: "2–3 business days",
    channels: "Dedicated instance, VPC, or on-premise",
    support: "Dedicated solutions engineer",
  },
  {
    name: "Custom Discovery Partnership",
    delivery: "1–2 weeks (SOW dependent)",
    channels: "White-glove integration",
    support: "Embedded Q-RETIX team",
  },
];

export default function DeliveryDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              Delivery Details
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Transparent timelines for platform access, data onboarding, and ongoing service delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-[#2C4D78] mb-6">How We Deliver</h2>
                <div className="space-y-6">
                  {deliverySteps.map((step, i) => (
                    <div
                      key={step.title}
                      className="flex gap-5 p-6 rounded-2xl border border-[#E6EEF2] hover:border-[#A8DADC] hover:shadow-lg transition-all bg-white"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#E6EEF2] flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5 text-[#2C4D78]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-6 h-6 rounded-full bg-[#2C4D78] text-white text-[11px] font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <h3 className="text-lg font-bold text-[#2C4D78]">{step.title}</h3>
                        </div>
                        <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-2">{step.description}</p>
                        <div className="flex items-center gap-1.5 text-[13px] text-[#8A9BB0]">
                          <Clock className="w-3.5 h-3.5" />
                          {step.timeline}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#2C4D78] mb-6">Service Delivery Tiers</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#2C4D78] text-white">
                        <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Tier</th>
                        <th className="text-left px-4 py-3 font-semibold">Delivery Time</th>
                        <th className="text-left px-4 py-3 font-semibold">Channels</th>
                        <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">Support</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#5A6B82]">
                      {serviceTiers.map((tier, i) => (
                        <tr
                          key={tier.name}
                          className={`border-b border-[#E6EEF2] ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFB]"}`}
                        >
                          <td className="px-4 py-3 font-medium text-[#33415C]">{tier.name}</td>
                          <td className="px-4 py-3">{tier.delivery}</td>
                          <td className="px-4 py-3">{tier.channels}</td>
                          <td className="px-4 py-3">{tier.support}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">Data Delivery Standards</h2>
                <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-4">
                  All structural data, simulation outputs, and AI-generated compound recommendations are delivered via encrypted channels with full audit trails.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Encryption:</strong> AES-256 at rest, TLS 1.3 in transit</li>
                  <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Availability SLA:</strong> 99.9% uptime for Enterprise tiers</li>
                  <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Backup:</strong> Daily incremental, weekly full snapshots</li>
                  <li className="text-[15px] text-[#5A6B82]"><strong className="text-[#33415C]">Export formats:</strong> PDB, SDF, CSV, JSON, PDF reports</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F8FAFB] rounded-2xl p-6 border border-[#E6EEF2] sticky top-24">
                <h3 className="text-lg font-bold text-[#2C4D78] mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/terms" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                      <FileCheck className="w-4 h-4" /> Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/privacy" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                      <Shield className="w-4 h-4" /> Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-[#98D7C2]" />
                  <h3 className="text-lg font-bold">Need Custom Delivery?</h3>
                </div>
                <p className="text-sm text-white/70 mb-4">
                  For regulated environments or bespoke deployment architectures, our solutions team designs white-glove onboarding.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#98D7C2] hover:text-white transition-colors"
                >
                  Contact Solutions Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
