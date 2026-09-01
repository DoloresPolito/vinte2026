"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Estudio() {
  const reduced = useReducedMotion();

  return (
    <section id="estudio" className="estudio-section" style={{ display: "grid", borderBottom: "1px solid var(--color-border)" }}>
      <Reveal className="section-lg" style={{ background: "var(--color-bg-alt)" }}>
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
            maxWidth: 460,
            borderTop: "1px solid var(--color-border-strong)",
            paddingTop: 28,
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 10 }}>Cómo trabajamos</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-fg-subtle)" }}>
            Por proyecto cerrado o retainer mensual.
          </div>
        </div>
      </Reveal>
      <div className="estudio-image" style={{ position: "relative", minHeight: 520, background: "var(--color-bg-card)", overflow: "hidden" }}>
        <motion.div
          className="image-placeholder"
          initial={reduced ? undefined : { scale: 1.1, opacity: 0 }}
          whileInView={reduced ? undefined : { scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={reduced ? undefined : { duration: 1, ease: EASE }}
        >
          Foto del estudio o del equipo
        </motion.div>
      </div>
    </section>
  );
}
