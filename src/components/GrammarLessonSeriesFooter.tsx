import Link from "next/link";
import { getGrammarLessonAdjacent } from "@/lib/grammarLessonAdjacent";

const footerLinkClass =
  "inline-block text-sm text-zinc-600 underline-offset-4 transition hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200";

type GrammarLessonSeriesFooterProps = {
  /** Same path as LessonDoneButton lessonPath */
  lessonPath: string;
};

export function GrammarLessonSeriesFooter({ lessonPath }: GrammarLessonSeriesFooterProps) {
  const { prev, next } = getGrammarLessonAdjacent(lessonPath);

  return (
    <footer className="mt-10 flex w-full flex-col gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-[10rem] sm:flex-1">
        {prev != null ? (
          <Link href={prev.href} className={footerLinkClass} title={prev.label}>
            ← Previous lesson
          </Link>
        ) : null}
      </div>
      <div className="min-w-[10rem] sm:flex-1 sm:text-end">
        {next != null ? (
          <Link href={next.href} className={footerLinkClass} title={next.label}>
            Next lesson →
          </Link>
        ) : null}
      </div>
    </footer>
  );
}
