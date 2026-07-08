"use client";

import { cn } from "@/lib/utils";

// React Bits — Shiny Text (https://reactbits.dev/text-animations/shiny-text)
export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className,
}: {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("shiny-text", disabled && "shiny-text--disabled", className)}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </span>
  );
}
