const servicios = [
  {
    num: "01",
    title: "Diseño web",
    body: "Sitios y landings diseñadas desde cero: arquitectura, contenido y interfaz.",
    icon: "/icons/services/diseno-web.svg",
  },
  {
    num: "02",
    title: "Implementación",
    body: "Llevamos el diseño a producción, propio o de tu equipo, con código limpio.",
    icon: "/icons/services/implementacion.svg",
  },
  {
    num: "03",
    title: "Dashboards y plataformas",
    body: "Paneles internos, tablas densas, flujos con datos reales y estados de carga.",
    icon: "/icons/services/dashboards.svg",
  },
  {
    num: "04",
    title: "Sistemas de diseño",
    body: "Componentes documentados para que el producto crezca sin perder consistencia.",
    icon: "/icons/services/sistemas-de-diseno.svg",
  },
  {
    num: "05",
    title: "Performance y SEO técnico",
    body: "Core Web Vitals, accesibilidad y métricas medibles antes y después.",
    icon: "/icons/services/performance.svg",
  },
  {
    num: "06",
    title: "Mantenimiento",
    body: "Soporte mensual, mejoras continuas y monitoreo del sitio en producción.",
    icon: "/icons/services/mantenimiento.svg",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="section-xl" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="servicios-intro" style={{ display: "grid", alignItems: "end", marginBottom: 72 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 26 }}>01 · Servicios</div>
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
            Diseño, implementación y <em style={{ color: "var(--color-accent)" }}>sistemas</em> para
            productos digitales.
          </h2>
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "var(--color-fg-muted)", margin: 0 }}>
          Trabajamos de punta a punta o nos integramos a tu equipo en la etapa donde más falta hace.
        </p>
      </div>

      <div className="servicios-grid" style={{ display: "grid", borderTop: "1px solid var(--color-border-strong)" }}>
        {servicios.map((s) => (
          <div
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
              <img src={s.icon} alt="" style={{ width: 64, height: 64, opacity: 0.9 }} />
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 23, margin: 0, letterSpacing: "-0.01em" }}>
              {s.title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-fg-muted)", margin: 0, maxWidth: 290 }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
