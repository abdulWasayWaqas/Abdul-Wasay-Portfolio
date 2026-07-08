"use client";

import { cn } from "@/lib/utils";

// React Bits — Gradient Text (https://reactbits.dev/text-animations/gradient-text)
export default function GradientText({
  children,
  className,
  colors = ["#6ee7b7", "#34d399", "#10b981", "#6ee7b7"],
  animationSpeed = 6,
}: {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}) {
  const gradient = `linear-gradient(to right, ${colors.join(", ")})`;
  return (
    <span
      className={cn("animated-gradient-text", className)}
      style={{
        backgroundImage: gradient,
        backgroundSize: "300% 100%",
        animationDuration: `${animationSpeed}s`,
      }}
    >
      {children}
    </span>
  );
}
