"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="hero-section"
      style={{
        display: "grid",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <motion.div
        className="hero-copy"
        style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        variants={reduced ? undefined : container}
        initial={reduced ? undefined : "hidden"}
        animate={reduced ? undefined : "show"}
      >
        <div>
          <motion.div className="eyebrow" style={{ marginBottom: "clamp(16px, 4vh, 40px)" }} variants={item}>
            Estudio de diseño e implementación web
          </motion.div>
          <motion.h1
            className="hero-title"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: "0 0 clamp(16px, 3vh, 34px)",
              textWrap: "pretty",
            }}
            variants={item}
          >
            Diseñamos e<br />
            implementamos<br />
            productos web<br />
            <em style={{ color: "var(--color-accent)" }}>que funcionan.</em>
          </motion.h1>
          <motion.div
            style={{ width: 56, height: 1, background: "var(--color-border-heavy)", marginBottom: "clamp(14px, 3vh, 28px)" }}
            variants={item}
          />
          <motion.p
            style={{ maxWidth: 430, fontSize: 15.5, lineHeight: 1.75, color: "var(--color-fg-muted)", margin: "0 0 clamp(20px, 4vh, 44px)" }}
            variants={item}
          >
            Desde el diseño de la interfaz hasta la puesta en producción: sitios, plataformas y dashboards
            construidos con criterio técnico y atención al detalle.
          </motion.p>
          <motion.div style={{ display: "flex", gap: 14, flexWrap: "wrap" }} variants={item}>
            <a href="#proyectos" className="btn btn-accent">
              Ver proyectos
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#servicios" className="btn btn-outline">
              Qué hacemos
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero-scroll-indicator"
          style={{ display: "flex", alignItems: "flex-end", gap: 16, marginTop: "clamp(20px, 5vh, 64px)", fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-fg-label)" }}
          variants={item}
        >
          <motion.svg
            width="14"
            height="40"
            viewBox="0 0 14 40"
            fill="none"
            animate={reduced ? undefined : { y: [0, 5, 0] }}
            transition={reduced ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M7 0v34M1 28l6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
          <span style={{ paddingBottom: 4 }}>Scroll</span>
        </motion.div>
      </motion.div>
      <div className="hero-image" style={{ position: "relative", background: "var(--color-bg-alt)", overflow: "hidden" }}>
        <motion.div
          className="image-placeholder"
          initial={reduced ? undefined : { scale: 1.08, opacity: 0 }}
          animate={reduced ? undefined : { scale: 1, opacity: 1 }}
          transition={reduced ? undefined : { duration: 1.1, ease: EASE }}
        >
          Imagen de portada — atmosférica, luz cálida
        </motion.div>
      </div>
    </section>
  );
}
