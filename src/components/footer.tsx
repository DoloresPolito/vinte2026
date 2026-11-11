"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { InstagramIcon, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/components/instagram";

export default function Footer() {
  const { t } = useLanguage();

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
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-social">
        <InstagramIcon size={14} />
        @{INSTAGRAM_HANDLE}
      </a>
      <div>{t.footer.copy}</div>
    </footer>
  );
}
