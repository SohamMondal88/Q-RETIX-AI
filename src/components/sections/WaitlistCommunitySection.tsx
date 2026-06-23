"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Check,
  ArrowRight,
  Zap,
  FileText,
  Bell,
  Users,
  Globe,
  MessageCircle,
  Sparkles,
  BookOpen,
  Mail,
  Lock,
} from "lucide-react";

const benefits = [
  { icon: Zap, text: "Early Access" },
  { icon: FileText, text: "Exclusive Research Insights" },
  { icon: Bell, text: "Priority Product Updates" },
  { icon: Users, text: "Community Access" },
  { icon: Sparkles, text: "Beta Invitations" },
  { icon: BookOpen, text: "Early Blog Releases" },
  { icon: Mail, text: "Industry Reports" },
];

const stats = [
  { icon: Users, title: "Researchers", count: "2,500+", desc: "Active researchers" },
  { icon: Globe, title: "Global Network", count: "40+", desc: "Countries" },
  { icon: MessageCircle, title: "Discussions", count: "Daily", desc: "Active support" },
];

export default function WaitlistCommunitySection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-28 bg-white overflow-hidden">
      {/* Soft ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#98D7C2]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#A8DADC]/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78] mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Early Access
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] mb-4 tracking-tight">
            Join The Q-RETIX AI Community
          </h2>
          <p className="text-lg text-[#5A6B82] leading-relaxed">
            Get early access to pharmaceutical intelligence tools and connect with
            researchers, scientists, and healthcare innovators worldwide.
          </p>
        </motion.div>

        {/* 2-column layout: form + community stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-[#D0E0E8] p-8 shadow-xl shadow-[#2C4D78]/5"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#33415C] mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="you@institution.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 border-[#D0E0E8] focus:border-[#2C4D78] focus:ring-[#2C4D78]/20 bg-[#F8FAFB]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#33415C] mb-2">
                      Full Name (Optional)
                    </label>
                    <Input
                      type="text"
                      placeholder="Dr. Jane Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 border-[#D0E0E8] focus:border-[#2C4D78] focus:ring-[#2C4D78]/20 bg-[#F8FAFB]"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl font-semibold px-8 py-3 text-base rounded-xl inline-flex items-center justify-center gap-2 h-12"
                  >
                    Join Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    className="flex-1 border border-[#D0E0E8] text-[#33415C] hover:bg-[#E6EEF2] font-semibold px-8 py-3 text-base rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2 h-12 bg-white"
                  >
                    <Users className="w-5 h-5" />
                    Join Community
                  </button>
                </div>

                <p className="text-xs text-[#8A9BB0] mt-4 text-center flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border border-[#98D7C2]/30 p-8 text-center shadow-xl shadow-[#98D7C2]/10"
              >
                <div className="w-16 h-16 rounded-full bg-[#98D7C2]/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[#98D7C2]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C4D78] mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-[#5A6B82]">
                  We&apos;ll notify you as soon as early access is available. Watch your inbox for updates.
                </p>
              </motion.div>
            )}

            {/* Benefits grid under form */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-2.5 bg-white rounded-xl border border-[#D0E0E8]/70 px-3 py-2.5 hover:shadow-sm transition-shadow"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#E6EEF2] flex items-center justify-center shrink-0">
                    <benefit.icon className="w-3.5 h-3.5 text-[#2C4D78]" />
                  </div>
                  <span className="text-xs font-medium text-[#33415C]">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Community stats + short description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-8 text-white shadow-xl shadow-[#2C4D78]/15 relative overflow-hidden">
              {/* subtle light orb inside card */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Why join?</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Connect with pharmaceutical researchers, scientists, healthcare professionals, and AI innovators shaping the future of drug discovery and clinical research.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-2">
                        <stat.icon className="w-5 h-5 text-[#98D7C2]" />
                      </div>
                      <div className="text-lg font-bold">{stat.count}</div>
                      <div className="text-xs text-white/60 mt-0.5">{stat.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#D0E0E8] p-6 shadow-sm">
              <h4 className="text-sm font-semibold text-[#33415C] mb-3">
                Newsletter Perks
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Research Articles & Whitepapers",
                  "AI & Machine Learning Insights",
                  "Industry & Regulatory Reports",
                  "Clinical Research Updates",
                  "Drug Discovery Breakthroughs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#5A6B82]">
                    <div className="w-5 h-5 rounded-full bg-[#98D7C2]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#98D7C2]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
