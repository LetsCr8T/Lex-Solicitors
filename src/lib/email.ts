export interface ConsultationPayload {
  fullName: string;
  email: string;
  phone?: string;
  practiceArea?: string;
  message: string;
}

const isConfigured = Boolean(
  process.env.ZOHO_USER &&
  process.env.ZOHO_APP_PASSWORD &&
  process.env.CONTACT_TO_EMAIL,
);

/**
 * Send a consultation enquiry.
 *
 * SAFE without credentials: when the Zoho env vars are not set (or the transport
 * below is not yet implemented) it logs the payload server-side and resolves, so
 * the form flow is demoable now.
 *
 * TODO: wire the real transport (Nodemailer + Zoho SMTP, or Resend) in the
 * marked block below — this is the ONLY file that needs to change; the API
 * route and the form stay the same.
 */
export async function sendConsultationEmail(
  payload: ConsultationPayload,
): Promise<void> {
  if (!isConfigured) {
    console.warn(
      "Email transport not configured — submission logged, not sent",
    );
    console.info("Consultation enquiry:", payload);
    return;
  }

  // ── TODO: real email transport goes HERE ──────────────────────────────────
  // import nodemailer from "nodemailer";
  // const transport = nodemailer.createTransport({
  //   host: process.env.ZOHO_SMTP_HOST,
  //   port: Number(process.env.ZOHO_SMTP_PORT),
  //   secure: process.env.ZOHO_SMTP_SECURE === "true",
  //   auth: { user: process.env.ZOHO_USER, pass: process.env.ZOHO_APP_PASSWORD },
  // });
  // await transport.sendMail({
  //   from: process.env.CONTACT_FROM_EMAIL,
  //   to: process.env.CONTACT_TO_EMAIL,
  //   replyTo: payload.email,
  //   subject: `Consultation request — ${payload.fullName}`,
  //   text: `${payload.fullName} <${payload.email}>\n\n${payload.message}`,
  // });
  // ──────────────────────────────────────────────────────────────────────────

  console.warn(
    "Email transport not yet implemented — submission logged, not sent",
  );
  console.info("Consultation enquiry:", payload);
}
