import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { GrammarLessonSeriesFooter } from '@/components/GrammarLessonSeriesFooter';

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

export default function PrepositionsPage() {
  return (
    <div className="app-panel">
      <h1 className="mb-8 text-center text-4xl font-bold text-black dark:text-zinc-50">Prepositions</h1>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          In Latin, prepositions are short words like &quot;in&quot;, &quot;ad&quot;, and &quot;cum&quot; that show
          relationships such as place, direction, or manner.
        </p>
        <p>
          Unlike English, Latin prepositions require specific cases. Some are used with the{' '}
          <strong>ablative</strong> case, while others take the <strong>accusative</strong> case. In general, the
          ablative describes location or position, while the accusative shows movement or direction.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Prepositions with the ablative</h2>
        <DataTable
          headers={['Preposition', 'Meaning', 'Example', 'Translation', 'Note']}
          rows={[
            ['in', 'in, on', 'in urbe', 'in the city', 'urbe (ending -e) is ablative'],
            ['sub', 'under, below', 'sub monte', 'under the mountain', 'monte (ending -e) is ablative'],
            ['sine', 'without', 'sine dubiō', 'without doubt', 'dubiō (ending -ō) is ablative'],
            ['cum', 'with', 'cum amīcō', 'with a friend', 'amīcō (ending -ō) is ablative'],
            ['ex', 'out of, from', 'ex silvā', 'out of the forest', 'silvā (ending -ā) is ablative'],
            ['ab', 'away from, by', 'ab oppidō', 'away from the town', 'oppidō (ending -ō) is ablative'],
          ]}
        />
        <p>
          Other prepositions with the ablative include <em>dē</em> (down from, about, concerning) and{' '}
          <em>prō</em> (for, on behalf of).
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Prepositions with the accusative</h2>
        <DataTable
          headers={['Preposition', 'Meaning', 'Example', 'Translation', 'Note']}
          rows={[
            ['ad', 'to, toward', 'ad urbem', 'to the city', 'urbem (ending -em) is accusative'],
            ['ante', 'before, in front of', 'ante portam', 'in front of the gate', 'portam (ending -am) is accusative'],
            ['post', 'after, behind', 'post mūrum', 'behind the wall', 'mūrum (ending -um) is accusative'],
            ['inter', 'between, among', 'inter amīcōs', 'among friends', 'amīcōs (ending -ōs) is accusative'],
            ['prope', 'near', 'prope fluvium', 'near the river', 'fluvium (ending -um) is accusative'],
            ['circum', 'around', 'circum oppidum', 'around the town', 'oppidum (ending -um) is accusative'],
            ['per', 'through', 'per silvam', 'through the forest', 'silvam (ending -am) is accusative'],
          ]}
        />
        <p>
          Other prepositions with the accusative include <em>apud</em> (at, near, among, in the presence of),{' '}
          <em>contrā</em> (against, opposite), <em>in</em> (into, onto), <em>sub</em> (under, below, beneath),{' '}
          <em>super</em> (above, over, on top of), <em>trāns</em> (across, beyond), <em>propter</em> (because of, on
          account of), <em>intrā</em> (within), and <em>suprā</em> (above, beyond).
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Some prepositions take both cases</h2>
        <p>
          Some prepositions can take <strong>both</strong> cases, depending on the meaning:
        </p>
        <DataTable
          headers={[
            'Preposition',
            'Ablative (location)',
            'Translation (place)',
            'Accusative (movement)',
            'Translation (motion)',
          ]}
          rows={[
            ['in', 'in urbe', 'in the city', 'in urbem', 'into the city'],
            ['sub', 'sub monte', 'under the mountain', 'sub montem', 'to under the mountain'],
          ]}
        />
        <p>
          By understanding how prepositions work with the ablative and accusative cases, you can clearly express both
          position and movement in Latin.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/prepositions/test">
          <button
            type="button"
            className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/prepositions/test" />
        <LessonDoneButton lessonPath="/grammar/prepositions" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/prepositions" />
    </div>
  );
}
