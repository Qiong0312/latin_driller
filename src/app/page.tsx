import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Welcome to Latin Driller
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6 text-center">
        <p>
          Start your journey into Latin grammar with interactive lessons and tests.
        </p>
        <p>
          Choose a lesson from the sidebar to begin learning.
        </p>
      </div>
    </div>
  );
}
