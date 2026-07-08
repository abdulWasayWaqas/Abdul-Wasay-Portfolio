import { about, profile, education } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TextReveal from "@/components/ui/skiper/TextReveal";

export default function About() {
  return (
    <section id="about" className="section-pad relative z-20 scroll-mt-24 py-24 md:py-32">
      <SectionHeading eyebrow="About" index="01 /" title={about.lead} />

      <div className="mb-16 max-w-4xl">
        <TextReveal>
          I build real-time, production-grade AI systems — fast, reliable, and enjoyable to use.
        </TextReveal>
      </div>

      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {about.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-white/65 md:text-[17px]">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-4">
          <Reveal>
            <div className="card p-5">
              <div className="eyebrow mb-3">Education</div>
              {education.map((e) => (
                <div key={e.degree} className="mb-3 last:mb-0">
                  <div className="text-sm font-semibold text-white">{e.degree}</div>
                  <div className="text-sm text-white/50">{e.school}</div>
                  {e.period && <div className="text-xs text-white/35">{e.period}</div>}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card p-5">
              <div className="eyebrow mb-3">Currently</div>
              <p className="text-sm leading-relaxed text-white/60">
                Building production voice AI at{" "}
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  Convoi AI
                </a>{" "}
                — from {profile.location}.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
