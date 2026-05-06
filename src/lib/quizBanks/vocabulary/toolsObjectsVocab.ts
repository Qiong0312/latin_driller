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

/** General tools */
export const TOOLS_GENERAL = normalizeLatinEnglishRows([
  { latin: 'instrumentum', english: 'tool / equipment' },
  { latin: 'ferrum', english: 'iron / tool / weapon' },
  { latin: 'malleus', english: 'hammer' },
  { latin: 'clāvus', english: 'nail' },
  { latin: 'serra', english: 'saw' },
  { latin: 'līma', english: 'file (tool)' },
]);

/** Cutting & work tools */
export const TOOLS_CUTTING_WORK = normalizeLatinEnglishRows([
  { latin: 'culter (gen. cultrī)', english: 'knife' },
  { latin: 'gladius', english: 'sword' },
  { latin: 'falx (gen. falcis)', english: 'sickle / curved blade' },
  { latin: 'forfex (gen. forficis)', english: 'scissors' },
]);

/** Household objects */
export const TOOLS_HOUSEHOLD = normalizeLatinEnglishRows([
  { latin: 'clāvis', english: 'key' },
  { latin: 'sera', english: 'lock / bar' },
  { latin: 'arca', english: 'chest / box' },
  { latin: 'cista', english: 'basket / box' },
  { latin: 'vas (gen. vasis)', english: 'vessel / container' },
]);

/** Everyday objects */
export const TOOLS_EVERYDAY = normalizeLatinEnglishRows([
  { latin: 'poculum', english: 'cup' },
  { latin: 'calix (gen. calicis)', english: 'cup / goblet' },
  { latin: 'patina', english: 'dish / plate' },
  { latin: 'cochlear', english: 'spoon' },
  { latin: 'urceus', english: 'jug / pitcher' },
]);

/** Small useful items */
export const TOOLS_SMALL_USEFUL = normalizeLatinEnglishRows([
  { latin: 'acus', english: 'needle' },
  { latin: 'fīlum', english: 'thread' },
  { latin: 'fūnis', english: 'rope' },
  { latin: 'catēna', english: 'chain' },
]);

export const TOOLS_GENERAL_CARDS: VocabularyFlashcard[] = toFlashcards(TOOLS_GENERAL);
export const TOOLS_CUTTING_WORK_CARDS: VocabularyFlashcard[] = toFlashcards(TOOLS_CUTTING_WORK);
export const TOOLS_HOUSEHOLD_CARDS: VocabularyFlashcard[] = toFlashcards(TOOLS_HOUSEHOLD);
export const TOOLS_EVERYDAY_CARDS: VocabularyFlashcard[] = toFlashcards(TOOLS_EVERYDAY);
export const TOOLS_SMALL_USEFUL_CARDS: VocabularyFlashcard[] = toFlashcards(TOOLS_SMALL_USEFUL);

export const TOOLS_OBJECTS_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...TOOLS_GENERAL_CARDS,
  ...TOOLS_CUTTING_WORK_CARDS,
  ...TOOLS_HOUSEHOLD_CARDS,
  ...TOOLS_EVERYDAY_CARDS,
  ...TOOLS_SMALL_USEFUL_CARDS,
]);
