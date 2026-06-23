"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
} from "lucide-react";
import Link from "next/link";
import WaitlistCommunitySection from "./WaitlistCommunitySection";

const categories = [
  "Research",
  "Drug Discovery",
  "Artificial Intelligence",
  "Clinical Trials",
  "Healthcare Innovation",
  "Pharmaceutical Industry",
];

const featuredPost = {
  slug: "future-of-ai-pharmaceutical-research",
  title: "The Future of AI in Pharmaceutical Research",
  excerpt:
    "How large language models and multimodal AI are transforming drug discovery pipelines, reducing time-to-market, and enabling precision medicine at scale.",
  category: "Artificial Intelligence",
  date: "June 15, 2026",
  readTime: "8 min read",
  author: "Dr. Sarah Chen",
};

const latestPosts = [
  {
    slug: "optimizing-clinical-trials-ml",
    title: "Optimizing Clinical Trials with Machine Learning",
    excerpt: "Machine learning approaches to patient stratification, adaptive trial design, and real-world evidence integration.",
    category: "Clinical Trials",
    date: "June 12, 2026",
    readTime: "6 min read",
    author: "Dr. James Wilson",
  },
  {
    slug: "generative-ai-molecule-design",
    title: "Generative AI for Molecule Design",
    excerpt: "Exploring how generative models like diffusion models and transformers are revolutionizing de novo drug design.",
    category: "Drug Discovery",
    date: "June 8, 2026",
    readTime: "10 min read",
    author: "Dr. Maria Rodriguez",
  },
  {
    slug: "real-world-evidence-2026",
    title: "Real-World Evidence in 2026: A Regulatory Perspective",
    excerpt: "An overview of how regulatory agencies are embracing real-world data and AI-driven evidence generation.",
    category: "Research",
    date: "June 5, 2026",
    readTime: "7 min read",
    author: "Dr. Alan Park",
  },
  {
    slug: "precision-medicine-breakthroughs",
    title: "Precision Medicine Breakthroughs Powered by AI",
    excerpt: "From genomic biomarkers to personalized dosing algorithms, AI is enabling truly individualized therapies.",
    category: "Healthcare Innovation",
    date: "June 1, 2026",
    readTime: "9 min read",
    author: "Dr. Lisa Thompson",
  },
  {
    slug: "pharma-supply-chain-ai",
    title: "Pharma Supply Chain Resilience with AI",
    excerpt: "Predictive analytics and digital twins are helping pharmaceutical companies build resilient supply chains.",
    category: "Pharmaceutical Industry",
    date: "May 28, 2026",
    readTime: "5 min read",
    author: "Dr. Robert Kim",
  },
  {
    slug: "ai-regulatory-compliance",
    title: "Navigating AI Regulatory Compliance in Pharma",
    excerpt: "Key considerations for ensuring AI systems meet FDA, EMA, and global regulatory standards.",
    category: "Research",
    date: "May 25, 2026",
    readTime: "11 min read",
    author: "Dr. Emily Foster",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-[96px]">
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#98D7C2]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-[#A8DADC]/10 rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78] mb-6">
              Q-RETIX Research & Insights
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C4D78] mb-4 tracking-tight">
              Blog
            </h1>
            <p className="text-lg text-[#5A6B82] max-w-2xl mx-auto">
              Latest research, pharmaceutical innovation, AI breakthroughs, and industry intelligence.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[#D0E0E8] bg-white text-[#5A6B82] hover:border-[#2C4D78] hover:text-[#2C4D78] transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-white rounded-2xl border border-[#D0E0E8] overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-[#2C4D78]/10 via-[#A8DADC]/10 to-[#98D7C2]/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        {[...Array(6)].map((_, i) => (
                          <g key={i}>
                            <circle cx={80 + i * 60} cy={150 + Math.sin(i) * 40} r="8" fill="#2C4D78" opacity="0.3">
                              <animate attributeName="cy" values={`${150 + Math.sin(i) * 40};${150 + Math.sin(i + 1) * 40};${150 + Math.sin(i) * 40}`} dur="4s" repeatCount="indefinite" />
                            </circle>
                            <line x1={80 + i * 60} y1={150 + Math.sin(i) * 40} x2={i < 5 ? 80 + (i + 1) * 60 : 80 + i * 60} y2={150 + Math.sin(i + 1) * 40} stroke="#D0E0E8" strokeWidth="2">
                              <animate attributeName="y1" values={`${150 + Math.sin(i) * 40};${150 + Math.sin(i + 1) * 40};${150 + Math.sin(i) * 40}`} dur="4s" repeatCount="indefinite" />
                              <animate attributeName="y2" values={`${150 + Math.sin(i + 1) * 40};${150 + Math.sin(i + 2) * 40};${150 + Math.sin(i + 1) * 40}`} dur="4s" repeatCount="indefinite" />
                            </line>
                          </g>
                        ))}
                      </svg>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur border border-[#D0E0E8] flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🧬</span>
                      </div>
                      <p className="text-sm font-medium text-[#2C4D78]">Featured Article</p>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6EEF2] text-xs font-medium text-[#2C4D78] w-fit mb-4">
                      {featuredPost.category}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#33415C] mb-4 group-hover:text-[#2C4D78] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#5A6B82] mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#8A9BB0]">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-[#33415C] mb-6">Latest Articles</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {latestPosts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-2xl border border-[#D0E0E8] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-[#E6EEF2] to-[#D0E0E8]/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 200 150" className="w-full h-full">
                        {[...Array(4)].map((_, i) => (
                          <g key={i}>
                            <circle cx={40 + i * 40} cy={75} r="6" fill="#2C4D78">
                              <animate attributeName="cy" values="75;65;75" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                            </circle>
                            <line x1={40 + i * 40} y1="75" x2={i < 3 ? 40 + (i + 1) * 40 : 40 + i * 40} y2="75" stroke="#D0E0E8" strokeWidth="2">
                              <animate attributeName="y1" values="75;65;75" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                              <animate attributeName="y2" values="75;65;75" dur="3s" repeatCount="indefinite" begin={`${(i + 1) * 0.3}s`} />
                            </line>
                          </g>
                        ))}
                      </svg>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur border border-[#D0E0E8] flex items-center justify-center mx-auto">
                        <span className="text-2xl">🔬</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6EEF2] text-xs font-medium text-[#2C4D78] mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-lg font-semibold text-[#33415C] mb-2 group-hover:text-[#2C4D78] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#5A6B82] mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-[#8A9BB0]">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-[#2C4D78] group-hover:gap-2 transition-all">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WaitlistCommunitySection />
    </div>
  );
}
