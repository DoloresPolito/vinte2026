"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n/language-context";

// Per-project art in public/images/newproyects/<slug>/: `closed` (800×2000) for the narrow column,
// `open` (1600×2000) for the expanded panel and an optional `logo` that replaces the typed name.
// Until both images exist the panel shows a placeholder.
type ProjectAssets = { closed?: string; open?: string; logo?: string };

const projectAssets: Record<string, ProjectAssets> = {
  annika: {
    closed: "/images/newproyects/annika/close.jpeg",
    open: "/images/newproyects/annika/open.jpeg",
    logo: "/images/newproyects/annika/logo.png",
  },
  "alejandro-polito": {
    closed: "/images/newproyects/alejandro-polito/close.jpeg",
    open: "/images/newproyects/alejandro-polito/open.jpeg",
    logo: "/images/newproyects/alejandro-polito/logo.png",
  },
  cerer: {
    closed: "/images/newproyects/cerer/close.jpeg",
    open: "/images/newproyects/cerer/open.jpeg",
    logo: "/images/newproyects/cerer/logo.png",
  },
  santalum: {
    closed: "/images/newproyects/santalum/close.jpeg",
    open: "/images/newproyects/santalum/open.jpeg",
    logo: "/images/newproyects/santalum/logo.png",
  },
  "793-travel": {
    closed: "/images/newproyects/793-travel/close.jpeg",
    open: "/images/newproyects/793-travel/open.jpeg",
  },
  koibanx: {
    closed: "/images/newproyects/koibank/close.jpeg",
    open: "/images/newproyects/koibank/open.jpeg",
    logo: "/images/newproyects/koibank/logo.png",
  },
  "clinica-rizzo": {
    closed: "/images/newproyects/clinica-rizzo/close.JPG",
    open: "/images/newproyects/clinica-rizzo/open.jpeg",
    logo: "/images/newproyects/clinica-rizzo/logo.png",
  },
  zapata: { closed: "/images/newproyects/zapata/close.JPG", open: "/images/newproyects/zapata/open.JPG" },
};

// How many times wider the hovered panel gets compared to a squeezed sibling. With 5 visible
// columns, 8/3 makes the open panel exactly twice the resting column width (2:5 → 4:5 art).
const OPEN_GROW = 8 / 3;

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 42, damping: 16, mass: 1 },
  },
};

function Arrow() {
  return (
    <svg width="14" height="9" viewBox="0 0 18 9" fill="none" aria-hidden="true">
      <path d="M0 4.5h16M12 0.5l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProyectosGaleria() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const items = t.proyectos.items;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(5);
  const [start, setStart] = useState(0);
  // Single source of truth for the open panel, so hover and keyboard focus can never open two at once.
  const [active, setActive] = useState<number | null>(null);

  // The number of visible columns lives in CSS (--pg-visible, responsive); mirror it here to clamp navigation.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const read = () => setVisible(Number(getComputedStyle(el).getPropertyValue("--pg-visible")) || 5);
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const maxStart = Math.max(0, items.length - visible);
  const current = Math.min(start, maxStart);
  const go = useCallback((dir: 1 | -1) => setStart((s) => Math.max(0, Math.min(maxStart, Math.min(s, maxStart) + dir))), [maxStart]);

  // Opens a panel; if keyboard focus lands on an off-screen one, slide it into the visible window.
  const open = (i: number) => {
    setActive(i);
    if (i < current) setStart(i);
    else if (i >= current + visible) setStart(i - visible + 1);
  };

  return (
    <section
      id="proyectos"
      className="pg-section"
      style={{ background: "var(--color-dark)", color: "var(--color-dark-fg)", borderBottom: "1px solid var(--color-border)" }}
    >
      <Reveal className="pg-header">
        <div className="pg-heading">
          <div className="eyebrow pg-eyebrow">{t.proyectos.eyebrow}</div>
          <h2 className="pg-title">
            {t.proyectos.title}
            <br />
            <em>{t.proyectos.titleEm}</em>
          </h2>
        </div>
        <p className="pg-intro">{t.proyectos.intro}</p>
        <div className="pg-actions">
          <a href="#proyectos" className="pg-view-all">
            {t.proyectos.viewAll}
            <Arrow />
          </a>
        </div>
      </Reveal>

      <div className="pg-viewport" ref={viewportRef}>
        <motion.ul
          className={active === null ? "pg-list" : "pg-list has-open"}
          onMouseLeave={() => setActive(null)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setActive(null);
          }}
          style={{ "--pg-grow": OPEN_GROW, "--pg-start": current } as CSSProperties}
          variants={reduced ? undefined : listVariants}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        >
          {items.map((p, i) => {
            const assets = projectAssets[p.slug];
            const Tag = p.url ? "a" : "div";
            const linkProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : { tabIndex: 0 };

            return (
              <motion.li
                key={p.slug}
                className={active === i ? "pg-panel is-open" : "pg-panel"}
                variants={reduced ? undefined : panelVariants}
                onMouseEnter={() => setActive(i)}
                onFocus={() => open(i)}
              >
                <Tag className="pg-panel-inner" aria-label={`${p.title} — ${p.tagline}`} {...linkProps}>
                  <div className="pg-media" aria-hidden="true">
                    {assets?.closed && assets.open ? (
                      <>
                        <div className="pg-img pg-img-open">
                          <Image src={assets.open} alt="" fill sizes="(max-width: 900px) 80vw, 50vw" />
                        </div>
                        <div className="pg-img pg-img-closed">
                          <Image src={assets.closed} alt="" fill sizes="(max-width: 900px) 80vw, 15vw" />
                        </div>
                      </>
                    ) : (
                      <div className="pg-img-placeholder">
                        <span>{p.title.charAt(0)}</span>
                      </div>
                    )}
                    <div className="pg-shade" />
                  </div>

                  <div className="pg-content">
                    <div className="pg-num">{String(i + 1).padStart(2, "0")}</div>

                    <div className="pg-bottom">
                      <h3 className="pg-name">
                        {assets?.logo ? (
                          <span className="pg-logo">
                            <Image src={assets.logo} alt={p.title} fill sizes="300px" />
                          </span>
                        ) : (
                          <span className="pg-name-text">{p.title}</span>
                        )}
                      </h3>
                      <div className="pg-tagline">{p.tagline}</div>
                      <p className="pg-desc">{p.description}</p>
                      <span className="pg-rule" />
                      <span className="pg-cta">
                        <span className="pg-cta-circle">
                          <Arrow />
                        </span>
                        <span className="pg-cta-label">{t.proyectos.ctaLabel}</span>
                      </span>
                    </div>
                  </div>
                </Tag>
              </motion.li>
            );
          })}
        </motion.ul>

        {maxStart > 0 && (
          <>
            <button
              type="button"
              className="pg-nav-btn pg-nav-prev"
              onClick={() => go(-1)}
              disabled={current === 0}
              aria-label={t.proyectos.prev}
            >
              <span style={{ display: "inline-flex", transform: "scaleX(-1)" }}>
                <Arrow />
              </span>
            </button>
            <button
              type="button"
              className="pg-nav-btn pg-nav-next"
              onClick={() => go(1)}
              disabled={current === maxStart}
              aria-label={t.proyectos.next}
            >
              <Arrow />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
