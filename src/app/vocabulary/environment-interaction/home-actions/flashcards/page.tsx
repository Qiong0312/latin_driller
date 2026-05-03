import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { ENV_INTERACTION_HOME_CARDS } from '@/lib/quizBanks/vocabulary/environmentInteractionVocab';

export default function EnvironmentInteractionHomeActionsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Home Actions — Flashcards"
      cards={ENV_INTERACTION_HOME_CARDS}
      backToLessonHref="/vocabulary/environment-interaction/home-actions"
      quizHref="/vocabulary/environment-interaction/home-actions/test"
    />
  );
}
