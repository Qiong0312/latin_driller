import Link from "next/link";
import { FLASHCARD_FOOTER_DUAL_ROW_LAYOUT, FLASHCARD_FOOTER_LINK_PAIR_CLASS } from "@/lib/flashcardFooterStyles";
import { getGrammarLessonAdjacent } from "@/lib/grammarLessonAdjacent";

type GrammarLessonSeriesFooterProps = {
  /** Same path as LessonDoneButton lessonPath */
  lessonPath: string;
};

export function GrammarLessonSeriesFooter({ lessonPath }: GrammarLessonSeriesFooterProps) {
  const { prev, next } = getGrammarLessonAdjacent(lessonPath);

  return (
    <footer
      className={`mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800 ${FLASHCARD_FOOTER_DUAL_ROW_LAYOUT}`}
    >
      <div className="min-w-0 flex-1">
        {prev != null ? (
          <Link href={prev.href} className={FLASHCARD_FOOTER_LINK_PAIR_CLASS} title={prev.label}>
            ← Previous Lesson
          </Link>
        ) : null}
      </div>
      <div className="min-w-0 flex-1 text-end">
        {next != null ? (
          <Link href={next.href} className={FLASHCARD_FOOTER_LINK_PAIR_CLASS} title={next.label}>
            Next Lesson →
          </Link>
        ) : null}
      </div>
    </footer>
  );
}
