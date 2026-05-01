import Link from "next/link";
import { FLASHCARD_FOOTER_LINK_CLASS } from "@/lib/flashcardFooterStyles";
import { getGrammarLessonAdjacent } from "@/lib/grammarLessonAdjacent";

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
          <Link href={prev.href} className={FLASHCARD_FOOTER_LINK_CLASS} title={prev.label}>
            ← Previous Lesson
          </Link>
        ) : null}
      </div>
      <div className="min-w-[10rem] sm:flex-1 sm:text-end">
        {next != null ? (
          <Link href={next.href} className={FLASHCARD_FOOTER_LINK_CLASS} title={next.label}>
            Next Lesson →
          </Link>
        ) : null}
      </div>
    </footer>
  );
}
