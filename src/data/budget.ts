import {
  formatJpy,
  formatThb,
  sumTotals,
  type MoneyTotals,
} from '../lib/budgetMath';

export type ExpenseRow = {
  title: string;
  subtitle: string;
  /** Amount in baht (exact for section 1, approximate for on-trip THB estimates). */
  thb?: number;
  jpy?: number;
};

export type BudgetSectionInput = {
  id: string;
  title: string;
  icon: string;
  color: 'neon' | 'pink' | 'fuji' | 'purple';
  columns: 'thb' | 'dual';
  rows: ExpenseRow[];
};

export type BudgetSection = BudgetSectionInput & {
  totals: MoneyTotals;
  sumLabel: string;
};

export type SummaryCard = {
  title: string;
  price: string;
  color: 'neon' | 'pink' | 'fuji' | 'purple';
};

export type BudgetSummary = {
  sections: BudgetSection[];
  summaryCards: SummaryCard[];
  grandTotal: MoneyTotals;
  grandTotalLabel: string;
  grandTotalDetail: string;
};

const colorMap = {
  neon: { border: 'border-neon', text: 'text-neon' },
  pink: { border: 'border-pink', text: 'text-pink' },
  fuji: { border: 'border-fuji', text: 'text-fuji' },
  purple: { border: 'border-purple', text: 'text-purple' },
};

export { colorMap };

const SECTION_LABELS: Record<string, string> = {
  flights: 'รวมงวดงานส่วนที่ 1',
  transport: 'รวมหมวดส่วนที่ 2',
  food: 'รวมหมวดส่วนที่ 3',
  activities: 'รวมหมวดส่วนที่ 4',
};

