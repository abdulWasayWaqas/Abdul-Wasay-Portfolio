import { skills } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/reactbits/SpotlightCard";
import TechLogos from "@/components/ui/TechLogos";

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 scroll-mt-24 py-24 md:py-32">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Toolkit"
          index="02 /"
          title="Skills & technologies"
          subtitle="The stack I use to take AI products from prototype to production."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <SpotlightCard className="h-full p-5">
                <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-bleed tech-logo marquee */}
      <div className="mt-16">
        <div className="section-pad mb-6">
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            <span className="h-px w-8 bg-accent/50" />
            Technologies I work with
          </h3>
        </div>
        <TechLogos />
      </div>
    </section>
  );
}
