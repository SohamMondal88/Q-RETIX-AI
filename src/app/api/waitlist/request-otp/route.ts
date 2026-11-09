import { NextResponse } from "next/server";
import { createOtp, hashOtp, normaliseEmail, sendWaitlistEmail, supabaseRpc, waitlistEmailExists, waitlistEmailTemplate, waitlistSchema } from "@/lib/waitlist";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object") return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    const { name, email, purpose } = body as Record<string, unknown>;

    if (!waitlistSchema.name(name) || !waitlistSchema.email(email) || !waitlistSchema.purpose(purpose)) {
      return NextResponse.json({ message: "Please enter a valid name and Gmail address." }, { status: 400 });
    }

    const address = normaliseEmail(email as string);
    if (!address.endsWith("@gmail.com")) {
      return NextResponse.json({ message: "Please use a Gmail address." }, { status: 400 });
    }
    if (await waitlistEmailExists(address)) {
      return NextResponse.json({ message: "This email is already confirmed on the waitlist." }, { status: 409 });
    }

    const code = createOtp();
    await supabaseRpc("prepare_waitlist_otp", {
      p_name: (name as string).trim(),
      p_email: address,
      p_purpose: typeof purpose === "string" && purpose.trim() ? purpose.trim() : null,
      p_code_hash: hashOtp(code),
    });

    await sendWaitlistEmail({
      to: address,
      subject: "Your Q-RETIX AI waitlist verification code",
      text: `Your Q-RETIX AI verification code is ${code}. It expires in 10 minutes. If you did not request this, you can ignore this email.`,
      html: waitlistEmailTemplate({ title: "Verify your email", preview: `Your Q-RETIX AI verification code is ${code}.`, body: "Use the code below to confirm your place on the Q-RETIX AI waitlist.", code, name: (name as string).trim() }),
    });

    return NextResponse.json({ message: "Verification code sent." });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "";
    if (detail.includes("already confirmed on the waitlist")) return NextResponse.json({ message: "This email is already confirmed on the waitlist." }, { status: 409 });
    if (detail.includes("Please wait")) return NextResponse.json({ message: "Please wait a minute before requesting another code." }, { status: 429 });
    if (detail.includes("Gmail is temporarily unavailable")) return NextResponse.json({ message: detail }, { status: 503 });
    console.error("Waitlist OTP request failed", error);
    return NextResponse.json({ message: "We could not send a code right now. Please try again." }, { status: 500 });
  }
}
