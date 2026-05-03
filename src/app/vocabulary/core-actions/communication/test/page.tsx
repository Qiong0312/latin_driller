import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_ACTIONS_COMM_QUIZ } from '@/lib/quizBanks/vocabulary/coreActionsCategoryQuestionBank';

export default function CoreActionsCommunicationTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_ACTIONS_COMM_QUIZ}
      quizHeading="Communication — Quiz"
      resultsHeading="Communication — Test results"
      backToLessonHref="/vocabulary/core-actions/communication"
    />
  );
}
