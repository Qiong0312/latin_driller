import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { withEmptyIcon, LANDSCAPE_MOUNTAINS } from "@/lib/quizBanks/vocabulary/landscapeVocab";

const cards = withEmptyIcon(LANDSCAPE_MOUNTAINS);

export default function LandscapeMountainsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Mountains & landforms — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/landscape/mountains"
      quizHref="/vocabulary/landscape/mountains/test"
    />
  );
}
