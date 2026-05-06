import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CITY_BUILDING_PARTS_QUIZ } from '@/lib/quizBanks/vocabulary/cityBuildingsCategoryQuestionBank';

export default function CityBuildingPartsTestPage() {
  return (
    <VocabBankQuizView
      questions={CITY_BUILDING_PARTS_QUIZ}
      quizHeading="Parts of buildings — Quiz"
      resultsHeading="Parts of buildings — Test results"
      backToLessonHref="/vocabulary/city-buildings/building-parts"
    />
  );
}
