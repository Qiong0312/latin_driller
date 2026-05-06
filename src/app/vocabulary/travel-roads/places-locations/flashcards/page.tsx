import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TRAVEL_PLACES_LOCATIONS_CARDS } from '@/lib/quizBanks/vocabulary/travelRoadsVocab';

export default function TravelPlacesLocationsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Places & locations — Flashcards"
      cards={TRAVEL_PLACES_LOCATIONS_CARDS}
      backToLessonHref="/vocabulary/travel-roads/places-locations"
      quizHref="/vocabulary/travel-roads/places-locations/test"
    />
  );
}
