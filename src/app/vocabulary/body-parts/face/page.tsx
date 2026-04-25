import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

export default function FaceBodyParts() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        😊 Face Parts (Facies)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>faciēs</strong> – face</li>
          <li><strong>frōns</strong> – forehead</li>
          <li><strong>oculus</strong> – eye</li>
          <li><strong>cīlium</strong> – eyelash</li>
          <li><strong>nāsus</strong> – nose</li>
          <li><strong>aurēs</strong> – ears</li>
          <li><strong>maxilla</strong> – jaw</li>
          <li><strong>dēntēs</strong> – tooth / teeth</li>
          <li><strong>lingua</strong> – tongue</li>
        </ul>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/vocabulary/body-parts/face/flashcards">
            <button className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800">
              Flashcards
            </button>
          </Link>
          <Link href="/vocabulary/body-parts/face/test">
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
        <LessonQuizMedalCard quizPath="/vocabulary/body-parts/face/test" />
        <LessonDoneButton lessonPath="/vocabulary/body-parts/face" />
      </div>
    </div>
  );
}