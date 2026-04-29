import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';

function toFlashcardsWithoutIcon(items: { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: '' }));
}

/** Officia / Artēs: general occupations */
export const OCCUPATIONS_GENERAL: { latin: string; english: string }[] = [
  { latin: 'agricola', english: 'farmer' },
  { latin: 'mercātor', english: 'merchant / trader' },
  { latin: 'nauta', english: 'sailor' },
  { latin: 'servus', english: 'slave / servant' },
  { latin: 'dominus', english: 'master / lord' },
  { latin: 'rēx', english: 'king' },
  { latin: 'rēgīna', english: 'queen' },
];

/** Military & Government */
export const OCCUPATIONS_MILITARY_GOVERNMENT: { latin: string; english: string }[] = [
  { latin: 'mīles', english: 'soldier' },
  { latin: 'dux', english: 'leader / commander' },
  { latin: 'custōs', english: 'guard' },
  { latin: 'nūntius', english: 'messenger' },
];

/** Education & Knowledge */
export const OCCUPATIONS_EDUCATION: { latin: string; english: string }[] = [
  { latin: 'magister', english: 'teacher / master' },
  { latin: 'discipulus', english: 'student (male)' },
  { latin: 'discipula', english: 'student (female)' },
  { latin: 'scrība', english: 'scribe / secretary' },
  { latin: 'poēta', english: 'poet' },
  { latin: 'philosophus', english: 'philosopher' },
];

/** Crafts & Trades */
export const OCCUPATIONS_CRAFTS_TRADES: { latin: string; english: string }[] = [
  { latin: 'faber', english: 'craftsman / smith' },
  { latin: 'faber ferrārius', english: 'blacksmith' },
  { latin: 'pistor', english: 'baker' },
  { latin: 'coquus', english: 'cook' },
  { latin: 'sūtor', english: 'shoemaker' },
  { latin: 'pictor', english: 'painter' },
  { latin: 'medicus', english: 'doctor' },
  { latin: 'tonsor', english: 'barber' },
];

/** Arts & Entertainment */
export const OCCUPATIONS_ARTS_ENTERTAINMENT: { latin: string; english: string }[] = [
  { latin: 'cantor', english: 'singer' },
  { latin: 'saltātor', english: 'dancer' },
  { latin: 'histriō', english: 'actor' },
];

export const OCCUPATIONS_GENERAL_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(OCCUPATIONS_GENERAL);
export const OCCUPATIONS_MILITARY_GOVERNMENT_CARDS: VocabularyFlashcard[] =
  toFlashcardsWithoutIcon(OCCUPATIONS_MILITARY_GOVERNMENT);
export const OCCUPATIONS_EDUCATION_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(OCCUPATIONS_EDUCATION);
export const OCCUPATIONS_CRAFTS_TRADES_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(OCCUPATIONS_CRAFTS_TRADES);
export const OCCUPATIONS_ARTS_ENTERTAINMENT_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(
  OCCUPATIONS_ARTS_ENTERTAINMENT,
);

export const OCCUPATIONS_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...OCCUPATIONS_GENERAL_CARDS,
  ...OCCUPATIONS_MILITARY_GOVERNMENT_CARDS,
  ...OCCUPATIONS_EDUCATION_CARDS,
  ...OCCUPATIONS_CRAFTS_TRADES_CARDS,
  ...OCCUPATIONS_ARTS_ENTERTAINMENT_CARDS,
];
