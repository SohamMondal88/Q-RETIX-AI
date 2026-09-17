import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Scale } from "lucide-react";
import { LEGAL_CONTACT, LEGAL_LAST_UPDATED, legalDocumentList } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal Center",
  description: "Q-RETIX AI legal policies, privacy information, research disclaimers, and trust resources.",
  alternates: { canonical: "/legal" },
};

export default function LegalCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative overflow-hidden border-b border-[#DCE7ED] bg-[#F3F7FA] pb-16 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#98D7C2]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2C4D78]"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2C4D78] text-white shadow-md"><Scale className="h-4 w-4" /></span>Trust &amp; governance</div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] text-[#1A2942] sm:text-5xl lg:text-6xl">Legal Center</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#5A6B82] sm:text-lg">Clear information about privacy, acceptable use, AI-assisted research, accessibility, security, and your rights when using Q-RETIX AI’s public website.</p>
          <p className="mt-6 text-sm font-medium text-[#718096]">Documents updated {LEGAL_LAST_UPDATED}</p>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {legalDocumentList.map((document, index) => (
            <Link key={document.slug} href={`/legal/${document.slug}`} className="group flex min-h-60 flex-col rounded-3xl border border-[#DCE7ED] bg-[#F8FAFB] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#98D7C2] hover:bg-white hover:shadow-[0_20px_55px_-30px_rgba(44,77,120,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40">
              <span className="text-xs font-bold tracking-[0.16em] text-[#4C7B70]">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-5 text-xl font-bold tracking-[-0.025em] text-[#1A2942]">{document.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#5A6B82]">{document.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2C4D78]">Read document <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
        <section className="mt-12 rounded-3xl bg-gradient-to-br from-[#2C4D78] to-[#1A3650] p-7 text-white sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div><h2 className="text-2xl font-bold tracking-[-0.025em]">Questions about these documents?</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">Tell us which document and section your question concerns. Privacy and security reports can use the same contact address with a clear subject line.</p></div>
          <a href={`mailto:${LEGAL_CONTACT}`} className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#98D7C2] px-5 py-3 text-sm font-bold text-[#16352F] shadow-md transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:mt-0"><Mail className="h-4 w-4" /> {LEGAL_CONTACT}</a>
        </section>
        <p className="mt-8 text-center text-xs leading-5 text-[#718096]">These documents are general website terms and notices. Product, partnership, employment, or customer relationships may require separate signed agreements.</p>
      </main>
    </div>
  );
}
