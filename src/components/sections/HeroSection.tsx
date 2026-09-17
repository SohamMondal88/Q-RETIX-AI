"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Microscope, Network, Sparkles } from "lucide-react";

const particles = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  left: `${(index * 17 + 9) % 94}%`,
  top: `${(index * 23 + 14) % 86}%`,
  duration: 7 + (index % 5),
  delay: index * 0.35,
}));

const workflowSignals = [
  { icon: BookOpen, label: "Evidence mapping", detail: "Literature + biology" },
  { icon: Network, label: "Target reasoning", detail: "Mechanism + novelty" },
  { icon: Microscope, label: "Validation planning", detail: "Human-reviewed next steps" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { damping: 28, stiffness: 90 });
  const y = useSpring(mouseY, { damping: 28, stiffness: 90 });
  const rotateX = useTransform(y, [-260, 260], [4, -4]);
  const rotateY = useTransform(x, [-260, 260], [-4, 4]);

  useEffect(() => {
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(event.clientX - (rect.left + rect.width / 2));
      mouseY.set(event.clientY - (rect.top + rect.height / 2));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  const reveal = prefersReducedMotion
    ? { initial: false as const, animate: undefined, transition: undefined }
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      ref={containerRef}
      aria-labelledby="home-hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#F8FBFC] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#98D7C2]/25 blur-[120px]" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#A8DADC]/25 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#2C4D78_1px,transparent_1px),linear-gradient(90deg,#2C4D78_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#5FB89C]/40"
            style={{ left: particle.left, top: particle.top }}
            animate={prefersReducedMotion ? undefined : { y: [0, -18, 0], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
        <div className="max-w-3xl">
          <motion.div {...reveal} transition={{ duration: 0.55 }} className="inline-flex items-center gap-2 rounded-full border border-[#CFE1E7] bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#2C4D78] shadow-sm backdrop-blur-xl sm:text-sm">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4CA58A] opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#4CA58A]" /></span>
            Research-stage platform · Human oversight built in
          </motion.div>

          <motion.h1
            id="home-hero-title"
            {...reveal}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-7 text-balance text-[clamp(2.75rem,7vw,5.8rem)] font-bold leading-[0.98] tracking-[-0.06em] text-[#17263E]"
          >
            Reason across biology. <span className="text-gradient">Prioritize what matters.</span>
          </motion.h1>

          <motion.p {...reveal} transition={{ duration: 0.65, delay: 0.16 }} className="mt-7 max-w-2xl text-base leading-7 text-[#52647B] sm:text-lg sm:leading-8">
            Q-RETIX AI explores evidence-aware language models for therapeutic target discovery—connecting literature, biological mechanisms, and multi-omic context to produce clearer, testable research hypotheses.
          </motion.p>

          <motion.div {...reveal} transition={{ duration: 0.65, delay: 0.24 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/blog" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2C4D78] px-6 text-sm font-bold text-white shadow-lg shadow-[#2C4D78]/20 transition hover:-translate-y-0.5 hover:bg-[#1A3A5C] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78] focus-visible:ring-offset-2 sm:text-[15px]">
              Explore the research <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#waitlist" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#C9D9E2] bg-white/80 px-6 text-sm font-bold text-[#2C4D78] shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#98D7C2] hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40 sm:text-[15px]">
              Join research updates <Sparkles className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.ul {...reveal} transition={{ duration: 0.65, delay: 0.3 }} className="mt-8 grid gap-3 text-sm text-[#52647B] sm:grid-cols-3">
            {["Traceable reasoning", "Clear uncertainty", "Validation required"].map((item) => (
              <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#4CA58A]" />{item}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={prefersReducedMotion ? undefined : { rotateX, rotateY, perspective: 1200 }}
          className="relative mx-auto w-full max-w-[590px]"
        >
          <div className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-[#98D7C2]/30 via-white/5 to-[#2C4D78]/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/72 p-4 shadow-[0_35px_90px_-42px_rgba(26,58,92,0.55)] backdrop-blur-2xl sm:p-6">
            <div className="flex items-center justify-between border-b border-[#DFE9EE] pb-4">
              <div><p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#4C7B70]">Concept workflow</p><p className="mt-1 text-sm font-bold text-[#1A2942]">Therapeutic target reasoning</p></div>
              <span className="rounded-full border border-[#C8E7DD] bg-[#F1FAF7] px-3 py-1 text-[11px] font-bold text-[#285C50]">Research only</span>
            </div>

            <div className="relative mt-4 min-h-[310px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#EEF5F7] via-white to-[#E9F7F2] sm:min-h-[380px]">
              <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,#2C4D78_1px,transparent_0)] [background-size:24px_24px]" />
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#98D7C2]/50 sm:h-80 sm:w-80" />
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2C4D78]/20 sm:h-60 sm:w-60" />
              <motion.div animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-[12%]">
                <Image src="/molecular-structure.png" alt="Abstract molecular model representing computational biology" fill preload sizes="(max-width: 1024px) 86vw, 520px" className="object-contain drop-shadow-[0_24px_24px_rgba(26,58,92,0.18)]" />
              </motion.div>
              <div className="absolute left-4 top-4 rounded-xl border border-white/80 bg-white/80 px-3 py-2 shadow-md backdrop-blur-xl"><p className="text-[10px] font-bold uppercase tracking-wider text-[#718096]">Input</p><p className="mt-0.5 text-xs font-bold text-[#2C4D78]">Multi-source evidence</p></div>
              <div className="absolute bottom-4 right-4 rounded-xl border border-[#C8E7DD] bg-[#F1FAF7]/90 px-3 py-2 shadow-md backdrop-blur-xl"><p className="text-[10px] font-bold uppercase tracking-wider text-[#4C7B70]">Output</p><p className="mt-0.5 text-xs font-bold text-[#285C50]">Testable hypotheses</p></div>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
              {workflowSignals.map((signal) => (
                <div key={signal.label} className="rounded-xl border border-[#DFE9EE] bg-white/80 p-3">
                  <signal.icon className="h-4 w-4 text-[#4CA58A]" />
                  <p className="mt-2 text-xs font-bold text-[#1A2942]">{signal.label}</p>
                  <p className="mt-1 text-[10px] leading-4 text-[#718096]">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
