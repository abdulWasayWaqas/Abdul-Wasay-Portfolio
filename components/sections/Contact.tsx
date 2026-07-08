import { profile } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import { Meteors } from "@/components/ui/aceternity/Meteors";
import { MovingBorderButton } from "@/components/ui/aceternity/MovingBorder";
import Magnet from "@/components/ui/reactbits/Magnet";

export default function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "LinkedIn", value: "abdul-wasay", href: profile.socials.linkedin },
    { label: "GitHub", value: "abdulWasayWaqas", href: profile.socials.github },
  ];

  return (
    <section
      id="contact"
      className="section-pad relative z-20 scroll-mt-24 py-24 md:py-32"
    >
      <Reveal>
        <div className="card relative overflow-hidden p-8 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Meteors number={16} />
          </div>
          <div className="relative">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 animate-float rounded-full bg-accent" />
              Let&apos;s build something
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Have an AI product in mind? <span className="gradient-text">Let&apos;s talk.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
              I&apos;m open to full-time roles and freelance projects in voice AI, LLM systems,
              and full-stack product engineering. The fastest way to reach me is email.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MovingBorderButton
                as="a"
                href={`mailto:${profile.email}`}
                duration={2800}
                containerClassName="h-12 w-40"
                className="gap-2 text-sm"
              >
                Email me <span aria-hidden>→</span>
              </MovingBorderButton>
              <Magnet padding={70} magnetStrength={5}>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  Connect on LinkedIn
                </a>
              </Magnet>
              <a href={profile.resume} download className="btn-ghost">
                Download CV <span aria-hidden>↓</span>
              </a>
            </div>

            <div className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group"
                >
                  <div className="text-xs uppercase tracking-wider text-white/35">
                    {l.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-white/80 transition-colors group-hover:text-accent">
                    {l.value}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
