import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from "@/components/CategoryVocabularyTest";
import { MARKETPLACE_CATEGORY_ALL_QUESTIONS } from "@/lib/vocabulary/marketplaceCategoryQuestionBank";

export default function MarketplaceCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Mercātus (Marketplace) — All lessons quiz"
      resultsHeading="Mercātus (Marketplace) — Quiz results"
      backToCategoryHref="/vocabulary/marketplace"
      backToCategoryLabel="Back to Marketplace"
      questions={MARKETPLACE_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
