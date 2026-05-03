import type { VocabularyFlashcard } from '@/components/VocabularyFlashcards';

/** Lowercases Latin and English gloss text for consistent lessons, flashcards, and quizzes. */
export function normalizeVocabularyLessonText(s: string): string {
  return s.trim().toLowerCase();
}

export function normalizeLatinEnglishRows<T extends { latin: string; english: string }>(
  rows: readonly T[],
): T[] {
  return rows.map((r) => ({
    ...r,
    latin: normalizeVocabularyLessonText(r.latin),
    english: normalizeVocabularyLessonText(r.english),
  })) as T[];
}

export function normalizeVocabularyFlashcards(
  cards: readonly VocabularyFlashcard[],
): VocabularyFlashcard[] {
  return cards.map((c) => ({
    ...c,
    latin: normalizeVocabularyLessonText(c.latin),
    english: normalizeVocabularyLessonText(c.english),
  }));
}
