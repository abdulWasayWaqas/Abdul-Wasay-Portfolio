import { experience } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad relative z-20 scroll-mt-24 py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Experience"
        index="03 /"
        title="Where I've built things"
      />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-line to-transparent md:left-[9px]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company + i} delay={i * 0.06}>
              <div className="relative pl-9 md:pl-12">
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-accent/50 bg-base md:h-5 md:w-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {job.role}{" "}
                    <span className="text-accent">
                      · {job.link ? (
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </span>
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-3 space-y-2">
                  {job.points.map((p, j) => (
                    <li
                      key={j}
                      className="relative pl-4 text-sm leading-relaxed text-white/60"
                    >
                      <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent/60" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
