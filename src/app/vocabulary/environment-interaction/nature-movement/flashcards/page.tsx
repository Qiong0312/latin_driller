import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { ENV_INTERACTION_NATURE_CARDS } from '@/lib/quizBanks/vocabulary/environmentInteractionVocab';

export default function EnvironmentInteractionNatureFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Nature & Movement — Flashcards"
      cards={ENV_INTERACTION_NATURE_CARDS}
      backToLessonHref="/vocabulary/environment-interaction/nature-movement"
      quizHref="/vocabulary/environment-interaction/nature-movement/test"
    />
  );
}
