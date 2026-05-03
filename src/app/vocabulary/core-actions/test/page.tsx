'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { CORE_ACTIONS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/coreActionsCategoryQuestionBank';

export default function CoreActionsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Core Actions — All lessons quiz"
      resultsHeading="Core Actions — Quiz results"
      backToCategoryHref="/vocabulary/core-actions"
      backToCategoryLabel="Back to Core Actions"
      quizFooterBackLabel="← Back to Core Actions"
      questions={CORE_ACTIONS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
