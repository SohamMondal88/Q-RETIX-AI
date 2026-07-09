"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    title: "Q-RETIX.AI: Unlocking the \"Undruggable\" AIM2 Inflammasome",
    description:
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target.",
    category: "Research",
    readTime: "15 min",
    date: "Jul 4, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-1.jpg",
    slug: "unlocking-undruggable-aim2-inflammasome",
    featured: true,
  },
  {
    id: 2,
    title: "Structural AI Discovery Matrix: Beyond Static Crystallography",
    description:
      "Why dynamic thermodynamic ensembles are the future of target identification and cryptic pocket discovery.",
    category: "AI Research",
    readTime: "12 min",
    date: "Jun 28, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-2.jpg",
    slug: null,
    featured: false,
  },
  {
    id: 3,
    title: "Allosteric Modulation: The Next Frontier in Immunology",
    description:
      "Exploring how allosteric molecular wedges are reshaping autoimmune drug design and inflammasome inhibition.",
    category: "Drug Discovery",
    readTime: "10 min",
    date: "Jun 20, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-3.jpg",
    slug: null,
    featured: false,
  },
  {
    id: 4,
    title: "From Charge Trap to Cure: The AIM2 Therapeutic Pipeline",
    description:
      "Mapping the multi-billion dollar market opportunity in SLE, psoriasis, and neurodegenerative disease.",
    category: "Market Analysis",
    readTime: "8 min",
    date: "Jun 15, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-4.jpg",
    slug: null,
    featured: false,
  },
];

