import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { IRREGULAR_VERBS_COMPOUND_QUIZ } from '@/lib/quizBanks/vocabulary/irregularVerbsCategoryQuestionBank';

export default function IrregularVerbsCompoundTestPage() {
  return (
    <VocabBankQuizView
      questions={IRREGULAR_VERBS_COMPOUND_QUIZ}
      quizHeading="Compound Irregular Verbs — Quiz"
      resultsHeading="Compound Irregular Verbs — Test results"
      backToLessonHref="/vocabulary/irregular-verbs/compound"
    />
  );
}