/** Source of truth — edit numbers here; totals update automatically. */
export const budgetSectionInputs: BudgetSectionInput[] = [
  {
    id: 'flights',
    title: '1. หมวดตั๋วเครื่องบิน และ โรงแรมที่พัก',
    icon: 'fa-plane-departure',
    color: 'neon',
    columns: 'thb',
    rows: [
      {
        title: 'ตั๋วเครื่องบิน ขาไป (CNX ➔ CTS)',
        subtitle: 'การบินไทย (TG670) บินตรงฟูลเซอร์วิส รอบดึกถึงเช้าวันถัดไป',
        thb: 18_800,
      },
      {
        title: 'ตั๋วเครื่องบิน ภายในประเทศ (CTS ➔ NRT)',
        subtitle: 'สายการบิน ANA (NH2154) บินข้ามภูมิภาคจากฮอกไกโดเข้าโตเกียว',
        thb: 2_700,
      },
      {
        title: 'ตั๋วเครื่องบิน ขากลับ (NRT ➔ CNX)',
        subtitle: 'บินตรงฟูลเซอร์วิสจากสนามบินนาริตะโตเกียว มุ่งตรงกลับสู่กรุงเทพฯ',
        thb: 18_000,
      },
      {
        title: 'โรงแรมที่พัก เมืองซัปโปโร ฮอกไกโด (4 คืน)',
        subtitle: 'โฮสเทล/แคปซูลดีไซน์โมเดิร์น ทำเลย่านแสงสีใจกลาง Susukino',
        thb: 9_000,
      },
      {
        title: 'เรียวกังออนเซ็น คาวากุจิโกะ ฟูจิ (1 คืน)',
        subtitle: 'เรียวกังญี่ปุ่นแท้ แช่ออนเซ็นธรรมชาติส่วนตัวพร้อมวิวฟูจิซัง (ราคาห้องเดี่ยว)',
        thb: 6_000,
      },
      {
        title: 'โรงแรมที่พัก ใจกลางโตเกียว (3 คืน)',
        subtitle: 'โฮสเทลทำเลทองใกล้สถานีรถไฟย่านหลักชินจูกุ/ชิบูย่า',
        thb: 9_500,
      },
    ],
  },
  {
    id: 'transport',
    title: '2. หมวดค่าเดินทางภายในประเทศ และ ค่าทัวร์รถบัส',
    icon: 'fa-bus',
    color: 'pink',
    columns: 'dual',
    rows: [
      {
        title: 'JR Rapid Airport (ขาไปเมือง)',
        subtitle: 'ตั๋วรถไฟด่วนเชื่อมต่อจากสนามบินชิโตเสะ ➔ เมืองซัปโปโร',
        thb: 280,
        jpy: 1_150,
      },
      {
        title: 'Half-day Tour เทศกาลน้ำแข็ง Lake Shikotsu',
        subtitle: 'รวมตั๋วรถโค้ชปรับอากาศไป-กลับจากซัปโปโร + ค่าเข้าหน้างานเรียบร้อย',
        thb: 1_500,
        jpy: 6_250,
      },
      {
        title: '1-Day Tour อาซาฮิยามะ + นิเกิ้ลเทอเรซ',
        subtitle: 'ตั๋ววันเดย์ทัวร์รถบัสไปเมืองอาซาฮิคาว่า จองผ่านแอป Trip.com',
        thb: 1_442,
        jpy: 6_000,
      },
      {
        title: 'ตั๋วเข้าสวนสัตว์ Asahiyama Zoo',
        subtitle: 'ค่าผ่านประตูหน้าด่านสวนสัตว์เพื่อชมขบวนพาเหรดเพนกวิน',
        thb: 240,
        jpy: 1_000,
      },
      {
        title: 'รถบัสสกี Hokkaido Resort Liner (ไป-กลับ)',
        subtitle: 'ตั๋วคิวรถสกีด่วนรับส่งตรงจากเมืองซัปโปโร ➔ ลานสกี นิเซโกะ',
        thb: 2_400,
        jpy: 10_000,
      },
      {
        title: 'JR Rapid Airport (ขากลับสนามบิน)',
        subtitle: 'ตั๋วรถไฟด่วนจากเมืองซัปโปโร ➔ กลับไปยังสนามบินฮอกไกโด',
        thb: 280,
        jpy: 1_150,
      },
      {
        title: 'รถไฟเข้าเมืองโตเกียว (Keisei Access)',
        subtitle: 'ค่าโดยสารรถไฟเชื่อมต่อจากสนามบินนาริตะ ➔ เข้าสู่ใจกลางโตเกียว',
        thb: 315,
        jpy: 1_300,
      },
      {
        title: 'รถบัสด่วน Highway Bus (ขาไปฟูจิ)',
        subtitle: 'ตั๋วรถบัสความเร็วสูงยิงตรงจากท่ารถบัสชินจูกุ ➔ สถานีคาวากุจิโกะ',
        thb: 530,
        jpy: 2_200,
      },
      {
        title: 'รถบัสท้องถิ่น Omni Bus รอบภูเขาไฟฟูจิ',
        subtitle: 'ใช้โดยสารล่องท่องเที่ยวรอบทะเลสาบหลัก และไป Lake Yamanaka',
        thb: 240,
        jpy: 1_000,
      },
      {
        title: 'รถบัสด่วน Highway Bus (ขากลับโตเกียว)',
        subtitle: 'ตั๋วรถบัสความเร็วสูงขากลับจากสถานีคาวากุจิโกะ ➔ ลงที่ชินจูกุ',
        thb: 530,
        jpy: 2_200,
      },
      {
        title: 'ตั๋วพาส Enoshima Kamakura Pass',
        subtitle: 'รวมค่ารถไฟด่วนไป-กลับคามะคุระและค่ารถไฟท้องถิ่นเลียบทะเล Enoden',
        thb: 365,
        jpy: 1_520,
      },
      {
        title: 'รถไฟไป-กลับ Tokyo DisneySea',
        subtitle: 'ค่าโดยสารระบบรถไฟจากสถานีหลักในโตเกียว ➔ สถานี Maihama',
        thb: 195,
        jpy: 800,
      },
      {
        title: 'รถไฟกลับสนามบินนาริตะ (วันสุดท้าย)',
        subtitle: 'ตั๋วรถไฟ Keisei Access Express เชื่อมต่อเข้าอาคารสนามบินนาริตะ',
        thb: 325,
        jpy: 1_350,
      },
      {
        title: 'เงินกองกลางเติมบัตร Suica / IC Card',
        subtitle: 'สำรองงบสำหรับแตะสแกนรถไฟใต้ดินยิบย่อยในซัปโปโรและโตเกียว',
        thb: 600,
        jpy: 3_000,
      },
    ],
  },
  {
    id: 'food',
    title: '3. หมวดค่าอาหาร และ เครื่องดื่มตลอดทั้งทริป',
    icon: 'fa-bowl-food',
    color: 'fuji',
    columns: 'dual',
    rows: [
      {
        title: 'มื้ออาหารหลักมาตรฐาน (ทั้งหมด 18 มื้อ)',
        subtitle: 'เฉลี่ย 1,200เยนต่อมื้อ สำหรับราเมงร้อน, ข้าวหน้าเนื้อ, ข้าวหน้าปลาดิบตามตลาดสด',
        thb: 5_200,
        jpy: 21_600,
      },
      {
        title: 'มื้อฉลองพิเศษ 1: เจงกิสข่าน (ปิ้งย่างเนื้อแกะ)',
        subtitle: 'จัดมื้อเย็นอาหารพื้นเมืองขึ้นชื่อ ทานที่ Sapporo Beer Museum',
        thb: 960,
        jpy: 4_000,
      },
      {
        title: 'มื้อฉลองพิเศษ 2: อุด้งหม้อไฟผักต้มโฮโต (Hoto)',
        subtitle: 'อาหารพื้นเมืองรสเด็ดร้อนๆ ประจำโซนฟูจิ คาวากุจิโกะ',
        thb: 720,
        jpy: 3_000,
      },
      {
        title: 'มื้อฉลองพิเศษ 3: บุฟเฟต์เนื้อย่าง Yakiniku พรีเมียม',
        subtitle: 'มื้อเย็นปาร์ตี้ส่งท้ายทริปสุดยิ่งใหญ่ที่ย่านชิบูย่า โตเกียว',
        thb: 1_200,
        jpy: 5_000,
      },
      {
        title: 'เสบียงน้ำดื่ม ขนม และของกินเล่นมินิมาร์ท',
        subtitle: 'เฉลี่ยตุนวันละ 1,000เยน ในร้านสะดวกซื้อ Lawson / 7-11 ตลอดทริป 9 วัน',
        thb: 2_465,
        jpy: 10_000,
      },
    ],
  },
  {
    id: 'activities',
    title: '4. หมวดตั๋วเข้าสถานที่ท่องเที่ยว กิจกรรมสกี และช้อปปิ้ง',
    icon: 'fa-wand-magic-sparkles',
    color: 'purple',
    columns: 'dual',
    rows: [
      {
        title: 'บัตรเข้าสวนสนุก Tokyo DisneySea',
        subtitle: 'ตั๋วพาสปอร์ตผ่านประตูและเครื่องเล่นแบบ 1 วันเต็ม',
        thb: 2_300,
        jpy: 9_600,
      },
      {
        title: 'ตั๋วขึ้นกระเช้าลอยฟ้า Mt.Moiwa Ropeway',
        subtitle: 'ตั๋วขึ้น-ลงกระเช้าสำหรับไปจุดชมวิวไฟเมืองซัปโปโร',
        thb: 500,
        jpy: 2_100,
      },
      {
        title: 'บัตรผ่านประตูเข้าคลับ Atom Shibuya',
        subtitle: 'ค่าเข้าปาร์ตี้กลางคืนย่านโตเกียว (ราคารวมตั๋วเครื่องดื่มฟรี 1 แก้ว)',
        thb: 965,
        jpy: 4_000,
      },
      {
        title: 'ค่าเช่าเซ็ตแผ่นสกี / สโนว์บอร์ด ค่ากระเช้าขึ้น',
        subtitle: 'เช่าใช้งานทำกิจกรรมบนลานสกีระดับโลกที่นิเซโกะ 5 ชั่วโมง',
        thb: 4_500,
        jpy: 22_500,
      },
      {
        title: 'ค่าเช่าชุดเสื้อแจ็คเก็ตและกางเกงสกีลุยหิมะ',
        subtitle: 'ชุดเครื่องแต่งกายแบบหนากันน้ำกันหิมะพรีเมียมบนลานสกี',
        thb: 1_080,
        jpy: 4_500,
      },
      {
        title: 'เงินช้อปปิ้งส่วนตัว และ ซื้อของฝากกล่อง',
        subtitle: 'ตุนขนมกล่องฮอกไกโด เสื้อผ้าชิบูย่า และของที่ระลึกจาก DisneySea',
        thb: 4_800,
        jpy: 20_000,
      },
    ],
  },
];

