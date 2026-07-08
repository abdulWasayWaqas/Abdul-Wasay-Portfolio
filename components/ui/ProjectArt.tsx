import type { ProjectArt as ArtKind } from "@/lib/data";

const ACCENT = "#34d399";
const SOFT = "#6ee7b7";
const DEEP = "#10b981";

/* Dual-speaker waveform — Diarization Studio */
function Waveform() {
  const bars = Array.from({ length: 46 }, (_, i) => {
    const base = Math.sin(i * 0.55) * Math.cos(i * 0.17);
    return 20 + Math.abs(base) * 150;
  });
  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <line x1="0" y1="125" x2="400" y2="125" stroke={ACCENT} strokeOpacity="0.15" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={10 + i * 8.4}
          y={125 - h / 2}
          width="4"
          height={h}
          rx="2"
          fill={i % 2 === 0 ? ACCENT : SOFT}
          opacity={i % 2 === 0 ? 0.85 : 0.45}
        />
      ))}
    </svg>
  );
}

/* Microphone + sound rings — Hello Wakeword */
function Mic() {
  const rings = [40, 62, 84];
  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {rings.map((r, i) => (
        <g key={i} opacity={0.5 - i * 0.13}>
          <path
            d={`M ${200 - r} ${125 - r * 0.7} A ${r} ${r} 0 0 0 ${200 - r} ${125 + r * 0.7}`}
            fill="none"
            stroke={SOFT}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d={`M ${200 + r} ${125 - r * 0.7} A ${r} ${r} 0 0 1 ${200 + r} ${125 + r * 0.7}`}
            fill="none"
            stroke={SOFT}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      ))}
      <rect x="185" y="70" width="30" height="66" rx="15" fill={ACCENT} />
      <path
        d="M170 118 a30 30 0 0 0 60 0"
        fill="none"
        stroke={DEEP}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line x1="200" y1="148" x2="200" y2="168" stroke={DEEP} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="184" y1="168" x2="216" y2="168" stroke={DEEP} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

/* Line + area analytics chart — Call Analysis Pipeline */
function Analytics() {
  const pts = [10, 45, 30, 70, 55, 95, 78, 130, 110, 160];
  const coords = pts.map((v, i) => [20 + i * 40, 210 - v]);
  const line = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `M20,210 ${line} 380,210 Z`;
  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.4" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[60, 110, 160, 210].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#ffffff" strokeOpacity="0.05" />
      ))}
      <path d={area} fill="url(#areaFill)" />
      <polyline points={line} fill="none" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {coords.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill={SOFT} />
      ))}
    </svg>
  );
}

/* Flowing signal lines — Real-Time Streaming Platform */
function Stream() {
  const lines = [0, 1, 2, 3];
  const wave = (phase: number, amp: number, mid: number) => {
    let d = `M -20 ${mid}`;
    for (let x = -20; x <= 420; x += 10) {
      const y = mid + Math.sin((x + phase * 40) * 0.03) * amp;
      d += ` L ${x} ${y.toFixed(1)}`;
    }
    return d;
  };
  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="none">
      {lines.map((i) => (
        <path
          key={i}
          d={wave(i, 26 - i * 4, 70 + i * 30)}
          fill="none"
          stroke={i % 2 === 0 ? ACCENT : SOFT}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={0.7 - i * 0.13}
        />
      ))}
    </svg>
  );
}

export default function ProjectArt({ kind }: { kind: ArtKind }) {
  switch (kind) {
    case "waveform":
      return <Waveform />;
    case "mic":
      return <Mic />;
    case "analytics":
      return <Analytics />;
    case "stream":
      return <Stream />;
    default:
      return null;
  }
}
