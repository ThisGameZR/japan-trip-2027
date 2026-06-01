import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { useReducedMotion } from '../hooks/useReducedMotion';

type Props = LinkProps & {
  children: ReactNode;
  variant?: 'glow' | 'outline';
  className?: string;
};

export default function RippleLink({
  children,
  variant = 'outline',
  className = '',
  ...props
}: Props) {
  const reduced = useReducedMotion();

  const base =
    variant === 'glow'
      ? 'group relative inline-flex min-h-10 max-w-full items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-br from-neon to-sky-400 px-4 py-2.5 text-sm font-bold leading-snug text-primary shadow-[0_4px_20px_rgba(0,242,254,0.4)] sm:min-h-11 sm:max-w-[calc(100%-2rem)] sm:gap-2 sm:px-8 sm:py-3 sm:text-base md:px-10 md:text-lg'
      : 'group relative inline-flex min-h-10 max-w-full items-center justify-center gap-1.5 overflow-hidden rounded-full border border-pink bg-secondary px-4 py-2.5 text-sm font-semibold leading-snug text-white sm:min-h-11 sm:max-w-[calc(100%-2rem)] sm:gap-2 sm:px-8 sm:py-3';

  return (
    <motion.div
      className="inline-block"
      whileHover={
        reduced
          ? undefined
          : variant === 'glow'
            ? { scale: 1.06, boxShadow: '0 8px 40px rgba(0,242,254,0.65)' }
            : { scale: 1.03 }
      }
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      <Link className={`${base} ${className}`} {...props}>
        <motion.span
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
          initial={{ x: '-120%' }}
          whileHover={reduced ? undefined : { x: '120%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {children}
      </Link>
    </motion.div>
  );
}
