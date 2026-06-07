import { AnimatePresence, MotionConfig } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import BackgroundMusic from './BackgroundMusic';
import Header from './Header';
import PageTransition from './PageTransition';
import ParticleCanvas from './ParticleCanvas';
import ScrollProgress from './ScrollProgress';
import ScrollToTop from './ScrollToTop';
import SmoothScroll from './SmoothScroll';
import Snowfall from './Snowfall';

export default function Layout() {
  const reduced = useReducedMotion();

  return (
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <SmoothScroll>
        <Snowfall />
        <ParticleCanvas />
        <BackgroundMusic />
        <ScrollProgress />
        <ScrollToTop />
        <Header />
        <main className="relative z-[1] pb-[calc(7rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))]">
          <AnimatePresence mode="wait">
            <PageTransition />
          </AnimatePresence>
        </main>
      </SmoothScroll>
    </MotionConfig>
  );
}
