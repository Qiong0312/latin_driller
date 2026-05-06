import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TRAVEL_ENTRY_PASSAGE_CARDS } from '@/lib/quizBanks/vocabulary/travelRoadsVocab';

export default function TravelEntryPassageFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Entry & passage — Flashcards"
      cards={TRAVEL_ENTRY_PASSAGE_CARDS}
      backToLessonHref="/vocabulary/travel-roads/entry-passage"
      quizHref="/vocabulary/travel-roads/entry-passage/test"
    />
  );
}
