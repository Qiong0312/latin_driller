import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { EXPANDED_DESCRIPTIONS_SHAPE_QUIZ } from '@/lib/quizBanks/vocabulary/expandedDescriptionsCategoryQuestionBank';

export default function ExpandedDescriptionsShapeFormTestPage() {
  return (
    <VocabBankQuizView
      questions={EXPANDED_DESCRIPTIONS_SHAPE_QUIZ}
      quizHeading="Shape & Form — Quiz"
      resultsHeading="Shape & Form — Test results"
      backToLessonHref="/vocabulary/expanded-descriptions/shape-form"
    />
  );
}
