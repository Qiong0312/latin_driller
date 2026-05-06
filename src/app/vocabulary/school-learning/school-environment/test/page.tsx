import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SCHOOL_ENVIRONMENT_QUIZ } from '@/lib/quizBanks/vocabulary/schoolLearningCategoryQuestionBank';

export default function SchoolEnvironmentTestPage() {
  return (
    <VocabBankQuizView
      questions={SCHOOL_ENVIRONMENT_QUIZ}
      quizHeading="School environment — Quiz"
      resultsHeading="School environment — Test results"
      backToLessonHref="/vocabulary/school-learning/school-environment"
    />
  );
}
