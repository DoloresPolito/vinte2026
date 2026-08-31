const clientes = ["Northbay", "Quantia", "Meridian", "Vela", "Cobalt", "Astra"];

export default function Clientes() {
  return (
    <section className="section-sm" style={{ background: "var(--color-accent)", color: "var(--color-accent-fg)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
        <div style={{ fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.72 }}>
          Confían en el estudio
        </div>
        <div className="clientes-row" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          {clientes.map((c) => (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: 12, opacity: 0.9 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10.5" stroke="currentColor" />
                <circle cx="11" cy="11" r="3.5" fill="currentColor" />
              </svg>
              <span style={{ fontSize: 15, letterSpacing: "0.12em" }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
