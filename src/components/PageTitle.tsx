import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, transition } from '../lib/motion';

type Props = { title: string; subtitle: string };

export default function PageTitle({ title, subtitle }: Props) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="px-3 py-6 text-center sm:px-4 sm:py-10 md:py-12"
      variants={fadeUp}
      initial={reduced ? 'visible' : 'hidden'}
      animate={reduced || inView ? 'visible' : 'hidden'}
      transition={transition}
    >
      <motion.h1
        className="font-display text-xl font-bold text-balance break-words bg-gradient-to-br from-slate-50 to-slate-text bg-clip-text text-transparent sm:text-3xl md:text-4xl"
        initial={reduced ? false : { opacity: 0, letterSpacing: '0.2em', filter: 'blur(8px)' }}
        animate={reduced || inView ? { opacity: 1, letterSpacing: '0em', filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h1>
      <p className="mx-auto mt-2 max-w-xl px-1 text-xs leading-relaxed text-slate-text sm:text-sm md:text-base">{subtitle}</p>
    </motion.div>
  );
}
