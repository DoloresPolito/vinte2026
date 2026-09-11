"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Contacto() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="section-xl" style={{ background: "var(--color-accent)", color: "var(--color-accent-fg)" }}>
      <div className="contacto-grid" style={{ display: "grid", alignItems: "end" }}>
        <Reveal>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.7, marginBottom: 30 }}>
            {t.contacto.eyebrow}
          </div>
          <h2
            className="contacto-title"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              margin: "0 0 34px",
            }}
          >
            {t.contacto.titleLine1}<br />
            {t.contacto.titleLine2Pre}
            <em>{t.contacto.titleLine2Em}</em>
            {t.contacto.titleLine2Post}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, opacity: 0.85, maxWidth: 420, margin: "0 0 44px" }}>
            {t.contacto.body}
          </p>
          <a
            href="mailto:info@vintestudio.com"
            className="contacto-email"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              maxWidth: 460,
              paddingBottom: 16,
              borderBottom: "1px solid rgba(240,238,228,0.4)",
              color: "var(--color-accent-fg)",
            }}
          >
            info@vintestudio.com
            <svg width="30" height="12" viewBox="0 0 30 12" fill="none">
              <path d="M0 6h27M23 1l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
        <Reveal delay={0.1} style={{ display: "grid", gap: 28 }}>
          {t.contacto.info.map((c) => (
            <div key={c.label}>
              <div style={{ fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.65, marginBottom: 10 }}>
                {c.label}
              </div>
              <div style={{ fontSize: 16, whiteSpace: "pre-line" }}>{c.value}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
