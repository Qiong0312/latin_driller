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

export default function Declensions() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Declension</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          In Latin, nouns and adjectives don&apos;t have a single, fixed form. Instead, they change their endings
          to show both number (singular or plural) and function (the case). This process is called{' '}
          <strong>declension</strong>.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1. Nominative Singular vs. Plural</h2>
        <p>
          Latin clearly distinguishes between one or more of something. Note how the noun, the adjective, and the
          verb all change to stay in agreement:
        </p>
        <DataTable
          headers={['Singular (One)', 'Plural (More than one)', 'Translation']}
          rows={[
            [
              'amīcus bonus est',
              'amīcī bonī sunt',
              '“The friend is good” / “The friends are good”',
            ],
            [
              'puella pulchra est',
              'puellae pulchrae sunt',
              '“The girl is beautiful” / “The girls are beautiful”',
            ],
            [
              'oppidum magnum est',
              'oppida magna sunt',
              '“The town is large” / “The towns are large”',
            ],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">2. Noun Families (Declensions)</h2>
        <p>
          Latin nouns are grouped into <strong>families</strong> called declensions based on their pattern of case
          endings.
        </p>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">A. The 1st Declension (Mostly Feminine)</h3>
        <p>These nouns typically end in <em>-a</em> in the nominative singular.</p>
        <p>
          <strong>Example noun:</strong> <em>īnsula</em> (&quot;island&quot;)
        </p>
        <DataTable
          headers={['Case', 'Singular', 'Plural']}
          rows={[
            ['Nominative', 'īnsula', 'īnsulae'],
            ['Genitive', 'īnsulae', 'īnsulārum'],
            ['Dative', 'īnsulae', 'īnsulīs'],
            ['Accusative', 'īnsulam', 'īnsulās'],
            ['Ablative', 'īnsulā', 'īnsulīs'],
          ]}
        />

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">B. The 2nd Declension (Masculine &amp; Neuter)</h3>
        <p>
          These nouns follow different patterns depending on whether they are <strong>masculine</strong> or{' '}
          <strong>neuter</strong>.
        </p>
        <p>
          <strong>Example masculine:</strong> <em>fluvius</em> (&quot;river&quot;)
        </p>
        <DataTable
          headers={['Case', 'Singular', 'Plural']}
          rows={[
            ['Nominative', 'fluvius', 'fluviī'],
            ['Genitive', 'fluviī', 'fluviōrum'],
            ['Dative', 'fluviō', 'fluviīs'],
            ['Accusative', 'fluvium', 'fluviōs'],
            ['Ablative', 'fluviō', 'fluviīs'],
          ]}
        />
        <p>
          <strong>Example neuter:</strong> <em>oppidum</em> (&quot;town&quot;)
        </p>
        <DataTable
          headers={['Case', 'Singular', 'Plural']}
          rows={[
            ['Nominative', 'oppidum', 'oppida'],
            ['Genitive', 'oppidī', 'oppidōrum'],
            ['Dative', 'oppidō', 'oppidīs'],
            ['Accusative', 'oppidum', 'oppida'],
            ['Ablative', 'oppidō', 'oppidīs'],
          ]}
        />
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Practice:</strong> use the quiz to check your understanding of these patterns.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/declensions/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/declensions/test" />
        <LessonDoneButton lessonPath="/grammar/declensions" />
      </div>
    </div>
  );
}
