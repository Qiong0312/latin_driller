import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { CITY_PUBLIC_PLACES_CARDS } from '@/lib/quizBanks/vocabulary/cityBuildingsVocab';

export default function CityPublicPlacesFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Public places — Flashcards"
      cards={CITY_PUBLIC_PLACES_CARDS}
      backToLessonHref="/vocabulary/city-buildings/public-places"
      quizHref="/vocabulary/city-buildings/public-places/test"
    />
  );
}
