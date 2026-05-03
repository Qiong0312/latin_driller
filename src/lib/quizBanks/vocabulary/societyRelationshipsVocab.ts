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

/** Familia et Relātiōnēs */
export const SOCIETY_FAMILY = normalizeLatinEnglishRows([
  { latin: 'adiuvāre', english: 'to help' },
  { latin: 'prōtegere', english: 'to protect' },
  { latin: 'sequī', english: 'to follow' },
  { latin: 'dūcere', english: 'to lead / marry' },
  { latin: 'nūbere', english: 'to marry (of a woman)' },
  { latin: 'amīcitiam facere', english: 'to make friendship' },
  { latin: 'salūtāre', english: 'to greet' },
  { latin: 'amāre', english: 'to love' },
  { latin: 'cūrāre', english: 'to care for' },
  { latin: 'servāre', english: 'to save / preserve' },
]);

/** Disciplina et Doctrīna */
export const SOCIETY_LEARNING = normalizeLatinEnglishRows([
  { latin: 'discere', english: 'to learn' },
  { latin: 'docēre', english: 'to teach' },
  { latin: 'legere', english: 'to read' },
  { latin: 'scrībere', english: 'to write' },
  { latin: 'studēre', english: 'to study / be eager for' },
  { latin: 'respondēre', english: 'to answer' },
  { latin: 'rogāre', english: 'to ask' },
  { latin: 'explicāre', english: 'to explain' },
  { latin: 'intellegere', english: 'to understand' },
  { latin: 'meminisse', english: 'to remember' },
]);

/** Iter et Explōrātiō */
export const SOCIETY_TRAVEL = normalizeLatinEnglishRows([
  { latin: 'venīre', english: 'to come' },
  { latin: 'īre', english: 'to go' },
  { latin: 'proficīscī', english: 'to set out / depart' },
  { latin: 'redīre', english: 'to return' },
  { latin: 'nāvigāre', english: 'to sail' },
  { latin: 'pervenīre', english: 'to arrive' },
  { latin: 'intrāre', english: 'to enter' },
  { latin: 'exīre', english: 'to go out / exit' },
  { latin: 'trānsīre', english: 'to cross / go across' },
  { latin: 'errāre', english: 'to wander' },
]);

/** Relīgiō et Sacra */
export const SOCIETY_RELIGION = normalizeLatinEnglishRows([
  { latin: 'ōrāre', english: 'to pray' },
  { latin: 'sacrificāre', english: 'to sacrifice' },
  { latin: 'venerārī', english: 'to worship / honor' },
  { latin: 'laudāre', english: 'to praise' },
  { latin: 'cantāre', english: 'to sing' },
  { latin: 'invocāre', english: 'to call upon' },
  { latin: 'celebrāre', english: 'to celebrate' },
  { latin: 'offerre', english: 'to offer' },
  { latin: 'petere', english: 'to seek / request' },
  { latin: 'crēdere', english: 'to believe / trust' },
]);

/** Lēx et Societās */
export const SOCIETY_LAW = normalizeLatinEnglishRows([
  { latin: 'iūdicāre', english: 'to judge' },
  { latin: 'accūsāre', english: 'to accuse' },
  { latin: 'dēfendere', english: 'to defend' },
  { latin: 'testificārī', english: 'to testify' },
  { latin: 'imperāre', english: 'to command' },
  { latin: 'parēre', english: 'to obey' },
  { latin: 'punīre', english: 'to punish' },
  { latin: 'līberāre', english: 'to free' },
  { latin: 'damnāre', english: 'to condemn' },
  { latin: 'servāre', english: 'to preserve / protect' },
]);

export const SOCIETY_FAMILY_CARDS: VocabularyFlashcard[] = toFlashcards(SOCIETY_FAMILY);
export const SOCIETY_LEARNING_CARDS: VocabularyFlashcard[] = toFlashcards(SOCIETY_LEARNING);
export const SOCIETY_TRAVEL_CARDS: VocabularyFlashcard[] = toFlashcards(SOCIETY_TRAVEL);
export const SOCIETY_RELIGION_CARDS: VocabularyFlashcard[] = toFlashcards(SOCIETY_RELIGION);
export const SOCIETY_LAW_CARDS: VocabularyFlashcard[] = toFlashcards(SOCIETY_LAW);

export const SOCIETY_RELATIONSHIPS_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...SOCIETY_FAMILY_CARDS,
  ...SOCIETY_LEARNING_CARDS,
  ...SOCIETY_TRAVEL_CARDS,
  ...SOCIETY_RELIGION_CARDS,
  ...SOCIETY_LAW_CARDS,
]);
