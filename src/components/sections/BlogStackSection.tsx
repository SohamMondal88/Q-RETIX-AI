"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Q-RETIX.AI: Unlocking the \"Undruggable\" AIM2 Inflammasome",
    description:
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target. A deep dive into the AI-driven discovery of a first-in-class allosteric molecular wedge.",
    category: "Research",
    readTime: "15 min read",
    date: "July 4, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/cover1.jpg",
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
  const step = 1 / (2 * totalCards);
  const isFirst = index === 0;
  const isLast = index === totalCards - 1;

  const entryStart = isFirst ? 0 : (2 * index - 1) * step;
  const entryEnd = isFirst ? step : 2 * index * step;
  const shrinkStart = isLast ? 1 : (2 * index + 1) * step;
  const shrinkEnd = isLast ? 1 : (2 * index + 2) * step;

  const cardY = useTransform(
    progress,
    isFirst
      ? [0, shrinkStart, shrinkEnd]
      : isLast
      ? [entryStart, entryEnd, shrinkStart]
      : [entryStart, entryEnd, shrinkStart, shrinkEnd],
    isFirst ? [0, 0, -40] : isLast ? [50, 0, 0] : [50, 0, 0, -40]
  );

  const cardScale = useTransform(
    progress,
    isFirst
      ? [0, shrinkStart, shrinkEnd]
      : isLast
      ? [entryStart, entryEnd, shrinkStart]
      : [entryStart, entryEnd, shrinkStart, shrinkEnd],
    isFirst ? [1, 1, 0.88] : isLast ? [0.92, 1, 1] : [0.92, 1, 1, 0.88]
  );

  const opacityEntryEnd = entryStart + (entryEnd - entryStart) * 0.5;
  const cardOpacity = useTransform(
    progress,
    isFirst
      ? [0, shrinkStart, shrinkEnd]
      : isLast
      ? [entryStart, opacityEntryEnd, entryEnd, shrinkStart]
      : [entryStart, opacityEntryEnd, entryEnd, shrinkStart, shrinkEnd],
    isFirst ? [1, 1, 0.15] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 1, 0.15]
  );

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
      <div className="w-full max-w-[800px] mx-auto relative">
        <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-[#E6EEF2]/60 shadow-[0_8px_40px_-12px_rgba(44,77,120,0.12)] overflow-hidden relative group hover:shadow-[0_12px_48px_-8px_rgba(44,77,120,0.16)] transition-shadow duration-500 flex flex-col max-h-[90dvh]">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#98D7C2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

          <motion.div
            className="absolute inset-0 z-10 rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#F8FAFB]/80 via-[#F8FAFB]/40 to-[#F8FAFB]/90 pointer-events-none"
            style={{ opacity: springOverlay }}
          />

          {/* Cover image — squarish 4:3 aspect, viewport-capped, rounded top corners */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] max-h-[48vh] sm:max-h-[52vh] md:max-h-[56vh] overflow-hidden rounded-t-[24px] sm:rounded-t-[28px] bg-[#F8FAFB] shrink-0">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={index === 0}
            />
            {/* Subtle bottom gradient for smooth transition into content */}
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
          </div>

          {/* Content — compact and responsive */}
          <div className="p-4 sm:p-5 md:p-6 lg:p-7 shrink-0">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#2C4D78]/8 text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#2C4D78] tracking-wide">
                {blog.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
              <span className="text-[10px] sm:text-[11px] md:text-[12px] text-[#8A9BB0] font-medium">
                {blog.readTime}
              </span>
            </div>

            <h3 className="text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-[#1a2942] leading-[1.3] mb-1.5 sm:mb-2 group-hover:text-[#2C4D78] transition-colors duration-300">
              {blog.title}
            </h3>

            <p className="text-xs sm:text-[13px] md:text-[14px] text-[#5A6B82] leading-[1.6] sm:leading-[1.65] mb-3 sm:mb-4 md:mb-5 line-clamp-2">
              {blog.description}
            </p>

            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#E6EEF2]/40">
              <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] md:text-[12px] text-[#8A9BB0]">
                <div className="flex items-center gap-1">
                  <User className="w-2.5 h-2.5 sm:w-3 sm:h-3" strokeWidth={2} />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
                <div className="flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" strokeWidth={2} />
                  <span>{blog.date}</span>
                </div>
              </div>

              <Link
                href={`/blog/unlocking-undruggable-aim2-inflammasome`}
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[13px] font-semibold group/link"
              >
                <span className="text-[#2C4D78] group-hover/link:text-[#1a2942] transition-colors">
                  Read Article
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E6EEF2] group-hover/link:bg-[#2C4D78] flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-0.5">
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2C4D78] group-hover/link:text-white transition-colors" />
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
    <section id="blog" className="relative bg-[#F8FAFB]">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-7 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">
              Blog
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1a2942] tracking-tight leading-[1.15] mb-4">
            Latest Insights & Research
          </h2>

          <p className="text-[15px] sm:text-base lg:text-[17px] text-[#5A6B82] leading-[1.7]">
            Stay updated with breakthroughs in AI-powered healthcare, research, product updates, and medical innovation.
          </p>
        </motion.div>
      </div>

      <div ref={spacerRef} className="relative">
        <div className="sticky top-0 h-[100dvh] flex items-center justify-center z-10 overflow-hidden p-4 sm:p-6 lg:p-8">
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

        <div style={{ height: "200vh" }} className="relative z-0" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.div
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[16px] bg-gradient-to-r from-[#2C4D78] to-[#3D5F8A] text-white font-semibold text-[14px] sm:text-[15px] shadow-lg shadow-[#2C4D78]/20 hover:shadow-xl hover:shadow-[#2C4D78]/30 transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              <span className="relative">Read More Articles</span>
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
