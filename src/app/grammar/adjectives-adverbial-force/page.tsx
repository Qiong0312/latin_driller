import Link from "next/link";
import { LessonDoneButton } from "@/components/LessonDoneButton";
import { LessonQuizMedalCard } from "@/components/LessonQuizMedalCard";
import { GrammarLessonSeriesFooter } from "@/components/GrammarLessonSeriesFooter";

export default function AdjectivesAdverbialForcePage() {
  return (
    <div className="app-panel">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">Adjectives with adverbial force</h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          In Latin, adjectives usually describe nouns. For example, in <em>puer īrātus</em>, the adjective{' '}
          <em>īrātus</em> (&quot;angry&quot;) tells us about the boy (<em>puer</em>). However, an adjective agreeing
          with the subject or object can also qualify the action of the verb, so it has the force of an adverb.
        </p>
        <p>
          When an adjective has adverbial force, it tells us how someone performs an action. In English we often use
          adverbs ending in &quot;-ly,&quot; but Latin often uses an agreeing adjective instead.
        </p>
        <p>
          Usually the adjective still primarily describes the noun, but it can also suggest manner. So{' '}
          <em>puer īrātus clāmat</em> can mean both &quot;the angry boy shouts&quot; and &quot;the boy shouts
          angrily.&quot;
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Examples</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <em>puer īrātus clāmat</em> — &quot;the angry boy shouts / the boy shouts angrily&quot;
          </li>
          <li>
            <em>puella laeta cantat</em> — &quot;the happy girl sings / the girl sings happily&quot;
          </li>
          <li>
            <em>vir fessus ambulat</em> — &quot;the tired man walks / the man walks tiredly&quot;
          </li>
          <li>
            <em>mīlitēs fortēs pugnant</em> — &quot;the brave soldiers fight / the soldiers fight bravely&quot;
          </li>
        </ul>

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Remember:</strong> the adjective still agrees with the noun in gender, number, and case, while also
          helping describe how the action is done.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/adjectives-adverbial-force/test">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-sky-200 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/adjectives-adverbial-force/test" />
        <LessonDoneButton lessonPath="/grammar/adjectives-adverbial-force" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/adjectives-adverbial-force" />
    </div>
  );
}
