"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Activity,
  Pill,
  ShieldCheck,
  Brain,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const modules = [
  { label: "Research Progress", icon: TrendingUp, active: true },
  { label: "Trial Tracker", icon: Activity, active: false },
  { label: "Drug Pipeline", icon: Pill, active: false },
  { label: "Compliance", icon: ShieldCheck, active: false },
  { label: "AI Recommendations", icon: Brain, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
];

const stats = [
  { label: "Active Trials", value: "24", change: "+12%", up: true, color: "#2C4D78" },
  { label: "Compounds", value: "1,482", change: "+8%", up: true, color: "#98D7C2" },
  { label: "Success Rate", value: "94.2%", change: "+2.1%", up: true, color: "#A8DADC" },
  { label: "Time to Market", value: "18mo", change: "-15%", up: false, color: "#5A6B82" },
];

const tasks = [
  { label: "Early detect", done: true, assignee: "AI-Powered Lab" },
  { label: "AI Chemistry Simulation", done: true, assignee: "Floyd Miles", highlight: true },
  { label: "Computational Chemistry", done: false, assignee: "Team Alpha" },
  { label: "Digital Lab Environment", done: false, assignee: "Dev Team" },
];

export default function DashboardShowcase() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2C4D78]/5 rounded-full blur-[200px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] mb-4 tracking-tight">
            Q-RETIX Intelligence Dashboard
          </h2>
          <p className="text-base text-[#5A6B82] max-w-xl mx-auto">
            Real-time visibility into your entire pharmaceutical research pipeline with AI-powered insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-[#2C4D78]/4 via-[#A8DADC]/5 to-[#98D7C2]/4 rounded-3xl blur-xl" />

          <div className="relative rounded-2xl border border-[#D0E0E8]/80 shadow-2xl shadow-[#2C4D78]/5 overflow-hidden bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Sidebar */}
              <div className="lg:w-56 bg-[#F5F9FB] border-r border-[#D0E0E8]/50 p-4">
                <div className="flex items-center gap-2 mb-5 px-2">
                  <div className="w-7 h-7 rounded-lg gradient-brand flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#2C4D78]">Dashboard</span>
                </div>

                <nav className="space-y-0.5">
                  {modules.map((mod) => (
                    <button
                      key={mod.label}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${
                        mod.active
                          ? "bg-white text-[#2C4D78] shadow-sm border border-[#D0E0E8]"
                          : "text-[#5A6B82] hover:bg-white/60 hover:text-[#2C4D78]"
                      }`}
                    >
                      <mod.icon className="w-4 h-4" />
                      {mod.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 p-5">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-semibold text-[#33415C]">
                    Research Overview
                  </h3>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F9FB] border border-[#D0E0E8]/50 text-[13px] text-[#5A6B82] hover:bg-[#E6EEF2] transition-colors">
                    <Filter className="w-3.5 h-3.5" />
                    Filter
                  </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl border border-[#D0E0E8]/60 p-4 hover:shadow-md transition-shadow"
                    >
                      <p className="text-[11px] text-[#5A6B82] uppercase tracking-wider mb-1">{stat.label}</p>
                      <div className="flex items-end justify-between">
                        <span className="text-xl font-bold text-[#33415C]">
                          {stat.value}
                        </span>
                        <span
                          className={`flex items-center gap-0.5 text-[11px] font-semibold ${
                            stat.up ? "text-[#98D7C2]" : "text-[#EF4444]"
                          }`}
                        >
                          {stat.up ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 bg-white rounded-xl border border-[#D0E0E8]/60 p-4">
                    <h4 className="text-[13px] font-semibold text-[#33415C] mb-4">
                      Trial Progress
                    </h4>
                    <div className="h-44 flex items-end gap-2">
                      {[65, 82, 45, 90, 70, 55, 88, 72, 60, 95, 78, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                          <div className="w-full relative">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h * 1.5}px` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.05 }}
                              className="w-full rounded-t-md"
                              style={{
                                background: i % 3 === 0 ? "#2C4D78" : i % 3 === 1 ? "#98D7C2" : "#A8DADC",
                              }}
                            />
                          </div>
                          <span className="text-[9px] text-[#5A6B82]">
                            {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#D0E0E8]/60 p-4">
                    <h4 className="text-[13px] font-semibold text-[#33415C] mb-4">
                      Pipeline Status
                    </h4>
                    <div className="space-y-3">
                      {[
                        { label: "Discovery", pct: 35, color: "#2C4D78" },
                        { label: "Preclinical", pct: 28, color: "#98D7C2" },
                        { label: "Phase I", pct: 20, color: "#A8DADC" },
                        { label: "Phase II", pct: 12, color: "#5A6B82" },
                        { label: "Phase III", pct: 5, color: "#D0E0E8" },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="text-[#5A6B82]">{item.label}</span>
                            <span className="font-semibold text-[#33415C]">{item.pct}%</span>
                          </div>
                          <div className="h-2 bg-[#F5F9FB] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Task cards row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-xl border border-[#D0E0E8]/60 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[13px] font-semibold text-[#33415C]">Accurate result</span>
                      <ChevronRight className="w-4 h-4 text-[#5A6B82]" />
                    </div>
                    <div className="space-y-2">
                      {tasks.map((t) => (
                        <div key={t.label} className={`flex items-center justify-between p-2 rounded-lg ${t.highlight ? "bg-[#E6EEF2]/50" : "bg-[#F5F9FB]/50"}`}>
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded-full border ${t.done ? "bg-[#98D7C2] border-[#98D7C2]" : "border-[#D0E0E8]"} flex items-center justify-center`}>
                              {t.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-xs text-[#33415C]">{t.label}</span>
                          </div>
                          {t.highlight && <span className="text-[10px] font-medium text-[#2C4D78] bg-[#98D7C2]/20 px-2 py-0.5 rounded-full">{t.assignee}</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#D0E0E8]/60 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[13px] font-semibold text-[#33415C]">Timeline</span>
                      <div className="flex items-center gap-3 text-[10px]">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#2C4D78]" />
                          Completed
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#A8DADC]" />
                          On Progress
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-[10px] text-[#5A6B82]">100%</div>
                        <div className="flex-1 h-2 bg-[#F5F9FB] rounded-full overflow-hidden">
                          <div className="h-full bg-[#2C4D78] rounded-full" style={{ width: "100%" }} />
                        </div>
                        <span className="text-[10px] text-[#33415C]">Work done</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-[10px] text-[#5A6B82]">80%</div>
                        <div className="flex-1 h-2 bg-[#F5F9FB] rounded-full overflow-hidden">
                          <div className="h-full bg-[#A8DADC] rounded-full" style={{ width: "80%" }} />
                        </div>
                        <span className="text-[10px] text-[#33415C]">Digital Lab Environment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-[10px] text-[#5A6B82]">40%</div>
                        <div className="flex-1 h-2 bg-[#F5F9FB] rounded-full overflow-hidden">
                          <div className="h-full bg-[#98D7C2] rounded-full" style={{ width: "40%" }} />
                        </div>
                        <span className="text-[10px] text-[#33415C]">AI-Powered Lab</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#D0E0E8]/60 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[13px] font-semibold text-[#33415C]">AI-Powered Lab</span>
                      <ChevronRight className="w-4 h-4 text-[#5A6B82]" />
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Security Protected", desc: "Protect your projects" },
                        { label: "Privacy Access", desc: "Create communities with ease" },
                        { label: "File Sharing", desc: "Share files securely" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 p-2 rounded-lg bg-[#F5F9FB]/50">
                          <div className="w-7 h-7 rounded-md bg-[#E6EEF2] flex items-center justify-center">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#2C4D78]" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-[#33415C]">{item.label}</div>
                            <div className="text-[10px] text-[#5A6B82]">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
