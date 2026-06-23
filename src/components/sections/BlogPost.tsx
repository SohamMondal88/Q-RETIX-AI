"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Link as LinkIcon,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import WaitlistCommunitySection from "./WaitlistCommunitySection";

const post = {
  title: "The Future of AI in Pharmaceutical Research",
  excerpt:
    "How large language models and multimodal AI are transforming drug discovery pipelines, reducing time-to-market, and enabling precision medicine at scale.",
  category: "Artificial Intelligence",
  date: "June 15, 2026",
  readTime: "8 min read",
  author: "Dr. Sarah Chen",
  authorRole: "Chief Research Officer, Q-RETIX AI",
};

const tableOfContents = [
  "Introduction",
  "The AI Revolution in Drug Discovery",
  "Multimodal Models for Molecule Design",
  "Real-World Evidence Integration",
  "Regulatory and Ethical Considerations",
  "Looking Ahead: 2026 and Beyond",
  "Conclusion",
];

const relatedPosts = [
  {
    slug: "optimizing-clinical-trials-ml",
    title: "Optimizing Clinical Trials with Machine Learning",
    category: "Clinical Trials",
    readTime: "6 min",
  },
  {
    slug: "generative-ai-molecule-design",
    title: "Generative AI for Molecule Design",
    category: "Drug Discovery",
    readTime: "10 min",
  },
  {
    slug: "precision-medicine-breakthroughs",
    title: "Precision Medicine Breakthroughs Powered by AI",
    category: "Healthcare Innovation",
    readTime: "9 min",
  },
];

