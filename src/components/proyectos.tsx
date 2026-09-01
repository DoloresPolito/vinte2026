"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const proyectos = [
  {
    slug: "northbay",
    title: "Northbay",
    category: "Diseño web, Implementación",
    client: "Northbay",
    year: "2025",
    description:
      "Rediseño y migración a Next.js del sitio de reservas de una cadena de hoteles boutique. Reescribimos el buscador de disponibilidad y el checkout, bajando el tiempo de carga inicial en un 40%.",
    tech: ["Next.js", "React", "Node", "PostgreSQL"],
    shots: ["Home", "Buscador de disponibilidad", "Checkout"],
  },
  {
    slug: "quantia",
    title: "Panel interno Quantia",
    category: "Dashboards y plataformas",
    client: "Quantia",
    year: "2025",
    description:
      "Dashboard interno para el equipo de operaciones: tablas densas con miles de filas, filtros combinados y exportación a excel, con estados de carga y error pensados desde el vamos.",
    tech: ["React", "Node", "Express", "PostgreSQL"],
    shots: ["Vista general", "Tabla de operaciones", "Detalle de registro"],
  },
  {
    slug: "meridian",
    title: "Sitio institucional Meridian",
    category: "Diseño web",
    client: "Meridian",
    year: "2024",
    description:
      "Sitio institucional desde cero para un estudio de arquitectura: arquitectura de contenido, diseño editorial y un sistema simple para que el propio equipo suba proyectos nuevos.",
    tech: ["Next.js", "React", "Motion"],
    shots: ["Home", "Listado de proyectos", "Ficha de proyecto"],
  },
  {
    slug: "vela",
    title: "Sistema de diseño Vela",
    category: "Sistemas de diseño",
    client: "Vela",
    year: "2024",
    description:
      "Librería de componentes documentada para el equipo de producto de Vela: tokens de color y tipografía, componentes base y guías de uso para que el sitio crezca sin perder consistencia.",
    tech: ["React", "Next.js"],
    shots: ["Librería de componentes", "Guía de tokens", "Ejemplo de uso"],
  },
  {
    slug: "cobalt",
    title: "Performance Cobalt",
    category: "Performance y SEO técnico",
    client: "Cobalt",
    year: "2024",
    description:
      "Auditoría y optimización de Core Web Vitals sobre un sitio existente: imágenes, fuentes y JavaScript de terceros. El LCP bajó de 4.1s a 1.6s sin tocar el diseño.",
    tech: ["Next.js", "Node"],
    shots: ["Antes / después de LCP", "Reporte de Lighthouse"],
  },
] as const;

export default function Proyectos() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section id="proyectos" className="section-xl" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="servicios-intro" style={{ display: "grid", alignItems: "end", marginBottom: 72 }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 26 }}>02 · Proyectos</div>
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
            Algunos <em style={{ color: "var(--color-accent)" }}>proyectos</em> recientes.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "var(--color-fg-muted)", margin: 0 }}>
            Un vistazo a trabajos reales: el problema, lo que hicimos y cómo quedó. Tocá un proyecto para ver el detalle.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="proyectos-list" style={{ borderTop: "1px solid var(--color-border-strong)" }}>
        <div className="proyecto-row proyecto-row-head" aria-hidden="true">
          <span className="proyecto-col-title">Proyecto</span>
          <span className="proyecto-col-category">Categoría</span>
          <span className="proyecto-col-client">Cliente</span>
          <span className="proyecto-col-year">Año</span>
        </div>

        {proyectos.map((p) => {
          const open = openSlug === p.slug;
          return (
            <RevealItem key={p.slug}>
              <button
                type="button"
                className="proyecto-row proyecto-row-toggle"
                onClick={() => setOpenSlug(open ? null : p.slug)}
                aria-expanded={open}
              >
                <span className="proyecto-col-title proyecto-title">{p.title}</span>
                <span className="proyecto-col-category">{p.category}</span>
                <span className="proyecto-col-client">{p.client}</span>
                <span className="proyecto-col-year">{p.year}</span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="proyecto-detail">
                      <p>{p.description}</p>
                      <ul className="proyecto-tech">
                        {p.tech.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <div className="proyecto-shots">
                        {p.shots.map((s) => (
                          <div key={s} className="image-placeholder proyecto-shot">
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
