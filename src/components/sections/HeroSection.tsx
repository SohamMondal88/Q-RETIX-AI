"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [6, -6]);
  const rotateY = useTransform(x, [-300, 300], [-6, 6]);
  const leftRotateX = useTransform(rotateX, (v) => v);
  const leftRotateY = useTransform(rotateY, (v) => v);
  const rightRotateX = useTransform(rotateX, (v) => -v);
  const rightRotateY = useTransform(rotateY, (v) => -v);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-white pt-[96px]"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#98D7C2]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#A8DADC]/25 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2C4D78]/8 rounded-full blur-[180px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left panel */}
          <GlassPanel side="left" rotateX={leftRotateX} rotateY={leftRotateY} />

          {/* Center content */}
          <div className="flex flex-col items-center text-center py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78] mb-8">
                <span className="w-2 h-2 rounded-full bg-[#98D7C2] animate-pulse" />
                We are accepting early waitlist now, join Q-RETIX AI
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[#2C4D78] mb-6 leading-[1.05]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Q-RETIX AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-[#5A6B82] max-w-xl mb-10 leading-relaxed"
            >
              AI-Powered Pharmaceutical Intelligence for Research, Drug
              Discovery, Clinical Analysis, and Scientific Innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="#waitlist"
                className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#2C4D78]/25 font-semibold px-7 py-3 text-[15px] rounded-xl inline-flex items-center gap-2 h-12 shadow-lg shadow-[#2C4D78]/15"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="#platform"
                className="border border-[#D0E0E8] text-[#33415C] hover:bg-[#E6EEF2] hover:border-[#2C4D78] font-semibold px-7 py-3 text-[15px] rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2 h-12 bg-white shadow-sm"
              >
                <Play className="w-5 h-5 fill-[#2C4D78] text-[#2C4D78]" />
                Explore Platform
              </Link>
            </motion.div>
          </div>

          {/* Right panel */}
          <GlassPanel side="right" rotateX={rightRotateX} rotateY={rightRotateY} />
        </div>
      </div>

      <FloatingParticles />
    </section>
  );
}

function GlassPanel({
  side,
  rotateX,
  rotateY,
}: {
  side: "left" | "right";
  rotateX: any;
  rotateY: any;
}) {
  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      className="hidden lg:flex relative h-[520px] items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[260px] h-[440px]"
      >
        {/* Glass card base */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#2C4D78]/12 via-[#A8DADC]/10 to-[#98D7C2]/12 border border-[#D0E0E8]/70 backdrop-blur-2xl shadow-[0_8px_40px_-12px_rgba(44,77,120,0.25)] overflow-hidden"
        >
          {/* Inner glow strip */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#98D7C2]/50 to-transparent" />

          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {/* DNA animation */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[180px] h-[180px]">
              <DNAAnimation />
            </div>

            {/* Liquid/glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 pointer-events-none" />

            {/* Bottom data card */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[200px]">
              <div className="glass rounded-xl p-4 border border-[#D0E0E8]/60 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#98D7C2] animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#2C4D78] uppercase tracking-wider">
                    Live Analysis
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-[#E6EEF2] rounded-full w-3/4" />
                  <div className="h-1.5 bg-[#E6EEF2] rounded-full w-1/2" />
                  <div className="h-1.5 bg-[#E6EEF2] rounded-full w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating top-right badge */}
        <div className="absolute -top-3 -right-3 w-14 h-14 rounded-xl bg-white border border-[#D0E0E8] backdrop-blur-sm flex items-center justify-center shadow-lg">
          <div className="w-7 h-7 rounded-full border-2 border-[#98D7C2] border-t-transparent animate-spin" />
        </div>

        {/* Floating bottom-left stat */}
        <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E6EEF2] to-white border border-[#D0E0E8] backdrop-blur-sm flex flex-col items-center justify-center shadow-lg">
          <span className="text-[22px] font-bold text-[#2C4D78]">98%</span>
          <span className="text-[9px] font-medium text-[#5A6B82] uppercase tracking-wider">Efficacy</span>
        </div>

        {/* Side glow accent */}
        <div
          className={`absolute top-1/4 ${side === "left" ? "-left-2" : "-right-2"} w-1 h-24 rounded-full bg-gradient-to-b from-[#98D7C2] via-[#A8DADC] to-transparent opacity-40`}
        />
      </motion.div>
    </motion.div>
  );
}

function DNAAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="dnaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2C4D78" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#98D7C2" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="dnaGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A8DADC" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2C4D78" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="bondGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D0E0E8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#98D7C2" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {[...Array(9)].map((_, i) => (
        <g key={i}>
          <circle cx={100 + Math.sin(i * 0.7) * 35} cy={22 + i * 18} r="7" fill="url(#dnaGrad1)">
            <animate attributeName="cy" values={`${22 + i * 18};${18 + i * 18};${22 + i * 18}`} dur="3.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
            <animate attributeName="cx" values={`${100 + Math.sin(i * 0.7) * 35};${100 + Math.sin(i * 0.7 + 1) * 35};${100 + Math.sin(i * 0.7) * 35}`} dur="3.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
          </circle>
          <circle cx={100 - Math.sin(i * 0.7) * 35} cy={22 + i * 18} r="7" fill="url(#dnaGrad2)">
            <animate attributeName="cy" values={`${22 + i * 18};${26 + i * 18};${22 + i * 18}`} dur="3.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
            <animate attributeName="cx" values={`${100 - Math.sin(i * 0.7) * 35};${100 - Math.sin(i * 0.7 + 1) * 35};${100 - Math.sin(i * 0.7) * 35}`} dur="3.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
          </circle>
          <line
            x1={100 + Math.sin(i * 0.7) * 35}
            y1={22 + i * 18}
            x2={100 - Math.sin(i * 0.7) * 35}
            y2={22 + i * 18}
            stroke="url(#bondGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <animate attributeName="y1" values={`${22 + i * 18};${18 + i * 18};${22 + i * 18}`} dur="3.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
            <animate attributeName="y2" values={`${22 + i * 18};${26 + i * 18};${22 + i * 18}`} dur="3.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
            <animate attributeName="x1" values={`${100 + Math.sin(i * 0.7) * 35};${100 + Math.sin(i * 0.7 + 1) * 35};${100 + Math.sin(i * 0.7) * 35}`} dur="3.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
            <animate attributeName="x2" values={`${100 - Math.sin(i * 0.7) * 35};${100 - Math.sin(i * 0.7 + 1) * 35};${100 - Math.sin(i * 0.7) * 35}`} dur="3.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
          </line>
        </g>
      ))}
    </svg>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#98D7C2]/30"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, -100, 100],
            x: [null, 50, -50],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
