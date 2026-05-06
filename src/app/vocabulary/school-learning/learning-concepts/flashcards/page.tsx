import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SCHOOL_LEARNING_CONCEPTS_CARDS } from '@/lib/quizBanks/vocabulary/schoolLearningVocab';

export default function SchoolLearningConceptsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Learning concepts — Flashcards"
      cards={SCHOOL_LEARNING_CONCEPTS_CARDS}
      backToLessonHref="/vocabulary/school-learning/learning-concepts"
      quizHref="/vocabulary/school-learning/learning-concepts/test"
    />
  );
}
