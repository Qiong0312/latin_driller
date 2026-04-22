import Link from "next/link";

export default function Drinks() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🍯 Drinks & Others (Potus et Alia)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>aqua</strong> – water</li>
          <li><strong>lac</strong> – milk</li>
          <li><strong>vinum</strong> – wine</li>
          <li><strong>mel</strong> – honey</li>
          <li><strong>sal</strong> – salt</li>
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/vocabulary/food/drinks/flashcards">
          <button className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800">
            Flashcards
          </button>
        </Link>
        <Link href="/vocabulary/food/drinks/test">
          <button className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700">
            Quiz
          </button>
        </Link>
        <Link href="/vocabulary/food">
          <button className="px-6 py-3 rounded-lg bg-zinc-200 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600">
            Back to Food
          </button>
        </Link>
      </div>
    </div>
  );
}