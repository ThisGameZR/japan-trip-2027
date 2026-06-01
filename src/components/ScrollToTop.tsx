import { useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '../hooks/useReducedMotion';

/** Scroll to top on client-side route changes. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: reduced });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, lenis, reduced]);

  return null;
}
