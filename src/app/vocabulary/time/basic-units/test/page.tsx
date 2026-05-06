import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TIME_BASIC_UNITS_QUIZ } from '@/lib/quizBanks/vocabulary/timeCategoryQuestionBank';

export default function TimeBasicUnitsTestPage() {
  return (
    <VocabBankQuizView
      questions={TIME_BASIC_UNITS_QUIZ}
      quizHeading="Basic time units — Quiz"
      resultsHeading="Basic time units — Test results"
      backToLessonHref="/vocabulary/time/basic-units"
    />
  );
}
