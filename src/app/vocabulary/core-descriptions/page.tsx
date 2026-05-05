import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';

export default function CoreDescriptionsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-2 text-center text-4xl font-bold text-black dark:text-zinc-50">Core Descriptions</h1>
      <p className="mb-2 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Adiectīva Fundamentālia — high-frequency Latin adjectives for size, quality, shape, state, color, and character.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/core-descriptions/size-quantity"
            lessonPath="/vocabulary/core-descriptions/size-quantity"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              📏 Size &amp; Quantity (Magnitūdō)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Big, small, long, many, few, and more</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-descriptions/quality-value"
            lessonPath="/vocabulary/core-descriptions/quality-value"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              ⭐ Quality &amp; Value (Qualitās)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Good, bad, best, worst, clear, famous</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-descriptions/physical-properties"
            lessonPath="/vocabulary/core-descriptions/physical-properties"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/35 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              📐 Physical Properties (Corpus / Forma)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Tall, wide, narrow, heavy, light, hard, soft</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-descriptions/condition-state"
            lessonPath="/vocabulary/core-descriptions/condition-state"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              📋 Condition &amp; State (Status)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">New, old, fast, slow, full, empty</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-descriptions/appearance-color"
            lessonPath="/vocabulary/core-descriptions/appearance-color"
            cardClassName="cursor-pointer rounded-lg bg-cyan-50 p-4 transition hover:bg-cyan-100 dark:bg-cyan-950/40 dark:hover:bg-cyan-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🎨 Basic Appearance &amp; Color (Aspectus)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">White, black, red, blue, green, yellow</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-descriptions/personality"
            lessonPath="/vocabulary/core-descriptions/personality"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🙂 Simple Personality (Ingenium)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Happy, sad, brave, shy, angry, kind</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/core-descriptions/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/core-descriptions/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/core-descriptions/test" />
          <LessonDoneButton lessonPath="/vocabulary/core-descriptions" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/core-descriptions" />
      </div>
    </div>
  );
}
