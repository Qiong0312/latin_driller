import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_ACTIONS_THINK_CARDS } from '@/lib/quizBanks/vocabulary/coreActionsVocab';

export default function CoreActionsThinkingFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Thinking & Knowing — Flashcards"
      cards={CORE_ACTIONS_THINK_CARDS}
      backToLessonHref="/vocabulary/core-actions/thinking-knowing"
      quizHref="/vocabulary/core-actions/thinking-knowing/test"
    />
  );
}
