'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { BODY_PARTS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/bodyPartsCategoryQuestionBank';

export default function BodyPartsTestPage() {
  return (
    <CategoryVocabularyTest
      title="Body parts — All lessons quiz"
      resultsHeading="Body parts — Quiz results"
      backToCategoryHref="/vocabulary/body-parts"
      backToCategoryLabel="Back to Corpus (Body Parts)"
      questions={BODY_PARTS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
