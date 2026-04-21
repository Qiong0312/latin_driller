import Link from "next/link";

export default function Vegetables() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🥕 Vegetables (Holera)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>carota</strong> – carrot</li>
          <li><strong>lactuca</strong> – lettuce</li>
          <li><strong>cepa</strong> – onion</li>
          <li><strong>allium</strong> – garlic</li>
          <li><strong>fungus</strong> – mushroom</li>
        </ul>
      </div>
      <div className="text-center mt-8 space-x-4">
        <Link href="/vocabulary/food/vegetables/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Yourself
          </button>
        </Link>
        <Link href="/vocabulary/food">
          <button className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
            Back to Food
          </button>
        </Link>
      </div>
    </div>
  );
}