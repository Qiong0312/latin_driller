import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { MARKETPLACE_EQUIPMENT_CARDS } from "@/lib/vocabulary/marketplaceVocab";

export default function MarketplaceEquipmentFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Equipment & setting — Flashcards"
      cards={MARKETPLACE_EQUIPMENT_CARDS}
      backToLessonHref="/vocabulary/marketplace/equipment"
      quizHref="/vocabulary/marketplace/equipment/test"
    />
  );
}
