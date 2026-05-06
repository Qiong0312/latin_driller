import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CLOTHING_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/clothingVocab';

export default function ClothingCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Clothing (Vestīmenta) — Flashcards"
      cards={CLOTHING_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/clothing"
      quizHref="/vocabulary/clothing/test"
    />
  );
}
