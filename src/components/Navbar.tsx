"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);



  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-7">
      <div className={`mx-auto flex h-14 max-w-[1360px] items-center justify-between rounded-2xl border px-5 transition-all ${scrolled ? "border-white/80 bg-white/80 shadow-[0_8px_28px_rgba(40,93,145,.10)] backdrop-blur-xl" : "border-white/25 bg-white/10 backdrop-blur-sm"}`}>
        <Link href="/" className="flex items-center gap-2 text-[11px] font-bold tracking-[-.02em] text-[#1049df]">
          <span className="grid size-5 place-items-center rounded-[6px] bg-[#1450ef] text-[9px] text-white">Q</span>
          Q-RETIX AI
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => <Link key={link.label} href={link.href} className="text-[10px] font-semibold tracking-[.08em] text-[#323c4b] transition-colors hover:text-[#1450ef]">{link.label}</Link>)}
        </nav>
        <Link href="/#waitlist" className="hidden h-8 items-center rounded-lg border border-[#b8d9ff] bg-white/65 px-4 text-[10px] font-bold text-[#1450ef] shadow-sm transition hover:bg-white md:flex">JOIN WAITLIST</Link>
        <button type="button" aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-xl text-[#1049df] md:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
      {open && <nav className="mx-auto mt-2 grid max-w-[1360px] gap-1 rounded-2xl border border-white bg-white/95 p-3 shadow-xl backdrop-blur-xl md:hidden">{links.map((link) => <Link key={link.label} onClick={() => setOpen(false)} href={link.href} className="rounded-xl px-4 py-3 text-xs font-semibold text-[#323c4b] hover:bg-[#eef8ff]">{link.label}</Link>)}<Link href="/#waitlist" onClick={() => setOpen(false)} className="mt-1 rounded-xl bg-[#1450ef] px-4 py-3 text-center text-xs font-semibold text-white">JOIN WAITLIST</Link></nav>}
    </header>
  );
}
