import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TIME_PARTS_OF_DAY_QUIZ } from '@/lib/quizBanks/vocabulary/timeCategoryQuestionBank';

export default function TimePartsOfDayTestPage() {
  return (
    <VocabBankQuizView
      questions={TIME_PARTS_OF_DAY_QUIZ}
      quizHeading="Parts of the day — Quiz"
      resultsHeading="Parts of the day — Test results"
      backToLessonHref="/vocabulary/time/parts-of-day"
    />
  );
}
