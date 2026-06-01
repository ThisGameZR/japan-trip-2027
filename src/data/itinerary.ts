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
        title: '23:55 น. เหินฟ้าสู่ฮอกไกโด',
        description:
          'เช็กอินสนามบินสุวรรณภูมิ ออกเดินทางด้วยสายการบินไทยเที่ยวบิน TG670 บินไฟล์ทดึก ยิงยาวแบบฟูลเซอร์วิสไปหลับยาวๆ บนเครื่อง',
      },
    ],
  },
  {
    phase: 'hokkaido',
    dayLabel: 'DAY 1 | Ice & Illumination',
    date: '16 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-passport',
        title: '08:20 น. แตะแผ่นดิน New Chitose Airport',
        description:
          'ผ่าน ตม. รับกระเป๋าเดินทาง แล้วนั่งรถไฟ JR Rapid Airport ลากกระเป๋าไปฝากไว้ที่ล็อบบี้โรงแรมในซัปโปโร (ฝากฟรีก่อนเวลาเช็กอิน)',
        transport: { icon: 'fa-train', label: 'JR Rapid Airport (~37 นาที)' },
      },
      {
        icon: 'fa-camera',
        title: 'เที่ยง: เก็บสองแลนด์มาร์กหลักกลางเมือง',
        description:
          'เดินถ่ายรูปคู่กับ Sapporo Clock Tower และ Sapporo TV Tower ท่ามกลางหิมะโปรยปราย พร้อมแวะทานข้าวเที่ยงแถวนั้น',
      },
      {
        icon: 'fa-bus',
        title: 'บ่าย: เทศกาลน้ำแข็ง Lake Shikotsu Ice Festival',
        description:
          'ขึ้นรถบัส Half-day Tour ที่จองไว้ มุ่งสู่ทะเลสาบชิโกสึ เที่ยวประติมากรรมน้ำแข็งสีฟ้าคราม และอยู่รอชมไฮไลท์เด็ดช่วงเปิดไฟ LED Light-up ตอนค่ำ รถทัวร์พากลับมาส่งในเมืองอย่างปลอดภัย',
        transport: { icon: 'fa-van-shuttle', label: 'Half-day Tour Bus' },
      },
      {
        icon: 'fa-mountain',
        title: 'ดึก: ขึ้น Mt.Moiwa Ropeway & ตะลุยราตรี Susukino',
        description:
          'นั่งรถรางไปขึ้นกระเช้าลอยฟ้าชมวิวดาดฟ้ายามค่ำคืนที่สวยติดอันดับ 1 ใน 3 ของญี่ปุ่น ลงมาปิดท้ายมื้อดึกด้วยราเมงร้อนๆ ย่านแสงสี Susukino',
      },
    ],
  },
  {
    phase: 'hokkaido',
    dayLabel: 'DAY 2 | Biei Romantic Frozen',
    date: '17 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-bus-simple',
        title: '08:00 น. นั่งรถโค้ช 1-Day Tour เก็บแลนด์มาร์กนอกเมือง',
        description:
          'ขึ้นรถบัสท่องเที่ยวของ Trip.com นั่งสบายๆ อุ่นๆ ข้ามเมืองไปโซน Asahikawa และ Biei โดยไม่ต้องกังวลเรื่องการตกรถไฟสาธารณะ',
      },
      {
        icon: 'fa-paw',
        title: 'Asahiyama Zoo & พาเหรดเพนกวิน',
        description:
          'เดินดูชีวิตสัตว์เมืองหนาว ไฮไลท์คือยืนดูขบวนพาเหรดราชาเพนกวินเดินเตาะแตะบนลานหิมะอย่างใกล้ชิด',
      },
      {
        icon: 'fa-droplet',
        title: 'Shirogane Blue Pond & น้ำตก Shirahige Waterfall',
        description:
          'ชมบ่อน้ำสีฟ้าที่ผิวน้ำกลายเป็นน้ำแข็งสีขาว และไปดูน้ำตกหนวดขาวที่ไหลผ่านโขดหินท่ามกลางหิมะปกคลุมหนาแน่น',
      },
      {
        icon: 'fa-house-user',
        title: 'เย็น: หมู่บ้านกระท่อมไม้ในฝัน Ningle Terrace',
        description:
          'เดินเล่นบนสะพานไม้เชื่อมต่อหมู่บ้านกระท่อมขายของแฮนด์เมดกลางป่าลึก แสงไฟสีส้มตัดกับหิมะขาวโพลนสวยงามเหมือนเทพนิยาย ก่อนนั่งรถบัสกลับมาส่งที่ซัปโปโรช่วงค่ำ',
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
        title: '07:45 น. มุ่งหน้าสู่ราชันแห่งสกีรีสอร์ท "Niseko"',
        description:
          'ขึ้นรถบัสสกี Hokkaido Resort Liner จากในเมือง ยิงยาว 3 ชั่วโมง สู่ Niseko Ski Resort ลานสกีระดับโลกที่นักสกีทั่วโลกใฝ่ฝัน',
        transport: { icon: 'fa-bus', label: 'Resort Liner Ski Bus' },
      },
      {
        icon: 'fa-person-skiing',
        title: 'สาย-บ่าย: ลุยหิมะ "Japow" ฟูละเอียดหนานุ่ม',
        description:
          'เช่าอุปกรณ์และชุดสกี ลุยกิจกรรมบนลานหิมะ ถ่ายรูปคู่กับวิวอันงดงามของภูเขาไฟโยเตอิ (ฟูจิแห่งฮอกไกโด) บรรยากาศหมู่บ้านสกีสไตล์อินเตอร์เหมือนยุโรป ก่อนนั่งรถบัสสกีรอบ 16:45 น. กลับซัปโปโร',
      },
      {
        icon: 'fa-beer-mug-empty',
        title: 'ค่ำ: ฉลองเนื้อปิ้งย่างแกะที่ Sapporo Beer Museum',
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
        icon: 'fa-plane-departure',
        title: '13:40 น. บินข้ามภูมิภาคสู่มหานครโตเกียว',
        description:
          'เช็กเอาต์จากโรงแรมซัปโปโรตอนเช้า แวะซื้อของฝาก แล้วนั่งรถไฟ JR ไปสนามบิน ขึ้นไฟล์ทบินสายการบิน ANA มุ่งสู่สนามบินนาริตะ โตเกียว',
        transport: { icon: 'fa-plane', label: 'ANA Flight NH2154' },
      },
      {
        icon: 'fa-hotel',
        title: 'เย็น: เช็กอินโรงแรมย่านชินจูกุ (Shinjuku)',
        description:
          'เดินทางเข้าเมืองโตเกียว เช็กอินที่พัก และออกไปเดินเล่นเสพแสงสีนีออน ถ่ายรูปกับตึกแมวสามมิติ และหาซูชิ/ราเมงอร่อยๆ ทานรอบค่ำ',
      },
    ],
  },
  {
    phase: 'fuji',
    dayLabel: 'DAY 5 | Mount Fuji & Onsen Night',
    date: '20 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-bus',
        title: '08:00 น. นั่งรถบัสด่วนมุ่งสู่ฟูจิคาวากุจิโกะ',
        description:
          'ขึ้นรถบัส Highway Bus ยิงตรงจากชินจูกุ วิ่ง 2 ชั่วโมงถึงสถานี Kawaguchiko สบายและประหยัดกว่าชินคันเซ็นที่ต้องต่อรถหลายต่อ',
        transport: { icon: 'fa-bus-simple', label: 'Express Highway Bus' },
      },
      {
        icon: 'fa-mountain',
        title: 'บ่าย: ล่องรถบัสท้องถิ่น ชมวิวฟูจิที่ Lake Yamanaka',
        description:
          'เช็กอินฝากของที่บ้านเรียวกังแบบญี่ปุ่นโบราณ นั่งรถบัสแดง Omni Bus ไปถ่ายรูปฟูจิซังริมทะเลสาบยามานาคะ สัมผัสความสงบและอลังการ',
      },
      {
        icon: 'fa-hot-tub-person',
        title: 'ค่ำ: ทานอุด้งหม้อไฟโฮโต & แช่ออนเซ็นธรรมชาติ',
        description:
          'ลิ้มลองเมนูประจำถิ่น "Hoto Udon" อุด้งเส้นแบนในน้ำซุปมิโซะผักร้อนๆ แล้วกลับมานอนแช่น้ำแร่ออนเซ็นผ่อนคลายกล้ามเนื้อที่เหนื่อยล้ามาตลอดทริป',
      },
    ],
  },
  {
    phase: 'tokyo',
    dayLabel: 'DAY 6 | Shibuya Tokyo Nightlife',
    date: '21 ก.พ. 2027',
    spots: [
      {
        icon: 'fa-sun',
        title: 'เช้า: แช่ออนเซ็นรอบเช้าตรู่ & เดินทางกลับเข้าเมือง',
        description:
          'ตื่นมาแช่น้ำแร่ยามเช้าดูวิวฟูจิ เช็กเอาต์แล้วนั่งรถบัสด่วน Highway Bus วิ่งกลับเข้าสู่โตเกียว มุ่งตรงสู่ย่านแฟชั่นชิบูย่า',
      },
      {
        icon: 'fa-bag-shopping',
        title: 'บ่าย: ช้อปปิ้งเสื้อผ้า & เช็กอินห้าแยกชิบูย่า',
        description:
          'เข้าเช็กอินโรงแรมในเมือง เดินช้อปปิ้งตึก Shibuya 109, ไปทักทายรูปปั้นสุนัขฮาจิโกะ และเดินข้ามห้าแยกชิบูย่ามหาชน ถ่ายรูปสตรีทเท่ๆ',
      },
      {
        icon: 'fa-music',
        title: 'ดึก: ปาร์ตี้สุดมันส์ที่คลับ Atom Shibuya',
        description:
          'ทานมื้อค่ำเนื้อย่าง Yakiniku ฉลองแบบจุกๆ แล้วไปสัมผัสสีสันคลับบิ้งและแดนซ์สนุกๆ ปล่อยใจจอยๆ ที่คลับชื่อดังอันดับต้นๆ ของโตเกียว',
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
        title: 'วันเดย์ทริปเมืองเก่าริมทะเลด้วยตั๋ว Enoshima Pass',
        description:
          'นั่งรถไฟออกจากโตเกียว มุ่งสู่เมือง Kamakura นั่งรถไฟย้อนยุคสายโรแมนติก Enoden รถไฟสีเขียวที่วิ่งเลียบหน้าหาดและตัดผ่านชุมชนบ้านเรือน',
        transport: { icon: 'fa-train-subway', label: 'Enoshima Kamakura Pass' },
      },
      {
        icon: 'fa-gopuram',
        title: 'ไหว้พระใหญ่ไดบุตสึ & พิกัดอนิเมะ Slam Dunk',
        description:
          'เข้าสักการะพระพุทธรูปปางสมาธิองค์ใหญ่สีเขียวสำริดกลางแจ้ง เดินถนนคนเดิน Komachi ซื้อขนมกินเล่น และไฮไลท์คือไปยืนถ่ายรูปตรงทางรถไฟผ่านหน้าหาดตามรอยฉากเปิดอนิเมะระดับตำนาน Slam Dunk',
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
        title: '08:00 น. จัดเต็มวันสุดท้ายที่ Tokyo DisneySea',
        description:
          'นั่งรถไฟไปรอคิวเข้าสวนสนุกธีมท้องทะเลหนึ่งเดียวในโลก ตะลุยเครื่องเล่นหวาดเสียวอย่าง Journey to the Center of the Earth และไฮไลท์ห้ามพลาดคือการเข้าชมโซนเปิดใหม่ล่าสุด Fantasy Springs โลกของ Frozen และ Peter Pan อยู่ฟินยาวจนถึงเวลาชมพลุไฟสุดอลังการตอนกลางคืน',
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
        icon: 'fa-train-subway',
        title: 'มุ่งสู่สนามบินนาริตะ - บินกลับกรุงเทพฯ',
        description:
          'เช็กเอาต์จากโรงแรม แบกของฝากเต็มกระเป๋า นั่งรถไฟด่วนสาย Keisei มุ่งตรงสู่สนามบินนาริตะ (NRT) เตรียมบอร์ดดิ้งขึ้นเครื่องบินร่อนกลับเมืองไทยโดยสวัสดิภาพ',
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
