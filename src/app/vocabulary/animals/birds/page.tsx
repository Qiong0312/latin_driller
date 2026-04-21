import Link from "next/link";

export default function Birds() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🐦 Aves (Birds)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>Avis</strong> – Bird</li>
          <li><strong>Aquila</strong> – Eagle</li>
          <li><strong>Columba</strong> – Dove / Pigeon</li>
          <li><strong>Corvus</strong> – Crow</li>
          <li><strong>Passer</strong> – Sparrow</li>
          <li><strong>Gallina</strong> – Hen</li>
          <li><strong>Gallus</strong> – Rooster</li>
        </ul>
      </div>
      <div className="text-center mt-8 space-x-4">
        <Link href="/vocabulary/animals/birds/test">
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