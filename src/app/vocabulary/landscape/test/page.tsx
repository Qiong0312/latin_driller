import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from "@/components/CategoryVocabularyTest";
import { LANDSCAPE_CATEGORY_ALL_QUESTIONS } from "@/lib/quizBanks/vocabulary/landscapeCategoryQuestionBank";

export default function LandscapeCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Terra (Land & Landscape) — All lessons quiz"
      resultsHeading="Terra (Land & Landscape) — Quiz results"
      backToCategoryHref="/vocabulary/landscape"
      backToCategoryLabel="Back to Land & Landscape"
      questions={LANDSCAPE_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
