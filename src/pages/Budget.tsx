import PageTitle from '../components/PageTitle';
import Reveal from '../components/Reveal';
import RippleLink from '../components/RippleLink';
import StaggerReveal, { StaggerItem } from '../components/StaggerReveal';
import {
  budgetSummary,
  colorMap,
  formatRowDisplay,
  type BudgetSection,
} from '../data/budget';

function ExpenseTable({ section }: { section: BudgetSection }) {
  const colors = colorMap[section.color];

  return (
    <Reveal className="mb-5 rounded-xl border border-white/[0.02] bg-secondary p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.15)] sm:mb-10 sm:rounded-[20px] sm:p-8">
      <h2
        className={`mb-4 flex flex-wrap items-center gap-2 border-b border-white/10 pb-2.5 text-sm font-bold leading-snug sm:mb-6 sm:gap-3 sm:pb-3 sm:text-lg ${colors.text}`}
      >
        <i className={`fa-solid ${section.icon}`} aria-hidden="true" />
        {section.title}
      </h2>

      <p className="mb-2 flex items-center gap-1.5 text-xs text-slate-text md:hidden">
        <i className="fa-solid fa-arrows-left-right" aria-hidden="true" />
        เลื่อนซ้าย–ขวาเพื่อดูตารางทั้งหมด
      </p>

      <div className="-mx-1 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-neon/35">
        <table className="w-full min-w-[420px] border-collapse sm:min-w-[520px]">
          <thead>
            <tr className="border-b border-white/10 text-left text-[0.65rem] uppercase text-slate-text sm:text-xs">
              <th className="w-[50%] px-1.5 py-2 sm:px-4 sm:py-3">
                {section.columns === 'thb' ? 'รายการระบบหลัก' : 'รายการระบบคมนาคม'}
              </th>
              {section.columns === 'dual' ? (
                <>
                  <th className="w-[25%] px-1.5 py-2 sm:px-4 sm:py-3">เงินบาท (โดยประมาณ)</th>
                  <th className="w-[25%] px-1.5 py-2 text-right sm:px-4 sm:py-3">เงินเยน (¥)</th>
                </>
              ) : (
                <th className="w-[30%] px-1.5 py-2 text-right sm:px-4 sm:py-3">ราคา (บาท)</th>
              )}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => {
              const display = formatRowDisplay(row, section.columns);
              return (
                <tr key={row.title} className="border-b border-white/[0.03]">
                  <td className="px-1.5 py-2 align-top sm:px-4 sm:py-4">
                    <div className="text-xs font-semibold sm:text-sm md:text-base">{row.title}</div>
                    <div className="mt-0.5 text-[0.7rem] leading-snug text-slate-text sm:text-xs md:text-sm">
                      {row.subtitle}
                    </div>
                  </td>
                  {section.columns === 'dual' ? (
                    <>
                      <td className="px-1.5 py-2 text-right text-xs text-slate-200 sm:px-4 sm:py-3 sm:text-sm">
                        {display.thb}
                      </td>
                      <td
                        className={`px-1.5 py-2 text-right font-display text-xs font-bold whitespace-nowrap sm:px-4 sm:py-3 sm:text-base md:text-lg ${colors.text}`}
                      >
                        {display.jpy}
                      </td>
                    </>
                  ) : (
                    <td
                      className={`px-1.5 py-2 text-right font-display text-xs font-bold sm:px-4 sm:py-3 sm:text-base md:text-lg ${colors.text}`}
                    >
                      {display.thbOnly}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p
        className={`mt-3 border-t border-dashed border-white/10 pt-3 text-left text-xs font-bold leading-snug sm:mt-4 sm:pt-4 sm:text-right sm:text-sm md:text-base ${colors.text}`}
      >
        {section.sumLabel}
      </p>
    </Reveal>
  );
}

export default function Budget() {
  const { sections, summaryCards, grandTotalLabel, grandTotalDetail } = budgetSummary;

  return (
    <>
      <PageTitle
        title="MASTER BUDGET DASHBOARD"
        subtitle="วิเคราะห์คำนวณงบประมาณรวมทุกอย่างของทริป เพื่อความเข้าใจโครงสร้างค่าใช้จ่ายทั้งหมด"
      />

      <div className="mx-auto max-w-4xl px-3 sm:px-4">
        <Reveal variant="scale" className="relative isolate mb-6 overflow-hidden rounded-2xl p-4 text-center sm:mb-12 sm:rounded-3xl sm:p-8">
          <div
            className="pointer-events-none absolute inset-[-50%] animate-border-spin bg-[conic-gradient(from_0deg,transparent,#2ed573,transparent,#00f2fe,transparent)] opacity-35"
            aria-hidden="true"
          />
          <div className="absolute inset-0.5 rounded-[22px] bg-gradient-to-br from-secondary to-[#0d2e27]" />
          <div className="relative z-10">
            <h2 className="text-[0.7rem] uppercase tracking-wide text-slate-text sm:text-sm md:text-base">
              งบประมาณรวมสุทธิของทริปนี้ (Net Total)
            </h2>
            <div className="font-display text-2xl font-extrabold leading-tight text-green animate-price-glow sm:text-4xl sm:leading-none md:text-6xl">
              {grandTotalLabel}
            </div>
            <div className="mt-1.5 text-xs leading-relaxed text-slate-50/90 sm:mt-2 sm:text-base md:text-xl">
              {grandTotalDetail}
            </div>
          </div>
        </Reveal>

        <StaggerReveal className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((card) => {
            const c = colorMap[card.color];
            return (
              <StaggerItem key={card.title}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border bg-secondary p-4 text-center sm:rounded-[20px] sm:p-6 ${c.border}`}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-neon/10 via-transparent to-pink/5 opacity-0 transition group-hover:opacity-100" />
                  <h3 className="text-[0.65rem] uppercase tracking-wide text-slate-text sm:text-xs">
                    {card.title}
                  </h3>
                  <div className={`mt-1.5 font-display text-lg font-extrabold sm:mt-2 sm:text-2xl ${c.text}`}>
                    {card.price}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>

        {sections.map((section) => (
          <ExpenseTable key={section.id} section={section} />
        ))}
      </div>

      <Reveal className="mx-auto mt-8 mb-2 px-3 text-center sm:my-12 sm:px-4">
        <RippleLink to="/" variant="outline" className="border-neon hover:bg-neon hover:shadow-[0_0_15px_#00f2fe]">
          <i className="fa-solid fa-house" aria-hidden="true" /> กลับสู่หน้าแรกแดชบอร์ด
        </RippleLink>
      </Reveal>
    </>
  );
}
