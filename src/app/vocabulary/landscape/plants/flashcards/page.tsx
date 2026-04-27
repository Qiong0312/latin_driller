import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { withEmptyIcon, LANDSCAPE_PLANTS } from "@/lib/quizBanks/vocabulary/landscapeVocab";

const cards = withEmptyIcon(LANDSCAPE_PLANTS);

export default function LandscapePlantsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Plants & nature — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/landscape/plants"
      quizHref="/vocabulary/landscape/plants/test"
    />
  );
}
