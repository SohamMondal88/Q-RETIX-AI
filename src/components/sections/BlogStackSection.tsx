"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Q-RETIX.AI: Unlocking the \"Undruggable\" AIM2 Inflammasome",
    description:
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target.",
    category: "Research",
    readTime: "15 min read",
    date: "July 4, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-1.jpg",
    slug: "unlocking-undruggable-aim2-inflammasome",
    featured: true,
  },
  {
    id: 2,
    title: "Structural AI Discovery Matrix: Beyond Static Crystallography",
    description:
      "Why dynamic thermodynamic ensembles are the future of target identification and cryptic pocket discovery.",
    category: "AI Research",
    readTime: "12 min read",
    date: "June 28, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-2.jpg",
    slug: null,
    featured: false,
  },
  {
    id: 3,
    title: "Allosteric Modulation: The Next Frontier in Immunology",
    description:
      "Exploring how allosteric molecular wedges are reshaping autoimmune drug design and inflammasome inhibition.",
    category: "Drug Discovery",
    readTime: "10 min read",
    date: "June 20, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-3.jpg",
    slug: null,
    featured: false,
  },
  {
    id: 4,
    title: "From Charge Trap to Cure: The AIM2 Therapeutic Pipeline",
    description:
      "Mapping the multi-billion dollar market opportunity in SLE, psoriasis, and neurodegenerative disease.",
    category: "Market Analysis",
    readTime: "8 min read",
    date: "June 15, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-4.jpg",
    slug: null,
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

function BlogCard({ blog, index }: { blog: (typeof blogs)[0]; index: number }) {
  const href = blog.slug ? `/blog/${blog.slug}` : "/blog";

  return (
    <motion.div variants={cardVariants}>
      <Link href={href}>
        <div
          className="group relative bg-white rounded-[20px] sm:rounded-[24px] border border-[#E6EEF2]/80 overflow-hidden 
          hover:shadow-[0_20px_60px_-12px_rgba(44,77,120,0.14)] hover:border-[#A8DADC]/50 
          transition-all duration-500 cursor-pointer h-full flex flex-col"
        >
          {/* Top gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#98D7C2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

          {/* Image Container — perfectly responsive */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F8FAFB] shrink-0">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={index < 2}
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2942]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Category badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <div className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/30 text-[10px] sm:text-[11px] font-bold text-[#2C4D78] tracking-wide shadow-sm">
                {blog.category}
              </div>
            </div>

            {/* Read time badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
              <div className="flex items-center gap-1 px-2 py-1 sm:px-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white/30 text-[10px] sm:text-[11px] font-medium text-[#5A6B82] shadow-sm">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {blog.readTime}
              </div>
            </div>

            {/* Featured indicator */}
            {blog.featured && (
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <div className="px-2.5 py-1 rounded-full bg-[#2C4D78] text-[10px] sm:text-[11px] font-bold text-white tracking-wide shadow-md">
                  Featured
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 flex flex-col flex-1">
            <h3 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#1a2942] leading-[1.35] mb-1.5 sm:mb-2 group-hover:text-[#2C4D78] transition-colors duration-300 line-clamp-2">
              {blog.title}
            </h3>

            <p className="text-xs sm:text-[13px] text-[#5A6B82] leading-[1.65] mb-3 sm:mb-4 line-clamp-2 flex-1">
              {blog.description}
            </p>

            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#E6EEF2]/60">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#8A9BB0]">
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

              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E6EEF2] flex items-center justify-center group-hover:bg-[#2C4D78] transition-all duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2C4D78] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogStackSection() {
  return (
    <section id="blog" className="relative bg-[#F8FAFB]">
      {/* Background pattern */}
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
            Latest Insights &amp; Research
          </h2>

          <p className="text-[15px] sm:text-base lg:text-[17px] text-[#5A6B82] leading-[1.7]">
            Stay updated with breakthroughs in AI-powered healthcare, structural drug discovery, and immunology research.
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-28">
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

              <span className="relative">Read All Articles</span>
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
