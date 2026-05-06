import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SCHOOL_ENVIRONMENT_CARDS } from '@/lib/quizBanks/vocabulary/schoolLearningVocab';

export default function SchoolEnvironmentFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="School environment — Flashcards"
      cards={SCHOOL_ENVIRONMENT_CARDS}
      backToLessonHref="/vocabulary/school-learning/school-environment"
      quizHref="/vocabulary/school-learning/school-environment/test"
    />
  );
}
