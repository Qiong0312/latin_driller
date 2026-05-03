import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { ENVIRONMENT_INTERACTION_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/environmentInteractionVocab';

export default function EnvironmentInteractionAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Environment & Interaction — All vocabulary flashcards"
      cards={ENVIRONMENT_INTERACTION_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/environment-interaction"
      quizHref="/vocabulary/environment-interaction/test"
    />
  );
}
