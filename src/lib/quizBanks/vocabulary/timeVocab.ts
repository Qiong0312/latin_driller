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

/** Tempora Fundamentālia — basic units */
export const TIME_BASIC_UNITS = normalizeLatinEnglishRows([
  { latin: 'tempus (gen. temporis)', english: 'time' },
  { latin: 'diēs', english: 'day' },
  { latin: 'nox (gen. noctis)', english: 'night' },
  { latin: 'hōra', english: 'hour' },
  { latin: 'minūtum', english: 'minute (later Latin)' },
  { latin: 'secunda', english: 'second (later Latin)' },
]);

/** Tempora Maiōra — larger units */
export const TIME_LARGER_UNITS = normalizeLatinEnglishRows([
  { latin: 'hebdomas (gen. hebdomadis)', english: 'week' },
  { latin: 'mēnsis', english: 'month' },
  { latin: 'annus', english: 'year' },
  { latin: 'saeculum', english: 'age / generation / century' },
]);

/** Partēs Diēī — parts of the day */
export const TIME_PARTS_OF_DAY = normalizeLatinEnglishRows([
  { latin: 'māne', english: 'morning' },
  { latin: 'merīdiēs', english: 'midday / noon' },
  { latin: 'vesper', english: 'evening' },
  { latin: 'nox', english: 'night' },
]);

/** Specific moments & periods */
export const TIME_MOMENTS_PERIODS = normalizeLatinEnglishRows([
  { latin: 'initium', english: 'beginning' },
  { latin: 'fīnis', english: 'end' },
  { latin: 'tempus līberum', english: 'free time / leisure' },
  { latin: 'ōtium', english: 'leisure / free time' },
  { latin: 'mora', english: 'delay' },
]);

/** Frequency & occasion */
export const TIME_FREQUENCY = normalizeLatinEnglishRows([
  { latin: 'vīcis (gen. vicis)', english: 'turn / change / succession' },
  { latin: 'iterum', english: 'a second time / again (adverb)' },
  { latin: 'tempus opportūnum', english: 'opportunity / right time' },
]);

export const TIME_BASIC_UNITS_CARDS: VocabularyFlashcard[] = toFlashcards(TIME_BASIC_UNITS);
export const TIME_LARGER_UNITS_CARDS: VocabularyFlashcard[] = toFlashcards(TIME_LARGER_UNITS);
export const TIME_PARTS_OF_DAY_CARDS: VocabularyFlashcard[] = toFlashcards(TIME_PARTS_OF_DAY);
export const TIME_MOMENTS_PERIODS_CARDS: VocabularyFlashcard[] = toFlashcards(TIME_MOMENTS_PERIODS);
export const TIME_FREQUENCY_CARDS: VocabularyFlashcard[] = toFlashcards(TIME_FREQUENCY);

export const TIME_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...TIME_BASIC_UNITS_CARDS,
  ...TIME_LARGER_UNITS_CARDS,
  ...TIME_PARTS_OF_DAY_CARDS,
  ...TIME_MOMENTS_PERIODS_CARDS,
  ...TIME_FREQUENCY_CARDS,
]);
