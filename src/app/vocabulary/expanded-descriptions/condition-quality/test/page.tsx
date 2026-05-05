import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { EXPANDED_DESCRIPTIONS_CONDITION_QUIZ } from '@/lib/quizBanks/vocabulary/expandedDescriptionsCategoryQuestionBank';

export default function ExpandedDescriptionsConditionQualityTestPage() {
  return (
    <VocabBankQuizView
      questions={EXPANDED_DESCRIPTIONS_CONDITION_QUIZ}
      quizHeading="Condition & Quality — Quiz"
      resultsHeading="Condition & Quality — Test results"
      backToLessonHref="/vocabulary/expanded-descriptions/condition-quality"
    />
  );
}
