import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CITY_INFRASTRUCTURE_QUIZ } from '@/lib/quizBanks/vocabulary/cityBuildingsCategoryQuestionBank';

export default function CityInfrastructureTestPage() {
  return (
    <VocabBankQuizView
      questions={CITY_INFRASTRUCTURE_QUIZ}
      quizHeading="City infrastructure — Quiz"
      resultsHeading="City infrastructure — Test results"
      backToLessonHref="/vocabulary/city-buildings/city-infrastructure"
    />
  );
}
