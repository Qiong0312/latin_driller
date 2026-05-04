import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';
import { normalizeLatinEnglishRows } from '@/lib/vocabularyText';

/** Slugs under `public/flashcard-icons/core-actions/{slug}.svg` (ASCII, no macrons). */
const CORE_ACTIONS_ICON_SLUGS = new Set([
  'amare',
  'ambulare',
  'aperire',
  'audire',
  'bibere',
  'clamare',
  'claudere',
  'cogitare',
  'cupere',
  'currere',
  'dicere',
  'discere',
  'docere',
  'dormire',
  'edere',
  'flere',
  'gaudere',
  'intellegere',
  'laborare',
  'lavare',
  'loqui',
  'ludere',
  'meminisse',
  'nuntiare',
  'olfacere',
  'portare',
  'putare',
  'respondere',
  'ridere',
  'rogare',
  'salutare',
  'scire',
  'sedere',
  'sentire',
  'spectare',
  'sperare',
  'stare',
  'surgere',
  'tangere',
  'timere',
  'velle',
  'videre',
  'vocare',
]);

function coreActionsIconPath(latin: string): string {
  const slug = latin
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z]/g, '');
  if (!CORE_ACTIONS_ICON_SLUGS.has(slug)) {
    return '';
  }
  return `/flashcard-icons/core-actions/${slug}.svg`;
}

function toFlashcards(items: readonly { latin: string; english: string }[]): VocabularyFlashcard[] {
  return items.map((e) => ({ ...e, icon: coreActionsIconPath(e.latin) }));
}

/** Āctiōnēs cotīdiānae — daily verbs (infinitives) */
export const CORE_ACTIONS_DAILY = normalizeLatinEnglishRows([
  { latin: 'ambulāre', english: 'to walk' },
  { latin: 'currere', english: 'to run' },
  { latin: 'sedēre', english: 'to sit' },
  { latin: 'stāre', english: 'to stand' },
  { latin: 'dormīre', english: 'to sleep' },
  { latin: 'surgere', english: 'to rise / get up' },
  { latin: 'ēdere', english: 'to eat' },
  { latin: 'bibere', english: 'to drink' },
  { latin: 'laborāre', english: 'to work' },
  { latin: 'lūdere', english: 'to play' },
  { latin: 'portāre', english: 'to carry' },
  { latin: 'lavāre', english: 'to wash' },
  { latin: 'aperīre', english: 'to open' },
  { latin: 'claudere', english: 'to close' },
]);

/** Sēnsūs — senses & perception */
export const CORE_ACTIONS_SENS = normalizeLatinEnglishRows([
  { latin: 'vidēre', english: 'to see' },
  { latin: 'audīre', english: 'to hear / listen' },
  { latin: 'sentīre', english: 'to feel / perceive' },
  { latin: 'olfacere', english: 'to smell' },
  { latin: 'tangere', english: 'to touch' },
  { latin: 'spectāre', english: 'to watch / look at' },
]);

/** Cōnloquium — communication */
export const CORE_ACTIONS_COMM = normalizeLatinEnglishRows([
  { latin: 'dīcere', english: 'to say / speak' },
  { latin: 'loquī', english: 'to speak / talk' },
  { latin: 'vocāre', english: 'to call' },
  { latin: 'rogāre', english: 'to ask' },
  { latin: 'respondēre', english: 'to answer' },
  { latin: 'clāmāre', english: 'to shout' },
  { latin: 'nūntiāre', english: 'to announce' },
  { latin: 'salūtāre', english: 'to greet' },
]);

/** Cōgitātiō et scientia — thinking & knowing */
export const CORE_ACTIONS_THINK = normalizeLatinEnglishRows([
  { latin: 'putāre', english: 'to think' },
  { latin: 'scīre', english: 'to know' },
  { latin: 'intellegere', english: 'to understand' },
  { latin: 'meminisse', english: 'to remember' },
  { latin: 'discere', english: 'to learn' },
  { latin: 'docēre', english: 'to teach' },
  { latin: 'cōgitāre', english: 'to think / consider' },
]);

/** Affectūs et cupiditās — emotion & desire */
export const CORE_ACTIONS_EMOTION = normalizeLatinEnglishRows([
  { latin: 'amāre', english: 'to love' },
  { latin: 'timēre', english: 'to fear' },
  { latin: 'sperāre', english: 'to hope' },
  { latin: 'cupere', english: 'to desire' },
  { latin: 'velle', english: 'to want' },
  { latin: 'gaudēre', english: 'to rejoice / be glad' },
  { latin: 'flēre', english: 'to cry / weep' },
  { latin: 'rīdēre', english: 'to laugh' },
]);

export const CORE_ACTIONS_DAILY_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_ACTIONS_DAILY);
export const CORE_ACTIONS_SENS_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_ACTIONS_SENS);
export const CORE_ACTIONS_COMM_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_ACTIONS_COMM);
export const CORE_ACTIONS_THINK_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_ACTIONS_THINK);
export const CORE_ACTIONS_EMOTION_CARDS: VocabularyFlashcard[] = toFlashcards(CORE_ACTIONS_EMOTION);

export const CORE_ACTIONS_ALL_FLASHCARDS: VocabularyFlashcard[] = [
  ...CORE_ACTIONS_DAILY_CARDS,
  ...CORE_ACTIONS_SENS_CARDS,
  ...CORE_ACTIONS_COMM_CARDS,
  ...CORE_ACTIONS_THINK_CARDS,
  ...CORE_ACTIONS_EMOTION_CARDS,
];
