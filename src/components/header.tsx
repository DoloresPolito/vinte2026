"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useLenis } from "lenis/react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#estudio", label: "Estudio" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const SMOOTH_EASE = [0.65, 0, 0.35, 1] as const;

const linkContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.45 } },
};

const linkItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const noopSubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

export default function Header() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useMounted();
  const lenis = useLenis();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 760);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (menuOpen) lenis.stop();
    else lenis.start();
  }, [menuOpen, lenis]);

  const paddingBlock = useTransform(scrollY, [0, 260], [30, 14]);
  const logoSize = useTransform(scrollY, [0, 260], isMobile ? [15, 13] : [26, 18]);
  const bgOpacity = useTransform(scrollY, [0, 260], [0.6, 0.94]);
  const shadowOpacity = useTransform(scrollY, [0, 260], [0, 0.06]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="site-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        paddingTop: paddingBlock,
        paddingBottom: paddingBlock,
        background: useTransform(bgOpacity, (v) => `rgba(245,243,237,${v})`),
        backdropFilter: "blur(14px)",
        boxShadow: useTransform(shadowOpacity, (v) => `0 8px 30px -12px rgba(27,28,23,${v})`),
      }}
    >
      <div className="site-header-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <motion.div style={{ display: "flex", alignItems: "baseline", gap: 9, fontSize: logoSize, letterSpacing: "0.22em" }}>
          <span style={{ fontWeight: 500 }}>VINTE</span>
          <span style={{ fontWeight: 300, color: "var(--color-fg-label)" }}>STUDIO</span>
        </motion.div>

        <nav className="site-nav" style={{ fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="#contacto" className="btn btn-invert btn-sm">
            Hablemos
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }} transition={{ duration: 0.25, ease: EASE }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.2 }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }} transition={{ duration: 0.25, ease: EASE }} />
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="mobile-menu-overlay"
                initial={{ clipPath: "circle(0% at calc(100% - 34px) 34px)" }}
                animate={{ clipPath: "circle(150% at calc(100% - 34px) 34px)" }}
                exit={{ clipPath: "circle(0% at calc(100% - 34px) 34px)" }}
                transition={{ duration: 1.1, ease: SMOOTH_EASE }}
              >
                <motion.nav className="mobile-menu" variants={linkContainer} initial="hidden" animate="show" exit="hidden">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={closeMenu}
                      variants={linkItem}
                    >
                      <span className="mobile-nav-index">0{i + 1}</span>
                      {link.label}
                    </motion.a>
                  ))}
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.header>
  );
}
