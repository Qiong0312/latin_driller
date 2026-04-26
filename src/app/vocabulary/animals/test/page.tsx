'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { ANIMALS_CATEGORY_QUIZ } from '@/lib/quizBanks/categoryPools/animalsCategoryQuiz';

export default function AnimalsTestPage() {
  return (
    <CategoryVocabularyTest
      title="Animals — All lessons quiz"
      resultsHeading="Animals — Quiz results"
      backToCategoryHref="/vocabulary/animals"
      backToCategoryLabel="Back to Animalia (Animals)"
      questions={ANIMALS_CATEGORY_QUIZ}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
