import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { EXPANDED_DESCRIPTIONS_SHAPE_CARDS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

export default function ExpandedDescriptionsShapeFormFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Shape & Form (Fōrma) — Flashcards"
      cards={EXPANDED_DESCRIPTIONS_SHAPE_CARDS}
      backToLessonHref="/vocabulary/expanded-descriptions/shape-form"
      quizHref="/vocabulary/expanded-descriptions/shape-form/test"
    />
  );
}
