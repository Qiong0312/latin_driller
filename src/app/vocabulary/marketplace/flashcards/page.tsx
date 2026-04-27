import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { MARKETPLACE_ALL_FLASHCARDS } from "@/lib/quizBanks/vocabulary/marketplaceVocab";

export default function MarketplaceCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Mercātus (Marketplace) — Flashcards"
      cards={MARKETPLACE_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/marketplace"
      quizHref="/vocabulary/marketplace/test"
    />
  );
}
