import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TIME_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/timeVocab';

export default function TimeCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Time nouns (Tempus) — Flashcards"
      cards={TIME_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/time"
      quizHref="/vocabulary/time/test"
    />
  );
}
