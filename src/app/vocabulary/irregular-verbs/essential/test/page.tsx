import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { IRREGULAR_VERBS_ESSENTIAL_QUIZ } from '@/lib/quizBanks/vocabulary/irregularVerbsCategoryQuestionBank';

export default function IrregularVerbsEssentialTestPage() {
  return (
    <VocabBankQuizView
      questions={IRREGULAR_VERBS_ESSENTIAL_QUIZ}
      quizHeading="Essential Irregular Verbs — Quiz"
      resultsHeading="Essential Irregular Verbs — Test results"
      backToLessonHref="/vocabulary/irregular-verbs/essential"
    />
  );
}
