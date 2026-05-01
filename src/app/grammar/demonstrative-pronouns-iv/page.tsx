import Link from 'next/link';
import { GrammarLessonSeriesFooter } from '@/components/GrammarLessonSeriesFooter';
import { LessonDoneButton } from '@/components/LessonDoneButton';
import { LessonQuizMedalCard } from '@/components/LessonQuizMedalCard';

export default function DemonstrativePronounsIVLesson() {
  return (
    <div className="app-panel">
      <h1 className="mb-8 text-center text-4xl font-bold text-black dark:text-zinc-50">
        Demonstrative pronouns IV
      </h1>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        <p>
          Other demonstratives are declined along <strong>very similar patterns</strong> to the ones you have already
          studied—such as <span lang="la">is, ea, id</span>; <span lang="la">hic, haec, hoc</span>; and{' '}
          <span lang="la">ille, illa, illud</span>. They still agree with what they refer to in{' '}
          <strong>gender</strong>, <strong>number</strong>, and <strong>case</strong>.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          <span lang="la">Iste, ista, istud</span> — &quot;that (of yours)&quot;
        </h2>
        <p>Often used to indicate something associated with the <strong>listener</strong>, sometimes with a negative tone.</p>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Example</h3>
        <p className="text-base">
          <span lang="la">Iste liber tuus est.</span>
          <br />
          <span className="text-zinc-600 dark:text-zinc-400">That book is yours.</span>
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          <span lang="la">Ipse, ipsa, ipsum</span> — &quot;himself, herself, itself&quot; / &quot;the very&quot;
        </h2>
        <p>Used for <strong>emphasis</strong>.</p>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Examples</h3>
        <ul className="list-disc space-y-3 pl-6 text-base">
          <li>
            <span lang="la">Ipse Mārcus venit.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">Marcus himself came.</span>
          </li>
          <li>
            <span lang="la">Ipsa rēgīna adest.</span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">The queen herself is here.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          <span lang="la">Idem, eadem, idem</span> — &quot;the same&quot;
        </h2>
        <p>
          Combines <span lang="la">is, ea, id</span> with <span lang="la">-(d)em</span> to express sameness (&quot;the
          same&quot;).
        </p>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Example</h3>
        <p className="text-base">
          <span lang="la">Idem librum legimus.</span>
          <br />
          <span className="text-zinc-600 dark:text-zinc-400">We are reading the same book.</span>
        </p>

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          <strong>Note:</strong> full paradigms of <span lang="la">iste</span>, <span lang="la">ipse</span>, and{' '}
          <span lang="la">idem</span> behave like extensions of patterns you already know; when in doubt, start from
          gender and number, then fit the case required by syntax.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <Link href="/grammar/demonstrative-pronouns-iv/test">
          <button
            type="button"
            className="rounded-lg bg-sky-200 px-6 py-3 text-sky-950 shadow-sm transition hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700"
          >
            Quiz
          </button>
        </Link>
        <LessonQuizMedalCard quizPath="/grammar/demonstrative-pronouns-iv/test" />
        <LessonDoneButton lessonPath="/grammar/demonstrative-pronouns-iv" />
      </div>
      <GrammarLessonSeriesFooter lessonPath="/grammar/demonstrative-pronouns-iv" />
    </div>
  );
}
