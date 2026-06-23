"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FlaskConical,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Research Hub", href: "#research" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
      >
        <div
          className={`mx-auto max-w-[1280px] rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-2xl border-[#D0E0E8] shadow-lg shadow-[#2C4D78]/5"
              : "bg-white/60 backdrop-blur-xl border-[#D0E0E8]/60"
          }`}
        >
          <div className="flex h-[60px] items-center justify-between px-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <FlaskConical className="w-4 h-4 text-white" />
              </div>
              <span className="text-[15px] font-bold text-[#2C4D78] tracking-tight">
                Q-RETIX AI
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 text-[13px] font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors rounded-lg hover:bg-[#E6EEF2]/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#waitlist"
                className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#2C4D78]/20 font-semibold px-5 inline-flex items-center gap-1.5 h-9 rounded-xl text-[13px]"
              >
                Book Demo
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#E6EEF2]/50 text-[#33415C]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[84px] left-4 right-4 z-40 bg-white/95 backdrop-blur-xl border border-[#D0E0E8] rounded-2xl lg:hidden overflow-hidden shadow-xl shadow-[#2C4D78]/5"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-[#5A6B82] hover:text-[#2C4D78] hover:bg-[#E6EEF2]/50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="gradient-brand text-white mt-2 font-semibold inline-flex items-center justify-center gap-2 h-10 rounded-xl text-sm px-4 py-2"
              >
                Book Demo
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
