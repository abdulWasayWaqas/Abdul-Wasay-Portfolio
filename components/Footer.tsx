import { profile, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-line">
      <div className="section-pad flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-white/40">
          © 2026 {profile.name}. Built with Next.js, React Three Fiber & Framer Motion.
        </p>
        <nav className="flex flex-wrap items-center gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/45 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
