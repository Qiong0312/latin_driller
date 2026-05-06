import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CITY_BUILDINGS_STRUCTURES_CARDS } from '@/lib/quizBanks/vocabulary/cityBuildingsVocab';

export default function CityBuildingsStructuresFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Buildings & structures — Flashcards"
      cards={CITY_BUILDINGS_STRUCTURES_CARDS}
      backToLessonHref="/vocabulary/city-buildings/buildings-structures"
      quizHref="/vocabulary/city-buildings/buildings-structures/test"
    />
  );
}
