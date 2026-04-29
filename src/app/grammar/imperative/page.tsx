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

export default function ImperativePage() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Imperative</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          The imperative is a specific set of forms used when giving orders in Latin. There are two main forms:
          singular (<em>sg.</em>) and plural (<em>pl.</em>). Singular is used when addressing one person; plural is
          used for more than one person.
        </p>
        <p>
          For regular verbs, singular commands use the stem as the command form. Plural commands add <strong>-te</strong>{' '}
          to the stem.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Regular imperative forms</h2>
        <DataTable
          headers={['Singular (You)', 'Plural (You all)']}
          rows={[
            ['amā (“love!”)', 'amāte (“love!”)'],
            ['vidē (“see!”)', 'vidēte (“see!”)'],
            ['lege (“read!”)', 'legite (“read!”)'],
            ['audī (“hear!”)', 'audīte (“hear!”)'],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Deponent verbs</h2>
        <p>
          Some verbs follow different imperative patterns. Deponent verbs (verbs that look passive but have active
          meanings) often use <strong>-re</strong> in singular and <strong>-minī</strong> in plural.
        </p>
        <DataTable
          headers={['Singular', 'Plural']}
          rows={[
            ['sequere! (“follow!”)', 'sequiminī! (“follow!”)'],
          ]}
        />

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Tip:</strong> regular imperatives are usually stem and stem + <em>-te</em>, while deponents need their
          own special endings.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/imperative/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/imperative/test" />
        <LessonDoneButton lessonPath="/grammar/imperative" />
      </div>
    </div>
  );
}
