"use client";

import { cn } from "@/lib/utils";

// Aceternity UI — Meteors (https://ui.aceternity.com/components/meteors)
// Positions are derived deterministically from the index so server and client
// render the same markup (no hydration mismatch).
export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((_, idx) => {
        const left = (idx / number) * 120 - 10; // spread across, slight overscan
        const delay = ((idx * 37) % 100) / 20; // 0 – 5s, varied
        const duration = 5 + ((idx * 53) % 60) / 10; // 5 – 11s
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rotate-[215deg] rounded-full bg-accent shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-accent before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "0px",
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </>
  );
};
