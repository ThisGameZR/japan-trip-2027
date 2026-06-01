import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { staggerContainer, staggerItem, transition } from '../lib/motion';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function StaggerReveal({ children, className = '' }: Props) {
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
      variants={staggerContainer}
      initial={reduced ? 'visible' : 'hidden'}
      animate={reduced || inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem} transition={transition}>
      {children}
    </motion.div>
  );
}
