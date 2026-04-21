import Link from "next/link";

export default function SmallCreatures() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🐍 Animalia Parva (Small Creatures)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>Mus</strong> – Mouse</li>
          <li><strong>Rana</strong> – Frog</li>
          <li><strong>Serpens</strong> – Snake</li>
          <li><strong>Apis</strong> – Bee</li>
          <li><strong>Formica</strong> – Ant</li>
        </ul>
      </div>
      <div className="text-center mt-8 space-x-4">
        <Link href="/vocabulary/animals/small/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Quiz
          </button>
        </Link>
        <Link href="/vocabulary/animals">
          <button className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
            Back to Animals
          </button>
        </Link>
      </div>
    </div>
  );
}