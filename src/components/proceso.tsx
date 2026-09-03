"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const proceso = [
  {
    num: "01",
    title: "Escuchar",
    body: "Entendemos el negocio, los usuarios y las restricciones técnicas.",
    icon: "/icons/process/01-escuchar.svg",
  },
  {
    num: "02",
    title: "Definir",
    body: "Alcance, prioridades y criterios de éxito por escrito.",
    icon: "/icons/process/02-definir.svg",
  },
  {
    num: "03",
    title: "Prototipar",
    body: "Diseño navegable para validar antes de escribir código.",
    icon: "/icons/process/03-prototipar.svg",
  },
  {
    num: "04",
    title: "Construir",
    body: "Implementación por etapas, con entornos de prueba visibles.",
    icon: "/icons/process/04-construir.svg",
  },
  {
    num: "05",
    title: "Iterar",
    body: "Lanzamos, medimos y ajustamos con datos de uso real.",
    icon: "/icons/process/05-iterar.svg",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="proceso-section"
      style={{
        borderBottom: "1px solid var(--color-border)",
        backgroundImage:
          "linear-gradient(100deg, rgba(245,243,237,0.95) 0%, rgba(245,243,237,0.86) 30%, rgba(245,243,237,0.5) 55%, rgba(245,243,237,0.18) 75%, rgba(245,243,237,0.05) 100%), url(/icons/process.png)",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="proceso-grid" style={{ display: "grid" }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 22 }}>03 · Proceso</div>
          <h2
            className="heading-40"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 1.14,
              margin: "0 0 20px",
              letterSpacing: "-0.015em",
            }}
          >
            De una idea<br />
            a algo <em style={{ color: "var(--color-accent)" }}>que funciona.</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "var(--color-border-heavy)", marginBottom: 18 }} />
          <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "var(--color-fg-muted)", margin: 0, maxWidth: 280 }}>
            Un proceso claro para transformar ideas en productos digitales que resuelven y evolucionan.
          </p>
        </Reveal>

        <div>
          <div className="proceso-icons-row">
            {proceso.map((p, i) => (
              <div key={p.num} className="proceso-icon-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.icon} alt="" className="service-icon" style={{ width: 64, height: 64, flexShrink: 0 }} />
                {i < proceso.length - 1 && (
                  <div className="proceso-arrow">
                    <span className="proceso-arrow-line" />
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M0.5 4h8M5.5 0.5L9 4l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <RevealGroup className="proceso-steps" style={{ display: "grid" }}>
            {proceso.map((p) => (
              <RevealItem key={p.num} className="proceso-step-copy">
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 300, color: "var(--color-fg-faint)" }}>
                  {p.num}
                </div>
                <div style={{ width: 16, height: 1, background: "var(--color-border-heavy)", margin: "8px 0 12px" }} />
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 19, marginBottom: 8 }}>{p.title}</div>
                <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "var(--color-fg-muted)", margin: 0 }}>{p.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
