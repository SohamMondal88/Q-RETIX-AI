"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "AI in Medical Diagnosis: The New Frontier",
    description:
      "How artificial intelligence is revolutionizing early disease detection, diagnostic imaging, and clinical decision support systems in modern healthcare.",
    category: "Healthcare Intelligence",
    readTime: "8 min read",
    date: "Dec 15, 2025",
    author: "Dr. Sarah Chen",
    accent: "#2C4D78",
    gradient: "from-[#2C4D78] to-[#1A3050]",
  },
  {
    id: 2,
    title: "Future of Healthcare Intelligence",
    description:
      "Exploring the convergence of multimodal AI, real-world evidence, and predictive analytics to transform patient outcomes and pharmaceutical research.",
    category: "Research Insights",
    readTime: "12 min read",
    date: "Dec 10, 2025",
    author: "Dr. James Wilson",
    accent: "#1A6B5B",
    gradient: "from-[#1A6B5B] to-[#0D3B31]",
  },
  {
    id: 3,
    title: "Research Paper Highlights: Explainable AI",
    description:
      "Deep dive into the latest research on interpretable machine learning models for clinical decision-making and regulatory approval pathways.",
    category: "AI Research",
    readTime: "10 min read",
    date: "Dec 5, 2025",
    author: "Dr. Maria Rodriguez",
    accent: "#5A4D8A",
    gradient: "from-[#5A4D8A] to-[#2D2645]",
  },
  {
    id: 4,
    title: "How Q-RETIX Detects Diseases with Vision Models",
    description:
      "An inside look at our medical vision models, training pipelines, and validation frameworks that power automated pathology screening.",
    category: "Product Deep Dive",
    readTime: "15 min read",
    date: "Nov 28, 2025",
    author: "Dr. Alan Park",
    accent: "#2C4D78",
    gradient: "from-[#2C4D78] to-[#1A3050]",
  },
];

