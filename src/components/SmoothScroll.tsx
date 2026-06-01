import { ReactLenis } from 'lenis/react';
import { useEffect, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

type Props = { children: ReactNode };

export default function SmoothScroll({ children }: Props) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    document.documentElement.classList.add('lenis', 'lenis-smooth');
    return () => document.documentElement.classList.remove('lenis', 'lenis-smooth');
  }, [reduced]);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
