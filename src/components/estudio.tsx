"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Estudio() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const rawStatsY = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const statsY = useSpring(rawStatsY, { stiffness: 70, damping: 22, mass: 0.6 });

  useEffect(() => {
    const measure = () => {
      if (frameRef.current && trackRef.current) {
        setScrollRange(Math.max(0, trackRef.current.scrollHeight - frameRef.current.clientHeight));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [t]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const trackY = reduced || !isDesktop ? 0 : statsY;

  return (
    <section
      ref={sectionRef}
      id="estudio"
      className="estudio-section"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="estudio-sticky">
        <ParallaxImage
          src="/icons/studio.png"
          gradient="linear-gradient(105deg, rgba(27,28,23,0.94) 0%, rgba(27,28,23,0.82) 32%, rgba(27,28,23,0.4) 58%, rgba(27,28,23,0) 78%)"
        />
        <div className="estudio-grid">
          <Reveal style={{ color: "var(--color-dark-fg)" }}>
            <div className="eyebrow" style={{ marginBottom: 14, color: "var(--color-dark-fg)" }}>
              {t.estudio.eyebrow}
            </div>
            <div style={{ width: 40, height: 1, background: "var(--color-dark-fg)", opacity: 0.4, marginBottom: 30 }} />
            <h2
              className="heading-40"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                fontSize: 55,
                lineHeight: 1.12,
                margin: "0 0 28px",
                letterSpacing: "-0.015em",
                color: "var(--color-bg)",
                textWrap: "pretty",
              }}
            >
              {t.estudio.titleLine1}
              <br />
              <em style={{ color: "var(--color-accent-light)", fontStyle: "italic" }}>{t.estudio.titleEm}</em>
            </h2>
            <div style={{ width: 56, height: 1, background: "rgba(217,215,204,0.3)", marginBottom: 28 }} />
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(217,215,204,0.85)", margin: "0 0 20px", maxWidth: 460 }}>
              {t.estudio.body1}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(217,215,204,0.85)", margin: "0 0 20px", maxWidth: 460 }}>
              {t.estudio.body2}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(217,215,204,0.85)", margin: "0 0 40px", maxWidth: 460 }}>
              {t.estudio.body3}
            </p>
            <a
              href="#proceso"
              className="eyebrow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--color-bg)",
                borderBottom: "1px solid rgba(217,215,204,0.4)",
                paddingBottom: 8,
              }}
            >
              {t.estudio.link}
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
                <path d="M0 4.5h16M12 0.5l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>

          <div className="estudio-stats-frame" ref={frameRef}>
            <motion.div className="estudio-stats-track" ref={trackRef} style={{ y: trackY }}>
              {t.estudio.stats.map((s) => (
                <div key={s.n} className="estudio-stat-big">
                  <div className="estudio-stat-big-num">{s.n}</div>
                  <div className="estudio-stat-big-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
