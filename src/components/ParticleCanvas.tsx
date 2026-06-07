import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useMemo, useState, useEffect } from 'react';

function particleAmount() {
  const w = window.innerWidth;
  if (w < 480) return 55;
  if (w < 768) return 85;
  if (w < 1024) return 115;
  return 150;
}

function SnowLayer() {
  const { loaded } = useParticlesProvider();
  const [amount, setAmount] = useState(particleAmount);

  useEffect(() => {
    const onResize = () => setAmount(particleAmount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: amount },
        color: { value: ['#c8e6ff', '#ffffff', '#e0f2fe'] },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.25, max: 0.85 },
          animation: { enable: true, speed: 0.5, sync: false },
        },
        size: { value: { min: 1.2, max: 4.5 } },
        move: {
          enable: true,
          speed: { min: 0.5, max: 1.6 },
          direction: 'bottom',
          random: true,
          straight: false,
          outModes: { default: 'out', bottom: 'out' },
        },
        rotate: {
          value: { min: 0, max: 360 },
          animation: { enable: true, speed: 2, sync: false },
        },
        wobble: { enable: true, distance: 6, speed: 0.35 },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'bubble' },
        },
        modes: {
          bubble: { distance: 120, size: 4, opacity: 0.35, duration: 0.4 },
        },
      },
    }),
    [amount],
  );

  if (!loaded) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      <Particles
        id="trip-snow"
        className="h-full w-full opacity-80"
        options={options}
      />
    </div>
  );
}

export default function ParticleCanvas() {
  return (
    <ParticlesProvider init={loadSlim}>
      <SnowLayer />
    </ParticlesProvider>
  );
}
