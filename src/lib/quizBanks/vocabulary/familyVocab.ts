import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';

function toFlashcardsWithoutIcon(items: { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: '' }));
}

/** Familia: immediate members */
export const FAMILY_IMMEDIATE: { latin: string; english: string }[] = [
  { latin: 'familia', english: 'family / household' },
  { latin: 'pater', english: 'father' },
  { latin: 'mater', english: 'mother' },
  { latin: 'filius', english: 'son' },
  { latin: 'filia', english: 'daughter' },
  { latin: 'parens', english: 'parent' },
];

/** Familia: extended family */
export const FAMILY_EXTENDED: { latin: string; english: string }[] = [
  { latin: 'frater', english: 'brother' },
  { latin: 'soror', english: 'sister' },
  { latin: 'avus', english: 'grandfather' },
  { latin: 'avia', english: 'grandmother' },
  { latin: 'patruus', english: "uncle (father's brother)" },
  { latin: 'avunculus', english: "uncle (mother's brother)" },
  { latin: 'amita', english: "aunt (father's sister)" },
  { latin: 'matertera', english: "aunt (mother's sister)" },
];

/** Familia: other relations */
export const FAMILY_OTHER_RELATIONS: { latin: string; english: string }[] = [
  { latin: 'liberi', english: 'children (plural)' },
  { latin: 'infans', english: 'baby' },
  { latin: 'maritus', english: 'husband' },
  { latin: 'uxor', english: 'wife' },
];

export const FAMILY_IMMEDIATE_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(FAMILY_IMMEDIATE);
export const FAMILY_EXTENDED_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(FAMILY_EXTENDED);
export const FAMILY_OTHER_RELATIONS_CARDS: VocabularyFlashcard[] = toFlashcardsWithoutIcon(FAMILY_OTHER_RELATIONS);

export const FAMILY_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...FAMILY_IMMEDIATE_CARDS,
  ...FAMILY_EXTENDED_CARDS,
  ...FAMILY_OTHER_RELATIONS_CARDS,
];
