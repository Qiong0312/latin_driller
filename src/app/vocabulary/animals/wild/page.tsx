import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

export default function WildAnimals() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🐅 Animalia Fera (Wild Animals)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>Leo</strong> – Lion</li>
          <li><strong>Tigris</strong> – Tiger</li>
          <li><strong>Ursus</strong> – Bear</li>
          <li><strong>Lupus</strong> – Wolf</li>
          <li><strong>Vulpes</strong> – Fox</li>
          <li><strong>Cervus</strong> – Deer</li>
          <li><strong>Elephantus</strong> – Elephant</li>
        </ul>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/vocabulary/animals/wild/flashcards">
            <button className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800">
              Flashcards
            </button>
          </Link>
          <Link href="/vocabulary/animals/wild/test">
            <button className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700">
              Quiz
            </button>
          </Link>
          <Link href="/vocabulary/animals">
            <button className="px-6 py-3 rounded-lg bg-zinc-200 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600">
              Back to Animals
            </button>
          </Link>
        </div>
        <LessonQuizMedalCard quizPath="/vocabulary/animals/wild/test" />
        <LessonDoneButton lessonPath="/vocabulary/animals/wild" />
      </div>
    </div>
  );
}