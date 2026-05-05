import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { EXPANDED_DESCRIPTIONS_CONDITION_CARDS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

export default function ExpandedDescriptionsConditionQualityFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Condition & Quality (Qualitās) — Flashcards"
      cards={EXPANDED_DESCRIPTIONS_CONDITION_CARDS}
      backToLessonHref="/vocabulary/expanded-descriptions/condition-quality"
      quizHref="/vocabulary/expanded-descriptions/condition-quality/test"
    />
  );
}
