import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { EXPANDED_DESCRIPTIONS_POSITION_CARDS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

export default function ExpandedDescriptionsPositionDirectionFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Position & Direction (Locus) — Flashcards"
      cards={EXPANDED_DESCRIPTIONS_POSITION_CARDS}
      backToLessonHref="/vocabulary/expanded-descriptions/position-direction"
      quizHref="/vocabulary/expanded-descriptions/position-direction/test"
    />
  );
}
