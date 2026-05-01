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

export default function DemonstrativePronounsILesson() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Demonstrative pronouns I
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Demonstrative pronouns in Latin are used to point out or refer to specific people, things, or ideas. They are
          like saying &quot;this,&quot; &quot;that,&quot; &quot;these,&quot; or &quot;those&quot; in English. They also
          match the noun they are describing in <strong>gender</strong> (masculine, feminine, or neuter),{" "}
          <strong>number</strong> (singular or plural), and <strong>case</strong> (how the noun is used in the
          sentence).
        </p>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          <span lang="la">Is, ea, id</span> — &quot;he, she, it&quot; or &quot;this/that&quot;
        </h3>
        <p>
          The pronoun <strong lang="la">is</strong>
          {" "}
          is often used to refer to someone or something previously mentioned (like saying &quot;he,&quot; &quot;she,&quot;
          &quot;it,&quot; or &quot;that&quot;). It can also mean &quot;this&quot; or &quot;that,&quot; depending on
          context.
        </p>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Examples</h3>
        <ul className="list-disc space-y-3 pl-6 text-base">
          <li>
            <span lang="la">Mārcus adest. Is laetus est.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">Marcus is here. He is happy.</span>
          </li>
          <li>
            <span lang="la">Iūlia rosam habet. Ea pulchra est.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">Julia has a rose. It is beautiful.</span>
          </li>
          <li>
            <span lang="la">Id verum est.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">That is true.</span>
          </li>
          <li>
            <span lang="la">Hoc audīvī, et id mē terruit.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">I heard this, and that frightened me.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Singular</h2>
        <DataTable
          headers={['Case', 'Masculine (is)', 'Feminine (ea)', 'Neuter (id)']}
          rows={[
            ['Nominative', 'is', 'ea', 'id'],
            ['Genitive', 'eius', 'eius', 'eius'],
            ['Dative', 'eī', 'eī', 'eī'],
            ['Accusative', 'eum', 'eam', 'id'],
            ['Ablative', 'eō', 'eā', 'eō'],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Plural</h2>
        <DataTable
          headers={['Case', 'Masculine (eī)', 'Feminine (eae)', 'Neuter (ea)']}
          rows={[
            ['Nominative', 'eī / iī', 'eae', 'ea'],
            ['Genitive', 'eōrum', 'eārum', 'eōrum'],
            ['Dative', 'eīs / iīs', 'eīs / iīs', 'eīs / iīs'],
            ['Accusative', 'eōs', 'eās', 'ea'],
            ['Ablative', 'eīs / iīs', 'eīs / iīs', 'eīs / iīs'],
          ]}
        />

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Tip:</strong> when <span lang="la">is, ea, id</span>
          {" "}
          picks up a prior noun, match that noun&apos;s gender and number; then choose the case from the pronoun&apos;s job
          in its own clause.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/demonstrative-pronouns-i/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/demonstrative-pronouns-i/test" />
        <LessonDoneButton lessonPath="/grammar/demonstrative-pronouns-i" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/demonstrative-pronouns-i" />
    </div>
  );
}
