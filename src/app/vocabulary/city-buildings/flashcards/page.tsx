import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CITY_BUILDINGS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/cityBuildingsVocab';

export default function CityBuildingsCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="City & Buildings (Urbs) — Flashcards"
      cards={CITY_BUILDINGS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/city-buildings"
      quizHref="/vocabulary/city-buildings/test"
    />
  );
}
