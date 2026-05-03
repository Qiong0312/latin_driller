import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_ACTIONS_IRREGULAR_CARDS } from '@/lib/quizBanks/vocabulary/coreActionsVocab';

export default function CoreActionsIrregularFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Core Irregular Verbs — Flashcards"
      cards={CORE_ACTIONS_IRREGULAR_CARDS}
      backToLessonHref="/vocabulary/core-actions/irregular-verbs"
      quizHref="/vocabulary/core-actions/irregular-verbs/test"
    />
  );
}
