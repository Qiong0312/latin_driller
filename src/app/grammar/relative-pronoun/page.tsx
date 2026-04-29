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

export default function RelativePronounLesson() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Relative Pronoun</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          The relative pronoun in Latin connects two parts of a sentence by introducing a relative clause. In English,
          this is often translated as &quot;who,&quot; &quot;which,&quot; or &quot;that.&quot;
        </p>
        <p>
          The relative pronoun agrees with its antecedent in <strong>gender</strong> and <strong>number</strong>, but
          its <strong>case</strong> depends on how it is used inside the relative clause.
        </p>
        <p>
          The most common relative pronoun is <strong>quī, quae, quod</strong>.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Singular Forms</h2>
        <DataTable
          headers={['Case', 'Masculine (quī)', 'Feminine (quae)', 'Neuter (quod)']}
          rows={[
            ['Nominative', 'quī', 'quae', 'quod'],
            ['Genitive', 'cuius', 'cuius', 'cuius'],
            ['Dative', 'cui', 'cui', 'cui'],
            ['Accusative', 'quem', 'quam', 'quod'],
            ['Ablative', 'quō', 'quā', 'quō'],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Plural Forms</h2>
        <DataTable
          headers={['Case', 'Masculine (quī)', 'Feminine (quae)', 'Neuter (quae)']}
          rows={[
            ['Nominative', 'quī', 'quae', 'quae'],
            ['Genitive', 'quōrum', 'quārum', 'quōrum'],
            ['Dative', 'quibus', 'quibus', 'quibus'],
            ['Accusative', 'quōs', 'quās', 'quae'],
            ['Ablative', 'quibus', 'quibus', 'quibus'],
          ]}
        />

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Tip:</strong> first find the antecedent (gender/number), then determine the pronoun&apos;s case from
          its function inside the relative clause.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/relative-pronoun/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/relative-pronoun/test" />
        <LessonDoneButton lessonPath="/grammar/relative-pronoun" />
      </div>
    </div>
  );
}
