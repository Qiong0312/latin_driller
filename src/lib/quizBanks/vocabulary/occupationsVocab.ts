import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import { normalizeLatinEnglishRows } from '@/lib/vocabularyText';

const OCCUPATIONS_ICON_OVERRIDES: Record<string, string> = {
  pictor: '/flashcard-icons/occupations/painter.svg',
  'faber ferrarius': '/flashcard-icons/occupations/faber ferrarius.svg',
};

function latinToSlug(latin: string): string {
  return latin
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function toOccupationsFlashcards(items: { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => {
    const normalizedLatin = e.latin
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const icon =
      OCCUPATIONS_ICON_OVERRIDES[normalizedLatin] ??
      `/flashcard-icons/occupations/${latinToSlug(e.latin)}.svg`;

    return { ...e, icon };
  });
}

/** Officia / Artēs: general occupations */
export const OCCUPATIONS_GENERAL = normalizeLatinEnglishRows([
  { latin: 'agricola', english: 'farmer' },
  { latin: 'mercātor', english: 'merchant / trader' },
  { latin: 'nauta', english: 'sailor' },
  { latin: 'servus', english: 'slave / servant' },
  { latin: 'dominus', english: 'master / lord' },
  { latin: 'rēx', english: 'king' },
  { latin: 'rēgīna', english: 'queen' },
]);

/** Military & Government */
export const OCCUPATIONS_MILITARY_GOVERNMENT = normalizeLatinEnglishRows([
  { latin: 'mīles', english: 'soldier' },
  { latin: 'dux', english: 'leader / commander' },
  { latin: 'custōs', english: 'guard' },
  { latin: 'nūntius', english: 'messenger' },
]);

/** Education & Knowledge */
export const OCCUPATIONS_EDUCATION = normalizeLatinEnglishRows([
  { latin: 'magister', english: 'teacher / master' },
  { latin: 'discipulus', english: 'student (male)' },
  { latin: 'discipula', english: 'student (female)' },
  { latin: 'scrība', english: 'scribe / secretary' },
  { latin: 'poēta', english: 'poet' },
  { latin: 'philosophus', english: 'philosopher' },
]);

/** Crafts & Trades */
export const OCCUPATIONS_CRAFTS_TRADES = normalizeLatinEnglishRows([
  { latin: 'faber', english: 'craftsman / smith' },
  { latin: 'faber ferrārius', english: 'blacksmith' },
  { latin: 'pistor', english: 'baker' },
  { latin: 'coquus', english: 'cook' },
  { latin: 'sūtor', english: 'shoemaker' },
  { latin: 'pictor', english: 'painter' },
  { latin: 'medicus', english: 'doctor' },
  { latin: 'tonsor', english: 'barber' },
]);

/** Arts & Entertainment */
export const OCCUPATIONS_ARTS_ENTERTAINMENT = normalizeLatinEnglishRows([
  { latin: 'cantor', english: 'singer' },
  { latin: 'saltātor', english: 'dancer' },
  { latin: 'histriō', english: 'actor' },
]);

export const OCCUPATIONS_GENERAL_CARDS: VocabularyFlashcard[] = toOccupationsFlashcards(OCCUPATIONS_GENERAL);
export const OCCUPATIONS_MILITARY_GOVERNMENT_CARDS: VocabularyFlashcard[] =
  toOccupationsFlashcards(OCCUPATIONS_MILITARY_GOVERNMENT);
export const OCCUPATIONS_EDUCATION_CARDS: VocabularyFlashcard[] = toOccupationsFlashcards(OCCUPATIONS_EDUCATION);
export const OCCUPATIONS_CRAFTS_TRADES_CARDS: VocabularyFlashcard[] = toOccupationsFlashcards(OCCUPATIONS_CRAFTS_TRADES);
export const OCCUPATIONS_ARTS_ENTERTAINMENT_CARDS: VocabularyFlashcard[] = toOccupationsFlashcards(
  OCCUPATIONS_ARTS_ENTERTAINMENT,
);

export const OCCUPATIONS_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...OCCUPATIONS_GENERAL_CARDS,
  ...OCCUPATIONS_MILITARY_GOVERNMENT_CARDS,
  ...OCCUPATIONS_EDUCATION_CARDS,
  ...OCCUPATIONS_CRAFTS_TRADES_CARDS,
  ...OCCUPATIONS_ARTS_ENTERTAINMENT_CARDS,
];
