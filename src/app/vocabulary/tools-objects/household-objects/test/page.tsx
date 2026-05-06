import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TOOLS_HOUSEHOLD_QUIZ } from '@/lib/quizBanks/vocabulary/toolsObjectsCategoryQuestionBank';

export default function ToolsHouseholdTestPage() {
  return (
    <VocabBankQuizView
      questions={TOOLS_HOUSEHOLD_QUIZ}
      quizHeading="Household objects — Quiz"
      resultsHeading="Household objects — Test results"
      backToLessonHref="/vocabulary/tools-objects/household-objects"
    />
  );
}
