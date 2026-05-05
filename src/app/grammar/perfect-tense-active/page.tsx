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
            {headers.map((h, hi) => (
              <th key={hi} className="px-3 py-2 font-semibold text-zinc-900 dark:text-zinc-100">
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

export default function PerfectTenseActivePage() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">The perfect tense active</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          The perfect tense active in Latin is used to talk about actions that have been completed in the past. It is
          like saying &ldquo;I loved&rdquo; or &ldquo;I have loved&rdquo; in English.
        </p>
        <p>
          In Latin, verbs change their forms to show who completed the action. The perfect tense uses a special set of
          endings that are added to the <strong>perfect stem</strong> of the verb. You can find the perfect stem by
          looking at the third principal part of the verb and removing the <strong>-ī</strong> ending, for example{' '}
          <em>amāv-ī</em>, <em>vīd-ī</em>, <em>lēg-ī</em> or <em>audīv-ī</em>.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Examples</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <em>amāvī</em> — &ldquo;I loved&rdquo; / &ldquo;I have loved&rdquo;
          </li>
          <li>
            <em>vīdistī</em> — &ldquo;you saw&rdquo;
          </li>
          <li>
            <em>lēgit</em> — &ldquo;he/she read&rdquo;
          </li>
          <li>
            <em>audīvimus</em> — &ldquo;we heard&rdquo;
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Perfect tense active endings</h2>
        <DataTable
          headers={["Person", "Singular ending", "Plural ending"]}
          rows={[
            ["I", "-ī", "-imus"],
            ["You", "-istī", "-istis"],
            ["He/She/It", "-it", "-ērunt"],
          ]}
        />
        <p>
          So, if you know the perfect stem of a verb and add the right ending, you can tell who did the action!
          Remember, it is not necessary to memorize these tables right away. The endings will become familiar as you
          read and practice more.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          1st conjugation: amāre (&ldquo;to love&rdquo;); perfect stem: <em>amāv-</em> (from <em>amāvī</em>)
        </h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "amāvī", "amāvimus"],
            ["You", "amāvistī", "amāvistis"],
            ["He/She/It", "amāvit", "amāvērunt"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          2nd conjugation: vidēre (&ldquo;to see&rdquo;); perfect stem: <em>vīd-</em> (from <em>vīdī</em>)
        </h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "vīdī", "vīdimus"],
            ["You", "vīdistī", "vīdistis"],
            ["He/She/It", "vīdit", "vīdērunt"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          3rd conjugation: legere (&ldquo;to read&rdquo;); perfect stem: <em>lēg-</em> (from <em>lēgī</em>)
        </h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "lēgī", "lēgimus"],
            ["You", "lēgistī", "lēgistis"],
            ["He/She/It", "lēgit", "lēgērunt"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          4th conjugation: audīre (&ldquo;to hear&rdquo;); perfect stem: <em>audīv-</em> (from <em>audīvī</em>)
        </h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "audīvī", "audīvimus"],
            ["You", "audīvistī", "audīvistis"],
            ["He/She/It", "audīvit", "audīvērunt"],
          ]}
        />

        <p>
          <strong>The good news:</strong> The perfect endings are always the same for all verbs! You just need to learn
          the perfect stem.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/perfect-tense-active/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/perfect-tense-active/test" />
        <LessonDoneButton lessonPath="/grammar/perfect-tense-active" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/perfect-tense-active" />
    </div>
  );
}
