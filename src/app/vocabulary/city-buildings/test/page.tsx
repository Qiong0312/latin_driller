import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { CITY_BUILDINGS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/cityBuildingsCategoryQuestionBank';

export default function CityBuildingsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="City & Buildings (Urbs) — All lessons quiz"
      resultsHeading="City & Buildings — Quiz results"
      backToCategoryHref="/vocabulary/city-buildings"
      backToCategoryLabel="Back to City & Buildings"
      questions={CITY_BUILDINGS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
