"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { cn } from "@/lib/utils";

// React Bits — Scroll Velocity (https://reactbits.dev/text-animations/scroll-velocity)
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
};

function VelocityRow({
  children,
  baseVelocity,
  className,
}: {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden">
      <motion.div className={cn("flex flex-nowrap whitespace-nowrap", className)} style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex flex-nowrap">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollVelocity({
  items,
  baseVelocity = 4,
  className,
}: {
  items: string[];
  baseVelocity?: number;
  className?: string;
}) {
  return (
    <VelocityRow baseVelocity={baseVelocity} className={className}>
      {items.map((item, i) => (
        <span
          key={i}
          className="mx-6 font-display text-2xl font-medium text-white/25 md:text-3xl"
        >
          {item}
          <span className="ml-6 text-accent/40">◇</span>
        </span>
      ))}
    </VelocityRow>
  );
}
