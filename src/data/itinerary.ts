export type Phase = 'hokkaido' | 'tokyo' | 'fuji';

export type Spot = {
  icon: string;
  title: string;
  description: string;
  transport?: { icon: string; label: string };
};

export type DayPlan = {
  phase: Phase;
  dayLabel: string;
  date: string;
  spots: Spot[];
};

export const itineraryDays: DayPlan[] = [
  {
    phase: 'hokkaido',
    dayLabel: 'DAY 0 | Departure',
    date: '15 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-plane',
        title: '23:55 น. บิน BKK ➔ Sapporo',
        description:
          'เช็กอินสนามบินสุวรรณภูมิ ออกเดินทางด้วยสายการบินไทยเที่ยวบิน TG ยิงยาวแบบฟูลเซอร์วิสไปหลับยาวๆ บนเครื่อง',
        transport: { icon: 'fa-plane', label: 'Thai Airways TG 23:55' },
      },
    ],
  },
  {
    phase: 'hokkaido',
    dayLabel: 'DAY 1 | Ice & Illumination',
    date: '16 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-hotel',
        title: 'เช็กอิน Dansetsu Hotel',
        description:
          'ผ่าน ตม. รับกระเป๋าเดินทาง แล้วเดินทางเข้าเมืองซัปโปโร เช็กอินที่พัก Dansetsu Hotel ฝากของแล้วออกไปเที่ยวต่อ',
      },
      {
        icon: 'fa-bus',
        title: 'Lake Shikotsu Ice Festival',
        description:
          'ขึ้นรถบัสทัวร์ไปเทศกาลน้ำแข็งทะเลสาบชิโกสึ ชมประติมากรรมน้ำแข็งสีฟ้าคราม และไฮไลท์ช่วงเปิดไฟ LED Light-up ตอนค่ำ',
        transport: { icon: 'fa-van-shuttle', label: 'Half-day Tour Bus' },
      },
      {
        icon: 'fa-tree',
        title: 'Odori Park',
        description: 'เดินเล่นสวนสาธารณะกลางเมือง ชมบรรยากาศหิมะและงานประดับไฟช่วงฤดูหนาว',
      },
      {
        icon: 'fa-tower-broadcast',
        title: 'Sapporo TV Tower & Sapporo Clock Tower',
        description:
          'เก็บสองแลนด์มาร์กหลักกลางเมือง ถ่ายรูปคู่กับหอคอยโทรทัศน์และหอนาฬิกาเก่าแก่ท่ามกลางหิมะโปรยปราย',
      },
      {
        icon: 'fa-martini-glass-citrus',
        title: 'Susukino',
        description: 'แวะย่านแสงสี Susukino หาของกินและเดินเล่นยามเย็น',
      },
      {
        icon: 'fa-mountain',
        title: 'Mt.Moiwa Ropeway',
        description:
          'ขึ้นกระเช้าลอยฟ้าชมวิวดาดฟ้ายามค่ำคืนที่สวยติดอันดับ 1 ใน 3 ของญี่ปุ่น ปิดท้ายวันด้วยวิวเมืองซัปโปโรสวยๆ',
      },
    ],
  },
  {
    phase: 'hokkaido',
    dayLabel: 'DAY 2 | Hokkaido Day Trip',
    date: '17 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-bus-simple',
        title: 'Hokkaido 1 Day Trip (ไปกับทัวร์)',
        description:
          'ขึ้นรถบัสท่องเที่ยววันเดียว นั่งสบายๆ อุ่นๆ ออกจากซัปโปโรไปเก็บแลนด์มาร์กนอกเมืองโดยไม่ต้องกังวลเรื่องการตกรถไฟ',
        transport: { icon: 'fa-bus', label: '1-Day Tour Bus' },
      },
      {
        icon: 'fa-paw',
        title: 'Asahiyama Zoo',
        description:
          'เดินดูชีวิตสัตว์เมืองหนาว ไฮไลท์คือยืนดูขบวนพาเหรดราชาเพนกวินเดินเตาะแตะบนลานหิมะอย่างใกล้ชิด',
      },
      {
        icon: 'fa-house-user',
        title: 'Ningle Terrace',
        description:
          'เดินเล่นบนสะพานไม้เชื่อมต่อหมู่บ้านกระท่อมขายของแฮนด์เมดกลางป่าลึก แสงไฟสีส้มตัดกับหิมะขาวโพลน',
      },
      {
        icon: 'fa-droplet',
        title: 'Shirogane Blue Pond & Shirahige Waterfall',
        description:
          'ชมบ่อน้ำสีฟ้าที่ผิวน้ำกลายเป็นน้ำแข็งสีขาว และไปดูน้ำตกหนวดขาวที่ไหลผ่านโขดหินท่ามกลางหิมะปกคลุม',
      },
    ],
  },
  {
    phase: 'hokkaido',
    dayLabel: 'DAY 3 | World-Class Powder Snow',
    date: '18 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-bus',
        title: 'Niseko Ski Resort',
        description:
          'ขึ้นรถบัสสกี Hokkaido Resort Liner จากในเมือง มุ่งสู่ Niseko Ski Resort ลานสกีระดับโลกที่นักสกีทั่วโลกใฝ่ฝัน ลุยหิมะ Japow ฟูละเอียดหนานุ่ม',
        transport: { icon: 'fa-bus', label: 'Resort Liner Ski Bus' },
      },
      {
        icon: 'fa-beer-mug-empty',
        title: 'Sapporo Beer Museum',
        description:
          'กลับเข้าเมืองซัปโปโร ไปทัวร์พิพิธภัณฑ์เบียร์เก่าแก่ ชิมเบียร์สดเยือกแข็ง และจัดมื้อเย็นหนักๆ ด้วยบุฟเฟต์เนื้อแกะย่างเจงกิสข่าน',
      },
    ],
  },
  {
    phase: 'tokyo',
    dayLabel: 'DAY 4 | Hello Tokyo Neon Lights',
    date: '19 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-hotel',
        title: 'เช็กเอาต์ Dansetsu Hotel',
        description: 'เช็กเอาต์จากโรงแรมซัปโปโรตอนเช้า แวะซื้อของฝาก แล้วเดินทางไปสนามบิน',
      },
      {
        icon: 'fa-plane-departure',
        title: '13:40 น. บิน Sapporo ➔ Tokyo',
        description: 'ขึ้นไฟล์ทบินสายการบิน ANA มุ่งสู่สนามบินนาริตะ โตเกียว',
        transport: { icon: 'fa-plane', label: 'ANA Flight 13:40' },
      },
      {
        icon: 'fa-hotel',
        title: 'เช็กอิน Hotel Groove Shinjuku, A Park Royal',
        description: 'เดินทางเข้าเมืองโตเกียว เช็กอินที่พักย่านชินจูกุ',
      },
      {
        icon: 'fa-utensils',
        title: 'ตอนเย็น: หาไรกินที่ Shinjuku',
        description: 'ออกไปเดินเล่นเสพแสงสีนีออน และหาของอร่อยทานรอบค่ำย่านชินจูกุ',
      },
    ],
  },
  {
    phase: 'fuji',
    dayLabel: 'DAY 5 | Mount Fuji & Onsen Night',
    date: '20 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-hotel',
        title: 'เช็กเอาต์ Hotel Groove Shinjuku, A Park Royal',
        description: 'เช็กเอาต์จากโรงแรมชินจูกุตอนเช้า แล้วเดินทางไปฟูจิคาวากุจิโกะ',
      },
      {
        icon: 'fa-train',
        title: 'Shinjuku ➔ Fujikawaguchiko',
        description: 'นั่งชินคันเซ็นจากชินจูกุไปฟูจิคาวากุจิโกะ',
        transport: { icon: 'fa-train', label: 'Shinkansen' },
      },
      {
        icon: 'fa-hotel',
        title: 'เช็กอิน Yamadaya Hotel',
        description: 'เช็กอินที่พักเรียวกัง Yamadaya Hotel ฝากของแล้วออกไปเก็บแลนด์มาร์ก',
      },
      {
        icon: 'fa-mountain',
        title: 'Mt.Fuji & Lake Yamanaka',
        description: 'ชมวิวภูเขาไฟฟูจิและทะเลสาบยามานาคะ ถ่ายรูปคู่กับทิวทัศน์อันงดงาม',
      },
      {
        icon: 'fa-fire',
        title: 'CYCL Sauna Cafe',
        description: 'แวะอบซาวน่าที่ CYCL Sauna Cafe ผ่อนคลายกล้ามเนื้อก่อนแช่ออนเซ็นตอนเย็น',
      },
      {
        icon: 'fa-hot-tub-person',
        title: 'แช่ Onsen ตอนเย็น & มื้อเย็นไคเซกิที่โรงแรม',
        description: 'กลับมาแช่น้ำแร่ออนเซ็นธรรมชาติ แล้วทานมื้อเย็นแบบไคเซกิที่โรงแรม',
      },
    ],
  },
  {
    phase: 'tokyo',
    dayLabel: 'DAY 6 | Shibuya Tokyo Nightlife',
    date: '21 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-hot-tub-person',
        title: 'แช่ Onsen ตอนเช้า & ทานอาหารเช้าที่โรงแรม',
        description: 'ตื่นมาแช่น้ำแร่ยามเช้าดูวิวฟูจิ แล้วทานอาหารเช้าที่โรงแรม',
      },
      {
        icon: 'fa-hotel',
        title: 'เช็กเอาต์ Yamadaya Hotel',
        description: 'เช็กเอาต์จาก Yamadaya Hotel แล้วเดินทางกลับเข้าโตเกียว',
      },
      {
        icon: 'fa-train',
        title: 'Fujikawaguchiko ➔ Tokyo',
        description: 'นั่งชินคันเซ็นกลับจากฟูจิคาวากุจิโกะเข้าโตเกียว',
        transport: { icon: 'fa-train', label: 'Shinkansen' },
      },
      {
        icon: 'fa-hotel',
        title: 'เช็กอิน The Gate Hotel Ryogoku',
        description: 'เช็กอินที่พัก The Gate Hotel Ryogoku ย่านริวโกคุ',
      },
      {
        icon: 'fa-utensils',
        title: 'หาไรกินที่ Shibuya',
        description: 'ออกไปเดินเล่นและหาของอร่อยทานที่ชิบูย่า',
      },
      {
        icon: 'fa-music',
        title: 'Atom Shibuya',
        description: 'ปิดท้ายคืนด้วยคลับ Atom Shibuya สัมผัสสีสันไนท์ไลฟ์โตเกียว',
      },
    ],
  },
  {
    phase: 'tokyo',
    dayLabel: 'DAY 7 | Kamakura Seaside Nostalgia',
    date: '22 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-ticket',
        title: 'Kamakura 1 Day Trip',
        description:
          'นั่งรถไฟออกจากโตเกียว มุ่งสู่เมือง Kamakura วันเดย์ทริปริมทะเล',
        transport: { icon: 'fa-train-subway', label: 'Enoshima Kamakura Pass' },
      },
      {
        icon: 'fa-gopuram',
        title: 'Kotokuin Temple',
        description: 'เข้าสักการะพระพุทธรูปปางสมาธิองค์ใหญ่ไดบุตสึ (พระใหญ่) กลางแจ้ง',
      },
      {
        icon: 'fa-mug-hot',
        title: 'Yoridokoro cafe',
        description: 'แวะ Yoridokoro cafe ริมทะเล ทานอาหารและชมวิว',
      },
      {
        icon: 'fa-train-subway',
        title: 'Kamakura Kokomae Station',
        description: 'ไปยืนถ่ายรูปตรงทางรถไฟผ่านหน้าหาดตามรอยฉากเปิดอนิเมะ Slam Dunk',
      },
      {
        icon: 'fa-water',
        title: 'West Promenade Enoshima',
        description: 'เดินเล่น West Promenade ที่เกาะ Enoshima ชมวิวทะเลและบรรยากาศริมชายหาด',
      },
    ],
  },
  {
    phase: 'tokyo',
    dayLabel: 'DAY 8 | The Magical Sea Adventure',
    date: '23 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-wand-magic-sparkles',
        title: 'Tokyo DisneySea',
        description:
          'จัดเต็มวันที่ Tokyo DisneySea ตะลุยเครื่องเล่นและโซนธีมท้องทะเลหนึ่งเดียวในโลก อยู่ฟินยาวจนถึงเวลาชมพลุไฟสุดอลังการตอนกลางคืน',
        transport: { icon: 'fa-ticket', label: 'DisneySea 1-Day Passport' },
      },
    ],
  },
  {
    phase: 'tokyo',
    dayLabel: 'DAY 9 | Homeward Bound',
    date: '24 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-hotel',
        title: 'เช็กเอาต์ The Gate Hotel Ryogoku',
        description: 'เช็กเอาต์จากโรงแรม แบกของฝากเต็มกระเป๋า แล้วเดินทางไปสนามบิน',
      },
      {
        icon: 'fa-plane-departure',
        title: 'บิน Narita ➔ BKK',
        description:
          'นั่งรถไฟด่วนสาย Keisei มุ่งตรงสู่สนามบินนาริตะ (NRT) เตรียมบอร์ดดิ้งขึ้นเครื่องบินร่อนกลับกรุงเทพฯ โดยสวัสดิภาพ',
        transport: { icon: 'fa-plane', label: 'NRT ➔ BKK' },
      },
    ],
  },
];

export const phaseStyles: Record<
  Phase,
  { dot: string; number: string; icon: string; hover: string }
> = {
  hokkaido: {
    dot: 'border-neon shadow-[0_0_15px_#00f2fe] animate-dot-pulse',
    number: 'text-neon',
    icon: 'text-neon',
    hover: 'hover:shadow-[0_16px_40px_rgba(0,0,0,0.35),0_0_30px_rgba(0,242,254,0.08)]',
  },
  tokyo: {
    dot: 'border-pink shadow-[0_0_15px_#ff007f] animate-dot-pulse-tokyo',
    number: 'text-pink',
    icon: 'text-pink',
    hover: 'hover:shadow-[0_16px_40px_rgba(0,0,0,0.35),0_0_30px_rgba(255,0,127,0.1)]',
  },
  fuji: {
    dot: 'border-fuji shadow-[0_0_15px_#ff9f43] animate-dot-pulse-fuji',
    number: 'text-fuji',
    icon: 'text-fuji',
    hover: 'hover:shadow-[0_16px_40px_rgba(0,0,0,0.35),0_0_30px_rgba(255,159,67,0.1)]',
  },
};
