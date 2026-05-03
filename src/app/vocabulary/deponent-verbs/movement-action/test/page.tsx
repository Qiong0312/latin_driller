import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { DEPONENT_MOVEMENT_QUIZ } from '@/lib/quizBanks/vocabulary/deponentVerbsCategoryQuestionBank';

export default function DeponentMovementActionTestPage() {
  return (
    <VocabBankQuizView
      questions={DEPONENT_MOVEMENT_QUIZ}
      quizHeading="Movement & Action — Quiz"
      resultsHeading="Movement & Action — Test results"
      backToLessonHref="/vocabulary/deponent-verbs/movement-action"
    />
  );
}
