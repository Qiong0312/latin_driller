'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { FOOD_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/foodCategoryQuestionBank';

export default function FoodTestPage() {
  return (
    <CategoryVocabularyTest
      title="Food — All lessons quiz"
      resultsHeading="Food — Quiz results"
      backToCategoryHref="/vocabulary/food"
      backToCategoryLabel="Back to Cibus (Food)"
      questions={FOOD_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
