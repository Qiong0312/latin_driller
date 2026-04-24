import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { withEmptyIcon, LANDSCAPE_ELEMENTS } from "@/lib/vocabulary/landscapeVocab";

const cards = withEmptyIcon(LANDSCAPE_ELEMENTS);

export default function LandscapeElementsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Natural elements — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/landscape/elements"
      quizHref="/vocabulary/landscape/elements/test"
    />
  );
}
