import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TOOLS_GENERAL_QUIZ } from '@/lib/quizBanks/vocabulary/toolsObjectsCategoryQuestionBank';

export default function ToolsGeneralTestPage() {
  return (
    <VocabBankQuizView
      questions={TOOLS_GENERAL_QUIZ}
      quizHeading="General tools — Quiz"
      resultsHeading="General tools — Test results"
      backToLessonHref="/vocabulary/tools-objects/general-tools"
    />
  );
}
