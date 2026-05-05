'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { CORE_DESCRIPTIONS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/coreDescriptionsCategoryQuestionBank';

export default function CoreDescriptionsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Core Descriptions — All lessons quiz"
      resultsHeading="Core Descriptions — Quiz results"
      backToCategoryHref="/vocabulary/core-descriptions"
      backToCategoryLabel="Back to Core Descriptions"
      quizFooterBackLabel="← Back to Core Descriptions"
      questions={CORE_DESCRIPTIONS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
