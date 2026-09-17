"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Q-RETIX",
    isBrand: true,
    links: [
      { label: "About", href: "/about" },
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Legal Center", href: "/legal" },
      { label: "Terms & Conditions", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Data Rights", href: "/legal/data-rights" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Pipeline", href: "/delivery" },
      { label: "Documentation", href: "/docs" },
    ],
  },
];

const socialIcons = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/qretix-ai/",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/qretix_ai_official/",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/QRETIXAIorg",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590886726981",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/Q-RETIX_AI_official/",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 00-.14-.02.352.352 0 00-.238.112L14.73 6.52a2.373 2.373 0 00-.592-.17 2.61 2.61 0 00-2.147.995l-.022.033c-.42.609-.68 1.367-.68 2.184 0 1.478.857 2.597 2.073 2.597.822 0 1.55-.52 1.78-1.265.106-.42.47-.753.913-.753a.96.96 0 01.96.96c0 .564-.49 1.032-1.08 1.032-.564 0-1.032-.49-1.032-1.08 0-.564.49-1.032 1.08-1.032.54 0 .988.404 1.032.93.035-.035.07-.07.105-.105a.96.96 0 00.228-.614c0-.53-.435-.96-.96-.96-.564 0-1.032.49-1.032 1.08 0 .564.49 1.032 1.08 1.032.54 0 .988-.404 1.032-.93z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@qretix.ai2405",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    label: "Substack",
    href: "https://substack.com/@qretixai",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.929 7.14h-7.654v2.105h7.654V7.14zm-7.654 3.15h7.654v2.105h-7.654v-2.104zm-1.312 2.104H2.071V9.246h9.892V8.19H2.071V6.085h9.892V5.028H2.071v14.895L6.517 17l4.446 2.923V14.393h5.502v-2.104V9.246V8.19h-7.654v2.104z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Join the Q-RETIX community");
    const body = encodeURIComponent(
      `Please add ${email} to the Q-RETIX community updates list.`
    );
    window.location.href = `mailto:contact@qretix.ai?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="site-footer" className="relative overflow-hidden rounded-t-[32px] sm:rounded-t-[44px] border-t border-[#D0E0E8] bg-[#F3F7FA] text-[#33415C]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#98D7C2] to-transparent" />
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-[1.05fr_1.1fr_0.85fr_1.25fr] lg:gap-16">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className={`mb-6 text-[#1A2942] ${
                  group.isBrand
                    ? "text-[24px] font-extrabold leading-tight tracking-[-0.04em] sm:text-[28px]"
                    : "text-[15px] font-bold tracking-[-0.02em] sm:text-base"
                }`}
              >
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-1 text-[14px] text-[#5A6B82] transition-colors hover:text-[#2C4D78] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40 sm:text-[15px]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 translate-y-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:translate-y-0 group-hover/link:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="mb-3 text-[15px] font-bold tracking-[-0.02em] text-[#1A2942] sm:text-base">
              Join us
            </h4>
            <p className="mb-5 max-w-sm text-sm leading-6 text-[#5A6B82]">
              Receive new research, platform updates, and community news.
            </p>
            <form onSubmit={handleJoin} className="group relative max-w-md">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A6B82]" />
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email..."
                className="h-14 w-full rounded-2xl border border-[#D0E0E8] bg-white/80 pl-11 pr-14 text-sm text-[#33415C] shadow-sm outline-none transition-all placeholder:text-[#718096] focus:border-[#2C4D78] focus:ring-4 focus:ring-[#2C4D78]/10"
              />
              <button
                type="submit"
                aria-label="Join Q-RETIX community updates"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-[#2C4D78] text-white shadow-md transition-all hover:-translate-y-[55%] hover:bg-[#1A3A5C] hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78] focus-visible:ring-offset-2"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-7 border-t border-[#D0E0E8] pt-7 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex flex-wrap items-center gap-2.5">
              {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D0E0E8] bg-white text-[#33415C] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2C4D78] hover:bg-[#2C4D78] hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50"
                  >
                  {social.svg}
                </a>
              ))}
            </div>
            <nav aria-label="Footer legal links" className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/legal/privacy" className="text-xs text-[#5A6B82] transition-colors hover:text-[#2C4D78] sm:text-sm">Privacy Policy</Link>
              <Link href="/legal/terms" className="text-xs text-[#5A6B82] transition-colors hover:text-[#2C4D78] sm:text-sm">Terms &amp; Conditions</Link>
              <Link href="/legal/cookies" className="text-xs text-[#5A6B82] transition-colors hover:text-[#2C4D78] sm:text-sm">Cookies</Link>
              <Link href="/legal/disclaimer" className="text-xs text-[#5A6B82] transition-colors hover:text-[#2C4D78] sm:text-sm">Research Disclaimer</Link>
            </nav>
          </div>

          <p className="text-xs text-[#5A6B82] sm:text-right sm:text-sm">
            © 2026 Q-RETIX AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
