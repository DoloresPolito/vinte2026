"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.15,
        anchors: { offset: -90 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
