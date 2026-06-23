"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Zap,
  FileText,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  Play,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "Drug Discovery Assistant",
    description: "AI-powered molecular analysis and compound screening.",
  },
  {
    icon: BarChart3,
    title: "Clinical Trial Analysis",
    description: "Real-time statistical modeling and endpoint tracking.",
  },
  {
    icon: FileText,
    title: "Medical Documentation",
    description: "Automated regulatory document generation and review.",
  },
  {
    icon: Sparkles,
    title: "Research Insights",
    description: "Deep literature mining and hypothesis generation.",
  },
  {
    icon: Zap,
    title: "Automated Reporting",
    description: "Intelligent report drafting with data visualization.",
  },
  {
    icon: MessageSquare,
    title: "Predictive Intelligence",
    description: "Forecasting outcomes and risk assessment models.",
  },
];

export default function AIShowcase() {
  return (
    <section id="platform" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A8DADC]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#98D7C2]/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Feature list */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78]">
                  <Sparkles className="w-4 h-4" />
                  Q-RETIX AI Platform
                </div>
                <div className="h-px flex-1 bg-[#D0E0E8]" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] mb-3 tracking-tight">
                Q-RETIX AI
              </h2>
              <p className="text-base text-[#5A6B82]">
                Your intelligent research companion for pharmaceutical breakthroughs.
              </p>
            </motion.div>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E6EEF2] border border-[#D0E0E8] flex items-center justify-center shrink-0 group-hover:bg-[#2C4D78] group-hover:border-[#2C4D78] transition-all duration-300"
                  >
                    <feature.icon className="w-5 h-5 text-[#2C4D78] group-hover:text-white transition-colors" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-semibold text-[#33415C] group-hover:text-[#2C4D78] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#5A6B82]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <Link
                href="#waitlist"
                className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg font-semibold px-5 inline-flex items-center gap-1.5 h-9 rounded-xl text-[13px]"
              >
                Watch Demo
                <Play className="w-4 h-4 fill-white" />
              </Link>
              <Link
                href="#solutions"
                className="text-sm font-medium text-[#2C4D78] hover:text-[#1a3a5c] inline-flex items-center gap-1 transition-colors"
              >
                Learn more
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Chat UI mockup */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#2C4D78]/6 via-[#A8DADC]/8 to-[#98D7C2]/6 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl border border-[#D0E0E8]/80 shadow-2xl shadow-[#2C4D78]/8 overflow-hidden bg-[#0f172a]">
                {/* Window chrome */}
                <div className="bg-[#1e293b]/80 px-5 py-3.5 flex items-center gap-3 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#98D7C2]/80" />
                  <span className="ml-2 text-xs font-medium text-slate-400">
                    Q-RETIX AI Assistant
                  </span>
                </div>

                <div className="p-5 space-y-4 bg-[#0f172a]">
                  {/* User message */}
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#334155] flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-slate-300">U</span>
                    </div>
                    <div className="bg-[#1e293b] rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] border border-white/5">
                      <p className="text-sm text-slate-300">
                        Analyze latest trial results for compound QRX-245.
                      </p>
                    </div>
                  </div>

                  {/* AI reply */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-gradient-to-br from-[#2C4D78] to-[#3D5F8A] rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-white/95 leading-relaxed">
                        Compound QRX-245 demonstrated a{" "}
                        <span className="font-semibold text-[#98D7C2]">
                          21% improvement
                        </span>{" "}
                        in patient response metrics with statistically significant efficacy across primary endpoints.
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2C4D78] to-[#3D5F8A] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* User message 2 */}
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#334155] flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-slate-300">U</span>
                    </div>
                    <div className="bg-[#1e293b] rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] border border-white/5">
                      <p className="text-sm text-slate-300">
                        Generate compliance report for Phase II.
                      </p>
                    </div>
                  </div>

                  {/* AI checklist reply */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-gradient-to-br from-[#2C4D78] to-[#3D5F8A] rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%]">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#98D7C2]" />
                          <span className="text-sm text-white/90">
                            Protocol adherence: 99.2%
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#98D7C2]" />
                          <span className="text-sm text-white/90">
                            Adverse events: Below threshold
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#98D7C2]" />
                          <span className="text-sm text-white/90">
                            Documentation: Complete
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2C4D78] to-[#3D5F8A] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="flex items-center gap-2 pt-2 px-1">
                    <div className="flex-1 h-10 bg-[#1e293b] rounded-full px-4 flex items-center border border-white/5">
                      <span className="text-sm text-slate-500">
                        Type your research query...
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full gradient-brand flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
