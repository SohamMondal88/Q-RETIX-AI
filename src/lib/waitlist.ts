import { createHash, randomInt } from "node:crypto";
import path from "node:path";
import nodemailer from "nodemailer";

export const waitlistSchema = {
  name: (value: unknown) => typeof value === "string" && value.trim().length >= 2 && value.trim().length <= 120,
  email: (value: unknown) => typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254,
  purpose: (value: unknown) => value === undefined || value === null || (typeof value === "string" && value.length <= 1_000),
};

export function normaliseEmail(email: string) {
  return email.trim().toLowerCase();
}

export function hashOtp(code: string) {
  return createHash("sha256").update(code).digest("hex");
}

export function createOtp() {
  return randomInt(100_000, 1_000_000).toString();
}

function env(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function supabaseRpc<T>(functionName: string, body: Record<string, unknown>): Promise<T> {
  const response = await fetch(`${env("SUPABASE_URL")}/rest/v1/rpc/${functionName}`, {
    method: "POST",
    headers: {
      apikey: env("SUPABASE_SERVICE_ROLE_KEY"),
      Authorization: `Bearer ${env("SUPABASE_SERVICE_ROLE_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export async function waitlistEmailExists(email: string) {
  const response = await fetch(`${env("SUPABASE_URL")}/rest/v1/waitlist_entries?email=eq.${encodeURIComponent(email)}&select=id`, {
    headers: { apikey: env("SUPABASE_SERVICE_ROLE_KEY"), Authorization: `Bearer ${env("SUPABASE_SERVICE_ROLE_KEY")}` },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(await response.text());
  const entries = await response.json() as { id: string }[];
  return entries.length > 0;
}

export async function sendWaitlistEmail({ to, subject, text, html }: { to: string; subject: string; text: string; html: string }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env("GMAIL_USER"),
      pass: env("GMAIL_APP_PASSWORD").replace(/\s/g, ""),
    },
  });

  try {
    await transporter.sendMail({
      from: `Q-RETIX AI <${env("GMAIL_USER")}>`,
      to,
      subject,
      text,
      html,
      attachments: [{ filename: "q-retix-logo.png", path: path.join(process.cwd(), "public", "q-retix-logo.png"), cid: "qretix-logo" }],
    });
  } catch (error) {
    if (typeof error === "object" && error && "responseCode" in error && error.responseCode === 421) {
      throw new Error("Gmail is temporarily unavailable. Please wait a few minutes and request a new code.");
    }
    throw error;
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] as string);
}

export function waitlistEmailTemplate({ title, preview, body, code, name }: { title: string; preview: string; body: string; code?: string; name?: string | null }) {
  const greeting = name ? `Hi ${escapeHtml(name)},` : "Hi there,";
  const codeBlock = code ? `<div style="margin:30px 0;border:1px solid #d0e0e8;border-radius:16px;background:#f3f7fa;padding:22px;text-align:center"><div style="color:#5a6b82;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase">Your verification code</div><div style="margin-top:12px;color:#1d3553;font-family:monospace;font-size:32px;font-weight:700;letter-spacing:8px">${code}</div></div><p style="margin:0;color:#718096;font-size:13px;line-height:20px">This code expires in 10 minutes. If you did not request it, you can safely ignore this email.</p>` : "";
  return `<!doctype html><html><body style="margin:0;background:#f3f7fa;color:#33415c;font-family:Arial,Helvetica,sans-serif"><div style="display:none;max-height:0;overflow:hidden">${escapeHtml(preview)}</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f7fa;padding:32px 12px"><tr><td align="center"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;overflow:hidden;border:1px solid #d5e4ea;border-radius:24px;background:#ffffff"><tr><td style="background:#1d3553;padding:28px 36px"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="padding-right:12px"><img src="cid:qretix-logo" width="40" height="40" alt="Q-RETIX AI" style="display:block;border-radius:10px" /></td><td style="color:#ffffff;font-size:16px;font-weight:700;letter-spacing:.2px">Q-RETIX AI</td></tr></table></td></tr><tr><td style="padding:38px 36px"><div style="color:#4c7b70;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase">Early access</div><h1 style="margin:12px 0 18px;color:#1a2942;font-size:28px;line-height:36px;letter-spacing:-.5px">${escapeHtml(title)}</h1><p style="margin:0;color:#33415c;font-size:16px;line-height:25px">${greeting}</p><p style="margin:16px 0 0;color:#5a6b82;font-size:15px;line-height:24px">${escapeHtml(body)}</p>${codeBlock}</td></tr><tr><td style="border-top:1px solid #dfe9ee;padding:22px 36px;color:#718096;font-size:12px;line-height:18px">Q-RETIX AI · Evidence-aware therapeutic research<br/>Please do not reply to this automated email.</td></tr></table></td></tr></table></body></html>`;
}
