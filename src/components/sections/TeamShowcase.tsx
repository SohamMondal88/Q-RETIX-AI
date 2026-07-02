"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Rocket, TrendingUp, Megaphone, BarChart3 } from "lucide-react";
import Link from "next/link";
import { designTeam, techTeam, marketingTeam } from "@/lib/teamData";
import LeadershipCard from "@/components/LeadershipCard";
import TeamCard from "@/components/TeamCard";
import TeamTabs from "@/components/TeamTabs";
import { leaders } from "@/lib/teamData";

export default function TeamShowcase() {
  const [activeTeam, setActiveTeam] = useState("design");

  const teamMap = {
    design: designTeam,
    tech: techTeam,
    marketing: marketingTeam,
  };

  const currentTeam = teamMap[activeTeam as keyof typeof teamMap];

  return (
    <>
      {/* ==================== LEADERSHIP SECTION ==================== */}
      <section className="relative py-24 sm:py-28 lg:py-32 bg-[#F8FAFB] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-1 h-7 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[12px] sm:text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">
                Leadership
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1a2942] tracking-tight leading-[1.15] mb-5"
            >
              Meet Our Leadership
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[15px] sm:text-base lg:text-[17px] text-[#5A6B82] leading-[1.7] max-w-2xl mx-auto"
            >
              Driving innovation at the intersection of Artificial Intelligence and Pharmaceutical Research.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-[1200px] mx-auto">
            {leaders.map((leader, index) => (
              <LeadershipCard key={leader.name} leader={leader} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TEAM SECTION ==================== */}
      <section className="relative py-24 sm:py-28 lg:py-32 bg-white overflow-hidden">
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-32 w-64 h-64 rounded-full bg-gradient-to-br from-[#98D7C2]/10 to-[#A8DADC]/6 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 8, 0], x: [0, -4, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#2C4D78]/8 to-[#98D7C2]/6 blur-3xl pointer-events-none"
        />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-1 h-7 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[12px] sm:text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">
                Our People
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1a2942] tracking-tight leading-[1.15] mb-5"
            >
              Meet Our Team
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[15px] sm:text-base lg:text-[17px] text-[#5A6B82] leading-[1.7] max-w-2xl mx-auto mb-10"
            >
              Behind every breakthrough is an exceptional team of innovators, engineers, designers and AI researchers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <TeamTabs activeTab={activeTeam} onTabChange={setActiveTeam} />
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {activeTeam === "marketing" && currentTeam.length === 0 ? (
              <motion.div
                key="marketing-empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <div className="max-w-[600px] mx-auto">
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-[32px] border border-[#E6EEF2]/70 shadow-[0_8px_40px_-16px_rgba(44,77,120,0.12)] overflow-hidden p-10 sm:p-14 text-center">
                    <motion.div
                      animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#98D7C2]/20 to-[#A8DADC]/10 flex items-center justify-center"
                    >
                      <Rocket className="w-5 h-5 text-[#2C4D78]" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-gradient-to-br from-[#A8DADC]/20 to-[#2C4D78]/10 flex items-center justify-center"
                    >
                      <TrendingUp className="w-4 h-4 text-[#1A6B5B]" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0], rotate: [0, 3, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute bottom-8 left-10 w-10 h-10 rounded-xl bg-gradient-to-br from-[#2C4D78]/15 to-[#98D7C2]/10 flex items-center justify-center"
                    >
                      <Megaphone className="w-4 h-4 text-[#5A4D8A]" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 7, 0], rotate: [0, -3, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute bottom-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#98D7C2]/20 to-[#A8DADC]/10 flex items-center justify-center"
                    >
                      <BarChart3 className="w-5 h-5 text-[#2C4D78]" />
                    </motion.div>

                    <div className="mb-8">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#98D7C2]/30 to-[#A8DADC]/20 flex items-center justify-center mb-6"
                      >
                        <Rocket className="w-9 h-9 text-[#2C4D78]" />
                      </motion.div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1a2942] mb-3">
                        We&apos;re Growing!
                      </h3>
                      <p className="text-[15px] text-[#5A6B82] leading-relaxed mb-2">
                        Help us build the future of Pharmaceutical AI.
                      </p>
                      <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                        Join our Marketing Team.
                      </p>
                    </div>

                    <Link href="/careers">
                      <motion.div
                        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[16px] bg-gradient-to-r from-[#2C4D78] to-[#3D5F8A] text-white font-semibold text-[14px] sm:text-[15px] shadow-lg shadow-[#2C4D78]/20 hover:shadow-xl hover:shadow-[#2C4D78]/30 transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                        <span className="relative">Join Our Team</span>
                        <motion.div
                          className="relative w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-3 h-3" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`team-${activeTeam}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
              >
                {currentTeam.map((member, index) => (
                  <TeamCard key={`${activeTeam}-${member.name}`} member={member} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
