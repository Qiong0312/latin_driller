import Link from 'next/link';
import { FLASHCARD_FOOTER_LINK_CLASS } from '@/lib/flashcardFooterStyles';
import { getVocabularyCategoryAdjacent, getVocabularySubLessonAdjacent } from '@/lib/vocabularyLessonNavigation';

type VocabularyNavFooterProps =
  | { variant: 'subLesson'; lessonPath: string }
  | { variant: 'category'; categoryPath: string };

export function VocabularyNavFooter(props: VocabularyNavFooterProps) {
  const { prev, next } =
    props.variant === 'category'
      ? getVocabularyCategoryAdjacent(props.categoryPath)
      : getVocabularySubLessonAdjacent(props.lessonPath);

  const prevLabel = props.variant === 'category' ? 'Previous Category' : 'Previous Lesson';
  const nextLabel = props.variant === 'category' ? 'Next Category' : 'Next Lesson';

  return (
    <footer className="mt-10 flex w-full flex-col gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-[10rem] sm:flex-1">
        {prev != null ? (
          <Link href={prev.href} className={FLASHCARD_FOOTER_LINK_CLASS} title={prev.label}>
            ← {prevLabel}
          </Link>
        ) : null}
      </div>
      <div className="min-w-[10rem] sm:flex-1 sm:text-end">
        {next != null ? (
          <Link href={next.href} className={FLASHCARD_FOOTER_LINK_CLASS} title={next.label}>
            {nextLabel} →
          </Link>
        ) : null}
      </div>
    </footer>
  );
}
