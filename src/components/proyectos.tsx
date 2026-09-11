"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n/language-context";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 42, damping: 16, mass: 1 },
  },
};

type FilterKey = "all" | "web" | "platforms" | "dashboards";

export default function Proyectos() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");
  const reduced = useReducedMotion();

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.proyectos.filters.all },
    { key: "web", label: t.proyectos.filters.web },
    { key: "platforms", label: t.proyectos.filters.platforms },
    { key: "dashboards", label: t.proyectos.filters.dashboards },
  ];

  const items = t.proyectos.items.filter((p) => filter === "all" || p.category === filter);

  return (
    <section
      id="proyectos"
      className="proyectos-section"
      style={{ background: "var(--color-dark)", color: "var(--color-dark-fg)", borderBottom: "1px solid var(--color-border)" }}
    >
      <Reveal className="proyectos-intro">
        <div className="eyebrow" style={{ color: "var(--color-dark-fg)", marginBottom: 22 }}>
          {t.proyectos.eyebrow}
        </div>
        <h2
          className="heading-46"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            margin: "0 0 20px",
            color: "var(--color-bg)",
            textWrap: "pretty",
          }}
        >
          {t.proyectos.title}
          <br />
          <em style={{ color: "var(--color-accent-light)", fontStyle: "italic" }}>{t.proyectos.titleEm}</em>
        </h2>
        <p style={{ maxWidth: 460, fontSize: 14.5, lineHeight: 1.75, color: "rgba(217,215,204,0.8)", margin: "0 0 32px" }}>
          {t.proyectos.intro}
        </p>
        <div className="proyectos-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={filter === f.key ? "proyectos-filter is-active" : "proyectos-filter"}
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {filter === f.key && <span className="proyectos-filter-dot" aria-hidden="true" />}
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div
        key={filter}
        className="proyectos-list"
        variants={reduced ? undefined : listVariants}
        initial={reduced ? undefined : "hidden"}
        animate={reduced ? undefined : "show"}
      >
        {items.map((p, i) => (
          <motion.div key={p.slug} className="proyecto-item" variants={reduced ? undefined : listItemVariants}>
            <div className="proyecto-num">{String(i + 1).padStart(2, "0")}</div>
            <div className="proyecto-item-row">
              <div className="proyecto-media" aria-hidden="true">
                <span className="proyecto-media-mark">{p.title.charAt(0)}</span>
              </div>
              <div className="proyecto-info">
                <div className="proyecto-sector">{p.sector}</div>
                <h3 className="proyecto-item-title">{p.title}</h3>
                <p className="proyecto-item-desc">{p.description}</p>
                <a href="#" className="proyecto-link">
                  {t.proyectos.ctaLabel}
                  <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
                    <path d="M0 4.5h16M12 0.5l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
        {items.length === 0 && <p className="proyectos-empty">{t.proyectos.emptyState}</p>}
      </motion.div>
    </section>
  );
}
