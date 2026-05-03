import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { IRREGULAR_VERBS_COMMON_QUIZ } from '@/lib/quizBanks/vocabulary/irregularVerbsCategoryQuestionBank';

export default function IrregularVerbsCommonTestPage() {
  return (
    <VocabBankQuizView
      questions={IRREGULAR_VERBS_COMMON_QUIZ}
      quizHeading="Common High-Frequency Irregulars — Quiz"
      resultsHeading="Common High-Frequency Irregulars — Test results"
      backToLessonHref="/vocabulary/irregular-verbs/common-irregulars"
    />
  );
}
