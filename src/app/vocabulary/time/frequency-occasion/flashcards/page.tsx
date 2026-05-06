import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { TIME_FREQUENCY_CARDS } from '@/lib/quizBanks/vocabulary/timeVocab';

export default function TimeFrequencyOccasionFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Frequency & occasion — Flashcards"
      cards={TIME_FREQUENCY_CARDS}
      backToLessonHref="/vocabulary/time/frequency-occasion"
      quizHref="/vocabulary/time/frequency-occasion/test"
    />
  );
}
