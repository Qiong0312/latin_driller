import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { OCCUPATIONS_ARTS_ENTERTAINMENT_QUIZ } from '@/lib/quizBanks/vocabulary/occupationsCategoryQuestionBank';

export default function OccupationsArtsEntertainmentTestPage() {
  return (
    <VocabBankQuizView
      questions={OCCUPATIONS_ARTS_ENTERTAINMENT_QUIZ}
      quizHeading="Arts & entertainment — Quiz"
      resultsHeading="Arts & entertainment — Test results"
      backToLessonHref="/vocabulary/occupations/arts-entertainment"
    />
  );
}
