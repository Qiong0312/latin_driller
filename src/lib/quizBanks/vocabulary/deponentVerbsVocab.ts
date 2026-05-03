import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import { normalizeLatinEnglishRows } from '@/lib/vocabularyText';

function toFlashcards(items: readonly { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: '' }));
}

export const DEPONENT_COMM = normalizeLatinEnglishRows([
  { latin: 'loquī', english: 'to speak' },
  { latin: 'fārī', english: 'to speak / say' },
  { latin: 'mentīrī', english: 'to lie' },
]);

export const DEPONENT_MOVEMENT = normalizeLatinEnglishRows([
  { latin: 'sequī', english: 'to follow' },
  { latin: 'proficīscī', english: 'to set out / depart' },
  { latin: 'ingredī', english: 'to enter' },
  { latin: 'regredī', english: 'to go back / retreat' },
  { latin: 'morārī', english: 'to delay / linger' },
]);

export const DEPONENT_EMOTION = normalizeLatinEnglishRows([
  { latin: 'mīrārī', english: 'to wonder / admire' },
  { latin: 'verērī', english: 'to fear / respect' },
  { latin: 'hortārī', english: 'to encourage' },
  { latin: 'cōnārī', english: 'to try / attempt' },
]);

export const DEPONENT_SOCIAL = normalizeLatinEnglishRows([
  { latin: 'testificārī', english: 'to testify' },
  { latin: 'ūti', english: 'to use' },
  { latin: 'fruī', english: 'to enjoy' },
  { latin: 'vēscī', english: 'to feed on / eat' },
]);

export const DEPONENT_SEMI = normalizeLatinEnglishRows([
  { latin: 'audēre', english: 'to dare' },
  { latin: 'gaudēre', english: 'to rejoice' },
  { latin: 'solēre', english: 'to be accustomed' },
  { latin: 'fīdere', english: 'to trust' },
]);

export const DEPONENT_COMM_CARDS: VocabularyFlashcard[] = toFlashcards(DEPONENT_COMM);
export const DEPONENT_MOVEMENT_CARDS: VocabularyFlashcard[] = toFlashcards(DEPONENT_MOVEMENT);
export const DEPONENT_EMOTION_CARDS: VocabularyFlashcard[] = toFlashcards(DEPONENT_EMOTION);
export const DEPONENT_SOCIAL_CARDS: VocabularyFlashcard[] = toFlashcards(DEPONENT_SOCIAL);
export const DEPONENT_SEMI_CARDS: VocabularyFlashcard[] = toFlashcards(DEPONENT_SEMI);

export const DEPONENT_VERBS_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...DEPONENT_COMM_CARDS,
  ...DEPONENT_MOVEMENT_CARDS,
  ...DEPONENT_EMOTION_CARDS,
  ...DEPONENT_SOCIAL_CARDS,
  ...DEPONENT_SEMI_CARDS,
];
