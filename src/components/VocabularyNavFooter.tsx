import Link from 'next/link';
import { FLASHCARD_FOOTER_DUAL_ROW_LAYOUT, FLASHCARD_FOOTER_LINK_PAIR_CLASS } from '@/lib/flashcardFooterStyles';
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
    <footer
      className={`mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800 ${FLASHCARD_FOOTER_DUAL_ROW_LAYOUT}`}
    >
      <div className="min-w-0 flex-1">
        {prev != null ? (
          <Link href={prev.href} className={FLASHCARD_FOOTER_LINK_PAIR_CLASS} title={prev.label}>
            ← {prevLabel}
          </Link>
        ) : null}
      </div>
      <div className="min-w-0 flex-1 text-end">
        {next != null ? (
          <Link href={next.href} className={FLASHCARD_FOOTER_LINK_PAIR_CLASS} title={next.label}>
            {nextLabel} →
          </Link>
        ) : null}
      </div>
    </footer>
  );
}
