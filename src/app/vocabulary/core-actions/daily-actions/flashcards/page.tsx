import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_ACTIONS_DAILY_CARDS } from '@/lib/quizBanks/vocabulary/coreActionsVocab';

export default function CoreActionsDailyFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Daily Actions — Flashcards"
      cards={CORE_ACTIONS_DAILY_CARDS}
      backToLessonHref="/vocabulary/core-actions/daily-actions"
      quizHref="/vocabulary/core-actions/daily-actions/test"
    />
  );
}
