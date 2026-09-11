"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n/language-context";

const icons = [
  "/icons/services/diseno-web.svg",
  "/icons/services/implementacion.svg",
  "/icons/services/dashboards.svg",
  "/icons/services/sistemas-de-diseno.svg",
  "/icons/services/performance.svg",
  "/icons/services/mantenimiento.svg",
];

export default function Servicios() {
  const { t } = useLanguage();
  const servicios = t.servicios.items.map((s, i) => ({ ...s, icon: icons[i] }));

  return (
    <section id="servicios" className="section-xl" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="servicios-intro" style={{ display: "grid", alignItems: "end", marginBottom: 72 }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 26 }}>{t.servicios.eyebrow}</div>
          <h2
            className="heading-46"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: "-0.015em",
              margin: 0,
              maxWidth: 660,
            }}
          >
            {t.servicios.titlePre}
            <em style={{ color: "var(--color-accent)" }}>{t.servicios.titleEm}</em>
            {t.servicios.titlePost}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "var(--color-fg-muted)", margin: 0 }}>
            {t.servicios.intro}
          </p>
        </Reveal>
      </div>

      <RevealGroup className="servicios-grid" style={{ display: "grid", borderTop: "1px solid var(--color-border-strong)" }}>
        {servicios.map((s) => (
          <RevealItem
            key={s.num}
            className="service-card"
            style={{
              borderBottom: "1px solid var(--color-border-strong)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--color-fg-faint)", fontWeight: 300 }}>
                {s.num}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt="" className="service-icon" style={{ width: 64, height: 64, opacity: 0.9 }} />
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 23, margin: 0, letterSpacing: "-0.01em" }}>
              {s.title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-fg-muted)", margin: 0, maxWidth: 290 }}>
              {s.body}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
