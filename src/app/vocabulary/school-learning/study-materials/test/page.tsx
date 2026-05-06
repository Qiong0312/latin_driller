import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SCHOOL_STUDY_MATERIALS_QUIZ } from '@/lib/quizBanks/vocabulary/schoolLearningCategoryQuestionBank';

export default function SchoolStudyMaterialsTestPage() {
  return (
    <VocabBankQuizView
      questions={SCHOOL_STUDY_MATERIALS_QUIZ}
      quizHeading="Study materials — Quiz"
      resultsHeading="Study materials — Test results"
      backToLessonHref="/vocabulary/school-learning/study-materials"
    />
  );
}
