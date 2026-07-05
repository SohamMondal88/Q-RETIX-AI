"use client";

import React from "react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Conn",
    isBrand: true,
    links: [
      { label: "About", href: "/about" },
      { label: "Home", href: "/" },
      { label: "Blogs", href: "/blog" },
      { label: "Career", href: "/careers" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Terms \u0026 Conditions", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Pipeline", href: "/#research" },
    ],
  },
];

const bottomTextLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms \u0026 Conditions", href: "/legal/terms" },
  { label: "Support", href: "/contact" },
];

const socialIcons = [
  {
    label: "Twitter",
    href: "https://x.com/QRETIXAIorg",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590886726981",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/qretix_ai_official/",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/qretix",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFFBF5] text-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20 pt-20 pb-10">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className={`mb-8 ${
                  group.isBrand
                    ? "text-[32px] font-bold leading-tight text-[#1a1a1a]"
                    : "text-[15px] font-medium text-[#1a1a1a]"
                }`}
              >
                {group.title}
              </h4>
              <ul className="space-y-5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#1a1a1a] hover:opacity-70 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Join us column */}
          <div>
            <h4 className="text-[15px] font-medium text-[#1a1a1a] mb-8">
              Join us
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email....."
                className="w-full h-11 px-4 rounded-full bg-[#FFF8EB] border border-[#F0E6D3] text-[13px] text-[#1a1a1a] placeholder-[#9a8e7e] outline-none focus:border-[#d4c9b8] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-24 pt-8 border-t border-[#1a1a1a]/10">
          <div className="flex items-center gap-8">
            {/* Social icons */}
            <div className="flex items-center gap-5">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#1a1a1a] hover:opacity-70 transition-opacity"
                >
                  {social.svg}
                </a>
              ))}
            </div>

            {/* Bottom text links */}
            <div className="flex items-center gap-8">
              {bottomTextLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] text-[#1a1a1a] hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-[15px] text-[#1a1a1a]">
            © Copyright 2026, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
