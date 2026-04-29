import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';

export default function FamilyVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">Familia (Family Members)</h1>
      <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Immediate family, extended kin, spouses, parents, children, and more.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/family/immediate-family"
            lessonPath="/vocabulary/family/immediate-family"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">👪 Immediate Family</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Family, father, mother, son, daughter, parent</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/family/extended-family"
            lessonPath="/vocabulary/family/extended-family"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">👴 Extended Family</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Brother, sister, grandparents, aunts and uncles</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/family/other-relations"
            lessonPath="/vocabulary/family/other-relations"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">👶 Other Relations</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Children, baby, husband, wife</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/family/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/family/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/family/test" />
          <LessonDoneButton lessonPath="/vocabulary/family" />
        </div>
      </div>
    </div>
  );
}
