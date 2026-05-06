import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { SCHOOL_LEARNING_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/schoolLearningCategoryQuestionBank';

export default function SchoolLearningCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="School & Learning (Schola et Doctrīna) — All lessons quiz"
      resultsHeading="School & Learning — Quiz results"
      backToCategoryHref="/vocabulary/school-learning"
      backToCategoryLabel="Back to School & Learning"
      questions={SCHOOL_LEARNING_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
