"use client";

import { Reveal } from "@/components/motion/reveal";

const ACCENT_LIGHT = "#BEC97A";

const STATS = [
  { n: "01", label: "Diseño + desarrollo en el mismo equipo." },
  { n: "02", label: "Comunicación directa, sin intermediarios." },
  { n: "03", label: "Pensado para durar, no solo para lanzar." },
];

export default function Estudio() {
  return (
    <section
      id="estudio"
      className="estudio-section"
      style={{
        display: "grid",
        borderBottom: "1px solid var(--color-border)",
        backgroundImage:
          "linear-gradient(105deg, rgba(27,28,23,0.94) 0%, rgba(27,28,23,0.82) 32%, rgba(27,28,23,0.4) 58%, rgba(27,28,23,0) 78%), url(/icons/studio.png)",
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "left, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <Reveal className="section-lg" style={{ color: "var(--color-dark-fg)" }}>
        <div className="eyebrow" style={{ marginBottom: 14, color: "var(--color-dark-fg)" }}>
          04 · El estudio
        </div>
        <div style={{ width: 40, height: 1, background: "var(--color-dark-fg)", opacity: 0.4, marginBottom: 30 }} />
        <h2
          className="heading-40"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: 55,
            lineHeight: 1.12,
            margin: "0 0 28px",
            letterSpacing: "-0.015em",
            color: "var(--color-bg)",
            textWrap: "pretty",
          }}
        >
          Detrás de cada proyecto,
          <br />
          <em style={{ color: ACCENT_LIGHT, fontStyle: "italic" }}>estamos nosotros.</em>
        </h2>
        <div style={{ width: 56, height: 1, background: "rgba(217,215,204,0.3)", marginBottom: 28 }} />
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(217,215,204,0.85)", margin: "0 0 20px", maxWidth: 460 }}>
          Trabajamos cerca de cada proyecto, desde las primeras decisiones hasta que está funcionando en producción.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(217,215,204,0.85)", margin: "0 0 20px", maxWidth: 460 }}>
          Diseño y desarrollo conviven en el mismo equipo. Sin capas innecesarias, con comunicación directa y
          atención real al detalle.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(217,215,204,0.85)", margin: "0 0 40px", maxWidth: 460 }}>
          Podemos encargarnos del producto de punta a punta o sumarnos donde tu equipo nos necesite.
        </p>
        <a
          href="#proceso"
          className="eyebrow"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "var(--color-bg)",
            borderBottom: "1px solid rgba(217,215,204,0.4)",
            paddingBottom: 8,
            marginBottom: 56,
          }}
        >
          Conocé cómo trabajamos
          <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
            <path d="M0 4.5h16M12 0.5l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className="estudio-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", maxWidth: 560 }}>
          {STATS.map((s) => (
            <div key={s.n} className="estudio-stat">
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  fontSize: 34,
                  color: ACCENT_LIGHT,
                  marginBottom: 10,
                }}
              >
                {s.n}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(217,215,204,0.85)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
