import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_DESCRIPTIONS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/coreDescriptionsVocab';

export default function CoreDescriptionsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Core Descriptions — All vocabulary flashcards"
      cards={CORE_DESCRIPTIONS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/core-descriptions"
      quizHref="/vocabulary/core-descriptions/test"
    />
  );
}
