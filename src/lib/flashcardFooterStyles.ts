/** Underscore link row on flashcards, grammar lesson series, quizzes, category results (“← Back to Lesson”, …) */
export const FLASHCARD_FOOTER_LINK_CLASS =
  'text-sm text-zinc-600 underline-offset-4 transition hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200';

/** Sky accent footer actions (“Take Quiz →”, “Score Test →”, “New Daily Test →”) */
export const FLASHCARD_FOOTER_ACTION_CLASS =
  'text-sm font-medium text-sky-700 underline-offset-4 transition hover:underline dark:text-sky-400';

/** Two footer controls side-by-side on all breakpoints (avoids stacked rows on small screens). */
export const FLASHCARD_FOOTER_DUAL_ROW_LAYOUT =
  'flex w-full flex-row flex-nowrap items-center justify-between gap-x-2 sm:gap-x-4';

/**
 * Paired footer link (same look as {@link FLASHCARD_FOOTER_LINK_CLASS}, smaller on narrow widths
 * so two links stay on one row).
 */
export const FLASHCARD_FOOTER_LINK_PAIR_CLASS =
  'text-xs sm:text-sm whitespace-nowrap text-zinc-600 underline-offset-4 transition hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200';

/** Paired footer action in the same row as a back link. */
export const FLASHCARD_FOOTER_ACTION_PAIR_CLASS =
  'text-xs sm:text-sm whitespace-nowrap font-medium text-sky-700 underline-offset-4 transition hover:underline dark:text-sky-400';
