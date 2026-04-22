/** Upper bound for a single sub-lesson quiz run (random subset of the bank). */
export const QUIZ_MAX_QUESTIONS = 5;

/** Upper bound for a big-category quiz (e.g. all Animals) drawing from sub-lesson questions. */
export const CATEGORY_QUIZ_MAX_QUESTIONS = 20;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Shuffles the full question bank, then keeps at most `max` items (default {@link QUIZ_MAX_QUESTIONS}).
 * If the bank is smaller, every question is used.
 */
export function prepareQuizDeck<T>(questions: T[], max: number = QUIZ_MAX_QUESTIONS): T[] {
  const shuffled = shuffleArray(questions);
  if (shuffled.length <= max) {
    return shuffled;
  }
  return shuffled.slice(0, max);
}
