"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame, useSpring } from "framer-motion";
import { Star, BadgeCheck, ExternalLink } from "lucide-react";

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  org: string;
  quote: string;
  rating: number;
  verified: boolean;
  initials: string;
  color: string;
};

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Structural Biology Team Lead",
    role: "Computational Chemistry Director",
    org: "European Pharma Consortium",
    quote: "Q-RETIX's structural AI identified a cryptic pocket our crystallography team missed for two years. The allosteric hinge approach changed how we think about 'undruggable' inflammasomes entirely.",
    rating: 5,
    verified: true,
    initials: "SB",
    color: "#2C4D78",
  },
  {
    id: 2,
    name: "Immunology Research Head",
    role: "Principal Investigator",
    org: "Autoimmune Research Institute",
    quote: "The electrostatic charge trap stalled our AIM2 program for 18 months. Q-RETIX bypassed it completely by mapping dynamic conformations—something traditional docking could never achieve.",
    rating: 5,
    verified: true,
    initials: "IR",
    color: "#1A6B5B",
  },
  {
    id: 3,
    name: "Drug Discovery VP",
    role: "VP of Discovery Biology",
    org: "Clinical-stage Biotech",
    quote: "We went from target validation to a first-in-class allosteric molecular wedge in 14 weeks. Q-RETIX's AI matrix doesn't just screen compounds—it engineers mechanisms.",
    rating: 5,
    verified: true,
    initials: "DD",
    color: "#5A4D8A",
  },
  {
    id: 4,
    name: "CRO Partnership Director",
    role: "Strategic Alliance Lead",
    org: "Global CRO Network",
    quote: "Our clients demand specificity. Q-RETIX delivered an AIM2 inhibitor with zero cGAS cross-reactivity—a level of selectivity we have never seen from an AI platform.",
    rating: 5,
    verified: true,
    initials: "CP",
    color: "#2C4D78",
  },
  {
    id: 5,
    name: "Translational Medicine Lead",
    role: "Head of Translational Science",
    org: "University Medical Center",
    quote: "The membrane permeability profile was validated in our cellular assays within days. An uncharged, lipophilic AIM2 modulator is exactly what the autoimmune field has been waiting for.",
    rating: 5,
    verified: true,
    initials: "TM",
    color: "#1A6B5B",
  },
  {
    id: 6,
    name: "Biotech Founder",
    role: "CEO & Co-Founder",
    org: "Inflammasome Therapeutics",
    quote: "We evaluated every AI drug discovery platform on the market. Q-RETIX is the only one that found a druggable site on AIM2. That first-mover advantage is now our entire Series A thesis.",
    rating: 5,
    verified: true,
    initials: "BF",
    color: "#5A4D8A",
  },
  {
    id: 7,
    name: "Regulatory Strategy Officer",
    role: "Chief Regulatory Officer",
    org: "Mid-size Pharma",
    quote: "The mechanistic clarity of an allosteric hinge stabilizer makes regulatory conversations straightforward. We have a clear target engagement biomarker and a clean toxicity profile.",
    rating: 5,
    verified: true,
    initials: "RS",
    color: "#2C4D78",
  },
  {
    id: 8,
    name: "AI Research Scientist",
    role: "Senior ML Engineer",
    org: "Structural Genomics Consortium",
    quote: "As someone who builds protein models, I was skeptical. But Q-RETIX's dynamic ensemble approach finds transient pockets that static AlphaFold structures completely miss.",
    rating: 5,
    verified: true,
    initials: "AI",
    color: "#1A6B5B",
  },
];

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[380px] sm:w-[420px] group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-[#D0E0E8]/40 p-7 shadow-lg shadow-[#2C4D78]/3 hover:shadow-xl hover:shadow-[#2C4D78]/8 transition-shadow duration-500 overflow-hidden">
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2C4D78]/5 via-transparent to-[#98D7C2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Glow effect */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px]"
          style={{ backgroundColor: testimonial.color }}
          animate={{ opacity: isHovered ? 0.06 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-[13px]"
                style={{ backgroundColor: testimonial.color }}
              >
                {testimonial.initials}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-[14px] font-semibold text-[#2C4D78]">{testimonial.name}</p>
                  {testimonial.verified && (
                    <BadgeCheck className="w-4 h-4 text-[#98D7C2]" />
                  )}
                </div>
                <p className="text-[12px] text-[#8A9BB0]">
                  {testimonial.role} &bull; {testimonial.org}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#E8B923] text-[#E8B923]" />
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-[15px] text-[#5A6B82] leading-relaxed mb-5">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] text-[#8A9BB0]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#98D7C2] animate-pulse" />
              Verified Partner
            </div>
            <button className="w-8 h-8 rounded-lg bg-[#E6EEF2] flex items-center justify-center hover:bg-[#2C4D78] transition-colors group/icon">
              <ExternalLink className="w-3.5 h-3.5 text-[#5A6B82] group-hover/icon:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  direction = "left",
  speed = 1,
  testimonials: items,
}: {
  direction: "left" | "right";
  speed: number;
  testimonials: TestimonialItem[];
}) {
  const baseVelocity = direction === "left" ? -speed * 20 : speed * 20;
  const baseX = useMotionValue(0);
  const smoothX = useSpring(baseX, { stiffness: 50, damping: 20 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (width === 0) return;
    let moveBy = baseVelocity * (delta / 1000);
    let newX = baseX.get() + moveBy;

    if (direction === "left" && newX <= -width) {
      newX = 0;
    } else if (direction === "right" && newX >= 0) {
      newX = -width;
    }

    baseX.set(newX);
  });

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFB] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFB] to-transparent z-10 pointer-events-none" />

      <motion.div ref={containerRef} style={{ x: smoothX }} className="flex gap-5 py-3">
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#F8FAFB] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
            <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">Testimonials</span>
            <div className="w-1 h-8 bg-gradient-to-b from-[#98D7C2] to-[#2C4D78] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C4D78] tracking-tight mb-5 leading-tight">
            Trusted by Researchers &amp; Drug Discovery Teams
          </h2>

          <p className="text-base lg:text-lg text-[#5A6B82] leading-relaxed">
            Hear from pharmaceutical scientists and biotech leaders using Q-RETIX structural AI.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-5">
        <MarqueeRow direction="left" speed={1.2} testimonials={testimonials.slice(0, 4)} />
        <MarqueeRow direction="right" speed={1} testimonials={testimonials.slice(4, 8)} />
      </div>
    </section>
  );
}
