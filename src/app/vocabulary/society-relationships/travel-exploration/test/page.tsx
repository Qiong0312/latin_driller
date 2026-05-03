import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { SOCIETY_TRAVEL_QUIZ } from '@/lib/quizBanks/vocabulary/societyRelationshipsCategoryQuestionBank';

export default function SocietyTravelExplorationTestPage() {
  return (
    <VocabBankQuizView
      questions={SOCIETY_TRAVEL_QUIZ}
      quizHeading="Travel & Exploration — Quiz"
      resultsHeading="Travel & Exploration — Test results"
      backToLessonHref="/vocabulary/society-relationships/travel-exploration"
    />
  );
}
