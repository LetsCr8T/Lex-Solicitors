import { NextResponse } from "next/server";
import { z } from "zod";
import { sendConsultationEmail } from "@/lib/email";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .regex(EMAIL_RE, "Please enter a valid email address."),
  phone: z.string().trim().optional(),
  practiceArea: z.string().trim().optional(),
  message: z.string().trim().min(1, "Please tell us how we can help."),
  company: z.string().optional(), // honeypot
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json({ errors }, { status: 422 });
  }

  const { company, ...payload } = parsed.data;
  // Honeypot filled → looks like a bot; accept silently without sending.
  if (company) return NextResponse.json({ ok: true }, { status: 200 });

  try {
    await sendConsultationEmail(payload);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Consultation email failed:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
