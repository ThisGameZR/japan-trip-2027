import NumberFlow from '@number-flow/react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const TRIP_START = new Date('2027-02-15T00:00:00+09:00').getTime();

const units = [
  { key: 'days' as const, label: 'วัน', minDigits: 1 },
  { key: 'hours' as const, label: 'ชม.', minDigits: 2 },
  { key: 'mins' as const, label: 'นาที', minDigits: 2 },
  { key: 'secs' as const, label: 'วินาที', minDigits: 2 },
];

export default function Countdown() {
  const reduced = useReducedMotion();
  const [vals, setVals] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      let diff = Math.max(0, TRIP_START - now);
      const days = Math.floor(diff / 86400000);
      diff %= 86400000;
      const hours = Math.floor(diff / 3600000);
      diff %= 3600000;
      const mins = Math.floor(diff / 60000);
      diff %= 60000;
      const secs = Math.floor(diff / 1000);
      setVals({ days, hours, mins, secs });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="mx-auto my-5 flex max-w-md flex-wrap justify-center gap-1.5 px-2 sm:my-8 sm:max-w-lg sm:gap-3 sm:px-4 md:gap-4"
      aria-label="นับถอยหลังสู่วันเดินทาง"
    >
      {units.map(({ key, label, minDigits }) => (
        <motion.div
          key={key}
          className="min-w-[3.25rem] max-w-[4.25rem] flex-1 rounded-xl border border-neon/15 bg-secondary px-1.5 py-2.5 text-center sm:min-w-16 sm:max-w-[100px] sm:rounded-2xl sm:px-3 sm:py-4"
          whileHover={reduced ? undefined : { y: -4, borderColor: 'rgba(0,242,254,0.4)' }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <NumberFlow
            value={vals[key]}
            className="block font-display text-lg font-extrabold leading-none text-neon sm:text-2xl md:text-3xl"
            format={{ minimumIntegerDigits: minDigits }}
            transformTiming={{ duration: reduced ? 0 : 350, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            spinTiming={{ duration: reduced ? 0 : 350, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          />
          <span className="mt-1 block text-[0.6rem] uppercase tracking-wider text-slate-text sm:mt-1.5 sm:text-[0.7rem]">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
