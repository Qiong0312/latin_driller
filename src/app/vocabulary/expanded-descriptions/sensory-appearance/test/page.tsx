import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { EXPANDED_DESCRIPTIONS_SENSORY_QUIZ } from '@/lib/quizBanks/vocabulary/expandedDescriptionsCategoryQuestionBank';

export default function ExpandedDescriptionsSensoryAppearanceTestPage() {
  return (
    <VocabBankQuizView
      questions={EXPANDED_DESCRIPTIONS_SENSORY_QUIZ}
      quizHeading="Sensory & Appearance — Quiz"
      resultsHeading="Sensory & Appearance — Test results"
      backToLessonHref="/vocabulary/expanded-descriptions/sensory-appearance"
    />
  );
}
