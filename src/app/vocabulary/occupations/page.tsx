import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';

export default function OccupationsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">
        Officia (Occupations &amp; Trades)
      </h1>
      <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Civilians, armies, rulers, schooling, craftsmen, painters, poets, cooks, singers, and actors.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/occupations/general"
            lessonPath="/vocabulary/occupations/general"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🏛️ General occupations</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Farmer, trader, sailor, servants, rulers
            </p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/occupations/military-government"
            lessonPath="/vocabulary/occupations/military-government"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">⚔️ Military &amp; government</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Soldier, leader, guard, messenger</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/occupations/education"
            lessonPath="/vocabulary/occupations/education"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">📚 Education &amp; knowledge</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Teacher, students, scribe, poet, philosopher
            </p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/occupations/crafts-trades"
            lessonPath="/vocabulary/occupations/crafts-trades"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🛠️ Crafts &amp; trades</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Craftsmen, smith, baker, cook, shoemaker, painter, doctor, barber
            </p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/occupations/arts-entertainment"
            lessonPath="/vocabulary/occupations/arts-entertainment"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/35 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🎭 Arts &amp; entertainment</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Singer, dancer, actor</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/occupations/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/occupations/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/occupations/test" />
          <LessonDoneButton lessonPath="/vocabulary/occupations" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/occupations" />
      </div>
    </div>
  );
}
