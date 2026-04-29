import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { OCCUPATIONS_GENERAL_QUIZ } from '@/lib/quizBanks/vocabulary/occupationsCategoryQuestionBank';

export default function OccupationsGeneralTestPage() {
  return (
    <VocabBankQuizView
      questions={OCCUPATIONS_GENERAL_QUIZ}
      quizHeading="General occupations — Quiz"
      resultsHeading="General occupations — Test results"
      backToLessonHref="/vocabulary/occupations/general"
    />
  );
}
