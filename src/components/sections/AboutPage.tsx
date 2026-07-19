"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Dna, Globe, Shield, Target, Zap } from "lucide-react";
import WaitlistCommunitySection from "./WaitlistCommunitySection";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We obsess over accuracy in every algorithm, dataset, and clinical model we build.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Regulatory compliance, data privacy, and ethical AI are non-negotiable foundations.",
  },
  {
    icon: Zap,
    title: "Velocity",
    description: "Speed matters in drug discovery. We engineer systems that compress years into months.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Advanced research tools should be available to labs of every size, everywhere.",
  },
];

const founders = [
  {
    name: "Aditya",
    role: "Founder & CEO",
    bio: "Student of IIT Patna.",
    initials: "Ad",
    color: "#2C4D78",
  },
  {
    name: "Anirudh",
    role: "Co-Founder",
    bio: "Student of IIT Patna.",
    initials: "An",
    color: "#98D7C2",
  },
];

const teams = [
  {
    title: "Design Team",
    description: "Crafting intuitive interfaces for complex scientific workflows. Every pixel is tested with researchers in real lab environments.",
    members: 8,
    color: "#2C4D78",
    icon: Dna,
  },
  {
    title: "AI Model Trainers",
    description: "Specialists in molecular graph neural networks, transformer architectures for drug discovery, and multimodal clinical models.",
    members: 6,
    color: "#98D7C2",
    icon: Zap,
  },
  {
    title: "Data Engineers",
    description: "Building petabyte-scale pipelines for multi-omics, clinical trial, and real-world data ingestion, validation, and federation.",
    members: 5,
    color: "#A8DADC",
    icon: Shield,
  },
  {
    title: "Marketing Team",
    description: "Translating breakthrough science into stories that connect with researchers, clinicians, and pharmaceutical leaders worldwide.",
    members: 6,
    color: "#5A6B82",
    icon: Globe,
  },
];


function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay },
  };
}

export default function AboutPage() {
  return (
    <div className="pt-[96px]">
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#98D7C2]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#A8DADC]/10 rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78] mb-6">
                <FlaskConical className="w-4 h-4" />
                About Q-RETIX AI
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-[1.05]"
            >
              Building the Intelligence Layer for Pharmaceutical Research
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-[#5A6B82] leading-relaxed mb-10 max-w-2xl"
            >
              Q-RETIX AI is a pharmaceutical intelligence platform built by scientists, for scientists. We combine large language models, molecular graph networks, and real-world clinical data to accelerate every stage of drug discovery — from target identification to regulatory approval.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-8"
            >
              {[
                { num: "40+", label: "Research Partners" },
                { num: "12M+", label: "Compounds Processed" },
                { num: "3x", label: "Faster Time to Insight" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#2C4D78]">{stat.num}</div>
                  <div className="text-sm text-[#5A6B82] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F9FB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-sm font-semibold text-[#2C4D78] uppercase tracking-[0.12em] mb-4 block">
              Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4D78] tracking-tight">
              What drives us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(i * 0.08)}
                className="group bg-white rounded-2xl border border-[#D0E0E8]/60 p-7 hover:shadow-xl hover:shadow-[#2C4D78]/3 hover:border-[#D0E0E8] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E6EEF2] flex items-center justify-center mb-5 group-hover:bg-[#2C4D78] transition-colors duration-300"
                >
                  <v.icon className="w-5 h-5 text-[#2C4D78] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#33415C] mb-2">{v.title}</h3>
                <p className="text-sm text-[#5A6B82] leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-sm font-semibold text-[#2C4D78] uppercase tracking-[0.12em] mb-4 block">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4D78] tracking-tight">
              Founders
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                {...fadeUp(i * 0.12)}
                className="bg-white rounded-2xl border border-[#D0E0E8]/60 p-7 hover:shadow-xl hover:shadow-[#2C4D78]/3 hover:border-[#D0E0E8] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-white font-bold text-xl"
                    style={{ backgroundColor: f.color }}
                  >
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#33415C]">{f.name}</h3>
                    <p className="text-sm font-medium mb-2" style={{ color: f.color }}>
                      {f.role}
                    </p>
                    <p className="text-sm text-[#5A6B82] leading-relaxed">
                      {f.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F9FB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-sm font-semibold text-[#2C4D78] uppercase tracking-[0.12em] mb-4 block">
              Teams
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4D78] tracking-tight">
              The people behind the platform
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teams.map((t, i) => (
              <motion.div
                key={t.title}
                {...fadeUp(i * 0.08)}
                className="group bg-white rounded-2xl border border-[#D0E0E8]/60 p-7 hover:shadow-xl hover:shadow-[#2C4D78]/3 hover:border-[#D0E0E8] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: t.color + "15" }}
                  >
                    <t.icon className="w-6 h-6" style={{ color: t.color } as React.CSSProperties} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: t.color + "15", color: t.color }}
                  >
                    {t.members} members
                  </span>
                </div>
                <h3 className="text-[17px] font-semibold text-[#33415C] mb-2">{t.title}</h3>
                <p className="text-sm text-[#5A6B82] leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaitlistCommunitySection />
    </div>
  );
}
