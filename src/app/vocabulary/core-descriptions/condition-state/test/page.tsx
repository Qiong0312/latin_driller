import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_DESCRIPTIONS_CONDITION_QUIZ } from '@/lib/quizBanks/vocabulary/coreDescriptionsCategoryQuestionBank';

export default function CoreDescriptionsConditionStateTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_DESCRIPTIONS_CONDITION_QUIZ}
      quizHeading="Condition & State — Quiz"
      resultsHeading="Condition & State — Test results"
      backToLessonHref="/vocabulary/core-descriptions/condition-state"
    />
  );
}
