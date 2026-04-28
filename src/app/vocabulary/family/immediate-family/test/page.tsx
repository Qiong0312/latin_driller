import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { FAMILY_IMMEDIATE_QUIZ } from '@/lib/quizBanks/vocabulary/familyCategoryQuestionBank';

export default function FamilyImmediateTestPage() {
  return (
    <VocabBankQuizView
      questions={FAMILY_IMMEDIATE_QUIZ}
      quizHeading="Immediate Family - Quiz"
      resultsHeading="Immediate Family - Test results"
      backToLessonHref="/vocabulary/family/immediate-family"
    />
  );
}
