import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';

export default function EnvironmentInteractionVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">Environment &amp; Interaction</h1>
      <p className="mb-2 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Verba Inter Āctiōnem et Mundum — verbs that connect people to places, things, weather, and power.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/environment-interaction/home-actions"
            lessonPath="/vocabulary/environment-interaction/home-actions"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🏠 Home Actions (Āctiōnēs Domūs)</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Cook, clean, move objects, guard, light, and extinguish</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/environment-interaction/marketplace-money"
            lessonPath="/vocabulary/environment-interaction/marketplace-money"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🏛️ Marketplace &amp; Money (Mercātus et Pecūnia)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Buy, sell, pay, exchange, count, cost, owe</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/environment-interaction/military-government"
            lessonPath="/vocabulary/environment-interaction/military-government"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              ⚔️ Military &amp; Government (Mīlitia et Imperium)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Fight, lead, rule, attack, defend, obey</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/environment-interaction/nature-movement"
            lessonPath="/vocabulary/environment-interaction/nature-movement"
            cardClassName="cursor-pointer rounded-lg bg-teal-50 p-4 transition hover:bg-teal-100 dark:bg-teal-950/40 dark:hover:bg-teal-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🌿 Nature &amp; Movement (Nātūra et Mōtus)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Flow, fall, grow, sail, fly, run, wander</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/environment-interaction/weather-phenomena"
            lessonPath="/vocabulary/environment-interaction/weather-phenomena"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
              🔥 Weather &amp; Natural Phenomena (Tempestās et Nātūra)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Rain, snow, thunder, shine, burn, wind</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/environment-interaction/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/environment-interaction/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/environment-interaction/test" />
          <LessonDoneButton lessonPath="/vocabulary/environment-interaction" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/environment-interaction" />
      </div>
    </div>
  );
}
