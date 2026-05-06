import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CITY_PUBLIC_PLACES_QUIZ } from '@/lib/quizBanks/vocabulary/cityBuildingsCategoryQuestionBank';

export default function CityPublicPlacesTestPage() {
  return (
    <VocabBankQuizView
      questions={CITY_PUBLIC_PLACES_QUIZ}
      quizHeading="Public places — Quiz"
      resultsHeading="Public places — Test results"
      backToLessonHref="/vocabulary/city-buildings/public-places"
    />
  );
}
