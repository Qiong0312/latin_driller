import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SCHOOL_LEARNING_ALL_FLASHCARDS } from '@/lib/quizBanks/vocabulary/schoolLearningVocab';

export default function SchoolLearningCategoryFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="School & Learning (Schola et Doctrīna) — Flashcards"
      cards={SCHOOL_LEARNING_ALL_FLASHCARDS}
      backToLessonHref="/vocabulary/school-learning"
      quizHref="/vocabulary/school-learning/test"
    />
  );
}
