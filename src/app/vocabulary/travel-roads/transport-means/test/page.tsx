import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { TRAVEL_TRANSPORT_MEANS_QUIZ } from '@/lib/quizBanks/vocabulary/travelRoadsCategoryQuestionBank';

export default function TravelTransportMeansTestPage() {
  return (
    <VocabBankQuizView
      questions={TRAVEL_TRANSPORT_MEANS_QUIZ}
      quizHeading="Transport & travel means — Quiz"
      resultsHeading="Transport & travel means — Test results"
      backToLessonHref="/vocabulary/travel-roads/transport-means"
    />
  );
}
