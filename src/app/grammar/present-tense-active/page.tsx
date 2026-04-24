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
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">The present tense active</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          The present tense active in Latin is used to talk about actions that are happening right now, actions that
          happen regularly, or general truths.
        </p>
        <p>
          In Latin, verbs change their endings to show who is doing the action. These endings are the same for most
          verbs, but they attach to different stems depending on the type of verb.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Personal Endings</h2>
        <DataTable
          headers={["Person", "Singular Ending", "Plural Ending"]}
          rows={[
            ["I", "-ō", "-mus"],
            ["You", "-s", "-tis"],
            ["He/She/It", "-t", "-nt"],
          ]}
        />
        <p>
          So, if you know the verb’s stem and add the right ending, you know who is doing the action! Remember, however,
          that it is not necessary to memorize these tables right from the start. The endings will eventually stick by
          themselves if you read a lot.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1st conjugation: amāre (&ldquo;to love&rdquo;)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "amō", "amāmus"],
            ["You", "amās", "amātis"],
            ["He/She/It", "amat", "amant"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">2nd conjugation: vidēre (&ldquo;to see&rdquo;)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "videō", "vidēmus"],
            ["You", "vidēs", "vidētis"],
            ["He/She/It", "videt", "vident"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">3rd conjugation: legere (&ldquo;to read&rdquo;)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "legō", "legimus"],
            ["You", "legis", "legitis"],
            ["He/She/It", "legit", "legunt"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">4th conjugation: audīre (&ldquo;to hear&rdquo;)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "audiō", "audīmus"],
            ["You", "audīs", "audītis"],
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
