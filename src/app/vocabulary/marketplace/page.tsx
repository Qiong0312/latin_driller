import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { VocabularySubLessonCard } from "@/components/VocabularySubLessonCard";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

export default function MarketplaceVocabularyPage() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Mercātus (Marketplace)
      </h1>
      <p className="text-center text-lg text-zinc-600 dark:text-zinc-300 mb-6">
        In forō / mercātū — words for the forum, trade, and shops
      </p>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn nouns for public commerce: the square, buyers and sellers, money, and what you bring home. Choose a
          sub-topic, then use flashcards and the sub-lesson quiz, or try the all-lessons quiz for the full set.
        </p>

        <div className="space-y-4">
          <VocabularySubLessonCard
            href="/vocabulary/marketplace/places-people"
            lessonPath="/vocabulary/marketplace/places-people"
            cardClassName="cursor-pointer rounded-lg bg-amber-50 p-4 transition hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🏛️ Places &amp; people</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Forum, market, shop, merchant, buyer, client</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/marketplace/money-trade"
            lessonPath="/vocabulary/marketplace/money-trade"
            cardClassName="cursor-pointer rounded-lg bg-emerald-50 p-4 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">💰 Money &amp; trade</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Coin, price, goods, weight</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/marketplace/carrying"
            lessonPath="/vocabulary/marketplace/carrying"
            cardClassName="cursor-pointer rounded-lg bg-rose-50 p-4 transition hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">👜 Carrying &amp; personal items</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Purse, sack, pouch, small box</p>
          </VocabularySubLessonCard>
          <VocabularySubLessonCard
            href="/vocabulary/marketplace/equipment"
            lessonPath="/vocabulary/marketplace/equipment"
            cardClassName="cursor-pointer rounded-lg bg-slate-50 p-4 transition hover:bg-slate-100 dark:bg-slate-900/30 dark:hover:bg-slate-800/50"
          >
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50">⚖️ Equipment &amp; setting</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Table, jars, amphora, supplies</p>
          </VocabularySubLessonCard>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary/marketplace/flashcards">
              <button
                type="button"
                className="rounded-lg bg-emerald-200 px-6 py-3 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                Flashcards
              </button>
            </Link>
            <Link href="/vocabulary/marketplace/test">
              <button
                type="button"
                className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
              >
                Quiz
              </button>
            </Link>
          </div>
          <LessonQuizMedalCard quizPath="/vocabulary/marketplace/test" />
          <LessonDoneButton lessonPath="/vocabulary/marketplace" />
        </div>
      </div>
    </div>
  );
}
