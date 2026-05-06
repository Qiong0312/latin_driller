import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CLOTHING_ACCESSORIES_CARDS } from '@/lib/quizBanks/vocabulary/clothingVocab';

export default function ClothingAccessoriesFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Accessories — Flashcards"
      cards={CLOTHING_ACCESSORIES_CARDS}
      backToLessonHref="/vocabulary/clothing/accessories"
      quizHref="/vocabulary/clothing/accessories/test"
    />
  );
}
