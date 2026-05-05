import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { EXPANDED_DESCRIPTIONS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsVocab';

export default function ExpandedDescriptionsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Expanded Description — All vocabulary flashcards"
      cards={EXPANDED_DESCRIPTIONS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/expanded-descriptions"
      quizHref="/vocabulary/expanded-descriptions/test"
    />
  );
}
