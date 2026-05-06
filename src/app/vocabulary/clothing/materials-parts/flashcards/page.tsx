import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CLOTHING_MATERIALS_PARTS_CARDS } from '@/lib/quizBanks/vocabulary/clothingVocab';

export default function ClothingMaterialsPartsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Materials & parts — Flashcards"
      cards={CLOTHING_MATERIALS_PARTS_CARDS}
      backToLessonHref="/vocabulary/clothing/materials-parts"
      quizHref="/vocabulary/clothing/materials-parts/test"
    />
  );
}
