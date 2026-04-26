'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { BODY_PARTS_CATEGORY_QUIZ } from '@/lib/quizBanks/categoryPools/bodyPartsCategoryQuiz';

export default function BodyPartsTestPage() {
  return (
    <CategoryVocabularyTest
      title="Body parts — All lessons quiz"
      resultsHeading="Body parts — Quiz results"
      backToCategoryHref="/vocabulary/body-parts"
      backToCategoryLabel="Back to Corpus (Body Parts)"
      questions={BODY_PARTS_CATEGORY_QUIZ}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
