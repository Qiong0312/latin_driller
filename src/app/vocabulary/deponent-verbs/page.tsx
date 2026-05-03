import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';

export default function DeponentVerbsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">
        ⭐ Deponent Verbs (Verba Dēponentia)
      </h1>
      <p className="mb-2 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Deponent verbs look passive but have active meanings. They are extremely common in Latin.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/deponent-verbs/communication-speech"
            lessonPath="/vocabulary/deponent-verbs/communication-speech"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">💬 Communication &amp; Speech</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Loquī, fārī, mentīrī</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/deponent-verbs/movement-action"
            lessonPath="/vocabulary/deponent-verbs/movement-action"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧭 Movement &amp; Action</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Sequī, proficīscī, ingredī, regredī, morārī</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/deponent-verbs/emotion-thought"
            lessonPath="/vocabulary/deponent-verbs/emotion-thought"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/40 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">💭 Emotion &amp; Thought</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Mīrārī, verērī, hortārī, cōnārī</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/deponent-verbs/social-legal"
            lessonPath="/vocabulary/deponent-verbs/social-legal"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">⚖️ Social &amp; Legal Actions</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Testificārī, ūti, fruī, vēscī</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/deponent-verbs/semi-deponent"
            lessonPath="/vocabulary/deponent-verbs/semi-deponent"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">⭐ Semi-Deponent Verbs (Advanced)</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Partly normal, partly deponent: audēre, gaudēre, solēre, fīdere
            </p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/deponent-verbs/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/deponent-verbs/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/deponent-verbs/test" />
          <LessonDoneButton lessonPath="/vocabulary/deponent-verbs" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/deponent-verbs" />
      </div>
    </div>
  );
}
