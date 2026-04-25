import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

const items: [string, string][] = [
  ["aqua", "water"],
  ["fluvius", "river"],
  ["rīvus", "stream"],
  ["lacus", "lake"],
  ["māre", "sea"],
  ["ūnda", "wave"],
];

export default function LandscapeWaterPage() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">🌊 Water</h1>
      <ul className="list-inside list-disc space-y-2 pl-4 text-lg text-zinc-800 dark:text-zinc-200">
        {items.map(([la, en]) => (
          <li key={la}>
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{la}</strong> – {en}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/vocabulary/landscape/water/flashcards">
            <button
              type="button"
              className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
            >
              Flashcards
            </button>
          </Link>
          <Link href="/vocabulary/landscape/water/test">
            <button
              type="button"
              className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
            >
              Quiz
            </button>
          </Link>
          <Link href="/vocabulary/landscape">
            <button
              type="button"
              className="rounded-lg bg-zinc-200 px-6 py-3 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
            >
              Back to Land &amp; Landscape
            </button>
          </Link>
        </div>
        <LessonQuizMedalCard quizPath="/vocabulary/landscape/water/test" />
        <LessonDoneButton lessonPath="/vocabulary/landscape/water" />
      </div>
    </div>
  );
}
