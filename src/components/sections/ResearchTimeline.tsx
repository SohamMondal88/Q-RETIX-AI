"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  FlaskConical,
  ClipboardCheck,
  BadgeCheck,
  Factory,
  Truck,
  ChevronRight,
  Calendar,
  Clock,
} from "lucide-react";

const pipelineData = [
  {
    phase: "Phase 1",
    icon: Search,
    title: "Discovery",
    timeline: "Q1 2023 - Q2 2024",
    status: "completed" as const,
    progress: 100,
    milestones: [
      "Target identification via AI screening",
      "Lead compound optimization",
      "Patent portfolio filing",
    ],
    color: "#2C4D78",
    accent: "#98D7C2",
  },
  {
    phase: "Phase 2",
    icon: FlaskConical,
    title: "Preclinical",
    timeline: "Q3 2024 - Q4 2025",
    status: "completed" as const,
    progress: 100,
    milestones: [
      "In-vitro validation completed",
      "Animal model efficacy studies",
      "Toxicology assessment passed",
    ],
    color: "#2C4D78",
    accent: "#98D7C2",
  },
  {
    phase: "Phase 3",
    icon: ClipboardCheck,
    title: "Clinical Trials",
    timeline: "Q1 2026 - Q4 2027",
    status: "active" as const,
    progress: 42,
    milestones: [
      "Phase I safety cohort enrolled",
      "Phase II efficacy endpoints defined",
      "Biomarker validation ongoing",
    ],
    color: "#A8DADC",
    accent: "#2C4D78",
  },
  {
    phase: "Phase 4",
    icon: BadgeCheck,
    title: "Regulatory",
    timeline: "Q1 2028 - Q2 2028",
    status: "pending" as const,
    progress: 0,
    milestones: [
      "FDA pre-submission meeting",
      "NDA/BLA dossier preparation",
      "EMA parallel scientific advice",
    ],
    color: "#5A6B82",
    accent: "#A8DADC",
  },
  {
    phase: "Phase 5",
    icon: Factory,
    title: "Manufacturing",
    timeline: "Q3 2028 - Q1 2029",
    status: "pending" as const,
    progress: 0,
    milestones: [
      "CMC process development",
      "GMP facility qualification",
      "Scale-up to commercial batches",
    ],
    color: "#5A6B82",
    accent: "#A8DADC",
  },
  {
    phase: "Phase 6",
    icon: Truck,
    title: "Commercial",
    timeline: "Q2 2029 - Ongoing",
    status: "pending" as const,
    progress: 0,
    milestones: [
      "Market access strategy",
      "Distribution network setup",
      "Post-market surveillance",
    ],
    color: "#5A6B82",
    accent: "#A8DADC",
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    bgColor: "bg-[#2C4D78]",
    textColor: "text-white",
    borderColor: "border-[#2C4D78]",
    dotColor: "bg-[#98D7C2]",
    progressColor: "from-[#2C4D78] to-[#98D7C2]",
  },
  active: {
    label: "In Progress",
    bgColor: "bg-white",
    textColor: "text-[#2C4D78]",
    borderColor: "border-[#A8DADC]",
    dotColor: "bg-[#A8DADC]",
    progressColor: "from-[#A8DADC] to-[#2C4D78]",
  },
  pending: {
    label: "Planned",
    bgColor: "bg-white",
    textColor: "text-[#5A6B82]",
    borderColor: "border-[#D0E0E8]/80",
    dotColor: "bg-[#D0E0E8]",
    progressColor: "from-[#D0E0E8] to-[#D0E0E8]",
  },
};

