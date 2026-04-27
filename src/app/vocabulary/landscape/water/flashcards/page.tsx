import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { withEmptyIcon, LANDSCAPE_WATER } from "@/lib/quizBanks/vocabulary/landscapeVocab";

const cards = withEmptyIcon(LANDSCAPE_WATER);

export default function LandscapeWaterFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Water — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/landscape/water"
      quizHref="/vocabulary/landscape/water/test"
    />
  );
}
