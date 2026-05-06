import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SCHOOL_LANGUAGE_CONTENT_QUIZ } from '@/lib/quizBanks/vocabulary/schoolLearningCategoryQuestionBank';

export default function SchoolLanguageContentTestPage() {
  return (
    <VocabBankQuizView
      questions={SCHOOL_LANGUAGE_CONTENT_QUIZ}
      quizHeading="Language & content — Quiz"
      resultsHeading="Language & content — Test results"
      backToLessonHref="/vocabulary/school-learning/language-content"
    />
  );
}
