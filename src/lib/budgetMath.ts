export type MoneyTotals = { thb: number; jpy: number };

/** Parse legacy strings like "~1,500 ฿" or "6,250 ¥" — prefer numeric fields in data. */
export function parseAmount(value: string): number {
  const n = Number(value.replace(/[^\d.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export function formatThb(amount: number, approximate = false): string {
  const prefix = approximate ? '~' : '';
  return `${prefix}${amount.toLocaleString('en-US')} ฿`;
}

export function formatJpy(amount: number): string {
  return `${amount.toLocaleString('en-US')} ¥`;
}

export function sumTotals(items: MoneyTotals[]): MoneyTotals {
  return items.reduce(
    (acc, { thb, jpy }) => ({
      thb: acc.thb + thb,
      jpy: acc.jpy + jpy,
    }),
    { thb: 0, jpy: 0 },
  );
}
