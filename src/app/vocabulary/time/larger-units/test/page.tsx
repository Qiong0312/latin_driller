import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TIME_LARGER_UNITS_QUIZ } from '@/lib/quizBanks/vocabulary/timeCategoryQuestionBank';

export default function TimeLargerUnitsTestPage() {
  return (
    <VocabBankQuizView
      questions={TIME_LARGER_UNITS_QUIZ}
      quizHeading="Larger time units — Quiz"
      resultsHeading="Larger time units — Test results"
      backToLessonHref="/vocabulary/time/larger-units"
    />
  );
}
