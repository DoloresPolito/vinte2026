const links = [
  { label: "Instagram", href: "#contacto" },
  { label: "LinkedIn", href: "#contacto" },
  { label: "Behance", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        flexWrap: "wrap",
        background: "var(--color-dark)",
        color: "var(--color-dark-fg)",
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, letterSpacing: "0.22em", fontSize: 14 }}>
        <span style={{ fontWeight: 500, color: "var(--color-bg)" }}>VINTE</span>
        <span style={{ fontWeight: 300 }}>STUDIO</span>
      </div>
      <div>© 2026 · Buenos Aires, Argentina</div>
      <div style={{ display: "flex", gap: 28 }}>
        {links.map((link) => (
          <a key={link.label} href={link.href} style={{ color: "var(--color-dark-fg)" }}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
