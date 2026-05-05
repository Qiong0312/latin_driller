import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_DESCRIPTIONS_APPEARANCE_QUIZ } from '@/lib/quizBanks/vocabulary/coreDescriptionsCategoryQuestionBank';

export default function CoreDescriptionsAppearanceColorTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_DESCRIPTIONS_APPEARANCE_QUIZ}
      quizHeading="Basic Appearance & Color — Quiz"
      resultsHeading="Basic Appearance & Color — Test results"
      backToLessonHref="/vocabulary/core-descriptions/appearance-color"
    />
  );
}
