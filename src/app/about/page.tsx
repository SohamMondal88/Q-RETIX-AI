import React from "react";
import { Metadata } from "next";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import TeamShowcase from "@/components/sections/TeamShowcase";

export const metadata: Metadata = {
  title: "About Us | Q-RETIX AI",
  description: "Learn about Q-RETIX AI's mission to transform pharmaceutical research through AI-powered intelligence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              Transforming Pharmaceutical Research Through AI
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Q-RETIX AI is building the next generation of intelligent tools for drug discovery, clinical trials, and pharmaceutical research. Our mission is to accelerate breakthroughs that save lives.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">Our Mission</h2>
                <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                  We believe that artificial intelligence has the power to transform how pharmaceutical research is conducted. By automating complex analyses, identifying patterns in vast datasets, and predicting outcomes with unprecedented accuracy, we are helping researchers bring life-saving drugs to market faster.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">What We Do</h2>
                <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-4">
                  Q-RETIX AI provides a comprehensive suite of AI-powered tools designed specifically for pharmaceutical research:
                </p>
                <ul className="space-y-3">
                  {[
                    "AI-powered molecular analysis and compound screening",
                    "Real-time clinical trial monitoring and analysis",
                    "Automated regulatory document generation",
                    "Deep literature mining and hypothesis generation",
                    "Predictive modeling for drug outcomes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#98D7C2]/20 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#98D7C2]" />
                      </div>
                      <span className="text-[15px] text-[#5A6B82]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#2C4D78] mb-4">Our Story</h2>
                <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                  Founded in 2024 by a team of pharmaceutical researchers and AI engineers, Q-RETIX AI emerged from the recognition that traditional drug discovery methods were too slow and expensive. We set out to build tools that combine domain expertise with cutting-edge machine learning to accelerate every stage of the pharmaceutical pipeline.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F8FAFB] rounded-2xl p-8 border border-[#E6EEF2]">
                <h3 className="text-lg font-bold text-[#2C4D78] mb-6">Company Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A8DADC] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#33415C]">Headquarters</p>
                      <p className="text-[13px] text-[#5A6B82]">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#A8DADC] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#33415C]">Email</p>
                      <p className="text-[13px] text-[#5A6B82]">hello@qretix.ai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#A8DADC] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#33415C]">Founded</p>
                      <p className="text-[13px] text-[#5A6B82]">2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-8 text-white">
                <h3 className="text-lg font-semibold mb-4">Join Our Team</h3>
                <p className="text-sm text-white/70 mb-6">
                  We are always looking for talented individuals who are passionate about AI and pharmaceutical research.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#98D7C2] hover:text-white transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team Showcase (Client Component) */}
      <TeamShowcase />
    </div>
  );
}
