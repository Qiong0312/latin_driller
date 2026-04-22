'use client';

import type { ReactNode } from 'react';

function ChevronLeftIcon() {
  return (
    <svg
      className="h-6 w-6 sm:h-7 sm:w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      className="h-6 w-6 sm:h-7 sm:w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

type TestQuestionNavLayoutProps = {
  children: ReactNode;
  onPrev: () => void;
  prevDisabled: boolean;
  renderRight: ReactNode;
};

/** Question body centered with circular prev/next (or score) controls, aligned with flashcard nav. */
export function TestQuestionNavLayout({
  children,
  onPrev,
  prevDisabled,
  renderRight,
}: TestQuestionNavLayoutProps) {
  return (
    <div className="flex w-full items-center justify-center gap-1 sm:gap-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Previous question"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 sm:h-12 sm:w-12"
      >
        <ChevronLeftIcon />
      </button>
      <div className="min-w-0 flex-1 max-w-2xl">{children}</div>
      <div className="flex shrink-0 items-center justify-center">{renderRight}</div>
    </div>
  );
}

export function TestNextQuestionButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next question"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-sky-900 shadow-sm transition hover:bg-sky-100 dark:border-sky-600 dark:bg-sky-950 dark:text-sky-100 dark:hover:bg-sky-900 sm:h-12 sm:w-12"
    >
      <ChevronRightIcon />
    </button>
  );
}

export function TestScoreSubmitButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-11 shrink-0 items-center justify-center rounded-full border border-sky-300 bg-sky-100 px-4 text-sm font-medium text-sky-950 shadow-sm transition hover:bg-sky-200 dark:border-sky-600 dark:bg-sky-900 dark:text-sky-50 dark:hover:bg-sky-800 sm:h-12 sm:px-5"
    >
      Score Test
    </button>
  );
}
