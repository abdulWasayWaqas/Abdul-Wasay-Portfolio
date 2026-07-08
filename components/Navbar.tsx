"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`section-pad flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-6 rounded-full border px-4 py-2 transition-all duration-300 md:w-full ${
            scrolled
              ? "border-line bg-base/70 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-bold text-black">
              {initials}
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide text-white sm:block">
              {profile.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-white/65 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 place-items-center rounded-full border border-line text-white/75 transition-colors hover:border-accent/50 hover:text-accent sm:grid"
            >
              <SiGithub className="h-4 w-4" />
            </a>
            <a href="#contact" className="hidden btn-primary !px-5 !py-2 sm:inline-flex">
              Let&apos;s talk
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-white/80 md:hidden"
            >
              <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="section-pad md:hidden">
          <div className="flex flex-col gap-1 rounded-2xl border border-line bg-base/90 p-3 backdrop-blur-xl">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm text-white/75 hover:bg-white/[0.04] hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1 w-full"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
