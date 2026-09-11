"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n/language-context";

const stack = ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "Motion"];
const loop = [...stack, ...stack];

const BASE_SPEED = 32; // px/s
const MAX_SCROLL_BOOST = 260; // px/s added at high scroll velocity

export default function Clientes() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);
  const pausedRef = useRef(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);

  useLenis((lenis) => {
    velocityRef.current = lenis.velocity;
  });

  useAnimationFrame((_, delta) => {
    if (reduced || pausedRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    const halfWidth = el.scrollWidth / 2;
    if (!halfWidth) return;
    const boost = Math.min(Math.abs(velocityRef.current) * 8, MAX_SCROLL_BOOST);
    let next = x.get() - ((BASE_SPEED + boost) * delta) / 1000;
    if (next <= -halfWidth) next += halfWidth;
    x.set(next);
  });

  return (
    <section className="clientes-section" style={{ background: "var(--color-accent)", color: "var(--color-accent-fg)" }}>
      <div className="clientes-row">
        <Reveal
          y={10}
          className="clientes-label"
          style={{ fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.72 }}
        >
          {t.clientes.label}
        </Reveal>
        <div className="clientes-divider" />
        <div className="clientes-marquee">
          <motion.div
            ref={trackRef}
            className={hovering ? "clientes-track is-hovering" : "clientes-track"}
            style={{ x: reduced ? 0 : x }}
            onMouseEnter={() => {
              setHovering(true);
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              setHovering(false);
              pausedRef.current = false;
            }}
          >
            {loop.map((c, i) => (
              <div key={`${c}-${i}`} className="cliente-item">
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10.5" stroke="currentColor" />
                  <circle cx="11" cy="11" r="3.5" fill="currentColor" />
                </svg>
                <span style={{ fontSize: 14, letterSpacing: "0.12em" }}>{c}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
