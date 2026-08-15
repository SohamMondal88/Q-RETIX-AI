import React from "react";
import { Metadata } from "next";
import { ArrowRight, MapPin, Clock, Briefcase, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Q-RETIX AI",
  description: "Join our team and help shape the future of pharmaceutical research with AI.",
};

const positions = [
  {
    title: "Senior ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
  },
  {
    title: "Computational Chemist",
    department: "Research",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Clinical Data Scientist",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Regulatory Affairs Specialist",
    department: "Operations",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Health, dental, and vision coverage",
  "Flexible remote work policy",
  "Annual conference and learning budget",
  "Home office stipend",
  "Unlimited PTO",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-xs sm:text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Careers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C4D78] tracking-tight mb-4 sm:mb-6 leading-tight">
              Build the Future of Pharma AI
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#5A6B82] leading-relaxed">
              Join a team of researchers, engineers, and innovators working to accelerate drug discovery and save lives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2C4D78] mb-6 sm:mb-8">Open Positions</h2>
              <div className="space-y-3 sm:space-y-4">
                {positions.map((position) => (
                  <div
                    key={position.title}
                    className="group bg-white rounded-xl border border-[#E6EEF2] p-4 sm:p-6 hover:border-[#A8DADC] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-[#2C4D78] mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-[13px] text-[#5A6B82]">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#E6EEF2]">
                            <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            {position.department}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#E6EEF2]">
                            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            {position.location}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#E6EEF2]">
                            <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <button className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E6EEF2] group-hover:bg-[#2C4D78] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50">
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2C4D78] group-hover:text-white transition-colors" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[#F8FAFB] rounded-2xl p-5 sm:p-6 md:p-8 border border-[#E6EEF2] lg:sticky lg:top-24">
                <h3 className="text-base sm:text-lg font-bold text-[#2C4D78] mb-4 sm:mb-6">Why Q-RETIX AI?</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#98D7C2]/20 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#98D7C2]" />
                      </div>
                      <span className="text-sm sm:text-[15px] text-[#5A6B82]">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E6EEF2]">
                  <p className="text-xs sm:text-sm text-[#5A6B82] mb-3 sm:mb-4">
                    Don&apos;t see a role that fits? We&apos;re always interested in meeting exceptional people.
                  </p>
                  <Link
                    href="mailto:careers@qretix.ai"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2C4D78] hover:text-[#98D7C2] transition-colors"
                  >
                    Send a general application
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
