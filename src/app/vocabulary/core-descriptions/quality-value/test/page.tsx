import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_DESCRIPTIONS_QUALITY_QUIZ } from '@/lib/quizBanks/vocabulary/coreDescriptionsCategoryQuestionBank';

export default function CoreDescriptionsQualityValueTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_DESCRIPTIONS_QUALITY_QUIZ}
      quizHeading="Quality & Value — Quiz"
      resultsHeading="Quality & Value — Test results"
      backToLessonHref="/vocabulary/core-descriptions/quality-value"
    />
  );
}
