// utils/badWords.ts

const badWords = [
  // Indonesia
  'anjing',
  'monyet',
  'bangsat',
  'bajingan',
  'brengsek',
  'kampret',
  'kontol',
  'memek',
  'ngentot',
  'ngentod',
  'ngent*t',
  'pepek',
  'peler',
  'titit',
  'tai',
  'taik',
  'goblok',
  'tolol',
  'idiot',
  'bego',
  'sialan',
  'keparat',
  'jancuk',
  'jancok',
  'asu',
  'lonte',
  'pelacur',
  'bokep',
  'mesum',

  // Sunda
  'anjing',
  'asu',
  'bagong',
  'bangsat',
  'bajingan',
  'kehed',
  'koplok',
  'belegug',
  'goblok',
  'tolol',
  'tai',
  'taik',
  'kontol',
  'memek',
  'pepek',
  'peler',
  'ngentot',
  'sialan',
  'jurig',
  'setan',

  // English
  'fuck',
  'f*ck',
  'fucking',
  'shit',
  'bullshit',
  'asshole',
  'bitch',
  'bastard',
  'motherfucker',
  'dick',
  'pussy',
  'cock',
  'cunt',
  'slut',
  'whore',
  'retard',
  'idiot',
  'stupid',
  'damn',
  'hell'
]

// 🔹 Normalisasi teks (anti-trik)
const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[@4]/g, 'a')
    .replace(/[0]/g, 'o')
    .replace(/[3]/g, 'e')
    .replace(/[1]/g, 'i')
    .replace(/[*_\-.]/g, '')

// 🔹 Validasi utama
export function containsBadWords(text: string): boolean {
  const cleanText = normalize(text)

  return badWords.some(word =>
    cleanText.includes(word)
  )
}
