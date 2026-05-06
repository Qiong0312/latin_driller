import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TIME_MOMENTS_PERIODS_CARDS } from '@/lib/quizBanks/vocabulary/timeVocab';

export default function TimeMomentsPeriodsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Specific moments & periods — Flashcards"
      cards={TIME_MOMENTS_PERIODS_CARDS}
      backToLessonHref="/vocabulary/time/moments-periods"
      quizHref="/vocabulary/time/moments-periods/test"
    />
  );
}
