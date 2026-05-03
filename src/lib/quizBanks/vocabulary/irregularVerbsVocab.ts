import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import { normalizeLatinEnglishRows } from '@/lib/vocabularyText';

function toFlashcards(items: readonly { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: '' }));
}

/** esse, posse, velle, ferre, and related auxiliaries */
export const IRREGULAR_VERBS_ESSENTIAL = normalizeLatinEnglishRows([
  { latin: 'esse', english: 'to be' },
  { latin: 'posse', english: 'to be able / can' },
  { latin: 'īre', english: 'to go' },
  { latin: 'velle', english: 'to want' },
  { latin: 'nōlle', english: 'to not want' },
  { latin: 'mālle', english: 'to prefer' },
  { latin: 'ferre', english: 'to carry / bring' },
  { latin: 'fierī', english: 'to become / be made' },
]);

export const IRREGULAR_VERBS_COMMON = normalizeLatinEnglishRows([
  { latin: 'dare', english: 'to give' },
  { latin: 'ēdere', english: 'to eat' },
  { latin: 'inquam', english: 'to say' },
  { latin: 'aiō', english: 'to say / affirm' },
]);

export const IRREGULAR_VERBS_COMPOUND = normalizeLatinEnglishRows([
  { latin: 'abesse', english: 'to be away / absent' },
  { latin: 'adesse', english: 'to be present' },
  { latin: 'redīre', english: 'to return' },
  { latin: 'offerre', english: 'to offer' },
  { latin: 'referre', english: 'to bring back / report' },
  { latin: 'transferre', english: 'to carry across / transfer' },
]);

export const IRREGULAR_VERBS_ESSENTIAL_CARDS: VocabularyFlashcard[] = toFlashcards(IRREGULAR_VERBS_ESSENTIAL);
export const IRREGULAR_VERBS_COMMON_CARDS: VocabularyFlashcard[] = toFlashcards(IRREGULAR_VERBS_COMMON);
export const IRREGULAR_VERBS_COMPOUND_CARDS: VocabularyFlashcard[] = toFlashcards(IRREGULAR_VERBS_COMPOUND);

export const IRREGULAR_VERBS_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...IRREGULAR_VERBS_ESSENTIAL_CARDS,
  ...IRREGULAR_VERBS_COMMON_CARDS,
  ...IRREGULAR_VERBS_COMPOUND_CARDS,
];
