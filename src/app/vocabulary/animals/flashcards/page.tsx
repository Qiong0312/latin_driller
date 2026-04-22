import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { ANIMALS_ALL_FLASHCARDS } from '@/lib/vocabulary/categoryFlashcardsData';

export default function AnimalsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Animalia — All vocabulary flashcards"
      cards={ANIMALS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/animals"
      quizHref="/vocabulary/animals/test"
    />
  );
}
