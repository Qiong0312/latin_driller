import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CORE_ACTIONS_SENS_QUIZ } from '@/lib/quizBanks/vocabulary/coreActionsCategoryQuestionBank';

export default function CoreActionsSensesTestPage() {
  return (
    <VocabBankQuizView
      questions={CORE_ACTIONS_SENS_QUIZ}
      quizHeading="Senses & Perception — Quiz"
      resultsHeading="Senses & Perception — Test results"
      backToLessonHref="/vocabulary/core-actions/senses-perception"
    />
  );
}
