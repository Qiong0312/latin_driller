import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { OCCUPATIONS_MILITARY_GOVERNMENT_QUIZ } from '@/lib/quizBanks/vocabulary/occupationsCategoryQuestionBank';

export default function OccupationsMilitaryGovernmentTestPage() {
  return (
    <VocabBankQuizView
      questions={OCCUPATIONS_MILITARY_GOVERNMENT_QUIZ}
      quizHeading="Military & government — Quiz"
      resultsHeading="Military & government — Test results"
      backToLessonHref="/vocabulary/occupations/military-government"
    />
  );
}
