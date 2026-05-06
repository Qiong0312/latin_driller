import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';

export default function TravelRoadsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">Travel &amp; Roads (Iter)</h1>
      <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Roads, settlements, crossings, distances, terrain, and how people moved — noun vocabulary complementary to{' '}
        <strong className="font-medium text-zinc-700 dark:text-zinc-200">Society &amp; Relationships → Travel &amp; Exploration</strong>
        .
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/travel-roads/journey-movement"
            lessonPath="/vocabulary/travel-roads/journey-movement"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧍 Journey &amp; movement</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">iter, via, paths, pace, cursus</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/travel-roads/places-locations"
            lessonPath="/vocabulary/travel-roads/places-locations"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🌍 Places &amp; locations</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">City, town, village, region</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/travel-roads/entry-passage"
            lessonPath="/vocabulary/travel-roads/entry-passage"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🚪 Entry &amp; passage</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Gates, doors, bridges, crossings</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/travel-roads/directions-distance"
            lessonPath="/vocabulary/travel-roads/directions-distance"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧭 Directions &amp; distance</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Space, intervals, borders, limits</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/travel-roads/travel-conditions"
            lessonPath="/vocabulary/travel-roads/travel-conditions"
            cardClassName="cursor-pointer rounded-lg bg-stone-50 p-4 transition hover:bg-stone-200 dark:bg-stone-950/50 dark:hover:bg-stone-800/70"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🚶 Travel conditions</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Dust, mud, rock, slope</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/travel-roads/transport-means"
            lessonPath="/vocabulary/travel-roads/transport-means"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/35 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🐎 Transport &amp; travel means</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Horse, cart, wagon, ship</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/travel-roads/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/travel-roads/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/travel-roads/test" />
          <LessonDoneButton lessonPath="/vocabulary/travel-roads" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/travel-roads" />
      </div>
    </div>
  );
}
