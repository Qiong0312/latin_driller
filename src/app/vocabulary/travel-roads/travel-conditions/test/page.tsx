import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TRAVEL_CONDITIONS_QUIZ } from '@/lib/quizBanks/vocabulary/travelRoadsCategoryQuestionBank';

export default function TravelConditionsTestPage() {
  return (
    <VocabBankQuizView
      questions={TRAVEL_CONDITIONS_QUIZ}
      quizHeading="Travel conditions — Quiz"
      resultsHeading="Travel conditions — Test results"
      backToLessonHref="/vocabulary/travel-roads/travel-conditions"
    />
  );
}
