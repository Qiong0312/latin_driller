import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { TRAVEL_ROADS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/travelRoadsCategoryQuestionBank';

export default function TravelRoadsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Travel & Roads (Iter) — All lessons quiz"
      resultsHeading="Travel & Roads — Quiz results"
      backToCategoryHref="/vocabulary/travel-roads"
      backToCategoryLabel="Back to Travel & Roads"
      questions={TRAVEL_ROADS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
