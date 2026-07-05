"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#edf5ff] via-[#f5f9ff] to-white pt-[100px] pb-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        {/* Floating translucent squares */}
        <div className="absolute top-[12%] left-[8%] w-14 h-14 bg-blue-200/25 rounded-xl" />
        <div className="absolute top-[22%] right-[12%] w-10 h-10 bg-blue-200/20 rounded-xl" />
        <div className="absolute bottom-[18%] left-[15%] w-8 h-8 bg-blue-200/25 rounded-lg" />
        <div className="absolute top-[8%] right-[28%] w-12 h-12 bg-blue-200/15 rounded-xl" />
        <div className="absolute bottom-[30%] right-[8%] w-6 h-6 bg-blue-200/20 rounded-md" />
      </div>

      {/* Left 3D Glass Panel */}
      <div className="absolute left-[-60px] sm:left-[-40px] md:left-0 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <GlassPanel side="left" />
      </div>

      {/* Right 3D Glass Panel */}
      <div className="absolute right-[-60px] sm:right-[-40px] md:right-0 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <GlassPanel side="right" />
      </div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Top announcement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[13px] sm:text-sm text-gray-600 mb-10 sm:mb-12"
        >
          We are accepting early waitlist now,{" "}
          <Link href="#waitlist" className="text-[#2563EB] hover:underline font-medium">
            join Q-RETIX AI
          </Link>
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight mb-5 sm:mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Q-RETIX AI
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-normal mb-3 sm:mb-4"
        >
          from module to medicine in seconds
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-500 mb-12 sm:mb-14"
        >
          Navigating your life along side you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#2563EB] to-[#3b82f6] text-white px-6 py-3.5 rounded-full font-medium text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105"
          >
            Schedule Call
            <span className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <button className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3.5 rounded-full font-medium text-sm shadow-md border border-gray-200/80 hover:shadow-lg hover:bg-white transition-all hover:scale-105">
            <span className="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full">
              <Phone className="w-3.5 h-3.5 text-gray-500" />
            </span>
            Book A Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function GlassPanel({ side }: { side: "left" | "right" }) {
  const rotateY = side === "left" ? "rotateY(22deg)" : "rotateY(-22deg)";
  const translateX = side === "left" ? "translateX(-20px)" : "translateX(20px)";

  return (
    <div className="relative" style={{ perspective: "1200px" }}>
      {/* Panel */}
      <div
        className="relative w-[180px] xl:w-[220px] h-[420px] xl:h-[500px] rounded-2xl overflow-hidden"
        style={{
          transform: `${rotateY} ${translateX}`,
          transformStyle: "preserve-3d",
          background: "linear-gradient(180deg, #4a8af0 0%, #1e5bc0 40%, #0f3a8c 100%)",
          boxShadow: `
            0 0 40px rgba(37, 99, 235, 0.3),
            0 0 80px rgba(37, 99, 235, 0.15),
            inset 0 0 40px rgba(147, 197, 253, 0.25),
            inset 0 0 80px rgba(59, 130, 246, 0.1)
          `,
          border: "1px solid rgba(147, 197, 253, 0.5)",
        }}
      >
        {/* Inner molecular structure image */}
        <div className="absolute inset-0 opacity-50 mix-blend-screen">
          <Image
            src="/molecular-structure.png"
            alt="Molecular Structure"
            fill
            className="object-contain scale-110"
            style={{
              filter: "hue-rotate(180deg) saturate(2) brightness(1.2)",
            }}
          />
        </div>

        {/* Cyan glow from bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-cyan-300/30 via-blue-400/20 to-transparent" />

        {/* Radial glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(34,211,238,0.25)_0%,transparent_60%)]" />

        {/* Glass edge highlights */}
        <div className="absolute inset-0 rounded-2xl border border-white/20" />
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-white/30 via-transparent to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-white/20 via-transparent to-transparent" />

        {/* Side panel frame line */}
        <div
          className="absolute top-0 bottom-0 w-[12px]"
          style={{
            [side === "left" ? "right" : "left"]: "0",
            background: "linear-gradient(180deg, rgba(147,197,253,0.4) 0%, rgba(59,130,246,0.2) 50%, rgba(147,197,253,0.4) 100%)",
            transform: side === "left" ? "translateX(6px) rotateY(-50deg)" : "translateX(-6px) rotateY(50deg)",
            transformOrigin: side === "left" ? "right" : "left",
          }}
        />
      </div>

      {/* Reflection / Stand */}
      <div
        className="absolute -bottom-4 left-4 right-4 h-16 opacity-40"
        style={{
          background: "linear-gradient(to bottom, rgba(37,99,235,0.2), transparent)",
          filter: "blur(8px)",
          transform: "scaleY(-0.6) skewX(10deg)",
          transformOrigin: "top",
        }}
      />

      {/* Base stand */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[140px] h-[10px] rounded-full"
        style={{
          background: "linear-gradient(90deg, rgba(147,197,253,0.3), rgba(59,130,246,0.5), rgba(147,197,253,0.3))",
          boxShadow: "0 0 20px rgba(37,99,235,0.3)",
        }}
      />
    </div>
  );
}
