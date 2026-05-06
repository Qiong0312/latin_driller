import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TOOLS_CUTTING_WORK_QUIZ } from '@/lib/quizBanks/vocabulary/toolsObjectsCategoryQuestionBank';

export default function ToolsCuttingWorkTestPage() {
  return (
    <VocabBankQuizView
      questions={TOOLS_CUTTING_WORK_QUIZ}
      quizHeading="Cutting & work tools — Quiz"
      resultsHeading="Cutting & work tools — Test results"
      backToLessonHref="/vocabulary/tools-objects/cutting-work-tools"
    />
  );
}
