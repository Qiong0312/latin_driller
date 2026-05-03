import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_ACTIONS_THINK_QUIZ } from '@/lib/quizBanks/vocabulary/coreActionsCategoryQuestionBank';

export default function CoreActionsThinkingTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_ACTIONS_THINK_QUIZ}
      quizHeading="Thinking & Knowing — Quiz"
      resultsHeading="Thinking & Knowing — Test results"
      backToLessonHref="/vocabulary/core-actions/thinking-knowing"
    />
  );
}