function BlogCard({
  blog,
  index,
  totalCards,
  progress,
}: {
  blog: (typeof blogs)[0];
  index: number;
  totalCards: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const step = 1 / (2 * totalCards); // 0.125 for 4 cards
  const isFirst = index === 0;
  const isLast = index === totalCards - 1;

  // Lifecycle phases for each card
  const entryStart = isFirst ? 0 : (2 * index - 1) * step;
  const entryEnd = isFirst ? step : 2 * index * step;
  const shrinkStart = isLast ? 1 : (2 * index + 1) * step;
  const shrinkEnd = isLast ? 1 : (2 * index + 2) * step;

  // Card Y position
  const cardY = useTransform(
    progress,
    isFirst
      ? [0, shrinkStart, shrinkEnd]
      : isLast
      ? [entryStart, entryEnd, shrinkStart]
      : [entryStart, entryEnd, shrinkStart, shrinkEnd],
    isFirst
      ? [0, 0, -40]
      : isLast
      ? [50, 0, 0]
      : [50, 0, 0, -40]
  );

  // Card scale
  const cardScale = useTransform(
    progress,
    isFirst
      ? [0, shrinkStart, shrinkEnd]
      : isLast
      ? [entryStart, entryEnd, shrinkStart]
      : [entryStart, entryEnd, shrinkStart, shrinkEnd],
    isFirst
      ? [1, 1, 0.88]
      : isLast
      ? [0.92, 1, 1]
      : [0.92, 1, 1, 0.88]
  );

  // Card opacity
  const opacityEntryEnd = entryStart + (entryEnd - entryStart) * 0.5;
  const cardOpacity = useTransform(
    progress,
    isFirst
      ? [0, shrinkStart, shrinkEnd]
      : isLast
      ? [entryStart, opacityEntryEnd, entryEnd, shrinkStart]
      : [entryStart, opacityEntryEnd, entryEnd, shrinkStart, shrinkEnd],
    isFirst
      ? [1, 1, 0.15]
      : isLast
      ? [0, 1, 1, 1]
      : [0, 1, 1, 1, 0.15]
  );

  // Fog overlay opacity (only during shrink phase)
  const overlayOpacity = useTransform(
    progress,
    isLast ? [0, 1] : [shrinkStart, shrinkEnd],
    isLast ? [0, 0] : [0, 0.72]
  );

  const springY = useSpring(cardY, { stiffness: 55, damping: 16, restDelta: 0.001 });
  const springScale = useSpring(cardScale, { stiffness: 65, damping: 18, restDelta: 0.001 });
  const springOpacity = useSpring(cardOpacity, { stiffness: 55, damping: 16, restDelta: 0.001 });
  const springOverlay = useSpring(overlayOpacity, { stiffness: 55, damping: 16, restDelta: 0.001 });

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        y: springY,
        scale: springScale,
        opacity: springOpacity,
        zIndex: index + 1,
      }}
    >
      <div className="w-full max-w-[1080px] mx-auto relative">
        <div className="bg-white rounded-[28px] border border-[#E6EEF2]/60 shadow-[0_8px_40px_-12px_rgba(44,77,120,0.12)] overflow-hidden relative group hover:shadow-[0_12px_48px_-8px_rgba(44,77,120,0.16)] transition-shadow duration-500">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#98D7C2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Fog overlay for recessed cards */}
          <motion.div
            className="absolute inset-0 z-10 rounded-[28px] bg-gradient-to-b from-[#F8FAFB]/80 via-[#F8FAFB]/40 to-[#F8FAFB]/90 pointer-events-none"
            style={{ opacity: springOverlay }}
          />

          <div className="grid lg:grid-cols-5 gap-0">
            <div
              className={`relative lg:col-span-2 h-52 sm:h-60 lg:h-[380px] bg-gradient-to-br ${blog.gradient} overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.3) 1.5px, transparent 0)`,
                  backgroundSize: "28px 28px",
                }}
              />

              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-[24px] bg-white/[0.08] backdrop-blur-md border border-white/[0.12] flex items-center justify-center shadow-2xl">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"
                  >
                    <path d="M9 12h6m-3-3v6m-9 3V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2v4M8 4h8" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>
              </motion.div>

              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/[0.06] rounded-full blur-[60px]" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/[0.04] rounded-full blur-[50px]" />

              <div className="absolute top-5 left-5">
                <div className="px-3 py-1.5 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/[0.15] text-white text-[12px] font-medium tracking-wide"
                >
                  {blog.category}
                </div>
              </div>

              <div className="absolute bottom-5 right-5">
                <div className="w-9 h-9 rounded-full bg-white/[0.1] backdrop-blur-md border border-white/[0.12] flex items-center justify-center text-white font-bold text-[13px]"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5 text-[12px] sm:text-[13px] text-[#8A9BB0]"
              >
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" strokeWidth={2} />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>{blog.date}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1a2942] leading-[1.25] mb-4 group-hover:text-[#2C4D78] transition-colors duration-300"
              >
                {blog.title}
              </h3>

              <p className="text-[14px] sm:text-[15px] text-[#5A6B82] leading-[1.65] mb-7"
              >
                {blog.description}
              </p>

              <Link href="/blog" className="inline-flex items-center gap-2 text-[14px] font-semibold group/link w-fit"
              >
                <span className="text-[#2C4D78] group-hover/link:text-[#1a2942] transition-colors duration-300"
                >Read Article</span>
                <div className="w-7 h-7 rounded-full bg-[#E6EEF2] group-hover/link:bg-[#2C4D78] flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-0.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#2C4D78] group-hover/link:text-white transition-colors duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogStackSection() {
  const spacerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 16,
    restDelta: 0.001,
  });

  return (
    <section id="blog" className="relative bg-[#F8FAFB]"
    >
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Header - OUTSIDE the scroll target */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5"
          >
            <div className="w-1 h-7 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]"
            >
              Blog
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1a2942] tracking-tight leading-[1.15] mb-4"
          >
            Latest Insights & Research
          </h2>

          <p className="text-[15px] sm:text-base lg:text-[17px] text-[#5A6B82] leading-[1.7]"
          >
            Stay updated with breakthroughs in AI-powered healthcare, research, product updates, and medical innovation.
          </p>
        </motion.div>
      </div>

      {/* Scroll area - starts right after header */}
      <div ref={spacerRef} className="relative"
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-[100dvh] flex items-center justify-center z-10 overflow-hidden"
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              totalCards={blogs.length}
              progress={progress}
            />
          ))}
        </div>

        {/* Scroll spacer */}
        <div
          style={{ height: "200vh" }}
          className="relative z-0"
        />
      </div>

      {/* Read More CTA */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center"
        >
          <Link href="/blog"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[16px] bg-gradient-to-r from-[#2C4D78] to-[#3D5F8A] text-white font-semibold text-[14px] sm:text-[15px] shadow-lg shadow-[#2C4D78]/20 hover:shadow-xl hover:shadow-[#2C4D78]/30 transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              <span className="relative"
              >Read More Articles</span>
              <motion.div
                className="relative w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
