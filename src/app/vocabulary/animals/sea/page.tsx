import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";
import { VocabularyNavFooter } from "@/components/VocabularyNavFooter";
import { ANIMALS_SEA_ENTRIES } from "@/lib/quizBanks/vocabulary/animalsVocab";

export default function SeaAnimals() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🐟 Animalia Marina (Sea Animals)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          {ANIMALS_SEA_ENTRIES.map(({ latin, english }) => (
            <li key={latin}>
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{latin}</strong> – {english}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/vocabulary/animals/sea/flashcards">
            <button className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800">
              Flashcards
            </button>
          </Link>
          <Link href="/vocabulary/animals/sea/test">
            <button className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700">
              Quiz
            </button>
          </Link>
        </div>
        <LessonQuizMedalCard quizPath="/vocabulary/animals/sea/test" />
        <LessonDoneButton lessonPath="/vocabulary/animals/sea" />
      </div>
      <VocabularyNavFooter variant="subLesson" lessonPath="/vocabulary/animals/sea" />
    </div>
  );
}