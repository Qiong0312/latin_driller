import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CITY_BUILDINGS_STRUCTURES_QUIZ } from '@/lib/quizBanks/vocabulary/cityBuildingsCategoryQuestionBank';

export default function CityBuildingsStructuresTestPage() {
  return (
    <VocabBankQuizView
      questions={CITY_BUILDINGS_STRUCTURES_QUIZ}
      quizHeading="Buildings & structures — Quiz"
      resultsHeading="Buildings & structures — Test results"
      backToLessonHref="/vocabulary/city-buildings/buildings-structures"
    />
  );
}
