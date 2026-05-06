import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CLOTHING_FOOTWEAR_CARDS } from '@/lib/quizBanks/vocabulary/clothingVocab';

export default function ClothingFootwearFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Footwear — Flashcards"
      cards={CLOTHING_FOOTWEAR_CARDS}
      backToLessonHref="/vocabulary/clothing/footwear"
      quizHref="/vocabulary/clothing/footwear/test"
    />
  );
}
