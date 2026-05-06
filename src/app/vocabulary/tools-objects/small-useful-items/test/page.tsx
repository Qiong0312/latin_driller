import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TOOLS_SMALL_USEFUL_QUIZ } from '@/lib/quizBanks/vocabulary/toolsObjectsCategoryQuestionBank';

export default function ToolsSmallUsefulTestPage() {
  return (
    <VocabBankQuizView
      questions={TOOLS_SMALL_USEFUL_QUIZ}
      quizHeading="Small useful items — Quiz"
      resultsHeading="Small useful items — Test results"
      backToLessonHref="/vocabulary/tools-objects/small-useful-items"
    />
  );
}
