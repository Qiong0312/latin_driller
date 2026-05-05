import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { EXPANDED_DESCRIPTIONS_POSITION_QUIZ } from '@/lib/quizBanks/vocabulary/expandedDescriptionsCategoryQuestionBank';

export default function ExpandedDescriptionsPositionDirectionTestPage() {
  return (
    <VocabBankQuizView
      questions={EXPANDED_DESCRIPTIONS_POSITION_QUIZ}
      quizHeading="Position & Direction — Quiz"
      resultsHeading="Position & Direction — Test results"
      backToLessonHref="/vocabulary/expanded-descriptions/position-direction"
    />
  );
}
