import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { MARKETPLACE_CARRYING_CARDS } from "@/lib/quizBanks/vocabulary/marketplaceVocab";

export default function MarketplaceCarryingFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Carrying & personal items — Flashcards"
      cards={MARKETPLACE_CARRYING_CARDS}
      backToLessonHref="/vocabulary/marketplace/carrying"
      quizHref="/vocabulary/marketplace/carrying/test"
    />
  );
}
