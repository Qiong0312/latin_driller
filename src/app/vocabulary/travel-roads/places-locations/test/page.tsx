import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TRAVEL_PLACES_LOCATIONS_QUIZ } from '@/lib/quizBanks/vocabulary/travelRoadsCategoryQuestionBank';

export default function TravelPlacesLocationsTestPage() {
  return (
    <VocabBankQuizView
      questions={TRAVEL_PLACES_LOCATIONS_QUIZ}
      quizHeading="Places & locations — Quiz"
      resultsHeading="Places & locations — Test results"
      backToLessonHref="/vocabulary/travel-roads/places-locations"
    />
  );
}
