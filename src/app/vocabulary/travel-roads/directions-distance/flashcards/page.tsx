import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TRAVEL_DIRECTIONS_DISTANCE_CARDS } from '@/lib/quizBanks/vocabulary/travelRoadsVocab';

export default function TravelDirectionsDistanceFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Directions & distance — Flashcards"
      cards={TRAVEL_DIRECTIONS_DISTANCE_CARDS}
      backToLessonHref="/vocabulary/travel-roads/directions-distance"
      quizHref="/vocabulary/travel-roads/directions-distance/test"
    />
  );
}
