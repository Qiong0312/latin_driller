import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { TIME_FREQUENCY } from '@/lib/quizBanks/vocabulary/timeVocab';

export default function TimeFrequencyOccasionPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-8 text-center text-4xl font-bold text-black dark:text-zinc-50">
        🔁 Frequency &amp; occasion
      </h1>
      <ul className="list-inside list-disc space-y-2 pl-4 text-lg text-zinc-800 dark:text-zinc-200">
        {TIME_FREQUENCY.map(({ latin, english }) => (
          <li key={latin}>
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{latin}</strong> – {english}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/vocabulary/time/frequency-occasion/flashcards">
            <button
              type="button"
              className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
            >
              Flashcards
            </button>
          </Link>
          <Link href="/vocabulary/time/frequency-occasion/test">
            <button
              type="button"
              className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
            >
              Quiz
            </button>
          </Link>
          <Link href="/vocabulary/time">
            <button
              type="button"
              className="rounded-lg bg-zinc-200 px-6 py-3 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
            >
              Back to Time
            </button>
          </Link>
        </div>
        <LessonQuizMedalCard quizPath="/vocabulary/time/frequency-occasion/test" />
        <LessonDoneButton lessonPath="/vocabulary/time/frequency-occasion" />
      </div>
      <VocabularyNavFooter variant="subLesson" lessonPath="/vocabulary/time/frequency-occasion" />
    </div>
  );
}
