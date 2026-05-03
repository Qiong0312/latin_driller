import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';

export default function CoreActionsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">Core Actions</h1>
      <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-300">
        High-frequency Latin verbs: daily life, senses, speech, thought, feeling, and essential irregulars.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/core-actions/daily-actions"
            lessonPath="/vocabulary/core-actions/daily-actions"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🧍 Daily Actions (Āctiōnēs cotīdiānae)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Walk, sit, eat, work, open, close, and more</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-actions/senses-perception"
            lessonPath="/vocabulary/core-actions/senses-perception"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/35 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">👁️ Senses &amp; Perception (Sēnsūs)</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">See, hear, feel, touch, watch</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-actions/communication"
            lessonPath="/vocabulary/core-actions/communication"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🗣️ Communication (Cōnloquium)</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Say, ask, answer, announce, greet</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-actions/thinking-knowing"
            lessonPath="/vocabulary/core-actions/thinking-knowing"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🧠 Thinking &amp; Knowing (Cōgitātiō et scientia)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Think, know, learn, teach, remember</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-actions/emotion-desire"
            lessonPath="/vocabulary/core-actions/emotion-desire"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              ❤️ Emotion &amp; Desire (Affectūs et cupiditās)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Love, fear, hope, want, laugh, cry</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/core-actions/irregular-verbs"
            lessonPath="/vocabulary/core-actions/irregular-verbs"
            cardClassName="cursor-pointer rounded-lg bg-indigo-50 p-4 transition hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">⭐ Core Essential Irregular Verbs</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Esse, īre, posse, velle, dare, facere, and more</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/core-actions/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/core-actions/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/core-actions/test" />
          <LessonDoneButton lessonPath="/vocabulary/core-actions" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/core-actions" />
      </div>
    </div>
  );
}
