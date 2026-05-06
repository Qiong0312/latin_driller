import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TRAVEL_JOURNEY_MOVEMENT_CARDS } from '@/lib/quizBanks/vocabulary/travelRoadsVocab';

export default function TravelJourneyMovementFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Journey & movement — Flashcards"
      cards={TRAVEL_JOURNEY_MOVEMENT_CARDS}
      backToLessonHref="/vocabulary/travel-roads/journey-movement"
      quizHref="/vocabulary/travel-roads/journey-movement/test"
    />
  );
}
