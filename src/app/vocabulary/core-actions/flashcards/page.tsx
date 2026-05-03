import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_ACTIONS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/coreActionsVocab';

export default function CoreActionsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Core Actions — All vocabulary flashcards"
      cards={CORE_ACTIONS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/core-actions"
      quizHref="/vocabulary/core-actions/test"
    />
  );
}
