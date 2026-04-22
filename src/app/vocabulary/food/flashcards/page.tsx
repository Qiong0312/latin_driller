import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { FOOD_ALL_FLASHCARDS } from '@/lib/vocabulary/categoryFlashcardsData';

export default function FoodAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Cibus — All vocabulary flashcards"
      cards={FOOD_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/food"
      quizHref="/vocabulary/food/test"
    />
  );
}
