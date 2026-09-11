"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBrief(data: { sentence: string; email: string }) {
  const sentence = String(data.sentence ?? "").slice(0, 500);
  const email = String(data.email ?? "").slice(0, 200);

  if (!sentence || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, error: "invalid" as const };
  }

  const { error } = await resend.emails.send({
    from: "Vinte Studio <onboarding@resend.dev>",
    to: "info@vintestudio.com",
    replyTo: email,
    subject: "Nuevo brief desde el sitio",
    text: `${sentence}\n\nEmail de contacto: ${email}`,
  });

  if (error) {
    return { ok: false as const, error: "send_failed" as const };
  }

  return { ok: true as const };
}
