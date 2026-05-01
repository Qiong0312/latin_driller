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

/** Invisible slot matching the next chevron so question text stays aligned when only bottom actions show */
function NavRightSpacer() {
  return <div className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" aria-hidden />;
}

type TestQuestionNavLayoutProps = {
  children: ReactNode;
  onPrev: () => void;
  prevDisabled: boolean;
  /** Next-question chevron; omit on the final question when using `renderBottom` for Score Test */
  renderRight?: ReactNode;
  /** Centered under the question row (e.g. Score Test on the last question) */
  renderBottom?: ReactNode;
};

/** Question body centered with circular prev/next aligned with flashcard nav; optional bottom bar for scoring */
export function TestQuestionNavLayout({
  children,
  onPrev,
  prevDisabled,
  renderRight,
  renderBottom,
}: TestQuestionNavLayoutProps) {
  const rightSlot = renderRight ?? (renderBottom != null ? <NavRightSpacer /> : null);

  return (
    <div className="flex w-full flex-col items-stretch gap-4">
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
        <div className="flex shrink-0 items-center justify-center">{rightSlot}</div>
      </div>
      {renderBottom != null ? (
        <div className="flex w-full justify-center px-2">
          <div className="w-full max-w-sm">{renderBottom}</div>
        </div>
      ) : null}
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
      className="w-full rounded-lg border border-sky-300 bg-sky-100 px-4 py-3 text-sm font-medium text-sky-950 shadow-sm transition hover:bg-sky-200 dark:border-sky-600 dark:bg-sky-900 dark:text-sky-50 dark:hover:bg-sky-800"
    >
      Score Test
    </button>
  );
}
