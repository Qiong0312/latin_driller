import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { OCCUPATIONS_ARTS_ENTERTAINMENT_CARDS } from '@/lib/quizBanks/vocabulary/occupationsVocab';

export default function OccupationsArtsEntertainmentFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Arts & entertainment — Flashcards"
      cards={OCCUPATIONS_ARTS_ENTERTAINMENT_CARDS}
      backToLessonHref="/vocabulary/occupations/arts-entertainment"
      quizHref="/vocabulary/occupations/arts-entertainment/test"
    />
  );
}
