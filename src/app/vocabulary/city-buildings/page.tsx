import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';

export default function CityBuildingsVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">City &amp; Buildings (Urbs)</h1>
      <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Places, buildings, façades, civic spaces, and streets — overlaps in places with{' '}
        <strong className="font-medium text-zinc-700 dark:text-zinc-200">Travel &amp; Roads → Places &amp; Locations</strong>
        {' '}
        and entry words with{' '}
        <strong className="font-medium text-zinc-700 dark:text-zinc-200">Travel &amp; Roads → Entry &amp; Passage</strong>
        , with an urban-architecture emphasis here.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/city-buildings/general-city-terms"
            lessonPath="/vocabulary/city-buildings/general-city-terms"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🌆 General city terms</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Urbs, vīcus, regiō, locus</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/city-buildings/buildings-structures"
            lessonPath="/vocabulary/city-buildings/buildings-structures"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🏠 Buildings &amp; structures</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Domus, insula, temple, basilica</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/city-buildings/building-parts"
            lessonPath="/vocabulary/city-buildings/building-parts"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🚪 Parts of buildings</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Doors, windows, walls, roof</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/city-buildings/public-places"
            lessonPath="/vocabulary/city-buildings/public-places"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/35 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🏛️ Public places</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Forum, theatre, baths, curia</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/city-buildings/city-infrastructure"
            lessonPath="/vocabulary/city-buildings/city-infrastructure"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🛣️ City infrastructure</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Streets, bridge, walls, towers</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/city-buildings/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/city-buildings/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/city-buildings/test" />
          <LessonDoneButton lessonPath="/vocabulary/city-buildings" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/city-buildings" />
      </div>
    </div>
  );
}
