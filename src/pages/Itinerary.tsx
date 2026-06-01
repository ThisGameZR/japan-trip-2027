import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PageTitle from '../components/PageTitle';
import Reveal from '../components/Reveal';
import RippleLink from '../components/RippleLink';
import { itineraryDays, phaseStyles } from '../data/itinerary';
import { useReducedMotion } from '../hooks/useReducedMotion';

function DayBlock({ dayLabel, date, phase, spots }: (typeof itineraryDays)[0]) {
  const styles = phaseStyles[phase];

  return (
    <Reveal variant="left" className="relative mb-6 pl-7 sm:mb-12 sm:pl-16">
      <div
        className={`absolute top-0 left-0 z-10 h-3.5 w-3.5 rounded-full border-2 bg-secondary sm:left-2 sm:h-6 sm:w-6 sm:border-[3px] ${styles.dot}`}
      />
      <motion.div
        className={`rounded-xl border border-white/[0.02] bg-secondary p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:rounded-[20px] sm:p-8 ${styles.hover}`}
        whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
      >
        <div className="mb-4 flex flex-col gap-1.5 border-b border-white/10 pb-3 sm:mb-6 sm:gap-2 sm:pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className={`font-display text-sm font-bold leading-snug break-words sm:text-lg md:text-2xl ${styles.number}`}>
            {dayLabel}
          </div>
          <div className="w-fit rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-slate-text sm:px-3 sm:py-1 sm:text-sm">{date}</div>
        </div>
        {spots.map((spot) => (
          <div key={spot.title} className="mb-4 flex gap-2.5 last:mb-0 sm:mb-6 sm:gap-5">
            <i
              className={`fa-solid ${spot.icon} mt-0.5 w-5 shrink-0 text-center text-sm sm:mt-1 sm:w-6 sm:text-lg ${styles.icon}`}
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold leading-snug sm:text-base md:text-lg">{spot.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-text sm:text-sm">{spot.description}</p>
              {spot.transport && (
                <span className="mt-1.5 inline-block max-w-full rounded bg-white/10 px-1.5 py-0.5 text-[0.65rem] leading-snug text-white sm:mt-2 sm:px-2 sm:text-xs">
                  <i className={`fa-solid ${spot.transport.icon} mr-1`} aria-hidden="true" />
                  {spot.transport.label}
                </span>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </Reveal>
  );
}

export default function Itinerary() {
  const reduced = useReducedMotion();
  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  const [lineDrawn, setLineDrawn] = useState(reduced);

  useEffect(() => {
    if (reduced || timelineInView) setLineDrawn(true);
  }, [timelineInView, reduced]);

  return (
    <>
      <PageTitle
        title="TRIP ITINERARY"
        subtitle="แผนการเดินทางอย่างละเอียด เจาะลึกเวลา คิวรถ และพิกัดไฮไลท์สำคัญ"
      />

      <div
        ref={timelineRef}
        className={`relative mx-auto max-w-3xl px-3 before:absolute before:top-0 before:bottom-0 before:left-2 before:w-0.5 sm:px-4 sm:before:left-2.5 before:bg-gradient-to-b before:from-neon before:via-pink before:to-fuji before:opacity-30 before:transition-transform before:duration-[1.2s] before:ease-[cubic-bezier(0.16,1,0.3,1)] before:content-[''] sm:before:left-8 ${lineDrawn ? 'before:scale-y-100 before:origin-top' : 'before:scale-y-0 before:origin-top'}`}
      >
        {itineraryDays.map((day) => (
          <DayBlock key={day.dayLabel} {...day} />
        ))}
      </div>

      <Reveal className="mx-auto mt-8 mb-2 px-3 text-center sm:my-12 sm:px-4">
        <RippleLink to="/budget" variant="outline">
          ไปดูหน้าสรุปงบค่าใช้จ่ายต่อ <i className="fa-solid fa-wallet" aria-hidden="true" />
        </RippleLink>
      </Reveal>
    </>
  );
}
