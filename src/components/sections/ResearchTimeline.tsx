"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  FlaskConical,
  ClipboardCheck,
  BadgeCheck,
  Factory,
  Truck,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "Hypothesis generation and target identification using AI literature mining.",
    status: "completed" as const,
    color: "#2C4D78",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description: "In-silico and laboratory screening with automated assay workflows.",
    status: "completed" as const,
    color: "#98D7C2",
  },
  {
    icon: ClipboardCheck,
    title: "Validation",
    description: "Preclinical and clinical validation with real-time monitoring.",
    status: "in-progress" as const,
    color: "#A8DADC",
  },
  {
    icon: BadgeCheck,
    title: "Approval",
    description: "Regulatory submission support and compliance documentation.",
    status: "pending" as const,
    color: "#5A6B82",
  },
  {
    icon: Factory,
    title: "Production",
    description: "Manufacturing scale-up with quality control automation.",
    status: "pending" as const,
    color: "#2C4D78",
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Supply chain optimization and post-market surveillance.",
    status: "pending" as const,
    color: "#98D7C2",
  },
];

export default function ResearchTimeline() {
  return (
    <section id="research" className="relative py-28 bg-[#F5F9FB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] mb-4 tracking-tight">
            Research Timeline
          </h2>
          <p className="text-base text-[#5A6B82] max-w-xl mx-auto">
            From discovery to delivery — track every milestone with AI-powered precision and transparency.
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal progress line */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[3px] bg-[#D0E0E8]/60 rounded-full">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "38%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#2C4D78] via-[#98D7C2] to-[#A8DADC] rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all shadow-lg ${
                    step.status === "completed"
                      ? "bg-gradient-to-br from-[#2C4D78] to-[#3D5F8A] shadow-[#2C4D78]/15"
                      : step.status === "in-progress"
                        ? "bg-white border-2 border-[#A8DADC] shadow-[#A8DADC]/10"
                        : "bg-white border-2 border-[#D0E0E8]/60"
                  }`}
                >
                  <step.icon
                    className={`w-6 h-6 ${
                      step.status === "completed"
                        ? "text-white"
                        : step.status === "in-progress"
                          ? "text-[#A8DADC]"
                          : "text-[#D0E0E8]"
                    }`}
                  />

                  {step.status === "in-progress" && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#A8DADC] flex items-center justify-center border-2 border-white">
                      <Clock className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>

                <h4
                  className={`text-base font-semibold mb-1 ${
                    step.status === "pending" ? "text-[#8A9BB0]" : "text-[#33415C]"
                  }`}
                >
                  {step.title}
                </h4>
                <p className="text-[13px] text-[#5A6B82] leading-relaxed mb-3 max-w-[200px]">
                  {step.description}
                </p>

                <div className="flex items-center gap-1.5">
                  {step.status === "completed" && (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#98D7C2]" />
                      <span className="text-[11px] font-medium text-[#98D7C2]">Completed</span>
                    </>
                  )}
                  {step.status === "in-progress" && (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 text-[#A8DADC]" />
                      <span className="text-[11px] font-medium text-[#A8DADC]">In Progress</span>
                    </>
                  )}
                  {step.status === "pending" && (
                    <>
                      <Clock className="w-3.5 h-3.5 text-[#8A9BB0]" />
                      <span className="text-[11px] font-medium text-[#8A9BB0]">Pending</span>
                    </>
                  )}
                </div>

                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-px h-8 bg-[#D0E0E8]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
