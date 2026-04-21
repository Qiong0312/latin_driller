import Link from "next/link";

export default function Animals() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Animalia (Animals)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn Latin animal vocabulary step by step. Choose a category below to begin:
        </p>

        <div className="space-y-4">
          <Link href="/animals/common">
            <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🐾 Common Animals</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Learn about dogs, cats, horses, and farm animals</p>
            </div>
          </Link>

          <Link href="/animals/wild">
            <div className="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🐅 Wild Animals</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Discover lions, tigers, bears, and more</p>
            </div>
          </Link>

          <Link href="/animals/birds">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🐦 Birds</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Explore eagles, crows, sparrows, and others</p>
            </div>
          </Link>

          <Link href="/animals/sea">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🐟 Sea Animals</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Study fish, dolphins, whales, and sharks</p>
            </div>
          </Link>

          <Link href="/animals/small">
            <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🐍 Small Creatures</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Learn about mice, frogs, snakes, and insects</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}