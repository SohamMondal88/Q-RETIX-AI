import { NextResponse } from "next/server";
import { hashOtp, normaliseEmail, sendWaitlistEmail, supabaseRpc, waitlistEmailTemplate, waitlistSchema } from "@/lib/waitlist";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object") return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    const { email, code } = body as Record<string, unknown>;
    if (!waitlistSchema.email(email) || typeof code !== "string" || !/^\d{6}$/.test(code)) {
      return NextResponse.json({ message: "Enter the six-digit code we emailed you." }, { status: 400 });
    }

    const result = await supabaseRpc<{ verified: boolean; name: string | null }[]>("verify_waitlist_otp", {
      p_email: normaliseEmail(email as string),
      p_code_hash: hashOtp(code),
    });
    if (!result[0]?.verified) return NextResponse.json({ message: "That code is invalid or has expired." }, { status: 400 });

    const address = normaliseEmail(email as string);
    await sendWaitlistEmail({
      to: address,
      subject: "You’re on the Q-RETIX AI waitlist",
      text: `Hi ${result[0].name ?? "there"},\n\nYour email has been verified and you’re now on the Q-RETIX AI waitlist. We’ll be in touch with research updates and early-access opportunities.\n\n— Q-RETIX AI`,
      html: waitlistEmailTemplate({ title: "You’re on the waitlist", preview: "Your Q-RETIX AI email has been verified.", name: result[0].name, body: "Your email has been verified and your place on the Q-RETIX AI waitlist is confirmed. We’ll be in touch when there is meaningful research news or an early-access opportunity to share." }),
    });

    return NextResponse.json({ message: "You’re confirmed." });
  } catch (error) {
    console.error("Waitlist OTP verification failed", error);
    return NextResponse.json({ message: "We could not verify your code right now. Please try again." }, { status: 500 });
  }
}
