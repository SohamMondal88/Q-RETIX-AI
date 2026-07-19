"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
import { getPostBySlug } from "@/lib/blogData";

export default function BlogPost({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (!post) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    post.tocSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug, post]);

  if (!post) return null;

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
                className="inline-flex items-center gap-2 text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 rounded"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6EEF2] text-sm font-medium text-[#2C4D78] mb-4">
                {post.category}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C4D78] mb-4 tracking-tight">
                {post.title}
              </h1>
              <p className="text-lg text-[#5A6B82] leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#5A6B82] mb-8">
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

      <div className={`relative w-full ${post.coverAspect} overflow-hidden`}>
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
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
                {post.body}
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
                          className="w-9 h-9 rounded-lg bg-[#E6EEF2] flex items-center justify-center text-[#5A6B82] hover:text-[#2C4D78] hover:bg-[#D0E0E8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50"
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
                  <nav className="space-y-1">
                    {post.tocSections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => handleTocClick(e, section.id)}
                        className={`block text-sm py-1.5 px-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 ${
                          activeSection === section.id
                            ? "text-[#2C4D78] font-medium bg-[#E6EEF2]"
                            : "text-[#5A6B82] hover:text-[#2C4D78] hover:bg-[#F8FAFB]"
                        }`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-gradient-to-br from-[#2C4D78] to-[#3D5F8A] rounded-2xl p-6 text-white">
                  <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
                  <p className="text-sm text-white/70 mb-4">
                    Get the latest research insights delivered to your inbox.
                  </p>
                  <Link
                    href="/blog"
                    className="w-full bg-white text-[#2C4D78] hover:bg-white/90 font-semibold inline-flex items-center justify-center gap-2 h-10 rounded-lg text-sm px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
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
