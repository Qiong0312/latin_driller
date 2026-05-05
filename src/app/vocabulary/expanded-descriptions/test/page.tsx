'use client';

import { CategoryVocabularyTest, CATEGORY_QUIZ_MAX_QUESTIONS } from '@/components/CategoryVocabularyTest';
import { EXPANDED_DESCRIPTIONS_CATEGORY_ALL_QUESTIONS } from '@/lib/quizBanks/vocabulary/expandedDescriptionsCategoryQuestionBank';

export default function ExpandedDescriptionsCategoryTestPage() {
  return (
    <CategoryVocabularyTest
      title="Expanded Description — All lessons quiz"
      resultsHeading="Expanded Description — Quiz results"
      backToCategoryHref="/vocabulary/expanded-descriptions"
      backToCategoryLabel="Back to Expanded Description"
      quizFooterBackLabel="← Back to Expanded Description"
      questions={EXPANDED_DESCRIPTIONS_CATEGORY_ALL_QUESTIONS}
      maxQuestions={CATEGORY_QUIZ_MAX_QUESTIONS}
    />
  );
}
