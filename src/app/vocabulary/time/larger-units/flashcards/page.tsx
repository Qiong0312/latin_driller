import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TIME_LARGER_UNITS_CARDS } from '@/lib/quizBanks/vocabulary/timeVocab';

export default function TimeLargerUnitsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Larger time units — Flashcards"
      cards={TIME_LARGER_UNITS_CARDS}
      backToLessonHref="/vocabulary/time/larger-units"
      quizHref="/vocabulary/time/larger-units/test"
    />
  );
}
