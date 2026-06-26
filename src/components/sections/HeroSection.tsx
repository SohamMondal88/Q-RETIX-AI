"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [6, -6]);
  const rotateY = useTransform(x, [-300, 300], [-6, 6]);

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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#98D7C2]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#A8DADC]/25 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2C4D78]/8 rounded-full blur-[180px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[#2C4D78] mb-8 leading-[1.05]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Q-RETIX AI
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="#waitlist"
                className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#2C4D78]/25 font-semibold px-8 py-3.5 text-[15px] rounded-xl inline-flex items-center gap-2 h-12 shadow-lg shadow-[#2C4D78]/15"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center justify-center h-[560px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              style={{ rotateX, rotateY, perspective: 1200 }}
              className="relative w-full max-w-[540px] aspect-square"
            >
              <MolecularStructure />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-[#2C4D78]/5 rounded-[100%] blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <FloatingParticles />
    </section>
  );
}

function MolecularStructure() {
  return (
    <div className="w-full h-full relative">
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <radialGradient id="navyCore" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#5A7FA8" />
            <stop offset="30%" stopColor="#2C4D78" />
            <stop offset="70%" stopColor="#1A3050" />
            <stop offset="100%" stopColor="#0D1A2D" />
          </radialGradient>

          <radialGradient id="silverBlue" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#E8F4F8" />
            <stop offset="25%" stopColor="#A8DADC" />
            <stop offset="60%" stopColor="#7EB8BA" />
            <stop offset="90%" stopColor="#4A8A8C" />
            <stop offset="100%" stopColor="#356668" />
          </radialGradient>

          <radialGradient id="lightCyan" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#E8F8F5" />
            <stop offset="30%" stopColor="#98D7C2" />
            <stop offset="70%" stopColor="#6BB89E" />
            <stop offset="100%" stopColor="#4A9A80" />
          </radialGradient>

          <radialGradient id="pinkAccent" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#F5E0E6" />
            <stop offset="30%" stopColor="#D4A5B5" />
            <stop offset="70%" stopColor="#B88295" />
            <stop offset="100%" stopColor="#8A5A6E" />
          </radialGradient>

          <radialGradient id="goldJoint" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#F5E6C8" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#A88220" />
            <stop offset="100%" stopColor="#7A5E15" />
          </radialGradient>

          <linearGradient id="lavenderRod" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5B8D4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#A89BC0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B7DAA" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="goldRod" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#B8921A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="cyanRod" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8DADC" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#6BB89E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2C4D78" stopOpacity="0.7" />
          </linearGradient>

          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0D1A2D" floodOpacity="0.25" />
          </filter>

          <filter id="softShadowLight" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#2C4D78" floodOpacity="0.15" />
          </filter>

          <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <circle cx="200" cy="200" r="170" fill="none" stroke="#2C4D78" strokeOpacity="0.03" strokeWidth="1" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="#A8DADC" strokeOpacity="0.04" strokeWidth="1" />

        <g strokeLinecap="round">
          <line x1="180" y1="180" x2="240" y2="160" stroke="url(#lavenderRod)" strokeWidth="4.5" />
          <line x1="180" y1="180" x2="220" y2="220" stroke="url(#lavenderRod)" strokeWidth="4.5" />
          <line x1="240" y1="160" x2="220" y2="220" stroke="url(#lavenderRod)" strokeWidth="4.5" />
          <line x1="180" y1="180" x2="140" y2="230" stroke="url(#lavenderRod)" strokeWidth="4" />
          <line x1="220" y1="220" x2="140" y2="230" stroke="url(#lavenderRod)" strokeWidth="4" />

          <line x1="200" y1="190" x2="230" y2="190" stroke="url(#goldRod)" strokeWidth="2.5" opacity="0.9" />
          <line x1="210" y1="200" x2="210" y2="170" stroke="url(#goldRod)" strokeWidth="2.5" opacity="0.9" />
          <line x1="190" y1="210" x2="230" y2="210" stroke="url(#goldRod)" strokeWidth="2" opacity="0.8" />

          <line x1="240" y1="160" x2="290" y2="130" stroke="url(#lavenderRod)" strokeWidth="3" />
          <line x1="240" y1="160" x2="270" y2="180" stroke="url(#cyanRod)" strokeWidth="3" />
          <line x1="220" y1="220" x2="280" y2="210" stroke="url(#lavenderRod)" strokeWidth="3" />
          <line x1="220" y1="220" x2="260" y2="250" stroke="url(#cyanRod)" strokeWidth="3" />
          <line x1="140" y1="230" x2="100" y2="210" stroke="url(#lavenderRod)" strokeWidth="3" />
          <line x1="140" y1="230" x2="120" y2="270" stroke="url(#cyanRod)" strokeWidth="3" />
          <line x1="180" y1="180" x2="130" y2="150" stroke="url(#lavenderRod)" strokeWidth="3" />
          <line x1="180" y1="180" x2="160" y2="120" stroke="url(#cyanRod)" strokeWidth="3" />

          <line x1="290" y1="130" x2="330" y2="110" stroke="url(#lavenderRod)" strokeWidth="2.5" />
          <line x1="290" y1="130" x2="320" y2="150" stroke="url(#cyanRod)" strokeWidth="2.5" />
          <line x1="270" y1="180" x2="310" y2="190" stroke="url(#lavenderRod)" strokeWidth="2.5" />
          <line x1="280" y1="210" x2="330" y2="220" stroke="url(#lavenderRod)" strokeWidth="2.5" />
          <line x1="280" y1="210" x2="310" y2="240" stroke="url(#cyanRod)" strokeWidth="2.5" />
          <line x1="260" y1="250" x2="290" y2="280" stroke="url(#lavenderRod)" strokeWidth="2.5" />
          <line x1="260" y1="250" x2="230" y2="290" stroke="url(#cyanRod)" strokeWidth="2.5" />

          <line x1="130" y1="150" x2="100" y2="120" stroke="url(#lavenderRod)" strokeWidth="2.5" />
          <line x1="130" y1="150" x2="90" y2="160" stroke="url(#cyanRod)" strokeWidth="2.5" />
          <line x1="160" y1="120" x2="140" y2="80" stroke="url(#lavenderRod)" strokeWidth="2.5" />
          <line x1="160" y1="120" x2="190" y2="90" stroke="url(#cyanRod)" strokeWidth="2.5" />

          <line x1="100" y1="210" x2="70" y2="230" stroke="url(#lavenderRod)" strokeWidth="2.5" />
          <line x1="100" y1="210" x2="80" y2="180" stroke="url(#cyanRod)" strokeWidth="2.5" />
          <line x1="120" y1="270" x2="90" y2="300" stroke="url(#lavenderRod)" strokeWidth="2.5" />
          <line x1="120" y1="270" x2="150" y2="310" stroke="url(#cyanRod)" strokeWidth="2.5" />

          <line x1="240" y1="160" x2="290" y2="130" stroke="url(#lavenderRod)" strokeWidth="2" opacity="0.4" />
          <line x1="220" y1="220" x2="270" y2="180" stroke="url(#cyanRod)" strokeWidth="2" opacity="0.35" />
          <line x1="180" y1="180" x2="130" y2="150" stroke="url(#lavenderRod)" strokeWidth="2" opacity="0.4" />
          <line x1="140" y1="230" x2="160" y2="120" stroke="url(#cyanRod)" strokeWidth="2" opacity="0.3" />
          <line x1="290" y1="130" x2="270" y2="180" stroke="url(#lavenderRod)" strokeWidth="2" opacity="0.35" />
          <line x1="130" y1="150" x2="160" y2="120" stroke="url(#cyanRod)" strokeWidth="2" opacity="0.4" />

          <line x1="330" y1="110" x2="350" y2="90" stroke="url(#cyanRod)" strokeWidth="2" />
          <line x1="330" y1="110" x2="360" y2="120" stroke="url(#lavenderRod)" strokeWidth="2" />
          <line x1="320" y1="150" x2="340" y2="170" stroke="url(#cyanRod)" strokeWidth="2" />
          <line x1="310" y1="190" x2="340" y2="200" stroke="url(#lavenderRod)" strokeWidth="2" />
          <line x1="310" y1="240" x2="340" y2="250" stroke="url(#cyanRod)" strokeWidth="2" />
          <line x1="290" y1="280" x2="310" y2="310" stroke="url(#lavenderRod)" strokeWidth="2" />
          <line x1="230" y1="290" x2="210" y2="320" stroke="url(#cyanRod)" strokeWidth="2" />

          <line x1="100" y1="120" x2="80" y2="100" stroke="url(#cyanRod)" strokeWidth="2" />
          <line x1="90" y1="160" x2="70" y2="150" stroke="url(#lavenderRod)" strokeWidth="2" />
          <line x1="140" y1="80" x2="130" y2="60" stroke="url(#cyanRod)" strokeWidth="2" />
          <line x1="190" y1="90" x2="210" y2="70" stroke="url(#lavenderRod)" strokeWidth="2" />

          <line x1="70" y1="230" x2="50" y2="240" stroke="url(#cyanRod)" strokeWidth="2" />
          <line x1="80" y1="180" x2="60" y2="170" stroke="url(#lavenderRod)" strokeWidth="2" />
          <line x1="90" y1="300" x2="70" y2="320" stroke="url(#cyanRod)" strokeWidth="2" />
          <line x1="150" y1="310" x2="160" y2="340" stroke="url(#lavenderRod)" strokeWidth="2" />
        </g>

        <g filter="url(#softShadowLight)">
          <circle cx="180" cy="180" r="5" fill="url(#goldJoint)" />
          <circle cx="240" cy="160" r="5" fill="url(#goldJoint)" />
          <circle cx="220" cy="220" r="5" fill="url(#goldJoint)" />
          <circle cx="140" cy="230" r="5" fill="url(#goldJoint)" />

          <circle cx="290" cy="130" r="4.5" fill="url(#goldJoint)" />
          <circle cx="270" cy="180" r="4.5" fill="url(#goldJoint)" />
          <circle cx="280" cy="210" r="4.5" fill="url(#goldJoint)" />
          <circle cx="260" cy="250" r="4.5" fill="url(#goldJoint)" />
          <circle cx="130" cy="150" r="4.5" fill="url(#goldJoint)" />
          <circle cx="160" cy="120" r="4.5" fill="url(#goldJoint)" />
          <circle cx="100" cy="210" r="4.5" fill="url(#goldJoint)" />
          <circle cx="120" cy="270" r="4.5" fill="url(#goldJoint)" />

          <circle cx="330" cy="110" r="3.5" fill="url(#goldJoint)" />
          <circle cx="320" cy="150" r="3.5" fill="url(#goldJoint)" />
          <circle cx="310" cy="190" r="3.5" fill="url(#goldJoint)" />
          <circle cx="330" cy="220" r="3.5" fill="url(#goldJoint)" />
          <circle cx="310" cy="240" r="3.5" fill="url(#goldJoint)" />
          <circle cx="290" cy="280" r="3.5" fill="url(#goldJoint)" />
          <circle cx="230" cy="290" r="3.5" fill="url(#goldJoint)" />

          <circle cx="100" cy="120" r="3.5" fill="url(#goldJoint)" />
          <circle cx="90" cy="160" r="3.5" fill="url(#goldJoint)" />
          <circle cx="140" cy="80" r="3.5" fill="url(#goldJoint)" />
          <circle cx="190" cy="90" r="3.5" fill="url(#goldJoint)" />

          <circle cx="70" cy="230" r="3.5" fill="url(#goldJoint)" />
          <circle cx="80" cy="180" r="3.5" fill="url(#goldJoint)" />
          <circle cx="90" cy="300" r="3.5" fill="url(#goldJoint)" />
          <circle cx="150" cy="310" r="3.5" fill="url(#goldJoint)" />

          <circle cx="350" cy="90" r="2.5" fill="url(#goldJoint)" />
          <circle cx="360" cy="120" r="2.5" fill="url(#goldJoint)" />
          <circle cx="340" cy="170" r="2.5" fill="url(#goldJoint)" />
          <circle cx="340" cy="200" r="2.5" fill="url(#goldJoint)" />
          <circle cx="340" cy="250" r="2.5" fill="url(#goldJoint)" />
          <circle cx="310" cy="310" r="2.5" fill="url(#goldJoint)" />
          <circle cx="210" cy="320" r="2.5" fill="url(#goldJoint)" />

          <circle cx="80" cy="100" r="2.5" fill="url(#goldJoint)" />
          <circle cx="70" cy="150" r="2.5" fill="url(#goldJoint)" />
          <circle cx="130" cy="60" r="2.5" fill="url(#goldJoint)" />
          <circle cx="210" cy="70" r="2.5" fill="url(#goldJoint)" />

          <circle cx="50" cy="240" r="2.5" fill="url(#goldJoint)" />
          <circle cx="60" cy="170" r="2.5" fill="url(#goldJoint)" />
          <circle cx="70" cy="320" r="2.5" fill="url(#goldJoint)" />
          <circle cx="160" cy="340" r="2.5" fill="url(#goldJoint)" />
        </g>

        <g filter="url(#softShadow)">
          <circle cx="180" cy="180" r="32" fill="url(#navyCore)" />
          <circle cx="180" cy="180" r="32" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1" />
          <ellipse cx="170" cy="170" rx="10" ry="6" transform="rotate(-45 170 170)" fill="#FFFFFF" opacity="0.1" />

          <circle cx="240" cy="160" r="34" fill="url(#navyCore)" />
          <circle cx="240" cy="160" r="34" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1" />
          <ellipse cx="230" cy="150" rx="10" ry="6" transform="rotate(-45 230 150)" fill="#FFFFFF" opacity="0.1" />

          <circle cx="220" cy="220" r="30" fill="url(#navyCore)" />
          <circle cx="220" cy="220" r="30" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1" />
          <ellipse cx="210" cy="210" rx="9" ry="5" transform="rotate(-45 210 210)" fill="#FFFFFF" opacity="0.1" />

          <circle cx="140" cy="230" r="28" fill="url(#navyCore)" />
          <circle cx="140" cy="230" r="28" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1" />
          <ellipse cx="130" cy="220" rx="9" ry="5" transform="rotate(-45 130 220)" fill="#FFFFFF" opacity="0.1" />
        </g>

        <g filter="url(#softShadowLight)">
          <circle cx="290" cy="130" r="22" fill="url(#silverBlue)" />
          <ellipse cx="282" cy="122" rx="7" ry="4" transform="rotate(-45 282 122)" fill="#FFFFFF" opacity="0.15" />

          <circle cx="270" cy="180" r="20" fill="url(#silverBlue)" />
          <ellipse cx="262" cy="172" rx="6" ry="4" transform="rotate(-45 262 172)" fill="#FFFFFF" opacity="0.15" />

          <circle cx="280" cy="210" r="21" fill="url(#silverBlue)" />
          <ellipse cx="272" cy="202" rx="7" ry="4" transform="rotate(-45 272 202)" fill="#FFFFFF" opacity="0.15" />

          <circle cx="260" cy="250" r="19" fill="url(#silverBlue)" />
          <ellipse cx="252" cy="242" rx="6" ry="4" transform="rotate(-45 252 242)" fill="#FFFFFF" opacity="0.15" />

          <circle cx="130" cy="150" r="20" fill="url(#silverBlue)" />
          <ellipse cx="122" cy="142" rx="6" ry="4" transform="rotate(-45 122 142)" fill="#FFFFFF" opacity="0.15" />

          <circle cx="160" cy="120" r="18" fill="url(#silverBlue)" />
          <ellipse cx="152" cy="112" rx="6" ry="3" transform="rotate(-45 152 112)" fill="#FFFFFF" opacity="0.15" />

          <circle cx="100" cy="210" r="17" fill="url(#silverBlue)" />
          <ellipse cx="92" cy="202" rx="5" ry="3" transform="rotate(-45 92 202)" fill="#FFFFFF" opacity="0.15" />

          <circle cx="120" cy="270" r="18" fill="url(#silverBlue)" />
          <ellipse cx="112" cy="262" rx="6" ry="3" transform="rotate(-45 112 262)" fill="#FFFFFF" opacity="0.15" />

          <circle cx="310" cy="190" r="14" fill="url(#silverBlue)" opacity="0.95" />
          <circle cx="230" cy="290" r="15" fill="url(#silverBlue)" opacity="0.95" />
          <circle cx="90" cy="300" r="13" fill="url(#silverBlue)" opacity="0.95" />
          <circle cx="190" cy="90" r="14" fill="url(#silverBlue)" opacity="0.95" />
        </g>

        <g filter="url(#softShadowLight)">
          <circle cx="330" cy="110" r="11" fill="url(#lightCyan)" />
          <circle cx="320" cy="150" r="10" fill="url(#lightCyan)" />
          <circle cx="330" cy="220" r="11" fill="url(#lightCyan)" />
          <circle cx="310" cy="240" r="10" fill="url(#lightCyan)" />
          <circle cx="290" cy="280" r="9" fill="url(#lightCyan)" />

          <circle cx="100" cy="120" r="10" fill="url(#lightCyan)" />
          <circle cx="90" cy="160" r="9" fill="url(#lightCyan)" />
          <circle cx="140" cy="80" r="11" fill="url(#lightCyan)" />
          <circle cx="190" cy="90" r="10" fill="url(#lightCyan)" />

          <circle cx="70" cy="230" r="9" fill="url(#lightCyan)" />
          <circle cx="80" cy="180" r="10" fill="url(#lightCyan)" />
          <circle cx="90" cy="300" r="9" fill="url(#lightCyan)" />
          <circle cx="150" cy="310" r="10" fill="url(#lightCyan)" />
        </g>

        <g filter="url(#softShadowLight)">
          <circle cx="350" cy="90" r="7" fill="url(#lightCyan)" />
          <circle cx="360" cy="120" r="6" fill="url(#lightCyan)" />
          <circle cx="340" cy="170" r="7" fill="url(#lightCyan)" />
          <circle cx="340" cy="200" r="6" fill="url(#lightCyan)" />
          <circle cx="340" cy="250" r="7" fill="url(#lightCyan)" />
          <circle cx="310" cy="310" r="6" fill="url(#lightCyan)" />
          <circle cx="210" cy="320" r="7" fill="url(#lightCyan)" />

          <circle cx="80" cy="100" r="7" fill="url(#lightCyan)" />
          <circle cx="70" cy="150" r="6" fill="url(#lightCyan)" />
          <circle cx="130" cy="60" r="7" fill="url(#lightCyan)" />
          <circle cx="210" cy="70" r="6" fill="url(#lightCyan)" />

          <circle cx="50" cy="240" r="7" fill="url(#lightCyan)" />
          <circle cx="60" cy="170" r="6" fill="url(#lightCyan)" />
          <circle cx="70" cy="320" r="7" fill="url(#lightCyan)" />
          <circle cx="160" cy="340" r="6" fill="url(#lightCyan)" />

          <circle cx="200" cy="260" r="8" fill="url(#lightCyan)" opacity="0.9" />
          <circle cx="250" cy="290" r="7" fill="url(#lightCyan)" opacity="0.9" />
          <circle cx="170" cy="280" r="6" fill="url(#lightCyan)" opacity="0.85" />
          <circle cx="110" cy="250" r="7" fill="url(#lightCyan)" opacity="0.85" />
          <circle cx="200" cy="140" r="8" fill="url(#lightCyan)" opacity="0.9" />
          <circle cx="250" cy="140" r="7" fill="url(#lightCyan)" opacity="0.85" />
          <circle cx="150" cy="190" r="6" fill="url(#lightCyan)" opacity="0.85" />
          <circle cx="270" cy="210" r="8" fill="url(#lightCyan)" opacity="0.9" />
        </g>

        <g filter="url(#softShadowLight)">
          <circle cx="170" cy="150" r="6" fill="url(#pinkAccent)" />
          <circle cx="260" cy="145" r="5" fill="url(#pinkAccent)" />
          <circle cx="230" cy="195" r="5.5" fill="url(#pinkAccent)" />
          <circle cx="155" cy="205" r="5" fill="url(#pinkAccent)" />
          <circle cx="200" cy="240" r="6" fill="url(#pinkAccent)" />
          <circle cx="130" cy="200" r="5" fill="url(#pinkAccent)" />
          <circle cx="280" cy="170" r="5" fill="url(#pinkAccent)" opacity="0.8" />
          <circle cx="190" cy="260" r="5.5" fill="url(#pinkAccent)" opacity="0.8" />
          <circle cx="250" cy="230" r="4.5" fill="url(#pinkAccent)" opacity="0.7" />
          <circle cx="145" cy="265" r="4.5" fill="url(#pinkAccent)" opacity="0.7" />
        </g>

        <g strokeLinecap="round" opacity="0.85">
          <line x1="190" y1="185" x2="205" y2="175" stroke="url(#goldRod)" strokeWidth="1.5" />
          <line x1="200" y1="195" x2="215" y2="185" stroke="url(#goldRod)" strokeWidth="1.5" />
          <line x1="210" y1="205" x2="225" y2="195" stroke="url(#goldRod)" strokeWidth="1.5" />
          <line x1="195" y1="210" x2="210" y2="200" stroke="url(#goldRod)" strokeWidth="1.5" />
          <line x1="185" y1="195" x2="200" y2="185" stroke="url(#goldRod)" strokeWidth="1.5" />
        </g>

        <g filter="url(#softShadowLight)">
          <circle cx="195" cy="185" r="2.5" fill="url(#goldJoint)" />
          <circle cx="205" cy="175" r="2.5" fill="url(#goldJoint)" />
          <circle cx="215" cy="185" r="2.5" fill="url(#goldJoint)" />
          <circle cx="210" cy="200" r="2.5" fill="url(#goldJoint)" />
          <circle cx="200" cy="185" r="2" fill="url(#goldJoint)" />
          <circle cx="190" cy="195" r="2" fill="url(#goldJoint)" />
          <circle cx="225" cy="195" r="2" fill="url(#goldJoint)" />
          <circle cx="195" cy="210" r="2" fill="url(#goldJoint)" />
        </g>
      </motion.svg>
    </div>
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
