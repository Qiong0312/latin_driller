'use client';

import { useState, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { recordFlashcardSession } from '@/lib/localProgress';

export type VocabularyFlashcard = {
  latin: string;
  english: string;
  /**
   * Visual on the answer side: emoji text, or an image.
   * Use an image when no emoji fits: put files in `public/` and reference
   * `/flashcard-icons/your.svg` (leading `/`), a full `https://...` URL, or a `data:` URI.
   */
  icon: string;
};

/** True if `icon` should render as an `<img>` (path, http(s) URL, or data URI). */
export function isVocabularyFlashcardImageIcon(icon: string): boolean {
  if (!icon) return false;
  return (
    icon.startsWith('/') ||
    icon.startsWith('http://') ||
    icon.startsWith('https://') ||
    icon.startsWith('data:')
  );
}

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

/** Stable when card *content* is unchanged; avoids re-shuffle loops if `cards` is a new array every render. */
function vocabularyCardsContentKey(cards: VocabularyFlashcard[]): string {
  return cards.map((c) => `${c.latin}\u0000${c.english}\u0000${c.icon}`).join('\n');
}

export function VocabularyFlashcards({
  title,
  cards: initialCards,
  backToLessonHref,
  quizHref,
}: VocabularyFlashcardsProps) {
  const pathname = usePathname();
  // Same order on server and first client render — shuffling is random and must not run during SSR/initial state or hydration will mismatch.
  const [deck, setDeck] = useState<VocabularyFlashcard[]>(initialCards);
  const [index, setIndex] = useState(0);
  const [englishFirstMode, setEnglishFirstMode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const cardsContentKey = useMemo(
    () => vocabularyCardsContentKey(initialCards),
    [initialCards]
  );

  const cardsRef = useRef(initialCards);
  cardsRef.current = initialCards;

  // Depend only on `cardsContentKey`: the `cards` prop may be a new array every render, which would
  // retrigger this every time and can freeze the tab. Ref always holds the latest deck for shuffling.
  useLayoutEffect(() => {
    setDeck(shuffleArray(cardsRef.current));
    setIndex(0);
    setIsFlipped(false);
  }, [cardsContentKey]);

  useEffect(() => {
    if (pathname) {
      recordFlashcardSession(pathname);
    }
  }, [pathname]);

  const reshuffle = useCallback(() => {
    setDeck(shuffleArray(cardsRef.current));
    setIndex(0);
    setIsFlipped(false);
  }, []);

  const goPrev = () => {
    setIndex((i) => (i - 1 + deck.length) % deck.length);
    setIsFlipped(false);
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % deck.length);
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
    <div className="flex h-full min-h-[320px] w-full min-w-0 flex-col px-4 py-5 sm:px-6 sm:py-6">
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <p className="w-full text-center text-5xl font-bold leading-tight tracking-wide text-black sm:text-6xl dark:text-zinc-50">
          {current.latin}
        </p>
      </div>
      <p className="shrink-0 pt-1 text-center text-xs text-zinc-500 dark:text-zinc-400">click to flip</p>
    </div>
  );

  const englishSide = (
    <div className="flex h-full min-h-[320px] w-full min-w-0 flex-col px-4 py-5 sm:px-6 sm:py-6">
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 text-center sm:gap-4">
        <div className="flex shrink-0 items-center justify-center" aria-hidden>
          {isVocabularyFlashcardImageIcon(current.icon) ? (
            <img
              src={current.icon}
              alt=""
              className="max-h-28 w-auto max-w-[min(100%,20rem)] object-contain sm:max-h-36"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="text-8xl leading-none sm:text-9xl">{current.icon}</span>
          )}
        </div>
        <p className="max-w-full text-3xl font-semibold leading-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          {current.english}
        </p>
      </div>
      <p className="shrink-0 pt-1 text-center text-xs text-zinc-500 dark:text-zinc-400">click to flip</p>
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
          aria-label="Previous card"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 sm:h-12 sm:w-12"
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
              className="relative min-h-[320px] w-full transition-transform duration-500 [transform-style:preserve-3d]"
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
          aria-label="Next card"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-900 shadow-sm transition hover:bg-emerald-100 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100 dark:hover:bg-emerald-900 sm:h-12 sm:w-12"
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
