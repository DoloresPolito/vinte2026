"use client";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Filosofia() {
  const { t } = useLanguage();

  return (
    <section className="section-lg" style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border)" }}>
      <RevealGroup className="filosofia-grid" style={{ display: "grid" }}>
        <RevealItem>
          <div className="eyebrow" style={{ marginBottom: 24 }}>{t.filosofia.eyebrow}</div>
          <h2
            className="heading-38"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 1.14,
              margin: 0,
              letterSpacing: "-0.015em",
            }}
          >
            {t.filosofia.titlePre}
            <em style={{ color: "var(--color-accent)" }}>{t.filosofia.titleEm}</em>
            {t.filosofia.titlePost}
          </h2>
        </RevealItem>
        {t.filosofia.items.map((f) => (
          <RevealItem key={f} style={{ paddingTop: 6 }}>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: "var(--color-fg-subtle)", margin: 0 }}>{f}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
