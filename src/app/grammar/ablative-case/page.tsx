import Link from 'next/link';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';
import { GrammarLessonSeriesFooter } from '@/components/GrammarLessonSeriesFooter';

export default function AblativeCasePage() {
  return (
    <div className="app-panel">
      <h1 className="mb-8 text-center text-4xl font-bold text-black dark:text-zinc-50">Ablative Case</h1>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          In English, we often convey relationships or contexts using phrases after words like &quot;by&quot;,
          &quot;with&quot;, &quot;in&quot;, or &quot;from&quot;. For instance, &quot;He defended himself with
          courage&quot; or &quot;She is famous in our town&quot;. These phrases provide additional information about
          the action or situation.
        </p>
        <p>
          In Latin, the <strong>ablative case</strong>
          {' '}often captures these types of relationships. It can describe the means, manner, place, or agent related to
          the action.
        </p>
        <p>
          The ablative is used both <strong>with</strong>
          {' '}prepositions and <strong>without</strong>
          {' '}them. Latin often omits words like &quot;with&quot; or &quot;by&quot; when the ablative ending itself
          already shows the relationship, especially for means or instruments. Clearer relationships such as place,
          companionship, or movement often use prepositions like <em>in</em>, <em>cum</em>, <em>sub</em>, or{' '}
          <em>sine</em>.
        </p>
        <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
          Examples without{' '}prepositions
        </h2>
        <ul className="list-inside list-disc space-y-3 pl-4">
          <li>
            <strong>
              <em>gladiō</em> pugnō
            </strong>
            : &quot;I fight with a sword.&quot; Here <em>gladiō</em> (note the ending <em>-ō</em>) is ablative,
            denoting the instrument used in the action.
          </li>
          <li>
            <strong>
              <em>aquā</em> lavō
            </strong>
            : &quot;I wash with water.&quot; <em>aquā</em> (ending <em>-ā</em>) is ablative, showing the means used for
            washing.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
          Examples with{' '}prepositions
        </h2>
        <ul className="list-inside list-disc space-y-3 pl-4">
          <li>
            <strong>
              <em>in</em> (in, on)
            </strong>
            : <em>in urbe</em> — &quot;in the city.&quot; <em>urbe</em> (ending <em>-e</em>) is ablative.
          </li>
          <li>
            <strong>
              <em>sub</em> (under, below)
            </strong>
            : <em>sub monte</em> — &quot;under the mountain.&quot; <em>monte</em> (ending <em>-e</em>) is ablative.
          </li>
          <li>
            <strong>
              <em>sine</em> (without)
            </strong>
            : <em>sine dubiō</em> — &quot;without doubt.&quot; <em>dubiō</em> (ending <em>-ō</em>) is ablative.
          </li>
          <li>
            <strong>
              <em>cum</em> (with)
            </strong>
            : <em>cum amīcō</em> — &quot;with a friend.&quot; <em>amīcō</em> (ending <em>-ō</em>) is ablative.
          </li>
        </ul>
        <p>
          By understanding the ablative and its various forms, you can convey a wide range of contexts and relationships
          in Latin.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/ablative-case/test">
          <button
            type="button"
            className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/ablative-case/test" />
        <LessonDoneButton lessonPath="/grammar/ablative-case" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/ablative-case" />
    </div>
  );
}
