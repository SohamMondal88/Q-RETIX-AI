"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white pt-[80px] sm:pt-[96px]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-60 h-60 sm:w-80 sm:h-80 bg-[#98D7C2]/25 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#A8DADC]/25 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-[#2C4D78]/8 rounded-full blur-[120px] sm:blur-[180px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="flex flex-col items-center justify-center text-center py-10 sm:py-16 lg:py-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-xs sm:text-sm font-medium text-[#2C4D78] mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#98D7C2] animate-pulse" />
                We are accepting early waitlist now, join Q-RETIX AI
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[#2C4D78] mb-6 sm:mb-8 leading-[1.05]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Q-RETIX AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm sm:text-base md:text-lg text-[#5A6B82] max-w-md sm:max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed"
            >
              AI-Powered Pharmaceutical Intelligence for Research, Drug Discovery, and Clinical Analysis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="#waitlist"
                className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#2C4D78]/25 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-[15px] rounded-xl inline-flex items-center gap-2 h-11 sm:h-12 shadow-lg shadow-[#2C4D78]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              style={{ rotateX, rotateY, perspective: 1200 }}
              className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] aspect-square"
            >
              <Image
                src="/molecular-structure.png"
                alt="Molecular Structure"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 540px"
                priority
              />
              <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-6 sm:h-8 bg-[#2C4D78]/5 rounded-[100%] blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <FloatingParticles />
    </section>
  );
}

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-compute stable random values on client mount to avoid hydration mismatch
  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      key: i,
      x: `${(i * 7.3 + 11) % 100}%`,
      y: `${(i * 13.7 + 23) % 100}%`,
      duration: 8 + ((i * 2.1 + 3) % 10),
      delay: (i * 1.3 + 1) % 5,
    }));
  }, []);

  if (!mounted) {
    // Render static placeholder on SSR, no random values
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#98D7C2]/30"
            style={{ left: `${(i * 7.3 + 11) % 100}%`, top: `${(i * 13.7 + 23) % 100}%` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.key}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#98D7C2]/30"
          initial={{ x: p.x, y: p.y }}
          animate={{
            y: [null, -80, 80],
            x: [null, 40, -40],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
