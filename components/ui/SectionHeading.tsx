import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  index?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle, index }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <span className="eyebrow">
          {index && <span className="text-accent/60">{index}</span>}
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-3 text-base leading-relaxed text-white/55">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