export default function FeaturedArticleStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !cardsContainer) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      cardsContainer.querySelectorAll(".article-card")
    );
    const overlays = cardsContainer.querySelectorAll(".card-overlay");

    const totalCards = cards.length;

    // ---- Set initial state for all cards ----
    gsap.set(cards, {
      y: (i) => 100 + i * 20,
      scale: 0.92,
      opacity: 0,
      rotateX: 4,
      transformOrigin: "center top",
    });

    // ---- GSAP ScrollTrigger: Pinned Section ----
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalCards * 100}%`,
        pin: true,
        scrub: 1.2,
        snap: {
          snapTo: (progress) => {
            const step = 1 / (totalCards - 1 || 1);
            return Math.round(progress / step) * step;
          },
          duration: { min: 0.2, max: 0.4 },
          ease: "power2.inOut",
        },
        invalidateOnRefresh: true,
      },
    });

    // ---- Animate each card in sequence ----
    cards.forEach((card, i) => {
      const isLast = i === totalCards - 1;
      const start = i * 0.25;
      const settle = start + 0.15;
      const exitStart = settle + 0.08;
      const exitEnd = start + 0.25;

      // Card flies up from below
      masterTl.to(
        card,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        start
      );

      // If not the last card, dim and scale down as the next card enters above it
      if (!isLast && overlays[i]) {
        masterTl.to(
          overlays[i],
          {
            opacity: 0.75,
            duration: 0.1,
            ease: "power2.in",
          },
          exitStart
        );

        masterTl.to(
          card,
          {
            scale: 0.96,
            y: -12,
            duration: 0.1,
            ease: "power2.in",
          },
          exitStart
        );
      }
    });

    // ---- CTA fades in at the very end ----
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 30 });
      masterTl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.88
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="articles"
      ref={sectionRef}
      className="relative bg-[#F8FAFB] min-h-[100dvh]"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative h-[100dvh] flex flex-col lg:flex-row items-center justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-16 py-12 lg:py-0"
      >
        {/* Left Column: Heading */}
        <div className="lg:w-[40%] xl:w-[35%] flex-shrink-0 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5"
            >
              <div className="w-1 h-7 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[12px] sm:text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]"
              >
                Blog
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-bold text-[#1a2942] tracking-tight leading-[1.1] mb-4"
            >
              Featured Top
              <br />{" "}
              Article
            </h2>

            <p className="text-[15px] sm:text-base lg:text-[17px] text-[#5A6B82] leading-[1.7] max-w-md mx-auto lg:mx-0"
            >
              Stay updated with breakthroughs in AI-powered healthcare, structural drug discovery, and immunology research.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Card Stack */}
        <div
          ref={cardsContainerRef}
          className="lg:w-[60%] xl:w-[65%] relative flex items-center justify-center"
          style={{ minHeight: "min(480px, 65vh)" }}
        >
          <div className="relative w-full max-w-[420px]"
            style={{ height: "min(480px, 65vh)" }}
          >
            {articles.map((article, index) => {
              const href = article.slug ? `/blog/${article.slug}` : "/blog";
              return (
                <div
                  key={article.id}
                  className="article-card absolute top-0 right-0 w-full will-change-transform"
                  data-index={index}
                  style={{ zIndex: articles.length - index }}
                >
                  <Link href={href}>
                    <div className="bg-white rounded-[18px] sm:rounded-[22px] border border-[#E6EEF2]/60 shadow-[0_8px_32px_-12px_rgba(44,77,120,0.12)] overflow-hidden relative group hover:shadow-[0_16px_48px_-12px_rgba(44,77,120,0.18)] transition-shadow duration-700 flex flex-col cursor-pointer"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#98D7C2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />

                      <div className="card-overlay absolute inset-0 z-10 rounded-[18px] sm:rounded-[22px] bg-gradient-to-b from-[#F8FAFB]/88 via-[#F8FAFB]/45 to-[#F8FAFB]/92 pointer-events-none opacity-0" />

                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[18px] sm:rounded-t-[22px] bg-[#F8FAFB] shrink-0"
                      >
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 100vw, 420px"
                          priority={index === 0}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />

                        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4"
                        >
                          <div className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-semibold shadow-sm"
                          >
                            {article.category}
                          </div>
                        </div>

                        {article.featured && (
                          <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4"
                          >
                            <div className="px-2.5 py-1 rounded-full bg-[#2C4D78] text-[10px] sm:text-[11px] font-bold text-white shadow-md"
                            >
                              Featured
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-4 sm:p-5 shrink-0"
                      >
                        <div className="flex items-center gap-2 mb-1.5"
                        >
                          <span className="text-[10px] sm:text-[11px] text-[#8A9BB0] font-medium flex items-center gap-1"
                          >
                            <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-[14px] sm:text-[15px] md:text-base font-bold text-[#1a2942] leading-[1.3] mb-1 group-hover:text-[#2C4D78] transition-colors duration-300 line-clamp-2"
                        >
                          {article.title}
                        </h3>

                        <p className="text-[11px] sm:text-[12px] text-[#5A6B82] leading-[1.6] mb-2.5 sm:mb-3 line-clamp-2"
                        >
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between pt-2 sm:pt-2.5 border-t border-[#E6EEF2]/50"
                        >
                          <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] text-[#8A9BB0]"
                          >
                            <div className="flex items-center gap-1"
                            >
                              <User className="w-2.5 h-2.5 sm:w-3 sm:h-3" strokeWidth={2} />
                              <span className="font-medium">{article.author}</span>
                            </div>
                            <span className="w-0.5 h-0.5 rounded-full bg-[#D0E0E8]" />
                            <div className="flex items-center gap-1"
                            >
                              <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" strokeWidth={2} />
                              <span>{article.date}</span>
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-1.5 group/link"
                          >
                            <span className="text-[11px] sm:text-[12px] font-semibold text-[#2C4D78] group-hover/link:text-[#1a2942] transition-colors"
                            >
                              Read
                            </span>
                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E6EEF2] group-hover/link:bg-[#2C4D78] flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-0.5"
                            >
                              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2C4D78] group-hover/link:text-white transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        <div className="text-center"
        >
          <Link href="/blog"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[16px] bg-gradient-to-r from-[#2C4D78] to-[#3D5F8A] text-white font-semibold text-[14px] sm:text-[15px] shadow-lg shadow-[#2C4D78]/20 hover:shadow-xl hover:shadow-[#2C4D78]/30 transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              <span className="relative">Read All Articles</span>
              <motion.div
                className="relative w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