function rowTotals(row: ExpenseRow): MoneyTotals {
  return {
    thb: row.thb ?? 0,
    jpy: row.jpy ?? 0,
  };
}

function sectionTotals(section: BudgetSectionInput): MoneyTotals {
  return sumTotals(section.rows.map(rowTotals));
}

function buildSumLabel(section: BudgetSectionInput, totals: MoneyTotals): string {
  const prefix = SECTION_LABELS[section.id] ?? 'รวม';
  if (section.columns === 'thb') {
    return `${prefix}: ${formatThb(totals.thb)}`;
  }
  return `${prefix}: ${formatThb(totals.thb, true)} (${formatJpy(totals.jpy)})`;
}

function buildSummaryCards(sections: BudgetSection[]): SummaryCard[] {
  const labels = [
    '1. ตั๋วบิน & ที่พัก',
    '2. เดินทาง & ทัวร์บัส',
    '3. ค่าอาหารน้ำขนม',
    '4. ตั๋วสถานที่ & สกี',
  ];

  return sections.map((section, i) => {
    const { thb, jpy } = section.totals;
    const price =
      section.columns === 'thb' ? formatThb(thb) : formatJpy(jpy);
    return {
      title: labels[i] ?? section.title,
      price,
      color: section.color,
    };
  });
}

