import AnimateIn from '../components/AnimateIn';
import Countdown from '../components/Countdown';
import RippleLink from '../components/RippleLink';
import Reveal from '../components/Reveal';
import StaggerReveal, { StaggerItem } from '../components/StaggerReveal';

const infoCards = [
  {
    icon: 'fa-clock',
    iconClass: 'text-neon',
    label: 'ระยะเวลาทริป',
    value: '9 วัน 8 คืน',
    sub: '15 ก.พ. - 24 ก.พ. 2027',
  },
  {
    icon: 'fa-snowflake',
    iconClass: 'text-neon',
    label: 'Hokkaido Phase',
    value: '4 คืนแรก',
    sub: 'ซัปโปโร, นิเซโกะสกี, ทัวร์บิเอะ',
  },
  {
    icon: 'fa-mountain-sun',
    iconClass: 'text-pink',
    label: 'Tokyo & Fuji Phase',
    value: '4 คืนหลัง',
    sub: 'คาวากุจิโกะออนเซ็น, ชิบูย่า, DisneySea',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative px-3 py-8 text-center sm:px-8 sm:py-14 md:py-24">
        <div
          className="pointer-events-none absolute -top-[10%] left-1/2 z-0 h-[min(600px,90vw)] w-[min(600px,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,242,254,0.08)_0%,transparent_70%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-[-5%] left-[20%] z-[-1] h-[min(420px,90vw)] w-[min(420px,90vw)] animate-orb-drift rounded-full bg-neon/10 blur-[80px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-[10%] right-[15%] z-[-1] h-[min(320px,70vw)] w-[min(320px,70vw)] animate-orb-drift rounded-full bg-pink/10 blur-[80px] [animation-delay:-4s]"
          aria-hidden="true"
        />

        <AnimateIn delay={100}>
          <h2 className="font-display text-[1.625rem] font-extrabold leading-[1.15] tracking-tight text-balance break-words sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
            THE EPIC{' '}
            <span className="bg-[length:200%_auto] bg-gradient-to-br from-neon to-sky-400 bg-clip-text text-transparent animate-gradient-shift">
              HOKKAIDO TOKYO
            </span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={200}>
          <h2 className="font-display text-[1.625rem] font-extrabold leading-[1.15] tracking-tight text-balance sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
            WINTER JOURNEY.
          </h2>
        </AnimateIn>
        <AnimateIn delay={320}>
          <p className="mx-auto mt-3 max-w-xl px-1 text-sm leading-relaxed text-slate-text sm:mt-4 sm:text-base md:text-lg">
            บันทึกการเดินทาง 9 วัน 8 คืน สัมผัสปุยหิมะฮอกไกโด แล้วไปต่อโตเกียว
          </p>
        </AnimateIn>
        <AnimateIn delay={420}>
          <Countdown />
        </AnimateIn>
      </section>

      <StaggerReveal className="mx-auto grid max-w-5xl grid-cols-1 gap-3 px-3 sm:grid-cols-2 sm:gap-6 sm:px-4 lg:grid-cols-3">
        {infoCards.map((card) => (
          <StaggerItem key={card.label}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.03] bg-secondary p-4 sm:rounded-[20px] sm:p-8">
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-neon/10 via-transparent to-pink/5 opacity-0 transition group-hover:opacity-100" />
              <i
                className={`fa-solid ${card.icon} mb-3 text-xl sm:mb-4 sm:text-3xl ${card.iconClass}`}
                aria-hidden="true"
              />
              <h3 className="text-[0.65rem] uppercase tracking-wider text-slate-text sm:text-xs">{card.label}</h3>
              <div className="mt-1.5 font-display text-lg font-semibold sm:mt-2 sm:text-2xl md:text-3xl">{card.value}</div>
              <div className="mt-1 text-xs leading-snug text-slate-text sm:text-sm">{card.sub}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal className="mx-auto mt-8 mb-2 px-3 text-center sm:my-12 sm:px-4">
        <RippleLink to="/itinerary" variant="glow">
          ดูแพลนการเดินทางรายวันอย่างละเอียด <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </RippleLink>
      </Reveal>

      <footer className="mt-8 border-t border-white/[0.02] px-3 py-6 text-center text-xs text-slate-text sm:mt-16 sm:px-4 sm:py-10 sm:text-sm">
        <AnimateIn delay={600}>Japan Epic Journey 2027 · Hokkaido → Tokyo</AnimateIn>
      </footer>
    </>
  );
}
