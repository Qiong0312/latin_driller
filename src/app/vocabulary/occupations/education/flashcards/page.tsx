import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { OCCUPATIONS_EDUCATION_CARDS } from '@/lib/quizBanks/vocabulary/occupationsVocab';

export default function OccupationsEducationFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Education & knowledge — Flashcards"
      cards={OCCUPATIONS_EDUCATION_CARDS}
      backToLessonHref="/vocabulary/occupations/education"
      quizHref="/vocabulary/occupations/education/test"
    />
  );
}
