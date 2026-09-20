"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, CircleCheckBig, FlaskConical, ListChecks, Network, SearchCheck, ShieldCheck } from "lucide-react";

const workflow = [
  { step: "01", icon: BookOpen, title: "Define the question", description: "Set the disease scope, decision criteria, exclusions, and the evidence required to support a useful answer." },
  { step: "02", icon: SearchCheck, title: "Map the evidence", description: "Review relevant sources and distinguish reported findings from gaps, disagreements, and missing data." },
  { step: "03", icon: Network, title: "Connect mechanisms", description: "Structure relationships across disease drivers, regulatory nodes, pathways, phenotypes, and intervention points." },
  { step: "04", icon: ListChecks, title: "Prioritize hypotheses", description: "Rank candidates using explicit criteria such as biological relevance, novelty, tractability, and uncertainty." },
  { step: "05", icon: FlaskConical, title: "Design validation", description: "Propose experiments, controls, readouts, failure conditions, and evidence that would change the conclusion." },
  { step: "06", icon: ShieldCheck, title: "Review and communicate", description: "Apply expert review, document limitations, and present conclusions as evidence, inference, or hypothesis." },
];

const standards = [
  { value: "Known", label: "Directly supported evidence" },
  { value: "Inference", label: "Reasoned from cited context" },
  { value: "Hypothesis", label: "Requires experimental testing" },
];

export default function ResearchTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="research" aria-labelledby="workflow-title" className="relative overflow-hidden bg-[#F3F7FA] py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,#2C4D78_1px,transparent_0)] [background-size:38px_38px]" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4C7B70]">Research workflow</p>
            <h2 id="workflow-title" className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-[-0.04em] text-[#1A2942] sm:text-4xl lg:text-5xl">Structured reasoning, without pretending computation is validation.</h2>
          </motion.div>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: 0.08 }} className="text-base leading-7 text-[#5A6B82] lg:text-lg lg:leading-8">This is the target operating model for Q-RETIX research—not a claim of completed clinical, regulatory, or commercial milestones.</motion.p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#D7E4EA] bg-white shadow-[0_30px_80px_-50px_rgba(44,77,120,0.45)] lg:mt-16">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_310px]">
            <div className="p-5 sm:p-7 lg:p-9">
              <ol className="grid gap-4 md:grid-cols-2">
                {workflow.map((item, index) => (
                  <motion.li key={item.step} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: index * 0.04 }} className="group relative rounded-2xl border border-[#E0E9EE] bg-[#FBFDFE] p-5 transition hover:border-[#A8DADC] hover:bg-white hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F1F5] text-[#2C4D78] transition group-hover:bg-[#2C4D78] group-hover:text-white"><item.icon className="h-4.5 w-4.5" /></span>
                      <div><div className="flex items-center gap-2"><span className="text-[10px] font-bold tracking-[0.14em] text-[#4C7B70]">STEP {item.step}</span><span className="h-px w-5 bg-[#98D7C2]" /></div><h3 className="mt-2 text-base font-bold text-[#1A2942] sm:text-lg">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#5A6B82]">{item.description}</p></div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

            <aside className="border-t border-[#D7E4EA] bg-[#1D3553] p-6 text-white sm:p-8 lg:border-l lg:border-t-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10"><CircleCheckBig className="h-5 w-5 text-[#98D7C2]" /></div>
              <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em]">Evidence labels by design</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">Every conclusion should make its evidence level visible so readers can evaluate it appropriately.</p>
              <dl className="mt-7 space-y-4">
                {standards.map((standard) => (
                  <div key={standard.value} className="rounded-xl border border-white/10 bg-white/[0.06] p-4"><dt className="text-sm font-bold text-[#98D7C2]">{standard.value}</dt><dd className="mt-1 text-xs leading-5 text-white/65">{standard.label}</dd></div>
                ))}
              </dl>
              <Link href="/legal/ai-transparency" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-[#98D7C2] decoration-2 underline-offset-4 hover:text-[#98D7C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">Read AI transparency notice <ArrowUpRight className="h-4 w-4" /></Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
