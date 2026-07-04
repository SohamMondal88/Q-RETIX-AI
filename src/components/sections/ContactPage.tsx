"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Check,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";

const socialLinks = [
  { platform: "linkedin" as const, label: "LinkedIn", href: "https://www.linkedin.com/company/pharmaa-ai/" },
  { platform: "instagram" as const, label: "Instagram", href: "https://www.instagram.com/qretix_ai_official/" },
  { platform: "x" as const, label: "X", href: "https://x.com/QRETIXAIorg" },
  { platform: "facebook" as const, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590886726981" },
  { platform: "substack" as const, label: "Substack", href: "https://substack.com/@qretixai" },
  { platform: "medium" as const, label: "Medium", href: "https://medium.com/@qretix.ai2405" },
  { platform: "reddit" as const, label: "Reddit", href: "https://www.reddit.com/user/Q-RETIX_AI_official/" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay },
  };
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-[80px] sm:pt-[96px]">
      <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-5 sm:top-20 sm:right-10 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#98D7C2]/10 rounded-full blur-[100px] sm:blur-[150px]" />
          <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#A8DADC]/10 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-xs sm:text-sm font-medium text-[#2C4D78] mb-4 sm:mb-6">
                <FlaskConical className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Contact
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C4D78] tracking-tight mb-4 sm:mb-6 leading-[1.05]"
            >
              Let&apos;s talk
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-sm sm:text-base md:text-lg text-[#5A6B82] leading-relaxed max-w-2xl"
            >
              Whether you are a researcher exploring AI tools, a pharmaceutical partner seeking collaboration, or a journalist covering the future of drug discovery — we are here.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#F5F9FB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <motion.div {...fadeUp(0)}>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C4D78] mb-6 sm:mb-8 tracking-tight">
                  Get in touch
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#D0E0E8] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C4D78]" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-[#33415C]">Email</p>
                      <a href="mailto:hello@qretix.ai" className="text-xs sm:text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                        hello@qretix.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#D0E0E8] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C4D78]" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-[#33415C]">Phone</p>
                      <a href="tel:+14155551234" className="text-xs sm:text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                        +1 (415) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#D0E0E8] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C4D78]" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-[#33415C]">Office</p>
                      <p className="text-xs sm:text-sm text-[#5A6B82]">
                        350 Mission Street, Suite 200
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.15)}>
                <h4 className="text-xs sm:text-sm font-semibold text-[#33415C] uppercase tracking-wider mb-3 sm:mb-4">
                  Follow us
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-[#D0E0E8] text-xs sm:text-sm text-[#5A6B82] hover:text-[#2C4D78] hover:border-[#2C4D78] transition-all"
                    >
                      <SocialIcon platform={s.platform} size={14} className="text-[#5A6B82]" />
                      <span className="hidden sm:inline">{s.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp(0.1)}
              className="bg-white rounded-2xl border border-[#D0E0E8] p-5 sm:p-6 md:p-8 shadow-lg shadow-[#2C4D78]/3"
            >
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#33415C] mb-1.5 sm:mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full h-10 sm:h-11 rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-3 sm:px-4 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#33415C] mb-1.5 sm:mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full h-10 sm:h-11 rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-3 sm:px-4 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#33415C] mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full h-10 sm:h-11 rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-3 sm:px-4 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all"
                      placeholder="name@organization.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#33415C] mb-1.5 sm:mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 sm:h-11 rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-3 sm:px-4 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all"
                      placeholder="Organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#33415C] mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all resize-none"
                      placeholder="How can we help you? (e.g., collaboration, platform inquiry, media)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-brand text-white hover:opacity-90 transition-all hover:scale-[1.02] hover:shadow-xl font-semibold h-11 sm:h-12 rounded-xl inline-flex items-center justify-center gap-2 text-sm sm:text-[15px]"
                  >
                    Send message
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 sm:py-12 text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#98D7C2]/20 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <Check className="w-6 h-6 sm:w-8 sm:h-8 text-[#98D7C2]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2C4D78] mb-2">Message sent</h3>
                  <p className="text-sm sm:text-base text-[#5A6B82]">
                    We will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
