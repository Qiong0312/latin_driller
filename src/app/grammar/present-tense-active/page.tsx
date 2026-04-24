import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-600">
      <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800/80">
            {headers.map((h) => (
              <th key={h} className="px-3 py-2 font-semibold text-zinc-900 dark:text-zinc-100">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-zinc-100 last:border-0 dark:border-zinc-700/80">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 text-zinc-800 dark:text-zinc-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PresentTenseActivePage() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Present Tense Active</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          The present tense active in Latin is used to talk about actions happening right now, actions that happen
          regularly, and general truths.
        </p>
        <p>
          In Latin, verbs change endings to show who is doing the action. The endings are largely the same across
          verbs, but they attach to different stems depending on conjugation.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Personal Endings</h2>
        <DataTable
          headers={["Person", "Singular Ending", "Plural Ending"]}
          rows={[
            ["I", "-o", "-mus"],
            ["You", "-s", "-tis"],
            ["He/She/It", "-t", "-nt"],
          ]}
        />
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          You do not need to force-memorize every table immediately. With practice and repeated reading, these endings
          become natural.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1st Conjugation: amare (to love)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "amo", "amamus"],
            ["You", "amas", "amatis"],
            ["He/She/It", "amat", "amant"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">2nd Conjugation: videre (to see)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "video", "videmus"],
            ["You", "vides", "videtis"],
            ["He/She/It", "videt", "vident"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">3rd Conjugation: legere (to read)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "lego", "legimus"],
            ["You", "legis", "legitis"],
            ["He/She/It", "legit", "legunt"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">4th Conjugation: audire (to hear)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "audio", "audimus"],
            ["You", "audis", "auditis"],
            ["He/She/It", "audit", "audiunt"],
          ]}
        />
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/present-tense-active/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/present-tense-active/test" />
        <LessonDoneButton lessonPath="/grammar/present-tense-active" />
      </div>
    </div>
  );
}
