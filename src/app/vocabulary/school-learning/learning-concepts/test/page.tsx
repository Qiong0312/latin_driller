import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SCHOOL_LEARNING_CONCEPTS_QUIZ } from '@/lib/quizBanks/vocabulary/schoolLearningCategoryQuestionBank';

export default function SchoolLearningConceptsTestPage() {
  return (
    <VocabBankQuizView
      questions={SCHOOL_LEARNING_CONCEPTS_QUIZ}
      quizHeading="Learning concepts — Quiz"
      resultsHeading="Learning concepts — Test results"
      backToLessonHref="/vocabulary/school-learning/learning-concepts"
    />
  );
}
