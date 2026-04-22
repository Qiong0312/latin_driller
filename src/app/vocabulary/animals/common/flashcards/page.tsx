'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const cards = [
  { latin: 'Canis', english: 'Dog', icon: '🐕' },
  { latin: 'Feles', english: 'Cat', icon: '🐈' },
  { latin: 'Equus', english: 'Horse', icon: '🐎' },
  { latin: 'Vacca', english: 'Cow', icon: '🐄' },
  { latin: 'Porcus', english: 'Pig', icon: '🐷' },
  { latin: 'Ovis', english: 'Sheep', icon: '🐑' },
  { latin: 'Capra', english: 'Goat', icon: '🐐' },
  { latin: 'Asinus', english: 'Donkey', icon: '🫏' },
];

type Card = (typeof cards)[number];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CommonAnimalsFlashcardsPage() {
  const [deck, setDeck] = useState<Card[]>([]);
  const [index, setIndex] = useState(0);

  const reshuffle = useCallback(() => {
    setDeck(shuffleArray(cards));
    setIndex(0);
  }, []);

  useEffect(() => {
    reshuffle();
  }, [reshuffle]);

  const current = deck[index];

  if (!current) {
    return (
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
        <p className="text-center text-zinc-800 dark:text-zinc-200">Loading flashcards…</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-2 text-black dark:text-zinc-50">
        Common Animals — Flashcards
      </h1>
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mb-6">
        Order is randomized each visit. Use “Shuffle deck” for a new order.
      </p>

      <div className="mb-4">
        <div className="w-full rounded-full h-2 bg-zinc-100 dark:bg-zinc-800">
          <div
            className="bg-violet-300 h-2 rounded-full transition-all dark:bg-violet-600"
            style={{ width: `${((index + 1) / deck.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          Card {index + 1} of {deck.length}
        </p>
      </div>

      <div
        className="mx-auto mb-8 max-w-md rounded-2xl border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-b from-violet-50 to-white dark:from-violet-950/40 dark:to-zinc-900 px-8 py-10 text-center shadow-md"
        role="region"
        aria-label={`Flashcard: ${current.latin}, ${current.english}`}
      >
        <div className="text-7xl mb-6" aria-hidden>
          {current.icon}
        </div>
        <p className="text-3xl font-bold tracking-wide text-black dark:text-zinc-50 mb-2">
          {current.latin}
        </p>
        <p className="text-xl text-zinc-700 dark:text-zinc-300">{current.english}</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          type="button"
          onClick={reshuffle}
          className="px-4 py-2 rounded-lg bg-violet-200 text-violet-950 text-sm font-medium shadow-sm transition hover:bg-violet-300 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-violet-800"
        >
          Shuffle deck
        </button>
      </div>

      <div className="flex justify-between items-center gap-4">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-800 text-sm font-medium shadow-sm transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(deck.length - 1, i + 1))}
          disabled={index === deck.length - 1}
          className="px-4 py-2 rounded-lg bg-violet-200 text-violet-950 text-sm font-medium shadow-sm transition hover:bg-violet-300 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-violet-800 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="text-center mt-10 space-x-4">
        <Link
          href="/vocabulary/animals/common"
          className="inline-block px-6 py-3 rounded-lg bg-zinc-200 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
        >
          Back to lesson
        </Link>
        <Link
          href="/vocabulary/animals/common/test"
          className="inline-block px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
        >
          Quiz
        </Link>
      </div>
    </div>
  );
}
