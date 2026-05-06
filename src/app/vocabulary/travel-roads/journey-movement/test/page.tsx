import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TRAVEL_JOURNEY_MOVEMENT_QUIZ } from '@/lib/quizBanks/vocabulary/travelRoadsCategoryQuestionBank';

export default function TravelJourneyMovementTestPage() {
  return (
    <VocabBankQuizView
      questions={TRAVEL_JOURNEY_MOVEMENT_QUIZ}
      quizHeading="Journey & movement — Quiz"
      resultsHeading="Journey & movement — Test results"
      backToLessonHref="/vocabulary/travel-roads/journey-movement"
    />
  );
}
