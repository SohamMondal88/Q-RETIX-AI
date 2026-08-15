"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface SpotlightLeader {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const spotlightLeaders: SpotlightLeader[] = [
  {
    name: "Anirban Chowdhury",
    role: "Chief Operating Officer",
    image: "/images/team/Anirban Chowdhury.jpg",
    linkedin: "https://www.linkedin.com/in/anirban-chowdhury-968950354",
  },
  {
    name: "Aditya Ghosh",
    role: "Chief Executive Officer",
    image: "/images/team/Aditya Ghosh.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-ghosh-9147b638a/",
  },
  {
    name: "Rishav Mani",
    role: "Chief Technology Officer",
    image: "/images/team/Rishav Mani.jpg",
    linkedin: "https://www.linkedin.com/in/rishav-mani-76a364316/",
  },
];

function LinkedInBadge({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex shrink-0 items-center justify-center rounded-lg bg-[#0A66C2] p-2 transition-colors duration-300 hover:bg-[#084e96]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </Link>
  );
}

function LeadershipSpotlightCard({
  leader,
  index,
}: {
  leader: SpotlightLeader;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex h-full flex-col overflow-hidden bg-[#EDE7DA]"
    >
      {/* Halftone portrait */}
      <div className="relative aspect-[3/4] flex-1 overflow-hidden">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          priority={index === 0}
          className="object-cover object-top grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Duotone tint */}
        <div className="absolute inset-0 bg-[#EDE7DA]/10 mix-blend-multiply" />
        {/* Halftone dot-screen overlay */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(10,10,10,0.55) 1px, transparent 0)",
            backgroundSize: "4px 4px",
            mixBlendMode: "multiply",
          }}
        />
        {/* Amber corner brackets */}
        <div className="absolute top-3 left-3 flex h-7 w-7 border-t-2 border-l-2 border-[#C9822B]" />
        <div className="absolute top-3 right-3 flex h-7 w-7 border-t-2 border-r-2 border-[#C9822B]" />
      </div>

      {/* Info bar */}
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:py-5">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-snug">
            {leader.name}
          </h3>
          <p className="font-serif text-[13px] sm:text-sm text-[#4B4B4B]">
            {leader.role}
          </p>
        </div>
        <LinkedInBadge href={leader.linkedin} />
      </div>
    </motion.div>
  );
}

export default function LeadershipSpotlight() {
  return (
    <section id="leadership" className="relative bg-[#1a2942]">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-[40px] leading-[1.1] font-bold text-white sm:text-[46px] lg:text-[48px]"
        >
          Our Leadership
        </motion.h2>

        {/* Sub-banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10"
        >
          <div className="w-full bg-[#EDE7DA] px-4 py-5 text-center sm:py-6">
            <span className="font-serif text-[22px] sm:text-2xl font-medium text-black">
              Meet Our Leaders
            </span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-1.5 md:grid-cols-3">
          {spotlightLeaders.map((leader, index) => (
            <LeadershipSpotlightCard key={leader.name} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}