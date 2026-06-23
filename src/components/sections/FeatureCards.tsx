"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Dna,
  Network,
  FlaskConical,
  Microscope,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const cards = [
  {
    icon: Dna,
    title: "Smart Drug Discovery",
    description:
      "AI-driven molecular screening and target identification to accelerate candidate selection.",
    color: "#2C4D78",
    bgColor: "bg-[#2C4D78]/5",
    borderColor: "border-[#2C4D78]/20",
  },
  {
    icon: Network,
    title: "AI Data Processing",
    description:
      "Real-time processing of multi-omics datasets, clinical records, and research literature.",
    color: "#98D7C2",
    bgColor: "bg-[#98D7C2]/10",
    borderColor: "border-[#98D7C2]/30",
  },
  {
    icon: FlaskConical,
    title: "Clinical Research Intelligence",
    description:
      "Automated trial monitoring, patient stratification, and endpoint analysis.",
    color: "#A8DADC",
    bgColor: "bg-[#A8DADC]/10",
    borderColor: "border-[#A8DADC]/30",
  },
  {
    icon: Microscope,
    title: "Laboratory Automation",
    description:
      "Smart workflow orchestration for high-throughput screening and assay management.",
    color: "#5A6B82",
    bgColor: "bg-[#5A6B82]/5",
    borderColor: "border-[#5A6B82]/20",
  },
  {
    icon: TrendingUp,
    title: "Predictive Healthcare",
    description:
      "Machine learning models for outcome prediction, risk stratification, and biomarker discovery.",
    color: "#2C4D78",
    bgColor: "bg-[#2C4D78]/5",
    borderColor: "border-[#2C4D78]/20",
  },
  {
    icon: BarChart3,
    title: "Research Analytics",
    description:
      "Comprehensive dashboards and reports for research progress, compliance, and funding metrics.",
    color: "#98D7C2",
    bgColor: "bg-[#98D7C2]/10",
    borderColor: "border-[#98D7C2]/30",
  },
];

export default function FeatureCards() {
  return (
    <section id="solutions" className="relative py-28 bg-[#F5F9FB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] mb-4 tracking-tight">
            Platform Solutions
          </h2>
          <p className="text-base text-[#5A6B82] max-w-xl mx-auto">
            Comprehensive AI tools designed for every stage of pharmaceutical research and development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative bg-white rounded-2xl border border-[#D0E0E8]/60 p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2C4D78]/5 hover:border-[#2C4D78]/20 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl ${card.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-5.5 h-5.5" style={{ color: card.color } as React.CSSProperties} />
                </div>
                <h3 className="text-lg font-semibold text-[#33415C] group-hover:text-[#2C4D78] transition-colors">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm text-[#5A6B82] leading-relaxed">
                {card.description}
              </p>

              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-7 h-7 rounded-full bg-[#E6EEF2] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#2C4D78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
