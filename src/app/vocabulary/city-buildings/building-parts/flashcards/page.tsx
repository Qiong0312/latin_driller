import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CITY_BUILDING_PARTS_CARDS } from '@/lib/quizBanks/vocabulary/cityBuildingsVocab';

export default function CityBuildingPartsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Parts of buildings — Flashcards"
      cards={CITY_BUILDING_PARTS_CARDS}
      backToLessonHref="/vocabulary/city-buildings/building-parts"
      quizHref="/vocabulary/city-buildings/building-parts/test"
    />
  );
}
