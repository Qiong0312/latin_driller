'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { recordFlashcardSession } from '@/lib/localProgress';

export type VocabularyFlashcard = {
  latin: string;
  english: string;
  icon: string;
};

export type VocabularyFlashcardsProps = {
  /** Full `<h1>` text, e.g. "Birds — Flashcards" */
  title: string;
  cards: VocabularyFlashcard[];
  backToLessonHref: string;
  quizHref: string;
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function VocabularyFlashcards({
  title,
  cards: initialCards,
  backToLessonHref,
  quizHref,
}: VocabularyFlashcardsProps) {
  const pathname = usePathname();
  const [deck, setDeck] = useState<VocabularyFlashcard[]>(() => shuffleArray(initialCards));
  const [index, setIndex] = useState(0);
  const [englishFirstMode, setEnglishFirstMode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (pathname) {
      recordFlashcardSession(pathname);
    }
  }, [pathname]);

  const reshuffle = useCallback(() => {
    setDeck(shuffleArray(initialCards));
    setIndex(0);
    setIsFlipped(false);
  }, [initialCards]);

  const goPrev = () => {
    setIndex((i) => Math.max(0, i - 1));
    setIsFlipped(false);
  };

  const goNext = () => {
    setIndex((i) => Math.min(deck.length - 1, i + 1));
    setIsFlipped(false);
  };

  const toggleEnglishFirstMode = () => {
    setEnglishFirstMode((v) => !v);
    setIsFlipped(false);
  };

  const current = deck[index];

  if (!current) {
    return (
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
        <p className="text-center text-zinc-800 dark:text-zinc-200">Loading flashcards…</p>
      </div>
    );
  }

  const latinSide = (
    <div className="relative h-full min-h-[260px] w-full px-6 py-8">
      <p className="absolute left-1/2 top-1/2 w-[calc(100%-3rem)] -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-bold leading-tight tracking-wide text-black sm:text-6xl dark:text-zinc-50">
        {current.latin}
      </p>
      <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-zinc-500 dark:text-zinc-400">
        click to flip
      </p>
    </div>
  );

  const englishSide = (
    <div className="relative h-full min-h-[260px] w-full px-6 py-8">
      <div className="absolute left-1/2 top-1/2 flex w-[calc(100%-3rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 text-center">
        <div className="text-8xl leading-none sm:text-9xl" aria-hidden>
          {current.icon}
        </div>
        <p className="text-3xl font-semibold leading-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          {current.english}
        </p>
      </div>
      <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-zinc-500 dark:text-zinc-400">
        click to flip
      </p>
    </div>
  );

  const frontContent = englishFirstMode ? englishSide : latinSide;
  const backContent = englishFirstMode ? latinSide : englishSide;

  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-2 text-black dark:text-zinc-50">{title}</h1>
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mb-5">
        Order is randomized each visit. Use “Shuffle deck” for a new order. Use “Flip all cards” to flip all cards.
      </p>

      <div className="mb-5 flex justify-center">
        <div
          className="inline-flex rounded-xl border border-emerald-200 bg-emerald-50/80 p-1 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/40"
          role="group"
          aria-label="Deck actions"
        >
          <button
            type="button"
            onClick={toggleEnglishFirstMode}
            aria-pressed={englishFirstMode}
            className="rounded-lg px-4 py-2 text-sm font-medium text-emerald-950 transition hover:bg-white/90 dark:text-emerald-100 dark:hover:bg-emerald-900/80"
          >
            Flip all cards
          </button>
          <span className="my-1.5 w-px shrink-0 bg-emerald-200 dark:bg-emerald-700" aria-hidden />
          <button
            type="button"
            onClick={reshuffle}
            className="rounded-lg px-4 py-2 text-sm font-medium text-emerald-950 transition hover:bg-white/90 dark:text-emerald-100 dark:hover:bg-emerald-900/80"
          >
            Shuffle deck
          </button>
        </div>
      </div>

      <div className="mb-5">
        <div className="w-full rounded-full h-2 bg-zinc-100 dark:bg-zinc-800">
          <div
            className="h-2 rounded-full bg-emerald-300 transition-all dark:bg-emerald-600"
            style={{ width: `${((index + 1) / deck.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          Card {index + 1} of {deck.length}
        </p>
      </div>

      <div className="mb-10 flex w-full items-center justify-center gap-1 sm:gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous card"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 sm:h-12 sm:w-12"
        >
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
        </button>

        <button
          type="button"
          onClick={() => setIsFlipped((f) => !f)}
          className="min-w-0 max-w-md flex-1 cursor-pointer rounded-2xl border-2 border-emerald-200 bg-transparent p-0 text-left shadow-md transition hover:border-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-emerald-800 dark:hover:border-emerald-600"
          aria-label="Flip flashcard"
        >
          <div className="perspective-[1200px] w-full">
            <div
              className="relative min-h-[260px] w-full transition-transform duration-500 [transform-style:preserve-3d]"
              style={{ transform: `rotateY(${isFlipped ? 180 : 0}deg)` }}
            >
              <div
                className="absolute inset-0 flex flex-col rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-white [backface-visibility:hidden] dark:border-emerald-900 dark:from-emerald-950/40 dark:to-zinc-900"
                style={{ transform: 'rotateY(0deg)' }}
              >
                {frontContent}
              </div>
              <div
                className="absolute inset-0 flex flex-col rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-white [backface-visibility:hidden] dark:border-emerald-900 dark:from-emerald-950/40 dark:to-zinc-900"
                style={{ transform: 'rotateY(180deg)' }}
              >
                {backContent}
              </div>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={index === deck.length - 1}
          aria-label="Next card"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-900 shadow-sm transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100 dark:hover:bg-emerald-900 sm:h-12 sm:w-12"
        >
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
        </button>
      </div>

      <footer className="mt-2 flex w-full flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:flex-row sm:items-center">
        <Link
          href={backToLessonHref}
          className="text-sm text-zinc-600 underline-offset-4 transition hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          ← Back to lesson
        </Link>
        <Link
          href={quizHref}
          className="text-sm font-medium text-sky-700 underline-offset-4 transition hover:underline dark:text-sky-400"
        >
          Take quiz →
        </Link>
      </footer>
    </div>
  );
}
