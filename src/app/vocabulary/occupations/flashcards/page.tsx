import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { OCCUPATIONS_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/occupationsVocab';

export default function OccupationsCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Officia (Occupations) — Flashcards"
      cards={OCCUPATIONS_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/occupations"
      quizHref="/vocabulary/occupations/test"
    />
  );
}
