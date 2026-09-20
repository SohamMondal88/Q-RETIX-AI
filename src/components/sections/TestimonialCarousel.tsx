"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Eye, FileSearch, Scale, ShieldAlert } from "lucide-react";

const principles = [
  { icon: FileSearch, title: "Source-aware", description: "Claims should be traceable to primary evidence wherever possible—not justified by confident language alone." },
  { icon: Eye, title: "Uncertainty-visible", description: "Unknowns, conflicts, weak evidence, and model limitations should be surfaced instead of hidden." },
  { icon: BadgeCheck, title: "Human-reviewed", description: "Qualified researchers remain responsible for checking sources, interpreting context, and approving next steps." },
  { icon: ShieldAlert, title: "Validation-first", description: "Computational output is hypothesis generation. Laboratory, safety, ethics, clinical, and regulatory review remain essential." },
];

export default function TestimonialCarousel() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="standards" aria-labelledby="standards-title" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-[#98D7C2]/10 blur-[110px]" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4C7B70]">Scientific standards</p>
          <h2 id="standards-title" className="mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.04em] text-[#1A2942] sm:text-4xl lg:text-5xl">Trust should come from method, not anonymous testimonials.</h2>
          <p className="mt-5 text-base leading-7 text-[#5A6B82] sm:text-lg sm:leading-8">Q-RETIX communicates research-stage work with explicit limitations. These principles guide how computational findings should be interpreted and reviewed.</p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <motion.article key={principle.title} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-3xl border border-[#DFE9EE] bg-[#F8FAFB] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#98D7C2] hover:bg-white hover:shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9F7F2] text-[#285C50]"><principle.icon className="h-5 w-5" /></span>
              <h3 className="mt-6 text-lg font-bold text-[#1A2942]">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5A6B82]">{principle.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#D5E5EB] bg-[#F3F7FA] p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex max-w-3xl items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C4D78] text-white"><Scale className="h-4 w-4" /></span><div><h3 className="font-bold text-[#1A2942]">Research content is not medical advice</h3><p className="mt-1 text-sm leading-6 text-[#5A6B82]">Target rankings, mechanisms, and model narratives require independent scientific and experimental validation.</p></div></div>
          <Link href="/legal/disclaimer" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#2C4D78] underline decoration-[#98D7C2] decoration-2 underline-offset-4 hover:text-[#1A3A5C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40">Read disclaimer <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
