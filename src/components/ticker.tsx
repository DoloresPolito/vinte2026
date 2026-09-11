"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/lib/i18n/language-context";

const BASE_SPEED = 26; // px/s
const MAX_SCROLL_BOOST = 200; // px/s added at high scroll velocity

export default function Ticker() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);
  const x = useMotionValue(0);

  const loop = [...t.ticker.items, ...t.ticker.items, ...t.ticker.items, ...t.ticker.items];

  useLenis((lenis) => {
    velocityRef.current = lenis.velocity;
  });

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const el = trackRef.current;
    if (!el) return;
    const quarterWidth = el.scrollWidth / 4;
    if (!quarterWidth) return;
    const boost = Math.min(Math.abs(velocityRef.current) * 8, MAX_SCROLL_BOOST);
    let next = x.get() - ((BASE_SPEED + boost) * delta) / 1000;
    if (next <= -quarterWidth) next += quarterWidth;
    x.set(next);
  });

  return (
    <div className="ticker-bar">
      <div className="ticker-mask">
        <motion.div className="ticker-track" ref={trackRef} style={{ x: reduced ? 0 : x }}>
          {loop.map((label, i) => (
            <span className="ticker-item" key={`${label}-${i}`}>
              {label}
              <span className="ticker-dot" aria-hidden="true" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
