export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        display: "grid",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="hero-copy" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 40 }}>
            Estudio de diseño e implementación web
          </div>
          <h1
            className="hero-title"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: "0 0 34px",
              textWrap: "pretty",
            }}
          >
            Diseñamos e<br />
            implementamos<br />
            productos web<br />
            <em style={{ color: "var(--color-accent)" }}>que funcionan.</em>
          </h1>
          <div style={{ width: 56, height: 1, background: "var(--color-border-heavy)", marginBottom: 28 }} />
          <p style={{ maxWidth: 430, fontSize: 15.5, lineHeight: 1.75, color: "var(--color-fg-muted)", margin: "0 0 44px" }}>
            Desde el diseño de la interfaz hasta la puesta en producción: sitios, plataformas y dashboards
            construidos con criterio técnico y atención al detalle.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#proyectos" className="btn btn-accent">
              Ver proyectos
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#servicios" className="btn btn-outline">
              Qué hacemos
            </a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginTop: 64, fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-fg-label)" }}>
          <svg width="14" height="40" viewBox="0 0 14 40" fill="none">
            <path d="M7 0v34M1 28l6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ paddingBottom: 4 }}>Scroll</span>
        </div>
      </div>
      <div className="hero-image" style={{ position: "relative", background: "var(--color-bg-alt)" }}>
        <div className="image-placeholder">Imagen de portada — atmosférica, luz cálida</div>
      </div>
    </section>
  );
}
