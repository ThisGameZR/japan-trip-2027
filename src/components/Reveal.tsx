import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeLeft, fadeScale, fadeUp, transition } from '../lib/motion';

type Variant = 'up' | 'left' | 'scale';

const variantMap = {
  up: fadeUp,
  left: fadeLeft,
  scale: fadeScale,
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  variant = 'up',
  className = '',
  delay = 0,
}: Props) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variantMap[variant]}
      initial={reduced ? 'visible' : 'hidden'}
      animate={reduced || inView ? 'visible' : 'hidden'}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
