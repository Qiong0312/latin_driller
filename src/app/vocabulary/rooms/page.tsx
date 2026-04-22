import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { VocabularySubLessonCard } from "@/components/VocabularySubLessonCard";

export default function RoomsVocabulary() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🏠 Cubicula et Loca Domus (Rooms in Latin)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn Latin words for parts of a house and other spaces. Choose a category below to begin:
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/rooms/living-sleeping"
            lessonPath="/vocabulary/rooms/living-sleeping"
            cardClassName="p-4 bg-rose-50 dark:bg-rose-900 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🛏️ Living &amp; Sleeping Areas</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Bedroom, dormitory, bed</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/rooms/eating-cooking"
            lessonPath="/vocabulary/rooms/eating-cooking"
            cardClassName="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍽️ Eating &amp; Cooking</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Kitchen and dining room</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/rooms/general"
            lessonPath="/vocabulary/rooms/general"
            cardClassName="p-4 bg-amber-50 dark:bg-amber-900 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🚪 General House Spaces</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Atrium, study, rooms and chambers</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/rooms/washing"
            lessonPath="/vocabulary/rooms/washing"
            cardClassName="p-4 bg-cyan-50 dark:bg-cyan-900 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🛁 Washing &amp; Bathing</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Bath, washing room</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/rooms/study-work"
            lessonPath="/vocabulary/rooms/study-work"
            cardClassName="p-4 bg-violet-50 dark:bg-violet-900 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">📚 Study &amp; Work</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Library and workshop</p>
          </VocabularySubLessonCard>

          <VocabularySubLessonCard
            href="/vocabulary/rooms/outdoor"
            lessonPath="/vocabulary/rooms/outdoor"
            cardClassName="p-4 bg-lime-50 dark:bg-lime-900 rounded-lg hover:bg-lime-100 dark:hover:bg-lime-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🌳 Outdoor / Extra Spaces</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Garden and peristyle</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/rooms/flashcards">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/rooms/test">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonDoneButton lessonPath="/vocabulary/rooms" />
        </div>
      </div>
    </div>
  );
}
