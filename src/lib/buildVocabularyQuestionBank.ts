import { normalizeVocabularyLessonText } from '@/lib/vocabularyText';

export type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
};

export type VocabEntry = {
  latin: string;
  english: string;
};

type BuildVocabularyQuestionBankArgs = {
  entries: VocabEntry[];
  categoryLabel: string;
  outsideCategoryLatin: string[];
};

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildOptions(correct: string, distractors: string[]): { options: string[]; correct: number } {
  const picked = shuffle(
    [...new Set(distractors.filter((d) => d !== correct))].slice(0, 16),
  ).slice(0, 3);
  const options = shuffle([correct, ...picked]);
  return {
    options,
    correct: options.indexOf(correct),
  };
}

/**
 * Builds a larger, mixed-format vocabulary bank:
 * - English -> Latin
 * - Latin -> English
 * - Category recognition with Latin answer options
 */
export function buildVocabularyQuestionBank({
  entries,
  categoryLabel,
  outsideCategoryLatin,
}: BuildVocabularyQuestionBankArgs): QuizQuestion[] {
  const normEntries = entries.map((e) => ({
    latin: normalizeVocabularyLessonText(e.latin),
    english: normalizeVocabularyLessonText(e.english),
  }));
  const outsideNorm = outsideCategoryLatin.map(normalizeVocabularyLessonText);

  const englishPool = normEntries.map((e) => e.english);
  const latinPool = normEntries.map((e) => e.latin);
  const bank: QuizQuestion[] = [];

  for (const e of normEntries) {
    const enToLa = buildOptions(e.latin, latinPool);
    bank.push({
      question: `Given "${e.english}", what is the Latin word?`,
      options: enToLa.options,
      correct: enToLa.correct,
    });

    const laToEn = buildOptions(e.english, englishPool);
    bank.push({
      question: `Given "${e.latin}", what is the English meaning?`,
      options: laToEn.options,
      correct: laToEn.correct,
    });
  }

  const categoryCandidates = normEntries.slice(0, Math.min(normEntries.length, 6));
  for (const e of categoryCandidates) {
    const cat = buildOptions(e.latin, outsideNorm);
    bank.push({
      question: `Which Latin word belongs to ${categoryLabel}?`,
      options: cat.options,
      correct: cat.correct,
    });
  }

  return bank;
}
