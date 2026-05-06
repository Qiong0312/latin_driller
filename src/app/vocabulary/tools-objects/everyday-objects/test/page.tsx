import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TOOLS_EVERYDAY_QUIZ } from '@/lib/quizBanks/vocabulary/toolsObjectsCategoryQuestionBank';

export default function ToolsEverydayTestPage() {
  return (
    <VocabBankQuizView
      questions={TOOLS_EVERYDAY_QUIZ}
      quizHeading="Everyday objects — Quiz"
      resultsHeading="Everyday objects — Test results"
      backToLessonHref="/vocabulary/tools-objects/everyday-objects"
    />
  );
}
