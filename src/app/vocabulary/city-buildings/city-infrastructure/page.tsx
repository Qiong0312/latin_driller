import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { CITY_INFRASTRUCTURE } from '@/lib/quizBanks/vocabulary/cityBuildingsVocab';

export default function CityInfrastructurePage() {
  return (
    <div className="app-panel">
      <h1 className="mb-8 text-center text-4xl font-bold text-black dark:text-zinc-50">🛣️ City infrastructure</h1>
      <ul className="list-inside list-disc space-y-2 pl-4 text-lg text-zinc-800 dark:text-zinc-200">
        {CITY_INFRASTRUCTURE.map(({ latin, english }) => (
          <li key={latin}>
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{latin}</strong> – {english}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/vocabulary/city-buildings/city-infrastructure/flashcards">
            <button
              type="button"
              className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
            >
              Flashcards
            </button>
          </Link>
          <Link href="/vocabulary/city-buildings/city-infrastructure/test">
            <button
              type="button"
              className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
            >
              Quiz
            </button>
          </Link>
        </div>
        <LessonQuizMedalCard quizPath="/vocabulary/city-buildings/city-infrastructure/test" />
        <LessonDoneButton lessonPath="/vocabulary/city-buildings/city-infrastructure" />
      </div>
      <VocabularyNavFooter variant="subLesson" lessonPath="/vocabulary/city-buildings/city-infrastructure" />
    </div>
  );
}
