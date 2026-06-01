import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useMemo, useState, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

function particleAmount() {
  const w = window.innerWidth;
  if (w < 480) return 35;
  if (w < 768) return 55;
  if (w < 1024) return 75;
  return 100;
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
        color: { value: '#c8e6ff' },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.15, max: 0.55 },
          animation: { enable: true, speed: 0.4, sync: false },
        },
        size: { value: { min: 1, max: 3.2 } },
        move: {
          enable: true,
          speed: { min: 0.35, max: 1.1 },
          direction: 'bottom',
          random: true,
          straight: false,
          outModes: { default: 'out', bottom: 'out' },
        },
        wobble: { enable: true, distance: 4, speed: 0.25 },
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
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Particles
        id="trip-snow"
        className="h-full w-full opacity-55 max-md:opacity-35"
        options={options}
      />
    </div>
  );
}

export default function ParticleCanvas() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <ParticlesProvider init={loadSlim}>
      <SnowLayer />
    </ParticlesProvider>
  );
}
