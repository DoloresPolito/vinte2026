export default function Estudio() {
  return (
    <section id="estudio" className="estudio-section" style={{ display: "grid", borderBottom: "1px solid var(--color-border)" }}>
      <div className="section-lg" style={{ background: "var(--color-bg-alt)" }}>
        <div className="eyebrow" style={{ marginBottom: 26 }}>04 · El estudio</div>
        <h2
          className="heading-40"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            lineHeight: 1.12,
            margin: "0 0 28px",
            letterSpacing: "-0.015em",
          }}
        >
          Somos <em style={{ color: "var(--color-accent)" }}>Vinte Studio</em>.
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-fg-subtle)", margin: "0 0 20px", maxWidth: 460 }}>
          Un estudio independiente con base en Buenos Aires. Diseñamos e implementamos la web de empresas
          que necesitan algo mejor que una plantilla: sitios rápidos, plataformas internas y dashboards
          que su equipo usa todos los días.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-fg-subtle)", margin: "0 0 40px", maxWidth: 460 }}>
          Equipos chicos, comunicación directa y código que otro equipo puede mantener.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            maxWidth: 460,
            borderTop: "1px solid var(--color-border-strong)",
            paddingTop: 28,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Cómo trabajamos</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-fg-subtle)" }}>
              Por proyecto cerrado o retainer mensual.
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Stack</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-fg-subtle)" }}>
              Next.js, React, Webflow, headless CMS.
            </div>
          </div>
        </div>
      </div>
      <div className="estudio-image" style={{ position: "relative", minHeight: 520, background: "var(--color-bg-card)" }}>
        <div className="image-placeholder">Foto del estudio o del equipo</div>
      </div>
    </section>
  );
}
