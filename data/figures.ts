import { Figure } from '../types/Figure';

export const figures: Figure[] = [
  {
    id: 1,
    name: "福沢諭吉",
    birthDate: "1835-01-10",
    deathDate: "1901-02-03",
    quote: "天は人の上に人を造らず人の下に人を造らず",
    explanation: "「学問のすゝめ」の冒頭の一文。全ての人間は平等であるという考えを示している。"
  },
  {
    id: 2,
    name: "アルベルト・アインシュタイン",
    birthDate: "1879-03-14",
    deathDate: "1955-04-18",
    quote: "想像力は知識よりも重要である。知識には限界があるが、想像力は世界を包み込む。",
    explanation: "創造性と想像力の重要性を説いた名言。科学的発見においても想像力が重要な役割を果たすことを強調している。"
  },
  {
    id: 3,
    name: "マザー・テレサ",
    birthDate: "1910-08-26",
    deathDate: "1997-09-05",
    quote: "愛の反対は憎しみではなく無関心です。",
    explanation: "他者への無関心が最も危険であることを説いた言葉。積極的に愛を示す重要性を教えている。"
  },
  {
    id: 4,
    name: "スティーブ・ジョブズ",
    birthDate: "1955-02-24",
    deathDate: "2011-10-05",
    quote: "Stay hungry, stay foolish.",
    explanation: "常に向上心を持ち、臆することなく挑戦し続けることの大切さを説いた言葉。スタンフォード大学のスピーチで引用され有名になった。"
  },
  {
    id: 5,
    name: "ヘレン・ケラー",
    birthDate: "1880-06-27",
    deathDate: "1968-06-01",
    quote: "一人では何もできないが、みんなで力を合わせれば何でもできる。",
    explanation: "協力することの重要性を説いた言葉。困難を乗り越えるために人々が互いに助け合うことの大切さを伝えている。"
  }
];

export function getFigureForDay(date: Date): Figure {
  const dayOfYear = getDayOfYear(date);
  const index = dayOfYear % figures.length;
  return figures[index];
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
