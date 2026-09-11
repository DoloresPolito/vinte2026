"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/** Background image layer that drifts slower/faster than scroll, with an optional gradient overlay on top. */
export function ParallaxImage({
  src,
  gradient,
  range = 8,
}: {
  src: string;
  gradient?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);

  return (
    <div ref={ref} className="parallax-bg" aria-hidden="true">
      <motion.div
        className="parallax-bg-image"
        style={{ backgroundImage: `url(${src})`, y: reduced ? undefined : y }}
      />
      {gradient && <div className="parallax-bg-gradient" style={{ backgroundImage: gradient }} />}
    </div>
  );
}
