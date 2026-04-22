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
  outsideCategoryEnglish: string[];
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
 * - Category recognition (English)
 */
export function buildVocabularyQuestionBank({
  entries,
  categoryLabel,
  outsideCategoryEnglish,
}: BuildVocabularyQuestionBankArgs): QuizQuestion[] {
  const englishPool = entries.map((e) => e.english);
  const latinPool = entries.map((e) => e.latin);
  const bank: QuizQuestion[] = [];

  for (const e of entries) {
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

  const categoryCandidates = entries.slice(0, Math.min(entries.length, 6));
  for (const e of categoryCandidates) {
    const cat = buildOptions(e.english, outsideCategoryEnglish);
    bank.push({
      question: `Which one belongs to ${categoryLabel}?`,
      options: cat.options,
      correct: cat.correct,
    });
  }

  return bank;
}
