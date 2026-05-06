import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';

export default function ToolsObjectsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">
        Tools &amp; Objects (Instrumenta)
      </h1>
      <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Metalwork, blades, locks, tableware, and odds and ends useful around the house and workshop — complementary to{' '}
        <strong className="font-medium text-zinc-700 dark:text-zinc-200">Marketplace → Equipment &amp; Setting</strong>
        .
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/tools-objects/general-tools"
            lessonPath="/vocabulary/tools-objects/general-tools"
            cardClassName="cursor-pointer rounded-lg bg-stone-50 p-4 transition hover:bg-stone-200 dark:bg-stone-950/50 dark:hover:bg-stone-800/70"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🔨 General tools</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Hammer, saw, nails, iron</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/tools-objects/cutting-work-tools"
            lessonPath="/vocabulary/tools-objects/cutting-work-tools"
            cardClassName="cursor-pointer rounded-lg bg-zinc-100 p-4 transition hover:bg-zinc-200 dark:bg-zinc-900/70 dark:hover:bg-zinc-800/80"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🔪 Cutting &amp; work tools</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Knife, sword, sickle, scissors</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/tools-objects/household-objects"
            lessonPath="/vocabulary/tools-objects/household-objects"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🔑 Household objects</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Keys, lock, chest, vessel</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/tools-objects/everyday-objects"
            lessonPath="/vocabulary/tools-objects/everyday-objects"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍽️ Everyday objects</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Cups, dish, spoon, jug</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/tools-objects/small-useful-items"
            lessonPath="/vocabulary/tools-objects/small-useful-items"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧵 Small useful items</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Needle, thread, rope, chain</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/tools-objects/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/tools-objects/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/tools-objects/test" />
          <LessonDoneButton lessonPath="/vocabulary/tools-objects" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/tools-objects" />
      </div>
    </div>
  );
}
