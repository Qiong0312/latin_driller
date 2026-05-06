import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CLOTHING_BASIC_CARDS } from '@/lib/quizBanks/vocabulary/clothingVocab';

export default function ClothingBasicFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Basic clothing — Flashcards"
      cards={CLOTHING_BASIC_CARDS}
      backToLessonHref="/vocabulary/clothing/basic-clothing"
      quizHref="/vocabulary/clothing/basic-clothing/test"
    />
  );
}
