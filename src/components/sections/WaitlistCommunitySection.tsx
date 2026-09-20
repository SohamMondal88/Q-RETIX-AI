"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Check, FlaskConical, LockKeyhole, Mail, MessageCircle, Sparkles } from "lucide-react";

const updates = [
  { icon: BookOpen, title: "Research notes", description: "New articles, methods, and scientific explainers." },
  { icon: FlaskConical, title: "Product progress", description: "Transparent updates as research concepts become prototypes." },
  { icon: Sparkles, title: "Early opportunities", description: "Occasional invitations to feedback sessions or beta access." },
];

export default function WaitlistCommunitySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="relative overflow-hidden bg-[#F3F7FA] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#98D7C2]/20 blur-[130px]" />
      <div aria-hidden="true" className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#A8DADC]/25 blur-[130px]" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-[#D5E4EA] bg-white shadow-[0_35px_90px_-55px_rgba(44,77,120,0.5)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={reduceMotion ? false : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden bg-[#1D3553] p-7 text-white sm:p-10 lg:p-12">
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#98D7C2]/15 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-xs font-bold text-[#BCE7D8]"><Sparkles className="h-3.5 w-3.5" />Research updates</span>
                <h2 id="waitlist-title" className="mt-6 text-balance text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">Follow the work as it develops.</h2>
                <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">Receive occasional Q-RETIX research articles, transparent product progress, and opportunities to contribute feedback.</p>

                <div className="mt-8 space-y-4">
                  {updates.map((update) => (
                    <div key={update.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#98D7C2]"><update.icon className="h-4 w-4" /></span><div><h3 className="text-sm font-bold">{update.title}</h3><p className="mt-1 text-xs leading-5 text-white/60">{update.description}</p></div></div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={reduceMotion ? false : { opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#4C7B70]">Join the list</p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#1A2942] sm:text-3xl">Stay close to the research.</h3>
              <p className="mt-3 text-sm leading-6 text-[#5A6B82]">This website does not yet use an automated subscription backend. Use your own email app to request research updates; Q-RETIX receives information only after you choose to send the message.</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a href="mailto:contact@qretix.ai?subject=Join%20Q-RETIX%20research%20updates" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2C4D78] px-5 text-sm font-bold text-white shadow-lg shadow-[#2C4D78]/15 transition hover:-translate-y-0.5 hover:bg-[#1A3A5C] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78] focus-visible:ring-offset-2">Request updates <Mail className="h-4 w-4" /></a>
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D0E0E8] bg-white px-5 text-sm font-bold text-[#2C4D78] transition hover:-translate-y-0.5 hover:border-[#98D7C2] hover:bg-[#F8FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40"><MessageCircle className="h-4 w-4" />Contact the team</Link>
              </div>

              <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-[#718096]"><LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0" /><p>No personal information is collected by this page. Your email provider handles the message you decide to send. Read the <Link href="/legal/privacy" className="font-semibold text-[#2C4D78] underline underline-offset-2">Privacy Policy</Link>.</p></div>

              <div className="mt-7 border-t border-[#DFE9EE] pt-6">
                <p className="text-sm font-semibold text-[#33415C]">Prefer a direct conversation?</p>
                <Link href="/about" className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#D0E0E8] bg-white px-4 text-sm font-bold text-[#2C4D78] transition hover:border-[#98D7C2] hover:bg-[#F8FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40">Meet Q-RETIX <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#718096]">
          {["No automatic enrollment", "No fabricated success message", "Research communications only"].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#4CA58A]" />{item}</span>)}
        </div>
      </div>
    </section>
  );
}
