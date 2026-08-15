"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, X } from "lucide-react";
import Link from "next/link";
import { allPosts, categories, searchPosts } from "@/lib/blogData";
import type { BlogPostData } from "@/lib/blogData";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activeCategories = ["All", ...new Set(allPosts.map((p) => p.category))];

  const filteredPosts = searchQuery
    ? searchPosts(searchQuery)
    : selectedCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  useEffect(() => {
    const idx = activeCategories.findIndex((c) => c === selectedCategory);
    const el = tabsRef.current[idx];
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [selectedCategory, searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSelectedCategory("All");
  };

  const clearSearch = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-[40px] sm:text-[44px] font-bold text-[#111827] text-center mb-4">
            Explore our Blogs
          </h1>
          <p className="text-center text-[#6B7280] mb-10 max-w-2xl mx-auto">
            Discover the latest insights in AI-powered drug discovery, structural biology, and precision medicine.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full h-12 pl-11 pr-10 rounded-full border border-[#D0E0E8] bg-white text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:ring-2 focus:ring-[#2C4D78]/20 focus:border-[#2C4D78] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9BB0] hover:text-[#33415C] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-10 mb-16 relative overflow-x-auto pb-2">
            {activeCategories.map((cat, i) => (
              <button
                key={cat}
                ref={(el) => { tabsRef.current[i] = el; }}
                onClick={() => { setSelectedCategory(cat); setSearchQuery(""); }}
                onMouseEnter={() => setHoveredTab(cat)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative text-lg font-medium transition-colors duration-200 pb-1 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "text-[#22C55E]"
                    : hoveredTab === cat
                      ? "text-black"
                      : "text-[#6B7280]"
                }`}
              >
                {cat}
              </button>
            ))}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-[#22C55E] rounded-full"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </div>

          {/* Results Info */}
          {searchQuery && (
            <p className="text-center text-sm text-[#6B7280] mb-6">
              Found {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
            </p>
          )}

          {/* Blog Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
              {visiblePosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex">
                  <motion.article
                    layout
                    className="flex flex-col w-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[24px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-all duration-300 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {post.featured && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2C4D78] text-[10px] font-bold text-white shadow-md">
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-bold text-black">
                        {post.date}
                      </span>
                      <span className="text-sm text-[#6B7280]">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#111827] mt-2 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[#2563EB]">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-sm text-[#6B7280] mt-1.5 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-center gap-2 w-full h-[50px] rounded-full bg-[#111827] text-white font-bold text-sm shadow-sm transition-all duration-200 group-hover:bg-[#262626]">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B7280] text-lg">No articles found.</p>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="mt-4 text-[#2C4D78] underline text-sm"
                >
                  Clear search
                </button>
              )}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-[#D0E0E8] text-[#33415C] font-semibold text-sm hover:bg-[#F8FAFB] hover:border-[#2C4D78] transition-all duration-200"
              >
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
