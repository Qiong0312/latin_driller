import { GRAMMAR_LESSON_PATHS } from '@/lib/trackedLessons';

/** Display titles in the same order as {@link GRAMMAR_LESSON_PATHS} */
const GRAMMAR_LESSON_LABELS = [
  'Grammatical Gender',
  'Cases',
  'Declensions',
  'Present Tense Active',
  'Adjectives',
  'Relative Pronoun',
  'Adjectives with adverbial force',
  'Imperative',
  '-ne Questions',
  'Demonstrative pronouns I',
  'Demonstrative pronouns II',
  'Demonstrative pronouns III',
  'Demonstrative pronouns IV',
] as const satisfies readonly string[];

if (
  GRAMMAR_LESSON_LABELS.length !== GRAMMAR_LESSON_PATHS.length ||
  !GRAMMAR_LESSON_PATHS.every((_, i) => GRAMMAR_LESSON_LABELS[i] !== undefined)
) {
  throw new Error(
    `GRAMMAR_LESSON_LABELS length (${GRAMMAR_LESSON_LABELS.length}) must equal GRAMMAR_LESSON_PATHS (${GRAMMAR_LESSON_PATHS.length})`,
  );
}

export type GrammarLessonEntry = {
  href: string;
  label: string;
};

/** Ordered grammar lessons with human-readable titles (paths match navigation / tracked lessons) */
export const GRAMMAR_LESSON_NAV: readonly GrammarLessonEntry[] = GRAMMAR_LESSON_PATHS.map((href, i) => ({
  href,
  label: GRAMMAR_LESSON_LABELS[i],
}));

export function getGrammarLessonAdjacent(lessonPath: string): {
  prev: GrammarLessonEntry | null;
  next: GrammarLessonEntry | null;
} {
  const normalized = lessonPath.replace(/\/$/, '') || lessonPath;
  const i = GRAMMAR_LESSON_NAV.findIndex((e) => e.href === normalized);
  if (i === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: i > 0 ? GRAMMAR_LESSON_NAV[i - 1] : null,
    next: i < GRAMMAR_LESSON_NAV.length - 1 ? GRAMMAR_LESSON_NAV[i + 1] : null,
  };
}
