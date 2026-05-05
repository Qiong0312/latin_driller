import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_DESCRIPTIONS_CONDITION_CARDS } from '@/lib/quizBanks/vocabulary/coreDescriptionsVocab';

export default function CoreDescriptionsConditionFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Condition & State (Status) — Flashcards"
      cards={CORE_DESCRIPTIONS_CONDITION_CARDS}
      backToLessonHref="/vocabulary/core-descriptions/condition-state"
      quizHref="/vocabulary/core-descriptions/condition-state/test"
    />
  );
}
