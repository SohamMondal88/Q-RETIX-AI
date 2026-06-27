"use client";

import React from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "design", label: "Design Team" },
  { id: "tech", label: "Tech Team" },
  { id: "marketing", label: "Marketing Team" },
];

export default function TeamTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="relative inline-flex p-1.5 rounded-full bg-[#E6EEF2]/60 backdrop-blur-sm border border-[#E6EEF2]/80"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative px-5 sm:px-7 py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold transition-colors duration-300 z-10 ${
            activeTab === tab.id
              ? "text-white"
              : "text-[#5A6B82] hover:text-[#2C4D78]"
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTeamTab"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2C4D78] to-[#3D5F8A] shadow-lg shadow-[#2C4D78]/20"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
