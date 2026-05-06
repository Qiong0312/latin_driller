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

/** Librī et Instrumenta */
export const SCHOOL_STUDY_MATERIALS = normalizeLatinEnglishRows([
  { latin: 'līber', english: 'book' },
  { latin: 'volūmen (gen. volūminis)', english: 'scroll' },
  { latin: 'tabula', english: 'tablet / writing board' },
  { latin: 'carta', english: 'paper (later latin)' },
  { latin: 'stilus', english: 'stylus / writing tool' },
  { latin: 'calamus', english: 'pen / reed pen' },
  { latin: 'atrāmentum', english: 'ink' },
]);

/** Lingua et Scriptum */
export const SCHOOL_LANGUAGE_CONTENT = normalizeLatinEnglishRows([
  { latin: 'littera', english: 'letter (of alphabet)' },
  { latin: 'litterae', english: 'letter (epistle) / literature' },
  { latin: 'verbum', english: 'word' },
  { latin: 'nōmen', english: 'name / noun' },
  { latin: 'sententia', english: 'sentence / meaning' },
  { latin: 'fābula', english: 'story' },
]);

/** Disciplina — learning concepts */
export const SCHOOL_LEARNING_CONCEPTS = normalizeLatinEnglishRows([
  { latin: 'doctrīna', english: 'teaching / knowledge' },
  { latin: 'disciplīna', english: 'instruction / subject / discipline' },
  { latin: 'studium', english: 'study / eagerness' },
  { latin: 'ars (gen. artis)', english: 'skill / art' },
  { latin: 'scientia', english: 'knowledge' },
  { latin: 'memoria', english: 'memory' },
]);

/** School environment */
export const SCHOOL_ENVIRONMENT = normalizeLatinEnglishRows([
  { latin: 'schola', english: 'school / classroom' },
  { latin: 'cathedra', english: "chair / teacher's seat" },
  { latin: 'mēnsa', english: 'table / desk' },
  { latin: 'locus', english: 'place' },
]);

export const SCHOOL_STUDY_MATERIALS_CARDS: VocabularyFlashcard[] = toFlashcards(SCHOOL_STUDY_MATERIALS);
export const SCHOOL_LANGUAGE_CONTENT_CARDS: VocabularyFlashcard[] = toFlashcards(SCHOOL_LANGUAGE_CONTENT);
export const SCHOOL_LEARNING_CONCEPTS_CARDS: VocabularyFlashcard[] = toFlashcards(SCHOOL_LEARNING_CONCEPTS);
export const SCHOOL_ENVIRONMENT_CARDS: VocabularyFlashcard[] = toFlashcards(SCHOOL_ENVIRONMENT);

export const SCHOOL_LEARNING_ALL_FLASHCARDS: VocabularyFlashcard[] = dedupeFlashcardsByLatin([
  ...SCHOOL_STUDY_MATERIALS_CARDS,
  ...SCHOOL_LANGUAGE_CONTENT_CARDS,
  ...SCHOOL_LEARNING_CONCEPTS_CARDS,
  ...SCHOOL_ENVIRONMENT_CARDS,
]);
