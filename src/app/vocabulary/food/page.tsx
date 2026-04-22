import Link from "next/link";

export default function Food() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Cibus (Food)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn Latin food vocabulary step by step. Choose a category below to begin:
        </p>

        <div className="space-y-4">
          <Link href="/vocabulary/food/basic">
            <div className="p-4 bg-amber-50 dark:bg-amber-900 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍞 Basic Foods</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Learn bread, cheese, eggs, and meals</p>
            </div>
          </Link>

          <Link href="/vocabulary/food/fruits">
            <div className="p-4 bg-red-50 dark:bg-red-900 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍎 Fruits</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Explore apples, pears, grapes, and more</p>
            </div>
          </Link>

          <Link href="/vocabulary/food/vegetables">
            <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🥕 Vegetables</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Study carrots, lettuce, onions, and vegetables</p>
            </div>
          </Link>

          <Link href="/vocabulary/food/meat">
            <div className="p-4 bg-pink-50 dark:bg-pink-900 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍖 Meat & Protein</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Learn meat, pork, beef, chicken, and fish</p>
            </div>
          </Link>

          <Link href="/vocabulary/food/drinks">
            <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍯 Drinks & Others</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Discover water, milk, wine, honey, and salt</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
