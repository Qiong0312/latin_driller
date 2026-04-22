import Link from "next/link";

export default function BodyParts() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Corpus (Body Parts)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn Latin body part vocabulary step by step. Choose a category below to begin:
        </p>

        <div className="space-y-4">
          <Link href="/vocabulary/body-parts/basic">
            <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🧍 Basic Body Parts</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Head, arms, legs, chest, and more</p>
            </div>
          </Link>

          <Link href="/vocabulary/body-parts/face">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">😊 Face Parts</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Eyes, nose, ears, mouth, and teeth</p>
            </div>
          </Link>

          <Link href="/vocabulary/body-parts/internal">
            <div className="p-4 bg-pink-50 dark:bg-pink-900 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🫀 Internal Organs</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Heart, lungs, liver, and kidneys</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
