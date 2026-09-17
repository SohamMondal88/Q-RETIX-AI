"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { listedPosts, searchPosts } from "@/lib/blogData";

const POSTS_PER_PAGE = 6;

const toIsoDate = (date: string) =>
  new Date(`${date} 00:00:00 UTC`).toISOString().slice(0, 10);

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activeCategories = [
    "All",
    ...new Set(listedPosts.map((post) => post.category)),
  ];

  const filteredPosts = searchQuery
    ? searchPosts(searchQuery)
    : selectedCategory === "All"
      ? listedPosts
      : listedPosts.filter((post) => post.category === selectedCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSelectedCategory("All");
    setVisibleCount(POSTS_PER_PAGE);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setVisibleCount(POSTS_PER_PAGE);
    searchInputRef.current?.focus();
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 max-w-5xl rounded-full bg-[#98D7C2]/10 blur-3xl" />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h1 className="relative text-[40px] sm:text-[44px] font-bold text-[#111827] text-center mb-4">
            Explore our Blogs
          </h1>
          <p className="relative text-center text-[#5A6B82] mb-8 max-w-2xl mx-auto">
            Discover the latest insights in AI-powered drug discovery, structural biology, and precision medicine.
          </p>

          <div className="mx-auto mb-10 flex max-w-3xl items-center gap-4" aria-hidden="true">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#A8DADC]" />
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2C4D78]">
              <Sparkles className="h-3.5 w-3.5 text-[#5EA990]" />
              Research journal
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#A8DADC]" />
          </div>

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
                aria-label="Search blog articles"
                className="w-full h-12 pl-11 pr-10 rounded-full border border-[#D0E0E8] bg-white text-sm text-[#33415C] shadow-[0_8px_28px_-18px_rgba(44,77,120,0.45)] placeholder:text-[#718096] focus:outline-none focus:ring-4 focus:ring-[#2C4D78]/10 focus:border-[#2C4D78] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  aria-label="Clear blog search"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#718096] transition-all hover:bg-[#E6EEF2] hover:text-[#2C4D78] active:scale-90"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="relative mb-16">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#D0E0E8] to-transparent md:block" aria-hidden="true" />
            <div className="no-scrollbar relative mx-auto flex w-fit max-w-full items-center gap-2 overflow-x-auto rounded-2xl border border-[#D0E0E8] bg-white/90 p-1.5 shadow-sm backdrop-blur-md">
            {activeCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => selectCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`relative min-h-10 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40 ${
                  selectedCategory === cat
                    ? "bg-[#2C4D78] text-white shadow-md shadow-[#2C4D78]/20"
                    : "text-[#5A6B82] hover:bg-[#E6EEF2] hover:text-[#2C4D78]"
                }`}
              >
                {cat}
              </button>
            ))}
            </div>
          </div>

          {/* Results Info */}
          {searchQuery && (
            <p aria-live="polite" className="text-center text-sm text-[#5A6B82] mb-6">
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
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex rounded-[26px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50 focus-visible:ring-offset-4">
                  <motion.article
                    layout
                    className="flex w-full flex-col rounded-[26px] border border-transparent p-2 transition-[border-color,background-color,box-shadow] duration-300 group-hover:border-[#D0E0E8] group-hover:bg-white group-hover:shadow-[0_20px_55px_-30px_rgba(44,77,120,0.5)]"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[20px] bg-[#E6EEF2]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className={`${post.coverFit === "contain" ? "object-contain p-1" : "object-cover"} transition-all duration-300 ease-out group-hover:scale-[1.03]`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={visiblePosts.indexOf(post) < 3}
                        quality={90}
                      />
                      {post.featured && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2C4D78] text-[10px] font-bold text-white shadow-md">
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <time dateTime={toIsoDate(post.date)} className="text-sm font-bold text-[#33415C]">
                        {post.date}
                      </time>
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
                      <div className="relative flex h-[50px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#1A2942] text-sm font-bold text-white shadow-md transition-all duration-300 group-hover:bg-[#2C4D78] group-hover:shadow-lg group-hover:shadow-[#2C4D78]/20 group-active:scale-[0.98]">
                        <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/15 transition-transform duration-700 group-hover:translate-x-[430%]" aria-hidden="true" />
                        <span>Read Article</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#2C4D78]">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div aria-live="polite" className="text-center py-20">
              <p className="text-[#5A6B82] text-lg">No articles found.</p>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="mt-5 rounded-full border border-[#2C4D78] px-5 py-2.5 text-sm font-semibold text-[#2C4D78] transition-all hover:bg-[#2C4D78] hover:text-white active:scale-95"
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
                className="group/load inline-flex items-center gap-3 rounded-full border border-[#D0E0E8] bg-white px-8 py-3.5 text-sm font-semibold text-[#33415C] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2C4D78] hover:shadow-lg active:translate-y-0 active:scale-95"
              >
                Load More Articles
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E6EEF2] text-[#2C4D78] transition-all group-hover/load:translate-x-1 group-hover/load:bg-[#2C4D78] group-hover/load:text-white">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
