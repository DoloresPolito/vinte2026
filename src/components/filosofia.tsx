"use client";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";

const filosofia = [
  "No perseguimos tendencias. Resolvemos el problema del negocio con la interfaz más simple que lo soporte.",
  "Diseño e implementación son la misma conversación. Nada se define sin saber cómo se va a construir.",
  "Entregamos un proyecto que otro equipo puede leer, mantener y extender sin nosotros.",
];

export default function Filosofia() {
  return (
    <section className="section-lg" style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border)" }}>
      <RevealGroup className="filosofia-grid" style={{ display: "grid" }}>
        <RevealItem>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Cómo pensamos</div>
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
            Una web se juzga <em style={{ color: "var(--color-accent)" }}>cuando anda</em>.
          </h2>
        </RevealItem>
        {filosofia.map((f) => (
          <RevealItem key={f} style={{ paddingTop: 6 }}>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: "var(--color-fg-subtle)", margin: 0 }}>{f}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
