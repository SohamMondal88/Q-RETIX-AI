"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col items-start text-left py-16 lg:py-0">
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

          {/* Right: 3D Molecular Structure */}
          <div className="hidden lg:flex items-center justify-center h-[560px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              style={{ rotateX, rotateY, perspective: 1200 }}
              className="relative w-full max-w-[540px] aspect-square"
            >
              <MolecularStructure />

              {/* Subtle reflection below */}
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
        animate={{
          y: [0, -14, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          {/* Core atom — deep navy */}
          <radialGradient id="atomCore" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#5A7FA8" />
            <stop offset="40%" stopColor="#2C4D78" />
            <stop offset="85%" stopColor="#1A3050" />
            <stop offset="100%" stopColor="#0F1F35" />
          </radialGradient>

          {/* Secondary atom — light blue */}
          <radialGradient id="atomLight" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#D8EFF2" />
            <stop offset="40%" stopColor="#A8DADC" />
            <stop offset="85%" stopColor="#7EB8BA" />
            <stop offset="100%" stopColor="#5A9A9C" />
          </radialGradient>

          {/* Mint accent atom */}
          <radialGradient id="atomMint" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#D4F5E9" />
            <stop offset="40%" stopColor="#98D7C2" />
            <stop offset="85%" stopColor="#6BB89E" />
            <stop offset="100%" stopColor="#4A9A80" />
          </radialGradient>

          {/* Pale / hydrogen */}
          <radialGradient id="atomPale" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#F8FBFC" />
            <stop offset="40%" stopColor="#E6EEF2" />
            <stop offset="85%" stopColor="#C5D5DE" />
            <stop offset="100%" stopColor="#A8BAC8" />
          </radialGradient>

          {/* Gold joint */}
          <radialGradient id="jointGold" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#F5E6C8" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="85%" stopColor="#A88220" />
            <stop offset="100%" stopColor="#7A5E15" />
          </radialGradient>

          {/* Rod gradients */}
          <linearGradient id="rodBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8DADC" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#6E8EAF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2C4D78" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="rodMint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#98D7C2" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#6BB89E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2C4D78" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="rodPale" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6EEF2" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#A8DADC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2C4D78" stopOpacity="0.6" />
          </linearGradient>

          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#2C4D78" floodOpacity="0.15" />
          </filter>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background subtle ring */}
        <circle cx="200" cy="200" r="160" fill="none" stroke="#2C4D78" strokeOpacity="0.04" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#A8DADC" strokeOpacity="0.05" strokeWidth="1" />

        {/* Rods (bonds) — drawn behind atoms */}
        <g strokeLinecap="round" strokeWidth="3.5">
          <line x1="200" y1="200" x2="145" y2="130" stroke="url(#rodBlue)" />
          <line x1="200" y1="200" x2="255" y2="130" stroke="url(#rodMint)" />
          <line x1="200" y1="200" x2="200" y2="290" stroke="url(#rodBlue)" />
          <line x1="200" y1="200" x2="110" y2="200" stroke="url(#rodPale)" />
          <line x1="200" y1="200" x2="290" y2="200" stroke="url(#rodMint)" />

          <line x1="145" y1="130" x2="95" y2="85" stroke="url(#rodPale)" strokeWidth="2.5" />
          <line x1="145" y1="130" x2="115" y2="165" stroke="url(#rodBlue)" strokeWidth="2.5" />
          <line x1="255" y1="130" x2="305" y2="85" stroke="url(#rodPale)" strokeWidth="2.5" />
          <line x1="255" y1="130" x2="285" y2="165" stroke="url(#rodMint)" strokeWidth="2.5" />

          <line x1="200" y1="290" x2="160" y2="335" stroke="url(#rodBlue)" strokeWidth="2.5" />
          <line x1="200" y1="290" x2="240" y2="335" stroke="url(#rodMint)" strokeWidth="2.5" />
          <line x1="200" y1="290" x2="200" y2="355" stroke="url(#rodPale)" strokeWidth="2.5" />

          <line x1="110" y1="200" x2="80" y2="155" stroke="url(#rodPale)" strokeWidth="2.5" />
          <line x1="110" y1="200" x2="70" y2="220" stroke="url(#rodBlue)" strokeWidth="2.5" />

          <line x1="290" y1="200" x2="320" y2="155" stroke="url(#rodPale)" strokeWidth="2.5" />
          <line x1="290" y1="200" x2="330" y2="220" stroke="url(#rodMint)" strokeWidth="2.5" />

          <line x1="145" y1="130" x2="175" y2="95" stroke="url(#rodMint)" strokeWidth="2.5" />
          <line x1="255" y1="130" x2="225" y2="95" stroke="url(#rodBlue)" strokeWidth="2.5" />

          {/* Cross connections for network feel */}
          <line x1="145" y1="130" x2="110" y2="200" stroke="url(#rodBlue)" strokeWidth="2" opacity="0.4" />
          <line x1="255" y1="130" x2="290" y2="200" stroke="url(#rodMint)" strokeWidth="2" opacity="0.4" />
          <line x1="145" y1="130" x2="255" y2="130" stroke="url(#rodPale)" strokeWidth="2" opacity="0.3" />
          <line x1="110" y1="200" x2="200" y2="290" stroke="url(#rodBlue)" strokeWidth="2" opacity="0.3" />
          <line x1="290" y1="200" x2="200" y2="290" stroke="url(#rodMint)" strokeWidth="2" opacity="0.3" />
        </g>

        {/* Joints at intersections */}
        <g>
          {[ [200,200], [145,130], [255,130], [200,290], [110,200], [290,200] ].map(([cx, cy], i) => (
            <circle key={`j-${i}`} cx={cx} cy={cy} r="5.5" fill="url(#jointGold)" filter="url(#softShadow)" />
          ))}
        </g>

        {/* Atoms */}
        <g filter="url(#softShadow)">
          {/* Core — large navy */}
          <circle cx="200" cy="200" r="38" fill="url(#atomCore)" />
          <circle cx="200" cy="200" r="38" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />

          {/* Secondary — large navy */}
          <circle cx="145" cy="130" r="32" fill="url(#atomCore)" />
          <circle cx="145" cy="130" r="32" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />

          <circle cx="255" cy="130" r="32" fill="url(#atomCore)" />
          <circle cx="255" cy="130" r="32" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />

          <circle cx="200" cy="290" r="30" fill="url(#atomCore)" />
          <circle cx="200" cy="290" r="30" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />

          <circle cx="110" cy="200" r="28" fill="url(#atomCore)" />
          <circle cx="110" cy="200" r="28" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />

          <circle cx="290" cy="200" r="28" fill="url(#atomCore)" />
          <circle cx="290" cy="200" r="28" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />

          {/* Medium light blue */}
          <circle cx="95" cy="85" r="18" fill="url(#atomLight)" />
          <circle cx="305" cy="85" r="18" fill="url(#atomLight)" />
          <circle cx="160" cy="335" r="18" fill="url(#atomLight)" />
          <circle cx="240" cy="335" r="18" fill="url(#atomLight)" />
          <circle cx="175" cy="95" r="16" fill="url(#atomLight)" />
          <circle cx="225" cy="95" r="16" fill="url(#atomLight)" />

          {/* Medium mint */}
          <circle cx="115" cy="165" r="16" fill="url(#atomMint)" />
          <circle cx="285" cy="165" r="16" fill="url(#atomMint)" />
          <circle cx="80" cy="155" r="14" fill="url(#atomMint)" />
          <circle cx="320" cy="155" r="14" fill="url(#atomMint)" />

          {/* Small pale / hydrogen */}
          <circle cx="70" cy="220" r="12" fill="url(#atomPale)" />
          <circle cx="330" cy="220" r="12" fill="url(#atomPale)" />
          <circle cx="200" cy="355" r="12" fill="url(#atomPale)" />
          <circle cx="80" cy="155" r="10" fill="url(#atomPale)" />
          <circle cx="320" cy="155" r="10" fill="url(#atomPale)" />

          {/* Extra accent atoms for fullness */}
          <circle cx="155" cy="240" r="13" fill="url(#atomMint)" opacity="0.9" />
          <circle cx="245" cy="240" r="13" fill="url(#atomLight)" opacity="0.9" />
          <circle cx="130" cy="260" r="11" fill="url(#atomPale)" opacity="0.85" />
          <circle cx="270" cy="260" r="11" fill="url(#atomMint)" opacity="0.85" />
          <circle cx="185" cy="165" r="12" fill="url(#atomLight)" opacity="0.9" />
          <circle cx="215" cy="165" r="12" fill="url(#atomMint)" opacity="0.9" />
        </g>

        {/* Subtle specular highlights on core atoms */}
        <g fill="#FFFFFF" opacity="0.15">
          <ellipse cx="188" cy="188" rx="10" ry="6" transform="rotate(-45 188 188)" />
          <ellipse cx="133" cy="118" rx="8" ry="5" transform="rotate(-45 133 118)" />
          <ellipse cx="243" cy="118" rx="8" ry="5" transform="rotate(-45 243 118)" />
          <ellipse cx="190" cy="278" rx="7" ry="4" transform="rotate(-45 190 278)" />
          <ellipse cx="100" cy="190" rx="7" ry="4" transform="rotate(-45 100 190)" />
          <ellipse cx="278" cy="190" rx="7" ry="4" transform="rotate(-45 278 190)" />
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
