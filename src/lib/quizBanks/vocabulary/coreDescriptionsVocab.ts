import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import { normalizeLatinEnglishRows } from '@/lib/vocabularyText';

function toFlashcards(items: readonly { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: '' }));
}

function dedupeFlashcardsByLatin(cards: readonly VocabularyFlashcard[]): VocabularyFlashcard[] {
  const seen = new Set<string>();
  const out: VocabularyFlashcard[] = [];
  for (const c of cards) {
    if (seen.has(c.latin)) {
      continue;
    }
    seen.add(c.latin);
    out.push(c);
  }
  return out;
}

/** Magnitūdō — size and quantity */
export const CORE_DESCRIPTIONS_SIZE = normalizeLatinEnglishRows([
  { latin: 'magnus, -a, -um', english: 'big / large' },
  { latin: 'parvus, -a, -um', english: 'small' },
  { latin: 'longus, -a, -um', english: 'long' },
  { latin: 'brevis, -e', english: 'short' },
  { latin: 'multus, -a, -um', english: 'much / many' },
  { latin: 'paucus, -a, -um', english: 'few' },
]);

/** Qualitās — quality and value */
export const CORE_DESCRIPTIONS_QUALITY = normalizeLatinEnglishRows([
  { latin: 'bonus, -a, -um', english: 'good' },
  { latin: 'malus, -a, -um', english: 'bad' },
  { latin: 'optimus, -a, -um', english: 'best' },
  { latin: 'pessimus, -a, -um', english: 'worst' },
  { latin: 'clarus, -a, -um', english: 'clear / bright / famous' },
  { latin: 'famosus, -a, -um', english: 'famous' },
]);

/** Corpus / Forma — physical properties */
export const CORE_DESCRIPTIONS_PHYSICAL = normalizeLatinEnglishRows([
  { latin: 'altus, -a, -um', english: 'high / tall / deep' },
  { latin: 'latus, -a, -um', english: 'wide / broad' },
  { latin: 'angustus, -a, -um', english: 'narrow' },
  { latin: 'gravis, -e', english: 'heavy / serious' },
  { latin: 'levis, -e', english: 'light' },
  { latin: 'dūrus, -a, -um', english: 'hard' },
  { latin: 'mollis, -e', english: 'soft' },
]);

/** Status — condition and state */
export const CORE_DESCRIPTIONS_CONDITION = normalizeLatinEnglishRows([
  { latin: 'novus, -a, -um', english: 'new' },
  { latin: 'antīquus, -a, -um', english: 'old / ancient' },
  { latin: 'vetus, veteris', english: 'old (person or thing; 3rd decl.)' },
  { latin: 'celer, celeris, celere', english: 'quick / fast' },
  { latin: 'lentus, -a, -um', english: 'slow' },
  { latin: 'plēnus, -a, -um', english: 'full' },
  { latin: 'vacuus, -a, -um', english: 'empty' },
]);

/** Aspectus — basic appearance and color */
export const CORE_DESCRIPTIONS_APPEARANCE = normalizeLatinEnglishRows([
  { latin: 'albus, -a, -um', english: 'white' },
  { latin: 'niger, nigra, nigrum', english: 'black' },
  { latin: 'ruber, rubra, rubrum', english: 'red' },
  { latin: 'caeruleus, -a, -um', english: 'blue' },
  { latin: 'viridis, -e', english: 'green' },
  { latin: 'flavus, -a, -um', english: 'yellow' },
]);

/** Ingenium — simple personality traits */
export const CORE_DESCRIPTIONS_PERSONALITY = normalizeLatinEnglishRows([
  { latin: 'laetus, -a, -um', english: 'happy' },
  { latin: 'tristis, -e', english: 'sad' },
  { latin: 'fortis, -e', english: 'brave' },
  { latin: 'timidus, -a, -um', english: 'shy / fearful' },
  { latin: 'īrātus, -a, -um', english: 'angry' },
  { latin: 'benignus, -a, -um', english: 'kind' },
]);

export const CORE_DESCRIPTIONS_SIZE_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_DESCRIPTIONS_SIZE);
export const CORE_DESCRIPTIONS_QUALITY_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_DESCRIPTIONS_QUALITY);
export const CORE_DESCRIPTIONS_PHYSICAL_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_DESCRIPTIONS_PHYSICAL);
export const CORE_DESCRIPTIONS_CONDITION_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_DESCRIPTIONS_CONDITION);
export const CORE_DESCRIPTIONS_APPEARANCE_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_DESCRIPTIONS_APPEARANCE);
export const CORE_DESCRIPTIONS_PERSONALITY_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_DESCRIPTIONS_PERSONALITY);

export const CORE_DESCRIPTIONS_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...CORE_DESCRIPTIONS_SIZE_CARDS,
  ...CORE_DESCRIPTIONS_QUALITY_CARDS,
  ...CORE_DESCRIPTIONS_PHYSICAL_CARDS,
  ...CORE_DESCRIPTIONS_CONDITION_CARDS,
  ...CORE_DESCRIPTIONS_APPEARANCE_CARDS,
  ...CORE_DESCRIPTIONS_PERSONALITY_CARDS,
]);
