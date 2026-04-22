import Link from "next/link";

export default function FaceBodyParts() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        😊 Face Parts (Facies)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>facies</strong> – face</li>
          <li><strong>frons</strong> – forehead</li>
          <li><strong>oculus</strong> – eye</li>
          <li><strong>cilium</strong> – eyelash</li>
          <li><strong>nasus</strong> – nose</li>
          <li><strong>aures</strong> – ears</li>
          <li><strong>maxilla</strong> – jaw</li>
          <li><strong>dents</strong> – tooth / teeth</li>
          <li><strong>lingua</strong> – tongue</li>
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/vocabulary/body-parts/face/flashcards">
          <button className="px-6 py-3 rounded-lg bg-emerald-200 text-emerald-950 shadow-sm transition hover:bg-emerald-300 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800">
            Flashcards
          </button>
        </Link>
        <Link href="/vocabulary/body-parts/face/test">
          <button className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700">
            Quiz
          </button>
        </Link>
        <Link href="/vocabulary/body-parts">
          <button className="px-6 py-3 rounded-lg bg-zinc-200 text-zinc-900 shadow-sm transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600">
            Back to Body Parts
          </button>
        </Link>
      </div>
    </div>
  );
}