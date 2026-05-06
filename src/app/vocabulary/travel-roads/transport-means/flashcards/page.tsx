import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TRAVEL_TRANSPORT_MEANS_CARDS } from '@/lib/quizBanks/vocabulary/travelRoadsVocab';

export default function TravelTransportMeansFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Transport & travel means — Flashcards"
      cards={TRAVEL_TRANSPORT_MEANS_CARDS}
      backToLessonHref="/vocabulary/travel-roads/transport-means"
      quizHref="/vocabulary/travel-roads/transport-means/test"
    />
  );
}
