import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { BODY_PARTS_ALL_FLASHCARDS } from '@/lib/vocabulary/categoryFlashcardsData';

export default function BodyPartsAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Corpus — All vocabulary flashcards"
      cards={BODY_PARTS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/body-parts"
      quizHref="/vocabulary/body-parts/test"
    />
  );
}
