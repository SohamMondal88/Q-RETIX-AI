"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, ChevronLeft, KeyRound, LoaderCircle, Mail, ShieldCheck, Sparkles } from "lucide-react";

type Details = { name: string; email: string; purpose: string };

export default function WaitlistPage() {
  const [details, setDetails] = useState<Details>({ name: "", email: "", purpose: "" });
  const [step, setStep] = useState<"details" | "verify" | "complete">("details");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function requestCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); setMessage("");
    try {
      const response = await fetch("/api/waitlist/request-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(details) });
      const data = await response.json() as { message?: string };
      if (!response.ok) throw new Error(data.message ?? "Unable to send the code.");
      setStep("verify"); setMessage(`We sent a six-digit code to ${details.email}.`);
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to send the code."); }
    finally { setLoading(false); }
  }

  async function verifyCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); setMessage("");
    try {
      const response = await fetch("/api/waitlist/verify-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: details.email, code }) });
      const data = await response.json() as { message?: string };
      if (!response.ok) throw new Error(data.message ?? "Unable to verify the code.");
      setStep("complete");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to verify the code."); }
    finally { setLoading(false); }
  }

  const update = (key: keyof Details) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDetails((current) => ({ ...current, [key]: event.target.value }));

  return (
    <section className="relative min-h-[calc(100vh-7rem)] overflow-hidden bg-[#F3F7FA] px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-12">
      <div aria-hidden className="absolute -left-36 top-24 h-96 w-96 rounded-full bg-[#98D7C2]/35 blur-[120px]" />
      <div aria-hidden className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#A8DADC]/45 blur-[120px]" />
      <div className="relative mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-[#D5E4EA] bg-white shadow-[0_35px_90px_-55px_rgba(44,77,120,0.6)] lg:grid-cols-[.88fr_1.12fr]">
        <aside className="bg-[#1D3553] p-8 text-white sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.07] px-3 py-1.5 text-xs font-bold text-[#BCE7D8]"><Sparkles className="h-3.5 w-3.5" />Early access</span>
          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-[-.05em] sm:text-5xl">Join the next chapter of research.</h1>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70 sm:text-base">Get verified to receive Q-RETIX research updates and early-access opportunities.</p>
          <div className="mt-10 space-y-4">
            {["A short verification keeps the list genuine.", "Your purpose helps us shape early access.", "We send a confirmation once you are enrolled."].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[.05] p-4 text-sm text-white/80"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#98D7C2]" />{item}</div>)}
          </div>
        </aside>

        <div className="p-7 sm:p-12">
          {step === "details" && <form onSubmit={requestCode} className="space-y-5" noValidate>
            <div><p className="text-xs font-bold uppercase tracking-[.17em] text-[#4C7B70]">Step 1 of 2</p><h2 className="mt-3 text-3xl font-bold tracking-[-.04em] text-[#1A2942]">Your details</h2><p className="mt-3 text-sm leading-6 text-[#5A6B82]">Use a Gmail address so we can verify your place on the list.</p></div>
            <Field label="Full name" name="name" value={details.name} onChange={update("name")} autoComplete="name" required placeholder="Your name" />
            <Field label="Gmail address" name="email" value={details.email} onChange={update("email")} autoComplete="email" type="email" required placeholder="you@gmail.com" />
            <div><label htmlFor="purpose" className="mb-2 block text-sm font-semibold text-[#33415C]">What brings you here? <span className="font-normal text-[#718096]">(optional)</span></label><textarea id="purpose" value={details.purpose} onChange={update("purpose")} maxLength={1000} rows={4} placeholder="Tell us what you are interested in…" className="w-full resize-none rounded-xl border border-[#D0E0E8] px-4 py-3 text-sm text-[#33415C] outline-none transition placeholder:text-[#8A9BB0] focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/15" /></div>
            <Status message={message} />
            <button disabled={loading} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2C4D78] px-5 text-sm font-bold text-white shadow-lg shadow-[#2C4D78]/15 transition hover:bg-[#1A3A5C] disabled:cursor-not-allowed disabled:opacity-70">{loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}{loading ? "Sending code…" : "Send verification code"}</button>
          </form>}

          {step === "verify" && <form onSubmit={verifyCode} className="space-y-6" noValidate>
            <div><p className="text-xs font-bold uppercase tracking-[.17em] text-[#4C7B70]">Step 2 of 2</p><h2 className="mt-3 text-3xl font-bold tracking-[-.04em] text-[#1A2942]">Check your inbox</h2><p className="mt-3 text-sm leading-6 text-[#5A6B82]">Enter the six-digit code sent to <strong>{details.email}</strong>. It expires in 10 minutes.</p></div>
            <div><label htmlFor="code" className="mb-2 block text-sm font-semibold text-[#33415C]">Verification code</label><input id="code" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, ""))} required placeholder="000000" className="w-full rounded-xl border border-[#D0E0E8] px-4 py-3 text-center font-mono text-2xl tracking-[.45em] text-[#33415C] outline-none transition placeholder:tracking-normal focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/15" /></div>
            <Status message={message} />
            <button disabled={loading || code.length !== 6} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2C4D78] px-5 text-sm font-bold text-white shadow-lg shadow-[#2C4D78]/15 transition hover:bg-[#1A3A5C] disabled:cursor-not-allowed disabled:opacity-70">{loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <KeyRound className="h-4 w-4" />}{loading ? "Verifying…" : "Verify and join"}</button>
            <button type="button" onClick={() => { setStep("details"); setMessage(""); }} className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-[#2C4D78] hover:underline"><ChevronLeft className="h-4 w-4" />Change details</button>
          </form>}

          {step === "complete" && <div className="py-8 text-center"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#98D7C2]/25 text-[#286B5A]"><CheckCircle2 className="h-8 w-8" /></span><p className="mt-7 text-xs font-bold uppercase tracking-[.17em] text-[#4C7B70]">You’re confirmed</p><h2 className="mt-3 text-3xl font-bold tracking-[-.04em] text-[#1A2942]">Welcome to the waitlist.</h2><p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#5A6B82]">A confirmation email is on its way to {details.email}. We’ll be in touch when there’s something meaningful to share.</p></div>}
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <div><label htmlFor={props.id ?? props.name} className="mb-2 block text-sm font-semibold text-[#33415C]">{label}</label><input id={props.name} name={props.name} {...props} className="w-full rounded-xl border border-[#D0E0E8] px-4 py-3 text-sm text-[#33415C] outline-none transition placeholder:text-[#8A9BB0] focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/15" /></div>;
}

function Status({ message }: { message: string }) { return message ? <p aria-live="polite" className="rounded-xl bg-[#E6EEF2]/70 px-4 py-3 text-sm text-[#33415C]">{message}</p> : null; }
