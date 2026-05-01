import Link from 'next/link';
import { GrammarLessonSeriesFooter } from '@/components/GrammarLessonSeriesFooter';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';

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

export default function DemonstrativePronounsIIILesson() {
  return (
    <div className="app-panel">
      <h1 className="mb-8 text-center text-4xl font-bold text-black dark:text-zinc-50">
        Demonstrative pronouns III
      </h1>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Ille, illa, illud
        </p>
        <p>
          The pronoun <strong lang="la">ille</strong> means &quot;that&quot; and is used for someone or something far
          from the speaker—either in distance or in thought. Like other demonstratives, it agrees in{' '}
          <strong>gender</strong>, <strong>number</strong>, and <strong>case</strong> when it points to something
          specific you could express with an adjective.
        </p>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          <span lang="la">Ille, illa, illud</span> — &quot;that&quot; (far from the speaker)
        </h3>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Examples</h3>
        <ul className="list-disc space-y-3 pl-6 text-base">
          <li>
            <span lang="la">Ille vir altus est.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">That man is tall.</span>
          </li>
          <li>
            <span lang="la">Illa domus magna est.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">That house is big.</span>
          </li>
          <li>
            <span lang="la">Illud nōn placet.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">That is not pleasing.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Singular</h2>
        <DataTable
          headers={['Case', 'Masculine (ille)', 'Feminine (illa)', 'Neuter (illud)']}
          rows={[
            ['Nominative', 'ille', 'illa', 'illud'],
            ['Genitive', 'illīus', 'illīus', 'illīus'],
            ['Dative', 'illī', 'illī', 'illī'],
            ['Accusative', 'illum', 'illam', 'illud'],
            ['Ablative', 'illō', 'illā', 'illō'],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Plural</h2>
        <DataTable
          headers={['Case', 'Masculine (illī)', 'Feminine (illae)', 'Neuter (illa)']}
          rows={[
            ['Nominative', 'illī', 'illae', 'illa'],
            ['Genitive', 'illōrum', 'illārum', 'illōrum'],
            ['Dative', 'illīs', 'illīs', 'illīs'],
            ['Accusative', 'illōs', 'illās', 'illa'],
            ['Ablative', 'illīs', 'illīs', 'illīs'],
          ]}
        />

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Tip:</strong> pick gender and number from what you&apos;re referring to (or implying), then use the case
          the pronoun fills in its clause—verbs like <span lang="la">est</span> or <span lang="la">placet</span> often pair
          with nominative neuter forms such as <span lang="la">illud</span>.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/demonstrative-pronouns-iii/test">
          <button
            type="button"
            className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/demonstrative-pronouns-iii/test" />
        <LessonDoneButton lessonPath="/grammar/demonstrative-pronouns-iii" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/demonstrative-pronouns-iii" />
    </div>
  );
}
