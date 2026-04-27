import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { MARKETPLACE_MONEY_TRADE_CARDS } from "@/lib/vocabulary/marketplaceVocab";

export default function MarketplaceMoneyTradeFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Money & trade — Flashcards"
      cards={MARKETPLACE_MONEY_TRADE_CARDS}
      backToLessonHref="/vocabulary/marketplace/money-trade"
      quizHref="/vocabulary/marketplace/money-trade/test"
    />
  );
}