function PhaseCard({
  data,
  index,
  isLast,
}: {
  data: (typeof pipelineData)[0];
  index: number;
  isLast: boolean;
}) {
  const status = statusConfig[data.status];
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      {/* Timeline connector for desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-[40px] left-[60%] w-[calc(80%-20px)] h-[2px]">
          <div className="absolute inset-0 bg-[#E6EEF2]" />
          {data.status === "completed" && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#98D7C2] to-[#2C4D78]"
            />
          )}
          {data.status === "active" && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "42%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#A8DADC] to-[#2C4D78]"
            />
          )}
        </div>
      )}

      <div className="group relative">
        {/* Phase Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`relative w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-500 ${
              data.status === "completed"
                ? "bg-[#2C4D78] border-[#2C4D78] shadow-lg shadow-[#2C4D78]/20"
                : data.status === "active"
                  ? "bg-white border-[#A8DADC] shadow-lg shadow-[#A8DADC]/15 group-hover:scale-110"
                  : "bg-white border-[#D0E0E8] group-hover:border-[#A8DADC]"
            }`}
          >
            <Icon
              className={`w-5 h-5 transition-colors duration-300 ${
                data.status === "completed"
                  ? "text-white"
                  : data.status === "active"
                    ? "text-[#2C4D78]"
                    : "text-[#B0C4D1]"
              }`}
              strokeWidth={data.status === "active" ? 2.5 : 2}
            />
            {data.status === "active" && (
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#98D7C2] border-2 border-white animate-pulse" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span
                className={`text-[11px] font-bold uppercase tracking-[0.15em] ${
                  data.status === "pending" ? "text-[#A8B5C5]" : "text-[#2C4D78]"
                }`}
              >
                {data.phase}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                  data.status === "completed"
                    ? "bg-[#2C4D78] text-white"
                    : data.status === "active"
                      ? "bg-[#A8DADC]/20 text-[#2C4D78] border border-[#A8DADC]"
                      : "bg-[#E6EEF2] text-[#5A6B82]"
                  }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    data.status === "active" ? "animate-pulse" : ""
                  }`}
                  style={{
                    backgroundColor:
                      data.status === "completed"
                        ? "#98D7C2"
                        : data.status === "active"
                          ? "#2C4D78"
                          : "#B0C4D1",
                  }}
                />
                {status.label}
              </span>
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className={`relative bg-white rounded-2xl border p-5 transition-all duration-500 ${
            data.status === "active"
              ? "border-[#A8DADC] shadow-xl shadow-[#2C4D78]/5 group-hover:shadow-2xl group-hover:shadow-[#2C4D78]/8"
              : "border-[#E6EEF2] shadow-sm shadow-[#2C4D78]/3 group-hover:shadow-md group-hover:shadow-[#2C4D78]/5"
          }`}
        >
          {/* Progress bar */}
          {data.status !== "pending" && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-[#5A6B82] uppercase tracking-wider">
                  Progress
                </span>
                <span className="text-[11px] font-bold text-[#2C4D78]">
                  {data.progress}%
                </span>
              </div>
              <div className="h-1.5 bg-[#E6EEF2] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${data.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${status.progressColor}`}
                />
              </div>
            </div>
          )}

          {/* Timeline info */}
          <div className="flex items-center gap-2 mb-3 text-[12px] text-[#5A6B82]">
            <Calendar className="w-3.5 h-3.5 text-[#2C4D78]" />
            <span className="font-medium">{data.timeline}</span>
          </div>

          {/* Title */}
          <h3
            className={`text-lg font-bold mb-3 ${
              data.status === "pending" ? "text-[#5A6B82]" : "text-[#2C4D78]"
            }`}
          >
            {data.title}
          </h3>

          {/* Milestones */}
          <div className="space-y-2.5">
            {data.milestones.map((milestone, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    data.status === "completed"
                      ? "bg-[#98D7C2]"
                      : data.status === "active"
                        ? i === 0
                          ? "bg-[#A8DADC]"
                          : "bg-[#E6EEF2]"
                        : "bg-[#E6EEF2]"
                  }`}
                />
                <span
                  className={`text-[13px] leading-relaxed ${
                    data.status === "pending"
                      ? "text-[#A8B5C5]"
                      : data.status === "active" && i === 0
                        ? "text-[#2C4D78] font-medium"
                        : "text-[#5A6B82]"
                  }`}
                >
                  {milestone}
                </span>
              </div>
            ))}
          </div>

          {/* Action hint for active phase */}
          {data.status === "active" && (
            <div className="mt-4 pt-4 border-t border-[#E6EEF2]">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-[#2C4D78]">
                <Clock className="w-3.5 h-3.5 text-[#2C4D78]" />
                <span>Currently enrolling patients</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#2C4D78] ml-auto" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ResearchTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section
      id="research"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[#F8FAFB] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">
                Pipeline
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C4D78] tracking-tight mb-5 leading-tight">
              Research Timeline
            </h2>

            <p className="text-base lg:text-lg text-[#5A6B82] leading-relaxed">
              From discovery to delivery — track every milestone with precision and transparency. Our structured pipeline ensures rigorous validation at every stage.
            </p>
          </motion.div>
        </div>

        {/* Stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-16"
        >
          {[
            { label: "Phases Completed", value: "2", sub: "of 6" },
            { label: "Current Phase", value: "3", sub: "Clinical" },
            { label: "Time Elapsed", value: "18", sub: "months" },
            { label: "Est. Completion", value: "Q2", sub: "2029" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-[#E6EEF2] p-4 lg:p-5 shadow-sm"
            >
              <div className="text-[11px] font-semibold text-[#5A6B82] uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl lg:text-3xl font-bold text-[#2C4D78]">
                  {stat.value}
                </span>
                <span className="text-[13px] font-medium text-[#5A6B82]">
                  {stat.sub}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pipeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pipelineData.map((phase, i) => (
            <PhaseCard
              key={phase.phase}
              data={phase}
              index={i}
              isLast={i === pipelineData.length - 1}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E6EEF2] shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#98D7C2] animate-pulse" />
            <span className="text-[13px] font-medium text-[#5A6B82]">
              Last updated: January 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
