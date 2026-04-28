import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';

const FAMILY_ICON_SLUGS = new Set([
  'familia',
  'pater',
  'mater',
  'filius',
  'filia',
  'parens',
  'frater',
  'soror',
  'avus',
  'avia',
  'patruus',
  'avunculus',
  'amita',
  'matertera',
  'liberi',
  'infans',
  'maritus',
  'uxor',
]);

function latinToSlug(latin: string): string {
  return latin
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function toFamilyFlashcards(items: { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => {
    const slug = latinToSlug(e.latin);
    const icon = FAMILY_ICON_SLUGS.has(slug) ? `/flashcard-icons/family-members/${slug}.svg` : '';
    return { ...e, icon };
  });
}

/** Familia: immediate members */
export const FAMILY_IMMEDIATE: { latin: string; english: string }[] = [
  { latin: 'familia', english: 'family / household' },
  { latin: 'pater', english: 'father' },
  { latin: 'māter', english: 'mother' },
  { latin: 'fīlius', english: 'son' },
  { latin: 'fīlia', english: 'daughter' },
  { latin: 'parēns', english: 'parent' },
];

/** Familia: extended family */
export const FAMILY_EXTENDED: { latin: string; english: string }[] = [
  { latin: 'frāter', english: 'brother' },
  { latin: 'soror', english: 'sister' },
  { latin: 'avus', english: 'grandfather' },
  { latin: 'avia', english: 'grandmother' },
  { latin: 'patrūus', english: "uncle (father's brother)" },
  { latin: 'avunculus', english: "uncle (mother's brother)" },
  { latin: 'amita', english: "aunt (father's sister)" },
  { latin: 'mātertera', english: "aunt (mother's sister)" },
];

/** Familia: other relations */
export const FAMILY_OTHER_RELATIONS: { latin: string; english: string }[] = [
  { latin: 'līberī', english: 'children (plural)' },
  { latin: 'infāns', english: 'baby' },
  { latin: 'marītus', english: 'husband' },
  { latin: 'uxor', english: 'wife' },
];

export const FAMILY_IMMEDIATE_CARDS: VocabularyFlashcard[] = toFamilyFlashcards(FAMILY_IMMEDIATE);
export const FAMILY_EXTENDED_CARDS: VocabularyFlashcard[] = toFamilyFlashcards(FAMILY_EXTENDED);
export const FAMILY_OTHER_RELATIONS_CARDS: VocabularyFlashcard[] = toFamilyFlashcards(FAMILY_OTHER_RELATIONS);

export const FAMILY_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...FAMILY_IMMEDIATE_CARDS,
  ...FAMILY_EXTENDED_CARDS,
  ...FAMILY_OTHER_RELATIONS_CARDS,
];
