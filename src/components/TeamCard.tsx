"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/lib/teamData";
import SocialIcon from "./SocialIcon";

function GradientAvatar({ name, className = "" }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-[#2C4D78] via-[#A8DADC] to-[#98D7C2] text-white font-bold text-2xl sm:text-3xl ${className}`}
      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
    >
      {initials}
    </div>
  );
}

export default function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(mouseY, [-1, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [-1, 1], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) / (rect.width / 2));
    y.set((e.clientY - cy) / (rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  const hasImage = member.image && member.image.length > 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      className="relative group"
    >
      {/* Glow */}
      <motion.div
        className="absolute -inset-1 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${isHovered ? "rgba(152,215,194,0.35)" : "transparent"}, ${isHovered ? "rgba(44,77,120,0.25)" : "transparent"})`,
          filter: "blur(16px)",
        }}
      />

      {/* Border shine */}
      <div
        className="absolute -inset-[1px] rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "linear-gradient(135deg, #98D7C2, #2C4D78, #A8DADC, #98D7C2)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 4s ease infinite",
        }}
      />

      <div className="relative bg-white/90 backdrop-blur-xl rounded-[28px] border border-[#E6EEF2]/70 shadow-[0_8px_32px_-12px_rgba(44,77,120,0.1)] overflow-hidden h-full flex flex-col">
        {/* Floating blobs */}
        <motion.div
          animate={{ y: [0, -6, 0], x: [0, 3, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-[#98D7C2]/12 to-[#A8DADC]/8 blur-2xl pointer-events-none"
        />

        <div className="relative z-10">
          {/* Image area */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full h-full"
            >
              {hasImage ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <GradientAvatar name={member.name} className="w-full h-full" />
              )}
            </motion.div>

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2942]/60 via-transparent to-transparent" />

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-4 left-4"
            >
              <div className="w-3 h-3 rounded-full bg-[#98D7C2] shadow-[0_0_8px_rgba(152,215,194,0.6)]"
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full rounded-full bg-[#98D7C2]"
                />
              </div>
            </motion.div>
          </div>

          {/* Info */}
          <div className="p-5 sm:p-6"
          >
            <h4 className="text-lg font-bold text-[#1a2942] mb-1"
            >
              {member.name}
            </h4>
            <p className="text-[13px] text-[#5A6B82] mb-4"
            >
              {member.role}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-auto"
            >
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#E6EEF2]/80 hover:bg-[#2C4D78] flex items-center justify-center transition-all duration-300 group/icon"
                >
                  <SocialIcon platform="linkedin" size={16} className="text-[#2C4D78] group-hover/icon:text-white transition-colors duration-300" />
                </Link>
              )}
              {member.instagram && (
                <Link
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#E6EEF2]/80 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FCAF45] flex items-center justify-center transition-all duration-300 group/icon"
                >
                  <SocialIcon platform="instagram" size={16} className="text-[#2C4D78] group-hover/icon:text-white transition-colors duration-300" />
                </Link>
              )}
              {member.portfolio && (
                <Link
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#E6EEF2]/80 hover:bg-[#1A6B5B] flex items-center justify-center transition-all duration-300 group/icon"
                >
                  <SocialIcon platform="portfolio" size={16} className="text-[#2C4D78] group-hover/icon:text-white transition-colors duration-300" />
                </Link>
              )}
              {member.email && (
                <Link
                  href={`mailto:${member.email}`}
                  className="w-9 h-9 rounded-full bg-[#E6EEF2]/80 hover:bg-[#2C4D78] flex items-center justify-center transition-all duration-300 group/icon"
                >
                  <SocialIcon platform="email" size={16} className="text-[#2C4D78] group-hover/icon:text-white transition-colors duration-300" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
