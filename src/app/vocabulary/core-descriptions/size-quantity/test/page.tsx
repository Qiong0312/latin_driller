import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_DESCRIPTIONS_SIZE_QUIZ } from '@/lib/quizBanks/vocabulary/coreDescriptionsCategoryQuestionBank';

export default function CoreDescriptionsSizeQuantityTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_DESCRIPTIONS_SIZE_QUIZ}
      quizHeading="Size & Quantity — Quiz"
      resultsHeading="Size & Quantity — Test results"
      backToLessonHref="/vocabulary/core-descriptions/size-quantity"
    />
  );
}
