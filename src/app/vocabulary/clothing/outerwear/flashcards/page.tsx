import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CLOTHING_OUTERWEAR_CARDS } from '@/lib/quizBanks/vocabulary/clothingVocab';

export default function ClothingOuterwearFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Outerwear — Flashcards"
      cards={CLOTHING_OUTERWEAR_CARDS}
      backToLessonHref="/vocabulary/clothing/outerwear"
      quizHref="/vocabulary/clothing/outerwear/test"
    />
  );
}
