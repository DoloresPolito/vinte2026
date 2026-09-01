"use client";

import { Reveal } from "@/components/motion/reveal";

const stack = ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "Motion"];
const loop = [...stack, ...stack];

export default function Clientes() {
  return (
    <section className="section-sm" style={{ background: "var(--color-accent)", color: "var(--color-accent-fg)" }}>
      <Reveal
        y={10}
        style={{ fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.72, marginBottom: 26 }}
      >
        Stack tecnológico
      </Reveal>
      <div className="clientes-marquee">
        <div className="clientes-track">
          {loop.map((c, i) => (
            <div key={`${c}-${i}`} className="cliente-item">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10.5" stroke="currentColor" />
                <circle cx="11" cy="11" r="3.5" fill="currentColor" />
              </svg>
              <span style={{ fontSize: 15, letterSpacing: "0.12em" }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
