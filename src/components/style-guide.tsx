const swatches = [
  { name: "Fondo", var: "--color-bg", value: "#F5F3ED" },
  { name: "Fondo alt", var: "--color-bg-alt", value: "#EDEAE0" },
  { name: "Fondo card", var: "--color-bg-card", value: "#E4E2D6" },
  { name: "Texto", var: "--color-fg", value: "#1B1C17" },
  { name: "Texto muted", var: "--color-fg-muted", value: "#4A4B42" },
  { name: "Label", var: "--color-fg-label", value: "#6A6C60" },
  { name: "Acento", var: "--color-accent", value: "#4E5B34" },
  { name: "Oscuro (footer)", var: "--color-dark", value: "#1B1C17" },
];

export default function StyleGuide() {
  return (
    <div className="section-lg" style={{ maxWidth: 900 }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>
        Vinte Studio — Guía de estilo
      </div>

      <h1
        className="heading-56"
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          margin: "0 0 40px",
        }}
      >
        Diseñamos e implementamos <em style={{ color: "var(--color-accent)" }}>productos web</em>.
      </h1>

      <section style={{ marginBottom: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Colores</div>
        <div className="swatch-grid" style={{ display: "grid", gap: 16 }}>
          {swatches.map((s) => (
            <div key={s.var}>
              <div
                style={{
                  height: 64,
                  borderRadius: 8,
                  background: `var(${s.var})`,
                  border: "1px solid var(--color-border-strong)",
                }}
              />
              <div style={{ fontSize: 12, marginTop: 8 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "var(--color-fg-label)" }}>{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Tipografía — Newsreader (títulos)</div>
        <div style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 46 }}>
          Trabajo reciente.
        </div>
        <div style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic", fontSize: 46, color: "var(--color-accent)" }}>
          Que funcionan.
        </div>
      </section>

      <section>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Tipografía — Jost (cuerpo / UI)</div>
        <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--color-fg-muted)", maxWidth: 460, marginBottom: 12 }}>
          Desde el diseño de la interfaz hasta la puesta en producción: sitios, plataformas y dashboards
          construidos con criterio técnico y atención al detalle.
        </p>
        <div style={{ fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Ver proyectos
        </div>
      </section>
    </div>
  );
}
