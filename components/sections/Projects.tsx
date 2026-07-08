"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/reactbits/SpotlightCard";
import ProjectArt from "@/components/ui/ProjectArt";

function Cover({ project }: { project: Project }) {
  if (project.image) {
    // Projects tagged with `art` use a themed stock photo → emerald duotone
    // treatment so they sit cohesively next to the crisp product screenshots.
    const isPhoto = !!project.art;
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
        <Image
          src={project.image}
          alt={isPhoto ? `${project.name}` : `${project.name} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
            isPhoto
              ? "object-center saturate-[0.6] brightness-[0.72]"
              : "object-top"
          }`}
        />
        {isPhoto && (
          <>
            <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-panel/85 via-transparent to-transparent" />
        {isPhoto && (
          <span className="absolute bottom-4 left-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            {project.name}
          </span>
        )}
      </div>
    );
  }

  // Original themed SVG art fallback (used only if a photo is unavailable)
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-accent/[0.08] via-panel to-base">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
      {project.art && (
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]">
          <ProjectArt kind={project.art} />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-panel/85 via-panel/20 to-transparent" />
      <span className="absolute bottom-4 left-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
        {project.name}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad relative z-20 scroll-mt-24 py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Selected work"
        index="04 /"
        title="Projects"
        subtitle="A mix of shipped products and systems I've designed end-to-end."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.06}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="h-full"
            >
              <SpotlightCard className="group flex h-full flex-col">
                <Cover project={p} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                    <h3 className="font-display text-xl font-bold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">{p.blurb}</p>
                  </div>

                  <ul className="mb-5 mt-1 space-y-2">
                    {p.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="relative pl-4 text-sm leading-relaxed text-white/60"
                      >
                        <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent/60" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-4">
                    {p.stack.map((s) => (
                      <span key={s} className="chip !text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>

                  {p.links && p.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                        >
                          {l.label} <span aria-hidden>↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
