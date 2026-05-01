import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";
import { GrammarLessonSeriesFooter } from "@/components/GrammarLessonSeriesFooter";

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

export default function DemonstrativePronounsIILesson() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Demonstrative pronouns II
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Demonstrative pronouns can show distance. They also match what they point to in{" "}
          <strong>gender</strong>, <strong>number</strong>, and <strong>case</strong>.
        </p>
        <p>
          The pronoun <strong lang="la">hic</strong>
          {" "}
          means &quot;this&quot; and is used for someone or something close to the speaker.
        </p>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          <span lang="la">Hic, haec, hoc</span> — &quot;this&quot; (close to the speaker)
        </h3>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Examples</h3>
        <ul className="list-disc space-y-3 pl-6 text-base">
          <li>
            <span lang="la">Hic liber meus est.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">This book is mine.</span>
          </li>
          <li>
            <span lang="la">Haec puella cantat.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">This girl sings.</span>
          </li>
          <li>
            <span lang="la">Hoc bonum est.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">This is good.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Singular</h2>
        <DataTable
          headers={['Case', 'Masculine (hic)', 'Feminine (haec)', 'Neuter (hoc)']}
          rows={[
            ['Nominative', 'hic', 'haec', 'hoc'],
            ['Genitive', 'huius', 'huius', 'huius'],
            ['Dative', 'huic', 'huic', 'huic'],
            ['Accusative', 'hunc', 'hanc', 'hoc'],
            ['Ablative', 'hōc', 'hāc', 'hōc'],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Plural</h2>
        <DataTable
          headers={['Case', 'Masculine (hī)', 'Feminine (hae)', 'Neuter (haec)']}
          rows={[
            ['Nominative', 'hī', 'hae', 'haec'],
            ['Genitive', 'hōrum', 'hārum', 'hōrum'],
            ['Dative', 'hīs', 'hīs', 'hīs'],
            ['Accusative', 'hōs', 'hās', 'haec'],
            ['Ablative', 'hīs', 'hīs', 'hīs'],
          ]}
        />

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Tip:</strong> when <span lang="la">hic, haec, hoc</span>
          {" "}
          agrees with a noun, start from that noun&apos;s gender and number, then pick the case the pronoun needs in
          its clause.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/demonstrative-pronouns-ii/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/demonstrative-pronouns-ii/test" />
        <LessonDoneButton lessonPath="/grammar/demonstrative-pronouns-ii" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/demonstrative-pronouns-ii" />
    </div>
  );
}
