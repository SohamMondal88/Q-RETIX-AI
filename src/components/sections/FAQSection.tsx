"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What if drug discovery could run itself?",
    answer:
      "Our vision is an autonomous drug discovery engine where AI continuously learns, designs, evaluates, optimizes, and improves therapeutic candidates with minimal human intervention, dramatically accelerating innovation.",
  },
  {
    question: "Why is your platform revolutionary?",
    answer:
      "Instead of connecting isolated AI tools, we've built an AI scientist that orchestrates every stage of pharmaceutical R&D, creating a seamless closed-loop system from biological target discovery to delivery optimization.",
  },
  {
    question: "Can your AI invent drugs that have never existed before?",
    answer:
      "Yes. Using generative chemistry, our platform explores vast regions of chemical space beyond existing databases, proposing novel molecular structures optimized for therapeutic potential.",
  },
  {
    question: "How does the platform become smarter over time?",
    answer:
      "Every simulation, prediction, and experimental outcome feeds back into the system, allowing the AI to continuously refine its scientific understanding and improve future drug designs.",
  },
  {
    question: "Is this just another large language model?",
    answer:
      "No. Large language models are only one component. Our platform combines multimodal AI, generative chemistry, molecular simulations, predictive biology, and optimization engines into a unified pharmaceutical intelligence system.",
  },
  {
    question: "Could this reduce the cost and time of bringing medicines to market?",
    answer:
      "That's our mission. By automating repetitive scientific workflows, prioritizing the highest-potential candidates, and reducing unnecessary experiments, we aim to help researchers develop better medicines faster. Laboratory testing, regulatory review, and clinical trials remain essential before any treatment reaches patients.",
  },
  {
    question: "What is the long-term vision?",
    answer:
      "To build the world's first autonomous pharmaceutical R&D operating system, where AI acts as a collaborative scientist capable of generating, validating, and optimizing therapeutic innovations at unprecedented speed and scale.",
  },
  {
    question: "What makes your technology difficult to replicate?",
    answer:
      "Our advantage comes from integrating generative AI, generative chemistry, predictive biology, formulation optimization, and autonomous decision-making into one continuously learning platform, rather than relying on isolated models or point solutions.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`bg-white rounded-2xl border transition-all duration-300 ${
        open
          ? "border-[#A8B5FF] shadow-[0_8px_30px_-10px_rgba(138,138,255,0.25)]"
          : "border-[#E2E8F0] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
      >
        <span className="text-[15px] sm:text-[16px] font-medium text-[#1a1a2e] leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            open ? "bg-[#4F46E5]" : "bg-[#F1F5F9]"
          }`}
        >
          <Plus
            className={`w-4 h-4 transition-colors ${open ? "text-white" : "text-[#4F46E5]"}`}
            strokeWidth={2.5}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="text-[15px] text-[#5A6B82] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-[#F8FAFF]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#E8E7FF]/60 via-[#F0F0FF]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4F46E5] text-white text-[13px] font-semibold mb-6 shadow-lg shadow-[#4F46E5]/20"
          >
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-white/70" />
              <span className="w-1 h-1 rounded-full bg-white/50" />
              FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a2e] tracking-tight leading-[1.15] mb-4"
          >
            Answers to{" "}
            <span className="italic font-serif">Your</span>{" "}
            Most{" "}
            <span className="italic font-serif">Common</span>{" "}
            Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] sm:text-[16px] text-[#5A6B82] leading-relaxed max-w-2xl mx-auto"
          >
            Everything you need to know about getting started, using the platform, and unlocking its full potential.
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
