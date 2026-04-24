import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { LANDSCAPE_ALL_FLASHCARDS } from "@/lib/vocabulary/landscapeVocab";

export default function LandscapeAllFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Terra (Land & Landscape) — All vocabulary flashcards"
      cards={LANDSCAPE_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/landscape"
      quizHref="/vocabulary/landscape/test"
    />
  );
}
