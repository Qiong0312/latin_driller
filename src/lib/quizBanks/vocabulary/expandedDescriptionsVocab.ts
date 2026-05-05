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

/** Tempus — time & age */
export const EXPANDED_DESCRIPTIONS_TIME = normalizeLatinEnglishRows([
  { latin: 'prīmus, -a, -um', english: 'first' },
  { latin: 'ultimus, -a, -um', english: 'last' },
  { latin: 'medius, -a, -um', english: 'middle' },
  { latin: 'recēns, recentis', english: 'recent' },
  { latin: 'antīquus, -a, -um', english: 'ancient' },
  { latin: 'iuvenis, -e', english: 'young' },
  { latin: 'senex, senis', english: 'old (person)' },
]);

/** Quantitās — amount & degree */
export const EXPANDED_DESCRIPTIONS_AMOUNT = normalizeLatinEnglishRows([
  { latin: 'totus, -a, -um', english: 'whole / entire' },
  { latin: 'nullus, -a, -um', english: 'no / none' },
  { latin: 'ūllus, -a, -um', english: 'any' },
  { latin: 'alius, alia, aliud', english: 'other / another' },
  { latin: 'alter, altera, alterum', english: 'the other (of two)' },
  { latin: 'tantus, -a, -um', english: 'so great / so much' },
]);

/** Fōrma — shape & form */
export const EXPANDED_DESCRIPTIONS_SHAPE = normalizeLatinEnglishRows([
  { latin: 'rōtundus, -a, -um', english: 'round' },
  { latin: 'rectus, -a, -um', english: 'straight' },
  { latin: 'tortus, -a, -um', english: 'twisted' },
  { latin: 'plānus, -a, -um', english: 'flat' },
  { latin: 'aequus, -a, -um', english: 'level / equal' },
]);

/** Locus — position & direction */
export const EXPANDED_DESCRIPTIONS_POSITION = normalizeLatinEnglishRows([
  { latin: 'superus, -a, -um', english: 'upper / above' },
  { latin: 'inferus, -a, -um', english: 'lower / below' },
  { latin: 'interior, interius', english: 'inner' },
  { latin: 'exterior, exterius', english: 'outer' },
  { latin: 'propinquus, -a, -um', english: 'near' },
  { latin: 'longinquus, -a, -um', english: 'far' },
]);

/** Qualitās — condition & quality (strength, health, ease) */
export const EXPANDED_DESCRIPTIONS_CONDITION = normalizeLatinEnglishRows([
  { latin: 'validus, -a, -um', english: 'strong' },
  { latin: 'debilis, -e', english: 'weak' },
  { latin: 'sānus, -a, -um', english: 'healthy' },
  { latin: 'aeger, aegra, aegrum', english: 'sick' },
  { latin: 'facilis, -e', english: 'easy' },
  { latin: 'difficilis, -e', english: 'difficult' },
]);

/** Ingenium — social & character */
export const EXPANDED_DESCRIPTIONS_SOCIAL = normalizeLatinEnglishRows([
  { latin: 'superbus, -a, -um', english: 'proud' },
  { latin: 'humilis, -e', english: 'humble / low' },
  { latin: 'saevus, -a, -um', english: 'cruel' },
  { latin: 'clēmēns, clementis', english: 'merciful' },
  { latin: 'fidelis, -e', english: 'faithful' },
  { latin: 'infidelis, -e', english: 'unfaithful' },
]);

/** Aspectus — sensory & appearance */
export const EXPANDED_DESCRIPTIONS_SENSORY = normalizeLatinEnglishRows([
  { latin: 'pulcher, pulchra, pulchrum', english: 'beautiful' },
  { latin: 'foedus, -a, -um', english: 'ugly' },
  { latin: 'splendidus, -a, -um', english: 'bright / splendid' },
  { latin: 'obscurus, -a, -um', english: 'dark' },
  { latin: 'asper, aspera, asperum', english: 'rough' },
  { latin: 'lenis, -e', english: 'smooth / gentle' },
]);

export const EXPANDED_DESCRIPTIONS_TIME_CARDS: VocabularyFlashcard[] = toFlashcards(EXPANDED_DESCRIPTIONS_TIME);
export const EXPANDED_DESCRIPTIONS_AMOUNT_CARDS: VocabularyFlashcard[] = toFlashcards(EXPANDED_DESCRIPTIONS_AMOUNT);
export const EXPANDED_DESCRIPTIONS_SHAPE_CARDS: VocabularyFlashcard[] = toFlashcards(EXPANDED_DESCRIPTIONS_SHAPE);
export const EXPANDED_DESCRIPTIONS_POSITION_CARDS: VocabularyFlashcard[] = toFlashcards(EXPANDED_DESCRIPTIONS_POSITION);
export const EXPANDED_DESCRIPTIONS_CONDITION_CARDS: VocabularyFlashcard[] = toFlashcards(EXPANDED_DESCRIPTIONS_CONDITION);
export const EXPANDED_DESCRIPTIONS_SOCIAL_CARDS: VocabularyFlashcard[] = toFlashcards(EXPANDED_DESCRIPTIONS_SOCIAL);
export const EXPANDED_DESCRIPTIONS_SENSORY_CARDS: VocabularyFlashcard[] = toFlashcards(EXPANDED_DESCRIPTIONS_SENSORY);

export const EXPANDED_DESCRIPTIONS_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...EXPANDED_DESCRIPTIONS_TIME_CARDS,
  ...EXPANDED_DESCRIPTIONS_AMOUNT_CARDS,
  ...EXPANDED_DESCRIPTIONS_SHAPE_CARDS,
  ...EXPANDED_DESCRIPTIONS_POSITION_CARDS,
  ...EXPANDED_DESCRIPTIONS_CONDITION_CARDS,
  ...EXPANDED_DESCRIPTIONS_SOCIAL_CARDS,
  ...EXPANDED_DESCRIPTIONS_SENSORY_CARDS,
]);
