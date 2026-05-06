import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TIME_BASIC_UNITS_CARDS } from '@/lib/quizBanks/vocabulary/timeVocab';

export default function TimeBasicUnitsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Basic time units — Flashcards"
      cards={TIME_BASIC_UNITS_CARDS}
      backToLessonHref="/vocabulary/time/basic-units"
      quizHref="/vocabulary/time/basic-units/test"
    />
  );
}
