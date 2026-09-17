import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, Scale } from "lucide-react";
import { LEGAL_CONTACT, LEGAL_LAST_UPDATED, legalDocumentList, type LegalDocument } from "@/lib/legal";

export default function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative overflow-hidden border-b border-[#DCE7ED] bg-[#F3F7FA] pb-14 pt-32 sm:pb-16 sm:pt-36">
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#98D7C2]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <Link href="/legal" className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D0E0E8] bg-white px-4 py-2 text-sm font-semibold text-[#2C4D78] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40">
            <ArrowLeft className="h-4 w-4" /> Legal Center
          </Link>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2C4D78]">
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#2C4D78] to-[#98D7C2]" /> Legal
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] text-[#1A2942] sm:text-5xl lg:text-6xl">{document.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#5A6B82] sm:text-lg">{document.intro}</p>
          <p className="mt-6 text-sm font-medium text-[#718096]">Last updated {LEGAL_LAST_UPDATED}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_290px] lg:px-12 lg:py-20">
        <article className="min-w-0 space-y-12">
          {document.sections.map((section, index) => (
            <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-28">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E9F1F5] text-xs font-bold text-[#2C4D78]">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold tracking-[-0.025em] text-[#1A2942] sm:text-3xl">{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-[15px] leading-7 text-[#5A6B82] sm:text-base">{paragraph}</p>)}
                  {section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-[15px] leading-7 text-[#5A6B82] sm:text-base">
                          <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4CA58A]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && <div className="mt-6 rounded-2xl border border-[#C8E7DD] bg-[#F1FAF7] p-5 text-sm leading-6 text-[#405E58] sm:text-[15px]"><span className="font-bold text-[#285C50]">Important: </span>{section.note}</div>}
                </div>
              </div>
            </section>
          ))}

          {document.references && (
            <section className="border-t border-[#DCE7ED] pt-8">
              <h2 className="text-lg font-bold text-[#1A2942]">Regulatory references</h2>
              <p className="mt-2 text-sm leading-6 text-[#718096]">These authoritative materials are provided for context and do not constitute legal advice.</p>
              <ul className="mt-4 space-y-3">
                {document.references.map((reference) => (
                  <li key={reference.href}><a href={reference.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C4D78] underline decoration-[#98D7C2] decoration-2 underline-offset-4 hover:text-[#1A3A5C]">{reference.label} <ArrowUpRight className="h-4 w-4" /></a></li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <aside className="space-y-5 lg:order-last">
          <nav aria-label="Legal documents" className="rounded-3xl border border-[#DCE7ED] bg-[#F8FAFB] p-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1A2942]"><Scale className="h-4 w-4 text-[#4CA58A]" /> Legal documents</div>
            <ul className="mt-4 space-y-1">
              {legalDocumentList.map((item) => {
                const active = item.slug === document.slug;
                return <li key={item.slug}><Link href={`/legal/${item.slug}`} aria-current={active ? "page" : undefined} className={`block rounded-xl px-3 py-2.5 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/40 ${active ? "bg-[#2C4D78] font-semibold text-white shadow-sm" : "text-[#5A6B82] hover:bg-white hover:text-[#2C4D78]"}`}>{item.shortTitle}</Link></li>;
              })}
            </ul>
            <div className="mt-5 border-t border-[#DCE7ED] pt-5"><a href={`mailto:${LEGAL_CONTACT}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C4D78] hover:text-[#1A3A5C]"><Mail className="h-4 w-4" /> {LEGAL_CONTACT}</a></div>
          </nav>
        </aside>
      </div>
    </div>
  );
}
