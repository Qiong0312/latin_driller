import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { CLOTHING_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/clothingCategoryQuestionBank';

export default function ClothingCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Clothing (Vestīmenta) — All lessons quiz"
      resultsHeading="Clothing — Quiz results"
      backToCategoryHref="/vocabulary/clothing"
      backToCategoryLabel="Back to Clothing"
      questions={CLOTHING_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
