import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { DEPONENT_SEMI_QUIZ } from '@/lib/quizBanks/vocabulary/deponentVerbsCategoryQuestionBank';

export default function DeponentSemiDeponentTestPage() {
  return (
    <VocabBankQuizView
      questions={DEPONENT_SEMI_QUIZ}
      quizHeading="Semi-Deponent Verbs (Advanced) — Quiz"
      resultsHeading="Semi-Deponent Verbs (Advanced) — Test results"
      backToLessonHref="/vocabulary/deponent-verbs/semi-deponent"
    />
  );
}
