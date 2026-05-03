import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { ENV_INTERACTION_MILITARY_CARDS } from '@/lib/quizBanks/vocabulary/environmentInteractionVocab';

export default function EnvironmentInteractionMilitaryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Military & Government — Flashcards"
      cards={ENV_INTERACTION_MILITARY_CARDS}
      backToLessonHref="/vocabulary/environment-interaction/military-government"
      quizHref="/vocabulary/environment-interaction/military-government/test"
    />
  );
}
