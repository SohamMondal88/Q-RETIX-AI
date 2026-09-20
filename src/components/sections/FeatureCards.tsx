"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpenCheck, BrainCircuit, ChartNoAxesCombined, Dna, FlaskConical, Network } from "lucide-react";

const focusAreas = [
  { icon: BookOpenCheck, number: "01", title: "Evidence synthesis", description: "Organize scientific literature into traceable disease, mechanism, and target context." },
  { icon: Network, number: "02", title: "Biological mapping", description: "Connect genes, proteins, pathways, phenotypes, and disease drivers without treating them as interchangeable." },
  { icon: Dna, number: "03", title: "Multi-omic context", description: "Reason across genomic, transcriptomic, proteomic, and metabolic signals when relevant data is available." },
  { icon: BrainCircuit, number: "04", title: "Target prioritization", description: "Compare novelty, causal relevance, tractability, uncertainty, and supporting evidence." },
  { icon: FlaskConical, number: "05", title: "Validation planning", description: "Translate computational hypotheses into explicit experiments, controls, and falsifiable next steps." },
  { icon: ChartNoAxesCombined, number: "06", title: "Transparent reporting", description: "Separate known evidence, supported inference, and hypothesis for clearer scientific review." },
];

export default function FeatureCards() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="solutions" aria-labelledby="research-focus-title" className="relative overflow-hidden border-y border-[#DFE9EE] bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4C7B70]">Research focus</p>
            <h2 id="research-focus-title" className="mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.04em] text-[#1A2942] sm:text-4xl lg:text-5xl">A clearer path from evidence to experiment.</h2>
          </motion.div>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: 0.08 }} className="max-w-2xl text-base leading-7 text-[#5A6B82] lg:justify-self-end lg:text-lg lg:leading-8">Q-RETIX is being developed as a research decision-support layer. The goal is not to replace scientists, but to make complex biological reasoning more structured, inspectable, and useful.</motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.article key={area.title} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: index * 0.05 }} className="group relative overflow-hidden rounded-3xl border border-[#DFE9EE] bg-[#F8FAFB] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#98D7C2] hover:bg-white hover:shadow-[0_20px_50px_-30px_rgba(44,77,120,0.4)] sm:p-7">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[5rem] bg-gradient-to-br from-[#98D7C2]/20 to-transparent" />
              <div className="relative flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D4E5E0] bg-white text-[#2C4D78] shadow-sm"><area.icon className="h-5 w-5" /></span><span className="text-xs font-bold tracking-[0.14em] text-[#8A9BB0]">{area.number}</span></div>
              <h3 className="relative mt-7 text-xl font-bold tracking-[-0.025em] text-[#1A2942]">{area.title}</h3>
              <p className="relative mt-3 text-sm leading-6 text-[#5A6B82]">{area.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
