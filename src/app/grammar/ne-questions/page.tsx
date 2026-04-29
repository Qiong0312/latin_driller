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

export default function NeQuestionsPage() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Enclitic -ne in questions</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          In Latin, when you want to ask a yes-or-no question, you can add <strong>-ne</strong> to the emphatic word
          (very often the first word) of the sentence. This little <strong>-ne</strong> signals that a question is
          being asked.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Examples</h2>
        <DataTable
          headers={['Statement', 'Question']}
          rows={[
            ['Iūlia cantat. — “Julia sings.”', 'Cantatne Iūlia? — “Does Julia sing?”'],
            ['Mārcus venit. — “Marcus comes / is coming.”', 'Venitne Mārcus? — “Is Marcus coming?”'],
            ['Puer librum legit. — “The boy reads a book.”', 'Legitne puer librum? — “Does the boy read a book?”'],
            [
              'Magistra discipulōs laudat. — “The teacher praises the students.”',
              'Laudatne magistra discipulōs? — “Does the teacher praise the students?”',
            ],
            ['Rōma in Italiā est. — “Rome is in Italy.”', 'Estne Rōma in Italiā? — “Is Rome in Italy?”'],
            ['Canis dormit. — “The dog sleeps.”', 'Dormitne canis? — “Is the dog sleeping?”'],
          ]}
        />

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Tip:</strong> attach <em>-ne</em> directly to the chosen emphatic word; in many simple sentences this
          is the first word (often the verb).
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/ne-questions/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/ne-questions/test" />
        <LessonDoneButton lessonPath="/grammar/ne-questions" />
      </div>
    </div>
  );
}
