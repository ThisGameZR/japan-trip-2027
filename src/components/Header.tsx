import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'หน้าแรก', icon: 'fa-house', end: true },
  { to: '/itinerary', label: 'แพลนรายวัน', icon: 'fa-calendar-alt', end: false },
  { to: '/budget', label: 'บัญชีค่าใช้จ่าย', icon: 'fa-wallet', end: false },
] as const;

function navClass({ isActive }: { isActive: boolean }) {
  return [
    'flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium no-underline transition md:min-h-0',
    isActive
      ? 'bg-cyan-400/10 text-cyan-400'
      : 'text-slate-200 hover:bg-cyan-400/10 hover:text-cyan-400',
  ].join(' ');
}

function mobileNavClass({ isActive }: { isActive: boolean }) {
  return [
    'flex min-h-11 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium no-underline transition',
    isActive ? 'bg-cyan-400/10 text-cyan-400' : 'text-slate-200 hover:bg-white/5',
  ].join(' ');
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const close = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open && window.innerWidth < 768);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[1100] border-b border-white/10 bg-primary/95 pt-[env(safe-area-inset-top,0)] backdrop-blur-md transition-shadow ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <NavLink
          to="/"
          className="flex min-w-0 items-center gap-2 font-display no-underline"
          onClick={() => setOpen(false)}
        >
          <i
            className="fa-solid fa-plane-up shrink-0 text-cyan-400 animate-plane-float"
            aria-hidden="true"
          />
          <span className="truncate bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-base font-extrabold text-transparent sm:text-xl">
            JAPAN 2027
          </span>
        </NavLink>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-100 md:hidden"
          aria-expanded={open}
          aria-controls="nav-mobile-panel"
          aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
          onClick={() => setOpen((v) => !v)}
        >
          <i
            className={`fa-solid text-lg ${open ? 'fa-xmark' : 'fa-bars'}`}
            aria-hidden="true"
          />
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="เมนูหลัก">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
              <i className={`fa-solid ${link.icon}`} aria-hidden="true" />
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        id="nav-mobile-panel"
        className={`border-t border-white/10 bg-primary md:hidden ${open ? 'block' : 'hidden'}`}
        aria-label="เมนูมือถือ"
      >
        <div
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0))' }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={mobileNavClass}
              onClick={() => setOpen(false)}
            >
              <i className={`fa-solid ${link.icon} w-5 text-center`} aria-hidden="true" />
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
