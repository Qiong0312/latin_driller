import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TRAVEL_ROADS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/travelRoadsVocab';

export default function TravelRoadsCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Travel & Roads (Iter) — Flashcards"
      cards={TRAVEL_ROADS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/travel-roads"
      quizHref="/vocabulary/travel-roads/test"
    />
  );
}
