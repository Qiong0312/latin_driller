import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TRAVEL_ENTRY_PASSAGE_QUIZ } from '@/lib/quizBanks/vocabulary/travelRoadsCategoryQuestionBank';

export default function TravelEntryPassageTestPage() {
  return (
    <VocabBankQuizView
      questions={TRAVEL_ENTRY_PASSAGE_QUIZ}
      quizHeading="Entry & passage — Quiz"
      resultsHeading="Entry & passage — Test results"
      backToLessonHref="/vocabulary/travel-roads/entry-passage"
    />
  );
}
