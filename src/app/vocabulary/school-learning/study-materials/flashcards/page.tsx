import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { SCHOOL_STUDY_MATERIALS_CARDS } from '@/lib/quizBanks/vocabulary/schoolLearningVocab';

export default function SchoolStudyMaterialsFlashcardsPage() {
  return (
    <VocabularyFlashcards
      title="Study materials — Flashcards"
      cards={SCHOOL_STUDY_MATERIALS_CARDS}
      backToLessonHref="/vocabulary/school-learning/study-materials"
      quizHref="/vocabulary/school-learning/study-materials/test"
    />
  );
}
