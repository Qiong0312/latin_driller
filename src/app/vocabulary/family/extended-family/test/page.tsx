import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { FAMILY_EXTENDED_QUIZ } from '@/lib/quizBanks/vocabulary/familyCategoryQuestionBank';

export default function FamilyExtendedTestPage() {
  return (
    <VocabBankQuizView
      questions={FAMILY_EXTENDED_QUIZ}
      quizHeading="Extended Family - Quiz"
      resultsHeading="Extended Family - Test results"
      backToLessonHref="/vocabulary/family/extended-family"
    />
  );
}
