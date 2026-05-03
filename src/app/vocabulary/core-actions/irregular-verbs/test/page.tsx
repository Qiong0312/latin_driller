import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_ACTIONS_IRREGULAR_QUIZ } from '@/lib/quizBanks/vocabulary/coreActionsCategoryQuestionBank';

export default function CoreActionsIrregularTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_ACTIONS_IRREGULAR_QUIZ}
      quizHeading="Core Irregular Verbs — Quiz"
      resultsHeading="Core Irregular Verbs — Test results"
      backToLessonHref="/vocabulary/core-actions/irregular-verbs"
    />
  );
}
