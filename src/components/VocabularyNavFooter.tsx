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

  const prevTitle =
    props.variant === 'subLesson' && prev != null && 'kind' in prev
      ? prev.kind === 'lesson'
        ? prev.label
        : `Back to ${prev.label}`
      : props.variant === 'category' && prev != null
        ? prev.label
        : '';

  const nextTitle =
    props.variant === 'subLesson' && next != null && 'kind' in next
      ? next.kind === 'lesson'
        ? next.label
        : `Back to ${next.label}`
      : props.variant === 'category' && next != null
        ? next.label
        : '';

  const prevChildren =
    props.variant === 'subLesson' && prev != null && 'kind' in prev ? (
      prev.kind === 'categoryHub' ? (
        <>← Back to {prev.label}</>
      ) : (
        <>← {prevLabel}</>
      )
    ) : prev != null ? (
      <>
        ← {prevLabel}
      </>
    ) : null;

  const nextChildren =
    props.variant === 'subLesson' && next != null && 'kind' in next ? (
      next.kind === 'categoryHub' ? (
        <>Back to {next.label} →</>
      ) : (
        <>
          {nextLabel} →
        </>
      )
    ) : next != null ? (
      <>
        {nextLabel} →
      </>
    ) : null;

  return (
    <footer
      className={`mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800 ${FLASHCARD_FOOTER_DUAL_ROW_LAYOUT}`}
    >
      <div className="min-w-0 flex-1">
        {prev != null ? (
          <Link href={prev.href} className={FLASHCARD_FOOTER_LINK_PAIR_CLASS} title={prevTitle}>
            {prevChildren}
          </Link>
        ) : null}
      </div>
      <div className="min-w-0 flex-1 text-end">
        {next != null ? (
          <Link href={next.href} className={FLASHCARD_FOOTER_LINK_PAIR_CLASS} title={nextTitle}>
            {nextChildren}
          </Link>
        ) : null}
      </div>
    </footer>
  );
}