export function computeBudgetSummary(): BudgetSummary {
  const sections: BudgetSection[] = budgetSectionInputs.map((section) => {
    const totals = sectionTotals(section);
    return {
      ...section,
      totals,
      sumLabel: buildSumLabel(section, totals),
    };
  });

  const grandTotal = sumTotals(sections.map((s) => s.totals));
  const flightsThb = sections.find((s) => s.id === 'flights')?.totals.thb ?? 0;

  return {
    sections,
    summaryCards: buildSummaryCards(sections),
    grandTotal,
    grandTotalLabel: `~${grandTotal.thb.toLocaleString('en-US')} บาท`,
    grandTotalDetail: `ประกอบด้วยยอดบาท ${formatThb(flightsThb)} + ยอดเยน ${formatJpy(grandTotal.jpy)}`,
  };
}

/** Row values formatted for the table UI. */
export function formatRowDisplay(
  row: ExpenseRow,
  columns: 'thb' | 'dual',
): { thb?: string; jpy?: string; thbOnly?: string } {
  if (columns === 'thb') {
    return { thbOnly: row.thb != null ? formatThb(row.thb) : undefined };
  }
  return {
    thb: row.thb != null ? formatThb(row.thb, true) : undefined,
    jpy: row.jpy != null ? formatJpy(row.jpy) : undefined,
  };
}

/** Precomputed summary used by the Budget page. */
export const budgetSummary = computeBudgetSummary();

export const budgetSections = budgetSummary.sections;
export const summaryCards = budgetSummary.summaryCards;
