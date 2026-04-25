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

export default function AdjectivesPage() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Adjectives</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Latin adjectives describe the quality or nature of a noun or pronoun. They agree in number, gender, and
          case with the word they modify.
        </p>
        <p>
          Example: &ldquo;good books&rdquo; is <em>librī bonī</em>, but &ldquo;I have good books&rdquo; is{' '}
          <em>librōs bonōs habeō</em>. Since <em>librōs</em> is accusative plural masculine, the adjective must
          match as <em>bonōs</em>.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Three adjective grades</h2>
        <p>
          A Latin adjective has three grades: positive, comparative, and superlative. Example: <em>perītus</em>{' '}
          (&ldquo;skilled&rdquo;), <em>perītior</em> (&ldquo;more skilled&rdquo;), and <em>perītissimus</em> (
          &ldquo;most skilled&rdquo;).
        </p>
        <DataTable
          headers={["Grade", "Form", "Meaning"]}
          rows={[
            ["Positive", "perītus", "skilled"],
            ["Comparative", "perītior", "more skilled"],
            ["Superlative", "perītissimus", "most skilled"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Simple transformation rule</h2>
        <DataTable
          headers={["Rule", "Example"]}
          rows={[
            ["positive = base form", "perītus"],
            ["comparative = add -ior", "perītior"],
            ["superlative = add -issimus", "perītissimus"],
          ]}
        />

        <p>
          When no direct comparison is being made, comparative and superlative can also carry intensity meanings:
          <em> perītior</em> can mean &ldquo;somewhat/rather skilled,&rdquo; and <em>perītissimus</em> can mean
          &ldquo;very skilled.&rdquo;
        </p>
        <p>
          The superlative can therefore indicate either the highest degree or simply a very high degree. For example,
          <em> iūstissimus</em> may mean both &ldquo;the most just&rdquo; and &ldquo;very just.&rdquo;
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/adjectives/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/adjectives/test" />
        <LessonDoneButton lessonPath="/grammar/adjectives" />
      </div>
    </div>
  );
}
