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

export default function PresentTensePassivePage() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">The present tense passive</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          The present tense passive in Latin is used to talk about actions that are happening to someone or something
          right now. Instead of saying who is doing the action (like in the active voice), the passive voice focuses on
          the person or thing receiving the action.
        </p>
        <p>
          In Latin, verbs change their endings to show who is being acted upon, just like in the active voice. The
          endings for the passive voice are slightly different, but they follow a similar pattern for most verbs.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          <span aria-hidden>✏️</span> Examples
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <em>puer amātur</em> — &ldquo;the boy is loved&rdquo;
          </li>
          <li>
            <em>puella vidētur</em> — &ldquo;the girl is seen&rdquo;
          </li>
          <li>
            <em>librī leguntur</em> — &ldquo;the books are read&rdquo;
          </li>
          <li>
            <em>vōx audītur</em> — &ldquo;the voice is heard&rdquo;
          </li>
        </ul>
        <p>
          <span aria-hidden>👉</span> Notice: the subject is receiving the action, not doing it.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Passive personal endings</h2>
        <DataTable
          headers={["Person", "Singular ending", "Plural ending"]}
          rows={[
            ["I am (being)", "-r", "-mur"],
            ["You are (being)", "-ris", "-minī"],
            ["He/She/It is (being)", "-tur", "-ntur"],
          ]}
        />
        <p>
          So, if you know the verb&apos;s stem and add the right passive ending, you can show who is receiving the
          action. Don&apos;t worry—these endings will become familiar as you practice and read a lot!
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1st conjugation: amārī (&ldquo;to be loved&rdquo;)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "amor", "amāmur"],
            ["You", "amāris", "amāminī"],
            ["He/She/It", "amātur", "amantur"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">2nd conjugation: vidērī (&ldquo;to be seen&rdquo;)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "videor", "vidēmur"],
            ["You", "vidēris", "vidēminī"],
            ["He/She/It", "vidētur", "videntur"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">3rd conjugation: legī (&ldquo;to be read&rdquo;)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "legor", "legimur"],
            ["You", "legeris", "legiminī"],
            ["He/She/It", "legitur", "leguntur"],
          ]}
        />

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">4th conjugation: audīrī (&ldquo;to be heard&rdquo;)</h2>
        <DataTable
          headers={["Person", "Singular", "Plural"]}
          rows={[
            ["I", "audior", "audīmur"],
            ["You", "audīris", "audīminī"],
            ["He/She/It", "audītur", "audiuntur"],
          ]}
        />
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/present-tense-passive/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/present-tense-passive/test" />
        <LessonDoneButton lessonPath="/grammar/present-tense-passive" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/present-tense-passive" />
    </div>
  );
}
