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
    <section id="proceso" className="section-xl" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="proceso-grid" style={{ display: "grid" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 26 }}>03 · Proceso</div>
          <h2
            className="heading-40"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 1.12,
              margin: "0 0 22px",
              letterSpacing: "-0.015em",
            }}
          >
            Cinco etapas, <em style={{ color: "var(--color-accent)" }}>sin sorpresas</em>.
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--color-fg-muted)", margin: 0, maxWidth: 300 }}>
            Cada etapa cierra con algo revisable: un documento, un prototipo o un entorno funcionando.
          </p>
        </div>

        <div className="proceso-steps" style={{ display: "grid", gap: 24, alignItems: "start" }}>
          {proceso.map((p) => (
            <div key={p.num} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.icon} alt="" style={{ width: 56, height: 56 }} />
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 300, color: "var(--color-fg-faint)" }}>
                {p.num}
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 20 }}>{p.title}</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-fg-muted)", margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
