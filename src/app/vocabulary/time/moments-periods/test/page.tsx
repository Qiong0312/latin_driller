import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TIME_MOMENTS_PERIODS_QUIZ } from '@/lib/quizBanks/vocabulary/timeCategoryQuestionBank';

export default function TimeMomentsPeriodsTestPage() {
  return (
    <VocabBankQuizView
      questions={TIME_MOMENTS_PERIODS_QUIZ}
      quizHeading="Specific moments & periods — Quiz"
      resultsHeading="Specific moments & periods — Test results"
      backToLessonHref="/vocabulary/time/moments-periods"
    />
  );
}
