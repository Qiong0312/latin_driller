import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_DESCRIPTIONS_PHYSICAL_QUIZ } from '@/lib/quizBanks/vocabulary/coreDescriptionsCategoryQuestionBank';

export default function CoreDescriptionsPhysicalPropertiesTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_DESCRIPTIONS_PHYSICAL_QUIZ}
      quizHeading="Physical Properties — Quiz"
      resultsHeading="Physical Properties — Test results"
      backToLessonHref="/vocabulary/core-descriptions/physical-properties"
    />
  );
}
