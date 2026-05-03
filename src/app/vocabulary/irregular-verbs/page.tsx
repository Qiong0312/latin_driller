import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';

export default function IrregularVerbsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">
        ⭐ Irregular Verbs (Verba Inrēgulāria)
      </h1>
      <p className="mb-2 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Irregular verbs have unusual forms or conjugations. Drill essentials, high-frequency oddballs, and common
        compounds of <em>esse</em>, <em>īre</em>, and <em>ferre</em>.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/irregular-verbs/essential"
            lessonPath="/vocabulary/irregular-verbs/essential"
            cardClassName="cursor-pointer rounded-lg bg-indigo-50 p-4 transition hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🔹 Essential Irregular Verbs</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Esse, posse, īre, velle, nōlle, mālle, ferre, fierī</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/irregular-verbs/common-irregulars"
            lessonPath="/vocabulary/irregular-verbs/common-irregulars"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🔹 Common High-Frequency Irregulars</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Dare, ēdere, inquam, aiō</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/irregular-verbs/compound"
            lessonPath="/vocabulary/irregular-verbs/compound"
            cardClassName="cursor-pointer rounded-lg bg-teal-50 p-4 transition hover:bg-teal-100 dark:bg-teal-950/40 dark:hover:bg-teal-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🔹 Compound Irregular Verbs</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Abesse, adesse, redīre, offerre, referre, transferre</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/irregular-verbs/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/irregular-verbs/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/irregular-verbs/test" />
          <LessonDoneButton lessonPath="/vocabulary/irregular-verbs" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/irregular-verbs" />
      </div>
    </div>
  );
}
