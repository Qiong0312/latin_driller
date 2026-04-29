import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { OCCUPATIONS_CRAFTS_TRADES_QUIZ } from '@/lib/quizBanks/vocabulary/occupationsCategoryQuestionBank';

export default function OccupationsCraftsTradesTestPage() {
  return (
    <VocabBankQuizView
      questions={OCCUPATIONS_CRAFTS_TRADES_QUIZ}
      quizHeading="Crafts & trades — Quiz"
      resultsHeading="Crafts & trades — Test results"
      backToLessonHref="/vocabulary/occupations/crafts-trades"
    />
  );
}
