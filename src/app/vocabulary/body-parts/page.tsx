import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { VocabularySubLessonCard } from "@/components/VocabularySubLessonCard";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

export default function BodyParts() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Corpus (Body Parts)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn Latin body part vocabulary step by step. Choose a category below to begin:
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/body-parts/basic"
            lessonPath="/vocabulary/body-parts/basic"
            cardClassName="cursor-pointer rounded-lg bg-purple-50 p-4 transition hover:bg-purple-100 dark:bg-purple-950/40 dark:hover:bg-purple-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧍 Basic Body Parts</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Head, arms, legs, chest, and more</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/body-parts/face"
            lessonPath="/vocabulary/body-parts/face"
            cardClassName="cursor-pointer rounded-lg bg-indigo-50 p-4 transition hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">😊 Face Parts</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Eyes, nose, ears, mouth, and teeth</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/body-parts/internal"
            lessonPath="/vocabulary/body-parts/internal"
            cardClassName="cursor-pointer rounded-lg bg-pink-50 p-4 transition hover:bg-pink-100 dark:bg-pink-950/40 dark:hover:bg-pink-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🫀 Internal Organs</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Heart, lungs, liver, and kidneys</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/body-parts/flashcards">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/body-parts/test">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/body-parts/test" />
          <LessonDoneButton lessonPath="/vocabulary/body-parts" />
        </div>
      </div>
    </div>
  );
}
