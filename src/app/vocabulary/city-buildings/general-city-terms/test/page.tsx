import { VocabBankQuizView } from '@/components/VocabBankQuizView';
import { CITY_GENERAL_TERMS_QUIZ } from '@/lib/quizBanks/vocabulary/cityBuildingsCategoryQuestionBank';

export default function CityGeneralTermsTestPage() {
  return (
    <VocabBankQuizView
      questions={CITY_GENERAL_TERMS_QUIZ}
      quizHeading="General city terms — Quiz"
      resultsHeading="General city terms — Test results"
      backToLessonHref="/vocabulary/city-buildings/general-city-terms"
    />
  );
}
