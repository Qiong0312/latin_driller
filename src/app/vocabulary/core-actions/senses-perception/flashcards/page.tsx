import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_ACTIONS_SENS_CARDS } from '@/lib/quizBanks/vocabulary/coreActionsVocab';

export default function CoreActionsSensesFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Senses & Perception — Flashcards"
      cards={CORE_ACTIONS_SENS_CARDS}
      backToLessonHref="/vocabulary/core-actions/senses-perception"
      quizHref="/vocabulary/core-actions/senses-perception/test"
    />
  );
}
