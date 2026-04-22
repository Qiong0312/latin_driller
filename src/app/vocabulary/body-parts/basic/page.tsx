import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

export default function BasicBodyParts() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🧍 Basic Body Parts (Corpus)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>corpus</strong> – body</li>
          <li><strong>caput</strong> – head</li>
          <li><strong>collum</strong> – neck</li>
          <li><strong>umerus</strong> – shoulder</li>
          <li><strong>brachium</strong> – arm</li>
          <li><strong>manus</strong> – hand</li>
          <li><strong>digitus</strong> – finger</li>
          <li><strong>pectus</strong> – chest</li>
          <li><strong>venter</strong> – belly / stomach</li>
          <li><strong>tergum</strong> – back</li>
          <li><strong>crus</strong> – leg</li>
          <li><strong>pes</strong> – foot</li>
        </ul>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/vocabulary/body-parts/basic/flashcards">
            <button className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800">
              Flashcards
            </button>
          </Link>
          <Link href="/vocabulary/body-parts/basic/test">
            <button className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700">
              Quiz
            </button>
          </Link>
          <Link href="/vocabulary/body-parts">
            <button className="px-6 py-3 rounded-lg bg-zinc-200 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600">
              Back to Body Parts
            </button>
          </Link>
        </div>
        <LessonQuizMedalCard quizPath="/vocabulary/body-parts/basic/test" />
        <LessonDoneButton lessonPath="/vocabulary/body-parts/basic" />
      </div>
    </div>
  );
}