import Link from "next/link";

export default function CommonAnimals() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🐾 Animalia Communia (Common Animals)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>Canis</strong> – Dog</li>
          <li><strong>Feles</strong> – Cat</li>
          <li><strong>Equus</strong> – Horse</li>
          <li><strong>Vacca</strong> – Cow</li>
          <li><strong>Porcus</strong> – Pig</li>
          <li><strong>Ovis</strong> – Sheep</li>
          <li><strong>Capra</strong> – Goat</li>
          <li><strong>Asinus</strong> – Donkey</li>
        </ul>
      </div>
      <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/vocabulary/animals/common/flashcards">
          <button className="px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700">
            Flashcards
          </button>
        </Link>
        <Link href="/vocabulary/animals/common/test">
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