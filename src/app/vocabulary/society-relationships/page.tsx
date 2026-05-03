import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';

export default function SocietyRelationshipsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">Society &amp; Relationships</h1>
      <p className="mb-2 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Verba Societātis et Relātiōnum — how people learn, move, worship, judge, and care for one another.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/society-relationships/family-relationships"
            lessonPath="/vocabulary/society-relationships/family-relationships"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              👨‍👩‍👧 Family &amp; Relationships (Familia et Relātiōnēs)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Help, follow, greet, love, care, preserve</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/society-relationships/learning-teaching"
            lessonPath="/vocabulary/society-relationships/learning-teaching"
            cardClassName="cursor-pointer rounded-lg bg-indigo-50 p-4 transition hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              📚 Learning &amp; Teaching (Disciplina et Doctrīna)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Read, write, study, ask, explain, remember</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/society-relationships/travel-exploration"
            lessonPath="/vocabulary/society-relationships/travel-exploration"
            cardClassName="cursor-pointer rounded-lg bg-cyan-50 p-4 transition hover:bg-cyan-100 dark:bg-cyan-950/40 dark:hover:bg-cyan-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              ⛵ Travel &amp; Exploration (Iter et Explōrātiō)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Come, go, depart, return, sail, enter, cross</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/society-relationships/religion-ritual"
            lessonPath="/vocabulary/society-relationships/religion-ritual"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/40 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              ⛪ Religion &amp; Ritual (Relīgiō et Sacra)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Pray, sacrifice, praise, sing, invoke, believe</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/society-relationships/law-society"
            lessonPath="/vocabulary/society-relationships/law-society"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              ⚖️ Law &amp; Society (Lēx et Societās)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Judge, accuse, defend, testify, obey, punish, free</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/society-relationships/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/society-relationships/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/society-relationships/test" />
          <LessonDoneButton lessonPath="/vocabulary/society-relationships" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/society-relationships" />
      </div>
    </div>
  );
}
