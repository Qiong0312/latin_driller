import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CORE_DESCRIPTIONS_SIZE_CARDS } from '@/lib/quizBanks/vocabulary/coreDescriptionsVocab';

export default function CoreDescriptionsSizeFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Size & Quantity (Magnitūdō) — Flashcards"
      cards={CORE_DESCRIPTIONS_SIZE_CARDS}
      backToLessonHref="/vocabulary/core-descriptions/size-quantity"
      quizHref="/vocabulary/core-descriptions/size-quantity/test"
    />
  );
}
