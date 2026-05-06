import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TIME_PARTS_OF_DAY_CARDS } from '@/lib/quizBanks/vocabulary/timeVocab';

export default function TimePartsOfDayFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Parts of the day — Flashcards"
      cards={TIME_PARTS_OF_DAY_CARDS}
      backToLessonHref="/vocabulary/time/parts-of-day"
      quizHref="/vocabulary/time/parts-of-day/test"
    />
  );
}
