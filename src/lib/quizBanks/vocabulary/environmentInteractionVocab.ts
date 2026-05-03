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

/** Āctiōnēs Domūs — verbs around the home */
export const ENV_INTERACTION_HOME = normalizeLatinEnglishRows([
  { latin: 'coquere', english: 'to cook' },
  { latin: 'mundāre', english: 'to clean' },
  { latin: 'ornāre', english: 'to decorate' },
  { latin: 'parāre', english: 'to prepare' },
  { latin: 'movēre', english: 'to move' },
  { latin: 'iacēre', english: 'to throw' },
  { latin: 'trahere', english: 'to pull' },
  { latin: 'premere', english: 'to press' },
  { latin: 'tenēre', english: 'to hold' },
  { latin: 'relinquere', english: 'to leave behind' },
  { latin: 'custōdīre', english: 'to guard / protect' },
  { latin: 'accendere', english: 'to light / ignite' },
  { latin: 'exstinguere', english: 'to extinguish / put out' },
]);

/** Mercātus et Pecūnia — trade and money */
export const ENV_INTERACTION_MARKETPLACE = normalizeLatinEnglishRows([
  { latin: 'emere', english: 'to buy' },
  { latin: 'vendere', english: 'to sell' },
  { latin: 'solvere', english: 'to pay' },
  { latin: 'trādere', english: 'to hand over / deliver' },
  { latin: 'commūtāre', english: 'to exchange' },
  { latin: 'numerāre', english: 'to count' },
  { latin: 'cōnstāre', english: 'to cost' },
  { latin: 'debere', english: 'to owe' },
  { latin: 'quaerere', english: 'to seek / ask for' },
  { latin: 'comparāre', english: 'to obtain / purchase' },
]);

/** Mīlitia et Imperium — force and rule */
export const ENV_INTERACTION_MILITARY = normalizeLatinEnglishRows([
  { latin: 'pugnāre', english: 'to fight' },
  { latin: 'vincere', english: 'to conquer / defeat' },
  { latin: 'superāre', english: 'to overcome' },
  { latin: 'imperāre', english: 'to command' },
  { latin: 'dūcere', english: 'to lead' },
  { latin: 'regere', english: 'to rule / guide' },
  { latin: 'custōdīre', english: 'to guard' },
  { latin: 'oppugnāre', english: 'to attack' },
  { latin: 'dēfendere', english: 'to defend' },
  { latin: 'parēre', english: 'to obey' },
]);

/** Nātūra et Mōtus — motion in the natural world */
export const ENV_INTERACTION_NATURE = normalizeLatinEnglishRows([
  { latin: 'fluere', english: 'to flow' },
  { latin: 'cadere', english: 'to fall' },
  { latin: 'surgere', english: 'to rise' },
  { latin: 'crescere', english: 'to grow' },
  { latin: 'movēre', english: 'to move' },
  { latin: 'nāvigāre', english: 'to sail' },
  { latin: 'volāre', english: 'to fly' },
  { latin: 'currere', english: 'to run' },
  { latin: 'ambulāre', english: 'to walk' },
  { latin: 'errāre', english: 'to wander' },
]);

/** Tempestās et Nātūra — weather and phenomena */
export const ENV_INTERACTION_WEATHER = normalizeLatinEnglishRows([
  { latin: 'pluere', english: 'to rain' },
  { latin: 'ningere', english: 'to snow' },
  { latin: 'tonāre', english: 'to thunder' },
  { latin: 'fulgēre', english: 'to shine' },
  { latin: 'ardēre', english: 'to burn' },
  { latin: 'lucēre', english: 'to shine / give light' },
  { latin: 'ventāre', english: 'to blow (of wind)' },
]);

export const ENV_INTERACTION_HOME_CARDS: VocabularyFlashcard[] = toFlashcards(ENV_INTERACTION_HOME);
export const ENV_INTERACTION_MARKETPLACE_CARDS: VocabularyFlashcard[] = toFlashcards(ENV_INTERACTION_MARKETPLACE);
export const ENV_INTERACTION_MILITARY_CARDS: VocabularyFlashcard[] = toFlashcards(ENV_INTERACTION_MILITARY);
export const ENV_INTERACTION_NATURE_CARDS: VocabularyFlashcard[] = toFlashcards(ENV_INTERACTION_NATURE);
export const ENV_INTERACTION_WEATHER_CARDS: VocabularyFlashcard[] = toFlashcards(ENV_INTERACTION_WEATHER);

export const ENVIRONMENT_INTERACTION_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...ENV_INTERACTION_HOME_CARDS,
  ...ENV_INTERACTION_MARKETPLACE_CARDS,
  ...ENV_INTERACTION_MILITARY_CARDS,
  ...ENV_INTERACTION_NATURE_CARDS,
  ...ENV_INTERACTION_WEATHER_CARDS,
]);
