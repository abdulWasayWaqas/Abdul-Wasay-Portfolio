"use client";

import type { ComponentType, SVGProps } from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiQdrant,
  SiDocker,
  SiNginx,
  SiAnthropic,
  SiDeepgram,
  SiElevenlabs,
  SiLivekit,
  SiWebrtc,
  SiSocketdotio,
  SiTauri,
  SiGit,
  SiGithubactions,
  SiThreedotjs,
} from "react-icons/si";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

// OpenAI + AWS were removed from Simple Icons (trademark), so they're inline here.
const OpenAiLogo: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4922 4.4922zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.1419.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4525l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z" />
  </svg>
);

const AwsLogo: IconType = (props) => (
  <svg viewBox="0 0 48 30" fill="currentColor" {...props}>
    <text
      x="24"
      y="15"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="15"
      letterSpacing="0.5"
    >
      aws
    </text>
    <path
      d="M8 21c9 4.6 23 4.6 32 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M36.5 18.4l4 2.2-2.2 3.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Tech = { name: string; Icon: IconType };

export const techLogos: Tech[] = [
  { name: "Python", Icon: SiPython },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Rust", Icon: SiRust },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Django", Icon: SiDjango },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redis", Icon: SiRedis },
  { name: "Qdrant", Icon: SiQdrant },
  { name: "Docker", Icon: SiDocker },
  { name: "Nginx", Icon: SiNginx },
  { name: "AWS", Icon: AwsLogo },
  { name: "OpenAI", Icon: OpenAiLogo },
  { name: "Anthropic", Icon: SiAnthropic },
  { name: "Deepgram", Icon: SiDeepgram },
  { name: "ElevenLabs", Icon: SiElevenlabs },
  { name: "LiveKit", Icon: SiLivekit },
  { name: "WebRTC", Icon: SiWebrtc },
  { name: "Socket.IO", Icon: SiSocketdotio },
  { name: "Tauri", Icon: SiTauri },
  { name: "Git", Icon: SiGit },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "Three.js", Icon: SiThreedotjs },
];

function LogoPill({ name, Icon }: Tech) {
  return (
    <div
      title={name}
      className="group flex shrink-0 items-center gap-3 rounded-full border border-line bg-panel/50 px-5 py-3 text-white/45 backdrop-blur-sm transition-all duration-300 hover:border-accent/45 hover:bg-panel hover:text-accent"
    >
      <Icon className="h-6 w-6 shrink-0" aria-hidden />
      <span className="whitespace-nowrap text-sm font-medium text-white/55 transition-colors group-hover:text-white">
        {name}
      </span>
    </div>
  );
}

function LogoRow({
  items,
  duration,
  reverse = false,
}: {
  items: Tech[];
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div className="logo-row">
      <div
        className={`logo-track${reverse ? " logo-track--reverse" : ""}`}
        style={{ ["--dur" as string]: `${duration}s` }}
      >
        {/* rendered twice for a seamless loop */}
        {[...items, ...items].map((t, i) => (
          <LogoPill key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function TechLogos() {
  const mid = Math.ceil(techLogos.length / 2);
  const rowOne = techLogos.slice(0, mid);
  const rowTwo = techLogos.slice(mid);

  return (
    <div className="logo-marquee">
      <LogoRow items={rowOne} duration={46} />
      <LogoRow items={rowTwo} duration={54} reverse />
    </div>
  );
}
