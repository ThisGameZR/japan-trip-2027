import { useMemo } from 'react';

const FLAKE_COUNT = 72;

type Flake = {
  id: number;
  left: string;
  size: number;
  delay: string;
  duration: string;
  drift: string;
  opacity: number;
  blur: number;
};

function buildFlakes(): Flake[] {
  return Array.from({ length: FLAKE_COUNT }, (_, i) => ({
    id: i,
    left: `${(i * 13.7 + 3) % 100}%`,
    size: 4 + (i % 6) * 1.2,
    delay: `${-((i * 0.83) % 14).toFixed(2)}s`,
    duration: `${7 + (i % 8) * 1.25}s`,
    drift: `${-28 + (i % 11) * 6}px`,
    opacity: 0.45 + (i % 5) * 0.1,
    blur: i % 3 === 0 ? 1 : 0,
  }));
}

export default function Snowfall() {
  const flakes = useMemo(buildFlakes, []);

  return (
    <div className="snow-scene pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snow-flake absolute top-[-8%] rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.45)]"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            filter: flake.blur ? `blur(${flake.blur}px)` : undefined,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            ['--snow-drift' as string]: flake.drift,
          }}
        />
      ))}
    </div>
  );
}
