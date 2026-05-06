import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TRAVEL_DIRECTIONS_DISTANCE_QUIZ } from '@/lib/quizBanks/vocabulary/travelRoadsCategoryQuestionBank';

export default function TravelDirectionsDistanceTestPage() {
  return (
    <VocabBankQuizView
      questions={TRAVEL_DIRECTIONS_DISTANCE_QUIZ}
      quizHeading="Directions & distance — Quiz"
      resultsHeading="Directions & distance — Test results"
      backToLessonHref="/vocabulary/travel-roads/directions-distance"
    />
  );
}
