import { VocabularyFlashcards } from "@/components/VocabularyFlashcards";
import { withEmptyIcon, LANDSCAPE_SKY } from "@/lib/vocabulary/landscapeVocab";

const cards = withEmptyIcon(LANDSCAPE_SKY);

export default function LandscapeSkyWeatherFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Sky & weather — Flashcards"
      cards={cards}
      backToLessonHref="/vocabulary/landscape/sky-weather"
      quizHref="/vocabulary/landscape/sky-weather/test"
    />
  );
}
