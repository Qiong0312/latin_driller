import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { ROOMS_ALL_FLASHCARDS } from '@/lib/vocabulary/categoryFlashcardsData';

export default function RoomsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Domus — All vocabulary flashcards"
      cards={ROOMS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/rooms"
      quizHref="/vocabulary/rooms/test"
    />
  );
}
