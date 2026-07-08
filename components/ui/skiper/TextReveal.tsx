"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

// Skiper UI — Text Reveal (scroll-linked word reveal)
export default function TextReveal({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.35"],
  });

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <p className="flex flex-wrap font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl md:leading-tight">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mx-1.5 lg:mx-2.5">
      <span className="absolute opacity-15">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
}
