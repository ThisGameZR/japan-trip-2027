import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[10001] h-0.5 max-md:h-px bg-gradient-to-r from-neon via-pink to-fuji shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-[width] duration-75 linear"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
