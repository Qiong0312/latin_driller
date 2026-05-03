import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_ACTIONS_DAILY_QUIZ } from '@/lib/quizBanks/vocabulary/coreActionsCategoryQuestionBank';

export default function CoreActionsDailyTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_ACTIONS_DAILY_QUIZ}
      quizHeading="Daily Actions — Quiz"
      resultsHeading="Daily Actions — Test results"
      backToLessonHref="/vocabulary/core-actions/daily-actions"
    />
  );
}
