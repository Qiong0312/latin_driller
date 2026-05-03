import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { ENV_INTERACTION_MARKETPLACE_CARDS } from '@/lib/quizBanks/vocabulary/environmentInteractionVocab';

export default function EnvironmentInteractionMarketplaceFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Marketplace & Money — Flashcards"
      cards={ENV_INTERACTION_MARKETPLACE_CARDS}
      backToLessonHref="/vocabulary/environment-interaction/marketplace-money"
      quizHref="/vocabulary/environment-interaction/marketplace-money/test"
    />
  );
}
