import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { DEPONENT_MOVEMENT_CARDS } from '@/lib/quizBanks/vocabulary/deponentVerbsVocab';

export default function DeponentMovementActionFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Movement & Action — Flashcards"
      cards={DEPONENT_MOVEMENT_CARDS}
      backToLessonHref="/vocabulary/deponent-verbs/movement-action"
      quizHref="/vocabulary/deponent-verbs/movement-action/test"
    />
  );
}
