import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { VocabularySubLessonCard } from "@/components/VocabularySubLessonCard";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

export default function Food() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Cibus (Food)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn Latin food vocabulary step by step. Choose a category below to begin:
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/food/basic"
            lessonPath="/vocabulary/food/basic"
            cardClassName="p-4 bg-amber-50 dark:bg-amber-900 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍞 Basic Foods</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Learn bread, cheese, eggs, and meals</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/food/fruits"
            lessonPath="/vocabulary/food/fruits"
            cardClassName="p-4 bg-red-50 dark:bg-red-900 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍎 Fruits</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Explore apples, pears, grapes, and more</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/food/vegetables"
            lessonPath="/vocabulary/food/vegetables"
            cardClassName="p-4 bg-green-50 dark:bg-green-900 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🥕 Vegetables</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Study carrots, lettuce, onions, and vegetables</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/food/meat"
            lessonPath="/vocabulary/food/meat"
            cardClassName="p-4 bg-pink-50 dark:bg-pink-900 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍖 Meat & Protein</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Learn meat, pork, beef, chicken, and fish</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/food/drinks"
            lessonPath="/vocabulary/food/drinks"
            cardClassName="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍯 Drinks & Others</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Discover water, milk, wine, honey, and salt</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/food/flashcards">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/food/test">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/food/test" />
          <LessonDoneButton lessonPath="/vocabulary/food" />
        </div>
      </div>
    </div>
  );
}
