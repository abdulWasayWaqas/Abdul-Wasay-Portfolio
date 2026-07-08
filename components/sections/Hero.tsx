"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";
import { Spotlight } from "@/components/ui/aceternity/Spotlight";
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect";
import { MovingBorderButton } from "@/components/ui/aceternity/MovingBorder";
import GradientText from "@/components/ui/reactbits/GradientText";
import Magnet from "@/components/ui/reactbits/Magnet";

const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Aceternity Spotlight */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#34d399" />

      {/* 3D backdrop */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Scene />
      </div>
      {/* fade the canvas into the page bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-base to-transparent" />

      <div className="section-pad relative z-20 flex min-h-[100svh] flex-col justify-center pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <div className="mt-4 flex h-9 items-center overflow-hidden text-xl font-medium sm:text-2xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIdx}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <GradientText className="font-display font-semibold">
                {profile.roles[roleIdx]}
              </GradientText>
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
          <TextGenerateEffect words={profile.tagline} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MovingBorderButton
            as="a"
            href="#projects"
            duration={2800}
            containerClassName="h-12 w-44"
            className="gap-2 text-sm"
          >
            View my work <span aria-hidden>→</span>
          </MovingBorderButton>

          <Magnet padding={80} magnetStrength={4}>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </Magnet>

          <a href={profile.resume} download className="btn-ghost">
            Download CV <span aria-hidden>↓</span>
          </a>
        </motion.div>

        {/* metric ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3 lg:grid-cols-5"
        >
          {profile.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-2xl font-bold text-accent md:text-3xl">
                {m.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-white/45">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/30">
        scroll
      </div>
    </section>
  );
}
