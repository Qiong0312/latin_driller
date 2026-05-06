import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';

export default function SchoolLearningVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">
        School &amp; Learning (Schola et Doctrīna)
      </h1>
      <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Books, writing, words of study, and the classroom — vocabulary for school and literacy, separate from the
        society topic &quot;Learning &amp; Teaching&quot; (broader social roles).
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/school-learning/study-materials"
            lessonPath="/vocabulary/school-learning/study-materials"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">📖 Study materials</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Librī et Instrumenta — books, scroll, stylus, ink</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/school-learning/language-content"
            lessonPath="/vocabulary/school-learning/language-content"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">📝 Language &amp; content</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Lingua et Scriptum — letters, words, story</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/school-learning/learning-concepts"
            lessonPath="/vocabulary/school-learning/learning-concepts"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧠 Learning concepts</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Disciplina — doctrine, discipline, art, memory</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/school-learning/school-environment"
            lessonPath="/vocabulary/school-learning/school-environment"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/35 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🏫 School environment</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Schola, teacher&apos;s seat, desk, place</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/school-learning/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/school-learning/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/school-learning/test" />
          <LessonDoneButton lessonPath="/vocabulary/school-learning" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/school-learning" />
      </div>
    </div>
  );
}
