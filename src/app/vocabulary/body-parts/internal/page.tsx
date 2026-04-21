import Link from "next/link";

export default function InternalBodyParts() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🫀 Internal Organs (Viscera)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>cor</strong> – heart</li>
          <li><strong>pulmo</strong> – lung</li>
          <li><strong>hepar</strong> – liver</li>
          <li><strong>ren</strong> – kidney</li>
        </ul>
      </div>
      <div className="text-center mt-8 space-x-4">
        <Link href="/vocabulary/body-parts/internal/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Quiz
          </button>
        </Link>
        <Link href="/vocabulary/body-parts">
          <button className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
            Back to Body Parts
          </button>
        </Link>
      </div>
    </div>
  );
}