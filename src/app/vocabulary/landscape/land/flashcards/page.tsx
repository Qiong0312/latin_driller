import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { withEmptyIcon, LANDSCAPE_LAND } from "@/lib/vocabulary/landscapeVocab";

const cards = withEmptyIcon(LANDSCAPE_LAND);

export default function LandscapeLandFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Land & world — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/landscape/land"
      quizHref="/vocabulary/landscape/land/test"
    />
  );
}
