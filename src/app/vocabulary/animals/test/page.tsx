'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { ANIMALS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/animalsCategoryQuestionBank';

export default function AnimalsTestPage() {
  return (
    <CategoryVocabularyTest
      title="Animals — All lessons quiz"
      resultsHeading="Animals — Quiz results"
      backToCategoryHref="/vocabulary/animals"
      backToCategoryLabel="Back to Animalia (Animals)"
      questions={ANIMALS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
