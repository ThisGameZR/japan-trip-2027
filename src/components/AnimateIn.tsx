import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { easeOutExpo, fadeUp } from '../lib/motion';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimateIn({ children, delay = 0, className = '' }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduced ? 'visible' : 'hidden'}
      animate="visible"
      transition={{
        duration: 0.9,
        delay: reduced ? 0 : delay / 1000,
        ease: easeOutExpo,
      }}
    >
      {children}
    </motion.div>
  );
}
