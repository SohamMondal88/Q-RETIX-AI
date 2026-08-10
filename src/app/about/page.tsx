import React from "react";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LeadershipSpotlight from "@/components/sections/LeadershipSpotlight";

export const metadata: Metadata = {
  title: "About Us | Q-RETIX AI",
  description:
    "Meet the team at Q-RETIX AI, building the intelligence layer for the future of pharmaceutical research through AI-driven drug discovery.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HERO ==================== */}
      <section className="overflow-hidden bg-[#EEF2FF]">
        <div className="mx-auto max-w-[1000px] px-4 pt-36 pb-10 text-center sm:px-6 sm:pt-44 lg:pt-48">
          <h1 className="text-[44px] font-bold leading-[1.1] tracking-tight text-black sm:text-[48px] lg:text-[52px]">
            The Team at
            <br />
            Q-Retix AI
          </h1>

          <p className="mx-auto mt-10 max-w-[900px] text-[17px] font-medium leading-[1.7] text-[#1F2937] sm:text-[18px]">
            At Q-RETIX AI, we&apos;re building the intelligence layer for the
            future of pharmaceutical research. Our platform unifies AI-driven
            drug discovery, formulation optimization, and preclinical
            intelligence to accelerate the journey from molecule to medicine.
            Through our integrated solutions, we empower researchers, biotech
            innovators, and pharmaceutical companies with faster, smarter, and
            more scalable R&amp;D. Our globally distributed team spans multiple
            time zones, united by a mission to transform healthcare through
            artificial intelligence. Join us in shaping the future of drug
            discovery.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="relative">
              {/* Ambient blue glow */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full bg-blue-500/40 blur-3xl"
              />
              <Link
                href="#leadership"
                className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#4F46E5] px-8 py-4 font-bold text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.7)] transition-transform duration-300 hover:scale-[1.03]"
              >
                Learn More
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/25">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Empty breathing space before the black section */}
        <div className="h-[150px] sm:h-[190px]" aria-hidden />
      </section>

      {/* ==================== LEADERSHIP ==================== */}
      <LeadershipSpotlight />
    </div>
  );
}