export default function BlogPost() {
  return (
    <div className="pt-[96px]">
      <section className="relative py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6EEF2] text-sm font-medium text-[#2C4D78] mb-4">
                {post.category}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C4D78] mb-6 tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#8A9BB0] mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E6EEF2] flex items-center justify-center">
                    <User className="w-4 h-4 text-[#2C4D78]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#33415C]">{post.author}</p>
                    <p className="text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-80 bg-gradient-to-br from-[#2C4D78]/10 via-[#A8DADC]/10 to-[#98D7C2]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            {[...Array(10)].map((_, i) => (
              <g key={i}>
                <circle cx={80 + i * 70} cy={200 + Math.sin(i) * 60} r="10" fill="#2C4D78">
                  <animate attributeName="cy" values={`${200 + Math.sin(i) * 60};${200 + Math.sin(i + 1) * 60};${200 + Math.sin(i) * 60}`} dur="4s" repeatCount="indefinite" />
                </circle>
                {i < 9 && (
                  <line x1={80 + i * 70} y1={200 + Math.sin(i) * 60} x2={80 + (i + 1) * 70} y2={200 + Math.sin(i + 1) * 60} stroke="#D0E0E8" strokeWidth="2">
                    <animate attributeName="y1" values={`${200 + Math.sin(i) * 60};${200 + Math.sin(i + 1) * 60};${200 + Math.sin(i) * 60}`} dur="4s" repeatCount="indefinite" />
                    <animate attributeName="y2" values={`${200 + Math.sin(i + 1) * 60};${200 + Math.sin(i + 2) * 60};${200 + Math.sin(i + 1) * 60}`} dur="4s" repeatCount="indefinite" />
                  </line>
                )}
              </g>
            ))}
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur border border-[#D0E0E8] flex items-center justify-center">
            <span className="text-4xl">🧬</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 max-w-5xl mx-auto">
            <div>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-lg text-[#5A6B82] leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <h2 id="introduction" className="text-2xl font-bold text-[#33415C] mt-12 mb-4">
                  Introduction
                </h2>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  The pharmaceutical industry stands at the precipice of a transformation. Artificial intelligence — particularly large language models and multimodal systems — is reshaping how we discover, develop, and deliver medicines. At Q-RETIX AI, we are building the infrastructure that will power this next era of pharmaceutical innovation.
                </p>

                <h2 id="the-ai-revolution" className="text-2xl font-bold text-[#33415C] mt-12 mb-4">
                  The AI Revolution in Drug Discovery
                </h2>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  Traditional drug discovery is a lengthy and expensive process, often taking over a decade and billions of dollars to bring a single drug to market. AI is changing this paradigm by accelerating target identification, optimizing compound design, and predicting clinical outcomes with unprecedented accuracy.
                </p>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  Machine learning models trained on vast molecular datasets can now predict binding affinities, toxicity profiles, and pharmacokinetic properties in silico — dramatically reducing the need for early-stage wet lab experiments.
                </p>

                <h2 id="multimodal-models" className="text-2xl font-bold text-[#33415C] mt-12 mb-4">
                  Multimodal Models for Molecule Design
                </h2>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  The latest generation of AI models can simultaneously process chemical structures, genomic sequences, clinical text, and imaging data. This multimodal capability enables a holistic understanding of drug behavior across biological contexts.
                </p>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  Diffusion models and transformers trained on molecular graphs are generating novel chemical scaffolds that human chemists might never conceive — opening new avenues for treating previously undruggable targets.
                </p>

                <h2 id="real-world-evidence" className="text-2xl font-bold text-[#33415C] mt-12 mb-4">
                  Real-World Evidence Integration
                </h2>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  Beyond the lab, AI is unlocking value from real-world data — electronic health records, insurance claims, wearable device outputs, and patient registries. NLP pipelines extract structured insights from unstructured clinical narratives, enabling post-market surveillance and indication expansion.
                </p>

                <h2 id="regulatory" className="text-2xl font-bold text-[#33415C] mt-12 mb-4">
                  Regulatory and Ethical Considerations
                </h2>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  As AI becomes more deeply embedded in pharmaceutical decision making, regulators worldwide are developing frameworks for algorithmic accountability. The FDA's AI/ML-based Software as a Medical Device action plan, and the EMA's draft guidance on AI in drug development, signal a maturing approach to oversight.
                </p>

                <h2 id="looking-ahead" className="text-2xl font-bold text-[#33415C] mt-12 mb-4">
                  Looking Ahead: 2026 and Beyond
                </h2>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  We envision a future where AI agents autonomously design clinical trials, monitor patient safety in real time, and personalize dosing regimens based on individual genomic and proteomic profiles. The convergence of AI, robotics, and synthetic biology will compress the drug development timeline from years to months.
                </p>

                <h2 id="conclusion" className="text-2xl font-bold text-[#33415C] mt-12 mb-4">
                  Conclusion
                </h2>
                <p className="text-[#5A6B82] leading-relaxed mb-6">
                  The future of pharmaceutical research is inextricably linked to the future of AI. Organizations that invest in robust AI infrastructure, high-quality data pipelines, and interdisciplinary talent today will be the leaders of tomorrow. Q-RETIX AI is committed to accelerating this transition for researchers and clinicians worldwide.
                </p>
              </motion.article>

              <div className="mt-12 pt-8 border-t border-[#D0E0E8]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#5A6B82]">Share:</span>
                    <div className="flex gap-2">
                      {[
                        { icon: Share2, label: "Share" },
                        { icon: LinkIcon, label: "Copy Link" },
                      ].map((social) => (
                        <button
                          key={social.label}
                          aria-label={social.label}
                          className="w-9 h-9 rounded-lg bg-[#E6EEF2] flex items-center justify-center text-[#5A6B82] hover:text-[#2C4D78] hover:bg-[#D0E0E8] transition-colors"
                        >
                          <social.icon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border border-[#D0E0E8] p-6">
                  <h4 className="text-sm font-semibold text-[#33415C] mb-4">Table of Contents</h4>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors py-1"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-white rounded-2xl border border-[#D0E0E8] p-6">
                  <h4 className="text-sm font-semibold text-[#33415C] mb-4">Related Posts</h4>
                  <div className="space-y-4">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="group block"
                      >
                        <div className="text-xs font-medium text-[#2C4D78] mb-1">
                          {rp.category}
                        </div>
                        <div className="text-sm font-medium text-[#33415C] group-hover:text-[#2C4D78] transition-colors mb-1">
                          {rp.title}
                        </div>
                        <div className="text-xs text-[#8A9BB0]">{rp.readTime} read</div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2C4D78] to-[#3D5F8A] rounded-2xl p-6 text-white">
                  <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
                  <p className="text-sm text-white/70 mb-4">
                    Get the latest research insights delivered to your inbox.
                  </p>
                  <Link
                    href="/blog"
                    className="w-full bg-white text-[#2C4D78] hover:bg-white/90 font-semibold inline-flex items-center justify-center gap-2 h-10 rounded-lg text-sm px-4 py-2"
                  >
                    Subscribe
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistCommunitySection />
    </div>
  );
}
