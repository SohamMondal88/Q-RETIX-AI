"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWaitlist = () => {
    if (pathname === "/") {
      const el = document.getElementById("waitlist");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#waitlist");
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5"
      >
        <div
          className={`mx-auto max-w-[1100px] rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-white/70 backdrop-blur-2xl border-white/50 shadow-lg shadow-blue-900/5"
              : "bg-white/40 backdrop-blur-xl border-white/40"
          }`}
        >
          <div className="flex h-[52px] sm:h-[56px] items-center justify-between px-6 sm:px-8">
            <Link
              href="/"
              className="text-[13px] sm:text-[14px] font-bold text-[#2563EB] tracking-tight hover:opacity-80 transition-opacity"
            >
              Q-RETIX AI
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-medium text-[#4B5563] hover:text-[#111827] transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={handleWaitlist}
              className="hidden lg:block text-[11px] font-bold text-[#2563EB] hover:opacity-80 transition-opacity tracking-wide uppercase"
            >
              JOIN WAITLIST
            </button>

            <button
              className="lg:hidden p-2 rounded-full hover:bg-white/30 text-[#4B5563]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[76px] left-4 right-4 z-40 bg-white/90 backdrop-blur-2xl border border-white/50 rounded-2xl lg:hidden overflow-hidden shadow-xl shadow-blue-900/5"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[13px] font-medium text-[#4B5563] hover:text-[#111827] hover:bg-white/50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleWaitlist}
                className="mt-2 text-[13px] font-bold text-[#2563EB] px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-left"
              >
                JOIN WAITLIST
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
