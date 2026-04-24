import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { VocabularySubLessonCard } from "@/components/VocabularySubLessonCard";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

export default function LandscapeVocabularyPage() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Terra (Land &amp; Landscape)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn words for the natural world, weather, and outdoor spaces. Choose a sub-topic below, then use
          flashcards and the sub-lesson quiz, or try the all-lessons quiz for the full set.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/landscape/land"
            lessonPath="/vocabulary/landscape/land"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🌍 Land &amp; world</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Earth, world, place, and fields</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/landscape/mountains"
            lessonPath="/vocabulary/landscape/mountains"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🏔️ Mountains &amp; landforms</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Hills, valleys, rocks, cliffs</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/landscape/water"
            lessonPath="/vocabulary/landscape/water"
            cardClassName="cursor-pointer rounded-lg bg-cyan-50 p-4 transition hover:bg-cyan-100 dark:bg-cyan-950/40 dark:hover:bg-cyan-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🌊 Water</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Rivers, sea, lake, and waves</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/landscape/plants"
            lessonPath="/vocabulary/landscape/plants"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🌳 Plants &amp; nature</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Trees, forest, leaves, flowers, grass</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/landscape/sky-weather"
            lessonPath="/vocabulary/landscape/sky-weather"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/40 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">☀️ Sky &amp; weather</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Celestial bodies, clouds, wind, rain</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/landscape/elements"
            lessonPath="/vocabulary/landscape/elements"
            cardClassName="cursor-pointer rounded-lg bg-red-50 p-4 transition hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🔥 Natural elements</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Fire, light, shadow</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/landscape/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/landscape/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/landscape/test" />
          <LessonDoneButton lessonPath="/vocabulary/landscape" />
        </div>
      </div>
    </div>
  );
}
