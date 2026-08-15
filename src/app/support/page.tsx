import React from "react";
import { Metadata } from "next";
import { ArrowRight, Mail, MessageSquare, Clock, HelpCircle, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Q-RETIX AI",
  description: "Get help with Q-RETIX AI platform. Contact support, browse documentation, or submit a ticket.",
};

const supportOptions = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get a response within 24 hours from our dedicated support team.",
    action: "Email Us",
    href: "mailto:support@qretix.ai",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Real-time assistance from our product experts during business hours.",
    action: "Start Chat",
    href: "#",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Browse articles, tutorials, and FAQs to find answers quickly.",
    action: "Browse Articles",
    href: "/docs",
  },
];

const faqs = [
  {
    question: "How do I get started with Q-RETIX AI?",
    answer: "Sign up for a free account and follow our quick start guide. You'll be up and running in minutes.",
  },
  {
    question: "What data formats are supported?",
    answer: "We support CSV, JSON, XML, and common pharmaceutical data formats including SDF, MOL, and FASTA.",
  },
  {
    question: "Is my research data secure?",
    answer: "Yes. We use enterprise-grade encryption, SOC 2 compliance, and strict access controls to protect your data.",
  },
  {
    question: "Can I integrate with my existing LIMS?",
    answer: "Yes, we offer integrations with major LIMS systems including LabWare, SampleManager, and custom APIs.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Support</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              How Can We Help?
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Get answers to your questions or reach out to our support team for assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {supportOptions.map((option) => (
              <div
                key={option.title}
                className="group bg-white rounded-2xl border border-[#E6EEF2] p-8 hover:border-[#A8DADC] hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E6EEF2] flex items-center justify-center mb-6 group-hover:bg-[#2C4D78] transition-colors">
                  <option.icon className="w-5 h-5 text-[#2C4D78] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#2C4D78] mb-2">{option.title}</h3>
                <p className="text-[15px] text-[#5A6B82] mb-6">{option.description}</p>
                <Link
                  href={option.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C4D78] hover:text-[#98D7C2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded"
                >
                  {option.action}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-6 h-6 text-[#2C4D78]" />
              <h2 className="text-2xl font-bold text-[#2C4D78]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-[#E6EEF2] p-6 hover:border-[#A8DADC] hover:shadow-sm transition-all"
                >
                  <h3 className="text-lg font-semibold text-[#2C4D78] mb-2">{faq.question}</h3>
                  <p className="text-[15px] text-[#5A6B82]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
