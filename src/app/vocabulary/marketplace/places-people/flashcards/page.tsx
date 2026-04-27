import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { MARKETPLACE_PLACES_PEOPLE_CARDS } from "@/lib/quizBanks/vocabulary/marketplaceVocab";

export default function MarketplacePlacesPeopleFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Places & people — Flashcards"
      cards={MARKETPLACE_PLACES_PEOPLE_CARDS}
      backToLessonHref="/vocabulary/marketplace/places-people"
      quizHref="/vocabulary/marketplace/places-people/test"
    />
  );
}
