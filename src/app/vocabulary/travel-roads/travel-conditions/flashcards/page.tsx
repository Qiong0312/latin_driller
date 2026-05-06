import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TRAVEL_CONDITIONS_CARDS } from '@/lib/quizBanks/vocabulary/travelRoadsVocab';

export default function TravelConditionsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Travel conditions — Flashcards"
      cards={TRAVEL_CONDITIONS_CARDS}
      backToLessonHref="/vocabulary/travel-roads/travel-conditions"
      quizHref="/vocabulary/travel-roads/travel-conditions/test"
    />
  );
}
