"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import SocialIcon from "./SocialIcon";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "Solutions", href: "#solutions" },
      { label: "Research Hub", href: "#research" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Community", href: "/community" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "GDPR", href: "/legal/gdpr" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/pharmaa-ai/", icon: "linkedin" as const },
  { label: "Instagram", href: "https://www.instagram.com/qretix_ai_official/", icon: "instagram" as const },
  { label: "X", href: "https://x.com/QRETIXAIorg", icon: "x" as const },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590886726981", icon: "facebook" as const },
  { label: "Substack", href: "https://substack.com/@qretixai", icon: "substack" as const },
  { label: "Medium", href: "https://medium.com/@qretix.ai2405", icon: "medium" as const },
  { label: "Reddit", href: "https://www.reddit.com/user/Q-RETIX_AI_official/", icon: "reddit" as const },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1120] text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C4D78]/50 to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-lg shadow-[#2C4D78]/30">
                <FlaskConical className="w-4 h-4 text-white" />
              </div>
              <span className="text-[16px] font-bold text-white tracking-tight">
                Q-RETIX AI
              </span>
            </Link>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-6 max-w-sm">
              AI-Powered Pharmaceutical Intelligence for Research, Drug Discovery, and Clinical Analysis.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2 text-[13px] text-slate-400">
                <Mail className="w-3.5 h-3.5 text-[#98D7C2]" />
                hello@qretix.ai
              </div>
              <div className="flex items-center gap-2 text-[13px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#98D7C2]" />
                San Francisco, CA
              </div>
            </div>

            {/* Social links with real icons */}
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#98D7C2]/50 hover:bg-[#98D7C2]/10 transition-all"
                  title={social.label}
                >
                  <SocialIcon platform={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-semibold text-slate-200 uppercase tracking-[0.15em] mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[13px] text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-16 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Q-RETIX AI. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/legal/cookies" className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors">
              Cookies
            </Link>
            <Link href="/legal/gdpr" className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors">
              GDPR
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-white/5">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">SOC 2 Compliant</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">GDPR Ready</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">HIPAA Compatible</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">ISO 27001</span>
        </div>
      </div>
    </footer>
  );
}
