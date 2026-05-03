import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_ACTIONS_COMM_CARDS } from '@/lib/quizBanks/vocabulary/coreActionsVocab';

export default function CoreActionsCommunicationFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Communication — Flashcards"
      cards={CORE_ACTIONS_COMM_CARDS}
      backToLessonHref="/vocabulary/core-actions/communication"
      quizHref="/vocabulary/core-actions/communication/test"
    />
  );
}
