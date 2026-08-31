const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#estudio", label: "Estudio" },
];

export default function Header() {
  return (
    <header
      className="site-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        background: "rgba(245,243,237,0.88)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 9, fontSize: 20, letterSpacing: "0.22em" }}>
        <span style={{ fontWeight: 500 }}>VINTE</span>
        <span style={{ fontWeight: 300, color: "var(--color-fg-label)" }}>STUDIO</span>
      </div>

      <nav className="site-nav" style={{ fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contacto" className="btn btn-invert btn-sm">
        Hablemos
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
          <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </header>
  );
}
