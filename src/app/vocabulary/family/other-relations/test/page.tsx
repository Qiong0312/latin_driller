import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { FAMILY_OTHER_RELATIONS_QUIZ } from '@/lib/quizBanks/vocabulary/familyCategoryQuestionBank';

export default function FamilyOtherRelationsTestPage() {
  return (
    <VocabBankQuizView
      questions={FAMILY_OTHER_RELATIONS_QUIZ}
      quizHeading="Other Relations - Quiz"
      resultsHeading="Other Relations - Test results"
      backToLessonHref="/vocabulary/family/other-relations"
    />
  );
}
