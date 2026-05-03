import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SOCIETY_TRAVEL_CARDS } from '@/lib/quizBanks/vocabulary/societyRelationshipsVocab';

export default function SocietyTravelExplorationFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Travel & Exploration — Flashcards"
      cards={SOCIETY_TRAVEL_CARDS}
      backToLessonHref="/vocabulary/society-relationships/travel-exploration"
      quizHref="/vocabulary/society-relationships/travel-exploration/test"
    />
  );
}
