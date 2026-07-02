"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Leader } from "@/lib/teamData";
import SocialIcon from "./SocialIcon";

export default function LeadershipCard({ leader, index }: { leader: Leader; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-1, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [-1, 1], [-6, 6]);

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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      className="relative group cursor-pointer"
    >
      {/* Animated glow */}
      <motion.div
        className="absolute -inset-1 rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, ${isHovered ? "rgba(152,215,194,0.4)" : "transparent"}, ${isHovered ? "rgba(44,77,120,0.3)" : "transparent"})`,
          filter: "blur(20px)",
        }}
      />

      {/* Gradient ring */}
      <div
        className="absolute -inset-[1px] rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "linear-gradient(135deg, #98D7C2, #2C4D78, #A8DADC, #98D7C2)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 4s ease infinite",
        }}
      />

      <div className="relative bg-white/80 backdrop-blur-xl rounded-[32px] border border-[#E6EEF2]/80 shadow-[0_12px_48px_-16px_rgba(44,77,120,0.15)] overflow-hidden"
      >
        {/* Floating background shapes */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 4, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#98D7C2]/10 to-[#A8DADC]/10 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 6, 0], x: [0, -3, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr from-[#2C4D78]/8 to-[#98D7C2]/8 blur-3xl pointer-events-none"
        />

        <div className="p-8 sm:p-10 flex flex-col items-center text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
            className="mb-6"
          >
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2C4D78] to-[#3D5F8A] text-white text-[12px] font-semibold tracking-wide shadow-lg shadow-[#2C4D78]/20"
            >
              {leader.badge}
            </div>
          </motion.div>

          {/* Large circular portrait */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mb-8"
          >
            {/* Animated ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #98D7C2, #2C4D78, #A8DADC, #98D7C2)",
                backgroundSize: "300% 300%",
                animation: "gradientShift 4s ease infinite",
                padding: "3px",
              }}
            >
              <div className="w-full h-full rounded-full bg-white p-[3px]">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#E6EEF2] to-[#F8FAFB]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                  />
                </div>
              </div>
            </div>

            {/* Glow behind */}
            <motion.div
              animate={{ opacity: isHovered ? 0.6 : 0 }}
              className="absolute inset-0 rounded-full bg-[#98D7C2]/30 blur-2xl -z-10"
            />
          </motion.div>

          {/* Name & Role */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1a2942] mb-2"
          >
            {leader.name}
          </h3>
          <p className="text-[15px] text-[#5A6B82] mb-8"
          >
            {leader.role}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4"
          >
            {leader.email && (
              <Link
                href={`mailto:${leader.email}`}
                className="w-11 h-11 rounded-full bg-[#E6EEF2]/80 hover:bg-[#2C4D78] flex items-center justify-center transition-all duration-300 group/icon"
              >
                <SocialIcon platform="email" size={18} className="text-[#2C4D78] group-hover/icon:text-white transition-colors duration-300" />
              </Link>
            )}
            <Link
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#E6EEF2]/80 hover:bg-[#2C4D78] flex items-center justify-center transition-all duration-300 group/icon"
            >
              <SocialIcon platform="linkedin" size={18} className="text-[#2C4D78] group-hover/icon:text-white transition-colors duration-300" />
            </Link>
            <Link
              href={leader.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#E6EEF2]/80 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FCAF45] flex items-center justify-center transition-all duration-300 group/icon"
            >
              <SocialIcon platform="instagram" size={18} className="text-[#2C4D78] group-hover/icon:text-white transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
