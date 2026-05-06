import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { VocabularySubLessonCard } from '@/components/VocabularySubLessonCard';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { VocabularyNavFooter } from '@/components/VocabularyNavFooter';

export default function ClothingVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-4 text-center text-4xl font-bold text-black dark:text-zinc-50">
        Clothing (Vestīmenta)
      </h1>
      <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-300">
        Garments, cloaks, footwear, and what they were made of — everyday Roman dress from tunic to traveling paenula.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Choose a sub-topic below. Use flashcards and the sub-lesson quiz for focused practice, or take the category
          quiz at the bottom to drill every lesson in this topic combined.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/clothing/basic-clothing"
            lessonPath="/vocabulary/clothing/basic-clothing"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">👗 Basic clothing</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Tunic, toga, cloaks for men and women</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/clothing/outerwear"
            lessonPath="/vocabulary/clothing/outerwear"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧥 Outerwear</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Amictus, sagum, paenula</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/clothing/footwear"
            lessonPath="/vocabulary/clothing/footwear"
            cardClassName="cursor-pointer rounded-lg bg-stone-50 p-4 transition hover:bg-stone-200 dark:bg-stone-950/50 dark:hover:bg-stone-800/70"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">👞 Footwear</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Calceus, sandalium, solea</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/clothing/accessories"
            lessonPath="/vocabulary/clothing/accessories"
            cardClassName="cursor-pointer rounded-lg bg-violet-50 p-4 transition hover:bg-violet-100 dark:bg-violet-950/35 dark:hover:bg-violet-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🎀 Accessories</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Belts, ring, bulla</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/clothing/materials-parts"
            lessonPath="/vocabulary/clothing/materials-parts"
            cardClassName="cursor-pointer rounded-lg bg-sky-50 p-4 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧵 Materials &amp; parts</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Fabric, wool, linen, fibula</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/clothing/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/clothing/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/clothing/test" />
          <LessonDoneButton lessonPath="/vocabulary/clothing" />
        </div>
        <VocabularyNavFooter variant="category" categoryPath="/vocabulary/clothing" />
      </div>
    </div>
  );
}
